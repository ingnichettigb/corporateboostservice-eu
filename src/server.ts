import "./lib/error-capture";

import { AsyncLocalStorage } from "node:async_hooks";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { DEFAULT_LANG, isLang, localizePath, splitLangPath, type Lang } from "./lib/locale";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

const CANONICAL_ORIGIN = "https://corporateboostservice.eu";

// Pagine rimosse: una sola destinazione finale, mai catene di redirect.
const REMOVED_PATHS: Record<string, string> = {
  "/moca-serbatoi": "/applicazioni",
  "/assistenza-gdpr": "/corso-privacy-gdpr",
};

// Lingua della richiesta corrente, letta da `currentLang()` in src/i18n/index.ts
// (head(), loader e funzioni fuori dai componenti React).
const langStore = new AsyncLocalStorage<{ lang: Lang }>();
(globalThis as { __cbsLangStore?: typeof langStore }).__cbsLangStore = langStore;

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      const isCanonicalHost = url.hostname === "corporateboostservice.eu";
      const usesWwwHost = url.hostname === "www.corporateboostservice.eu";

      // Lingua dal prefisso (/de/...). "/it/..." non esiste: l'italiano è senza prefisso.
      const explicitIt = /^\/it(?=\/|$)/.test(url.pathname);
      const pathname = explicitIt ? url.pathname.slice(3) || "/" : url.pathname;
      const { lang: pathLang, path: barePath } = splitLangPath(pathname);

      // Vecchi URL con parametro (?lang=de): redirect permanente all'URL con prefisso.
      const queryLangRaw = url.searchParams.get("lang");
      const queryLang = isLang(queryLangRaw) ? queryLangRaw : null;
      const targetLang: Lang = queryLang ?? pathLang;

      const hasTrailingSlash = barePath.length > 1 && barePath.endsWith("/");
      const normalizedPath = hasTrailingSlash ? barePath.replace(/\/+$/, "") : barePath;
      const finalBarePath = REMOVED_PATHS[normalizedPath] ?? normalizedPath;

      // Normalizza host, slash finale, pagine rimosse, prefisso lingua e ?lang= in UN SOLO 301.
      const needsRedirect =
        usesWwwHost || hasTrailingSlash || explicitIt || queryLang !== null || finalBarePath !== barePath;

      if (needsRedirect) {
        url.pathname = localizePath(finalBarePath, targetLang);
        if (queryLang !== null) url.searchParams.delete("lang");
        if (usesWwwHost || (isCanonicalHost && url.protocol !== "https:")) {
          url.hostname = "corporateboostservice.eu";
          url.protocol = "https:";
        }

        return new Response(null, {
          status: 301,
          headers: {
            Location: url.toString(),
            "Cache-Control": "public, max-age=3600",
          },
        });
      }

      const handler = await getServerEntry();
      const response = await langStore.run({ lang: pathLang ?? DEFAULT_LANG }, () =>
        handler.fetch(request, env, ctx),
      );
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};

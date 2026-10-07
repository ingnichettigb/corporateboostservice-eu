import { useEffect, useMemo, useRef } from "react";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/lib/cart";
import { baseI18n, currentLang } from "@/i18n";
import { seoText } from "@/i18n/seo";
import { DEFAULT_LANG, LANGS, OG_LOCALE, absoluteUrl, isItalianOnly, splitLangPath } from "@/lib/locale";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-muted-foreground">La pagina che stai cercando non esiste o è stata spostata.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Torna alla home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: import("@tanstack/react-router").ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Qualcosa è andato storto</h1>
        <p className="mt-2 text-sm text-muted-foreground">Riprova o torna alla home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Riprova</button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: ({ matches }) => {
    const lang = currentLang();
    const rawPath = matches[matches.length - 1]?.pathname ?? "/";
    // Il server reindirizza gli URL con slash finale: canonical e hreflang senza slash.
    const path = rawPath.length > 1 ? rawPath.replace(/\/+$/, "") : rawPath;
    // Pagina inesistente / articolo non trovato: nessun canonical né hreflang, e noindex.
    const missing = matches.length < 2 || matches.some((m) => m.status === "notFound");
    const italianOnly = isItalianOnly(path);
    // Contenuto solo in italiano: in ogni lingua il canonical è la versione italiana.
    const selfUrl = absoluteUrl(path, italianOnly ? DEFAULT_LANG : lang);
    const seo = seoText("root");
    const image =
      "https://storage.googleapis.com/gpt-engineer-file-uploads/0yS65EUwnpUx9OQts7qM6xTJ5vi2/social-images/social-1780992527903-Copilot_20260609_100822.webp";

    const alternates =
      missing || italianOnly
        ? []
        : [
            ...LANGS.map((l) => ({ rel: "alternate", hrefLang: l, href: absoluteUrl(path, l) })),
            { rel: "alternate", hrefLang: "x-default", href: absoluteUrl(path, DEFAULT_LANG) },
          ];

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.title },
        { name: "twitter:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { name: "twitter:description", content: seo.description },
        { property: "og:image", content: image },
        { name: "twitter:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "CorporateBoostService.eu" },
        { property: "og:locale", content: OG_LOCALE[lang] },
        ...LANGS.filter((l) => l !== lang).map((l) => ({ property: "og:locale:alternate", content: OG_LOCALE[l] })),
        ...(missing ? [{ name: "robots", content: "noindex" }] : [{ property: "og:url", content: selfUrl }]),
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        ...(missing ? [] : [{ rel: "canonical", href: selfUrl }]),
        ...alternates,
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const lang = useRouterState({ select: (st) => splitLangPath(st.location.publicHref).lang });
  return (
    <html lang={lang}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KG4HK1E2WQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KG4HK1E2WQ');
            `,
          }}
        />
        <HeadContent />
      </head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = useRouterState({ select: (s) => splitLangPath(s.location.publicHref).lang });
  // Un'istanza i18next per lingua (condivide le traduzioni): la lingua dei componenti segue l'URL
  // sia sul server (per richiesta) sia nel browser, senza stato globale da sincronizzare.
  const i18nForLang = useMemo(() => baseI18n.cloneInstance({ lng: lang }), [lang]);
  const isFirstRender = useRef(true);

  // GA4: page_view anche sui cambi di rotta client-side (SPA).
  // Il config iniziale già traccia il primo caricamento: lo saltiamo.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", "page_view", {
      page_path: pathname,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [pathname]);

  return (
    <I18nextProvider i18n={i18nForLang}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Outlet />
          <Toaster richColors position="top-right" />
        </CartProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
}

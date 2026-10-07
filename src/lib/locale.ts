// Lingue del sito e utilità per gli URL con prefisso di lingua.
// Italiano = lingua di default, senza prefisso (/pedflow).
// Le altre lingue usano un prefisso: /en/pedflow, /de/pedflow, /es/pedflow.

export const LANGS = ["it", "en", "de", "es"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "it";
export const SITE_ORIGIN = "https://corporateboostservice.eu";

export const OG_LOCALE: Record<Lang, string> = { it: "it_IT", en: "en_GB", de: "de_DE", es: "es_ES" };
export const LD_LANGUAGE: Record<Lang, string> = { it: "it-IT", en: "en-GB", de: "de-DE", es: "es-ES" };

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value);
}

/** "/de/pedflow?x=1" -> { lang: "de", path: "/pedflow?x=1" }; "/de" -> { lang: "de", path: "/" } */
export function splitLangPath(pathname: string): { lang: Lang; path: string } {
  const m = /^\/(en|de|es)(?=[/?#]|$)(.*)$/.exec(pathname);
  if (!m) return { lang: DEFAULT_LANG, path: pathname || "/" };
  const rest = m[2];
  return { lang: m[1] as Lang, path: !rest || rest[0] === "?" || rest[0] === "#" ? `/${rest}` : rest };
}

/** Aggiunge (o sostituisce) il prefisso di lingua a un percorso. */
export function localizePath(path: string, lang: Lang): string {
  const bare = splitLangPath(path).path;
  if (lang === DEFAULT_LANG) return bare;
  return bare === "/" ? `/${lang}` : `/${lang}${bare}`;
}

/** URL assoluto di una pagina in una data lingua (per canonical, hreflang, sitemap). */
export function absoluteUrl(path: string, lang: Lang): string {
  const localized = localizePath(path, lang);
  return `${SITE_ORIGIN}${localized === "/" ? "/" : localized}`;
}

/**
 * Pagine il cui contenuto esiste solo in italiano: nelle altre lingue il canonical punta alla
 * versione italiana e non si dichiarano alternate hreflang (evita duplicati agli occhi di Google).
 * Quando la pagina viene tradotta, basta rimuoverla da questo elenco.
 */
export const ITALIAN_ONLY_PATHS: readonly string[] = ["/registro-credenziali-fornitori"];

export function isItalianOnly(path: string): boolean {
  return ITALIAN_ONLY_PATHS.includes(splitLangPath(path).path.split(/[?#]/)[0]);
}

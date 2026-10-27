/**
 * File: landing-seo-catalog.ts · Percorso: src/data/landing-seo-catalog.ts · Ultima modifica: 27/10/2026
 * Scopo: registro SEO delle landing prioritarie. Contiene solo riferimenti (chiavi di traduzione,
 * immagine social, tipo di schema, lastmod): i testi restano nei file i18n.
 * lastmod (AAAA-MM-GG) si aggiorna a mano solo quando cambia davvero il contenuto della pagina.
 */
import i18n from "@/i18n";
import { currentLang } from "@/i18n";
import { LD_LANGUAGE, SITE_ORIGIN, absoluteUrl } from "@/lib/locale";

export interface LandingSeoEntry {
  path: string;
  titleKey: string;
  descriptionKey: string;
  /** Percorso pubblico dell'immagine social 1200x630 (cartella public/og/). */
  image: string;
  schemaType: "SoftwareApplication";
  lastmod: string;
}

export const landingSeoCatalog: LandingSeoEntry[] = [
  { path: "/taratura-serbatoi", titleKey: "taratura:metaTitle", descriptionKey: "taratura:metaDescription", image: "/og/taratura-serbatoi.jpg", schemaType: "SoftwareApplication", lastmod: "2026-10-26" },
  { path: "/pedflow", titleKey: "pedflow:metaTitle", descriptionKey: "pedflow:metaDescription", image: "/og/pedflow.jpg", schemaType: "SoftwareApplication", lastmod: "2026-10-27" },
  { path: "/riciclo-ppwr", titleKey: "ricicloPpwr:metaTitle", descriptionKey: "ricicloPpwr:metaDescription", image: "/og/riciclo-ppwr.jpg", schemaType: "SoftwareApplication", lastmod: "2026-10-27" },
  { path: "/minifat", titleKey: "minifat.metaTitle", descriptionKey: "minifat.metaDescription", image: "/og/minifat.jpg", schemaType: "SoftwareApplication", lastmod: "2026-10-27" },
];

/** Immagine social generica del sito (ripiego finché manca il file dedicato). */
const FALLBACK_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/0yS65EUwnpUx9OQts7qM6xTJ5vi2/social-images/social-1780992527903-Copilot_20260609_100822.webp";

// File presenti in public/og/ al momento della build: se il file dedicato non c'è si usa il ripiego.
const ogFiles = new Set(
  Object.keys(import.meta.glob("/public/og/*.jpg", { query: "?url", import: "default" })).map((p) =>
    p.replace(/^\/public/, ""),
  ),
);

export function getLandingSeo(path: string): LandingSeoEntry {
  const entry = landingSeoCatalog.find((e) => e.path === path);
  if (!entry) throw new Error(`Landing non censita nel registro SEO: ${path}`);
  return entry;
}

/** head() completo (meta + JSON-LD) per una landing censita, nella lingua corrente. */
export function landingHead(path: string) {
  const e = getLandingSeo(path);
  const lang = currentLang();
  const title = i18n.t(e.titleKey);
  const description = i18n.t(e.descriptionKey);
  const image = ogFiles.has(e.image) ? `${SITE_ORIGIN}${e.image}` : FALLBACK_IMAGE;
  const url = absoluteUrl(e.path, lang);
  const isDedicated = image !== FALLBACK_IMAGE;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: i18n.t("nav.home"), item: absoluteUrl("/", lang) },
      { "@type": "ListItem", position: 2, name: i18n.t("nav.applicazioni"), item: absoluteUrl("/applicazioni", lang) },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };
  const app = {
    "@context": "https://schema.org",
    "@type": e.schemaType,
    name: title,
    description,
    url,
    inLanguage: LD_LANGUAGE[lang],
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    image,
    provider: { "@type": "Organization", name: "CorporateBoostService.eu", url: SITE_ORIGIN },
  };

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: image },
      ...(isDedicated
        ? [
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
          ]
        : []),
      { property: "og:image:alt", content: title },
      { name: "twitter:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
      { type: "application/ld+json", children: JSON.stringify(app) },
    ],
  };
}

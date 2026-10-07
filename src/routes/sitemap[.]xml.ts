import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { articles } from "@/lib/blog";
import { DEFAULT_LANG, LANGS, absoluteUrl, isItalianOnly } from "@/lib/locale";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/applicazioni", changefreq: "weekly", priority: "0.9" },
  { path: "/corsi", changefreq: "weekly", priority: "0.9" },
  { path: "/prezzi", changefreq: "weekly", priority: "0.9" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  ...articles.map((a) => ({
    path: `/blog/${a.slug}`,
    changefreq: "monthly" as const,
    priority: "0.7",
  })),
  { path: "/pedflow", changefreq: "monthly", priority: "0.8" },
  { path: "/minifat", changefreq: "monthly", priority: "0.8" },
  { path: "/smart-maintenance", changefreq: "monthly", priority: "0.8" },
  { path: "/agenda-share", changefreq: "monthly", priority: "0.8" },
  { path: "/registro-credenziali-fornitori", changefreq: "monthly", priority: "0.8" },
  { path: "/riciclo-ppwr", changefreq: "monthly", priority: "0.8" },
  { path: "/corso-privacy-gdpr", changefreq: "monthly", priority: "0.8" },
  { path: "/corso-gdpr-incaricati", changefreq: "monthly", priority: "0.8" },
  { path: "/mappa-del-sito", changefreq: "monthly", priority: "0.4" },
  { path: "/legal", changefreq: "yearly", priority: "0.3" },
  { path: "/termini-e-condizioni", changefreq: "yearly", priority: "0.3" },
  { path: "/termini-di-servizio", changefreq: "yearly", priority: "0.3" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/politica-di-rimborso", changefreq: "yearly", priority: "0.3" },
  { path: "/pagamenti-merchant-of-record", changefreq: "yearly", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // Ogni lingua ha un URL proprio (/de/..., /en/..., /es/...) con canonical autoreferenziale:
        // ogni versione è elencata come <url> e dichiara tutte le alternate (inclusa sé stessa).
        // Le pagine solo in italiano compaiono una volta sola, senza alternate.
        const urls = entries.flatMap((e) => {
          const meta = [
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
          ];
          if (isItalianOnly(e.path)) {
            return [
              ["  <url>", `    <loc>${absoluteUrl(e.path, DEFAULT_LANG)}</loc>`, ...meta, "  </url>"]
                .filter(Boolean)
                .join("\n"),
            ];
          }
          const alternates = [
            ...LANGS.map(
              (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${absoluteUrl(e.path, l)}"/>`,
            ),
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(e.path, DEFAULT_LANG)}"/>`,
          ];
          return LANGS.map((l) =>
            ["  <url>", `    <loc>${absoluteUrl(e.path, l)}</loc>`, ...alternates, ...meta, "  </url>"]
              .filter(Boolean)
              .join("\n"),
          );
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=UTF-8",
            "X-Content-Type-Options": "nosniff",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

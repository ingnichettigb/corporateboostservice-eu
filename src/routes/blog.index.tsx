import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, Tags } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogSponsoredSidebar } from "@/components/BlogSponsoredSidebar";
import { articles, collectTopics, formatDate, pickTranslation } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Approfondimenti per imprese | CorporateBoostService.eu" },
      {
        name: "description",
        content:
          "Articoli e guide pratiche su digitalizzazione, sicurezza degli accessi, manutenzione e adempimenti per imprese e professionisti.",
      },
      { property: "og:title", content: "Blog — Approfondimenti per imprese" },
      {
        property: "og:description",
        content:
          "Guide pratiche su digitalizzazione, sicurezza degli accessi e adempimenti per le imprese.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://corporateboostservice.eu/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://corporateboostservice.eu/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const { t, i18n } = useTranslation("blog");
  const { t: tc } = useTranslation();
  const lang = i18n.language || "it";
  const [topic, setTopic] = useState<string | null>(null);

  const topics = useMemo(() => collectTopics(lang), [lang]);
  const visible = useMemo(
    () =>
      topic
        ? articles.filter((a) => (pickTranslation(a, lang)?.topics ?? []).includes(topic))
        : articles,
    [topic, lang],
  );



  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        {tc("skip")}
      </a>
      <SiteHeader />
      <main id="main">
        <section className="pt-36 pb-14 [background:var(--gradient-section-hero)] border-b-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">{t("kicker")}</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-foreground/85">{t("subtitle")}</p>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1 w-full">
              {articles.length === 0 ? (
                <p className="text-lg text-foreground/80">{t("empty")}</p>
              ) : (
                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                  {articles.map((a) => {
                    const tr = pickTranslation(a, lang);
                    return (
                      <article
                        key={a.slug}
                        className="flex flex-col rounded-2xl border-2 border-primary/20 bg-white shadow-[var(--shadow-card)] overflow-hidden"
                      >
                        {a.coverUrl && (
                          <img
                            src={a.coverUrl}
                            alt={a.coverAlt ?? tr.title}
                            loading="lazy"
                            width={1280}
                            height={720}
                            className="w-full aspect-video object-cover"
                          />
                        )}
                        <div className="flex flex-1 flex-col p-6">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center rounded-md bg-primary px-2.5 py-1 text-xs font-bold tracking-widest text-primary-foreground font-mono">
                              {a.number}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70">
                              <CalendarDays className="h-4 w-4" aria-hidden />
                              {formatDate(a.date, lang)}
                            </span>
                            {tr.readingTime && (
                              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70">
                                <Clock className="h-4 w-4" aria-hidden />
                                {tr.readingTime}
                              </span>
                            )}
                          </div>
                          <h2 className="mt-3 text-xl font-bold leading-snug text-foreground">
                            {tr.title}
                          </h2>
                          <p className="mt-3 text-base leading-relaxed text-foreground/80">
                            {tr.excerpt}
                          </p>
                          <Link
                            to="/blog/$slug"
                            params={{ slug: a.slug }}
                            className="mt-6 inline-flex items-center justify-center gap-2 min-h-11 rounded-lg bg-primary px-4 font-semibold text-primary-foreground hover:bg-primary/90"
                          >
                            {t("read")} <ArrowRight className="h-4 w-4" aria-hidden />
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
            <BlogSponsoredSidebar label={t("sponsored")} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

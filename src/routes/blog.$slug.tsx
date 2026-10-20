import { currentLang } from "@/i18n";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MediaCode } from "@/components/MediaCode";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogSponsoredSidebar } from "@/components/BlogSponsoredSidebar";
import { articleBlocks, formatDate, getArticle, pickTranslation, type BlogBlock } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    const it = pickTranslation(article, currentLang());
    return {
      slug: article.slug,
      title: it.title,
      excerpt: it.excerpt,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Articolo non disponibile — CorporateBoostService.eu" }, { name: "robots", content: "noindex" }],
      };
    }
    return {
      meta: [
        { title: `${loaderData.title} — Blog CorporateBoostService.eu` },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  const { t } = useTranslation("blog");
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-40 pb-24">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-foreground">{t("notFoundTitle")}</h1>
          <p className="mt-3 text-lg text-foreground/80">{t("notFoundText")}</p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 min-h-11 rounded-lg bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> {t("back")}
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

/** Formattazione inline del Markdown: **grassetto**, *corsivo*, `codice`. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**"))
          return (
            <strong key={i} className="font-bold text-foreground">
              {p.slice(2, -2)}
            </strong>
          );
        if (p.startsWith("*") && p.endsWith("*") && p.length > 2) return <em key={i}>{p.slice(1, -1)}</em>;
        if (p.startsWith("`") && p.endsWith("`"))
          return (
            <code key={i} className="rounded bg-primary/10 px-1.5 py-0.5 text-base font-mono">
              {p.slice(1, -1)}
            </code>
          );
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

function Block({ block, asset, mediaCode }: { block: BlogBlock; asset: (f: string) => string | undefined; mediaCode?: string }) {
  switch (block.type) {
    case "heading2":
      return <h2 className="mt-12 text-2xl md:text-3xl font-bold text-foreground">{block.text}</h2>;
    case "heading3":
      return <h3 className="mt-8 text-xl md:text-2xl font-bold text-foreground">{block.text}</h3>;
    case "paragraph":
      return (
        <p className="mt-5 text-lg leading-relaxed text-foreground/85">
          <Inline text={block.text} />
        </p>
      );

    case "list":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-lg leading-relaxed text-foreground/85">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
              <span><Inline text={item} /></span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-8 rounded-2xl border-l-4 border-primary bg-primary/5 px-6 py-5 text-lg font-semibold italic leading-relaxed text-foreground">
          {block.text}
        </blockquote>
      );
    case "image": {
      const url = asset(block.src);
      if (!url) return null;
      return (
        <figure className="mt-10">
          <img
            src={url}
            alt={block.caption ?? ""}
            loading="lazy"
            width={1280}
            height={720}
            className="w-full aspect-video rounded-2xl border-2 border-primary/15 object-cover"
          />
          {mediaCode && <MediaCode id={mediaCode} />}
          {block.caption && (
            <figcaption className="mt-3 text-base text-foreground/65">{block.caption}</figcaption>
          )}
        </figure>
      );
    }
    case "cta":
      return (
        <div className="mt-10">
          <Link
            to={block.link as "/applicazioni"}
            className="inline-flex items-center justify-center gap-2 min-h-12 rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {block.text} <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      );
    default:
      return null;
  }
}

function ArticlePage() {
  const { slug } = Route.useParams();
  const { t, i18n } = useTranslation("blog");
  const { t: tc } = useTranslation();
  const lang = i18n.language || "it";
  const article = getArticle(slug);
  if (!article) return <ArticleNotFound />;
  const tr = pickTranslation(article, lang);

  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        {tc("skip")}
      </a>
      <SiteHeader />
      <main id="main">
        <section className="pt-32 pb-10 [background:var(--gradient-section-hero)] border-b-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-[1140px]">
            <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-foreground/70" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary">
                {t("home")}
              </Link>
              <span aria-hidden>/</span>
              <Link to="/blog" className="hover:text-primary">
                {t("title")}
              </Link>
              <span aria-hidden>/</span>
              <span className="text-foreground">
                {article.number} · {tr.title}
              </span>
            </nav>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm font-bold tracking-widest text-primary-foreground font-mono">
                {t("article")} {article.number}
              </span>
              <span className="inline-flex items-center gap-1.5 text-base font-semibold text-foreground/75">
                <CalendarDays className="h-4 w-4" aria-hidden /> {formatDate(article.date, lang)}
              </span>
              {tr.readingTime && (
                <span className="inline-flex items-center gap-1.5 text-base font-semibold text-foreground/75">
                  <Clock className="h-4 w-4" aria-hidden /> {tr.readingTime}
                </span>
              )}
              {article.author && (
                <span className="inline-flex items-center gap-1.5 text-base font-semibold text-foreground/75">
                  <User className="h-4 w-4" aria-hidden /> {t("by")} {article.author}
                </span>
              )}
            </div>

            <h1 className="mt-5 max-w-[820px] text-3xl md:text-5xl font-bold leading-tight tracking-tight text-foreground">
              {tr.title}
            </h1>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-[1140px] py-12 flex flex-col lg:flex-row gap-12 items-start">
          <article className="w-full lg:max-w-[720px]">
            {article.coverUrl && (
              <img
                src={article.coverUrl}
                alt={article.coverAlt ?? tr.title}
                width={1280}
                height={720}
                className="w-full aspect-video rounded-2xl border-2 border-primary/15 object-cover"
              />
            )}
            {article.coverUrl && (
              <MediaCode id={`BLOG-${article.number}-001`} />
            )}
            <p className="mt-8 text-xl font-semibold leading-relaxed text-foreground">{tr.excerpt}</p>
            {(() => {
              let fig = article.coverUrl ? 1 : 0;
              return articleBlocks(tr).map((block, i) => {
                const code = block.type === "image" && article.asset(block.src)
                  ? `BLOG-${article.number}-${String(++fig).padStart(3, "0")}`
                  : undefined;
                return <Block key={i} block={block} asset={article.asset} mediaCode={code} />;
              });
            })()}

            <div className="mt-14 border-t-2 border-primary/15 pt-6">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 min-h-11 rounded-lg border-2 border-primary/25 px-5 font-semibold text-primary hover:bg-primary/10"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden /> {t("back")}
              </Link>
            </div>
          </article>

          <BlogSponsoredSidebar label={t("sponsored")} extra={article.sponsored ?? []} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

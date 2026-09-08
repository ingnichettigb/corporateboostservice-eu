import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { applicazioni } from "@/data/site";
import { ArrowRight, Zap, Lock, RefreshCw, Construction } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/applicazioni")({
  head: () => ({
    meta: [
      { title: "Applicazioni per Imprese — CorporateBoostService.eu" },
      { name: "description", content: "Applicazioni professionali per gestire adempimenti, formazione e processi aziendali." },
      { property: "og:url", content: "https://corporateboostservice.eu/applicazioni" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://corporateboostservice.eu/applicazioni" }],
  }),
  component: AppPage,
});

function AppPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">{t("skip")}</a>
      <SiteHeader />
      <main id="main">
        <section className="pt-36 pb-16 [background:var(--gradient-section-hero)] border-b-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-base font-bold text-primary mb-3 uppercase tracking-wider">{t("app.kicker")}</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">{t("app.title")}</h1>
            <p className="mt-5 text-lg text-foreground/85 max-w-2xl mx-auto">{t("app.subtitle")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-foreground/85 font-semibold">
              <span className="inline-flex items-center gap-2"><Zap className="h-5 w-5 text-primary" aria-hidden /> {t("app.feat1")}</span>
              <span className="inline-flex items-center gap-2"><Lock className="h-5 w-5 text-primary" aria-hidden /> {t("app.feat2")}</span>
              <span className="inline-flex items-center gap-2"><RefreshCw className="h-5 w-5 text-primary" aria-hidden /> {t("app.feat3")}</span>
            </div>
          </div>
        </section>

        <section className="py-20 [background:var(--gradient-section-app)]">
          <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {applicazioni.map((item) => {
              const { icon: Icon, key } = item;
              const image = "image" in item ? item.image : undefined;
              const wip = "wip" in item ? item.wip : false;
              const routeMap: Record<string, string> = {
                pedFlow: "/pedflow",

                miniFat: "/minifat",
                smartMaintenance: "/smart-maintenance",
                agendaShare: "/agenda-share",
              };
              const to = !wip ? routeMap[key] : undefined;
              const logo = image ? (
                <div className="h-16 w-16 rounded-xl overflow-hidden bg-white border border-primary/20 flex items-center justify-center mb-5">
                  <img src={image} alt={t(`app.items.${key}.title`)} className="h-full w-full object-contain" />
                </div>
              ) : (
                <div className="h-14 w-14 rounded-xl [background:var(--gradient-hero)] text-primary-foreground flex items-center justify-center mb-5">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
              );
              return (
              <article key={key} className="relative p-7 rounded-2xl border-2 border-primary/20 bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all">
                {wip && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-yellow-400 text-black px-2.5 py-1 text-xs font-bold uppercase tracking-wider border-2 border-black">
                    <Construction className="h-3.5 w-3.5" aria-hidden /> {t("app.wip")}
                  </span>
                )}
                {to ? (
                  <Link to={to} aria-label={t(`app.items.${key}.title`)} className="inline-block rounded-xl transition-transform hover:scale-105">
                    {logo}
                  </Link>
                ) : (
                  logo
                )}
                <h2 className="text-lg font-bold mb-2 text-foreground">{t(`app.items.${key}.title`)}</h2>
                <p className="text-foreground/85 leading-relaxed mb-5">{t(`app.items.${key}.desc`)}</p>
                {to && (
                  <Button asChild variant="ghost" size="sm" className="px-0 text-primary font-bold hover:bg-transparent hover:text-primary/80">
                    <Link to={to}>
                      {t("app.more")} <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                )}
                {!wip && !to && (
                  <Button variant="ghost" size="sm" className="px-0 text-primary font-bold hover:bg-transparent hover:text-primary/80">
                    {t("app.more")} <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                  </Button>
                )}
              </article>
              );
            })}
          </div>
        </section>

        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

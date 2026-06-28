import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Layers, CheckCircle2, ShieldCheck, Container } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { corsi, applicazioni } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Corsi GDPR e App Digitali per Imprese" },
      { name: "description", content: "Corsi online su GDPR e sicurezza sul lavoro, più applicazioni digitali per imprese e professionisti." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main" className="skip-link">{t("skip")}</a>
      <SiteHeader />

      <main id="main">
        {/* HERO — sfumatura azzurro chiaro */}
        <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto px-4 max-w-5xl text-center relative">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm text-foreground mb-8 font-semibold">
              <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden />
              {t("hero.badge")}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground">
              {t("hero.title1")} <span className="text-primary">{t("hero.title2")}</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 max-w-sm mx-auto">
              <Button size="lg" className="h-12 w-full bg-yellow-400 text-black border-2 border-black font-bold hover:bg-yellow-300 shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-all" asChild>
                <Link to="/corsi"><GraduationCap className="mr-1" aria-hidden /> {t("hero.ctaCorsi")}</Link>
              </Button>
              <Button variant="hero" size="lg" className="h-12 w-full" asChild>
                <Link to="/applicazioni"><Layers className="mr-1" aria-hidden /> {t("hero.ctaApp")}</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 w-full border-2 border-primary text-primary font-semibold" asChild>
                <Link to="/moca-serbatoi"><Container className="mr-1" aria-hidden /> {t("nav.moca")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CORSI — sfumatura blu-100 */}
        <section className="py-24 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-14">
              <p className="text-base font-bold text-primary mb-3 uppercase tracking-wider">{t("corsi.kicker")}</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">{t("corsi.title")}</h2>
              <p className="mt-4 text-lg text-foreground/85">{t("corsi.subtitle")}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {corsi.map(({ icon: Icon, key }) => (
                <article key={key} className="p-6 rounded-2xl border-2 border-primary/20 bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all">
                  <div className="h-12 w-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{t(`corsi.items.${key}.title`)}</h3>
                  <p className="text-foreground/80 leading-relaxed mb-5">{t(`corsi.items.${key}.desc`)}</p>
                  <Button variant="ghost" size="sm" className="px-0 text-primary font-bold hover:bg-transparent hover:text-primary/80" asChild>
                    <Link to="/corsi">{t("corsi.details")} <ArrowRight className="ml-1 h-4 w-4" aria-hidden /></Link>
                  </Button>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="hero" size="lg" className="h-12 px-8" asChild>
                <Link to="/corsi">{t("corsi.ctaAll")} <ArrowRight className="ml-1" aria-hidden /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* APPLICAZIONI — sfumatura azzurro medio */}
        <section className="py-24 [background:var(--gradient-section-app)] border-b-2 border-primary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-14">
              <p className="text-base font-bold text-primary mb-3 uppercase tracking-wider">{t("app.kicker")}</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">{t("app.title")}</h2>
              <p className="mt-4 text-lg text-foreground/85">{t("app.subtitle")}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {applicazioni.map((item) => {
                const { icon: Icon, key } = item;
                const image = "image" in item ? item.image : undefined;
                const wip = "wip" in item ? item.wip : false;
                const routeMap: Record<string, string> = {
                  pedFlow: "/pedflow",
                  mocaSerbatoi: "/moca-serbatoi",
                  miniFat: "/minifat",
                  smartMaintenance: "/smart-maintenance",
                };
                const to = !wip ? routeMap[key] : undefined;
                const logo = image ? (
                  <div className="h-16 w-16 rounded-lg overflow-hidden bg-white border border-primary/20 flex items-center justify-center mb-5">
                    <img src={image} alt={t(`app.items.${key}.title`)} className="h-full w-full object-contain" />
                  </div>
                ) : (
                  <div className="h-12 w-12 rounded-lg [background:var(--gradient-hero)] text-primary-foreground flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                );
                return (
                <article key={key} className="relative p-6 rounded-2xl border-2 border-primary/20 bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all">
                  {wip && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-yellow-400 text-black px-2.5 py-1 text-xs font-bold uppercase tracking-wider border-2 border-black">
                      <Construction className="h-3.5 w-3.5" aria-hidden /> {t("app.wip")}
                    </span>
                  )}
                  {to ? (
                    <Link to={to} aria-label={t(`app.items.${key}.title`)} className="inline-block rounded-lg transition-transform hover:scale-105">
                      {logo}
                    </Link>
                  ) : (
                    logo
                  )}
                  <h3 className="font-bold text-lg mb-2 text-foreground">{t(`app.items.${key}.title`)}</h3>
                  <p className="text-foreground/80 leading-relaxed mb-5">{t(`app.items.${key}.desc`)}</p>
                  {!wip && (
                    <Button variant="ghost" size="sm" className="px-0 text-primary font-bold hover:bg-transparent hover:text-primary/80" asChild>
                      <Link to={to ?? "/applicazioni"}>{t("app.more")} <ArrowRight className="ml-1 h-4 w-4" aria-hidden /></Link>
                    </Button>
                  )}
                </article>
                );
              })}
            </div>
            <div className="mt-12 text-center">
              <Button variant="hero" size="lg" className="h-12 px-8" asChild>
                <Link to="/applicazioni">{t("app.ctaAll")} <ArrowRight className="ml-1" aria-hidden /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CHI SONO — blu profondo, testo bianco */}
        <section className="py-24 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center max-w-5xl">
            <div className="relative aspect-square max-w-sm mx-auto md:mx-0 w-full rounded-3xl bg-white/10 backdrop-blur-sm border-2 border-white/30 shadow-[var(--shadow-elegant)] flex items-center justify-center">
              <div className="text-center text-white px-6">
                <ShieldCheck className="mx-auto h-20 w-20" aria-hidden />
                <p className="mt-4 font-bold text-xl">{t("chiSono.role")}</p>
                <p className="text-base opacity-95 mt-1">{t("chiSono.role2")}</p>
              </div>
            </div>
            <div>
              <p className="text-base font-bold text-white/85 mb-3 uppercase tracking-wider">{t("chiSono.kicker")}</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">{t("chiSono.title")}</h2>
              <p className="text-lg leading-relaxed text-white/95">{t("chiSono.subtitle")}</p>
              <ul className="mt-6 space-y-3 text-white/95 text-lg">
                {[t("chiSono.p1")].map((txt) => (
                  <li key={txt} className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 mt-0.5 shrink-0" aria-hidden />{txt}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ASSISTENZA */}
        <section id="assistenza" className="py-24 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15 scroll-mt-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-wider">
                <LifeBuoy className="h-4 w-4" aria-hidden /> {t("nav.assistenza")}
              </div>
              <h2 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-foreground">{t("nav.assistenza")}</h2>
              <p className="mt-4 text-lg text-foreground/85">{t("hero.subtitle")}</p>
            </div>
            <ChecklistCTAs className="mb-10" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { Icon: ShieldCheck, label: "GDPR", to: "/assistenza-gdpr" as const },
                { Icon: FileLock, label: "Privacy", to: "/assistenza-gdpr" as const },
                { Icon: Video, label: "Telecamere", to: "/telecamere" as const },
                { Icon: MapPin, label: "GPS", to: "/gps" as const },
              ].map(({ Icon, label, to }) => {
                const inner = (
                  <>
                    <div className="h-14 w-14 mx-auto rounded-lg [background:var(--gradient-hero)] text-primary-foreground flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7" aria-hidden />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{label}</h3>
                  </>
                );
                return to ? (
                  <Link key={label} to={to} className="p-6 rounded-2xl border-2 border-primary/20 bg-white shadow-[var(--shadow-card)] text-center hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] transition-all">
                    {inner}
                  </Link>
                ) : (
                  <article key={label} className="p-6 rounded-2xl border-2 border-primary/20 bg-white shadow-[var(--shadow-card)] text-center">
                    {inner}
                  </article>
                );
              })}
            </div>
            <div className="mt-10 text-center">
              <Button variant="hero" size="lg" className="h-12 px-8" asChild>
                <Link to="/" hash="contatti"><LifeBuoy className="mr-1" aria-hidden /> {t("nav.contatti")}</Link>
              </Button>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

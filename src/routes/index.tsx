import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Layers, CheckCircle2, Construction } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { corsi, applicazioni } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Applicazioni Digitali e Corsi Certificati GDPR | CorporateBoostService" },
      {
        name: "description",
        content:
          "Software per direttiva PED, FAT e manutenzione, più corsi online certificati su GDPR e privacy per imprese e professionisti.",
      },
      { property: "og:title", content: "Applicazioni Digitali e Corsi Certificati GDPR | CorporateBoostService" },
      {
        property: "og:description",
        content:
          "Software per direttiva PED, FAT e manutenzione, più corsi online certificati su GDPR e privacy per imprese e professionisti.",
      },
      { property: "og:url", content: "https://corporateboostservice.eu/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://corporateboostservice.eu/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "CorporateBoostService.eu",
          url: "https://corporateboostservice.eu",
          inLanguage: "it-IT",
          publisher: {
            "@type": "Organization",
            name: "CorporateBoostService.eu",
            url: "https://corporateboostservice.eu",
            email: "team@corporateboostservice.eu",
            founder: { "@type": "Person", name: "Nichetti Gian Battista" },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Soresina",
              addressRegion: "CR",
              addressCountry: "IT",
            },
            vatID: "IT01235350194",
          },
        }),
      },
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
              <Button variant="hero" size="lg" className="h-12 w-full" asChild>
                <Link to="/applicazioni"><Layers className="mr-1" aria-hidden /> {t("hero.ctaApp")}</Link>
              </Button>
              <Button size="lg" className="h-12 w-full bg-yellow-400 text-black border-2 border-black font-bold hover:bg-yellow-300 shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-all" asChild>
                <Link to="/corsi"><GraduationCap className="mr-1" aria-hidden /> {t("hero.ctaCorsi")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* APPLICAZIONI — sfumatura azzurro medio */}
        <section className="py-24 [background:var(--gradient-section-app)] border-y-2 border-primary/20">
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
                  
                  miniFat: "/minifat",
                  smartMaintenance: "/smart-maintenance",
                  agendaShare: "/agenda-share",
                  registroCredenziali: "/registro-credenziali-fornitori",
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

        {/* CORSI — sfumatura blu-100 */}
        <section className="py-24 [background:var(--gradient-section-corsi)] border-b-2 border-primary/15">
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

        {/* CHI SONO — blu profondo, testo bianco */}
        <section className="py-24 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div>
              <p className="text-base font-bold text-white/85 mb-3 uppercase tracking-wider">Chi sono</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">Esperienza, normative e tecnologia.</h2>
              <div className="space-y-5 text-white/95 leading-relaxed">
                <p>
                  CorporateBoostService.eu è gestito da Gian Battista Nichetti, professionista attivo dal 1996 nel campo delle normative tecniche (Direttiva CE PED, saldatura, idoneità alimentare dei materiali, sicurezza sul lavoro come RSPP e formatore D.Lgs. 81/08, GDPR e privacy).&nbsp;
                  <br />Il doppio background&nbsp;
                  <br />— Perito Industriale in Meccanica e Informatica e Laurea in Ingegneria Industriale —&nbsp;
                  <br />&nbsp;ha permesso di unire competenza normativa e capacità tecnica digitale. Da questa esperienza nasce CorporateBoostService.eu: strumenti digitali e corsi online per aiutare imprese e professionisti a essere conformi, in autonomia.
                </p>

                <div>
                  <p className="font-bold mb-2">Applicazioni disponibili:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>PedFlow: classificazione automatica dei fluidi secondo la Direttiva PED.</li>
                    <li>MiniFAT: preparazione guidata della documentazione per sopralluoghi FAT.</li>
                    <li>Smart Maintenance: report tecnici generati da foto, video e note vocali.</li>
                  </ul>
                  <p className="mt-2">Altre applicazioni (FAT, SAT, LP) sono in sviluppo secondo lo stesso principio: partire da esigenze reali verificate sul campo.</p>
                </div>

                <div>
                  <p className="font-bold mb-2">Pagamenti gestiti da Paddle</p>
                  <p>Paddle funge da Merchant of Record per tutti gli acquisti, gestendo fatturazione, IVA e pagamenti.</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><a href="https://www.paddle.com/legal/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Paddle Terms</a></li>
                    <li><a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Paddle Privacy</a></li>
                    <li><a href="https://www.paddle.com/legal/refund-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Paddle Refund Policy</a></li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold mb-2">Dati del gestore:</p>
                  <p>Gian Battista Nichetti – Soresina (CR), Italia</p>
                  <p>Email di contatto: <a href="mailto:team@corporateboostservice.eu" className="underline hover:text-white">team@corporateboostservice.eu</a></p>
                  <p>P.IVA: IT 01235350194</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

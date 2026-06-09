import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { corsi } from "@/data/site";
import { ArrowRight, Clock, Award, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const EMAIL = "supporto@corporateboostservice.eu";

function buildMailto(corso: string) {
  const subject = corso;
  const body = [
    `Salve,`,
    ``,
    `desidero ricevere maggiori informazioni sul corso "${corso}".`,
    ``,
    `La mia email di contatto è: [inserisci qui la tua email]`,
    `Nome e cognome: `,
    `Telefono: `,
    ``,
    `Grazie,`,
    `Corporate Boost Service`,
  ].join("\n");
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const Route = createFileRoute("/corsi")({
  head: () => ({
    meta: [
      { title: "Corsi Online — CorporateBoostService.eu" },
      { name: "description", content: "Corsi online su privacy, GDPR, sicurezza sul lavoro e aggiornamenti normativi." },
    ],
  }),
  component: CorsiPage,
});

function CorsiPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">{t("skip")}</a>
      <SiteHeader />
      <main id="main">
        <section className="pt-36 pb-16 [background:var(--gradient-section-hero)] border-b-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-base font-bold text-primary mb-3 uppercase tracking-wider">{t("corsi.h1Kicker")}</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">{t("corsi.h1")}</h1>
            <p className="mt-5 text-lg text-foreground/85 max-w-2xl mx-auto">{t("corsi.h1Sub")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-foreground/85 font-semibold">
              <span className="inline-flex items-center gap-2"><Clock className="h-5 w-5 text-primary" aria-hidden /> {t("corsi.feat1")}</span>
              <span className="inline-flex items-center gap-2"><Award className="h-5 w-5 text-primary" aria-hidden /> {t("corsi.feat2")}</span>
              <span className="inline-flex items-center gap-2"><Users className="h-5 w-5 text-primary" aria-hidden /> {t("corsi.feat3")}</span>
            </div>
          </div>
        </section>

        <section className="py-20 [background:var(--gradient-section-corsi)]">
          <div className="container mx-auto px-4 grid sm:grid-cols-2 gap-6 max-w-5xl">
            {corsi.map(({ icon: Icon, key }) => (
              <article key={key} className="p-8 rounded-2xl border-2 border-primary/20 bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all">
                <div className="h-14 w-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <h2 className="text-xl font-bold mb-2 text-foreground">{t(`corsi.items.${key}.title`)}</h2>
                <p className="text-foreground/85 leading-relaxed mb-6">{t(`corsi.items.${key}.desc`)}</p>
                <Button asChild variant="hero" size="default" className="h-11">
                  <a href={buildMailto(t(`corsi.items.${key}.title`))}>
                    {t("corsi.iscriviti")} <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

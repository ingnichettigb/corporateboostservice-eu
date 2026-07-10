import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { ChecklistCTAs } from "@/components/ChecklistCTAs";
import { corsi } from "@/data/site";
import { buildMailto } from "@/lib/contact";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { ArrowRight, Clock, Award, Users, Construction, Mail, FileText, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

const ATTESTATO_ADDETTO = {
  id: "02-gdpr-00.corporateboostservice.eu",
  name: "Corso Privacy Addetto",
  price: "40€",
  duration: "3",
  domain: "02-gdpr-00.corporateboostservice.eu",
};




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
  const { addItem } = useCart();
  const navigate = useNavigate();
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
            {corsi.map((item) => {
              const { icon: Icon, key } = item;
              const wip = "wip" in item ? item.wip : false;
              const hasSubtitle = "hasSubtitle" in item ? item.hasSubtitle : false;
              return (
              <article key={key} className="relative p-8 rounded-2xl border-2 border-primary/20 bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all">
                {wip && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-yellow-400 text-black px-2.5 py-1 text-xs font-bold uppercase tracking-wider border-2 border-black">
                    <Construction className="h-3.5 w-3.5" aria-hidden /> {t("corsi.wip")}
                  </span>
                )}
                <div className="h-14 w-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <h2 className="text-xl font-bold mb-1 text-foreground">{t(`corsi.items.${key}.title`)}</h2>
                {hasSubtitle && (
                  <p className="text-lg font-bold text-foreground mb-2">{t(`corsi.items.${key}.subtitle`)}</p>
                )}
                <p className="text-foreground/85 leading-relaxed mb-6">{t(`corsi.items.${key}.desc`)}</p>
                <div className="flex flex-col items-center gap-3 max-w-xs mx-auto">
                  {key === "gdprAddetto" ? (
                    <Button asChild variant="hero" size="default" className="h-11 w-full">
                      <Link to="/corso-gdpr-incaricati">
                        {t("corsi.iscriviti")} <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="hero" size="default" className="h-11 w-full" disabled>
                      {t("corsi.iscriviti")} <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                    </Button>
                  )}
                  <Button asChild variant="outline" size="default" className="h-11 w-full">
                    <a href={buildMailto(t(`corsi.items.${key}.title`), t("corsi.infoBody"))}>
                      <Mail className="mr-1 h-4 w-4" aria-hidden /> {t("corsi.infoLabel")}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="default" className="h-11 w-full">
                    <a href={buildMailto(t(`corsi.items.${key}.title`), t("corsi.preventivoBody"))}>
                      <FileText className="mr-1 h-4 w-4" aria-hidden /> {t("corsi.preventivoLabel")}
                    </a>
                  </Button>
                </div>


              </article>
              );
            })}
          </div>
        </section>

        <section className="py-20 [background:var(--gradient-section-hero)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">{t("checklist.toolsTitle")}</h2>
            <p className="mt-4 text-lg text-foreground/85 max-w-2xl mx-auto">{t("checklist.toolsSubtitle")}</p>
            <ChecklistCTAs className="mt-8" />
          </div>
        </section>

        <ContactSection />

      </main>
      <SiteFooter />
    </div>
  );
}

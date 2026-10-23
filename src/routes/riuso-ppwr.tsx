import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, Recycle, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PricingCartButton } from "@/components/PricingCartButton";
import { TaxNote } from "@/components/TaxDisclaimer";
import i18n from "@/i18n";

const locale = {
  it: { metaTitle: "Riutilizzabilità PPWR — Dichiarazione imballaggi riutilizzabili", metaDescription: "Dichiara se un imballaggio è riutilizzabile secondo il Regolamento UE 2025/40 (PPWR) e genera il PDF per il fascicolo tecnico.", back: "Torna alle applicazioni", eyebrow: "Regolamento UE 2025/40 — PPWR", h1: "Riutilizzabilità PPWR", heroP: "Dichiara se un imballaggio è riutilizzabile e genera il PDF per il fascicolo tecnico.", soon: "Contenuti della pagina in preparazione.", ctaH2: "Riutilizzabilità PPWR", ctaP: "Scegli il piano più adatto alle tue esigenze." },
  en: { metaTitle: "PPWR Reusability — Reusable packaging declaration", metaDescription: "Declare whether packaging is reusable under EU Regulation 2025/40 (PPWR) and generate the PDF for the technical file.", back: "Back to applications", eyebrow: "EU Regulation 2025/40 — PPWR", h1: "PPWR Reusability", heroP: "Declare whether packaging is reusable and generate the PDF for the technical file.", soon: "Page content in preparation.", ctaH2: "PPWR Reusability", ctaP: "Choose the plan that fits your needs." },
  de: { metaTitle: "PPWR-Wiederverwendbarkeit — Erklärung für Mehrwegverpackungen", metaDescription: "Erklären Sie, ob eine Verpackung gemäß EU-Verordnung 2025/40 (PPWR) wiederverwendbar ist, und erstellen Sie das PDF für die technische Akte.", back: "Zurück zu den Anwendungen", eyebrow: "EU-Verordnung 2025/40 — PPWR", h1: "PPWR-Wiederverwendbarkeit", heroP: "Erklären Sie, ob eine Verpackung wiederverwendbar ist, und erstellen Sie das PDF für die technische Akte.", soon: "Seiteninhalte in Vorbereitung.", ctaH2: "PPWR-Wiederverwendbarkeit", ctaP: "Wählen Sie den passenden Tarif." },
  es: { metaTitle: "Reutilizabilidad PPWR — Declaración de envases reutilizables", metaDescription: "Declara si un envase es reutilizable según el Reglamento UE 2025/40 (PPWR) y genera el PDF para el expediente técnico.", back: "Volver a aplicaciones", eyebrow: "Reglamento UE 2025/40 — PPWR", h1: "Reutilizabilidad PPWR", heroP: "Declara si un envase es reutilizable y genera el PDF para el expediente técnico.", soon: "Contenido de la página en preparación.", ctaH2: "Reutilizabilidad PPWR", ctaP: "Elige el plan que mejor se adapte a ti." },
};
(Object.keys(locale) as (keyof typeof locale)[]).forEach((l) => i18n.addResourceBundle(l, "riusoPpwr", locale[l], true, false));

export const Route = createFileRoute("/riuso-ppwr")({
  head: () => ({
    meta: [
      { title: i18n.t("riusoPpwr:metaTitle") },
      { name: "description", content: i18n.t("riusoPpwr:metaDescription") },
      { property: "og:title", content: i18n.t("riusoPpwr:metaTitle") },
      { property: "og:description", content: i18n.t("riusoPpwr:metaDescription") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RiusoPpwrPage,
});

function PriceButtons() {
  const { t } = useTranslation();
  return (
    <div className="mt-10 flex flex-col items-center gap-3">
      <div className="w-full max-w-md rounded-xl border-2 border-amber-400 bg-amber-50 p-4 text-amber-900 text-left">
        <div className="flex items-center gap-2 font-bold">
          <Construction className="h-5 w-5 shrink-0 text-amber-600" aria-hidden />
          <span>{t("legal.comingSoonBadge")}</span>
        </div>
        <p className="mt-1 text-sm text-amber-800/90">{t("legal.comingSoonNote")}</p>
      </div>
      <PricingCartButton code="070RiusoPPWR-002" index={24} full />
      <PricingCartButton code="070RiusoPPWR-030" index={25} full />
      <PricingCartButton code="070RiusoPPWR-365" index={26} full />
      <TaxNote className="mt-2 max-w-md mx-auto" />
    </div>
  );
}

function RiusoPpwrPage() {
  const { t } = useTranslation("riusoPpwr");
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-36 md:pt-44">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/applicazioni"><ArrowLeft className="h-4 w-4" /> {t("back")}</Link>
          </Button>
        </div>

        <section className="pb-16 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
              <Recycle className="h-4 w-4 text-primary" aria-hidden /> {t("eyebrow")}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{t("h1")}</h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-xl mx-auto">{t("heroP")}</p>
            <PriceButtons />
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl text-center text-foreground/60 italic">{t("soon")}</div>
        </section>

        <section className="py-20 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">{t("ctaH2")}</h2>
            <p className="mt-4 text-lg text-white/90">{t("ctaP")}</p>
            <PriceButtons />
            <Button variant="ghost" size="sm" asChild className="mt-6 text-white hover:bg-white/10 hover:text-white">
              <Link to="/applicazioni">{t("back")} <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

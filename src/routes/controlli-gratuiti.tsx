import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Gift } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ChecklistCTAs } from "@/components/ChecklistCTAs";

export const Route = createFileRoute("/controlli-gratuiti")({
  head: () => ({
    meta: [
      { title: i18n.t("controlli.metaTitle") },
      { name: "description", content: i18n.t("controlli.metaDesc") },
      { property: "og:title", content: i18n.t("controlli.ogTitle") },
      { property: "og:description", content: i18n.t("controlli.ogDesc") },
    ],
  }),
  component: ControlliGratuitiPage,
});

function ControlliGratuitiPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-40 pb-20 [background:var(--gradient-section-hero)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mb-8"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> {t("controlli.back")}
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-wider mb-5">
              <Gift className="h-4 w-4" aria-hidden /> {t("controlli.badge")}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              {t("controlli.title1")} <span className="text-primary">{t("controlli.title2")}</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto">
              {t("controlli.subtitle")}
            </p>
          </div>

          <ChecklistCTAs className="mb-16" />

          <div className="text-center pt-10 border-t-2 border-primary/15">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {t("controlli.quoteTitle")}
            </h2>
            <p className="text-foreground/85 mb-6 max-w-xl mx-auto">
              {t("controlli.quoteDesc")}
            </p>
            <Button variant="hero" size="lg" className="h-12 px-8" asChild>
              <Link to="/" hash="contatti">
                <Mail className="mr-1" aria-hidden /> {t("controlli.quoteCta")}
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

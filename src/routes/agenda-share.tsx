import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  CalendarClock,
  CalendarRange,
  Send,
  Trash2,
  PenLine,
  EyeOff,
  SquareCheck,
  Zap,
  Bookmark,
  Languages,
  MessageCircle,
  ShieldCheck,
  Briefcase,
  Wrench,
  GraduationCap,
  Users,
  CheckCircle2,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TaxNote } from "@/components/TaxDisclaimer";
import { PricingCartButton } from "@/components/PricingCartButton";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { agendaShare as agendaShareLocale } from "@/i18n/locales/pages/agenda-share";
import agendaDe from "@/i18n/locales/generated/agendaShare.de.json";
import agendaEs from "@/i18n/locales/generated/agendaShare.es.json";

// Register translations
i18n.addResourceBundle("it", "agendaShare", agendaShareLocale.it, true, false);
i18n.addResourceBundle("en", "agendaShare", agendaShareLocale.en, true, false);
i18n.addResourceBundle("de", "agendaShare", agendaDe, true, false);
i18n.addResourceBundle("es", "agendaShare", agendaEs, true, false);

const stepIcons = [CalendarClock, CalendarRange, Send];

const featureIcons = [
  CalendarRange,
  Trash2,
  PenLine,
  EyeOff,
  SquareCheck,
  Zap,
  Bookmark,
  Languages,
  MessageCircle,
];

const privacyIcons = [ShieldCheck, EyeOff, MessageCircle];

const caseIcons = [Briefcase, Wrench, GraduationCap, Users];

function ActivateButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 justify-center items-center ${className}`}>
      <PricingCartButton code="020AgendaShare-015" index={15} full />
      <PricingCartButton code="020AgendaShare-030" index={16} full />
      <PricingCartButton code="020AgendaShare-365" index={17} full />
    </div>
  );
}

export const Route = createFileRoute("/agenda-share")({
  head: () => ({
    meta: [
      { title: i18n.t("agendaShare:metaTitle") },
      {
        name: "description",
        content: i18n.t("agendaShare:metaDescription"),
      },
      {
        property: "og:title",
        content: i18n.t("agendaShare:ogTitle"),
      },
      {
        property: "og:description",
        content: i18n.t("agendaShare:ogDescription"),
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AgendaSharePage,
});

function AgendaSharePage() {
  const { t } = useTranslation("agendaShare");

  const badges = (t("badges", { returnObjects: true }) as string[]);
  const steps = (t("steps", { returnObjects: true }) as { title: string; desc: string }[]);
  const features = (t("features", { returnObjects: true }) as { title: string; desc: string }[]);
  const privacy = (t("privacy", { returnObjects: true }) as { title: string; desc: string }[]);
  const cases = (t("cases", { returnObjects: true }) as { title: string; desc: string }[]);
  const faq = (t("faq", { returnObjects: true }) as { q: string; a: string }[]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pt-36 md:pt-44">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/applicazioni">
              <ArrowLeft className="h-4 w-4" /> {t("backBtn")}
            </Link>
          </Button>
        </div>

        {/* HERO */}
        <section className="pb-16 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
              <CalendarClock className="h-4 w-4 text-primary" aria-hidden /> {t("heroBadge")}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {t("heroH1a")} <span className="text-primary">{t("heroH1b")}</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-xl mx-auto">
              {t("heroSubtitle")}
            </p>
            <p className="mt-3 text-sm text-foreground/65">
              {t("heroTagline")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary/25 bg-white px-4 py-2 text-sm font-semibold"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden /> {b}
                </span>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
            <TaxNote className="mt-4 max-w-xl mx-auto" />
          </div>
        </section>

        {/* COS'È */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              {t("whatLabel")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("whatH2")}
            </h2>
            <p className="mt-5 text-lg text-foreground/85 leading-relaxed">
              {t("whatBody")}
            </p>
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* COME FUNZIONA */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("howLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("howH2")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {steps.map(({ title, desc }, idx) => {
                const Icon = stepIcons[idx];
                const n = String(idx + 1);
                return (
                  <Card key={n} className="relative border-2 border-primary/20 overflow-hidden">
                    <span className="absolute top-4 right-4 text-5xl font-extrabold text-primary/10 leading-none">
                      {n}
                    </span>
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg [background:var(--gradient-hero)] text-primary-foreground flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">{desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* FUNZIONI */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("featuresLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("featuresH2")}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ title, desc }, idx) => {
                const Icon = featureIcons[idx];
                return (
                  <Card key={title} className="border-2 border-primary/20">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg [background:var(--gradient-hero)] text-primary-foreground flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">{desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* PRIVACY */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("privacyLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("privacyH2")}</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {privacy.map(({ title, desc }, idx) => {
                const Icon = privacyIcons[idx];
                return (
                  <Card key={title} className="border-2 border-primary/20">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-yellow-400 text-black flex items-center justify-center mb-3 border-2 border-black">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">{desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* CASI D'USO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("casesLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("casesH2")}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cases.map(({ title, desc }, idx) => {
                const Icon = caseIcons[idx];
                return (
                  <Card key={title} className="border-2 border-primary/20">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg [background:var(--gradient-hero)] text-primary-foreground flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">{desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2 text-center">
              {t("faqLabel")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              {t("faqH2")}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="py-20 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("ctaH2")}
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              {t("ctaBody")}
            </p>
            <div className="mt-8 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

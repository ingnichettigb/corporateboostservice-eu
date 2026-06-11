import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  ArrowRight,
  Database,
  CheckCircle2,
  ShieldCheck,
  Phone,
  CalendarCheck,
  AlertTriangle,
  Clock,
  Building2,
  ClipboardCheck,
  Microscope,
  FileCheck2,
  ScrollText,
  Award,
  Smartphone,
  UserCheck,
  Gauge,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import iconAsset from "@/assets/apps/moca-serbatoi.png.asset.json";

import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { mocaSerbatoi as mocaLocale } from "@/i18n/locales/pages/moca-serbatoi";

const iconImg = iconAsset.url;

// Register translations
i18n.addResourceBundle("it", "mocaSerbatoi", mocaLocale.it, true, false);
i18n.addResourceBundle("en", "mocaSerbatoi", mocaLocale.en, true, false);

const whenIcons = [Clock, ScrollText, Building2, ClipboardCheck, ShieldCheck, Database, FileCheck2];
const whyIcons = [Award, Gauge, ScrollText, Microscope, Smartphone, UserCheck, CheckCircle2];

function SectionCtas({ t }: { t: (k: string) => string }) {
  return (
    <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
      <Button variant="hero" size="lg" className="h-12 px-7 text-base" asChild>
        <a href={buildMailto(t("heroCtaPrimary"))}>
          <CalendarCheck className="h-5 w-5" aria-hidden /> {t("heroCtaPrimary")}
        </a>
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="h-12 px-7 text-base border-2 border-primary/40 bg-white"
        asChild
      >
        <a href={buildMailto(t("heroCtaSecondary"))}>
          <Phone className="h-5 w-5" aria-hidden /> {t("heroCtaSecondary")}
        </a>
      </Button>
    </div>
  );
}

export const Route = createFileRoute("/moca-serbatoi")({
  head: () => ({
    meta: [
      { title: i18n.t("mocaSerbatoi:metaTitle") },
      { name: "description", content: i18n.t("mocaSerbatoi:metaDescription") },
      { property: "og:title", content: i18n.t("mocaSerbatoi:ogTitle") },
      { property: "og:description", content: i18n.t("mocaSerbatoi:ogDescription") },
      { property: "og:image", content: iconImg },
      { name: "twitter:image", content: iconImg },
    ],
  }),
  component: MocaSerbatoiPage,
});

function MocaSerbatoiPage() {
  const { t } = useTranslation("mocaSerbatoi");

  const problems = t("problems", { returnObjects: true }) as string[];
  const whenItems = t("whenItems", { returnObjects: true }) as string[];
  const solutionItems = t("solutionItems", { returnObjects: true }) as string[];
  const solutionNorms = t("solutionNorms", { returnObjects: true }) as string[];
  const deliverItems = t("deliverItems", { returnObjects: true }) as string[];
  const workSteps = t("workSteps", { returnObjects: true }) as { title: string; desc: string }[];
  const whyItems = t("whyItems", { returnObjects: true }) as string[];
  const normItems = t("normItems", { returnObjects: true }) as string[];
  const faq = t("faq", { returnObjects: true }) as { q: string; a: string }[];

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
          <div className="container mx-auto px-4 max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden /> {t("heroBadge")}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                {t("heroH1a")}
              </h1>
              <p className="mt-4 text-xl md:text-2xl font-semibold text-primary">
                {t("heroH1b")}
              </p>
              <p className="mt-5 text-lg text-foreground/85">{t("heroP")}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" className="h-12 px-7 text-base" asChild>
                  <a href={buildMailto(`MOCA Serbatoi — ${t("heroCtaPrimary")}`)}>
                    <CalendarCheck className="h-5 w-5" aria-hidden /> {t("heroCtaPrimary")}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-7 text-base border-2 border-primary/40"
                  asChild
                >
                  <a href={buildMailto(`MOCA Serbatoi — ${t("heroCtaSecondary")}`)}>
                    <Phone className="h-5 w-5" aria-hidden /> {t("heroCtaSecondary")}
                  </a>
                </Button>
              </div>
            </div>
            <figure className="flex justify-center">
              <div className="rounded-3xl border-2 border-primary/15 shadow-lg bg-white p-8 w-full max-w-sm">
                <img src={iconImg} alt={t("imgAlt")} className="w-full h-auto" loading="eager" />
              </div>
            </figure>
          </div>
        </section>

        {/* REASSURANCE */}
        <section className="py-12 bg-background border-b-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-xl md:text-2xl font-medium text-center leading-relaxed text-foreground/90">
              {t("reassure")}
            </p>
            <SectionCtas t={t} />
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-b-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              {t("problemLabel")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("problemH2")}</h2>
            <ul className="space-y-3 mb-8">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 shrink-0 text-primary mt-0.5" aria-hidden />
                  <span className="text-foreground/85 text-lg">{p}</span>
                </li>
              ))}
            </ul>
            <blockquote className="border-l-4 border-primary pl-5 py-2 text-lg italic text-foreground/85 mb-6">
              {t("problemQuote")}
            </blockquote>
            <div className="rounded-2xl bg-primary/10 border-2 border-primary/20 p-6 mb-6">
              <p className="text-lg font-semibold text-foreground">{t("problemHighlight")}</p>
            </div>
            <p className="text-lg font-bold text-primary">{t("problemMessage")}</p>
            <SectionCtas t={t} />
          </div>
        </section>

        {/* QUANDO SERVE */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("whenLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("whenH2")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whenItems.map((item, idx) => {
                const Icon = whenIcons[idx % whenIcons.length];
                return (
                  <Card key={item} className="border-2 border-primary/20">
                    <CardContent className="flex items-start gap-3 pt-6">
                      <div className="h-11 w-11 shrink-0 rounded-lg [background:var(--gradient-hero)] text-primary-foreground flex items-center justify-center">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <span className="text-foreground/85 font-medium">{item}</span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <SectionCtas t={t} />
          </div>
        </section>

        {/* SOLUZIONE CHIAVI IN MANO */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("solutionLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("solutionH2")}</h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {solutionItems.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-white border-2 border-primary/15 p-4">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black border-2 border-black">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="text-foreground/85 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-white border-2 border-primary/20 p-6 max-w-xl mx-auto text-center">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                {t("solutionNormTitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {solutionNorms.map((n) => (
                  <span
                    key={n}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-primary/25 bg-primary/5 px-4 py-2 text-sm font-semibold"
                  >
                    <ScrollText className="h-4 w-4 text-primary" aria-hidden /> {n}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-8 text-center text-lg font-bold text-primary">{t("solutionRepeat")}</p>
            <SectionCtas t={t} />
          </div>
        </section>

        {/* COSA RICEVI */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("deliverLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("deliverH2")}</h2>
            </div>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {deliverItems.map((item, idx) => (
                <li
                  key={item}
                  className="relative rounded-2xl border-2 border-primary/20 bg-white p-6 shadow-[var(--shadow-card)]"
                >
                  <span className="absolute top-4 right-4 text-4xl font-extrabold text-primary/10 leading-none">
                    {idx + 1}
                  </span>
                  <FileCheck2 className="h-8 w-8 text-primary mb-3" aria-hidden />
                  <p className="text-foreground/85 font-medium pr-6">{item}</p>
                </li>
              ))}
            </ol>
            <SectionCtas t={t} />
          </div>
        </section>

        {/* COME LAVORIAMO */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("workLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("workH2")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {workSteps.map(({ title, desc }, idx) => (
                <Card key={title} className="relative border-2 border-primary/20 overflow-hidden">
                  <span className="absolute top-4 right-4 text-5xl font-extrabold text-primary/10 leading-none">
                    {idx + 1}
                  </span>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-yellow-400 text-black flex items-center justify-center mb-3 border-2 border-black">
                      <CalendarCheck className="h-6 w-6" aria-hidden />
                    </div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-8 text-center text-lg font-medium text-foreground/85">{t("workNote")}</p>
            <SectionCtas t={t} />
          </div>
        </section>

        {/* PERCHÉ SCEGLIERCI */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("whyLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("whyH2")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyItems.map((item, idx) => {
                const Icon = whyIcons[idx % whyIcons.length];
                return (
                  <Card key={item} className="border-2 border-primary/20">
                    <CardContent className="flex items-start gap-3 pt-6">
                      <div className="h-11 w-11 shrink-0 rounded-lg [background:var(--gradient-hero)] text-primary-foreground flex items-center justify-center">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <span className="text-foreground/85 font-medium">{item}</span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <p className="mt-10 text-center text-lg font-bold text-primary max-w-3xl mx-auto">
              {t("whyClose")}
            </p>
            <SectionCtas t={t} />
          </div>
        </section>

        {/* NORMATIVA */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              {t("normLabel")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">{t("normH2")}</h2>
            <p className="mt-5 text-lg text-foreground/85">{t("normIntro")}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {normItems.map((n) => (
                <span
                  key={n}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary/25 bg-white px-4 py-2 text-sm font-semibold"
                >
                  <ScrollText className="h-4 w-4 text-primary" aria-hidden /> {n}
                </span>
              ))}
            </div>
            <p className="mt-8 text-lg text-foreground/85">{t("normP")}</p>
            <SectionCtas t={t} />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{t("faqH2")}</h2>
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
            <SectionCtas t={t} />
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="py-20 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">{t("ctaH2")}</h2>
            <p className="mt-4 text-white/90 text-lg">{t("ctaP")}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="h-12 px-7 text-base bg-yellow-400 text-black hover:bg-yellow-300 border-2 border-black"
                asChild
              >
                <a href={buildMailto(t("ctaPrimary"))}>
                  <Phone className="h-5 w-5" aria-hidden /> {t("ctaPrimary")}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 text-base border-2 border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href={buildMailto(`MOCA Serbatoi — ${t("ctaSecondary")}`)}>
                  <ArrowRight className="h-5 w-5" aria-hidden /> {t("ctaSecondary")}
                </a>
              </Button>
            </div>
            <p className="mt-8 text-white/90 text-base font-medium max-w-2xl mx-auto">
              {t("ctaFinal")}
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

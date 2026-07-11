import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";
import { getMiniFatMonthly } from "@/lib/pricing";
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
  FileCheck2,
  Building2,
  ClipboardList,
  FileStack,
  Languages,
  CloudUpload,
  FileDown,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Award,
  Zap,
  Wifi,
  Check,
  PlayCircle,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroAsset from "@/assets/minifat/minifat-process.png.asset.json";
import screenMain from "@/assets/minifat/screen-main.jpg";
import screenDocs from "@/assets/minifat/screen-docs.jpg";
import screenPdf from "@/assets/minifat/screen-pdf.jpg";
import screenArchive from "@/assets/minifat/screen-archive.jpg";

export const Route = createFileRoute("/minifat")({
  head: () => ({
    meta: [
      { title: i18n.t("minifat.metaTitle") },
      {
        name: "description",
        content: i18n.t("minifat.metaDescription"),
      },
      { property: "og:title", content: i18n.t("minifat.ogTitle") },
      {
        property: "og:description",
        content: i18n.t("minifat.ogDescription"),
      },
    ],
  }),
  component: MiniFatPage,
});

const featureIcons = [Building2, ClipboardList, FileCheck2, FileStack, Languages, CloudUpload, FileDown];
const stepIcons = [Building2, ClipboardList, FileCheck2, FileDown];
const benefitIcons = [ShieldCheck, CheckCircle2, Award, Clock, Zap, Wifi];
const screenshotImgs = [screenMain, screenDocs, screenPdf, screenArchive];

function MiniFatPage() {
  const { t } = useTranslation();

  const features = (t("minifat.features", { returnObjects: true }) as { title: string; desc: string }[]);
  const steps = (t("minifat.steps", { returnObjects: true }) as { title: string; desc: string }[]);
  const screenshots = (t("minifat.screenshots", { returnObjects: true }) as { caption: string }[]);
  const benefits = (t("minifat.benefits", { returnObjects: true }) as { title: string; desc: string }[]);
  const planFeatures = (t("minifat.planFeatures", { returnObjects: true }) as string[]);
  const faq = (t("minifat.faq", { returnObjects: true }) as { q: string; a: string }[]);
  const methodCards1 = (t("minifat.methodCards1", { returnObjects: true }) as { title: string; desc: string }[]);
  const methodCards2 = (t("minifat.methodCards2", { returnObjects: true }) as { title: string; desc: string }[]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pt-36 md:pt-44">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/applicazioni">
              <ArrowLeft className="h-4 w-4" /> {t("minifat.backToApps")}
            </Link>
          </Button>
        </div>

        {/* HERO */}
        <section className="pb-16 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
                <FileCheck2 className="h-4 w-4 text-primary" aria-hidden /> {t("minifat.heroBadge")}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                {t("minifat.heroH1a")}{" "}
                <span className="text-primary">{t("minifat.heroH1b")}</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-xl mx-auto lg:mx-0">
                {t("minifat.heroDesc")}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button variant="hero" size="lg" className="h-12 px-7 text-base" asChild>
                  <a href={buildMailto(`MiniFAT — ${t("minifat.heroCta")}`)}>
                    {t("minifat.heroCta")}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-7 text-base border-2 border-primary/40"
                  asChild
                >
                  <a href={buildMailto(`MiniFAT — ${t("minifat.heroDemo")}`)}>
                    <PlayCircle className="h-5 w-5" aria-hidden /> {t("minifat.heroDemo")}
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-sm text-foreground/65">
                {t("minifat.heroNote")}
              </p>
            </div>
            <img
              src={heroAsset.url}
              alt={t("minifat.heroImgAlt")}
              className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
              width={1280}
              height={896}
            />
          </div>
        </section>

        {/* COSA FA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("minifat.featuresSectionLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("minifat.featuresH2")}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ title, desc }, i) => {
                const Icon = featureIcons[i];
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

        {/* COME FUNZIONA */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("minifat.stepsSectionLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("minifat.stepsH2")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map(({ title, desc }, i) => {
                const Icon = stepIcons[i];
                const n = String(i + 1);
                return (
                  <Card key={n} className="relative border-2 border-primary/20 overflow-hidden">
                    <span className="absolute top-4 right-4 text-5xl font-extrabold text-primary/10 leading-none">
                      {n}
                    </span>
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
          </div>
        </section>

        {/* SCREENSHOT */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("minifat.screenshotsSectionLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("minifat.screenshotsH2")}</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {screenshots.map(({ caption }, i) => (
                <figure key={caption} className="text-center">
                  <div className="rounded-2xl border-2 border-primary/15 bg-secondary overflow-hidden shadow-[var(--shadow-card)]">
                    <img
                      src={screenshotImgs[i]}
                      alt={`MiniFAT — ${caption}`}
                      className="w-full h-full object-cover"
                      width={768}
                      height={1024}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs text-foreground/70">
                    <sup className="text-[0.65rem] font-bold text-primary mr-0.5">
                      {i + 1}
                    </sup>
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* IL METODO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("minifat.methodSectionLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("minifat.methodH2")}
              </h2>
            </div>

            <div className="space-y-5 text-lg text-foreground/85 leading-relaxed">
              <p>{t("minifat.methodP1")}</p>
              <p>{t("minifat.methodP2")}</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {methodCards1.map(({ title, desc }) => (
                <Card key={title} className="border-2 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-5 text-lg text-foreground/85 leading-relaxed mt-12">
              <p>{t("minifat.methodP3")}</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {methodCards2.map(({ title, desc }) => (
                <Card key={title} className="border-2 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border-2 border-primary/30 [background:var(--gradient-section-corsi)] p-8 text-center">
              <p className="text-xl md:text-2xl font-bold">
                {t("minifat.methodCalloutLine1")}
              </p>
              <p className="mt-2 text-lg text-foreground/85">
                {t("minifat.methodCalloutLine2")}
              </p>
            </div>
          </div>
        </section>


        {/* PERCHE */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("minifat.benefitsSectionLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("minifat.benefitsH2")}
              </h2>
              <p className="mt-3 text-foreground/80 max-w-2xl mx-auto">
                {t("minifat.benefitsSubtitle")}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map(({ title, desc }, i) => {
                const Icon = benefitIcons[i];
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
            <div className="mt-12 flex justify-center">
              <MiniFatCta />
            </div>
          </div>

        </section>

        {/* PREZZI */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-md">
            <div className="text-center mb-10">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("minifat.pricingSectionLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("minifat.pricingH2")}</h2>
            </div>
            <Card className="border-2 border-primary/30 shadow-[var(--shadow-elegant)] overflow-hidden">
              <div className="[background:var(--gradient-hero)] text-primary-foreground text-center py-7 px-6">
              <p className="text-lg font-semibold">{t("minifat.pricingPlanName")}</p>
                <p className="mt-1">
                  <span className="text-5xl font-extrabold">{getMiniFatMonthly().price}</span>
                  <span className="text-lg font-medium">{t("minifat.pricingMonth")}</span>
                </p>
              </div>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {planFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black border-2 border-black">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <span className="text-foreground/85 font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="hero" size="lg" className="w-full h-12 mt-7 text-base" asChild>
                  <a href={buildMailto(`MiniFAT — ${t("minifat.pricingCta")}`)}>
                    {t("minifat.pricingCta")} <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                  </a>
                </Button>
                <p className="mt-3 text-center text-xs text-foreground/60">
                  {t("minifat.pricingNote")}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              {t("minifat.faqH2")}
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
            <div className="mt-10 flex justify-center">
              <MiniFatCta />
            </div>
          </div>

        </section>

        {/* CTA FINALE */}
        <section className="py-20 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("minifat.ctaH2")}
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              {t("minifat.ctaDesc")}
            </p>
            <div className="mt-8 flex justify-center">
              <MiniFatCta />
            </div>

          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

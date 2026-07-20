import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Button } from "@/components/ui/button";
import {
  getSmartMaintenanceAnnual,
} from "@/lib/pricing";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  Wrench,
  KeyRound,
  Building2,
  ClipboardList,
  Camera,
  Video,
  ScanText,
  MapPin,
  FolderArchive,
  FileDown,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Gauge,
  Lock,
  Wifi,
  AlertTriangle,
  HardDrive,
  ShoppingCart,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TaxBadge, TaxNote } from "@/components/TaxDisclaimer";
import { PricingCartButton } from "@/components/PricingCartButton";
import heroAsset from "@/assets/smart-maintenance/home.png.asset.json";
import flowAsset from "@/assets/smart-maintenance/flow.png.asset.json";
import pdfImg from "@/assets/smart-maintenance/pdf.jpg";

const heroImg = heroAsset.url;
const flowImg = flowAsset.url;

export const Route = createFileRoute("/smart-maintenance")({
  head: () => ({
    meta: [
      { title: i18n.t("smartMaintenance.metaTitle") },
      {
        name: "description",
        content: i18n.t("smartMaintenance.metaDescription"),
      },
      {
        property: "og:title",
        content: i18n.t("smartMaintenance.ogTitle"),
      },
      {
        property: "og:description",
        content: i18n.t("smartMaintenance.ogDescription"),
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: SmartMaintenancePage,
});

const featureIcons = [
  KeyRound,
  Building2,
  ClipboardList,
  Camera,
  Video,
  ScanText,
  MapPin,
  FolderArchive,
  FileDown,
  Mail,
];

const stepIcons = [
  Wrench,
  ClipboardList,
  AlertTriangle,
  ClipboardList,
  Camera,
  Video,
  MapPin,
  Mail,
];

const benefitIcons = [Wifi, CheckCircle2, Layers, Gauge, HardDrive, ShieldCheck];

const privacyIcons = [HardDrive, Lock, FolderArchive];


function ActivateButton({ className = "" }: { className?: string }) {
  // Riusa il bottone della pagina Prezzi (riga 2 — 001SmMntnnc-01).
  // Fonte unica del prezzo/durata: tabella product_catalog di Supabase.
  return (
    <PricingCartButton
      code="001SmMntnnc-01"
      index={2}
      full
      className={className}
    />
  );
}


function AnnualActivateButton({ className = "" }: { className?: string }) {
  // Riusa il bottone della pagina Prezzi (riga 1 — 001SmMntnnc-12).
  // Fonte unica del prezzo/durata: tabella product_catalog di Supabase.
  return (
    <PricingCartButton
      code="001SmMntnnc-12"
      index={1}
      full
      className={className}
    />
  );
}

function ActivateButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 justify-center items-center ${className}`}>
      <ActivateButton />
      <AnnualActivateButton />
    </div>
  );
}

function SmartMaintenancePage() {
  const { t } = useTranslation();

  const features = (
    t("smartMaintenance.features", { returnObjects: true }) as { title: string; desc: string }[]
  ).map((f, i) => ({ ...f, icon: featureIcons[i] }));

  const steps = (
    t("smartMaintenance.steps", { returnObjects: true }) as { title: string; desc: string }[]
  ).map((s, i) => ({ ...s, n: String(i + 1), icon: stepIcons[i] }));

  const benefits = (
    t("smartMaintenance.benefits", { returnObjects: true }) as { title: string; desc: string }[]
  ).map((b, i) => ({ ...b, icon: benefitIcons[i] }));

  const pdfBlocks = t("smartMaintenance.pdfBlocks", { returnObjects: true }) as string[];

  const privacy = (
    t("smartMaintenance.privacy", { returnObjects: true }) as { title: string; desc: string }[]
  ).map((p, i) => ({ ...p, icon: privacyIcons[i] }));

  const faq = t("smartMaintenance.faq", { returnObjects: true }) as { q: string; a: string }[];

  const whatBadges = t("smartMaintenance.whatBadges", { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pt-36 md:pt-44">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/applicazioni">
              <ArrowLeft className="h-4 w-4" /> {t("smartMaintenance.backBtn")}
            </Link>
          </Button>
        </div>

        {/* HERO */}
        <section className="pb-16 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
                <Wrench className="h-4 w-4 text-primary" aria-hidden /> {t("smartMaintenance.heroBadge")}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                {t("smartMaintenance.heroH1a")} <span className="text-primary">{t("smartMaintenance.heroH1b")}</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-xl mx-auto lg:mx-0">
                {t("smartMaintenance.heroSubtitle")}
              </p>
              <div className="mt-8 flex flex-col items-center lg:items-start gap-3">
                <ActivateButtons />
                <TaxNote className="text-center max-w-md" />
              </div>
              <figure className="mt-8 m-0">
                <img
                  src={flowImg}
                  alt={t("smartMaintenance.heroFlowAlt")}
                  className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
                  width={1408}
                  height={742}
                  loading="lazy"
                />
              </figure>
              <p className="mt-4 text-sm text-foreground/65">
                {t("smartMaintenance.heroTagline")}
              </p>
            </div>
            <figure className="m-0">
              <img
                src={heroImg}
                alt={t("smartMaintenance.heroImgAlt")}
                className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
                width={1206}
                height={880}
              />
              <figcaption className="mt-3 text-center text-sm text-foreground/65">
                {t("smartMaintenance.heroFigcaption")}
              </figcaption>
            </figure>
          </div>
        </section>

        {/* COS'È */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              {t("smartMaintenance.whatLabel")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("smartMaintenance.whatH2")}
            </h2>
            <p className="mt-5 text-lg text-foreground/85 leading-relaxed">
              {t("smartMaintenance.whatBody")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {whatBadges.map((b) => (
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
          </div>
        </section>

        {/* FUNZIONALITÀ */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("smartMaintenance.featuresLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("smartMaintenance.featuresH2")}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ icon: Icon, title, desc }) => (
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
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* COME FUNZIONA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("smartMaintenance.howLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("smartMaintenance.howH2")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map(({ n, icon: Icon, title, desc }) => (
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
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* PERCHÉ */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("smartMaintenance.whyLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("smartMaintenance.whyH2")}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map(({ icon: Icon, title, desc }) => (
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
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* PDF GENERATO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
            <img
              src={pdfImg}
              alt={t("smartMaintenance.pdfImgAlt")}
              className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
              width={1024}
              height={1024}
              loading="lazy"
            />
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("smartMaintenance.pdfLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("smartMaintenance.pdfH2")}
              </h2>
              <p className="mt-4 text-lg text-foreground/85">
                {t("smartMaintenance.pdfBody")}
              </p>
              <ul className="mt-6 space-y-3">
                {pdfBlocks.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black border-2 border-black">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-foreground/85 font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 max-w-6xl mt-10 flex justify-center">
            <ActivateButtons />
          </div>
        </section>

        {/* PRIVACY */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("smartMaintenance.privacyLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("smartMaintenance.privacyH2")}</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {privacy.map(({ icon: Icon, title, desc }) => (
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
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              {t("smartMaintenance.faqH2")}
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
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="py-20 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("smartMaintenance.ctaH2")}
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              {t("smartMaintenance.ctaBody")}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <ActivateButtons />
              <TaxNote light className="text-center max-w-md" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

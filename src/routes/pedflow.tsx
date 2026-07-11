import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";
import { useCart } from "@/lib/cart";
import {
  getPedFlowMonthly,
  getPedFlowAnnual,
  toCartItem,
} from "@/lib/pricing";
import { toast } from "sonner";
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
  FlaskConical,
  FileText,
  Thermometer,
  Search,
  Database,
  Calculator,
  FileDown,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Gauge,
  Lock,
  Languages,
  
  ScrollText,
  Users,
  BookOpenCheck,
  ShoppingCart,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TaxBadge, TaxNote } from "@/components/TaxDisclaimer";
import logoAsset from "@/assets/apps/pedflow.png.asset.json";
import processAsset from "@/assets/pedflow/pedflow-process-en.png.asset.json";

import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { pedflow as pedflowLocale } from "@/i18n/locales/pages/pedflow";

const logoImg = logoAsset.url;
const processImg = processAsset.url;

// Register translations
const lang = i18n.language?.startsWith("en") ? "en" : "it";
i18n.addResourceBundle("it", "pedflow", pedflowLocale.it, true, false);
i18n.addResourceBundle("en", "pedflow", pedflowLocale.en, true, false);

const featureIcons = [
  FileText,
  Thermometer,
  ScrollText,
  Search,
  Database,
  Calculator,
  FileDown,
  Languages,
];

const stepIcons = [FileText, Thermometer, Search, Calculator, FileDown];

const benefitIcons = [Gauge, BookOpenCheck, Database, Layers, ShieldCheck, Languages];

const securityIcons = [Lock, ShieldCheck, Users];

const PEDFLOW_MONTHLY = getPedFlowMonthly();
const PEDFLOW_ANNUAL = getPedFlowAnnual();
const PEDFLOW_DOMAIN = "pedflow.corporateboostservice.eu";

function ActivateButton({ className = "" }: { className?: string }) {
  const { t } = useTranslation("pedflow");
  const { addItem } = useCart();
  const navigate = useNavigate();
  const plan = PEDFLOW_MONTHLY;
  const label = t("activateCta").replace("{{price}}", plan.price);
  return (
    <Button
      size="lg"
      className={`h-12 px-8 whitespace-normal leading-tight bg-orange-500 font-bold text-black hover:bg-orange-600 border-2 border-black ${className}`}
      onClick={() => {
        addItem(toCartItem(plan, PEDFLOW_DOMAIN));
        toast.success(t("addedToast"));
        navigate({ to: "/carrello" });
      }}
    >
      <ShoppingCart className="mr-2 h-5 w-5 shrink-0" aria-hidden /> {label} <TaxBadge className="ml-2" />
    </Button>
  );
}

function AnnualActivateButton({ className = "" }: { className?: string }) {
  const { t } = useTranslation("pedflow");
  const { addItem } = useCart();
  const navigate = useNavigate();
  const plan = PEDFLOW_ANNUAL;
  const label = t("annualActivateCta").replace("{{price}}", plan.price);
  return (
    <Button
      size="lg"
      className={`h-12 px-8 whitespace-normal leading-tight bg-[#1A365D] font-bold text-[#FEF08A] hover:bg-[#162d4d] border-2 border-black ${className}`}
      onClick={() => {
        addItem(toCartItem(plan, PEDFLOW_DOMAIN));
        toast.success(t("addedToast"));
        navigate({ to: "/carrello" });
      }}
    >
      <ShoppingCart className="mr-2 h-5 w-5 shrink-0" aria-hidden /> {label} <TaxBadge className="ml-2" />
    </Button>
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

export const Route = createFileRoute("/pedflow")({
  head: () => ({
    meta: [
      { title: i18n.t("pedflow:metaTitle") },
      {
        name: "description",
        content: i18n.t("pedflow:metaDescription"),
      },
      {
        property: "og:title",
        content: i18n.t("pedflow:ogTitle"),
      },
      {
        property: "og:description",
        content: i18n.t("pedflow:ogDescription"),
      },
      { property: "og:image", content: logoImg },
      { name: "twitter:image", content: logoImg },
    ],
  }),
  component: PedFlowPage,
});

function PedFlowPage() {
  const { t } = useTranslation("pedflow");

  const features = (t("features", { returnObjects: true }) as { title: string; desc: string }[]);
  const steps = (t("steps", { returnObjects: true }) as { title: string; desc: string }[]);
  const benefits = (t("benefits", { returnObjects: true }) as { title: string; desc: string }[]);
  const pdfBlocks = (t("pdfBlocks", { returnObjects: true }) as string[]);
  const security = (t("security", { returnObjects: true }) as { title: string; desc: string }[]);
  const faq = (t("faq", { returnObjects: true }) as { q: string; a: string }[]);
  const badges = (t("badges", { returnObjects: true }) as string[]);

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
              <FlaskConical className="h-4 w-4 text-primary" aria-hidden /> {t("heroBadge")}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {t("heroH1a")} <span className="text-primary">{t("heroH1b")}</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-xl mx-auto">
              {t("heroP")}
            </p>
            <img
              src={processImg}
              alt={t("processImgAlt")}
              className="mt-8 w-full rounded-2xl border-2 border-primary/15 shadow-lg bg-white"
              loading="lazy"
              width={1402}
              height={765}
            />
            <div className="mt-8 flex justify-center">
              <ActivateButtons />
            </div>
            <p className="mt-6 text-sm text-foreground/65">
              {t("heroCaption")}
            </p>
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
              {t("whatP")}
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
          </div>
        </section>

        {/* FUNZIONALITÀ */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("featLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("featH2")}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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

        {/* COME FUNZIONA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("howLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("howH2")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {steps.map(({ title, desc }, idx) => {
                const Icon = stepIcons[idx];
                const n = String(idx + 1);
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
                {t("whyLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("whyH2")}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map(({ title, desc }, idx) => {
                const Icon = benefitIcons[idx];
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

        {/* PDF GENERATO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="rounded-2xl border-2 border-primary/15 shadow-lg bg-white p-10 w-full max-w-md">
                <FileDown className="h-16 w-16 text-primary mx-auto mb-6" aria-hidden />
                <h3 className="text-xl font-bold text-center mb-2">{t("pdfCardH3")}</h3>
                <p className="text-center text-foreground/75">
                  {t("pdfCardP")}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("pdfLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("pdfH2")}
              </h2>
              <p className="mt-4 text-lg text-foreground/85">
                {t("pdfIntro")}
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

        {/* SICUREZZA */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("secLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("secH2")}</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {security.map(({ title, desc }, idx) => {
                const Icon = securityIcons[idx];
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

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
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
            <p className="mt-8 text-center text-sm text-foreground/60">
              {t("faqDisclaimer")}
            </p>
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="py-20 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("ctaH2")}
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              {t("ctaP")}
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

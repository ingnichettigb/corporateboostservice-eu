import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { MediaCode } from "@/components/MediaCode";
import { MediaSlot } from "@/components/MediaSlot";
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
import { PricingCartButton } from "@/components/PricingCartButton";
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

// Cartella e prompt AI degli slot immagine (codici registrati in docs/GEOGRAFIA-MEDIA.md).
// PEDFLOW-001 è lo schema di processo già caricato (pedflow-process-en.png).
const MEDIA_FOLDER = "src/assets/pedflow";

const STYLE_PHOTO =
  "Photorealistic documentary photograph, natural light, shallow depth of field, authentic industrial setting, people seen from a distance or from behind with no close-up faces, no watermarks, no logos. Any visible text must be correct English, spelled exactly as written, with no extra text.";
const STYLE_INDUSTRIAL =
  "Realistic industrial photography with a slightly technical look, steel, pipes and gauges, cool grey and blue tones with small yellow safety accents, sharp detail, no people, no watermarks, no logos. Any visible text must be correct English, spelled exactly as written, with no extra text.";
const STYLE_UI =
  "Clean modern software screenshot mockup on a laptop screen, palette of deep blue, white and light grey with yellow accents, soft depth and gentle shadows, professional mood, no watermarks. Every piece of visible text must be correct English, spelled exactly as written below, with no extra text.";

const MEDIA_PROMPTS: Record<string, string> = {
  "PEDFLOW-002": `Wide 16:9 (1600x900). A process engineer in a hard hat and hi-vis vest, seen from behind and slightly to the side, checks pressure equipment documentation on a tablet in front of pressure vessels and piping in a process plant at golden hour. ${STYLE_PHOTO}`,
  "PEDFLOW-003": `4:3 (1200x900). Pressure vessels, heat exchangers and a dense network of steel piping with valves and flanges in an industrial plant, low angle, overcast sky, clean and orderly installation. ${STYLE_INDUSTRIAL}`,
  "PEDFLOW-004": `4:3 (1200x900). A technician at a desk reading a printed Safety Data Sheet next to a laptop, a highlighter marking the lines 'CAS No.', 'EC No.' and 'H225 Highly flammable liquid and vapour'. Hard hat and notebook on the desk, industrial office with a window onto a plant. ${STYLE_PHOTO}`,
  "PEDFLOW-005": `16:10 (1600x1000). A software screen with a search box containing 'Ethanol' and a tab bar 'SDS' and 'Substance name / CAS'. Below, a results table with the columns 'Index No', 'CAS', 'EC', 'Chemical name', 'H codes' and one highlighted row: '603-002-00-5', '64-17-5', '200-578-6', 'ethanol', 'H225'. A small counter reads '4,400+ substances'. ${STYLE_UI}`,
  "PEDFLOW-006": `4:3 (1200x900). Close view of an insulated process pipe with a bimetal dial thermometer and a pressure gauge mounted on it, the thermometer needle in the middle of the scale, a yellow tag on the pipe reading 'Tmin / Tmax'. Blurred plant in the background. ${STYLE_INDUSTRIAL}`,
  "PEDFLOW-007": `16:10 (1600x1000). A software result panel titled 'Classification result' with two clearly separated boxes: 'Base Group: 2' and 'Final Group: 1', a yellow notice 'Art. 13 applied: Tmax exceeds flash point', and below a short written rationale paragraph. A button 'Save and download PDF'. ${STYLE_UI}`,
  "PEDFLOW-008": `4:3 (1200x900). A tidy A4 classification report on a desk, tilted slightly, with the heading 'PED Fluid Classification', rows 'Job no.', 'Customer', 'Project', 'Drawing no.', 'Tmin / Tmax', 'Substance, CAS, EC, H codes', 'Base Group', 'Final Group' and a boxed paragraph 'Rationale'. A small tab on the side reads 'Registry'. Blank placeholder values only, no real data. ${STYLE_UI}`,
  "PEDFLOW-009": `4:3 (1200x900). Four colleagues of different backgrounds, seen from behind or in profile, gathered around a table in a bright engineering office reviewing PED classifications on a large monitor and a tablet, a plant model and rolled drawings on the table. ${STYLE_PHOTO}`,
};

function SingleUseButton({ className = "" }: { className?: string }) {
  return <PricingCartButton code="011PedFlow-002" index={7} full className={className} />;
}

function ActivateButton({ className = "" }: { className?: string }) {
  return <PricingCartButton code="011PedFlow-030" index={8} full className={className} />;
}

function AnnualActivateButton({ className = "" }: { className?: string }) {
  return <PricingCartButton code="011PedFlow-365" index={9} full className={className} />;
}

function ActivateButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 justify-center items-center ${className}`}>
      <SingleUseButton />
      <ActivateButton />
      <AnnualActivateButton />
    </div>
  );
}


export const Route = createFileRoute("/pedflow")({
  head: () => landingHead("/pedflow"),
  component: PedFlowPage,
});

function PedFlowPage() {
  const { t, i18n } = useTranslation("pedflow");
  const isItalian = (i18n.language || "it").toLowerCase().startsWith("it");


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
            <MediaCode id="PEDFLOW-001" />
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
            <MediaSlot
              id="PEDFLOW-002"
              alt={t("imgAlt.m002")}
              prompt={MEDIA_PROMPTS["PEDFLOW-002"]}
              folder={MEDIA_FOLDER}
              className="mt-8"
            />
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
            <MediaSlot
              id="PEDFLOW-003"
              alt={t("imgAlt.m003")}
              prompt={MEDIA_PROMPTS["PEDFLOW-003"]}
              folder={MEDIA_FOLDER}
              className="mt-10 max-w-3xl mx-auto"
            />
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
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <MediaSlot
                id="PEDFLOW-004"
                alt={t("imgAlt.m004")}
                prompt={MEDIA_PROMPTS["PEDFLOW-004"]}
                folder={MEDIA_FOLDER}
                className=""
              />
              <MediaSlot
                id="PEDFLOW-005"
                alt={t("imgAlt.m005")}
                prompt={MEDIA_PROMPTS["PEDFLOW-005"]}
                folder={MEDIA_FOLDER}
                className=""
              />
              <MediaSlot
                id="PEDFLOW-006"
                alt={t("imgAlt.m006")}
                prompt={MEDIA_PROMPTS["PEDFLOW-006"]}
                folder={MEDIA_FOLDER}
                className=""
              />
              <MediaSlot
                id="PEDFLOW-007"
                alt={t("imgAlt.m007")}
                prompt={MEDIA_PROMPTS["PEDFLOW-007"]}
                folder={MEDIA_FOLDER}
                className=""
              />
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
            <MediaSlot
              id="PEDFLOW-009"
              alt={t("imgAlt.m009")}
              prompt={MEDIA_PROMPTS["PEDFLOW-009"]}
              folder={MEDIA_FOLDER}
              className="mt-10 max-w-3xl mx-auto"
            />
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* PDF GENERATO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col items-center gap-6">
              <MediaSlot
                id="PEDFLOW-008"
                alt={t("imgAlt.m008")}
                prompt={MEDIA_PROMPTS["PEDFLOW-008"]}
                folder={MEDIA_FOLDER}
                className="w-full"
              />
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

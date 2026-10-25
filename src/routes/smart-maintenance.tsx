/**
 * File: smart-maintenance.tsx · Percorso: src/routes/smart-maintenance.tsx · Revisione: 3 · Data: 25/10/2026 · Ora: 19:18
 * Landing SmartMaintenance. Immagini: codici SMART-001..012 (registro docs/GEOGRAFIA-MEDIA.md).
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { MediaCode } from "@/components/MediaCode";
import { MediaSlot } from "@/components/MediaSlot";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
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
  
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TaxNote } from "@/components/TaxDisclaimer";
import { PricingCartButton } from "@/components/PricingCartButton";
import heroAsset from "@/assets/smart-maintenance/home.png.asset.json";
import flowAsset from "@/assets/smart-maintenance/flow.png.asset.json";
import pdfImg from "@/assets/smart-maintenance/SMART-003.jpg";

const heroImg = heroAsset.url;
const flowImg = flowAsset.url;

const MEDIA_FOLDER = "src/assets/smart-maintenance";

const PHOTO_STYLE =
  `Photorealistic, natural lighting, shallow depth of field, professional industrial photography, 16:9, no brand logos, no watermark. Any visible text must be correct English, exactly as written, with no other text.`;
const VECTOR_STYLE =
  `Vector infographic comic style (flat vector art, clean sharp outlines, flat colours with very soft gradients), storyboard layout, palette of navy blue, safety yellow and white on a light background, 16:9, no photographic elements. All text must be correct English, exactly as written, with no other text.`;

// Prompt AI degli slot ancora vuoti (SMART-008..012). 004..007 sono screenshot reali del manuale.
const MEDIA_PROMPTS: Record<string, string> = {
  "SMART-004": "Screenshot reale dal manuale d'uso: schermata Terms & Conditions al primo avvio.",
  "SMART-005": "Screenshot reale dal manuale d'uso: schermata Impostazioni.",
  "SMART-006": "Screenshot reale dal manuale d'uso: schermata Bozze report.",
  "SMART-007": "Screenshot reale dell'app: Archivio invii con report inviati (e-mail oscurate).",
  "SMART-014": "Screenshot reale dell'app: passo 2/7, vista generale.",
  "SMART-015": "Screenshot reale dell'app: passo 3/7, locale/macchina e commessa.",
  "SMART-017": "Screenshot reale dell'app: passo 5/7, foto del guasto, filmato e vibrazioni.",
  "SMART-018": "Screenshot reale dell'app: passo 6/7, descrizione con dettatura.",
  "SMART-019": "Screenshot reale dell'app: passo 7/7, livello di urgenza.",
  "SMART-008": `Storyboard of 8 numbered panels (2 rows of 4) showing a friendly maintenance technician with a hard hat creating a fault report on a smartphone in a factory. Captions exactly: '1 Asset', '2 Work order', '3 Urgency', '4 Description & action', '5 Photos', '6 Video', '7 GPS', '8 Save & send'. Scenes: 1 scanning a machine nameplate; 2 a work-order tag; 3 four urgency chips 'Low', 'Medium', 'High', 'Urgent'; 4 speaking into the phone; 5 photographing a pump; 6 recording a short video; 7 a map pin; 8 a PDF and an envelope icon with a green check mark. ${VECTOR_STYLE}`,
  "SMART-009": `A maintenance technician in a hard hat and safety glasses, in a clean industrial plant, photographing the metal nameplate of an electric motor with a smartphone. The phone screen shows the camera view with a small overlay reading 'ASSET M-204'. Pipes and machinery softly blurred in the background. ${PHOTO_STYLE}`,
  "SMART-010": `Close-up industrial photograph of a smartphone resting flat on the housing of a running electric motor on a factory floor, measuring vibrations. Faint light blue vibration waves drawn around the motor, and the phone screen showing a simple three-line graph labelled 'X', 'Y', 'Z'. Steel, pipes and safety-yellow railings in the background. ${PHOTO_STYLE}`,
  "SMART-011": `Four-panel comic strip (2x2), panels numbered 1 to 4: 1 a technician in a basement plant looking at a phone showing 'No signal' with a crossed-out wifi icon; 2 the same technician completing a report, the phone shows 'Saved on device'; 3 the technician at the office, phone with full wifi bars labelled 'Back online'; 4 the phone sending an email, a big check mark and the word 'Sent'. ${VECTOR_STYLE}`,
  "SMART-012": `Infographic: a smartphone in the centre with a padlock on its screen and the label 'Stored on your device'. An arrow from the phone to an envelope labelled 'You decide when to send', and a crossed-out cloud icon labelled 'No automatic upload'. Three numbered callouts. ${VECTOR_STYLE}`,
};

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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


function SingleUseButton({ className = "" }: { className?: string }) {
  // Riga 1 della pagina Prezzi — 006SmMntnnc-002 (uso singolo).
  return (
    <PricingCartButton
      code="006SmMntnnc-002"
      index={1}
      full
      className={className}
    />
  );
}

function ActivateButton({ className = "" }: { className?: string }) {
  // Riga 2 della pagina Prezzi — 006SmMntnnc-030 (mensile).
  // Fonte unica del prezzo/durata: tabella product_catalog di Supabase.
  return (
    <PricingCartButton
      code="006SmMntnnc-030"
      index={2}
      full
      className={className}
    />
  );
}


function AnnualActivateButton({ className = "" }: { className?: string }) {
  // Riga 3 della pagina Prezzi — 006SmMntnnc-365 (annuale).
  // Fonte unica del prezzo/durata: tabella product_catalog di Supabase.
  return (
    <PricingCartButton
      code="006SmMntnnc-365"
      index={3}
      full
      className={className}
    />
  );
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
                <MediaCode id="SMART-001" />
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
              <MediaCode id="SMART-002" />
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
            <MediaSlot
              id="SMART-009"
              alt={t("smartMaintenance.imgAlt.m009")}
              prompt={MEDIA_PROMPTS["SMART-009"]}
              folder={MEDIA_FOLDER}
              className="mt-10 mx-auto max-w-3xl"
            />
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
            <div className="mt-12">
              <div className="text-center mb-6">
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">
                  {t("smartMaintenance.screensLabel")}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold">{t("smartMaintenance.screensH2")}</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start max-w-4xl mx-auto">
                <MediaSlot
                  id="SMART-004"
                  alt={t("smartMaintenance.imgAlt.m004")}
                  prompt={MEDIA_PROMPTS["SMART-004"]}
                  folder={MEDIA_FOLDER}
                  className=""
                />
                <MediaSlot
                  id="SMART-005"
                  alt={t("smartMaintenance.imgAlt.m005")}
                  prompt={MEDIA_PROMPTS["SMART-005"]}
                  folder={MEDIA_FOLDER}
                  className=""
                />
                <MediaSlot
                  id="SMART-006"
                  alt={t("smartMaintenance.imgAlt.m006")}
                  prompt={MEDIA_PROMPTS["SMART-006"]}
                  folder={MEDIA_FOLDER}
                  className=""
                />
                <MediaSlot
                  id="SMART-007"
                  alt={t("smartMaintenance.imgAlt.m007")}
                  prompt={MEDIA_PROMPTS["SMART-007"]}
                  folder={MEDIA_FOLDER}
                  className=""
                />
              </div>
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
            <MediaSlot
              id="SMART-008"
              alt={t("smartMaintenance.imgAlt.m008")}
              prompt={MEDIA_PROMPTS["SMART-008"]}
              folder={MEDIA_FOLDER}
              className="mb-10 mx-auto max-w-5xl"
            />
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
            <div className="mt-14">
              <div className="text-center mb-6">
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">
                  {t("smartMaintenance.fieldLabel")}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold">{t("smartMaintenance.fieldH2")}</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
                <MediaSlot
                  id="SMART-014"
                  alt={t("smartMaintenance.imgAlt.m014")}
                  prompt={MEDIA_PROMPTS["SMART-014"]}
                  folder={MEDIA_FOLDER}
                  className=""
                />
                <MediaSlot
                  id="SMART-015"
                  alt={t("smartMaintenance.imgAlt.m015")}
                  prompt={MEDIA_PROMPTS["SMART-015"]}
                  folder={MEDIA_FOLDER}
                  className=""
                />
                <MediaSlot
                  id="SMART-017"
                  alt={t("smartMaintenance.imgAlt.m017")}
                  prompt={MEDIA_PROMPTS["SMART-017"]}
                  folder={MEDIA_FOLDER}
                  className=""
                />
              </div>
              <div className="grid grid-cols-2 gap-6 items-start max-w-xl mx-auto mt-6">
                <MediaSlot
                  id="SMART-018"
                  alt={t("smartMaintenance.imgAlt.m018")}
                  prompt={MEDIA_PROMPTS["SMART-018"]}
                  folder={MEDIA_FOLDER}
                  className=""
                />
                <MediaSlot
                  id="SMART-019"
                  alt={t("smartMaintenance.imgAlt.m019")}
                  prompt={MEDIA_PROMPTS["SMART-019"]}
                  folder={MEDIA_FOLDER}
                  className=""
                />
              </div>
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
            <MediaSlot
              id="SMART-010"
              alt={t("smartMaintenance.imgAlt.m010")}
              prompt={MEDIA_PROMPTS["SMART-010"]}
              folder={MEDIA_FOLDER}
              className="mb-10 mx-auto max-w-4xl"
            />
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
            <MediaSlot
              id="SMART-011"
              alt={t("smartMaintenance.imgAlt.m011")}
              prompt={MEDIA_PROMPTS["SMART-011"]}
              folder={MEDIA_FOLDER}
              className="mt-10 mx-auto max-w-4xl"
            />
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* PDF GENERATO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
            <figure className="m-0">
            <img
              src={pdfImg}
              alt={t("smartMaintenance.pdfImgAlt")}
              className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
              width={1024}
              height={1024}
              loading="lazy"
            />
            <MediaCode id="SMART-003" />
            </figure>
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
            <MediaSlot
              id="SMART-012"
              alt={t("smartMaintenance.imgAlt.m012")}
              prompt={MEDIA_PROMPTS["SMART-012"]}
              folder={MEDIA_FOLDER}
              className="mt-10 mx-auto max-w-4xl"
            />
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

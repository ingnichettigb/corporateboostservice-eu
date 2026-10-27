/**
 * File: riciclo-ppwr.tsx · Percorso: src/routes/riciclo-ppwr.tsx · Revisione: 2 · Data: 25/10/2026 · Ora: 19:56
 * Landing Riciclabilità PPWR. Immagini: codici RICICLOPPWR-001..012 (registro docs/GEOGRAFIA-MEDIA.md).
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { landingHead } from "@/data/landing-seo-catalog";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft, ArrowRight, Recycle, ListChecks, Calculator, Award, Building2, Sparkles, Archive, Languages,
  Gauge, History, Users, FileCheck2, BadgeCheck, MailCheck, KeyRound, FileDown, CheckCircle2, Construction,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PricingCartButton } from "@/components/PricingCartButton";
import { TaxNote } from "@/components/TaxDisclaimer";
import i18n from "@/i18n";
import { ricicloPpwr as locale } from "@/i18n/locales/pages/riciclo-ppwr";
import { MediaSlot } from "@/components/MediaSlot";
import logoAsset from "@/assets/apps/riciclo-ppwr.png.asset.json";

i18n.addResourceBundle("it", "ricicloPpwr", locale.it, true, false);
i18n.addResourceBundle("en", "ricicloPpwr", locale.en, true, false);
i18n.addResourceBundle("de", "ricicloPpwr", locale.de, true, false);
i18n.addResourceBundle("es", "ricicloPpwr", locale.es, true, false);

const logo = logoAsset.url;
const URL_ = "https://corporateboostservice.eu/riciclo-ppwr";

const featureIcons = [ListChecks, Calculator, Award, Building2, Sparkles, Archive, Languages];
const whyIcons = [Gauge, History, Users, FileCheck2, BadgeCheck, Languages];
const secIcons = [MailCheck, KeyRound, FileDown];

const MEDIA_FOLDER = "src/assets/riciclo-ppwr";

const PHOTO_STYLE =
  `Photorealistic, natural soft daylight, shallow depth of field, professional photography, 16:9, light green, white and grey palette, no brand logos, no watermark. Any visible text must be correct English, exactly as written, with no other text.`;
const VECTOR_STYLE =
  `Vector infographic comic style (flat vector art, clean sharp outlines, flat colours with very soft gradients), storyboard layout with numbered panels, palette of green, teal and white on a light background, 16:9, no photographic elements. All text must be correct English, exactly as written, with no other text.`;

// Prompt AI degli slot vuoti. 007..010 sono screenshot reali dell'app (e-mail oscurate).
const MEDIA_PROMPTS: Record<string, string> = {
  "RICICLOPPWR-001": `Wide shot of packaging samples on a clean stainless-steel laboratory bench: a clear PET bottle, a glass bottle, a white HDPE cap, a toothpaste tube and a small kraft box, with a precision scale softly blurred in the background. No people, no text, no logos. ${PHOTO_STYLE}`,
  "RICICLOPPWR-002": `Three numbered panels showing how the calculation works. Panel 1: a PET bottle, a cap and a label, each with a weight tag '24.50 g', '2.10 g', '0.80 g'; caption '1 Components'. Panel 2: a small scale and a calculator with the formula 'weight x recyclable % / 100'; caption '2 Weighted calculation'. Panel 3: a round gauge showing '97.08 %' with a green badge 'A'; caption '3 Recyclability'. ${VECTOR_STYLE}`,
  "RICICLOPPWR-003": `Infographic of the four recyclability grades as four horizontal bars of decreasing length with a vertical marker near the top bar. Labels exactly: 'Grade A >= 95%', 'Grade B >= 80%', 'Grade C >= 70%', 'Not compliant < 70%'. Bars in dark green, green, light green and red. ${VECTOR_STYLE}`,
  "RICICLOPPWR-004": `Industrial recycling plant sorting line: conveyor belts carrying sorted clear PET bottles and white HDPE caps, compressed plastic bales in the background, safety-yellow railings, a few workers in hi-vis vests seen from far away, overhead industrial lighting. No text, no logos. ${PHOTO_STYLE}`,
  "RICICLOPPWR-005": `Close-up laboratory photograph of a white HDPE bottle cap on a precision analytical balance with a glass draft shield, a clear PET bottle and a stainless-steel tray beside it. The balance display reads exactly '2.10 g'. ${PHOTO_STYLE}`,
  "RICICLOPPWR-006": `Four numbered panels from product to PDF. Captions exactly: '1 Product data' (a form with name and revision), '2 Components' (a list of parts with weights), '3 Calculate' (a percentage gauge and a badge 'A'), '4 Save and download' (a PDF document with a download arrow). ${VECTOR_STYLE}`,
  "RICICLOPPWR-007": "Screenshot reale dell'app: editor della valutazione con bilancio di massa, risultato e soglie.",
  "RICICLOPPWR-008": "Screenshot reale dell'app: Impostazioni, dati dell'azienda e logo (e-mail oscurata).",
  "RICICLOPPWR-009": "Screenshot reale dell'app: archivio delle valutazioni (e-mail oscurata).",
  "RICICLOPPWR-010": "Screenshot reale dell'app: anteprima del report PDF (e-mail oscurata).",
  "RICICLOPPWR-011": `Three numbered panels about secure access. Captions exactly: '1 Email verification' (an envelope with a six-digit code), '2 Licence with PUK code' (a key and a licence card), '3 PDF export quota' (a PDF icon with a counter '20'). ${VECTOR_STYLE}`,
  "RICICLOPPWR-012": `Technical flat lay of the components of a PET bottle package neatly separated on a light grey surface with thin leader lines and labels exactly: 'Body', 'Cap', 'Label', 'Glue'. Clean industrial product-photography style, top-down view, soft shadows. ${PHOTO_STYLE}`,
};

export const Route = createFileRoute("/riciclo-ppwr")({
  head: () => landingHead("/riciclo-ppwr"),
  component: RicicloPpwrPage,
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
      <PricingCartButton code="060RicicloPPWR-002" index={21} full />
      <PricingCartButton code="060RicicloPPWR-030" index={22} full />
      <PricingCartButton code="060RicicloPPWR-365" index={23} full />
      <TaxNote className="mt-2 max-w-md mx-auto" />
    </div>
  );
}

function Heading({ label, h2, light = false }: { label: string; h2: string; light?: boolean }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${light ? "text-white/85" : "text-primary"}`}>{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold">{h2}</h2>
    </div>
  );
}

const cardCls = "p-6 rounded-2xl border-2 border-primary/20 bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all";

function RicicloPpwrPage() {
  const { t } = useTranslation("ricicloPpwr");
  const arr = <X,>(k: string) => t(k, { returnObjects: true }) as X;
  const tags = arr<string[]>("tags");
  const features = arr<{ title: string; desc: string }[]>("features");
  const steps = arr<{ title: string; desc: string }[]>("steps");
  const why = arr<{ title: string; desc: string }[]>("why");
  const pdfPoints = arr<string[]>("pdfPoints");
  const pdf = arr<{ company: string; program: string; title: string; colComp: string; colWeight: string; colIdx: string; rows: string[][]; result: string; place: string; date: string; ref: string; sign: string; footer: string; page: string }>("pdf");
  const security = arr<{ title: string; desc: string }[]>("security");
  const faq = arr<{ q: string; a: string }[]>("faq");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-36 md:pt-44">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/applicazioni"><ArrowLeft className="h-4 w-4" /> {t("back")}</Link>
          </Button>
        </div>

        {/* HERO */}
        <section className="pb-16 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <img src={logo} alt="060RicicloPPWR" width={140} height={140} className="mx-auto mb-6 h-32 w-32 object-contain" />
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
              <Recycle className="h-4 w-4 text-primary" aria-hidden /> {t("eyebrow")}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{t("h1")}</h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-xl mx-auto">{t("heroP")}</p>
            <PriceButtons />
            <p className="mt-8 text-sm font-semibold text-foreground/75">{t("keyPoints")}</p>
            <MediaSlot
              id="RICICLOPPWR-001"
              alt={t("imgAlt.m001")}
              prompt={MEDIA_PROMPTS["RICICLOPPWR-001"]}
              folder={MEDIA_FOLDER}
              className="mt-10"
            />
          </div>
        </section>

        {/* COS'È */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Heading label={t("whatLabel")} h2={t("whatH2")} />
            <p className="-mt-6 text-lg text-foreground/85 leading-relaxed">{t("whatP")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {tags.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full border-2 border-primary/20 bg-white px-4 py-1.5 text-sm font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden /> {b}
                </span>
              ))}
            </div>
            <div className="mt-10 grid md:grid-cols-2 gap-6 items-start">
              <MediaSlot
                id="RICICLOPPWR-002"
                alt={t("imgAlt.m002")}
                prompt={MEDIA_PROMPTS["RICICLOPPWR-002"]}
                folder={MEDIA_FOLDER}
                className=""
              />
              <MediaSlot
                id="RICICLOPPWR-004"
                alt={t("imgAlt.m004")}
                prompt={MEDIA_PROMPTS["RICICLOPPWR-004"]}
                folder={MEDIA_FOLDER}
                className=""
              />
            </div>
            <PriceButtons />
          </div>
        </section>

        {/* FUNZIONALITÀ */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <Heading label={t("featLabel")} h2={t("featH2")} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => {
                const Icon = featureIcons[i] ?? Recycle;
                return (
                  <article key={f.title} className={cardCls}>
                    <div className="h-12 w-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4"><Icon className="h-6 w-6" aria-hidden /></div>
                    <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                    <p className="text-foreground/80 leading-relaxed">{f.desc}</p>
                  </article>
                );
              })}
            </div>
            <MediaSlot
              id="RICICLOPPWR-003"
              alt={t("imgAlt.m003")}
              prompt={MEDIA_PROMPTS["RICICLOPPWR-003"]}
              folder={MEDIA_FOLDER}
              className="mt-10 mx-auto max-w-4xl"
            />
            <div className="mt-12">
              <div className="text-center mb-6">
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">{t("shotsLabel")}</p>
                <h3 className="text-2xl md:text-3xl font-bold">{t("shotsH2")}</h3>
              </div>
              <MediaSlot
                id="RICICLOPPWR-007"
                alt={t("imgAlt.m007")}
                prompt={MEDIA_PROMPTS["RICICLOPPWR-007"]}
                folder={MEDIA_FOLDER}
                className="mx-auto max-w-4xl"
              />
              <div className="mt-6 grid md:grid-cols-2 gap-6 items-start max-w-4xl mx-auto">
                <MediaSlot
                  id="RICICLOPPWR-008"
                  alt={t("imgAlt.m008")}
                  prompt={MEDIA_PROMPTS["RICICLOPPWR-008"]}
                  folder={MEDIA_FOLDER}
                  className=""
                />
                <MediaSlot
                  id="RICICLOPPWR-009"
                  alt={t("imgAlt.m009")}
                  prompt={MEDIA_PROMPTS["RICICLOPPWR-009"]}
                  folder={MEDIA_FOLDER}
                  className=""
                />
              </div>
            </div>
            <PriceButtons />
          </div>
        </section>

        {/* COME FUNZIONA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Heading label={t("stepsLabel")} h2={t("stepsH2")} />
            <MediaSlot
              id="RICICLOPPWR-006"
              alt={t("imgAlt.m006")}
              prompt={MEDIA_PROMPTS["RICICLOPPWR-006"]}
              folder={MEDIA_FOLDER}
              className="mb-10 mx-auto max-w-4xl"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s, i) => (
                <article key={s.title} className={cardCls}>
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mb-4">{i + 1}</div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-foreground/80">{s.desc}</p>
                </article>
              ))}
            </div>
            <PriceButtons />
          </div>
        </section>

        {/* PERCHÉ */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <Heading label={t("whyLabel")} h2={t("whyH2")} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {why.map((w, i) => {
                const Icon = whyIcons[i] ?? Recycle;
                return (
                  <article key={w.title} className={cardCls}>
                    <Icon className="h-7 w-7 text-primary mb-3" aria-hidden />
                    <h3 className="font-bold text-lg mb-2">{w.title}</h3>
                    <p className="text-foreground/80">{w.desc}</p>
                  </article>
                );
              })}
            </div>
            <div className="mt-10 grid md:grid-cols-2 gap-6 items-start max-w-4xl mx-auto">
              <MediaSlot
                id="RICICLOPPWR-005"
                alt={t("imgAlt.m005")}
                prompt={MEDIA_PROMPTS["RICICLOPPWR-005"]}
                folder={MEDIA_FOLDER}
                className=""
              />
              <MediaSlot
                id="RICICLOPPWR-012"
                alt={t("imgAlt.m012")}
                prompt={MEDIA_PROMPTS["RICICLOPPWR-012"]}
                folder={MEDIA_FOLDER}
                className=""
              />
            </div>
            <PriceButtons />
          </div>
        </section>

        {/* ANTEPRIMA PDF */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <Heading label={t("pdfLabel")} h2={t("pdfH2")} />
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="mx-auto w-full max-w-md aspect-[210/297] bg-white rounded-md border border-primary/20 shadow-[var(--shadow-elegant)] p-6 flex flex-col text-[11px] text-foreground">
                <div className="flex items-center justify-between border-b-2 border-primary/20 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded bg-primary text-primary-foreground flex items-center justify-center"><Building2 className="h-5 w-5" aria-hidden /></div>
                    <span className="font-bold">{pdf.company}</span>
                  </div>
                  <img src={logo} alt="" className="h-10 w-10 object-contain" />
                </div>
                <p className="mt-4 text-base font-bold">{pdf.title}</p>
                <p className="text-foreground/60">{pdf.program}</p>
                <table className="mt-4 w-full">
                  <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-1.5">{pdf.colComp}</th><th className="text-right p-1.5">{pdf.colWeight}</th><th className="text-right p-1.5">{pdf.colIdx}</th></tr></thead>
                  <tbody>
                    {pdf.rows.map((r, i) => (
                      <tr key={r[0]} className={i % 2 ? "bg-muted" : ""}><td className="p-1.5">{r[0]}</td><td className="p-1.5 text-right">{r[1]}</td><td className="p-1.5 text-right">{r[2]}</td></tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 rounded-md border-2 border-primary bg-primary/10 p-3 text-center text-sm font-bold text-primary">{pdf.result}</div>
                <div className="mt-auto rounded-md border border-primary/20 p-3 space-y-2">
                  <div className="grid grid-cols-3 gap-2">
                    {[pdf.place, pdf.date, pdf.ref].map((l) => (<div key={l}><span className="text-foreground/60">{l}</span><div className="border-b border-foreground/30 h-4" /></div>))}
                  </div>
                  <div><span className="text-foreground/60">{pdf.sign}</span><div className="border border-dashed border-foreground/30 h-10 rounded" /></div>
                </div>
                <div className="mt-3 flex justify-between gap-2 text-[9px] text-foreground/60"><span>{pdf.footer}</span><span className="whitespace-nowrap">{pdf.page}</span></div>
              </div>
              <div>
                <ul className="space-y-3">
                  {pdfPoints.map((p) => (<li key={p} className="flex gap-3 text-lg"><CheckCircle2 className="h-6 w-6 text-primary shrink-0" aria-hidden />{p}</li>))}
                </ul>
                <p className="mt-6 text-sm text-foreground/70 italic">{t("pdfNote")}</p>
              </div>
            </div>
            <MediaSlot
              id="RICICLOPPWR-010"
              alt={t("imgAlt.m010")}
              prompt={MEDIA_PROMPTS["RICICLOPPWR-010"]}
              folder={MEDIA_FOLDER}
              className="mt-10 mx-auto max-w-4xl"
            />
            <PriceButtons />
          </div>
        </section>

        {/* SICUREZZA */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-5xl">
            <Heading label={t("secLabel")} h2={t("secH2")} />
            <div className="grid md:grid-cols-3 gap-5">
              {security.map((s, i) => {
                const Icon = secIcons[i] ?? KeyRound;
                return (
                  <article key={s.title} className={cardCls}>
                    <Icon className="h-7 w-7 text-primary mb-3" aria-hidden />
                    <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                    <p className="text-foreground/80">{s.desc}</p>
                  </article>
                );
              })}
            </div>
            <MediaSlot
              id="RICICLOPPWR-011"
              alt={t("imgAlt.m011")}
              prompt={MEDIA_PROMPTS["RICICLOPPWR-011"]}
              folder={MEDIA_FOLDER}
              className="mt-10 mx-auto max-w-4xl"
            />
            <PriceButtons />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <Heading label={t("faqLabel")} h2={t("faqH2")} />
            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((f, i) => (
                <AccordionItem key={f.q} value={`f${i}`} className="rounded-xl border-2 border-primary/15 bg-white px-5">
                  <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <PriceButtons />
          </div>
        </section>

        {/* CTA */}
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

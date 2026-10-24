/**
 * File: riuso-ppwr.tsx
 * Revisione: 1
 * Data: 24/10/2026
 * Ora: 21:07
 */

import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft, ArrowRight, Recycle, ClipboardList, Gauge, QrCode, ListChecks, Building2, Archive,
  CheckCircle2, XCircle, CircleDashed, Construction, HardDrive, FileDown, MailCheck, KeyRound,
  Factory, Truck, Wrench, Users, Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PricingCartButton } from "@/components/PricingCartButton";
import { MediaCode } from "@/components/MediaCode";
import { TaxNote } from "@/components/TaxDisclaimer";
import i18n from "@/i18n";
import riusoLogo from "@/assets/apps/riuso-ppwr.jpeg.asset.json";
import { riusoPpwr as locale } from "@/i18n/locales/pages/riuso-ppwr";

i18n.addResourceBundle("it", "riusoPpwr", locale.it, true, false);
i18n.addResourceBundle("en", "riusoPpwr", locale.en, true, false);
i18n.addResourceBundle("de", "riusoPpwr", locale.de, true, false);
i18n.addResourceBundle("es", "riusoPpwr", locale.es, true, false);

/* ------------------------------------------------------------------ */
/* IMMAGINI                                                            */
/* Codice didascalia: [PREFISSO]-[NNN], progressivo crescente, sempre   */
/* sotto l'immagine (componente MediaCode). MAI su icone o loghi.       */
/*                                                                      */
/* Come sostituire un riquadro con l'immagine reale:                    */
/*   1. carica il file e ottieni l'URL (come per gli altri asset)       */
/*   2. metti l'URL in `src` dello slot corrispondente                  */
/*   3. la didascalia RIUSOPPWR-00N resta uguale, non va toccata        */
/* SHOW_PLACEHOLDERS = false nasconde i riquadri ancora vuoti.          */
/* ------------------------------------------------------------------ */
const MEDIA_PREFIX = "RIUSOPPWR";
const SHOW_PLACEHOLDERS = true;

type Slot = { ratio: string; size: string; src?: string; prompt: string };
const IMAGE_SLOTS: Slot[] = [
  {
    ratio: "16:9", size: "1600x900",
    prompt: "Photorealistic wide shot of a clean, modern logistics yard: stacked white reusable IBC containers in steel cages, grey steel drums and plastic crates on pallets, soft daylight, light blue and white colour palette, subtle circular arrows painted on the floor suggesting a reuse loop, professional corporate style. No text, no logos, no people.",
  },
  {
    ratio: "4:3", size: "1200x900",
    prompt: "Clean flat vector infographic on a white background: a circular reuse loop with five stages connected by arrows (fill, transport, use, return, inspect-clean-repair), a stylised IBC container icon at each stage, palette of blue shades (#0B3A8F, #3B82C4, #DCEBFA), rounded shapes, minimal and professional. No text labels, no logos.",
  },
  {
    ratio: "4:3", size: "1200x900",
    prompt: "Photorealistic medium shot of a technician in safety gloves and glasses inspecting a white reusable IBC container with steel cage inside a clean washing and reconditioning bay, holding a tablet, bright neutral lighting, shallow depth of field. No visible brand names, no readable text, face not in focus.",
  },
  {
    ratio: "4:3", size: "1200x900",
    prompt: "Macro close-up photograph of a durable label on a reusable plastic container showing a QR code, a DataMatrix code and a small RFID tag, softly blurred warehouse background with more containers, cool blue tones, high detail. No readable text, no brand names.",
  },
  {
    ratio: "16:10", size: "1600x1000",
    prompt: "Preferibile: screenshot reale della dashboard dell'app (elenco valutazioni con badge verde IDONEO, rosso NON IDONEO, giallo INCOMPLETO). In alternativa mockup: a laptop on a tidy desk showing a web app with a table list of records and green, red and amber status badges, blue and white interface, no real company names, no readable text.",
  },
];

function MediaImage({ n, alt, className = "" }: { n: number; alt: string; className?: string }) {
  const { t } = useTranslation("riusoPpwr");
  const slot = IMAGE_SLOTS[n - 1];
  const code = `${MEDIA_PREFIX}-${String(n).padStart(3, "0")}`;
  if (!slot.src && !SHOW_PLACEHOLDERS) return null;
  return (
    <figure className={`w-full ${className}`}>
      {slot.src ? (
        <img
          src={slot.src}
          alt={alt}
          loading="lazy"
          className="w-full rounded-xl border-2 border-primary/20 object-cover shadow-[var(--shadow-card)]"
          style={{ aspectRatio: slot.ratio.replace(":", " / ") }}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex min-h-56 w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-primary/40 bg-white p-5 text-center"
        >
          <ImageIcon className="h-8 w-8 text-primary" aria-hidden />
          <p className="text-sm font-bold">{t("placeholderTitle")}</p>
          <p className="text-xs font-semibold text-primary">{slot.ratio} · {slot.size}</p>
          <p className="max-w-lg text-xs leading-relaxed text-foreground/70">{slot.prompt}</p>
        </div>
      )}
      <MediaCode id={code} />
    </figure>
  );
}

/* ------------------------------------------------------------------ */

const featureIcons = [ClipboardList, Gauge, QrCode, ListChecks, Building2, Archive];
const secIcons = [HardDrive, FileDown, MailCheck, KeyRound];
const forIcons = [Factory, Truck, Wrench, Users];
const outcomeStyle = [
  { Icon: CheckCircle2, box: "border-green-700/40 bg-green-50", badge: "bg-green-800 text-white", icon: "text-green-800" },
  { Icon: XCircle, box: "border-red-700/40 bg-red-50", badge: "bg-red-800 text-white", icon: "text-red-800" },
  { Icon: CircleDashed, box: "border-amber-600/50 bg-amber-50", badge: "bg-amber-800 text-white", icon: "text-amber-800" },
];

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

/* Bottoni d'acquisto: NON modificare. Sono i PricingCartButton collegati a
   product_catalog (stessi codici e indici della pagina Prezzi), quindi un
   cambio di prezzo nel database si propaga a tutti i bottoni. */
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
      <div className="flex w-full max-w-[19rem] flex-col gap-3">
      <PricingCartButton code="070RiusoPPWR-002" index={24} full base />
      <PricingCartButton code="070RiusoPPWR-030" index={25} full base />
      <PricingCartButton code="070RiusoPPWR-365" index={26} full base />
      </div>
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

type T = { title: string; desc: string };

function RiusoPpwrPage() {
  const { t } = useTranslation("riusoPpwr");
  const arr = <X,>(k: string) => t(k, { returnObjects: true }) as X;
  const tags = arr<string[]>("tags");
  const reqBlocks = arr<{ title: string; sub: string; items: string[] }[]>("reqBlocks");
  const features = arr<T[]>("features");
  const steps = arr<T[]>("steps");
  const outcomes = arr<{ badge: string; title: string; desc: string }[]>("outcomes");
  const pdfPoints = arr<string[]>("pdfPoints");
  const pdf = arr<{
    company: string; program: string; title: string; rows: [string, string][];
    colReq: string; colOutcome: string; reqRows: [string, string][]; result: string;
    place: string; date: string; sign: string; footer: string; page: string;
  }>("pdf");
  const tracePoints = arr<string[]>("tracePoints");
  const security = arr<T[]>("security");
  const forList = arr<T[]>("forList");
  const plans = arr<{ name: string; days: string; pdf: string }[]>("plans");
  const faq = arr<{ q: string; a: string }[]>("faq");
  const imgAlt = arr<string[]>("imgAlt");

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
            <img src={riusoLogo.url} alt="070RiusoPPWR" width={140} height={140} className="mx-auto mb-6 h-32 w-32 rounded-xl object-contain" />
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
              <Recycle className="h-4 w-4 text-primary" aria-hidden /> {t("eyebrow")}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{t("h1")}</h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-xl mx-auto">{t("heroP")}</p>
            <PriceButtons />
            <p className="mt-8 text-sm font-semibold text-foreground/75">{t("keyPoints")}</p>
          </div>
          <div className="container mx-auto px-4 max-w-4xl mt-10">
            <MediaImage n={1} alt={imgAlt[0]} />
          </div>
        </section>

        {/* COS'È */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <Heading label={t("whatLabel")} h2={t("whatH2")} />
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-lg text-foreground/85 leading-relaxed">{t("whatP")}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {tags.map((b) => (
                    <span key={b} className="inline-flex items-center gap-1.5 rounded-full border-2 border-primary/20 bg-white px-4 py-1.5 text-sm font-semibold">
                      <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden /> {b}
                    </span>
                  ))}
                </div>
              </div>
              <MediaImage n={2} alt={imgAlt[1]} />
            </div>
            <PriceButtons />
          </div>
        </section>

        {/* 23 REQUISITI */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <Heading label={t("reqLabel")} h2={t("reqH2")} />
            <p className="-mt-6 mb-10 max-w-3xl mx-auto text-center text-lg text-foreground/85 leading-relaxed">{t("reqIntro")}</p>
            <div className="max-w-xl mx-auto mb-10">
              <MediaImage n={3} alt={imgAlt[2]} />
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              {reqBlocks.map((b) => (
                <article key={b.title} className={cardCls}>
                  <span className="inline-block rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-bold mb-3">{b.sub}</span>
                  <h3 className="font-bold text-lg mb-4">{b.title}</h3>
                  <ul className="space-y-2.5">
                    {b.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-sm text-foreground/85">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <PriceButtons />
          </div>
        </section>

        {/* FUNZIONALITÀ */}
        <section className="py-20 bg-background">
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
            <PriceButtons />
          </div>
        </section>

        {/* COME FUNZIONA */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-5xl">
            <Heading label={t("stepsLabel")} h2={t("stepsH2")} />
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

        {/* ESITO AUTOMATICO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <Heading label={t("outcomeLabel")} h2={t("outcomeH2")} />
            <p className="-mt-6 mb-10 text-center text-lg text-foreground/85">{t("outcomeP")}</p>
            <div className="grid md:grid-cols-3 gap-5">
              {outcomes.map((o, i) => {
                const s = outcomeStyle[i] ?? outcomeStyle[0];
                return (
                  <article key={o.badge} className={`p-6 rounded-2xl border-2 ${s.box} shadow-[var(--shadow-card)]`}>
                    <s.Icon className={`h-8 w-8 mb-3 ${s.icon}`} aria-hidden />
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wide mb-3 ${s.badge}`}>{o.badge}</span>
                    <h3 className="font-bold text-lg mb-2">{o.title}</h3>
                    <p className="text-foreground/80">{o.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ANTEPRIMA REPORT A4 */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <Heading label={t("pdfLabel")} h2={t("pdfH2")} />
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="mx-auto w-full max-w-md aspect-[210/297] bg-white rounded-md border border-primary/20 shadow-[var(--shadow-elegant)] p-6 flex flex-col text-[11px] text-foreground">
                <div className="flex items-center justify-between border-b-2 border-primary/20 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded bg-primary text-primary-foreground flex items-center justify-center"><Building2 className="h-5 w-5" aria-hidden /></div>
                    <span className="font-bold">{pdf.company}</span>
                  </div>
                  <Recycle className="h-8 w-8 text-primary" aria-hidden />
                </div>
                <p className="mt-4 text-base font-bold">{pdf.title}</p>
                <p className="text-foreground/60">{pdf.program}</p>
                <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
                  {pdf.rows.map((r) => (
                    <div key={r[0]} className="contents"><dt className="text-foreground/60">{r[0]}</dt><dd className="font-semibold">{r[1]}</dd></div>
                  ))}
                </dl>
                <table className="mt-4 w-full">
                  <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-1.5">{pdf.colReq}</th><th className="text-right p-1.5">{pdf.colOutcome}</th></tr></thead>
                  <tbody>
                    {pdf.reqRows.map((r, i) => (
                      <tr key={r[0]} className={i % 2 ? "bg-muted" : ""}><td className="p-1.5">{r[0]}</td><td className="p-1.5 text-right font-bold text-green-800">{r[1]}</td></tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 rounded-md border-2 border-green-800 bg-green-50 p-3 text-center text-[11px] font-bold text-green-900">{pdf.result}</div>
                <div className="mt-auto rounded-md border border-primary/20 p-3 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {[pdf.place, pdf.date].map((l) => (<div key={l}><span className="text-foreground/60">{l}</span><div className="border-b border-foreground/30 h-4" /></div>))}
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
            <PriceButtons />
          </div>
        </section>

        {/* SISTEMA E TRACCIABILITÀ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <Heading label={t("traceLabel")} h2={t("traceH2")} />
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <MediaImage n={4} alt={imgAlt[3]} className="order-last lg:order-first" />
              <div>
                <p className="text-lg text-foreground/85 leading-relaxed">{t("traceP")}</p>
                <ul className="mt-6 space-y-3">
                  {tracePoints.map((p) => (<li key={p} className="flex gap-3 text-lg"><CheckCircle2 className="h-6 w-6 text-primary shrink-0" aria-hidden />{p}</li>))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ARCHIVIO E ACCESSO */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <Heading label={t("secLabel")} h2={t("secH2")} />
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <MediaImage n={5} alt={imgAlt[4]} />
              <div className="grid sm:grid-cols-2 gap-5">
                {security.map((s, i) => {
                  const Icon = secIcons[i] ?? KeyRound;
                  return (
                    <article key={s.title} className={cardCls}>
                      <Icon className="h-7 w-7 text-primary mb-3" aria-hidden />
                      <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                      <p className="text-foreground/80 text-sm leading-relaxed">{s.desc}</p>
                    </article>
                  );
                })}
              </div>
            </div>
            <PriceButtons />
          </div>
        </section>

        {/* A CHI SERVE */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <Heading label={t("forLabel")} h2={t("forH2")} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {forList.map((f, i) => {
                const Icon = forIcons[i] ?? Users;
                return (
                  <article key={f.title} className={cardCls}>
                    <Icon className="h-7 w-7 text-primary mb-3" aria-hidden />
                    <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                    <p className="text-foreground/80">{f.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PIANI */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Heading label={t("plansLabel")} h2={t("plansH2")} />
            <p className="-mt-6 mb-10 text-lg text-foreground/85">{t("plansP")}</p>
            <div className="grid sm:grid-cols-3 gap-5 text-left">
              {plans.map((p) => (
                <article key={p.name} className={cardCls}>
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <p className="mt-2 text-foreground/80">{p.days}</p>
                  <p className="mt-1 text-2xl font-bold text-primary">{p.pdf}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-foreground/75">{t("plansNote")}</p>
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

        {/* ALTRA APP: RICICLABILITÀ */}
        <section className="pb-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className={`${cardCls} text-center`}>
              <Recycle className="mx-auto h-8 w-8 text-primary mb-3" aria-hidden />
              <h3 className="font-bold text-xl">{t("crossLabel")}</h3>
              <p className="mt-2 text-foreground/80">{t("crossText")}</p>
              <Button asChild className="mt-5">
                <Link to="/riciclo-ppwr">{t("crossBtn")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
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

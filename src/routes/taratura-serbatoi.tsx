import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Ruler, Scale, ListOrdered, FileDown, ShieldCheck, Construction, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PricingCartButton } from "@/components/PricingCartButton";
import { TaxNote } from "@/components/TaxDisclaimer";
import i18n from "@/i18n";
import { taraturaSerbatoi as locale } from "@/i18n/locales/pages/taratura-serbatoi";
import logoAsset from "@/assets/tarature/TARATURE-002.png.asset.json";
import primaDopo from "@/assets/tarature/TARATURE-001.png.asset.json";

i18n.addResourceBundle("it", "taratura", locale.it, true, false);
i18n.addResourceBundle("en", "taratura", locale.en, true, false);
i18n.addResourceBundle("de", "taratura", locale.de, true, false);
i18n.addResourceBundle("es", "taratura", locale.es, true, false);

const icons = import.meta.glob<{ default: { url: string } }>("/src/assets/tarature/*.asset.json", { eager: true });

const CODES = [
  "BOMB-BOMB", "BOMB-CON", "BOMB-CON-BOCC", "BOMB-INCL", "BOMB-PIANO", "BOMB-TRONCOCON", "BOMB-TRONCOCON-BOCC",
  "CON-BOMB", "CON-CON", "CON-CON-BOCC", "CON-INCL", "CON-PIANO", "CON-TRONCOCON", "CON-TRONCOCON-BOCC",
  "ORIZZ-BOMB", "ORIZZ-CON",
  "PIANO-BOMB", "PIANO-CON", "PIANO-CON-BOCC", "PIANO-INCL", "PIANO-TRONCOCON", "PIANO-TRONCOCON-BOCC",
];
// Codice media solo su TARATURE-001 (immagine); logo e 22 pittogrammi sono icone: nessun codice
const modules = CODES.map((code, i) => {
  const mediaId = `TARATURE-${String(i + 3).padStart(3, "0")}`;
  const [family, ...rest] = code.split("-");
  return { n: i + 1, code, family, bottom: rest.join("-"), mediaId, icon: icons[`/src/assets/tarature/${mediaId}.png.asset.json`]?.default.url };
});
const FAMILIES = ["BOMB", "CON", "ORIZZ", "PIANO"] as const;
const featIcons = [Ruler, Scale, ListOrdered, FileDown, ShieldCheck];

export const Route = createFileRoute("/taratura-serbatoi")({
  head: () => ({
    meta: [
      { title: i18n.t("taratura:metaTitle") },
      { name: "description", content: i18n.t("taratura:metaDescription") },
      { property: "og:title", content: i18n.t("taratura:metaTitle") },
      { property: "og:description", content: i18n.t("taratura:metaDescription") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TaraturaPage,
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
      <PricingCartButton code="001TARATURE-002" index={10} full />
      <PricingCartButton code="001TARATURE-030" index={11} full />
      <PricingCartButton code="001TARATURE-365" index={12} full />
      <TaxNote className="mt-2 max-w-md mx-auto" />
    </div>
  );
}

function Heading({ label, h2 }: { label: string; h2: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <p className="text-sm font-bold uppercase tracking-wider mb-2 text-primary">{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold">{h2}</h2>
    </div>
  );
}

const cardCls = "p-6 rounded-2xl border-2 border-primary/20 bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all";

function TaraturaPage() {
  const { t, i18n: inst } = useTranslation("taratura");
  const arr = <X,>(k: string) => t(k, { returnObjects: true }) as X;
  const stats = arr<string[][]>("stats");
  const cmpRows = arr<string[][]>("cmpRows");
  const features = arr<{ title: string; desc: string }[]>("features");
  const faq = arr<{ q: string; a: string }[]>("faq");
  const [filter, setFilter] = useState<string>("ALL");
  const [tanks, setTanks] = useState(10);
  const [cost, setCost] = useState(45);
  const hours = Math.round(tanks * 12 * 3.5);
  const fmt = new Intl.NumberFormat(inst.language, { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

  const name = (m: (typeof modules)[number]) =>
    m.family === "ORIZZ" ? t(`orizz.${m.bottom}.name`) : `${t(`top.${m.family}`)} / ${t(`bottom.${m.bottom}`)}`;
  const desc = (m: (typeof modules)[number]) =>
    m.family === "ORIZZ" ? t(`orizz.${m.bottom}.desc`) : `${t(`topDesc.${m.family}`)} ${t(`bottomDesc.${m.bottom}`)}`;
  const shown = modules.filter((m) => filter === "ALL" || m.family === filter);

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
            <img src={logoAsset.url} alt="Taratura Serbatoi" width={128} height={128} className="mx-auto mb-6 h-32 w-32 object-contain" />
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
              <Ruler className="h-4 w-4 text-primary" aria-hidden /> {t("eyebrow")}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{t("h1")}</h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-xl mx-auto">{t("heroP")}</p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map(([v, l]) => (
                <div key={l} className="rounded-xl border-2 border-primary/20 bg-white p-3">
                  <div className="text-2xl font-bold text-primary font-mono">{v}</div>
                  <div className="text-xs text-foreground/75">{l}</div>
                </div>
              ))}
            </div>
            <PriceButtons />
          </div>
        </section>

        {/* IMMAGINE PRIMA/DOPO */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <figure data-media-id="TARATURE-001">
              <img src={primaDopo.url} alt="TARATURE-001 — Taratura Serbatoi: prima e dopo" width={1397} height={768} className="w-full h-auto rounded-2xl border-2 border-primary/20 shadow-lg" />
              <figcaption className="mt-2 text-right font-mono text-[11px] uppercase tracking-wider text-muted-foreground">TARATURE-001</figcaption>
            </figure>
          </div>
        </section>

        {/* CONFRONTO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <Heading label={t("cmpLabel")} h2={t("cmpH2")} />
            <div className="grid md:grid-cols-2 gap-5">
              <article className={cardCls}>
                <h3 className="font-bold text-lg mb-4 text-foreground/70">{t("cmpOld")}</h3>
                <ul className="space-y-3">{cmpRows.map((r) => (<li key={r[0]} className="flex gap-2"><X className="h-5 w-5 text-destructive shrink-0" aria-hidden />{r[0]}</li>))}</ul>
              </article>
              <article className={`${cardCls} border-primary`}>
                <h3 className="font-bold text-lg mb-4 text-primary">{t("cmpNew")}</h3>
                <ul className="space-y-3">{cmpRows.map((r) => (<li key={r[1]} className="flex gap-2"><Check className="h-5 w-5 text-primary shrink-0" aria-hidden />{r[1]}</li>))}</ul>
              </article>
            </div>
          </div>
        </section>

        {/* ROI */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-3xl">
            <Heading label={t("roiLabel")} h2={t("roiH2")} />
            <div className={`${cardCls} space-y-8`}>
              <div>
                <div className="flex justify-between font-semibold mb-3"><span>{t("roiTanks")}</span><span className="font-mono text-primary">{tanks}</span></div>
                <Slider min={1} max={100} step={1} value={[tanks]} onValueChange={(v) => setTanks(v[0])} aria-label={t("roiTanks")} />
              </div>
              <div>
                <div className="flex justify-between font-semibold mb-3"><span>{t("roiCost")}</span><span className="font-mono text-primary">{cost} €</span></div>
                <Slider min={20} max={120} step={1} value={[cost]} onValueChange={(v) => setCost(v[0])} aria-label={t("roiCost")} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-center">
                <div className="rounded-xl bg-primary/10 p-4"><div className="text-sm">{t("roiHours")}</div><div className="text-3xl font-bold text-primary font-mono">{hours}</div></div>
                <div className="rounded-xl bg-primary/10 p-4"><div className="text-sm">{t("roiValue")}</div><div className="text-3xl font-bold text-primary font-mono">{fmt.format(hours * cost)}</div></div>
              </div>
              <p className="text-sm text-foreground/70 italic">{t("roiNote")}</p>
            </div>
          </div>
        </section>

        {/* FUNZIONALITÀ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <Heading label={t("featLabel")} h2={t("featH2")} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => {
                const Icon = featIcons[i] ?? Ruler;
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

        {/* 22 MODULI */}
        <section id="moduli" className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <Heading label={t("modLabel")} h2={t("modH2")} />
            <p className="-mt-6 mb-8 text-center text-foreground/80 max-w-2xl mx-auto">{t("modP")}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-10" role="group">
              {["ALL", ...FAMILIES].map((f) => (
                <Button key={f} size="sm" variant={filter === f ? "default" : "outline"} onClick={() => setFilter(f)} aria-pressed={filter === f}>
                  {f === "ALL" ? t("all") : t(`families.${f}`)}
                </Button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {shown.map((m) => {
                return (
                  <article key={m.code} className={`${cardCls} flex gap-4`}>
                    <div className="relative h-24 w-24 shrink-0 rounded-xl border border-primary/15 bg-white">
                      {m.icon && <img src={m.icon} alt={`${String(m.n).padStart(2, "0")} · ${m.code} — ${name(m)}`} loading="lazy" className="h-full w-full object-contain p-1" />}
                    </div>
                    <div>
                      <p className="font-mono text-xs font-bold text-primary">{String(m.n).padStart(2, "0")} · {m.code}</p>
                      <h3 className="font-bold leading-snug mt-1 mb-2">{name(m)}</h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">{desc(m)}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PREZZI */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <Heading label={t("priceLabel")} h2={t("priceH2")} />
            <PriceButtons />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-t-2 border-primary/15">
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

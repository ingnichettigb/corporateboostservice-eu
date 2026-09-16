import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  Activity,
  ArrowDown,
  ArrowLeft,
  CheckCircle2,
  ClipboardCopy,
  Download,
  Eye,
  FileSpreadsheet,
  KeyRound,
  Languages,
  LockKeyhole,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PricingCartButton } from "@/components/PricingCartButton";
import { TaxNote } from "@/components/TaxDisclaimer";
import i18n from "@/i18n";
import { registroCredenziali } from "@/i18n/locales/pages/registro-credenziali";

i18n.addResourceBundle("it", "registroCredenziali", registroCredenziali.it, true, false);
i18n.addResourceBundle("en", "registroCredenziali", registroCredenziali.en, true, false);
i18n.addResourceBundle("de", "registroCredenziali", registroCredenziali.de, true, false);
i18n.addResourceBundle("es", "registroCredenziali", registroCredenziali.es, true, false);

const featureIcons = [Search, LockKeyhole, Eye, Activity, FileSpreadsheet, Download, UserCheck, Languages];
const securityIcons = [LockKeyhole, ShieldCheck, Users, Activity];

type Entry = { title: string; desc: string };
type Faq = { q: string; a: string };

export const Route = createFileRoute("/registro-credenziali-fornitori")({
  head: () => ({
    meta: [
      { title: i18n.t("registroCredenziali:metaTitle") },
      { name: "description", content: i18n.t("registroCredenziali:metaDescription") },
      { property: "og:title", content: i18n.t("registroCredenziali:metaTitle") },
      { property: "og:description", content: i18n.t("registroCredenziali:metaDescription") },
      { property: "og:url", content: "https://corporateboostservice.eu/registro-credenziali-fornitori" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://corporateboostservice.eu/registro-credenziali-fornitori" }],
  }),
  component: RegistroCredenzialiPage,
});

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">{kicker}</p>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
    </div>
  );
}

function PriceBlock({ dark = false, anchor = false }: { dark?: boolean; anchor?: boolean }) {
  const { t } = useTranslation("registroCredenziali");
  return (
    <div id={anchor ? "prezzo" : undefined} className={`mx-auto mt-12 max-w-2xl scroll-mt-36 text-center ${dark ? "text-primary-foreground" : ""}`}>
      <p className={`text-xs font-bold uppercase tracking-wider ${dark ? "text-primary-foreground/80" : "text-primary"}`}>{t("planKicker")}</p>
      <h3 className="mt-2 text-xl font-bold">{t("planTitle")}</h3>
      <p className={`mt-1 text-sm ${dark ? "text-primary-foreground/75" : "text-foreground/65"}`}>{t("planCode")}</p>
      <div className="mx-auto mt-5 max-w-md">
        <PricingCartButton code="040RegistroWEB-365" index={18} full />
      </div>
      <TaxNote light={dark} className="mx-auto mt-4 max-w-xl" />
    </div>
  );
}

function RegisterMockup() {
  const { t } = useTranslation("registroCredenziali");
  const headers = t("mockHeaders", { returnObjects: true }) as string[];
  const row = t("mockRow", { returnObjects: true }) as string[];
  return (
    <div className="overflow-hidden rounded-lg border-2 border-primary/20 bg-card shadow-[var(--shadow-elegant)]" aria-label={t("mockTitle")}>
      <div className="flex items-center justify-between gap-3 border-b border-border bg-secondary px-4 py-3">
        <span className="inline-flex items-center gap-2 font-bold"><KeyRound className="h-5 w-5 text-primary" aria-hidden />{t("mockTitle")}</span>
        <span className="hidden items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-xs text-muted-foreground sm:inline-flex"><Search className="h-4 w-4" aria-hidden />{t("mockSearch")}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[860px] w-full text-left text-xs">
          <thead className="bg-muted text-foreground"><tr>{headers.map((h) => <th key={h} className="border-b border-border px-3 py-3 font-bold">{h}</th>)}</tr></thead>
          <tbody><tr>{row.map((cell, index) => <td key={`${cell}-${index}`} className="border-b border-border px-3 py-4 text-foreground/75">{index === 3 ? <span className="inline-flex items-center gap-2 font-bold">{cell}<Eye className="h-3.5 w-3.5 text-primary" aria-hidden /></span> : index === 6 ? <span className="font-bold text-primary">{cell}</span> : cell}</td>)}</tr></tbody>
        </table>
      </div>
      <div className="flex justify-end gap-2 p-3 text-primary"><ClipboardCopy className="h-4 w-4" aria-hidden /><ShieldCheck className="h-4 w-4" aria-hidden /></div>
    </div>
  );
}

function RegistroCredenzialiPage() {
  const { t } = useTranslation("registroCredenziali");
  const badges = t("badges", { returnObjects: true }) as string[];
  const features = t("features", { returnObjects: true }) as Entry[];
  const steps = t("steps", { returnObjects: true }) as Entry[];
  const benefits = t("benefits", { returnObjects: true }) as string[];
  const security = t("security", { returnObjects: true }) as Entry[];
  const faq = t("faq", { returnObjects: true }) as Faq[];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main" className="skip-link">{t("skip", { ns: "translation" })}</a>
      <SiteHeader />
      <main id="main" className="pt-36 md:pt-44">
        <div className="container mx-auto max-w-6xl px-4">
          <Button variant="ghost" size="sm" asChild className="mb-5"><Link to="/applicazioni"><ArrowLeft aria-hidden />{t("back")}</Link></Button>
        </div>

        <section className="pb-20 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-primary">{t("heroKicker")}</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{t("heroTitle")}</h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">{t("heroBody")}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="hero" className="h-12" asChild><a href="#funzionalita">{t("discover")}<ArrowDown aria-hidden /></a></Button>
                <Button size="lg" variant="outline" className="h-12" asChild><a href="#prezzo">{t("price")}</a></Button>
              </div>
            </div>
            <RegisterMockup />
          </div>
          <div className="container mx-auto max-w-6xl px-4"><PriceBlock anchor /></div>
        </section>

        <section className="py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <SectionHeading kicker={t("whatKicker")} title={t("whatTitle")} />
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-foreground/80">{t("whatBody")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">{badges.map((badge) => <span key={badge} className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-secondary px-4 py-2 text-sm font-semibold"><CheckCircle2 className="h-4 w-4 text-primary" aria-hidden />{badge}</span>)}</div>
            <PriceBlock />
          </div>
        </section>

        <section id="funzionalita" className="scroll-mt-36 border-y-2 border-primary/15 py-20 [background:var(--gradient-section-corsi)]">
          <div className="container mx-auto max-w-6xl px-4">
            <SectionHeading kicker={t("featuresKicker")} title={t("featuresTitle")} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{features.map((item, i) => { const Icon = featureIcons[i]; return <Card key={item.title} className="border-2 border-primary/20"><CardHeader><div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg [background:var(--gradient-hero)] text-primary-foreground"><Icon className="h-6 w-6" aria-hidden /></div><CardTitle className="text-lg leading-snug">{item.title}</CardTitle></CardHeader><CardContent><p className="text-sm leading-relaxed text-foreground/80">{item.desc}</p></CardContent></Card>; })}</div>
            <PriceBlock />
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <SectionHeading kicker={t("flowKicker")} title={t("flowTitle")} />
            <ol className="grid gap-5 md:grid-cols-5">{steps.map((step, i) => <li key={step.title} className="border-t-4 border-primary pt-5"><span className="text-4xl font-bold text-primary/30">{String(i + 1).padStart(2, "0")}</span><h3 className="mt-3 font-bold">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-foreground/75">{step.desc}</p></li>)}</ol>
            <PriceBlock />
          </div>
        </section>

        <section className="border-y-2 border-primary/15 py-20 [background:var(--gradient-section-app)]">
          <div className="container mx-auto max-w-6xl px-4">
            <SectionHeading kicker={t("benefitsKicker")} title={t("benefitsTitle")} />
            <div className="grid gap-4 md:grid-cols-2">{benefits.map((benefit) => <div key={benefit} className="flex gap-3 rounded-lg border-2 border-primary/20 bg-card p-5 shadow-[var(--shadow-card)]"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden /><p className="leading-relaxed">{benefit}</p></div>)}</div>
            <PriceBlock />
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <SectionHeading kicker={t("securityKicker")} title={t("securityTitle")} />
            <div className="grid gap-5 sm:grid-cols-2">{security.map((item, i) => { const Icon = securityIcons[i]; return <div key={item.title} className="flex gap-4 border-l-4 border-primary bg-secondary p-6"><Icon className="h-7 w-7 shrink-0 text-primary" aria-hidden /><div><h3 className="font-bold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-foreground/75">{item.desc}</p></div></div>; })}</div>
            <PriceBlock />
          </div>
        </section>

        <section className="border-y-2 border-primary/15 py-20 [background:var(--gradient-section-corsi)]">
          <div className="container mx-auto max-w-3xl px-4">
            <SectionHeading kicker={t("faqKicker")} title={t("faqTitle")} />
            <Accordion type="single" collapsible>{faq.map((item, i) => <AccordionItem key={item.q} value={`faq-${i}`}><AccordionTrigger className="text-left text-base font-semibold">{item.q}</AccordionTrigger><AccordionContent className="leading-relaxed text-foreground/80">{item.a}</AccordionContent></AccordionItem>)}</Accordion>
            <PriceBlock />
          </div>
        </section>

        <section className="py-20 [background:var(--gradient-section-about)] text-primary-foreground">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-foreground/75">CorporateBoostService</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t("finalTitle")}</h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/85">{t("finalBody")}</p>
            <PriceBlock dark />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
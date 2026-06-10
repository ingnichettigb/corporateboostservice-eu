import { createFileRoute, Link } from "@tanstack/react-router";
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
  ShieldCheck,
  CheckCircle2,
  FileText,
  Users,
  ClipboardList,
  GraduationCap,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ChecklistCTAs } from "@/components/ChecklistCTAs";
import heroImg from "@/assets/gdpr/hero.jpg";
import normativaImg from "@/assets/gdpr/normativa.jpg";

export const Route = createFileRoute("/assistenza-gdpr")({
  head: () => ({
    meta: [
      { title: i18n.t("assistenzaGdpr.metaTitle") },
      {
        name: "description",
        content: i18n.t("assistenzaGdpr.metaDesc"),
      },
    ],
  }),
  component: AssistenzaGdprPage,
});

function AssistenzaGdprPage() {
  const { t } = useTranslation();

  const servizi = [
    {
      icon: FileText,
      title: t("assistenzaGdpr.s0Title"),
      desc: t("assistenzaGdpr.s0Desc"),
    },
    {
      icon: ClipboardList,
      title: t("assistenzaGdpr.s1Title"),
      desc: t("assistenzaGdpr.s1Desc"),
    },
    {
      icon: GraduationCap,
      title: t("assistenzaGdpr.s2Title"),
      desc: t("assistenzaGdpr.s2Desc"),
    },
    {
      icon: RefreshCw,
      title: t("assistenzaGdpr.s3Title"),
      desc: t("assistenzaGdpr.s3Desc"),
    },
    {
      icon: Users,
      title: t("assistenzaGdpr.s4Title"),
      desc: t("assistenzaGdpr.s4Desc"),
    },
    {
      icon: ShieldCheck,
      title: t("assistenzaGdpr.s5Title"),
      desc: t("assistenzaGdpr.s5Desc"),
    },
  ];

  const piaPoints = [
    t("assistenzaGdpr.pia0"),
    t("assistenzaGdpr.pia1"),
    t("assistenzaGdpr.pia2"),
    t("assistenzaGdpr.pia3"),
    t("assistenzaGdpr.pia4"),
    t("assistenzaGdpr.pia5"),
    t("assistenzaGdpr.pia6"),
    t("assistenzaGdpr.pia7"),
    t("assistenzaGdpr.pia8"),
    t("assistenzaGdpr.pia9"),
    t("assistenzaGdpr.pia10"),
    t("assistenzaGdpr.pia11"),
    t("assistenzaGdpr.pia12"),
    t("assistenzaGdpr.pia13"),
  ];

  const testimonianze = [
    { text: t("assistenzaGdpr.t0Text"), author: t("assistenzaGdpr.t0Author") },
    { text: t("assistenzaGdpr.t1Text"), author: t("assistenzaGdpr.t1Author") },
    { text: t("assistenzaGdpr.t2Text"), author: t("assistenzaGdpr.t2Author") },
    { text: t("assistenzaGdpr.t3Text"), author: t("assistenzaGdpr.t3Author") },
    { text: t("assistenzaGdpr.t4Text"), author: t("assistenzaGdpr.t4Author") },
    { text: t("assistenzaGdpr.t5Text"), author: t("assistenzaGdpr.t5Author") },
  ];

  const faq = [
    { q: t("assistenzaGdpr.faq0Q"), a: t("assistenzaGdpr.faq0A") },
    { q: t("assistenzaGdpr.faq1Q"), a: t("assistenzaGdpr.faq1A") },
    { q: t("assistenzaGdpr.faq2Q"), a: t("assistenzaGdpr.faq2A") },
    { q: t("assistenzaGdpr.faq3Q"), a: t("assistenzaGdpr.faq3A") },
    { q: t("assistenzaGdpr.faq4Q"), a: t("assistenzaGdpr.faq4A") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pt-36 md:pt-44">
        {/* Back link */}
        <div className="container mx-auto px-4 max-w-5xl">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" /> {t("assistenzaGdpr.backHome")}
            </Link>
          </Button>
        </div>

        {/* HERO */}
        <section className="pb-16 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden /> {t("assistenzaGdpr.badgeLabel")}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {t("assistenzaGdpr.heroTitle")} <span className="text-primary">{t("assistenzaGdpr.heroTitleHighlight")}</span> {t("assistenzaGdpr.heroTitleSuffix")}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto">
              {t("assistenzaGdpr.heroSubtitle")}
            </p>
            <p className="mt-3 text-base text-foreground/75 max-w-2xl mx-auto">
              {t("assistenzaGdpr.heroNote")}
            </p>
            <ChecklistCTAs />
            <div className="mt-6">
              <Button variant="hero" size="lg" className="h-12 px-8" asChild>
                <a href="#contatti">{t("assistenzaGdpr.heroCta")}</a>
              </Button>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <img
                src={heroImg}
                alt={t("assistenzaGdpr.heroImgAlt")}
                className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>


        {/* SERVIZI */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("assistenzaGdpr.serviziEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("assistenzaGdpr.serviziTitle")}
              </h2>
              <p className="mt-3 text-foreground/80 max-w-2xl mx-auto">
                {t("assistenzaGdpr.serviziSubtitle")}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {servizi.map(({ icon: Icon, title, desc }) => (
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
          </div>
        </section>

        {/* PIA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-10">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("assistenzaGdpr.piaEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("assistenzaGdpr.piaTitle")}
              </h2>
              <p className="mt-3 text-foreground/80">
                {t("assistenzaGdpr.piaSubtitle")}
              </p>
            </div>
            <div className="mb-10 rounded-2xl border-2 border-primary/15 bg-card p-3 shadow-sm">
              <img
                src={normativaImg}
                alt={t("assistenzaGdpr.normativaImgAlt")}
                className="w-full rounded-lg"
                loading="lazy"
              />
              <p className="mt-2 text-center text-sm text-foreground/60">
                {t("assistenzaGdpr.normativaCaption")}
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {piaPoints.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 p-4 rounded-lg border-2 border-primary/15 bg-card"
                >
                  <CheckCircle2
                    className="h-5 w-5 text-primary mt-0.5 shrink-0"
                    aria-hidden
                  />
                  <span className="text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-6 rounded-xl bg-primary/5 border-2 border-primary/20">
              <p className="font-semibold mb-2">{t("assistenzaGdpr.annualHeading")}</p>
              <ul className="space-y-2 text-foreground/85">
                <li>
                  • <strong>{t("assistenzaGdpr.annualItem1Label")}</strong>{" "}
                  {t("assistenzaGdpr.annualItem1Rest")}
                </li>
                <li>
                  • <strong>{t("assistenzaGdpr.annualItem2Label")}</strong>{" "}
                  {t("assistenzaGdpr.annualItem2Rest")}
                </li>
                <li>
                  • <strong>{t("assistenzaGdpr.annualItem3Label")}</strong>{" "}
                  {t("assistenzaGdpr.annualItem3Rest")}
                </li>
                <li>
                  • <strong>{t("assistenzaGdpr.annualItem4Label")}</strong>{" "}
                  {t("assistenzaGdpr.annualItem4Rest")}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-5xl grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold">99%</div>
              <p className="mt-2 text-white/90">{t("assistenzaGdpr.stat1Label")}</p>
            </div>
            <div>
              <div className="text-5xl font-bold">100%</div>
              <p className="mt-2 text-white/90">{t("assistenzaGdpr.stat2Label")}</p>
            </div>
            <div>
              <div className="text-5xl font-bold">24/7</div>
              <p className="mt-2 text-white/90">{t("assistenzaGdpr.stat3Label")}</p>
            </div>
            <div className="sm:col-span-3 mt-6">
              <p className="text-white/95 text-lg font-semibold mb-2">
                {t("assistenzaGdpr.statsCtaText")}
              </p>
              <ChecklistCTAs variant="dark" />
            </div>
          </div>
        </section>

        {/* TESTIMONIANZE */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("assistenzaGdpr.testiTitle")}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonianze.map((item) => (
                <Card key={item.author} className="border-2 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-foreground/85 italic">"{item.text}"</p>
                    <p className="mt-4 text-sm font-semibold text-primary">
                      — {item.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              {t("assistenzaGdpr.faqTitle")}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CONTATTI */}
        <section
          id="contatti"
          className="py-20 [background:var(--gradient-section-app)] border-t-2 border-primary/20 scroll-mt-24"
        >
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t("assistenzaGdpr.contactTitle")}</h2>
              <p className="mt-3 text-foreground/80">
                {t("assistenzaGdpr.contactSubtitle")}
              </p>
              <ChecklistCTAs />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">{t("assistenzaGdpr.contactPhoneLabel")}</p>
                  <a
                    href="tel:+393396344660"
                    className="text-foreground/80 hover:text-primary"
                  >
                    +39 339 63 44 660
                  </a>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Mail className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">{t("assistenzaGdpr.contactEmailLabel")}</p>
                  <a
                    href="mailto:nichettiprivacy@gmail.com"
                    className="text-foreground/80 hover:text-primary break-all"
                  >
                    nichettiprivacy@gmail.com
                  </a>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">{t("assistenzaGdpr.contactOfficeLabel")}</p>
                  <p className="text-foreground/80 text-sm">
                    Via Foscolo, 28
                    <br />
                    26015 Soresina (CR)
                    <br />
                    PI 01235350194
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Clock className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">{t("assistenzaGdpr.contactHoursLabel")}</p>
                  <p className="text-foreground/80">9:00 — 18:00</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4" /> {t("assistenzaGdpr.backHome")}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

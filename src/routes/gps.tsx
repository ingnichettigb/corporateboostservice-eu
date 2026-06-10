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
  MapPin,
  FileText,
  ClipboardList,
  ShieldCheck,
  Gauge,
  BookOpen,
  Lightbulb,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ChecklistCTAs } from "@/components/ChecklistCTAs";
import heroImg from "@/assets/gps/hero.jpg";
import denunciaImg from "@/assets/gps/denuncia.jpg";
import regolamentoImg from "@/assets/gps/copilot2.png";

export const Route = createFileRoute("/gps")({
  head: () => ({
    meta: [
      { title: i18n.t("gps.metaTitle") },
      {
        name: "description",
        content: i18n.t("gps.metaDesc"),
      },
    ],
  }),
  component: GpsPage,
});

function GpsPage() {
  const { t } = useTranslation();

  const servizi = [
    {
      icon: FileText,
      title: t("gps.servizio1Title"),
      desc: t("gps.servizio1Desc"),
    },
    {
      icon: ClipboardList,
      title: t("gps.servizio2Title"),
      desc: t("gps.servizio2Desc"),
    },
    {
      icon: ShieldCheck,
      title: t("gps.servizio3Title"),
      desc: t("gps.servizio3Desc"),
    },
  ];

  const motivi = [
    {
      icon: BookOpen,
      title: t("gps.motivo1Title"),
      desc: t("gps.motivo1Desc"),
    },
    {
      icon: ShieldCheck,
      title: t("gps.motivo2Title"),
      desc: t("gps.motivo2Desc"),
    },
    {
      icon: Gauge,
      title: t("gps.motivo3Title"),
      desc: t("gps.motivo3Desc"),
    },
    {
      icon: Lightbulb,
      title: t("gps.motivo4Title"),
      desc: t("gps.motivo4Desc"),
    },
    {
      icon: Clock,
      title: t("gps.motivo5Title"),
      desc: t("gps.motivo5Desc"),
    },
  ];

  const testimonianze = [
    {
      text: t("gps.test1Text"),
      author: t("gps.test1Author"),
    },
    {
      text: t("gps.test2Text"),
      author: t("gps.test2Author"),
    },
    {
      text: t("gps.test3Text"),
      author: t("gps.test3Author"),
    },
  ];

  const faq = [
    { q: t("gps.faq1Q"), a: t("gps.faq1A") },
    { q: t("gps.faq2Q"), a: t("gps.faq2A") },
    { q: t("gps.faq3Q"), a: t("gps.faq3A") },
    { q: t("gps.faq4Q"), a: t("gps.faq4A") },
    { q: t("gps.faq5Q"), a: t("gps.faq5A") },
    { q: t("gps.faq6Q"), a: t("gps.faq6A") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pt-36 md:pt-44">
        <div className="container mx-auto px-4 max-w-5xl">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" /> {t("gps.backHome")}
            </Link>
          </Button>
        </div>

        {/* HERO */}
        <section className="pb-16 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
              <MapPin className="h-4 w-4 text-primary" aria-hidden /> {t("gps.heroBadge")}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {t("gps.heroTitle")} <span className="text-primary">{t("gps.heroTitleHighlight")}</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto">
              {t("gps.heroDesc")}
            </p>
            <p className="mt-3 text-base text-foreground/75 max-w-2xl mx-auto font-semibold">
              {t("gps.heroSubDesc")}
            </p>
            <ChecklistCTAs />
            <div className="mt-6">
              <Button variant="hero" size="lg" className="h-12 px-8" asChild>
                <a href="#contatti">{t("gps.heroBtn")}</a>
              </Button>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <img
                src={heroImg}
                alt={t("gps.heroImgAlt")}
                className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
                width={1280}
                height={800}
              />
            </div>
          </div>
        </section>

        {/* DENUNCIA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("gps.denunciaLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("gps.denunciaTitle")}</h2>
              <div className="mt-5 space-y-4 text-foreground/85 text-lg leading-relaxed">
                <p>{t("gps.denunciaP1")}</p>
                <p>{t("gps.denunciaP2")}</p>
                <p>{t("gps.denunciaP3")}</p>
              </div>
            </div>
            <img
              src={denunciaImg}
              alt={t("gps.denunciaImgAlt")}
              className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
              width={1096}
              height={1096}
              loading="lazy"
            />
          </div>
        </section>

        {/* SERVIZI */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("gps.serviziLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("gps.serviziTitle")}</h2>
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
            <div className="mt-10">
              <ChecklistCTAs />
            </div>
          </div>
        </section>

        {/* REGOLAMENTO INTERNO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
            <img
              src={regolamentoImg}
              alt={t("gps.regolamentoImgAlt")}
              className="w-full max-w-sm mx-auto rounded-2xl border-2 border-primary/15 shadow-lg order-last md:order-first"
              loading="lazy"
            />
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("gps.regolamentoLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("gps.regolamentoTitle")}</h2>
              <div className="mt-5 space-y-4 text-foreground/85 text-lg leading-relaxed">
                <p>{t("gps.regolamentoP1")}</p>
                <p>{t("gps.regolamentoP2")}</p>
                <p>{t("gps.regolamentoP3")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* MOTIVI */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t("gps.motiwiTitle")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {motivi.map(({ icon: Icon, title, desc }) => (
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

        {/* STATS */}
        <section className="py-16 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-5xl grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold">99%</div>
              <p className="mt-2 text-white/90">{t("gps.stat1")}</p>
            </div>
            <div>
              <div className="text-5xl font-bold">100%</div>
              <p className="mt-2 text-white/90">{t("gps.stat2")}</p>
            </div>
            <div>
              <div className="text-5xl font-bold">24/7</div>
              <p className="mt-2 text-white/90">{t("gps.stat3")}</p>
            </div>
            <div className="sm:col-span-3 mt-6">
              <p className="text-white/95 text-lg font-semibold mb-2">
                {t("gps.statsCTA")}
              </p>
              <ChecklistCTAs variant="dark" />
            </div>
          </div>
        </section>

        {/* TESTIMONIANZE */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t("gps.testimonianze")}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonianze.map((item) => (
                <Card key={item.author} className="border-2 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-foreground/85 italic">"{item.text}"</p>
                    <p className="mt-4 text-sm font-semibold text-primary">— {item.author}</p>
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
              {t("gps.faqTitle")}
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
              <h2 className="text-3xl md:text-4xl font-bold">{t("gps.contattiTitle")}</h2>
              <p className="mt-3 text-foreground/80">
                {t("gps.contattiDesc")}
              </p>
              <ChecklistCTAs />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">{t("gps.contactPhone")}</p>
                  <a href="tel:+393396344660" className="text-foreground/80 hover:text-primary">
                    +39 339 63 44 660
                  </a>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Mail className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">{t("gps.contactEmail")}</p>
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
                  <p className="font-bold mb-1">{t("gps.contactAddress")}</p>
                  <p className="text-foreground/80 text-sm">
                    Via Foscolo, 28<br />26015 Soresina (CR)<br />PI 01235350194
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Clock className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">{t("gps.contactHours")}</p>
                  <p className="text-foreground/80">{t("gps.contactHoursText")}</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4" /> {t("gps.backHome")}
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

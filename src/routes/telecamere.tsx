import { createFileRoute, Link } from "@tanstack/react-router";
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
  Video,
  CheckCircle2,
  FileText,
  ClipboardList,
  ShieldCheck,
  Gauge,
  BookOpen,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ChecklistCTAs } from "@/components/ChecklistCTAs";
import heroImg from "@/assets/telecamere/hero.jpg";
import denunciaImg from "@/assets/telecamere/denuncia.jpg";
import regolamentoImg from "@/assets/telecamere/regolamento.jpg";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

export const Route = createFileRoute("/telecamere")({
  head: () => ({
    meta: [
      { title: i18n.t("telecamere.metaTitle") },
      {
        name: "description",
        content: i18n.t("telecamere.metaDesc"),
      },
    ],
  }),
  component: TelecamerePage,
});

const serviziIcons = [FileText, ClipboardList, ShieldCheck];
const motiviIcons = [BookOpen, ShieldCheck, Gauge, Lightbulb, Clock];

function TelecamerePage() {
  const { t } = useTranslation();

  const serviziList = t("telecamere.serviziList", { returnObjects: true }) as {
    title: string;
    desc: string;
  }[];
  const motiviList = t("telecamere.motiviList", { returnObjects: true }) as {
    title: string;
    desc: string;
  }[];
  const testimonianze = t("telecamere.testimonianze", {
    returnObjects: true,
  }) as { text: string; author: string }[];
  const faqItems = t("telecamere.faq", { returnObjects: true }) as {
    q: string;
    a: string;
  }[];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pt-36 md:pt-44">
        <div className="container mx-auto px-4 max-w-5xl">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" /> {t("telecamere.backHome")}
            </Link>
          </Button>
        </div>

        {/* HERO */}
        <section className="pb-16 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
              <Video className="h-4 w-4 text-primary" aria-hidden /> {t("telecamere.heroBadge")}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {t("telecamere.heroTitle")} <span className="text-primary">{t("telecamere.heroTitleAccent")}</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto">
              {t("telecamere.heroSubtitle")}
            </p>
            <p className="mt-3 text-base text-foreground/75 max-w-2xl mx-auto font-semibold">
              {t("telecamere.heroChecklist")}
            </p>
            <ChecklistCTAs />
            <div className="mt-6">
              <Button variant="hero" size="lg" className="h-12 px-8" asChild>
                <a href="#contatti">{t("telecamere.heroCta")}</a>
              </Button>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <img
                src={heroImg}
                alt={t("telecamere.heroImgAlt")}
                className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>


        {/* DENUNCIA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("telecamere.denunciaEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("telecamere.denunciaTitle")}</h2>
              <div className="mt-5 space-y-4 text-foreground/85 text-lg leading-relaxed">
                <p>{t("telecamere.denunciaP1")}</p>
                <p>{t("telecamere.denunciaP2")}</p>
                <p>{t("telecamere.denunciaP3")}</p>
              </div>
            </div>
            <img
              src={denunciaImg}
              alt={t("telecamere.denunciaImgAlt")}
              className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
              loading="lazy"
            />
          </div>
        </section>


        {/* SERVIZI */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("telecamere.serviziEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("telecamere.serviziTitle")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {serviziList.map(({ title, desc }, idx) => {
                const Icon = serviziIcons[idx];
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
              alt={t("telecamere.regolamentoImgAlt")}
              className="w-full rounded-2xl border-2 border-primary/15 shadow-lg order-last md:order-first"
              loading="lazy"
            />
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("telecamere.regolamentoEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("telecamere.regolamentoTitle")}</h2>
              <div className="mt-5 space-y-4 text-foreground/85 text-lg leading-relaxed">
                <p>{t("telecamere.regolamentoP1")}</p>
                <p>{t("telecamere.regolamentoP2")}</p>
                <p>{t("telecamere.regolamentoP3")}</p>
              </div>
            </div>
          </div>
        </section>


        {/* MOTIVI */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t("telecamere.motiviTitle")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {motiviList.map(({ title, desc }, idx) => {
                const Icon = motiviIcons[idx];
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
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-5xl grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold">99%</div>
              <p className="mt-2 text-white/90">{t("telecamere.stat1Label")}</p>
            </div>
            <div>
              <div className="text-5xl font-bold">100%</div>
              <p className="mt-2 text-white/90">{t("telecamere.stat2Label")}</p>
            </div>
            <div>
              <div className="text-5xl font-bold">24/7</div>
              <p className="mt-2 text-white/90">{t("telecamere.stat3Label")}</p>
            </div>
            <div className="sm:col-span-3 mt-6">
              <p className="text-white/95 text-lg font-semibold mb-2">
                {t("telecamere.statsCta")}
              </p>
              <ChecklistCTAs variant="dark" />
            </div>
          </div>
        </section>

        {/* TESTIMONIANZE */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t("telecamere.testimonianzeTitolo")}</h2>
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
              {t("telecamere.faqTitle")}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
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
              <h2 className="text-3xl md:text-4xl font-bold">{t("telecamere.contattiTitle")}</h2>
              <p className="mt-3 text-foreground/80">
                {t("telecamere.contattiSubtitle")}
              </p>
              <ChecklistCTAs />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">{t("telecamere.contattiTelefono")}</p>
                  <a href="tel:+393396344660" className="text-foreground/80 hover:text-primary">
                    +39 339 63 44 660
                  </a>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Mail className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">{t("telecamere.contattiEmail")}</p>
                  <a
                    href="mailto:team@corporateboostservice.eu"
                    className="text-foreground/80 hover:text-primary break-all"
                  >
                    team@corporateboostservice.eu
                  </a>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">{t("telecamere.contattiSede")}</p>
                  <p className="text-foreground/80 text-sm">
                    Via Foscolo, 28<br />26015 Soresina (CR)<br />PI 01235350194
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Clock className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">{t("telecamere.contattiOrari")}</p>
                  <p className="text-foreground/80">9:00 — 18:00</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4" /> {t("telecamere.backHome")}
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { landingHead } from "@/data/landing-seo-catalog";
import { MediaCode } from "@/components/MediaCode";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  Scale,
  ClipboardList,
  FileText,
  Ban,
  Phone,
  KeyRound,
  DatabaseBackup,
  Usb,
  Users,
  PlayCircle,
  ListChecks,
  HelpCircle,
  GraduationCap,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TaxNote } from "@/components/TaxDisclaimer";
import { PricingCartButton } from "@/components/PricingCartButton";
import heroImg from "@/assets/gdpr-incaricati/hero.jpg";

function FreeCourseButton({ className = "" }: { className?: string }) {
  return (
    <PricingCartButton
      code="02-GDPR-00-090"
      index={13}
      full
      className={`max-w-md mx-auto ${className}`}
    />
  );
}



export const Route = createFileRoute("/corso-gdpr-incaricati")({
  head: () => landingHead("/corso-gdpr-incaricati"),
  component: CorsoIncaricatiPage,
});

function CorsoIncaricatiPage() {
  const { t } = useTranslation();

  const why = [
    { icon: ShieldCheck, title: t("corsoIncaricati.why0Title"), desc: t("corsoIncaricati.why0Desc") },
    { icon: AlertTriangle, title: t("corsoIncaricati.why1Title"), desc: t("corsoIncaricati.why1Desc") },
    { icon: Scale, title: t("corsoIncaricati.why2Title"), desc: t("corsoIncaricati.why2Desc") },
    { icon: ClipboardList, title: t("corsoIncaricati.why3Title"), desc: t("corsoIncaricati.why3Desc") },
  ];

  const areas = [
    {
      icon: FileText,
      title: t("corsoIncaricati.a0Title"),
      points: [
        t("corsoIncaricati.a0p0"),
        t("corsoIncaricati.a0p1"),
        t("corsoIncaricati.a0p2"),
        t("corsoIncaricati.a0p3"),
        t("corsoIncaricati.a0p4"),
      ],
    },
    {
      icon: Ban,
      title: t("corsoIncaricati.a1Title"),
      forbidden: true,
      points: [
        t("corsoIncaricati.a1p0"),
        t("corsoIncaricati.a1p1"),
        t("corsoIncaricati.a1p2"),
        t("corsoIncaricati.a1p3"),
      ],
    },
    {
      icon: Phone,
      title: t("corsoIncaricati.a2Title"),
      points: [
        t("corsoIncaricati.a2p0"),
        t("corsoIncaricati.a2p1"),
        t("corsoIncaricati.a2p2"),
        t("corsoIncaricati.a2p3"),
      ],
    },
    {
      icon: KeyRound,
      title: t("corsoIncaricati.a3Title"),
      points: [
        t("corsoIncaricati.a3p0"),
        t("corsoIncaricati.a3p1"),
        t("corsoIncaricati.a3p2"),
        t("corsoIncaricati.a3p3"),
      ],
    },
    {
      icon: DatabaseBackup,
      title: t("corsoIncaricati.a4Title"),
      points: [
        t("corsoIncaricati.a4p0"),
        t("corsoIncaricati.a4p1"),
        t("corsoIncaricati.a4p2"),
        t("corsoIncaricati.a4p3"),
      ],
    },
    {
      icon: Usb,
      title: t("corsoIncaricati.a5Title"),
      points: [
        t("corsoIncaricati.a5p0"),
        t("corsoIncaricati.a5p1"),
        t("corsoIncaricati.a5p2"),
        t("corsoIncaricati.a5p3"),
      ],
    },
  ];

  const audience = [
    t("corsoIncaricati.aud0"),
    t("corsoIncaricati.aud1"),
    t("corsoIncaricati.aud2"),
    t("corsoIncaricati.aud3"),
    t("corsoIncaricati.aud4"),
  ];

  const includes = [
    { icon: PlayCircle, title: t("corsoIncaricati.inc0"), desc: t("corsoIncaricati.inc0Desc") },
    { icon: ClipboardList, title: t("corsoIncaricati.inc1"), desc: t("corsoIncaricati.inc1Desc") },
    { icon: ListChecks, title: t("corsoIncaricati.inc2"), desc: t("corsoIncaricati.inc2Desc") },
    { icon: HelpCircle, title: t("corsoIncaricati.inc3"), desc: t("corsoIncaricati.inc3Desc") },
    { icon: GraduationCap, title: t("corsoIncaricati.inc4"), desc: t("corsoIncaricati.inc4Desc") },
  ];

  const benefits = [
    t("corsoIncaricati.ben0"),
    t("corsoIncaricati.ben1"),
    t("corsoIncaricati.ben2"),
    t("corsoIncaricati.ben3"),
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pt-36 md:pt-44">
        {/* Back link */}
        <div className="container mx-auto px-4 max-w-5xl">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/corsi">
              <ArrowLeft className="h-4 w-4" /> {t("corsoIncaricati.backHome")}
            </Link>
          </Button>
        </div>

        {/* HERO */}
        <section className="pb-16 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden /> {t("corsoIncaricati.badgeLabel")}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {t("corsoIncaricati.heroTitle")}{" "}
              <span className="text-primary">{t("corsoIncaricati.heroTitleHighlight")}</span>
              {t("corsoIncaricati.heroTitleSuffix")}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto">
              {t("corsoIncaricati.heroSubtitle")}
            </p>
            <p className="mt-3 text-base text-foreground/75 max-w-2xl mx-auto">
              {t("corsoIncaricati.heroNote")}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <FreeCourseButton />
              <TaxNote className="text-center max-w-md" />
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <img
                src={heroImg}
                alt={t("corsoIncaricati.heroImgAlt")}
                width={1280}
                height={800}
                className="w-full rounded-2xl border-2 border-primary/15 shadow-lg"
              />
              <MediaCode id="CORSOGDPR-001" />
            </div>
          </div>
        </section>

        {/* PERCHÉ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("corsoIncaricati.whyEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("corsoIncaricati.whyTitle")}</h2>
              <p className="mt-3 text-foreground/80 max-w-2xl mx-auto">
                {t("corsoIncaricati.whySubtitle")}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {why.map(({ icon: Icon, title, desc }) => (
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
            <div className="mt-12 text-center">
              <FreeCourseButton />
            </div>
          </div>
        </section>

        {/* COSA IMPARERAI */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("corsoIncaricati.learnEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("corsoIncaricati.learnTitle")}</h2>
              <p className="mt-3 text-foreground/80 max-w-2xl mx-auto">
                {t("corsoIncaricati.learnSubtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {areas.map(({ icon: Icon, title, points, forbidden }) => (
                <Card key={title} className="border-2 border-primary/20 h-full">
                  <CardHeader>
                    <div
                      className={`h-12 w-12 rounded-lg flex items-center justify-center mb-3 text-primary-foreground ${
                        forbidden ? "bg-destructive" : "[background:var(--gradient-hero)]"
                      }`}
                    >
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5">
                      {points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-foreground/85">
                          {forbidden ? (
                            <Ban className="h-5 w-5 text-destructive mt-0.5 shrink-0" aria-hidden />
                          ) : (
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden />
                          )}
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <FreeCourseButton />
            </div>
          </div>
        </section>

        {/* A CHI È RIVOLTO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("corsoIncaricati.audienceEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("corsoIncaricati.audienceTitle")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {audience.map((a) => (
                <div
                  key={a}
                  className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border-2 border-primary/15 bg-card"
                >
                  <Users className="h-8 w-8 text-primary" aria-hidden />
                  <span className="font-semibold text-foreground/90">{a}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <FreeCourseButton />
            </div>
          </div>
        </section>

        {/* COSA INCLUDE */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("corsoIncaricati.includeEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("corsoIncaricati.includeTitle")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {includes.map(({ icon: Icon, title, desc }) => (
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

        {/* BENEFICI */}
        <section className="py-16 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">{t("corsoIncaricati.benefitsTitle")}</h2>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto">
              {t("corsoIncaricati.benefitsSubtitle")}
            </p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 p-5 rounded-xl bg-white/10 border-2 border-white/30 text-left"
                >
                  <ShieldAlert className="h-6 w-6 shrink-0" aria-hidden />
                  <span className="font-semibold">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">{t("corsoIncaricati.finalCtaTitle")}</h2>
              <p className="mt-3 text-foreground/80 text-lg">{t("corsoIncaricati.finalCtaText")}</p>
              <div className="mt-8">
                <FreeCourseButton />
              </div>
            </div>
          </div>
        </section>

        {/* CONTATTI */}
        <section
          id="contatti"
          className="py-20 [background:var(--gradient-section-app)] border-t-2 border-primary/20 scroll-mt-24"
        >
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t("corsoIncaricati.contactTitle")}</h2>
              <p className="mt-3 text-foreground/80 max-w-2xl mx-auto">
                {t("corsoIncaricati.contactSubtitle")}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">{t("corsoIncaricati.contactPhoneLabel")}</p>
                  <a href="tel:+393396344660" className="text-foreground/80 hover:text-primary">
                    +39 339 63 44 660
                  </a>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Mail className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">{t("corsoIncaricati.contactEmailLabel")}</p>
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
                  <p className="font-bold mb-1">{t("corsoIncaricati.contactOfficeLabel")}</p>
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
                  <p className="font-bold mb-1">{t("corsoIncaricati.contactHoursLabel")}</p>
                  <p className="text-foreground/80">9:00 — 18:00</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link to="/corsi">
                  <ArrowLeft className="h-4 w-4" /> {t("corsoIncaricati.backHome")}
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

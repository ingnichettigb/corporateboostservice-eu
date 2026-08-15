import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Scale,
  Target,
  Minimize2,
  CheckCircle2,
  Timer,
  Lock,
  BadgeCheck,
  Eye,
  Pencil,
  Trash2,
  PauseCircle,
  Share2,
  Hand,
  Bot,
  Building2,
  UserCog,
  Handshake,
  Users,
  UserCheck,
  Briefcase,
  Server,
  ClipboardList,
  Network,
  FileSignature,
  FileText,
  AlertTriangle,
  Workflow,
  GraduationCap,
  KeyRound,
  Smartphone,
  DatabaseBackup,
  ShieldAlert,
  Bug,
  ScrollText,
  Usb,
  Archive,
  AlarmClock,
  Landmark,
  Globe2,
  Gavel,
  Euro,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { buildMailto } from "@/lib/contact";
import { PricingCartButton } from "@/components/PricingCartButton";


export const Route = createFileRoute("/corso-privacy-gdpr")({
  head: () => ({
    meta: [
      { title: i18n.t("privacyGdpr.metaTitle") },
      { name: "description", content: i18n.t("privacyGdpr.metaDesc") },
      { property: "og:title", content: i18n.t("privacyGdpr.metaTitle") },
      { property: "og:description", content: i18n.t("privacyGdpr.metaDesc") },
      { property: "og:url", content: "https://corporateboostservice.eu/corso-privacy-gdpr" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: i18n.t("privacyGdpr.metaTitle") },
      { name: "twitter:description", content: i18n.t("privacyGdpr.metaDesc") },
    ],
    links: [{ rel: "canonical", href: "https://corporateboostservice.eu/corso-privacy-gdpr" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "My Privacy — Formazione GDPR Professionale",
          description: i18n.t("privacyGdpr.metaDesc"),
          provider: {
            "@type": "Organization",
            name: "CorporateBoostService.eu",
            url: "https://corporateboostservice.eu",
          },
        }),
      },
    ],
  }),
  component: PrivacyGdprPage,
});

function PrivacyGdprPage() {
  const { t } = useTranslation();
  const infoHref = buildMailto(t("privacyGdpr.infoSubject"), t("privacyGdpr.infoBody"));
  const programHref = buildMailto(t("privacyGdpr.programSubject"), t("privacyGdpr.programBody"));

  const what = [
    { icon: Scale, title: t("privacyGdpr.what0Title"), desc: t("privacyGdpr.what0Desc") },
    { icon: Globe2, title: t("privacyGdpr.what1Title"), desc: t("privacyGdpr.what1Desc") },
    { icon: Landmark, title: t("privacyGdpr.what2Title"), desc: t("privacyGdpr.what2Desc") },
    { icon: Workflow, title: t("privacyGdpr.what3Title"), desc: t("privacyGdpr.what3Desc") },
  ];

  const principles = [
    { icon: Scale, title: t("privacyGdpr.pr0Title"), desc: t("privacyGdpr.pr0Desc") },
    { icon: Target, title: t("privacyGdpr.pr1Title"), desc: t("privacyGdpr.pr1Desc") },
    { icon: Minimize2, title: t("privacyGdpr.pr2Title"), desc: t("privacyGdpr.pr2Desc") },
    { icon: CheckCircle2, title: t("privacyGdpr.pr3Title"), desc: t("privacyGdpr.pr3Desc") },
    { icon: Timer, title: t("privacyGdpr.pr4Title"), desc: t("privacyGdpr.pr4Desc") },
    { icon: Lock, title: t("privacyGdpr.pr5Title"), desc: t("privacyGdpr.pr5Desc") },
    { icon: BadgeCheck, title: t("privacyGdpr.pr6Title"), desc: t("privacyGdpr.pr6Desc") },
  ];

  const rights = [
    { icon: Eye, label: t("privacyGdpr.ri0") },
    { icon: Pencil, label: t("privacyGdpr.ri1") },
    { icon: Trash2, label: t("privacyGdpr.ri2") },
    { icon: PauseCircle, label: t("privacyGdpr.ri3") },
    { icon: Share2, label: t("privacyGdpr.ri4") },
    { icon: Hand, label: t("privacyGdpr.ri5") },
    { icon: Bot, label: t("privacyGdpr.ri6") },
  ];

  const roles = [
    { icon: Building2, i: 0 },
    { icon: UserCog, i: 1 },
    { icon: Briefcase, i: 2 },
    { icon: Handshake, i: 3 },
    { icon: Users, i: 4 },
    { icon: UserCheck, i: 5 },
    { icon: Server, i: 6 },
  ].map(({ icon, i }) => ({
    icon,
    name: t(`privacyGdpr.fi${i}Name`),
    duty: t(`privacyGdpr.fi${i}Duty`),
    obl: t(`privacyGdpr.fi${i}Obl`),
    ex: t(`privacyGdpr.fi${i}Ex`),
  }));

  const governance = [
    { icon: ClipboardList, i: 0 },
    { icon: Network, i: 1 },
    { icon: FileSignature, i: 2 },
    { icon: FileText, i: 3 },
    { icon: AlertTriangle, i: 4 },
    { icon: Workflow, i: 5 },
    { icon: GraduationCap, i: 6 },
  ].map(({ icon, i }) => ({
    icon,
    title: t(`privacyGdpr.go${i}`),
    desc: t(`privacyGdpr.go${i}Desc`),
  }));

  const flow = [0, 1, 2, 3, 4].map((i) => t(`privacyGdpr.goFlow${i}`));

  const security = [
    { icon: KeyRound, label: t("privacyGdpr.se0") },
    { icon: Smartphone, label: t("privacyGdpr.se1") },
    { icon: DatabaseBackup, label: t("privacyGdpr.se2") },
    { icon: ShieldAlert, label: t("privacyGdpr.se3") },
    { icon: Bug, label: t("privacyGdpr.se4") },
    { icon: ScrollText, label: t("privacyGdpr.se5") },
    { icon: Usb, label: t("privacyGdpr.se6") },
    { icon: Archive, label: t("privacyGdpr.se7") },
  ];

  const paper = [0, 1, 2, 3].map((i) => t(`privacyGdpr.paper${i}`));

  const breach = [0, 1, 2, 3].map((i) => ({
    title: t(`privacyGdpr.db${i}Title`),
    desc: t(`privacyGdpr.db${i}Desc`),
  }));

  const bodies = [
    { icon: ShieldCheck, label: t("privacyGdpr.or0") },
    { icon: Globe2, label: t("privacyGdpr.or1") },
    { icon: Landmark, label: t("privacyGdpr.or2") },
    { icon: Briefcase, label: t("privacyGdpr.or3") },
    { icon: Gavel, label: t("privacyGdpr.or4") },
  ];

  const sanctions = [0, 1, 2, 3, 4, 5].map((i) => t(`privacyGdpr.sa${i}`));
  const program = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => t(`privacyGdpr.pg${i}`));
  const audience = [0, 1, 2, 3, 4].map((i) => t(`privacyGdpr.au${i}`));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pt-36 md:pt-44">
        <div className="container mx-auto px-4 max-w-5xl">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/corsi">
              <ArrowLeft className="h-4 w-4" /> {t("privacyGdpr.back")}
            </Link>
          </Button>
        </div>

        {/* HERO */}
        <section className="pb-16 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden /> {t("privacyGdpr.badge")}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {t("privacyGdpr.heroTitle")}{" "}
              <span className="text-primary">{t("privacyGdpr.heroTitleHighlight")}</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-3xl mx-auto">
              {t("privacyGdpr.heroSubtitle")}
            </p>
            <p className="mt-3 text-base text-foreground/75 max-w-2xl mx-auto">
              {t("privacyGdpr.heroNote")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="lg">
                <a href={infoHref}>
                  <Mail className="h-4 w-4" /> {t("privacyGdpr.ctaInfo")}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={programHref}>
                  <FileText className="h-4 w-4" /> {t("privacyGdpr.programCta")}
                </a>
              </Button>
            </div>
            <div className="mt-4 max-w-sm mx-auto">
              <PricingCartButton code="01-GDPR-00-090" index={8} full />
            </div>

          </div>
        </section>

        {/* COS'È IL GDPR */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("privacyGdpr.whatEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("privacyGdpr.whatTitle")}</h2>
              <p className="mt-4 text-foreground/85 max-w-3xl mx-auto">{t("privacyGdpr.whatP1")}</p>
              <p className="mt-3 text-foreground/80 max-w-3xl mx-auto">{t("privacyGdpr.whatP2")}</p>
              <div className="mt-6 max-w-xl mx-auto">
                <PricingCartButton code="01-GDPR-00-090" index={8} full />
              </div>
            </div>

            <blockquote className="max-w-3xl mx-auto rounded-2xl border-l-4 border-primary bg-primary/5 px-6 py-5 text-lg font-semibold text-foreground/90">
              {t("privacyGdpr.whatQuote")}
            </blockquote>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {what.map(({ icon: Icon, title, desc }) => (
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

        {/* 7 PRINCIPI */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("privacyGdpr.prEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("privacyGdpr.prTitle")}</h2>
              <p className="mt-3 text-foreground/80 max-w-2xl mx-auto">{t("privacyGdpr.prSubtitle")}</p>
              <div className="mt-6 max-w-xl mx-auto">
                <PricingCartButton code="01-GDPR-00-090" index={8} full />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {principles.map(({ icon: Icon, title, desc }, idx) => (
                <Card key={title} className="border-2 border-primary/20 h-full relative">
                  <span className="absolute top-4 right-5 text-3xl font-bold text-primary/15">
                    {idx + 1}
                  </span>
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

        {/* DIRITTI */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("privacyGdpr.riEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("privacyGdpr.riTitle")}</h2>
              <p className="mt-3 text-foreground/80 max-w-2xl mx-auto">{t("privacyGdpr.riSubtitle")}</p>
              <div className="mt-6 max-w-xl mx-auto">
                <PricingCartButton code="01-GDPR-00-090" index={8} full />
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 p-4 rounded-xl border-2 border-primary/15 bg-card"
                >
                  <span className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-semibold text-foreground/90">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FIGURE CHIAVE */}
        <section className="py-20 [background:var(--gradient-section-app)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("privacyGdpr.fiEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("privacyGdpr.fiTitle")}</h2>
              <p className="mt-3 text-foreground/80 max-w-2xl mx-auto">{t("privacyGdpr.fiSubtitle")}</p>
              <div className="mt-6 max-w-xl mx-auto">
                <PricingCartButton code="01-GDPR-00-090" index={8} full />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {roles.map(({ icon: Icon, name, duty, obl, ex }) => (
                <Card key={name} className="border-2 border-primary/20 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg [background:var(--gradient-hero)] text-primary-foreground flex items-center justify-center">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <CardTitle className="text-lg">{name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-foreground/85">
                    <p>{duty}</p>
                    <p>
                      <span className="font-bold text-foreground">{t("privacyGdpr.fiObl")}: </span>
                      {obl}
                    </p>
                    <p className="text-sm rounded-lg bg-primary/5 border border-primary/15 px-3 py-2">
                      <span className="font-bold">{t("privacyGdpr.fiEx")}: </span>
                      {ex}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* GOVERNANCE */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("privacyGdpr.goEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("privacyGdpr.goTitle")}</h2>
              <p className="mt-3 text-foreground/80 max-w-2xl mx-auto">{t("privacyGdpr.goSubtitle")}</p>
              <div className="mt-6 max-w-xl mx-auto">
                <PricingCartButton code="01-GDPR-00-090" index={8} full />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {governance.map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="border-2 border-primary/20 h-full">
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

            <div className="mt-12 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 md:p-8">
              <p className="text-center font-bold text-foreground mb-6">
                {t("privacyGdpr.goFlowTitle")}
              </p>
              <ol className="flex flex-wrap items-center justify-center gap-3">
                {flow.map((step, idx) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-card border-2 border-primary/25 px-4 py-2 font-semibold">
                      <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      {step}
                    </span>
                    {idx < flow.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-primary" aria-hidden />
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* SICUREZZA */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("privacyGdpr.seEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("privacyGdpr.seTitle")}</h2>
              <p className="mt-3 text-foreground/80 max-w-2xl mx-auto">{t("privacyGdpr.seSubtitle")}</p>
              <div className="mt-6 max-w-xl mx-auto">
                <PricingCartButton code="01-GDPR-00-090" index={8} full />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {security.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border-2 border-primary/15 bg-card"
                >
                  <Icon className="h-8 w-8 text-primary" aria-hidden />
                  <span className="font-semibold text-foreground/90">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border-2 border-primary/20 bg-card p-6 md:p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-4">{t("privacyGdpr.paperTitle")}</h3>
              <ul className="space-y-2.5">
                {paper.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-foreground/85">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* DATA BREACH */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("privacyGdpr.dbEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("privacyGdpr.dbTitle")}</h2>
              <div className="mt-6 max-w-xl mx-auto">
                <PricingCartButton code="01-GDPR-00-090" index={8} full />
              </div>
            </div>

            <div className="grid lg:grid-cols-[minmax(0,18rem)_1fr] gap-8 items-start">
              <div className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-8 text-center">
                <AlarmClock className="h-12 w-12 text-destructive mx-auto mb-4" aria-hidden />
                <p className="text-4xl font-bold text-destructive">{t("privacyGdpr.dbTimer")}</p>
                <p className="mt-2 text-sm text-foreground/80">{t("privacyGdpr.dbTimerLabel")}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {breach.map(({ title, desc }, idx) => (
                  <Card key={title} className="border-2 border-primary/20 h-full">
                    <CardHeader>
                      <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mb-2">
                        {idx + 1}
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
          </div>
        </section>

        {/* ORGANI DI CONTROLLO */}
        <section className="py-20 [background:var(--gradient-section-app)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("privacyGdpr.orEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("privacyGdpr.orTitle")}</h2>
              <div className="mt-6 max-w-xl mx-auto">
                <PricingCartButton code="01-GDPR-00-090" index={8} full />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {bodies.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border-2 border-primary/15 bg-card"
                >
                  <Icon className="h-8 w-8 text-primary" aria-hidden />
                  <span className="font-semibold text-sm text-foreground/90">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SANZIONI */}
        <section className="py-20 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-sm font-bold uppercase tracking-wider mb-2 text-white/80">
                {t("privacyGdpr.saEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("privacyGdpr.saTitle")}</h2>
              <div className="mt-6 max-w-xl mx-auto">
                <PricingCartButton code="01-GDPR-00-090" index={8} full />
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 border-2 border-white/30 p-8 text-center max-w-2xl mx-auto">
              <Euro className="h-10 w-10 mx-auto mb-3" aria-hidden />
              <p className="text-2xl md:text-3xl font-bold">{t("privacyGdpr.saBig")}</p>
              <p className="mt-2 text-white/85">{t("privacyGdpr.saBigLabel")}</p>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sanctions.map((s) => (
                <div
                  key={s}
                  className="flex items-start gap-3 p-5 rounded-xl bg-white/10 border-2 border-white/25"
                >
                  <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" aria-hidden />
                  <span className="font-semibold">{s}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-white/85 max-w-3xl mx-auto">
              {t("privacyGdpr.saNote")}
            </p>
          </div>
        </section>

        {/* PROGRAMMA ANNUALE */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("privacyGdpr.pgEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("privacyGdpr.pgTitle")}</h2>
              <p className="mt-3 text-foreground/80 max-w-2xl mx-auto">{t("privacyGdpr.pgSubtitle")}</p>
            </div>
            <ol className="grid sm:grid-cols-2 gap-4">
              {program.map((step, idx) => (
                <li
                  key={step}
                  className="flex items-start gap-4 p-5 rounded-xl border-2 border-primary/15 bg-card"
                >
                  <span className="h-9 w-9 shrink-0 rounded-full [background:var(--gradient-hero)] text-primary-foreground font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="font-semibold text-foreground/90 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* A CHI È RIVOLTO */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("privacyGdpr.auEyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("privacyGdpr.auTitle")}</h2>
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
            <div className="mt-8 max-w-sm mx-auto">
              <PricingCartButton code="01-GDPR-00-090" index={8} full />
            </div>
          </div>
        </section>


        {/* CTA FINALE */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">{t("privacyGdpr.finalTitle")}</h2>
              <p className="mt-3 text-foreground/80 text-lg">{t("privacyGdpr.finalText")}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href={infoHref}>
                    <Mail className="h-4 w-4" /> {t("privacyGdpr.ctaInfo")}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={programHref}>
                    <FileText className="h-4 w-4" /> {t("privacyGdpr.programCta")}
                  </a>
                </Button>
              </div>
              <div className="mt-4 max-w-sm mx-auto">
                <PricingCartButton code="01-GDPR-00-090" index={8} full />
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">Telefono</p>
                  <a href="tel:+393396344660" className="text-foreground/80 hover:text-primary">
                    +39 339 63 44 660
                  </a>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Mail className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="font-bold mb-1">Email</p>
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
                  <p className="font-bold mb-1">Sede</p>
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
                  <p className="font-bold mb-1">Orari</p>
                  <p className="text-foreground/80">9:00 — 18:00</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link to="/corsi">
                  <ArrowLeft className="h-4 w-4" /> {t("privacyGdpr.back")}
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

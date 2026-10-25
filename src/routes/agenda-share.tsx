/**
 * File: agenda-share.tsx · Percorso: src/routes/agenda-share.tsx · Revisione: 2 · Data: 25/10/2026 · Ora: 10:10
 * Landing Agenda Share. Immagini: codici AGENDASHARE-001..007 (registro docs/GEOGRAFIA-MEDIA.md).
 */
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
  CalendarClock,
  CalendarRange,
  Send,
  Trash2,
  PenLine,
  EyeOff,
  SquareCheck,
  Zap,
  Bookmark,
  Languages,
  MessageCircle,
  ShieldCheck,
  Briefcase,
  Wrench,
  GraduationCap,
  Users,
  CheckCircle2,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TaxNote } from "@/components/TaxDisclaimer";
import { PricingCartButton } from "@/components/PricingCartButton";
import { MediaSlot } from "@/components/MediaSlot";
import logoAsset from "@/assets/apps/agenda-share.jpeg.asset.json";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { agendaShare as agendaShareLocale } from "@/i18n/locales/pages/agenda-share";
import agendaDe from "@/i18n/locales/generated/agendaShare.de.json";
import agendaEs from "@/i18n/locales/generated/agendaShare.es.json";

// Register translations
i18n.addResourceBundle("it", "agendaShare", agendaShareLocale.it, true, false);
i18n.addResourceBundle("en", "agendaShare", agendaShareLocale.en, true, false);
i18n.addResourceBundle("de", "agendaShare", agendaDe, true, false);
i18n.addResourceBundle("es", "agendaShare", agendaEs, true, false);

const logoImg = logoAsset.url;

// Cartella e prompt AI degli slot immagine (codici registrati in docs/GEOGRAFIA-MEDIA.md).
const MEDIA_FOLDER = "src/assets/agenda-share";

const STYLE =
  `Wide 16:9 composition, clean modern illustration with soft depth and gentle shadows, palette of deep blue, white and light grey with small green accents, professional and friendly mood, no close-up faces, no watermarks. Every piece of visible text must be correct Italian, spelled exactly as written below, with no extra text.`;

const MEDIA_PROMPTS: Record<string, string> = {
  "AGENDASHARE-001": `Modern bright office. On the left two floating calendar windows, Google Calendar and Outlook calendar (October 2026), showing the appointments 'Riunione Team 10:00', 'Pranzo di lavoro 13:00', 'Presentazione Progetto 15:30'. A glowing line flows from the calendars to a smartphone held in a hand on the right, showing a WhatsApp chat message that reads exactly: 'Ecco gli appuntamenti della tua agenda: Riunione Team 10:00 (Oggi), Pranzo di lavoro 13:00 (Domani), Presentazione Progetto 15:30 (Mercoledì). Sei pronto a inviare?'. A glass panel on the right reads: 'AGENDA SHARE - Semplifica la tua giornata in tre clic'. ${STYLE}`,
  "AGENDASHARE-002": `A calendar grid on the left with three highlighted appointments, a flowing arrow in the middle that turns the appointments into neat lines of text, and on the right a chat bubble in WhatsApp style containing exactly: 'Lunedì 26 - Riunione Team 10:00', 'Martedì 27 - Pranzo di lavoro 13:00', 'Mercoledì 28 - Presentazione Progetto 15:30'. Generic calendar and chat icons, no trademarked logos. ${STYLE}`,
  "AGENDASHARE-003": `Step 1. A laptop screen showing a clean panel titled 'Collega il calendario' with two large buttons 'Google Calendar' and 'Outlook / .ics', and below a green confirmation badge 'Calendario collegato' with a check mark. Generic calendar icons, no trademarked logos. ${STYLE}`,
  "AGENDASHARE-004": `Step 2. A tidy interface with a grid of rounded period buttons labelled exactly: 'Oggi', 'Domani', 'Fine settimana', 'Prossimi 7 giorni', 'Prossimi 15 giorni', 'Prossimi 30 giorni', 'Questo mese', 'Mese successivo'. The button 'Prossimi 7 giorni' is highlighted in blue with a cursor clicking it. ${STYLE}`,
  "AGENDASHARE-005": `Step 3. A list of appointment rows, each with a small trash icon: 'Lun 26 - 10:00 - Riunione Team', 'Mar 27 - 13:00 - Impegnato', 'Mer 28 - 15:30 - Presentazione Progetto'. One extra row is shown being removed with a swipe effect. At the bottom two buttons: 'Copia testo' and 'Apri in WhatsApp' (green). ${STYLE}`,
  "AGENDASHARE-006": `Privacy concept. A calendar list where the details of two appointments are blurred and replaced by the single word 'Impegnato', keeping day and time visible. A padlock and a crossed-out eye icon on the side, a small toggle switch turned on, and a badge reading 'Calendario solo letto'. Reassuring, trustworthy mood. ${STYLE}`,
  "AGENDASHARE-007": `Four equal panels side by side, each with a person at work and a smartphone showing a WhatsApp message: a professional office desk with documents labelled 'Studio professionale', a craftsman technician with a toolbox labelled 'Artigiano', a teacher at a whiteboard labelled 'Insegnante e tutor', a family around a weekly planner labelled 'Famiglia'. People seen from a distance, no close-up faces. ${STYLE}`,
};

const stepIcons = [CalendarClock, CalendarRange, Send];
const stepMediaIds = ["AGENDASHARE-003", "AGENDASHARE-004", "AGENDASHARE-005"];

const featureIcons = [
  CalendarRange,
  Trash2,
  PenLine,
  EyeOff,
  SquareCheck,
  Zap,
  Bookmark,
  Languages,
  MessageCircle,
];

const privacyIcons = [ShieldCheck, EyeOff, MessageCircle];

const caseIcons = [Briefcase, Wrench, GraduationCap, Users];

function ActivateButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 justify-center items-center ${className}`}>
      <PricingCartButton code="020AgendaShare-015" index={15} full />
      <PricingCartButton code="020AgendaShare-030" index={16} full />
      <PricingCartButton code="020AgendaShare-365" index={17} full />
    </div>
  );
}

export const Route = createFileRoute("/agenda-share")({
  head: () => ({
    meta: [
      { title: i18n.t("agendaShare:metaTitle") },
      {
        name: "description",
        content: i18n.t("agendaShare:metaDescription"),
      },
      {
        property: "og:title",
        content: i18n.t("agendaShare:ogTitle"),
      },
      {
        property: "og:description",
        content: i18n.t("agendaShare:ogDescription"),
      },
      { property: "og:image", content: logoImg },
      { name: "twitter:image", content: logoImg },
      { name: "twitter:title", content: i18n.t("agendaShare:ogTitle") },
      { name: "twitter:description", content: i18n.t("agendaShare:ogDescription") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AgendaSharePage,
});

function AgendaSharePage() {
  const { t } = useTranslation("agendaShare");

  const badges = (t("badges", { returnObjects: true }) as string[]);
  const steps = (t("steps", { returnObjects: true }) as { title: string; desc: string }[]);
  const features = (t("features", { returnObjects: true }) as { title: string; desc: string }[]);
  const privacy = (t("privacy", { returnObjects: true }) as { title: string; desc: string }[]);
  const cases = (t("cases", { returnObjects: true }) as { title: string; desc: string }[]);
  const faq = (t("faq", { returnObjects: true }) as { q: string; a: string }[]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pt-36 md:pt-44">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/applicazioni">
              <ArrowLeft className="h-4 w-4" /> {t("backBtn")}
            </Link>
          </Button>
        </div>

        {/* HERO */}
        <section className="pb-16 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <img
              src={logoImg}
              alt="Agenda Share"
              width={72}
              height={72}
              className="mx-auto mb-5 h-[72px] w-[72px] rounded-2xl shadow-md"
            />
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
              <CalendarClock className="h-4 w-4 text-primary" aria-hidden /> {t("heroBadge")}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {t("heroH1a")} <span className="text-primary">{t("heroH1b")}</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/85 max-w-xl mx-auto">
              {t("heroSubtitle")}
            </p>
            <p className="mt-3 text-sm text-foreground/65">
              {t("heroTagline")}
            </p>
            <MediaSlot
              id="AGENDASHARE-001"
              alt={t("imgAlt.m001")}
              prompt={MEDIA_PROMPTS["AGENDASHARE-001"]}
              folder={MEDIA_FOLDER}
              className="mt-8"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary/25 bg-white px-4 py-2 text-sm font-semibold"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden /> {b}
                </span>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
            <TaxNote className="mt-4 max-w-xl mx-auto" />
          </div>
        </section>

        {/* COS'È */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              {t("whatLabel")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("whatH2")}
            </h2>
            <p className="mt-5 text-lg text-foreground/85 leading-relaxed">
              {t("whatBody")}
            </p>
            <MediaSlot
              id="AGENDASHARE-002"
              alt={t("imgAlt.m002")}
              prompt={MEDIA_PROMPTS["AGENDASHARE-002"]}
              folder={MEDIA_FOLDER}
              className="mt-10"
            />
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* COME FUNZIONA */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("howLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("howH2")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {steps.map(({ title, desc }, idx) => {
                const Icon = stepIcons[idx];
                const n = String(idx + 1);
                return (
                  <Card key={n} className="relative border-2 border-primary/20 overflow-hidden">
                    <span className="absolute top-4 right-4 text-5xl font-extrabold text-primary/10 leading-none">
                      {n}
                    </span>
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg [background:var(--gradient-hero)] text-primary-foreground flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">{desc}</p>
                      <MediaSlot
                        id={stepMediaIds[idx]}
                        alt={t(`imgAlt.m00${idx + 3}`)}
                        prompt={MEDIA_PROMPTS[stepMediaIds[idx]]}
                        folder={MEDIA_FOLDER}
                        className="mt-4"
                      />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* FUNZIONI */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("featuresLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("featuresH2")}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ title, desc }, idx) => {
                const Icon = featureIcons[idx];
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
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* PRIVACY */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("privacyLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">{t("privacyH2")}</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {privacy.map(({ title, desc }, idx) => {
                const Icon = privacyIcons[idx];
                return (
                  <Card key={title} className="border-2 border-primary/20">
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
                );
              })}
            </div>
            <MediaSlot
              id="AGENDASHARE-006"
              alt={t("imgAlt.m006")}
              prompt={MEDIA_PROMPTS["AGENDASHARE-006"]}
              folder={MEDIA_FOLDER}
              className="mt-10 mx-auto max-w-3xl"
            />
            <div className="mt-10 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>

        {/* CASI D'USO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                {t("casesLabel")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("casesH2")}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cases.map(({ title, desc }, idx) => {
                const Icon = caseIcons[idx];
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
            <MediaSlot
              id="AGENDASHARE-007"
              alt={t("imgAlt.m007")}
              prompt={MEDIA_PROMPTS["AGENDASHARE-007"]}
              folder={MEDIA_FOLDER}
              className="mt-10 mx-auto max-w-5xl"
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 [background:var(--gradient-section-corsi)] border-y-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2 text-center">
              {t("faqLabel")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              {t("faqH2")}
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
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="py-20 [background:var(--gradient-section-about)] text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("ctaH2")}
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              {t("ctaBody")}
            </p>
            <div className="mt-8 flex justify-center">
              <ActivateButtons />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

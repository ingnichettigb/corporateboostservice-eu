/**
 * File: registro-credenziali-fornitori.tsx · Percorso: src/routes/registro-credenziali-fornitori.tsx · Revisione: 3 · Data: 26/10/2026 · Ora: 10:32
 * Landing 040RegistroWEB. Immagini: REGWEB-001..008 esistenti in public/040registroweb/; REGWEB-009..012 slot in src/assets/registro-credenziali/ (registro docs/GEOGRAFIA-MEDIA.md).
 */
import { useState, useEffect, useCallback } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MediaCode } from "@/components/MediaCode";
import { MediaSlot } from "@/components/MediaSlot";
import registroLogo from "@/assets/apps/registro-credenziali.png";
import { 
  ShieldCheck, 
  Layers, 
  UserCheck, 
  FileSpreadsheet, 
  Monitor, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles,
  Lock,
  Download,
  AlertTriangle,
  Users,
  Crown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PricingCartButton } from "@/components/PricingCartButton";
import { TaxNote } from "@/components/TaxDisclaimer";

export const Route = createFileRoute("/registro-credenziali-fornitori")({
  head: () => ({
    meta: [
      { title: "Registro Siti Web Aziendali e Credenziali | 040RegistroWEB" },
      {
        name: "description",
        content: "Software SaaS per organizzare e proteggere tutti i siti web aziendali e le relative credenziali. Risparmia ore di lavoro: primo accesso Amministratore, permessi per categorie, backup Excel/PDF riservato e lanciatore Desktop PWA.",
      },
      { property: "og:title", content: "040RegistroWEB – Registro Siti Web Aziendali e Credenziali Protette" },
      { property: "og:description", content: "Elimina il caos delle password, risparmia ore ogni mese e rimani padrone assoluto del sistema con il controllo centralizzato Amministratore." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://corporateboostservice.eu/040registroweb/040RegistroWEB-image01.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RegistroSitiWebPage,
});

function SectionHeading({ title, subtitle, badge }: { title: string; subtitle?: string; badge?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
          <Sparkles className="w-3.5 h-3.5" />
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{subtitle}</p>}
    </div>
  );
}

function PriceBlock({
  title,
  price,
  period,
  users,
  pdfExports,
  features,
  highlight,
  planCode,
  planIndex,
}: {
  title: string;
  price: string;
  period: string;
  users: string;
  pdfExports: string;
  features: string[];
  highlight?: boolean;
  planCode: string;
  planIndex: number;
}) {
  return (
    <div
      className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
        highlight
          ? "border-2 border-primary shadow-2xl bg-gradient-to-b from-primary/10 via-background to-background p-6 sm:p-8 scale-[1.02]"
          : "border-2 border-primary/20 bg-background/95 hover:border-primary/40 p-6 sm:p-8"
      }`}
    >
      {highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
          Consigliato per PMI
        </div>
      )}

      <div>
        <div className="space-y-1 mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-xs text-muted-foreground">Postazioni e credenziali condivise</p>
        </div>

        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">{price}</span>
          <span className="text-xs sm:text-sm text-muted-foreground font-medium">{period}</span>
        </div>

        <div className="p-3 rounded-lg bg-primary/5 border border-primary/15 mb-6 space-y-1.5 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <Users className="w-4 h-4 text-primary shrink-0" />
            <span>{users}</span>
          </div>
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <Download className="w-4 h-4 text-primary shrink-0" />
            <span>{pdfExports}</span>
          </div>
        </div>

        <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground mb-8">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-2">
        <PricingCartButton code={planCode} index={planIndex} full />
      </div>
    </div>
  );
}

// Interfaccia e Dati per il Carosello Orizzontale
interface CarouselSlide {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  code: string;
  alt: string;
  icon: typeof Monitor;
}

const MEDIA_FOLDER = "src/assets/registro-credenziali";

const PHOTO_STYLE =
  `Photorealistic, natural light, shallow depth of field, professional photography, 16:9, navy blue, teal and white tones, no brand logos, no watermark. Any visible text must be correct English, exactly as written, with no other text.`;
const VECTOR_STYLE =
  `Vector infographic comic style (flat vector art, clean sharp outlines, flat colours with very soft gradients), storyboard layout with numbered panels, palette of navy blue, teal and white on a light background, 16:9, no photographic elements. All text must be correct English, exactly as written, with no other text.`;

// Nuovi slot REGWEB-009..012 (testi nelle immagini in inglese).
const MEDIA_PROMPTS: Record<string, string> = {
  "REGWEB-009": `Four numbered panels. Captions exactly: '1 First activation', '2 Administrator', '3 Personal PUK', '4 Own categories only'. Scenes: 1 a licence card and a key unlocking a laptop; 2 a person with a crown badge in front of a dashboard with a gear icon; 3 a card marked 'PUK' handed to a colleague; 4 the colleague's screen showing only a 'Logistics' folder while other folders are greyed out. ${VECTOR_STYLE}`,
  "REGWEB-010": `Bright modern office with a small team calmly working. One employee uses a laptop showing a tidy list of websites with a padlock icon; desks are clean, no sticky notes on the monitors. Side view, relaxed and organised mood. No readable text. ${PHOTO_STYLE}`,
  "REGWEB-011": `Two side-by-side panels with CSV file icons. Left panel captioned 'Merge': a table receiving new rows highlighted in green, small caption 'Adds missing records'. Right panel captioned 'Replace': a backup file restoring a whole table, small caption 'Restores a full backup'. ${VECTOR_STYLE}`,
  "REGWEB-012": `Industrial warehouse loading dock: a supervisor in a hi-vis vest holds a tablet showing a simple list-style web app with a padlock icon, pallets and parcels softly blurred behind, daylight from the dock door. No readable text. ${PHOTO_STYLE}`,
};

const carouselSlides: CarouselSlide[] = [
  {
    id: "admin",
    badge: "Vista Amministratore",
    title: "Pieno controllo su credenziali, categorie ed esportazioni",
    description: "L'Amministratore gestisce tutti i siti web aziendali, filtra istantaneamente per categoria, monitora i crediti di esportazione e accede al pannello Impostazioni riservato.",
    image: "/040registroweb/040RegistroWEB-image06.jpg",
    code: "REGWEB-002",
    alt: "Schermata Dashboard Amministratore 040RegistroWEB",
    icon: Settings,
  },
  {
    id: "postazioni",
    badge: "Gestione Postazioni PUK",
    title: "Assegna licenze, PUK personali e permessi mirati per reparto",
    description: "Invita i collaboratori via email: ciascuno riceve il proprio codice PUK univoco. Puoi scegliere 'Accesso Completo' o 'Sola Lettura' e limitare le categorie visibili per singolo dipendente.",
    image: "/040registroweb/040RegistroWEB-image08.jpg",
    code: "REGWEB-003",
    alt: "Schermata Gestione Postazioni e PUK 040RegistroWEB",
    icon: Users,
  },
  {
    id: "collaboratore",
    badge: "Vista Collaboratore",
    title: "Interfaccia pulita e sicura per il lavoro quotidiano",
    description: "I collaboratori visualizzano esclusivamente le categorie loro assegnate. Con un solo clic copiano Sito Web, ID di accesso e Password mascherata, senza bottoni amministrativi.",
    image: "/040registroweb/040RegistroWEB-image07.jpg",
    code: "REGWEB-004",
    alt: "Schermata Vista Collaboratore 040RegistroWEB",
    icon: Eye,
  },
];

function HorizontalCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % carouselSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  }, []);

  // Rotazione orizzontale automatica ogni 6 secondi (in pausa al passaggio del mouse)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const active = carouselSlides[current];

  return (
    <div 
      className="relative max-w-5xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Selettori a Schede (Tabs) superiori per salto rapido */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {carouselSlides.map((slide, idx) => {
          const Icon = slide.icon;
          const isActive = idx === current;
          return (
            <button
              key={slide.id}
              onClick={() => setCurrent(idx)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-background/80 hover:bg-background border border-primary/20 text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{slide.badge}</span>
            </button>
          );
        })}
      </div>

      {/* Riquadro Principale Carosello */}
      <div className="relative rounded-2xl sm:rounded-3xl border-2 border-primary/25 bg-gradient-to-b from-card/90 to-background/90 p-4 sm:p-6 shadow-2xl backdrop-blur-sm overflow-hidden">
        
        {/* Barra superiore simulazione finestra software */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-primary/15 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-foreground/80 hidden sm:inline">
              040RegistroWEB • {active.badge}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-primary font-bold">
              Schermata {current + 1} di {carouselSlides.length}
            </span>
          </div>
        </div>

        {/* Immagine con transizione */}
        <div className="relative overflow-hidden rounded-xl bg-black/40 border border-primary/15 shadow-inner">
          <img
            src={active.image}
            alt={active.alt}
            className="w-full h-auto object-cover rounded-xl transition-all duration-500 ease-in-out"
          />
        </div>
        <MediaCode id={active.code} />

        {/* Didascalia e vantaggi chiave */}
        <div className="mt-5 sm:mt-6 p-4 rounded-xl bg-primary/5 border border-primary/15 text-left space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary">
              {active.badge}
            </span>
            <h4 className="text-sm sm:text-base font-bold text-foreground">
              {active.title}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {active.description}
          </p>
        </div>

        {/* Frecce laterali di navigazione */}
        <button
          onClick={prevSlide}
          aria-label="Schermata precedente"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 hover:bg-background border border-primary/30 shadow-xl flex items-center justify-center text-foreground hover:text-primary transition-all duration-150 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Schermata successiva"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 hover:bg-background border border-primary/30 shadow-xl flex items-center justify-center text-foreground hover:text-primary transition-all duration-150 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicatori a punti (Dots) inferiori */}
        <div className="flex justify-center gap-2 mt-4">
          {carouselSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Vai alla schermata ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current ? "w-8 bg-primary" : "w-2 bg-primary/25 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function RegistroSitiWebPage() {
  const faqs = [
    {
      q: "Chi è l'Amministratore e come viene assegnato?",
      a: "La prima persona della tua azienda che inserisce il codice licenza al primo accesso diventa automaticamente l'Amministratore dell'applicazione. Solo l'Amministratore può aggiungere o revocare collaboratori, assegnare i codici PUK, stabilire quali categorie sono visibili ed eseguire il backup completo (Excel/PDF).",
    },
    {
      q: "Come accedono i collaboratori alla loro postazione?",
      a: "L'Amministratore inserisce l'email del collaboratore nel pannello di gestione postazioni. Il sistema assegna a quella email la licenza aziendale e un codice PUK personale univoco (1 Postazione = 1 PUK). Cliccando sull'icona della busta, il collaboratore riceve via email le sue credenziali personali per entrare subito.",
    },
    {
      q: "I collaboratori possono vedere tutte le credenziali aziendali?",
      a: "No! L'Amministratore può assegnare a ciascun collaboratore solo le categorie di cui ha stretta necessità (ad esempio solo 'Documenti tecnici' o solo 'Cataloghi'). Inoltre può impostare la postazione su 'Sola Lettura', impedendo modifiche accidentali o cancellazioni.",
    },
    {
      q: "Cosa succede se un collaboratore lascia l'azienda?",
      a: "Massima serenità: l'Amministratore apre la Gestione Postazioni, cancella l'email del collaboratore o rigenera il suo codice PUK. L'accesso per quella persona viene revocato all'istante, senza dover modificare tutte le password dei singoli siti o fornitori.",
    },
    {
      q: "Chi può esportare e salvare il registro completo?",
      a: "L'esportazione in file CSV (apribile in Excel) e il report formattato PDF con timbro e data sono riservati esclusivamente all'Amministratore. I collaboratori non vedono i pulsanti di esportazione, garantendo la riservatezza totale del patrimonio aziendale.",
    },
    {
      q: "Come funziona il ripristino o l'importazione da Excel?",
      a: "L'Amministratore può importare in qualsiasi momento un file Excel/CSV scegliendo tra due modalità: 'Unisci' (aggiunge o aggiorna i siti senza toccare gli altri) oppure 'Sostituisci' (ripristina esattamente l'archivio salvato in precedenza).",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* 1. Header istituzionale del sito */}
      <SiteHeader />

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <section
          className="relative py-16 sm:py-24 border-b-2 border-primary/15 overflow-hidden"
          style={{ background: "var(--gradient-section-app)" }}
        >
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            {/* Tasto Ritorno alle Applicazioni */}
            <div className="mb-8">
              <Link
                to="/applicazioni"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:underline group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Torna ad Applicazioni</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Testi Hero */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <img
                  src={registroLogo}
                  alt="040RegistroWEB"
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-2xl shadow-md"
                />
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                  <ShieldCheck className="w-4 h-4 text-[#b4ff3c]" />
                  <span>Novità 2026 • Registro Siti Web Aziendali</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15]">
                  Proteggi tutti i siti web aziendali e le credenziali di accesso.{" "}
                  <span className="text-primary block sm:inline">Risparmia ore ogni mese.</span>
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Basta fogli volanti, post-it sullo schermo e colleghi che si chiedono continuamente le password. 
                  Con <strong className="text-foreground">040RegistroWEB</strong> organizzi gli accessi di fornitori, 
                  portali di servizio e siti web: il primo che attiva la licenza diventa Amministratore e assegna 
                  a ciascun collaboratore un <strong className="text-foreground">PUK personale</strong> con permessi 
                  filtrati per categoria.
                </p>

                {/* Pulsanti CTA Rapidi */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button size="lg" className="bg-[#b4ff3c] hover:bg-[#a3f02b] text-black font-bold shadow-xl" asChild>
                    <a href="#prezzi">Attiva per la tua azienda →</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10" asChild>
                    <a href="#schermate">Guarda le schermate reali</a>
                  </Button>
                </div>

                {/* Badge di Garanzia & Sicurezza */}
                <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b4ff3c] shrink-0" />
                    <span>Nessun programma da installare</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b4ff3c] shrink-0" />
                    <span>Crittografia protetta</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b4ff3c] shrink-0" />
                    <span>Backup Excel & PDF</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b4ff3c] shrink-0" />
                    <span>15, 50 o 200 Postazioni</span>
                  </div>
                </div>
                <MediaCode id="REGWEB-001" />
              </div>

              {/* Immagine Hero Principale */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl sm:rounded-3xl border-2 border-primary/20 shadow-2xl overflow-hidden bg-background/50 backdrop-blur-sm group">
                  <img
                    src="/040registroweb/040RegistroWEB-image01.jpg"
                    alt="040RegistroWEB - Software Registro Siti Web Aziendali e Credenziali Protette"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end p-6">
                    <div className="text-left space-y-1">
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b4ff3c]">
                        <Crown className="w-3.5 h-3.5" />
                        <span>SaaS Aziendale Multi-Postazione</span>
                      </div>
                      <p className="text-xs text-white/90">
                        Amministratore automatico, PUK univoco per dipendente e permessi su misura.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SEZIONE CAROSELLO ORIZZONTALE: IL SOFTWARE IN AZIONE */}
        <section id="schermate" className="py-16 sm:py-24 border-b-2 border-primary/15 bg-background">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <SectionHeading
              badge="Interfaccia Reale"
              title="Guarda 040RegistroWEB in azione"
              subtitle="Scorri le schermate per vedere come l'Amministratore governa l'intero archivio e come ogni collaboratore accede solo a ciò che gli compete."
            />

            {/* Componente Carosello Orizzontale */}
            <HorizontalCarousel />
          </div>
        </section>

        {/* 4. PRIMA VS DOPO: IL VALORE DEL TEMPO E DELLA SICUREZZA */}
        <section className="py-16 sm:py-24 border-b-2 border-primary/15 bg-primary/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeading
              badge="Efficienza Immediata"
              title="Dal caos delle password al controllo totale"
              subtitle="Quanto tempo perde ogni giorno il tuo team per cercare o richiedere gli accessi a portali, registri e fornitori?"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Illustrazione Prima vs Dopo */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border-2 border-primary/20 shadow-xl overflow-hidden bg-background">
                  <img
                    src="/040registroweb/040RegistroWEB-image05.jpg"
                    alt="Prima vs Dopo: caos delle password contro efficienza e controllo 040RegistroWEB"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <MediaCode id="REGWEB-005" />
              </div>

              {/* Confronto Dettagliato */}
              <div className="lg:col-span-6 space-y-4">
                <Card className="border-2 border-destructive/20 bg-destructive/5 text-left">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base sm:text-lg font-bold flex items-center gap-2 text-destructive">
                      <AlertTriangle className="w-5 h-5 shrink-0" />
                      <span>Senza 040RegistroWEB (Il Caos Quotidiano)</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                    <p>• Password annotate su post-it o foglietti volanti che chiunque può leggere.</p>
                    <p>• File Excel duplicati e non aggiornati condivisi tramite email o chat interne.</p>
                    <p>• Continua perdita di tempo tra colleghi per chiedere: <em>"Qual è la password del portale X?"</em></p>
                    <p>• Se un dipendente lascia l'azienda, mantiene l'accesso a tutti i siti senza controllo.</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/30 bg-primary/10 text-left">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base sm:text-lg font-bold flex items-center gap-2 text-primary">
                      <ShieldCheck className="w-5 h-5 text-[#b4ff3c] shrink-0" />
                      <span>Con 040RegistroWEB (Padrone del Sistema)</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-xs sm:text-sm text-foreground">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#b4ff3c] shrink-0 mt-0.5" />
                      <span><strong>Risparmio di ore ogni settimana:</strong> con un solo clic copi URL, ID di accesso e Password.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#b4ff3c] shrink-0 mt-0.5" />
                      <span><strong>Separazione rigorosa per categoria:</strong> la logistica vede solo i corrieri, l'amministrazione solo i portali contabili.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#b4ff3c] shrink-0 mt-0.5" />
                      <span><strong>Offboarding immediato:</strong> revochi o rigeneri il PUK del singolo collaboratore in un secondo.</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <MediaSlot
              id="REGWEB-010"
              alt="Team in un ufficio luminoso che lavora con ordine: elenco dei siti protetto da lucchetto, scrivanie senza post-it"
              prompt={MEDIA_PROMPTS["REGWEB-010"]}
              folder={MEDIA_FOLDER}
              className="mt-12 mx-auto max-w-4xl"
            />
          </div>
        </section>

        {/* 5. SEZIONE GOVERNANCE: AMMINISTRATORE E POSTAZIONI PUK */}
        <section className="py-16 sm:py-24 border-b-2 border-primary/15 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                  <Crown className="w-3.5 h-3.5 text-[#b4ff3c]" />
                  <span>Governance Aziendale Rigorosa</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                  Il primo accesso diventa Amministratore. Ciascun collaboratore ha il suo PUK.
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Non serve una complessa infrastruttura IT. Il sistema riconosce la prima attivazione della licenza 
                  e assegna automaticamente il ruolo di <strong className="text-foreground">Amministratore Unico</strong>.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base">1 Postazione = 1 Codice PUK Univoco</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Ogni collaboratore entra con la licenza aziendale e il proprio PUK personale. Le postazioni sono tracciate e non cedibili.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base">Permessi per Categoria & Sola Lettura</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Attiva o disattiva con una semplice spunta l'accesso a Documenti Tecnici, Contabilità, Logistica o Altro.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base">Revoca Istantanea degli Accessi</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Se un dipendente o consulente conclude il proprio incarico, basta eliminare il suo PUK: l'accesso ai siti è bloccato all'istante.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl border-2 border-primary/20 shadow-2xl overflow-hidden bg-background">
                  <img
                    src="/040registroweb/040RegistroWEB-image02.jpg"
                    alt="Gestione Postazioni e PUK in 040RegistroWEB"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <MediaCode id="REGWEB-006" />
              </div>

            </div>
            <MediaSlot
              id="REGWEB-009"
              alt="Storyboard in quattro passi: prima attivazione, Amministratore, PUK personale, solo le proprie categorie"
              prompt={MEDIA_PROMPTS["REGWEB-009"]}
              folder={MEDIA_FOLDER}
              className="mt-12 mx-auto max-w-4xl"
            />
          </div>
        </section>

        {/* 6. SEZIONE BACKUP & REPORT RISERVATI */}
        <section className="py-16 sm:py-24 border-b-2 border-primary/15 bg-primary/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-2xl border-2 border-primary/20 shadow-2xl overflow-hidden bg-background">
                  <img
                    src="/040registroweb/040RegistroWEB-image03.jpg"
                    alt="Esportazione riservata PDF e Backup Excel 040RegistroWEB"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <MediaCode id="REGWEB-007" />
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-[#b4ff3c]" />
                  <span>Protezione Dati & Backup Riservato</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                  Export PDF & CSV protetti. Ripristino Excel con "Unisci" o "Sostituisci".
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  I dati aziendali non devono mai andare dispersi né finire nelle mani sbagliate. 
                  Solo l'Amministratore ha la facoltà di esportare l'intero archivio.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-foreground">
                  <div className="p-3.5 rounded-xl bg-background border border-primary/20 flex items-start gap-3">
                    <Download className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-foreground">Report PDF Certificato</strong>
                      <span className="text-muted-foreground">Documento impaginato con data di estrazione, contatore crediti residui e formattazione chiara per l'archivio aziendale.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-background border border-primary/20 flex items-start gap-3">
                    <FileSpreadsheet className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-foreground">Importazione Intelligente da Excel (CSV)</strong>
                      <span className="text-muted-foreground">Scegli tra la modalità <strong>"Unisci"</strong> per integrare nuovi portali senza sovrascrivere i preesistenti, oppure <strong>"Sostituisci"</strong> per ripristinare un backup.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <MediaSlot
              id="REGWEB-011"
              alt="Importazione da CSV: modalità Unisci per aggiungere i record mancanti, Sostituisci per ripristinare un backup completo"
              prompt={MEDIA_PROMPTS["REGWEB-011"]}
              folder={MEDIA_FOLDER}
              className="mt-12 mx-auto max-w-4xl"
            />
          </div>
        </section>

        {/* 7. SEZIONE LANCIATORE DESKTOP PWA */}
        <section className="py-16 sm:py-24 border-b-2 border-primary/15 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                  <Monitor className="w-3.5 h-3.5 text-[#b4ff3c]" />
                  <span>Lanciatore Desktop PWA</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                  Un'applicazione Desktop sul computer di ogni collaboratore.
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Grazie alla tecnologia Progressive Web App (PWA), 040RegistroWEB può essere installato come 
                  una vera e propria icona sul desktop di Windows, Mac o tablet.
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b4ff3c] shrink-0" />
                    <span>Nessun installer pesante o file .exe da aggiornare</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b4ff3c] shrink-0" />
                    <span>Compatibile con Windows 10/11, Mac, iPad e tablet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b4ff3c] shrink-0" />
                    <span>Accesso istantaneo senza dover ricordare l'indirizzo web</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl border-2 border-primary/20 shadow-2xl overflow-hidden bg-background">
                  <img
                    src="/040registroweb/040RegistroWEB-image04.jpg"
                    alt="Lanciatore Desktop PWA per 040RegistroWEB"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <MediaCode id="REGWEB-008" />
              </div>

            </div>
            <MediaSlot
              id="REGWEB-012"
              alt="Responsabile di magazzino che consulta il registro dei siti su un tablet alla baia di carico"
              prompt={MEDIA_PROMPTS["REGWEB-012"]}
              folder={MEDIA_FOLDER}
              className="mt-12 mx-auto max-w-4xl"
            />
          </div>
        </section>

        {/* 8. SEZIONE PIANI & PREZZI */}
        <section id="prezzi" className="py-16 sm:py-24 border-y-2 border-primary/15" style={{ background: "var(--gradient-section-corsi)" }}>
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeading
              badge="Trasparenza Totale"
              title="Scegli il piano ideale per la tua azienda"
              subtitle="Canone annuale fisso tutto compreso. Attivazione immediata con il primo PUK Amministratore."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
              {/* Piano 15 */}
              <PriceBlock
                title="040RegistroWEB-015"
                price="€ 50,00"
                period="/ anno"
                users="Fino a 15 collaboratori"
                pdfExports="15 esportazioni PDF/CSV"
                planCode="040RegistroWEB-015"
                planIndex={18}
                features={[
                  "Amministratore automatico",
                  "15 codici PUK personali univoci",
                  "Permessi e filtro per categorie",
                  "Copia rapida URL, ID e Password",
                  "Backup Excel e Registro PDF riservati",
                  "Lanciatore Desktop PWA incluso",
                  "Validità 365 giorni",
                ]}
              />

              {/* Piano 50 (In Evidenza) */}
              <PriceBlock
                highlight
                title="040RegistroWEB-050"
                price="€ 90,00"
                period="/ anno"
                users="Fino a 50 collaboratori"
                pdfExports="50 esportazioni PDF/CSV"
                planCode="040RegistroWEB-050"
                planIndex={19}
                features={[
                  "Tutte le funzioni del piano 015",
                  "50 codici PUK personali univoci",
                  "50 crediti esportazione PDF/CSV",
                  "Ideale per imprese con più reparti",
                  "Gestione categorie avanzata",
                  "Supporto prioritario via email",
                  "Validità 365 giorni",
                ]}
              />

              {/* Piano 200 */}
              <PriceBlock
                title="040RegistroWEB-200"
                price="€ 200,00"
                period="/ anno"
                users="Fino a 200 collaboratori"
                pdfExports="200 esportazioni PDF/CSV"
                planCode="040RegistroWEB-200"
                planIndex={20}
                features={[
                  "Tutte le funzioni del piano 050",
                  "200 codici PUK personali univoci",
                  "200 crediti esportazione PDF/CSV",
                  "Per grandi strutture o gruppi",
                  "Offboarding massivo collaboratori",
                  "Backup senza pensieri tutto l'anno",
                  "Validità 365 giorni",
                ]}
              />
            </div>

            <div className="mt-8 max-w-xl mx-auto text-center">
              <TaxNote />
            </div>
          </div>
        </section>

        {/* 9. FAQ ACCORDION */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading
              badge="Domande Frequenti"
              title="Tutto quello che c'è da sapere"
              subtitle="Risposte chiare sui permessi, la sicurezza e l'uso quotidiano di 040RegistroWEB."
            />

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-2 border-primary/20 rounded-xl px-4 sm:px-6 bg-background/60"
                >
                  <AccordionTrigger className="text-left font-bold text-sm sm:text-base py-4 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 10. CTA FINALE */}
        <section
          className="py-16 sm:py-20 text-white"
          style={{ background: "var(--gradient-section-about)" }}
        >
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Proteggi i siti aziendali e risparmia ore preziose da subito.
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Attiva la licenza per la tua azienda: riceverai subito la licenza e il PUK Amministratore per iniziare a invitare i tuoi collaboratori in totale sicurezza.
            </p>
            <div className="pt-2">
              <Button size="lg" className="bg-[#b4ff3c] hover:bg-[#a3f02b] text-black font-bold shadow-xl" asChild>
                <a href="#prezzi">Scegli il tuo piano aziendale →</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* 11. Footer istituzionale del sito */}
      <SiteFooter />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ShieldCheck, 
  Clock, 
  KeyRound, 
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
  Crown
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
    links: [{ rel: "canonical", href: "https://corporateboostservice.eu/registro-credenziali-fornitori" }],
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
          : "border-2 border-primary/20 bg-background/95 p-6 sm:p-8 hover:border-primary/40"
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
          <span className="text-4xl font-extrabold">{price}</span>
          <span className="text-xs text-muted-foreground">{period}</span>
        </div>

        <div className="space-y-2 py-3 px-3.5 rounded-lg bg-primary/5 border border-primary/15 text-xs mb-6">
          <div className="flex justify-between font-semibold">
            <span>Collaboratori / PUK:</span>
            <span className="text-primary">{users}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Crediti Esportazione PDF/CSV:</span>
            <span className="text-primary">{pdfExports}</span>
          </div>
        </div>

        <ul className="space-y-2.5 text-xs sm:text-sm mb-6">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-border/50">
        <PricingCartButton code={planCode} index={planIndex} full />
      </div>
    </div>
  );
}

export function RegistroSitiWebPage() {
  const problems = [
    {
      icon: Clock,
      title: "Ore perse a cercare credenziali",
      desc: "Post-it attaccati agli schermi, foglietti volanti, messaggi su WhatsApp: ogni volta che serve accedere a un portale si perdono 15 minuti tra ricerche e tentativi a vuoto.",
    },
    {
      icon: AlertTriangle,
      title: "Password bloccate e reset continui",
      desc: "Un collaboratore modifica una password senza avvisare gli altri, e improvvisamente l'intero ufficio resta bloccato fuori proprio nel momento di una scadenza urgente.",
    },
    {
      icon: Lock,
      title: "Nessun controllo dell'Amministratore",
      desc: "Con un file Excel condiviso tutti vedono tutto (banche, credenziali fiscali) e se un collaboratore se ne va, porta con sé l'intero archivio aziendale.",
    },
  ];

  const features = [
    {
      icon: UserCheck,
      title: "Nomina automatica Amministratore",
      desc: "Il primo collaboratore che attiva la licenza diventa automaticamente l'Amministratore dell'azienda. Solo lui ha accesso alle impostazioni e alla governance delle postazioni.",
    },
    {
      icon: Users,
      title: "Invito collaboratori in 1 clic",
      desc: "L'Amministratore inserisce l'email del dipendente e invia automaticamente le credenziali: ogni collaboratore riceve la licenza aziendale e il proprio codice PUK personale univoco.",
    },
    {
      icon: Layers,
      title: "Permessi e filtro per Categorie",
      desc: "Scegli per ogni collaboratore tra Accesso Completo o Sola Lettura, e seleziona le categorie visibili. Chi non è autorizzato a 'Banche' o 'Fatturazione' non vede neppure la riga nel registro.",
    },
    {
      icon: KeyRound,
      title: "Copia rapida in 1 tocco",
      desc: "Tre pulsanti istantanei per ogni sito: un clic per aprire l'indirizzo web, un clic per copiare l'ID utente, un clic per copiare la password. La password non viene mostrata in chiaro a schermo.",
    },
    {
      icon: FileSpreadsheet,
      title: "Backup Excel & PDF riservati all'Admin",
      desc: "Nessun collaboratore può esportare o scaricare le credenziali: zero rischio di furto dati. Solo l'Amministratore può salvare backup periodici in Excel o stampare il registro ufficiale PDF.",
    },
    {
      icon: Monitor,
      title: "Lanciatore Desktop PWA",
      desc: "Installabile come applicazione desktop con icona dedicata su Windows e Mac. Doppio clic dal desktop o dalla barra delle applicazioni e si accede subito al registro protetto.",
    },
  ];

  const faqs = [
    {
      q: "Chi diventa l'Amministratore del registro aziendale?",
      a: "La prima persona dell'azienda che attiva la licenza (inserendo la licenza e il primo PUK assegnato) viene riconosciuta dal sistema come Amministratore. Solo l'Amministratore vede la tabella 'Gestione Postazioni', le 'Impostazioni Ditta' e i pulsanti per l'esportazione dei backup.",
    },
    {
      q: "Quanto tempo fa risparmiare concretamente questo registro?",
      a: "Nelle aziende con 5-15 collaboratori si stima un risparmio di oltre 15 ore lavorative ogni mese. Niente più richieste continue tra colleghi ('mi passi la password di quel sito?'), niente più reset credenziali e zero blocchi operativi durante il lavoro.",
    },
    {
      q: "I dipendenti possono scaricare tutte le password aziendali?",
      a: "No. I pulsanti 'Esporta CSV' e 'Esporta PDF' sono visibili e utilizzabili esclusivamente dall'Amministratore. I collaboratori autorizzati possono solo consultare o copiare le credenziali delle categorie a loro assegnate, azzerando il rischio di fuga dati.",
    },
    {
      q: "Cosa succede se un dipendente lascia l'azienda?",
      a: "L'Amministratore apre la 'Gestione Postazioni' e con un solo clic cancella o riassegna il PUK del dipendente. L'accesso di quel collaboratore viene revocato all'istante, e la postazione torna libera per un nuovo collega.",
    },
    {
      q: "Come funziona il backup e il ripristino dei dati?",
      a: "L'Amministratore può esportare in qualsiasi momento un backup completo in formato Excel/CSV o PDF con il frontespizio aziendale. In caso di necessità, il file Excel può essere reimportato con due modalità: 'Unisci' (aggiunge i record mancanti senza toccare quelli esistenti) o 'Sostituisci' (ripristina esattamente l'archivio salvato).",
    },
    {
      q: "Che cos'è il Lanciatore Desktop PWA?",
      a: "È un'applicazione leggera basata su tecnologia Progressive Web App. Si installa direttamente dal browser creando un'icona dedicata sul desktop del computer e nella barra delle applicazioni, permettendo di aprire il registro con un doppio clic.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 1. Header istituzionale del sito */}
      <SiteHeader />

      <main id="main" className="pt-36 md:pt-44">
        {/* Pulsante Torna alle applicazioni */}
        <div className="container mx-auto px-4 max-w-6xl mb-6">
          <Button variant="ghost" size="sm" asChild className="hover:bg-primary/10">
            <Link to="/applicazioni">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Torna alle applicazioni
            </Link>
          </Button>
        </div>

        {/* 2. HERO PRINCIPALE */}
        <section className="relative overflow-hidden py-8 md:py-16" style={{ background: "var(--gradient-section-hero)" }}>
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Testo Hero */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold text-primary">
                  <span className="h-2 w-2 rounded-full bg-[#b4ff3c] animate-pulse" />
                  SOFTWARE SAAS AZIENDALE 040RegistroWEB
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  Tutti i siti web aziendali e le credenziali, in un unico registro blindato.
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Basta perdere ore ogni giorno a cercare password in chat o foglietti volanti. 
                  Il primo accesso nomina in automatico l'Amministratore, che assegna i PUK ai collaboratori, 
                  decide quali categorie far vedere a ciascuno e custodisce l'archivio con backup protetti.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button size="lg" className="bg-[#b4ff3c] hover:bg-[#a3f02b] text-black font-bold shadow-lg" asChild>
                    <a href="#prezzi">Attiva la licenza aziendale →</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#come-funziona">Come funziona</a>
                  </Button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-primary/15 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Attivazione immediata</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Backup riservato Admin</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Crittografia Cloud</span>
                  </div>
                </div>
              </div>

              {/* Immagine Hero 01 */}
              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#b4ff3c]/20 via-[#00e5ff]/20 to-transparent rounded-2xl blur-xl opacity-80" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/25 bg-[#060a12] shadow-2xl">
                  <img
                    src="/040registroweb/040RegistroWEB-image01.jpg"
                    alt="040RegistroWEB - Software Registro Siti Web Aziendali e Credenziali Protette"
                    className="w-full h-auto object-cover block"
                    loading="eager"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. IL CONFRONTO: DAL CAOS AL TOTALE CONTROLLO */}
        <section className="py-16 sm:py-24 bg-background border-b border-border/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeading
              badge="Tempo & Produttività"
              title="Dal caos dei post-it al controllo totale del tuo tempo"
              subtitle="Guarda la differenza tra lavorare cercando password ogni 10 minuti e lavorare con un sistema aziendale blindato dove sei tu il vero padrone."
            />

            {/* Immagine 05: Before vs After */}
            <div className="relative max-w-4xl mx-auto mb-12">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/10 via-[#b4ff3c]/20 to-primary/20 rounded-2xl blur-xl opacity-80" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/25 bg-[#060a12] shadow-2xl">
                <img
                  src="/040registroweb/040RegistroWEB-image05.jpg"
                  alt="Dal Caos dei Post-it al Totale Controllo e Tempo Risparmiato con 040RegistroWEB"
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* 3 Card di dettaglio */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problems.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <Card key={idx} className="border-2 border-primary/20 bg-background/60 hover:border-primary/40 transition-colors">
                    <CardHeader className="space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg font-bold">{p.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. SEZIONE COME FUNZIONA: GOVERNANCE AMMINISTRATORE */}
        <section id="come-funziona" className="py-16 sm:py-24 border-y-2 border-primary/15" style={{ background: "var(--gradient-section-corsi)" }}>
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeading
              badge="Controllo & Permessi"
              title="L'Amministratore decide chi vede cosa in 1 clic"
              subtitle="Una gestione centralizzata che elimina il disordine senza complicare il lavoro ai collaboratori."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Immagine 02: Gestione Postazioni */}
              <div className="lg:col-span-6 order-2 lg:order-1 relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-[#b4ff3c]/20 to-transparent rounded-2xl blur-xl opacity-75" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/25 bg-[#060a12] shadow-2xl">
                  <img
                    src="/040registroweb/040RegistroWEB-image02.jpg"
                    alt="040RegistroWEB - Gestione Postazioni e Permessi Categorie Riservata Amministratore"
                    className="w-full h-auto object-cover block"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Punti operativi */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#b4ff3c] text-black font-extrabold flex items-center justify-center shrink-0 text-sm shadow">
                      1
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold flex items-center gap-2">
                        Primo accesso = Amministratore <Crown className="w-4 h-4 text-amber-500" />
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        Il titolare o il responsabile IT attiva la licenza: il sistema lo riconosce all'istante come Amministratore supremo dell'intero registro aziendale.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#b4ff3c] text-black font-extrabold flex items-center justify-center shrink-0 text-sm shadow">
                      2
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold">Invito e PUK personale via email</h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        Inserisci l'email del dipendente: il sistema spedisce in automatico la licenza aziendale e il codice PUK personale univoco.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#b4ff3c] text-black font-extrabold flex items-center justify-center shrink-0 text-sm shadow">
                      3
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold">Visibilità selettiva per Categorie</h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        Spunta solo le categorie a cui il dipendente è autorizzato (es. <em>Documenti tecnici</em>, <em>Logistica</em>). I portali bancari e contabili restano invisibili.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#b4ff3c] text-black font-extrabold flex items-center justify-center shrink-0 text-sm shadow">
                      4
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold">Offboarding istantaneo in 3 secondi</h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        Un collaboratore cambia incarico o lascia l'azienda? Con un clic revochi il suo PUK: l'accesso si chiude all'istante e la postazione torna libera.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. SEZIONE SICUREZZA & BACKUP */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeading
              badge="Zero Rischio Fuga Dati"
              title="Backup Excel & Report PDF riservati esclusivamente all'Amministratore"
              subtitle="I collaboratori utilizzano le password ogni giorno ma non possono esportare l'archivio. Solo l'Amministratore può salvare copie aziendali sicure."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Testo Sicurezza */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-primary">
                    <ShieldCheck className="w-5 h-5 text-[#b4ff3c]" />
                    <span>Nessun dipendente può scaricare il registro</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    A differenza dei fogli condivisi o dei vecchi archivi, i pulsanti di esportazione sono completamente nascosti ai collaboratori: non c'è rischio che l'archivio venga scaricato su chiavetta.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <FileSpreadsheet className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold">Backup periodico in Excel (.xlsx / .csv)</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        L'Amministratore scarica in autonomia il backup periodico da custodire nel server aziendale o su supporto crittografato.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Download className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold">Ripristino facilitato "Unisci" o "Sostituisci"</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        Se occorre ripristinare i dati, basta ricaricare il file Excel scegliendo se unire i dati mancanti o ripristinare integralmente l'archivio.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Lock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold">Registro Ufficiale PDF con Logo Ditta</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        Stampa il documento ufficiale completo di ragione sociale, partita IVA, data, operatore e timbro di riservatezza per gli archivi della direzione.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Immagine 03: Report PDF e Backup Excel */}
              <div className="lg:col-span-6 relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-transparent rounded-2xl blur-xl opacity-75" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/25 bg-[#060a12] shadow-2xl">
                  <img
                    src="/040registroweb/040RegistroWEB-image03.jpg"
                    alt="040RegistroWEB - Backup Excel e Documento Ufficiale PDF Riservato Amministratore"
                    className="w-full h-auto object-cover block"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. LE CARATTERISTICHE CHIAVE DEL SOFTWARE */}
        <section className="py-16 sm:py-20 border-t border-border/50" style={{ background: "var(--gradient-section-app)" }}>
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeading
              badge="Tutto ciò che serve"
              title="Progettato per la massima produttività quotidiana"
              subtitle="Semplice da usare per chiunque, potente e blindato per chi amministra l'azienda."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, idx) => {
                const Icon = f.icon;
                return (
                  <Card key={idx} className="border-2 border-primary/20 bg-background/80 hover:border-primary/40 transition-colors">
                    <CardHeader className="space-y-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-base font-bold">{f.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. SEZIONE LANCIATORE PWA */}
        <section className="py-16 sm:py-24 bg-background border-t border-border/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Immagine 04: Desktop PWA */}
              <div className="lg:col-span-6 relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#b4ff3c]/20 via-[#00e5ff]/20 to-transparent rounded-2xl blur-xl opacity-75" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/25 bg-[#060a12] shadow-2xl">
                  <img
                    src="/040registroweb/040RegistroWEB-image04.jpg"
                    alt="040RegistroWEB - Lanciatore Desktop PWA con Icona Dedicata su Windows e Mac"
                    className="w-full h-auto object-cover block"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Testo PWA */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                  <Monitor className="w-3.5 h-3.5" />
                  APP DESKTOP AZIENDALE
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Un doppio clic dal desktop e sei subito operativo
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Grazie al <strong>Lanciatore Desktop PWA</strong>, 040RegistroWEB si installa direttamente sul computer dei dipendenti con un'icona nativa ad alta risoluzione sul desktop e nella barra delle applicazioni.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
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

            </div>
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
                  "15 Codici PUK personali univoci",
                  "Permessi e filtro per Categorie",
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
                  "50 Codici PUK personali univoci",
                  "50 Crediti esportazione PDF/CSV",
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
                  "200 Codici PUK personali univoci",
                  "200 Crediti esportazione PDF/CSV",
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
        <section className="py-16 sm:py-20 text-white" style={{ background: "var(--gradient-section-about)" }}>
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

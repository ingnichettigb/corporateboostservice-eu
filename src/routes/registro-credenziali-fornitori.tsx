import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  CheckCircle2,
  ClipboardCopy,
  Download,
  Eye,
  FileSpreadsheet,
  Globe,
  KeyRound,
  Lock,
  LockKeyhole,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Upload,
  UserCheck,
  UserMinus,
  Users,
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
        content:
          "Software SaaS per gestire in sicurezza tutti i siti web aziendali con URL, ID, password crittografate, permessi per categoria e backup riservato all'amministratore.",
      },
      { property: "og:title", content: "Registro Siti Web Aziendali | 040RegistroWEB" },
      {
        property: "og:description",
        content:
          "Proteggi e velocizza l'accesso ai siti web aziendali. Primo accesso Amministratore, invito con PUK personali, visibilità per categoria e backup protetto.",
      },
      { property: "og:url", content: "https://corporateboostservice.eu/registro-credenziali-fornitori" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://corporateboostservice.eu/registro-credenziali-fornitori" }],
  }),
  component: RegistroSitiWebPage,
});

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">{kicker}</p>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
    </div>
  );
}

function RegisterMockup() {
  return (
    <div
      className="overflow-hidden rounded-xl border-2 border-primary/25 bg-card shadow-[var(--shadow-elegant)]"
      aria-label="Anteprima Registro Siti Web Aziendali"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-secondary/80 px-4 py-3">
        <div className="flex items-center gap-2 font-bold text-sm">
          <Globe className="h-5 w-5 text-primary" aria-hidden />
          <span>040RegistroWEB – Registro Siti Web Aziendali</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">
            <ShieldCheck className="h-3.5 w-3.5" /> Postazione #1 (Admin)
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">
            <Search className="h-3.5 w-3.5" /> Cerca sito web aziendale...
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full text-left text-xs">
          <thead className="bg-muted text-foreground">
            <tr>
              <th className="border-b border-border px-3 py-3 font-bold">N°</th>
              <th className="border-b border-border px-3 py-3 font-bold">Sito Web Aziendale (URL)</th>
              <th className="border-b border-border px-3 py-3 font-bold">Categoria</th>
              <th className="border-b border-border px-3 py-3 font-bold">ID Utente</th>
              <th className="border-b border-border px-3 py-3 font-bold">Password</th>
              <th className="border-b border-border px-3 py-3 font-bold">Azioni Rapide</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border hover:bg-muted/40 transition-colors">
              <td className="px-3 py-3 font-semibold text-primary">001</td>
              <td className="px-3 py-3 font-medium">https://fatture.portaledoc.it</td>
              <td className="px-3 py-3">
                <span className="rounded bg-secondary px-2 py-0.5 text-[11px] font-semibold text-foreground/80">
                  Fatturazione & Fisco
                </span>
              </td>
              <td className="px-3 py-3 text-muted-foreground font-mono">admin@azienda.it</td>
              <td className="px-3 py-3">
                <span className="inline-flex items-center gap-1.5 rounded bg-background px-2 py-1 font-mono text-[11px] border border-border">
                  ••••••••••••
                  <Eye className="h-3 w-3 text-primary" />
                </span>
              </td>
              <td className="px-3 py-3">
                <div className="flex items-center gap-1 text-[11px]">
                  <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-1 font-semibold text-primary hover:bg-primary/20 cursor-pointer">
                    <Globe className="h-3 w-3" /> Apri
                  </span>
                  <span className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-1 font-semibold text-foreground/80 hover:bg-secondary/80 cursor-pointer">
                    <ClipboardCopy className="h-3 w-3" /> ID
                  </span>
                  <span className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-1 font-semibold text-foreground/80 hover:bg-secondary/80 cursor-pointer">
                    <KeyRound className="h-3 w-3" /> Pass
                  </span>
                </div>
              </td>
            </tr>

            <tr className="border-b border-border hover:bg-muted/40 transition-colors">
              <td className="px-3 py-3 font-semibold text-primary">002</td>
              <td className="px-3 py-3 font-medium">https://logistica.spedizionionline.eu</td>
              <td className="px-3 py-3">
                <span className="rounded bg-secondary px-2 py-0.5 text-[11px] font-semibold text-foreground/80">
                  Spedizioni & Magazzino
                </span>
              </td>
              <td className="px-3 py-3 text-muted-foreground font-mono">logistica_nord</td>
              <td className="px-3 py-3">
                <span className="inline-flex items-center gap-1.5 rounded bg-background px-2 py-1 font-mono text-[11px] border border-border">
                  ••••••••••••
                  <Eye className="h-3 w-3 text-primary" />
                </span>
              </td>
              <td className="px-3 py-3">
                <div className="flex items-center gap-1 text-[11px]">
                  <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-1 font-semibold text-primary hover:bg-primary/20 cursor-pointer">
                    <Globe className="h-3 w-3" /> Apri
                  </span>
                  <span className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-1 font-semibold text-foreground/80 hover:bg-secondary/80 cursor-pointer">
                    <ClipboardCopy className="h-3 w-3" /> ID
                  </span>
                  <span className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-1 font-semibold text-foreground/80 hover:bg-secondary/80 cursor-pointer">
                    <KeyRound className="h-3 w-3" /> Pass
                  </span>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-muted/40 transition-colors">
              <td className="px-3 py-3 font-semibold text-primary">003</td>
              <td className="px-3 py-3 font-medium">https://cloud.serverbackup24.com</td>
              <td className="px-3 py-3">
                <span className="rounded bg-secondary px-2 py-0.5 text-[11px] font-semibold text-foreground/80">
                  Infrastruttura IT
                </span>
              </td>
              <td className="px-3 py-3 text-muted-foreground font-mono">root_ced</td>
              <td className="px-3 py-3">
                <span className="inline-flex items-center gap-1.5 rounded bg-background px-2 py-1 font-mono text-[11px] border border-border">
                  ••••••••••••
                  <Eye className="h-3 w-3 text-primary" />
                </span>
              </td>
              <td className="px-3 py-3">
                <div className="flex items-center gap-1 text-[11px]">
                  <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-1 font-semibold text-primary hover:bg-primary/20 cursor-pointer">
                    <Globe className="h-3 w-3" /> Apri
                  </span>
                  <span className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-1 font-semibold text-foreground/80 hover:bg-secondary/80 cursor-pointer">
                    <ClipboardCopy className="h-3 w-3" /> ID
                  </span>
                  <span className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-1 font-semibold text-foreground/80 hover:bg-secondary/80 cursor-pointer">
                    <KeyRound className="h-3 w-3" /> Pass
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between border-t border-border bg-secondary/40 p-3 text-xs text-muted-foreground">
        <span>Visualizzazione protetta: ogni collaboratore visualizza solo i siti web aziendali assegnati.</span>
        <span className="font-semibold text-primary">Backup Excel/PDF riservato all'Amministratore</span>
      </div>
    </div>
  );
}

function PriceBlock({ anchor = false }: { anchor?: boolean }) {
  return (
    <div
      id={anchor ? "prezzo" : undefined}
      className="mx-auto mt-12 max-w-5xl scroll-mt-36"
    >
      <div className="text-center mb-8">
        <p className="text-xs font-bold uppercase tracking-wider text-primary">Piani di Abbonamento Annuale</p>
        <h3 className="mt-2 text-2xl font-bold">Attiva la Licenza Ufficiale di 040RegistroWEB</h3>
        <p className="mt-1 text-sm text-foreground/75">
          Tutti i piani includono 365 giorni di licenza, crittografia AES-GCM, crediti di esportazione PDF e supporto.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Piano 15 */}
        <Card className="border-2 border-primary/20 flex flex-col justify-between">
          <CardHeader>
            <div className="text-xs font-bold text-muted-foreground uppercase">Base Aziende</div>
            <CardTitle className="text-xl mt-1">15 Postazioni</CardTitle>
            <div className="text-3xl font-bold mt-2">50 € <span className="text-sm font-normal text-muted-foreground">/ anno</span></div>
            <p className="text-xs text-muted-foreground mt-2">
              Ideale per uffici e piccoli team: gestione protetta dei siti web aziendali con 15 PUK e 15 crediti PDF.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <PricingCartButton code="040RegistroWEB-015" index={32} full />
            <p className="text-[11px] text-center text-muted-foreground">Codice: 040RegistroWEB-015</p>
          </CardContent>
        </Card>

        {/* Piano 50 - Consigliato */}
        <Card className="border-2 border-primary bg-primary/5 flex flex-col justify-between relative shadow-lg">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[11px] font-bold px-3 py-0.5 rounded-full uppercase">
            Più Scelto dalle Imprese
          </div>
          <CardHeader>
            <div className="text-xs font-bold text-primary uppercase">Standard PMI</div>
            <CardTitle className="text-xl mt-1">50 Postazioni</CardTitle>
            <div className="text-3xl font-bold mt-2 text-primary">90 € <span className="text-sm font-normal text-muted-foreground">/ anno</span></div>
            <p className="text-xs text-muted-foreground mt-2">
              Pieno controllo e catalogazione dei siti web aziendali: fino a 50 collaboratori, 50 crediti PDF e categorie illimitate.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <PricingCartButton code="040RegistroWEB-050" index={33} full />
            <p className="text-[11px] text-center text-muted-foreground">Codice: 040RegistroWEB-050</p>
          </CardContent>
        </Card>

        {/* Piano 200 */}
        <Card className="border-2 border-primary/20 flex flex-col justify-between">
          <CardHeader>
            <div className="text-xs font-bold text-muted-foreground uppercase">Aziende Strutturate</div>
            <CardTitle className="text-xl mt-1">200 Postazioni</CardTitle>
            <div className="text-3xl font-bold mt-2">200 € <span className="text-sm font-normal text-muted-foreground">/ anno</span></div>
            <p className="text-xs text-muted-foreground mt-2">
              Per grandi strutture e gruppi: sicurezza estesa per tutti i siti web aziendali con 200 postazioni e 200 crediti PDF.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <PricingCartButton code="040RegistroWEB-200" index={34} full />
            <p className="text-[11px] text-center text-muted-foreground">Codice: 040RegistroWEB-200</p>
          </CardContent>
        </Card>
      </div>

      <TaxNote className="mx-auto mt-6 max-w-xl text-center" />
    </div>
  );
}

function RegistroSitiWebPage() {
  const problems = [
    {
      title: "Ore perse a cercare gli accessi ai siti web aziendali",
      desc: "Dipendenti e collaboratori bloccati perché non trovano l'indirizzo o la password di un sito web aziendale utilizzato raramente o gestito da un collega assente.",
    },
    {
      title: "Password scambiate in chat o salvate su foglietti",
      desc: "Nessuna protezione: le chiavi di accesso ai siti web aziendali finiscono su fogli volanti, email non protette o chat di gruppo, esponendo l'azienda a gravi rischi informatici.",
    },
    {
      title: "Nessun controllo su chi vede quale sito web aziendale",
      desc: "Senza una segmentazione per categorie, tutti gli utenti vedono tutti i siti aziendali, compresi portali bancari, gestionali interni o aree riservate della direzione.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Primo Accesso e Nomina Amministratore",
      desc: "Chi effettua la prima attivazione con la Licenza e il primo PUK diventa automaticamente l'Amministratore unico del Registro Siti Web Aziendali.",
    },
    {
      step: "02",
      title: "Invito del Team con PUK Personale in 1 Clic",
      desc: "L'amministratore inserisce l'email del collaboratore e clicca 'Invia credenziali': il sistema spedisce in automatico la Licenza e il suo PUK personale.",
    },
    {
      step: "03",
      title: "Assegnazione Permessi e Categorie",
      desc: "Per ogni collaboratore l'amministratore sceglie il livello (Accesso Completo o Sola Lettura) e spunta esattamente le categorie di siti web aziendali che può consultare.",
    },
    {
      step: "04",
      title: "Copia Rapida in 1 Tocco (URL, ID, Password)",
      desc: "Il collaboratore accede, visualizza solo i siti web aziendali abilitati e con un solo clic apre il portale o copia ID e password senza errori.",
    },
    {
      step: "05",
      title: "Backup & Ripristino Esclusivi dell'Amministratore",
      desc: "Solo l'amministratore può esportare il registro in Excel/CSV o PDF con logo ditta, custodendolo in sicurezza e ripristinandolo al bisogno con 'Unisci' o 'Sostituisci'.",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Segmentazione per Categorie",
      desc: "I collaboratori visualizzano solo le categorie autorizzate. I siti web aziendali a cui non hanno accesso non compaiono nemmeno nell'elenco.",
    },
    {
      icon: ClipboardCopy,
      title: "Accesso Veloce in 1 Clic",
      desc: "Tre pulsanti immediati su ciascuna riga: apri l'indirizzo del sito web aziendale, copia l'ID utente, copia la password pronta per l'accesso.",
    },
    {
      icon: UserMinus,
      title: "Revoca Accessi Istantanea",
      desc: "Se un collaboratore lascia l'azienda o cambia mansione, l'amministratore azzera il suo PUK con un clic, disattivando all'istante l'accesso al registro.",
    },
    {
      icon: Lock,
      title: "Zero Rischio di Fuga Dati",
      desc: "I collaboratori non hanno accesso ai pulsanti di esportazione: nessuno può scaricare in blocco l'intero registro dei siti web aziendali.",
    },
    {
      icon: FileSpreadsheet,
      title: "Ripristino da Excel in 1 Secondo",
      desc: "In caso di emergenza o passaggio a nuovo dispositivo, l'amministratore reimporta il file Excel con modalità 'Unisci' o 'Sostituisci integralmente'.",
    },
    {
      icon: Globe,
      title: "Lanciatore Desktop PWA Dedicato",
      desc: "Installabile su PC Windows, Mac o smartphone con icona dedicata sul Desktop, per un avvio immediato come programma nativo.",
    },
  ];

  const faqs = [
    {
      q: "Che cos'è esattamente 040RegistroWEB?",
      a: "È il software cloud ideato per archiviare, proteggere e condividere in modo ordinato tutti i siti web aziendali e i rispettivi dati di accesso (indirizzo web, nome utente, password crittografata e note operative), eliminando dispersioni e violazioni di sicurezza.",
    },
    {
      q: "Chi può fare da Amministratore e come viene nominato?",
      a: "Il primo collaboratore che esegue l'attivazione della licenza inserendo il primo PUK e verificando la propria email aziendale viene automaticamente riconosciuto dal sistema come Amministratore Unico. Solo lui potrà gestire postazioni, invitare colleghi ed effettuare esportazioni.",
    },
    {
      q: "I collaboratori possono vedere tutti i siti web aziendali?",
      a: "No. L'amministratore seleziona per ciascun collaboratore le categorie di siti web aziendali a cui è autorizzato. Chi non ha i permessi non vedrà né il sito, né l'indirizzo, né la password.",
    },
    {
      q: "I dipendenti possono scaricare o esportare il registro?",
      a: "Assolutamente no. Per garantire la massima riservatezza aziendale, i pulsanti di esportazione in Excel, CSV e PDF con frontespizio sono visibili e azionabili esclusivamente dall'Amministratore. I collaboratori possono solo consultare e copiare i singoli accessi autorizzati.",
    },
    {
      q: "Come avviene il backup e il ripristino dei siti web aziendali?",
      a: "L'amministratore deve effettuare periodicamente il backup salvando il file Excel o PDF in un luogo protetto. Se occorre ripristinare i dati, basta usare la funzione 'Importa da file' scegliendo se unire i dati o sostituire interamente il registro.",
    },
    {
      q: "Cosa succede se un dipendente si dimette o cambia mansione?",
      a: "L'amministratore apre la scheda 'Gestione Postazioni' e con un semplice clic cancella o riassegna il PUK del dipendente: il suo accesso a tutti i siti web aziendali viene revocato all'istante senza dover cambiare tutte le password dei portali.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main" className="pt-36 md:pt-44">
        {/* Pulsante Torna alle applicazioni */}
        <div className="container mx-auto max-w-6xl px-4">
          <Button variant="ghost" size="sm" asChild className="mb-5">
            <Link to="/applicazioni">
              <ArrowLeft className="h-4 w-4 mr-2" aria-hidden />
              Torna alle applicazioni
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="pb-20 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-primary">
                040REGISTROWEB – REGISTRO SITI WEB AZIENDALI
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Tutti i siti web aziendali e le relative credenziali, in un unico registro blindato.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                Basta perdere ore di lavoro a cercare link e password smarrite o inviarsi accessi via chat. Con 040RegistroWEB l'amministratore governa le categorie, invita i collaboratori in 1 clic e protegge l'intero patrimonio dei siti web aziendali.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="hero" className="h-12" asChild>
                  <a href="#come-funziona">
                    Scopri come funziona
                    <ArrowDown className="ml-2 h-4 w-4" aria-hidden />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-12" asChild>
                  <a href="#prezzo">Piani e Prezzi</a>
                </Button>
              </div>
            </div>
            <RegisterMockup />
          </div>
          <div className="container mx-auto max-w-6xl px-4">
            <PriceBlock anchor />
          </div>
        </section>

        {/* Problemi Risolti */}
        <section className="py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <SectionHeading
              kicker="Sicurezza & Risparmio di Tempo"
              title="Quanto tempo perde ogni giorno la tua azienda per accedere ai propri siti?"
            />
            <div className="grid gap-6 md:grid-cols-3">
              {problems.map((prob) => (
                <Card key={prob.title} className="border-2 border-primary/20 bg-card">
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                      <ShieldAlert className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base leading-snug">{prob.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-foreground/75">{prob.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Come Funziona - Flusso in 5 step */}
        <section
          id="come-funziona"
          className="scroll-mt-36 border-y-2 border-primary/15 py-20 [background:var(--gradient-section-corsi)]"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <SectionHeading
              kicker="Flusso Operativo Immediato"
              title="Come funziona 040RegistroWEB in 5 semplici passaggi"
            />
            <ol className="grid gap-5 md:grid-cols-5">
              {steps.map((st) => (
                <li key={st.step} className="border-t-4 border-primary pt-5 bg-card/60 p-4 rounded-b-lg border-x border-b border-primary/10">
                  <span className="text-3xl font-extrabold text-primary">{st.step}</span>
                  <h3 className="mt-3 font-bold text-sm leading-tight">{st.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/75">{st.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Caratteristiche Chiave */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <SectionHeading
              kicker="Protezione Totale"
              title="Perché le aziende scelgono 040RegistroWEB"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <Card key={feat.title} className="border-2 border-primary/20 bg-card">
                    <CardHeader>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg [background:var(--gradient-hero)] text-primary-foreground">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <CardTitle className="text-lg leading-snug">{feat.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-foreground/80">{feat.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <PriceBlock />
          </div>
        </section>

        {/* FAQ */}
        <section className="border-y-2 border-primary/15 py-20 [background:var(--gradient-section-corsi)]">
          <div className="container mx-auto max-w-3xl px-4">
            <SectionHeading kicker="Domande Frequenti" title="Tutto quello che c'è da sapere" />
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${i}`}
                  className="rounded-lg border-2 border-primary/20 bg-card px-4"
                >
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-foreground/80 pb-4 text-sm">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Sezione Finale CTA */}
        <section className="py-20 [background:var(--gradient-section-about)] text-primary-foreground">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-foreground/75">
              CorporateBoostService
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Metti in sicurezza i siti web aziendali oggi stesso
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/85">
              Attiva la licenza aziendale annuale, ricevi immediatamente il tuo codice di attivazione e metti fine alla perdita di tempo e alle falle di sicurezza per sempre.
            </p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" variant="hero" className="h-12 text-base px-8" asChild>
                <a href="#prezzo">Scegli il tuo piano</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

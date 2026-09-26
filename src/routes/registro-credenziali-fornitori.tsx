import { createFileRoute, Link } from "@tanstack/react-router";
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
  Laptop,
  LockKeyhole,
  Search,
  Settings,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
  UserPlus,
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
      { title: "040RegistroWEB | Registro Credenziali e Siti Web Fornitori Aziendali" },
      {
        name: "description",
        content:
          "Software SaaS aziendale per centralizzare credenziali, accessi fornitori e password in sicurezza. Amministratore nativo, permessi per categoria e backup riservato.",
      },
      { property: "og:title", content: "040RegistroWEB | Registro Credenziali e Fornitori" },
      {
        property: "og:description",
        content:
          "Proteggi e velocizza l'accesso ai portali fornitori. Backup Excel/PDF solo amministratore, invito collaboratori via email e PUK personale.",
      },
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
  return (
    <div
      id={anchor ? "prezzo" : undefined}
      className={`mx-auto mt-12 max-w-2xl scroll-mt-36 text-center ${dark ? "text-primary-foreground" : ""}`}
    >
      <p
        className={`text-xs font-bold uppercase tracking-wider ${dark ? "text-primary-foreground/80" : "text-primary"}`}
      >
        Licenza Annuale All-Inclusive
      </p>
      <h3 className="mt-2 text-xl font-bold">Attiva subito 040RegistroWEB per la tua azienda</h3>
      <p className={`mt-1 text-sm ${dark ? "text-primary-foreground/75" : "text-foreground/65"}`}>
        Scegli il piano in base alle postazioni/collaboratori necessari. Validità 365 giorni.
      </p>
      <div className="mx-auto mt-5 flex max-w-md flex-col items-center gap-3">
        <PricingCartButton code="040RegistroWEB-015" index={18} full />
        <PricingCartButton code="040RegistroWEB-050" index={19} full />
        <PricingCartButton code="040RegistroWEB-200" index={20} full />
      </div>
      <TaxNote light={dark} className="mx-auto mt-4 max-w-xl" />
    </div>
  );
}

function RegisterMockup() {
  return (
    <div
      className="overflow-hidden rounded-lg border-2 border-primary/20 bg-card shadow-[var(--shadow-elegant)]"
      aria-label="Simulazione registro credenziali 040RegistroWEB"
    >
      <div className="flex items-center justify-between gap-3 border-b border-border bg-secondary px-4 py-3">
        <span className="inline-flex items-center gap-2 font-bold text-sm">
          <KeyRound className="h-5 w-5 text-primary" aria-hidden />
          Registro Credenziali Fornitori & Siti Web
        </span>
        <span className="hidden items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground sm:inline-flex">
          <Search className="h-3.5 w-3.5" aria-hidden />
          Cerca fornitore o categoria...
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full text-left text-xs">
          <thead className="bg-muted text-foreground">
            <tr>
              <th className="border-b border-border px-3 py-2.5 font-bold">Fornitore / Portale</th>
              <th className="border-b border-border px-3 py-2.5 font-bold">Categoria</th>
              <th className="border-b border-border px-3 py-2.5 font-bold">Indirizzo Web</th>
              <th className="border-b border-border px-3 py-2.5 font-bold">ID / Utente</th>
              <th className="border-b border-border px-3 py-2.5 font-bold">Password</th>
              <th className="border-b border-border px-3 py-2.5 font-bold text-center">Copia Rapida</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-border px-3 py-3 font-semibold text-foreground">Portale Fatture SDI</td>
              <td className="border-b border-border px-3 py-3">
                <span className="rounded bg-primary/10 px-2 py-0.5 text-primary font-bold">Amministrazione</span>
              </td>
              <td className="border-b border-border px-3 py-3 text-muted-foreground font-mono">https://sdi.gov.it</td>
              <td className="border-b border-border px-3 py-3 font-mono">az_amministrazione</td>
              <td className="border-b border-border px-3 py-3 font-mono">
                <span className="inline-flex items-center gap-1.5 font-bold text-primary">
                  ••••••••••••
                  <Eye className="h-3.5 w-3.5 opacity-70" aria-hidden />
                </span>
              </td>
              <td className="border-b border-border px-3 py-3 text-center">
                <div className="inline-flex items-center gap-1">
                  <span className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                    WEB
                  </span>
                  <span className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                    ID
                  </span>
                  <span className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                    PASS
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-b border-border px-3 py-3 font-semibold text-foreground">Fornitore Hosting Web</td>
              <td className="border-b border-border px-3 py-3">
                <span className="rounded bg-primary/10 px-2 py-0.5 text-primary font-bold">Sito Web & IT</span>
              </td>
              <td className="border-b border-border px-3 py-3 text-muted-foreground font-mono">https://panel.cloud.com</td>
              <td className="border-b border-border px-3 py-3 font-mono">webmaster@azienda.it</td>
              <td className="border-b border-border px-3 py-3 font-mono">
                <span className="inline-flex items-center gap-1.5 font-bold text-primary">
                  ••••••••••••
                  <Eye className="h-3.5 w-3.5 opacity-70" aria-hidden />
                </span>
              </td>
              <td className="border-b border-border px-3 py-3 text-center">
                <div className="inline-flex items-center gap-1">
                  <span className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                    WEB
                  </span>
                  <span className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                    ID
                  </span>
                  <span className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                    PASS
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-muted/40 px-4 py-2.5 text-xs text-foreground/80">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
          <span>Password crittografate AES-256 • Copia negli appunti senza visualizzazione forzata</span>
        </div>
        <div className="font-semibold text-primary">Ruolo attivo: Amministratore (PUK #1)</div>
      </div>
    </div>
  );
}

const badges = [
  "Amministratore automatico al primo accesso",
  "Invito collaboratori via email in 1 clic",
  "Copia rapida: Sito Web, ID e Password",
  "Filtro di visibilità per Categorie",
  "Backup Excel e PDF solo Amministratore",
  "Restore sicuro Unisci o Sostituisci",
  "Revoca accessi immediata in 3 secondi",
  "Lanciatore PWA installabile sul desktop",
];

const features = [
  {
    icon: UserPlus,
    title: "Amministratore & Invito in 1 Clic",
    desc: "Il primo che accede attiva la licenza e diventa Amministratore. Invita i collaboratori inserendo semplicemente la loro email: il sistema spedisce automaticamente Licenza e PUK personale univoco.",
  },
  {
    icon: Settings,
    title: "Permessi per Categorie di Siti",
    desc: "Decidi per ogni singolo dipendente se assegnare Accesso Completo o Sola Lettura, e seleziona esattamente quali categorie di siti può consultare. I siti non autorizzati restano del tutto invisibili.",
  },
  {
    icon: ClipboardCopy,
    title: "Copia Rapida in 1 Tocco (Web, ID, Pass)",
    desc: "Basta foglietti volanti o chat insicure: con tre pulsanti dedicati copi l'indirizzo del portale, il nome utente o la password negli appunti, pronto per fare login in un istante.",
  },
  {
    icon: FileSpreadsheet,
    title: "Backup & Restore Solo Amministratore",
    desc: "I collaboratori non hanno accesso ai comandi di esportazione. L'amministratore esporta periodicamente il backup in Excel/CSV o PDF con logo aziendale e può ripristinarlo scegliendo 'Unisci' o 'Sostituisci'.",
  },
  {
    icon: ShieldAlert,
    title: "Zero Rischio Fuga Dati & Offboarding Rapido",
    desc: "Un dipendente cambia ruolo o lascia l'azienda? L'amministratore cancella la postazione con un clic: il PUK viene revocato istantaneamente e torna subito disponibile per un nuovo collaboratore.",
  },
  {
    icon: Laptop,
    title: "Lanciatore PWA Desktop Dedicato",
    desc: "Installa il software con icona diretta sul desktop del PC o sullo smartphone. Si apre all'istante a tutto schermo senza barre del browser per la massima comodità d'uso.",
  },
];

const steps = [
  {
    title: "Primo Accesso = Amministratore",
    desc: "Il titolare o responsabile IT inserisce la Licenza e il primo codice PUK. Il sistema lo riconosce all'istante come Amministratore unico e abilita il pannello di controllo completo.",
  },
  {
    title: "Invito Collaboratori Istantaneo",
    desc: "Dalla Gestione Postazioni, inserisci l'email del collaboratore, scegli se dare Accesso Completo o Sola Lettura e seleziona le categorie. Con 'Invia Credenziali', il software spedisce email con Licenza e PUK personale.",
  },
  {
    title: "Lavoro Quotidiano Senza Perdite di Tempo",
    desc: "Ogni dipendente apre il registro dal desktop o browser, trova in un secondo il fornitore cercato e copia indirizzo web, ID e password in un clic senza disturbare i colleghi.",
  },
  {
    title: "Backup Periodico di Sicurezza",
    desc: "L'amministratore si occupa di esportare periodicamente il backup aziendale completo in file Excel o PDF protetto, conservandolo al sicuro su storage aziendale o cloud protetto.",
  },
  {
    title: "Ripristino Semplice quando Serve",
    desc: "In caso di migrazione o necessità di recupero, l'amministratore carica il file Excel scegliendo 'Unisci' (aggiunge i record mancanti senza duplicati) o 'Sostituisci' (ripristino totale).",
  },
];

const benefits = [
  "Risparmio di ore di lavoro ogni settimana: stop a richieste continue di credenziali e procedure di recupero password.",
  "Isolamento rigoroso dei dati: i dipendenti vedono solo i fornitori pertinenti alla loro mansione (es. Amministrazione, Logistica, Marketing).",
  "Zero esportazioni non autorizzate: nessun collaboratore può scaricare il database delle password aziendali.",
  "Crittografia avanzata AES-256 su cloud europeo protetto con autenticazione tramite OTP e PUK.",
  "Massima flessibilità commerciale: piani da 15, 50 o 200 postazioni e crediti export PDF per coprire ogni dimensione d'impresa.",
  "Accessibilità multi-dispositivo: fruibile da qualsiasi PC Windows/Mac, tablet o smartphone senza server interni da mantenere.",
];

const security = [
  {
    icon: ShieldCheck,
    title: "Crittografia AES-256 & PUK Personale",
    desc: "Ogni password salvata nel registro è cifrata con algoritmi crittografici moderni. L'accesso richiede combinazione di Licenza e codice PUK personale.",
  },
  {
    icon: Users,
    title: "Segregazione delle Mansioni per Categoria",
    desc: "L'amministratore governa la visibilità: l'operatore di magazzino accede solo ai corrieri, il contabile solo a banche e SDI, senza commistione di dati sensibili.",
  },
  {
    icon: LockKeyhole,
    title: "Protezione Totale contro la Fuga di Password",
    desc: "I collaboratori non hanno accesso ai pulsanti di export PDF o Excel. Solo l'amministratore accreditato può estrarre il backup per la custodia aziendale.",
  },
  {
    icon: Activity,
    title: "Revoca Immediata in Tempo Reale",
    desc: "In caso di cessazione del rapporto con un dipendente, la postazione viene revocata all'istante: il PUK cessa immediatamente di funzionare su qualunque dispositivo.",
  },
];

const faq = [
  {
    q: "Come viene nominato l'Amministratore aziendale?",
    a: "Avviene in modo del tutto automatico: il primo collaboratore che effettua l'attivazione della licenza utilizzando il primo PUK viene registrato dal sistema come Amministratore e ottiene l'accesso al pannello di Gestione Postazioni e Dati Ditta.",
  },
  {
    q: "Come faccio a invitare i dipendenti e collaboratori?",
    a: "Dalla finestra 'Gestione Postazioni' (visibile solo all'Amministratore), selezioni un PUK libero, digiti l'email del collaboratore, imposti i permessi (Completo o Sola Lettura) e spunti le categorie di siti autorizzate. Cliccando su 'Invia Credenziali', il software spedisce in automatico un'email con Licenza e PUK personale.",
  },
  {
    q: "I dipendenti possono scaricare le password o esportare il registro?",
    a: "Assolutamente no. I pulsanti di esportazione (PDF e CSV/Excel) e le impostazioni sono visibili ed utilizzabili esclusivamente dall'Amministratore. I collaboratori possono solo consultare o inserire i siti a cui sono stati autorizzati.",
  },
  {
    q: "Chi si occupa del backup dei dati aziendali?",
    a: "Il backup periodico è compito dell'Amministratore. Può scaricare in qualsiasi momento l'archivio completo in formato Excel o in PDF con il logo e l'intestazione aziendale, conservandolo in un luogo sicuro. In caso di necessità, il file Excel può essere reimportato istantaneamente con le modalità 'Unisci' o 'Sostituisci'.",
  },
  {
    q: "Cosa succede se un collaboratore lascia l'azienda?",
    a: "L'Amministratore entra in Gestione Postazioni e clicca sul pulsante di cancellazione della riga corrispondente: il PUK del collaboratore viene disattivato all'istante, bloccandogli ogni accesso futuro. Il PUK torna subito libero e può essere assegnato a un nuovo collaboratore.",
  },
  {
    q: "Come si installa l'app sul Desktop del computer?",
    a: "040RegistroWEB è dotato di lanciatore PWA (Progressive Web App): basta aprire il link dal browser e cliccare sull'icona o sul pulsante 'Installa sul Desktop'. Verrà creata l'icona ufficiale direttamente sul desktop di Windows o Mac per avviarlo con un doppio clic a tutto schermo.",
  },
];

function RegistroCredenzialiPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main" className="skip-link">
        Salta al contenuto principale
      </a>
      <SiteHeader />
      <main id="main" className="pt-36 md:pt-44">
        <div className="container mx-auto max-w-6xl px-4">
          <Button variant="ghost" size="sm" asChild className="mb-5">
            <Link to="/applicazioni">
              <ArrowLeft className="h-4 w-4 mr-2" aria-hidden />
              Torna alle applicazioni
            </Link>
          </Button>
        </div>

        {/* HERO SECTION */}
        <section className="pb-20 [background:var(--gradient-section-hero)]">
          <div className="container mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-primary">Software SaaS Aziendale • 040RegistroWEB</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Tutte le credenziali dei fornitori, in un unico registro blindato e veloce.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                Basta perdere ore alla ricerca di password dimenticate o codici d'accesso sparsi su foglietti e chat. 
                L'amministratore governa gli accessi per categoria, i collaboratori copiano credenziali in un tocco, e il backup aziendale resta protetto e riservato.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="hero" className="h-12" asChild>
                  <a href="#funzionalita">
                    Scopri come funziona
                    <ArrowDown className="ml-2 h-4 w-4" aria-hidden />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-12" asChild>
                  <a href="#prezzo">Vedi Piani & Prezzi</a>
                </Button>
              </div>
            </div>
            <RegisterMockup />
          </div>
          <div className="container mx-auto max-w-6xl px-4">
            <PriceBlock anchor />
          </div>
        </section>

        {/* VALORE & VANTAGGI RAPIDI */}
        <section className="py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <SectionHeading
              kicker="Risparmio di Tempo & Sicurezza"
              title="Perché ogni azienda moderna ha bisogno di 040RegistroWEB"
            />
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-foreground/80">
              Gestire decine di portali (fatturazione elettronica, banche, corrieri, fornitori di materie prime, consulenti) 
              senza un metodo centralizzato espone l'azienda a continui blocchi operativi e rischi di sicurezza informatica.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-secondary px-4 py-2 text-sm font-semibold"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden />
                  {badge}
                </span>
              ))}
            </div>
            <PriceBlock />
          </div>
        </section>

        {/* FUNZIONALITA CHIAVE */}
        <section
          id="funzionalita"
          className="scroll-mt-36 border-y-2 border-primary/15 py-20 [background:var(--gradient-section-corsi)]"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <SectionHeading
              kicker="Funzionalità Esclusive"
              title="Pensato per l'imprenditore, semplicissimo per i dipendenti"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-2 border-primary/20">
                    <CardHeader>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg [background:var(--gradient-hero)] text-primary-foreground">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-foreground/80">{item.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <PriceBlock />
          </div>
        </section>

        {/* FLUSSO OPERATIVO IN 5 PASSI */}
        <section className="py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <SectionHeading
              kicker="Flusso Operativo"
              title="Dall'attivazione al backup quotidiano in 5 passaggi"
            />
            <ol className="grid gap-5 md:grid-cols-5">
              {steps.map((step, i) => (
                <li key={step.title} className="border-t-4 border-primary pt-5">
                  <span className="text-4xl font-bold text-primary/30">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">{step.desc}</p>
                </li>
              ))}
            </ol>
            <PriceBlock />
          </div>
        </section>

        {/* BENEFICI AZIENDALI */}
        <section className="border-y-2 border-primary/15 py-20 [background:var(--gradient-section-app)]">
          <div className="container mx-auto max-w-6xl px-4">
            <SectionHeading
              kicker="Benefici Concreti"
              title="Meno perdite di tempo, zero dispersione di credenziali"
            />
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-3 rounded-lg border-2 border-primary/20 bg-card p-5 shadow-[var(--shadow-card)]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <p className="leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
            <PriceBlock />
          </div>
        </section>

        {/* GOVERNANCE E SICUREZZA */}
        <section className="py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <SectionHeading
              kicker="Sicurezza & Governance"
              title="Il controllo totale rimane sempre nelle mani dell'Amministratore"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {security.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 border-l-4 border-primary bg-secondary p-6">
                    <Icon className="h-7 w-7 shrink-0 text-primary" aria-hidden />
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/75">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <PriceBlock />
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="border-y-2 border-primary/15 py-20 [background:var(--gradient-section-corsi)]">
          <div className="container mx-auto max-w-3xl px-4">
            <SectionHeading kicker="Domande Frequenti" title="Tutto quello che c'è da sapere su 040RegistroWEB" />
            <Accordion type="single" collapsible>
              {faq.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">{item.q}</AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-foreground/80">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <PriceBlock />
          </div>
        </section>

        {/* SEZIONE FINALE CTA */}
        <section className="py-20 [background:var(--gradient-section-about)] text-primary-foreground">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-foreground/75">
              CorporateBoostService • Sicurezza Dati
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Metti in sicurezza oggi stesso il patrimonio digitale della tua azienda
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/85">
              Attiva la licenza 040RegistroWEB, diventa Amministratore in un minuto e condividi gli accessi ai fornitori con i tuoi collaboratori nella massima sicurezza e tranquillità.
            </p>
            <PriceBlock dark />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

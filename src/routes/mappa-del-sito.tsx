import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/mappa-del-sito")({
  head: () => ({
    meta: [
      { title: "Mappa del sito — CorporateBoostService.eu" },
      {
        name: "description",
        content:
          "Mappa del sito di CorporateBoostService.eu: applicazioni digitali, corsi online, prezzi e informazioni legali.",
      },
      { property: "og:title", content: "Mappa del sito — CorporateBoostService.eu" },
      {
        property: "og:description",
        content: "Tutte le pagine di CorporateBoostService.eu in un unico elenco.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:url", content: "https://corporateboostservice.eu/mappa-del-sito" },
    ],
    links: [{ rel: "canonical", href: "https://corporateboostservice.eu/mappa-del-sito" }],
  }),
  component: SitemapPage,
});

const groups: { heading: string; links: { to: string; label: string }[] }[] = [
  {
    heading: "Sito",
    links: [
      { to: "/", label: "Home" },
      { to: "/applicazioni", label: "Applicazioni per imprese" },
      { to: "/corsi", label: "Corsi online" },
      { to: "/prezzi", label: "Prezzi" },
      { to: "/blog", label: "Blog — Approfondimenti" },
    ],
  },
  {
    heading: "Applicazioni",
    links: [
      { to: "/pedflow", label: "PedFlow — Direttiva PED" },
      { to: "/minifat", label: "MiniFAT — Factory Acceptance Test" },
      { to: "/smart-maintenance", label: "Smart Maintenance — Report tecnici" },
      { to: "/agenda-share", label: "Agenda Share — Da calendario a WhatsApp" },
      { to: "/registro-credenziali-fornitori", label: "Registro Credenziali Fornitori" },
      { to: "/riciclo-ppwr", label: "Riciclabilità PPWR — Reg. UE 2025/40" },
    ],
  },
  {
    heading: "Corsi",
    links: [
      { to: "/corso-privacy-gdpr", label: "Privacy & Protezione Dati" },
      { to: "/corso-gdpr-incaricati", label: "GDPR — Guida pratica per l'addetto" },
    ],
  },
  {
    heading: "Legale",
    links: [
      { to: "/legal", label: "Informazioni legali" },
      { to: "/termini-e-condizioni", label: "Termini e Condizioni" },
      { to: "/termini-di-servizio", label: "Termini di Servizio" },
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/politica-di-rimborso", label: "Politica di Rimborso" },
      { to: "/pagamenti-merchant-of-record", label: "Pagamenti — Merchant of Record" },
    ],
  },
];

function SitemapPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        {t("skip")}
      </a>
      <SiteHeader />
      <main id="main">
        <section className="pt-36 pb-16 [background:var(--gradient-section-hero)] border-b-2 border-primary/15">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Mappa del sito</h1>
            <p className="mt-4 text-lg text-foreground/85">
              Tutte le pagine pubbliche di CorporateBoostService.eu.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl grid sm:grid-cols-2 gap-8">
            {groups.map((g) => (
              <div key={g.heading} className="p-6 rounded-2xl border-2 border-primary/20 bg-white shadow-[var(--shadow-card)]">
                <h2 className="text-xl font-bold text-foreground mb-4">{g.heading}</h2>
                <ul className="space-y-2">
                  {g.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-primary font-semibold hover:underline">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

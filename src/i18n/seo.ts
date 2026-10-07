import { currentLang } from "@/i18n";
import type { Lang } from "@/lib/locale";

// Title/description (e Open Graph) per le pagine i cui meta non vivono già nei file di traduzione.
// Usati nelle head() delle rotte: la lingua è quella della richiesta (prefisso URL).

type Seo = { title: string; description: string; ogTitle?: string; ogDescription?: string };

const seo = {
  root: {
    it: {
      title: "Applicazioni Digitali e Corsi Certificati per Imprese",
      description: "Applicazioni digitali e corsi certificati per imprese e professionisti.",
    },
    en: {
      title: "Digital Applications and Certified Courses for Businesses",
      description: "Digital applications and certified courses for businesses and professionals.",
    },
    de: {
      title: "Digitale Anwendungen und zertifizierte Kurse für Unternehmen",
      description: "Digitale Anwendungen und zertifizierte Kurse für Unternehmen und Fachleute.",
    },
    es: {
      title: "Aplicaciones digitales y cursos certificados para empresas",
      description: "Aplicaciones digitales y cursos certificados para empresas y profesionales.",
    },
  },
  home: {
    it: {
      title: "Applicazioni Digitali e Corsi Certificati GDPR | CorporateBoostService",
      description:
        "Software per direttiva PED, FAT e manutenzione, più corsi online certificati su GDPR e privacy per imprese e professionisti.",
    },
    en: {
      title: "Digital Applications and Certified GDPR Courses | CorporateBoostService",
      description:
        "Software for the PED Directive, FAT and maintenance, plus certified online courses on GDPR and privacy for businesses and professionals.",
    },
    de: {
      title: "Digitale Anwendungen und zertifizierte DSGVO-Kurse | CorporateBoostService",
      description:
        "Software für die Druckgeräterichtlinie (PED), FAT und Instandhaltung sowie zertifizierte Online-Kurse zu DSGVO und Datenschutz für Unternehmen und Fachleute.",
    },
    es: {
      title: "Aplicaciones digitales y cursos certificados de RGPD | CorporateBoostService",
      description:
        "Software para la Directiva PED, FAT y mantenimiento, además de cursos online certificados sobre RGPD y privacidad para empresas y profesionales.",
    },
  },
  applicazioni: {
    it: {
      title: "Applicazioni per Imprese — CorporateBoostService.eu",
      description: "Applicazioni professionali per gestire adempimenti, formazione e processi aziendali.",
    },
    en: {
      title: "Applications for Businesses — CorporateBoostService.eu",
      description: "Professional applications to manage compliance, training and business processes.",
    },
    de: {
      title: "Anwendungen für Unternehmen — CorporateBoostService.eu",
      description: "Professionelle Anwendungen zur Verwaltung von Compliance, Schulung und Geschäftsprozessen.",
    },
    es: {
      title: "Aplicaciones para empresas — CorporateBoostService.eu",
      description:
        "Aplicaciones profesionales para gestionar obligaciones normativas, formación y procesos empresariales.",
    },
  },
  corsi: {
    it: {
      title: "Corsi Online — CorporateBoostService.eu",
      description: "Corsi online su privacy, GDPR, sicurezza sul lavoro e aggiornamenti normativi.",
    },
    en: {
      title: "Online Courses — CorporateBoostService.eu",
      description: "Online courses on privacy, GDPR, workplace safety and regulatory updates.",
    },
    de: {
      title: "Online-Kurse — CorporateBoostService.eu",
      description: "Online-Kurse zu Datenschutz, DSGVO, Arbeitssicherheit und regulatorischen Aktualisierungen.",
    },
    es: {
      title: "Cursos online — CorporateBoostService.eu",
      description: "Cursos online sobre privacidad, RGPD, seguridad en el trabajo y novedades normativas.",
    },
  },
  blog: {
    it: {
      title: "Blog — Approfondimenti per imprese | CorporateBoostService.eu",
      description:
        "Articoli e guide pratiche su digitalizzazione, sicurezza degli accessi, manutenzione e adempimenti per imprese e professionisti.",
      ogTitle: "Blog — Approfondimenti per imprese",
      ogDescription:
        "Guide pratiche su digitalizzazione, sicurezza degli accessi e adempimenti per le imprese.",
    },
    en: {
      title: "Blog — Insights for Businesses | CorporateBoostService.eu",
      description:
        "Articles and practical guides on digitalisation, access security, maintenance and compliance for businesses and professionals.",
      ogTitle: "Blog — Insights for Businesses",
      ogDescription: "Practical guides on digitalisation, access security and business compliance.",
    },
    de: {
      title: "Blog — Einblicke für Unternehmen | CorporateBoostService.eu",
      description:
        "Artikel und praktische Leitfäden zu Digitalisierung, Zugriffssicherheit, Instandhaltung und Compliance für Unternehmen und Fachleute.",
      ogTitle: "Blog — Einblicke für Unternehmen",
      ogDescription:
        "Praktische Leitfäden zu Digitalisierung, Zugriffssicherheit und Compliance für Unternehmen.",
    },
    es: {
      title: "Blog — Información útil para empresas | CorporateBoostService.eu",
      description:
        "Artículos y guías prácticas sobre digitalización, seguridad de accesos, mantenimiento y cumplimiento normativo para empresas y profesionales.",
      ogTitle: "Blog — Información útil para empresas",
      ogDescription:
        "Guías prácticas sobre digitalización, seguridad de accesos y cumplimiento normativo para empresas.",
    },
  },
  sitemapPage: {
    it: {
      title: "Mappa del sito — CorporateBoostService.eu",
      description:
        "Mappa del sito di CorporateBoostService.eu: applicazioni digitali, corsi online, prezzi e informazioni legali.",
      ogDescription: "Tutte le pagine di CorporateBoostService.eu in un unico elenco.",
    },
    en: {
      title: "Site map — CorporateBoostService.eu",
      description:
        "Site map of CorporateBoostService.eu: digital applications, online courses, pricing and legal information.",
      ogDescription: "All pages of CorporateBoostService.eu in a single list.",
    },
    de: {
      title: "Sitemap — CorporateBoostService.eu",
      description:
        "Sitemap von CorporateBoostService.eu: digitale Anwendungen, Online-Kurse, Preise und rechtliche Informationen.",
      ogDescription: "Alle Seiten von CorporateBoostService.eu in einer Übersicht.",
    },
    es: {
      title: "Mapa del sitio — CorporateBoostService.eu",
      description:
        "Mapa del sitio de CorporateBoostService.eu: aplicaciones digitales, cursos online, precios e información legal.",
      ogDescription: "Todas las páginas de CorporateBoostService.eu en un único listado.",
    },
  },
} satisfies Record<string, Record<Lang, Seo>>;

export type SeoKey = keyof typeof seo;

/** Testi SEO della pagina nella lingua della richiesta corrente. */
export function seoText(key: SeoKey): Seo {
  return seo[key][currentLang()];
}

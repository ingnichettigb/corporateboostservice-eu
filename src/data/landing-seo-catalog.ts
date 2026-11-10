/**
 * File: landing-seo-catalog.ts · Percorso: src/data/landing-seo-catalog.ts · Revisione: 3 · Data: 02/11/2026 · Ora: 17:45
 * Rev. 3: titoli/descrizioni SEO orientati al problema, nome prodotto tra parentesi (SEO_TEXTS, 4 lingue).
 * Rev. 2: esteso a tutte le landing e ai corsi (schema Course, testi fissi per pagine solo italiane).
 * Scopo: registro SEO delle landing prioritarie. Contiene solo riferimenti (chiavi di traduzione,
 * immagine social, tipo di schema, lastmod): i testi restano nei file i18n.
 * lastmod (AAAA-MM-GG) si aggiorna a mano solo quando cambia davvero il contenuto della pagina.
 */
import i18n from "@/i18n";
import { currentLang } from "@/i18n";
import { LD_LANGUAGE, SITE_ORIGIN, absoluteUrl } from "@/lib/locale";

export interface LandingSeoEntry {
  path: string;
  titleKey?: string;
  descriptionKey?: string;
  /** Testi fissi (solo per pagine senza traduzioni, es. solo italiano). */
  title?: string;
  description?: string;
  /** Immagine di ripiego specifica della pagina (URL assoluto) se manca il file in public/og/. */
  fallbackImage?: string;
  /** Percorso pubblico dell'immagine social 1200x630 (cartella public/og/). */
  image: string;
  schemaType: "SoftwareApplication" | "Course";
  lastmod: string;
}

export const landingSeoCatalog: LandingSeoEntry[] = [
  { path: "/taratura-serbatoi", titleKey: "taratura:metaTitle", descriptionKey: "taratura:metaDescription", image: "/og/taratura-serbatoi.jpg", schemaType: "SoftwareApplication", lastmod: "2026-10-26" },
  { path: "/pedflow", titleKey: "pedflow:metaTitle", descriptionKey: "pedflow:metaDescription", image: "/og/pedflow.jpg", schemaType: "SoftwareApplication", lastmod: "2026-10-27" },
  { path: "/riciclo-ppwr", titleKey: "ricicloPpwr:metaTitle", descriptionKey: "ricicloPpwr:metaDescription", image: "/og/riciclo-ppwr.jpg", schemaType: "SoftwareApplication", lastmod: "2026-10-27" },
  { path: "/minifat", titleKey: "minifat.metaTitle", descriptionKey: "minifat.metaDescription", image: "/og/minifat.jpg", schemaType: "SoftwareApplication", lastmod: "2026-10-27" },
  { path: "/riuso-ppwr", titleKey: "riusoPpwr:metaTitle", descriptionKey: "riusoPpwr:metaDescription", image: "/og/riuso-ppwr.jpg", schemaType: "SoftwareApplication", lastmod: "2026-10-27" },
  { path: "/smart-maintenance", titleKey: "smartMaintenance.metaTitle", descriptionKey: "smartMaintenance.metaDescription", image: "/og/smart-maintenance.jpg", schemaType: "SoftwareApplication", lastmod: "2026-10-27" },
  { path: "/agenda-share", titleKey: "agendaShare:metaTitle", descriptionKey: "agendaShare:metaDescription", image: "/og/agenda-share.jpg", schemaType: "SoftwareApplication", lastmod: "2026-10-27" },
  {
    path: "/registro-credenziali-fornitori",
    title: "Registro Siti Web Aziendali e Credenziali | 040RegistroWEB",
    description: "Software SaaS per organizzare e proteggere tutti i siti web aziendali e le relative credenziali. Risparmia ore di lavoro: primo accesso Amministratore, permessi per categorie, backup Excel/PDF riservato e lanciatore Desktop PWA.",
    image: "/og/registro-credenziali-fornitori.jpg",
    fallbackImage: "https://corporateboostservice.eu/040registroweb/040RegistroWEB-image01.jpg",
    schemaType: "SoftwareApplication",
    lastmod: "2026-10-26",
  },
  { path: "/corso-privacy-gdpr", titleKey: "privacyGdpr.metaTitle", descriptionKey: "privacyGdpr.metaDesc", image: "/og/corso-privacy-gdpr.jpg", schemaType: "Course", lastmod: "2026-10-27" },
  { path: "/corso-gdpr-incaricati", titleKey: "corsoIncaricati.metaTitle", descriptionKey: "corsoIncaricati.metaDesc", image: "/og/corso-gdpr-incaricati.jpg", schemaType: "Course", lastmod: "2026-10-27" },
];

/** Immagine social generica del sito (ripiego finché manca il file dedicato). */
const FALLBACK_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/0yS65EUwnpUx9OQts7qM6xTJ5vi2/social-images/social-1780992527903-Copilot_20260609_100822.webp";

// File presenti in public/og/ al momento della build: se il file dedicato non c'è si usa il ripiego.
const ogFiles = new Set(
  Object.keys(import.meta.glob("/public/og/*.jpg", { query: "?url", import: "default" })).map((p) =>
    p.replace(/^\/public/, ""),
  ),
);

export function getLandingSeo(path: string): LandingSeoEntry {
  const entry = landingSeoCatalog.find((e) => e.path === path);
  if (!entry) throw new Error(`Landing non censita nel registro SEO: ${path}`);
  return entry;
}

type SeoText = { t: string; d: string };
type Lang4 = "it" | "en" | "de" | "es" | "fr";
/** Titoli e descrizioni orientati al problema reale, nome prodotto tra parentesi in fondo. */
const SEO_TEXTS: Record<string, Partial<Record<Lang4, SeoText>>> = {
  "/taratura-serbatoi": {
    it: { t: "Calcolo tabelle di taratura serbatoi al millimetro (Taratura Serbatoi)", d: "Tabelle di taratura per 22 geometrie di serbatoio con passo di calcolo 1 mm: volumi, superfici, pesi e dichiarazione di taratura in PDF. Dati salvati in locale." },
    en: { t: "Tank calibration tables calculated per millimetre (Tank Calibration)", d: "Calibration tables for 22 tank geometries with a 1 mm calculation step: volumes, surfaces, weights and a PDF calibration declaration. Data stays on your computer." },
    de: { t: "Peiltabellen für Tanks millimetergenau berechnen (Tankkalibrierung)", d: "Peiltabellen für 22 Tankgeometrien mit 1-mm-Rechenschritt: Volumen, Flächen, Gewichte und Kalibriererklärung als PDF. Die Daten bleiben lokal gespeichert." },
    es: { t: "Tablas de calibración de depósitos al milímetro (Calibración Depósitos)", d: "Tablas de calibración para 22 geometrías de depósito con paso de cálculo de 1 mm: volúmenes, superficies, pesos y declaración de calibración en PDF. Datos en local." },
    fr: { t: "Barèmes d'étalonnage de réservoirs calculés au millimètre (Étalonnage Réservoirs)", d: "Barèmes d'étalonnage pour 22 géométries de réservoirs avec un pas de calcul de 1 mm : volumes, surfaces, poids et une déclaration d'étalonnage en PDF. Les données restent sur votre ordinateur." },
  },
  "/pedflow": {
    it: { t: "Fluido di Gruppo 1 o 2 secondo la Direttiva PED? (PedFlow)", d: "Classifica il fluido nel Gruppo 1 o 2 della Direttiva PED 2014/68/UE partendo dalle frasi H del regolamento CLP e genera il PDF per il fascicolo tecnico." },
    en: { t: "Is your fluid PED Group 1 or 2? Classify it online (PedFlow)", d: "Classify the fluid as Group 1 or 2 under PED Directive 2014/68/EU from its CLP hazard statements and generate the PDF for the technical file." },
    de: { t: "Fluid der PED-Gruppe 1 oder 2? Online einstufen (PedFlow)", d: "Stufen Sie das Fluid anhand der CLP-H-Sätze in Gruppe 1 oder 2 der Druckgeräterichtlinie 2014/68/EU ein und erstellen Sie das PDF für die technischen Unterlagen." },
    es: { t: "¿Fluido del Grupo 1 o 2 según la Directiva PED? (PedFlow)", d: "Clasifica el fluido en el Grupo 1 o 2 de la Directiva PED 2014/68/UE a partir de las frases H del reglamento CLP y genera el PDF para el expediente técnico." },
    fr: { t: "Votre fluide est-il du groupe 1 ou 2 selon la PED ? Classifiez-le en ligne (PedFlow)", d: "Classifiez le fluide dans le groupe 1 ou 2 selon la directive PED 2014/68/UE à partir de ses mentions de danger CLP et générez le PDF pour le dossier technique." },
  },
  "/riciclo-ppwr": {
    it: { t: "Calcolo riciclabilità imballaggi Reg. UE 2025/40 (Riciclabilità PPWR)", d: "Calcola la percentuale di riciclabilità degli imballaggi secondo il PPWR, assegna il grado A, B o C e genera il PDF per il fascicolo tecnico." },
    en: { t: "Packaging recyclability under EU Reg. 2025/40 (PPWR Recyclability)", d: "Calculate packaging recyclability under the PPWR, assign grade A, B or C and generate the PDF for the technical file." },
    de: { t: "Recyclingfähigkeit von Verpackungen nach VO 2025/40 (PPWR Recycling)", d: "Berechnen Sie die Recyclingfähigkeit von Verpackungen nach PPWR, vergeben Sie Stufe A, B oder C und erstellen Sie das PDF für die technischen Unterlagen." },
    es: { t: "Reciclabilidad de envases según Reg. UE 2025/40 (Reciclabilidad PPWR)", d: "Calcula la reciclabilidad de los envases según el PPWR, asigna el grado A, B o C y genera el PDF para el expediente técnico." },
    fr: { t: "Recyclabilité des emballages selon le règlement UE 2025/40 (Recyclabilité PPWR)", d: "Calculez la recyclabilité des emballages selon le PPWR, attribuez la classe A, B ou C et générez le PDF pour le dossier technique." },
  },
  "/minifat": {
    it: { t: "Collaudo FAT di macchine e impianti con checklist digitale (miniFAT)", d: "Prepara e svolgi il Factory Acceptance Test con checklist strutturate, firme e verbale PDF pronto da consegnare al cliente." },
    en: { t: "FAT testing of machines and plants with digital checklists (miniFAT)", d: "Prepare and run the Factory Acceptance Test with structured checklists, signatures and a PDF report ready to hand over to the customer." },
    de: { t: "FAT-Abnahme von Maschinen mit digitaler Checkliste (miniFAT)", d: "Factory Acceptance Test vorbereiten und durchführen: strukturierte Checklisten, Unterschriften und PDF-Protokoll zur Übergabe an den Kunden." },
    es: { t: "Pruebas FAT de máquinas con checklist digital (miniFAT)", d: "Prepara y realiza el Factory Acceptance Test con checklists estructuradas, firmas y acta PDF lista para entregar al cliente." },
    fr: { t: "Essais FAT de machines et d'installations avec des checklists numériques (miniFAT)", d: "Préparez et réalisez les essais FAT avec des checklists structurées, des signatures et un rapport PDF prêt à être remis au client." },
  },
  "/riuso-ppwr": {
    it: { t: "Imballaggio riutilizzabile secondo il PPWR? Dichiaralo (Riutilizzabilità PPWR)", d: "Verifica se un imballaggio è riutilizzabile secondo il Regolamento UE 2025/40 e genera la dichiarazione PDF per il fascicolo tecnico." },
    en: { t: "Is your packaging reusable under PPWR? Declare it (PPWR Reusability)", d: "Check whether packaging is reusable under EU Regulation 2025/40 and generate the PDF declaration for the technical file." },
    de: { t: "Mehrwegverpackung nach PPWR? Erklärung erstellen (PPWR Mehrweg)", d: "Prüfen Sie, ob eine Verpackung nach Verordnung (EU) 2025/40 wiederverwendbar ist, und erstellen Sie die PDF-Erklärung für die technischen Unterlagen." },
    es: { t: "¿Envase reutilizable según el PPWR? Declaralo (Reutilizabilidad PPWR)", d: "Comprueba si un envase es reutilizable según el Reglamento UE 2025/40 y genera la declaración PDF para el expediente técnico." },
    fr: { t: "Votre emballage est-il réemployable selon le PPWR ? Déclarez-le (Réemploi PPWR)", d: "Vérifiez si l'emballage est réemployable selon le règlement UE 2025/40 et générez la déclaration PDF pour le dossier technique." },
  },
  "/smart-maintenance": {
    it: { t: "Report di manutenzione industriale dallo smartphone (SmartMaintenance)", d: "Compila i report di manutenzione sul campo con foto, firme e PDF automatico: interventi ordinati e storico sempre consultabile." },
    en: { t: "Industrial maintenance reports from your smartphone (SmartMaintenance)", d: "Fill in maintenance reports on site with photos, signatures and automatic PDF: tidy interventions and a history always at hand." },
    de: { t: "Wartungsberichte für die Industrie per Smartphone (SmartMaintenance)", d: "Wartungsberichte vor Ort mit Fotos, Unterschriften und automatischem PDF erstellen: geordnete Einsätze und jederzeit abrufbare Historie." },
    es: { t: "Informes de mantenimiento industrial desde el móvil (SmartMaintenance)", d: "Rellena los informes de mantenimiento in situ con fotos, firmas y PDF automático: intervenciones ordenadas e historial siempre disponible." },
    fr: { t: "Rapports de maintenance industrielle depuis votre smartphone (SmartMaintenance)", d: "Remplissez les rapports de maintenance sur site avec photos, signatures et PDF automatique : interventions structurées et historique toujours à portée de main." },
  },
  "/agenda-share": {
    it: { t: "Agenda condivisa tra colleghi senza account complicati (Agenda Share)", d: "Condividi appuntamenti e impegni del team da PC e smartphone: un'unica agenda aggiornata per tutti, semplice da usare." },
    en: { t: "Shared team calendar without complicated accounts (Agenda Share)", d: "Share team appointments and commitments from PC and smartphone: one up-to-date calendar for everyone, simple to use." },
    de: { t: "Gemeinsamer Teamkalender ohne komplizierte Konten (Agenda Share)", d: "Termine und Aufgaben des Teams von PC und Smartphone teilen: ein aktueller Kalender für alle, einfach zu bedienen." },
    es: { t: "Agenda compartida del equipo sin cuentas complicadas (Agenda Share)", d: "Comparte citas y compromisos del equipo desde PC y móvil: una única agenda actualizada para todos, fácil de usar." },
    fr: { t: "Calendrier d'équipe partagé sans gestion complexe de comptes (Agenda Share)", d: "Partagez les rendez-vous et les engagements de l'équipe depuis PC et smartphone : un calendrier à jour pour tous, simple d'utilisation." },
  },
  "/registro-credenziali-fornitori": {
    it: { t: "Password e siti web aziendali in un unico registro (040RegistroWEB)", d: "Organizza e proteggi siti web aziendali e credenziali: accesso Amministratore, permessi per categorie, backup Excel/PDF riservato e lanciatore Desktop PWA." },
  },
  "/corso-privacy-gdpr": {
    it: { t: "Corso privacy GDPR per aziende con attestato (Corso Privacy GDPR)", d: "Formazione GDPR online per aziende e PMI: principi, diritti, ruoli e sicurezza dei dati, con attestato rilasciato automaticamente al termine." },
    en: { t: "GDPR privacy course for companies with certificate (GDPR Privacy Course)", d: "Online GDPR training for companies and SMEs: principles, rights, roles and data security, with a certificate issued automatically at the end." },
    de: { t: "DSGVO-Datenschutzkurs für Unternehmen mit Teilnahmebescheinigung (DSGVO-Kurs)", d: "Online-DSGVO-Schulung für Unternehmen und KMU: Grundsätze, Rechte, Rollen und Datensicherheit, mit automatisch ausgestellter Teilnahmebescheinigung." },
    es: { t: "Curso de privacidad RGPD para empresas con certificado (Curso RGPD)", d: "Formación RGPD online para empresas y pymes: principios, derechos, roles y seguridad de los datos, con certificado emitido automáticamente al final." },
    fr: { t: "Formation RGPD pour les entreprises avec certificat (Formation RGPD)", d: "Formation RGPD en ligne pour entreprises et PME : principes, droits, rôles et sécurité des données, avec certificat délivré automatiquement à la fin." },
  },
  "/corso-gdpr-incaricati": {
    it: { t: "Formazione GDPR obbligatoria per gli incaricati (Corso Incaricati)", d: "Corso online per chi tratta dati personali in azienda: sicurezza, procedure e responsabilità, con attestato rilasciato automaticamente." },
    en: { t: "Mandatory GDPR training for data handlers (Data Handlers Course)", d: "Online course for staff who process personal data: security, procedures and responsibilities, with a certificate issued automatically." },
    de: { t: "Pflicht-DSGVO-Schulung für Mitarbeitende mit Datenzugriff (Kurs)", d: "Online-Kurs für alle, die personenbezogene Daten verarbeiten: Sicherheit, Abläufe und Verantwortung, mit automatisch ausgestellter Bescheinigung." },
    es: { t: "Formación RGPD obligatoria para el personal autorizado (Curso)", d: "Curso online para quien trata datos personales en la empresa: seguridad, procedimientos y responsabilidades, con certificado emitido automáticamente." },
    fr: { t: "Formation RGPD obligatoire pour les personnes autorisées au traitement (Formation)", d: "Formation en ligne pour le personnel traitant des données personnelles : sécurité, procédures et responsabilités, avec certificat délivré automatiquement." },
  },
};

/** head() completo (meta + JSON-LD) per una landing censita, nella lingua corrente. */
export function landingHead(path: string) {
  const e = getLandingSeo(path);
  const lang = currentLang();
  const seo = SEO_TEXTS[path]?.[lang as Lang4];
  const title = seo?.t ?? e.title ?? i18n.t(e.titleKey ?? "");
  const description = seo?.d ?? e.description ?? i18n.t(e.descriptionKey ?? "");
  const isDedicated = ogFiles.has(e.image);
  const image = isDedicated ? `${SITE_ORIGIN}${e.image}` : (e.fallbackImage ?? FALLBACK_IMAGE);
  const isCourse = e.schemaType === "Course";
  const provider = { "@type": "Organization", name: "CorporateBoostService.eu", url: SITE_ORIGIN };
  const url = absoluteUrl(e.path, lang);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: i18n.t("nav.home"), item: absoluteUrl("/", lang) },
      { "@type": "ListItem", position: 2, name: i18n.t(isCourse ? "nav.corsi" : "nav.applicazioni"), item: absoluteUrl(isCourse ? "/corsi" : "/applicazioni", lang) },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };
  const app = isCourse
    ? { "@context": "https://schema.org", "@type": "Course", name: title, description, url, inLanguage: LD_LANGUAGE[lang], image, provider }
    : {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: title,
        description,
        url,
        inLanguage: LD_LANGUAGE[lang],
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        image,
        provider,
      };

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: image },
      ...(isDedicated
        ? [
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
          ]
        : []),
      { property: "og:image:alt", content: title },
      { name: "twitter:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
      { type: "application/ld+json", children: JSON.stringify(app) },
    ],
  };
}

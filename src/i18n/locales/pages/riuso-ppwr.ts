/**
 * File: riuso-ppwr.ts
 * Revisione: 1
 * Data: 24/10/2026
 * Ora: 21:07
 */

type T = { title: string; desc: string };
type Locale = {
  metaTitle: string;
  metaDescription: string;
  back: string;
  eyebrow: string;
  h1: string;
  heroP: string;
  keyPoints: string;
  whatLabel: string;
  whatH2: string;
  whatP: string;
  tags: string[];
  reqLabel: string;
  reqH2: string;
  reqIntro: string;
  reqBlocks: { title: string; sub: string; items: string[] }[];
  featLabel: string;
  featH2: string;
  features: T[];
  stepsLabel: string;
  stepsH2: string;
  steps: T[];
  outcomeLabel: string;
  outcomeH2: string;
  outcomeP: string;
  outcomes: { badge: string; title: string; desc: string }[];
  pdfLabel: string;
  pdfH2: string;
  pdfPoints: string[];
  pdfNote: string;
  pdf: {
    company: string;
    program: string;
    title: string;
    rows: [string, string][];
    colReq: string;
    colOutcome: string;
    reqRows: [string, string][];
    result: string;
    place: string;
    date: string;
    sign: string;
    footer: string;
    page: string;
  };
  traceLabel: string;
  traceH2: string;
  traceP: string;
  tracePoints: string[];
  secLabel: string;
  secH2: string;
  security: T[];
  forLabel: string;
  forH2: string;
  forList: T[];
  plansLabel: string;
  plansH2: string;
  plansP: string;
  plans: { name: string; days: string; pdf: string }[];
  plansNote: string;
  faqLabel: string;
  faqH2: string;
  faq: { q: string; a: string }[];
  ctaH2: string;
  ctaP: string;
  crossLabel: string;
  crossText: string;
  crossBtn: string;
  imgAlt: string[];
  placeholderTitle: string;
};

const it: Locale = {
  metaTitle: "Riutilizzabilità PPWR — Dichiarazione imballaggi riutilizzabili Reg. UE 2025/40",
  metaDescription:
    "Checklist guidata di 23 requisiti, esito automatico e report A4 in PDF per il fascicolo tecnico degli imballaggi riutilizzabili (Reg. UE 2025/40 PPWR).",
  back: "Torna alle applicazioni",
  eyebrow: "Riutilizzabilità PPWR · Regolamento UE 2025/40",
  h1: "Riutilizzabilità PPWR, dichiarata in modo guidato",
  heroP:
    "Lo strumento professionale per valutare se un imballaggio è riutilizzabile: compili la scheda, rispondi ai 23 requisiti, ottieni l'esito automatico e generi il report A4 in PDF per il fascicolo tecnico.",
  keyPoints:
    "23 requisiti · Esito automatico · Report A4 con logo e firma · Dati nel tuo browser · IT, EN, DE, ES",
  whatLabel: "Conformità europea",
  whatH2: "Un imballaggio è riutilizzabile solo dentro un sistema",
  whatP:
    "Il PPWR non considera riutilizzabile un imballaggio in astratto: conta che sia progettato per più rotazioni e che faccia parte di un sistema di riutilizzo verificabile, con raccolta, tracciabilità e ricondizionamento. L'app ti guida su ognuno di questi aspetti e li riassume in un'unica dichiarazione tecnica.",
  tags: [
    "Reg. UE 2025/40",
    "23 requisiti",
    "Esito automatico",
    "Report A4 in PDF",
    "Archivio locale",
  ],
  reqLabel: "Checklist di conformità",
  reqH2: "23 requisiti, in tre blocchi",
  reqIntro:
    "Per ogni requisito scegli Sì, No oppure N.A. (non applicabile). Per i Sì puoi citare l'evidenza tecnica o la prova di riferimento; per i N.A. la motivazione è obbligatoria e finisce nel report.",
  reqBlocks: [
    {
      title: "Requisiti generali per gli imballaggi riutilizzabili",
      sub: "Art. 11 · 9 requisiti",
      items: [
        "Progettato e fabbricato per molteplici rotazioni in condizioni d'uso prevedibili",
        "Sicurezza, igiene e salute di lavoratori e consumatori",
        "Svuotamento, lavaggio, disinfezione e ricondizionamento senza perdere la funzione",
        "Requisiti specifici per alimenti (MOCA) o merci pericolose (ADR)",
        "Requisiti di rigenerazione dell'Allegato VI",
        "Riciclabilità a fine vita utile",
        "Identificazione come imballaggio riutilizzabile (marcatura o etichetta)",
        "Partecipazione a un sistema di riutilizzo funzionante",
        "Istruzioni per manipolazione, trasporto e restituzione",
      ],
    },
    {
      title: "Fasi del ricondizionamento",
      sub: "Allegato VI parte B · 8 requisiti",
      items: [
        "Ispezione e cernita preliminare",
        "Pulizia, decontaminazione o lavaggio",
        "Riparazione o sostituzione di parti usurate",
        "Verifica dell'integrità e prove di tenuta",
        "Ripristino di marcatura ed etichettatura",
        "Controllo finale prima della rimessa in circolazione",
        "Tracciamento delle operazioni su ogni pezzo o lotto",
        "Il ricondizionamento non compromette salute e sicurezza",
      ],
    },
    {
      title: "Sistema di riutilizzo e logistica inversa",
      sub: "6 requisiti operativi",
      items: [
        "Circuito di riutilizzo definito (chiuso o pooling)",
        "Rete di raccolta e logistica inversa efficiente",
        "Incentivi alla restituzione (cauzione, canone, penali)",
        "Identificazione e tracciabilità univoca sul campo",
        "Registro aggiornato di cicli e rotazioni",
        "Archivio delle evidenze per gli audit",
      ],
    },
  ],
  featLabel: "Funzionalità",
  featH2: "Funzionalità principali",
  features: [
    {
      title: "Scheda dell'imballo",
      desc: "Titolo, tipologia (IBC, fusti, pallet, cassette, big bag, taniche), modello, materiale, dimensioni e settore d'impiego: alimentare, chimico/ADR, industriale, cosmetico e farmaceutico.",
    },
    {
      title: "Rotazioni e indice di utilizzo",
      desc: "Inserisci le rotazioni previste e quelle già effettuate: l'app calcola la vita utile consumata e segnala il superamento del 100%, con la necessità di prove di integrità.",
    },
    {
      title: "Sistema e tracciabilità",
      desc: "Circuito chiuso, pooling o sistema misto; metodo di identificazione (matricola, barcode, QR, DataMatrix, RFID/NFC) ed evidenze documentali a supporto.",
    },
    {
      title: "Checklist guidata",
      desc: "I 23 requisiti con risposta Sì, No o N.A. e note tecniche per ciascuno.",
    },
    {
      title: "Dati aziendali e logo",
      desc: "Ragione sociale, P.IVA, contatti, firmatario tecnico e logo compaiono in ogni report, senza ricompilare nulla.",
    },
    {
      title: "Archivio e duplicazione",
      desc: "Ricerca rapida tra le valutazioni, duplicazione per varianti di modello, backup e ripristino in JSON.",
    },
  ],
  stepsLabel: "Come funziona",
  stepsH2: "Dalla scheda al report in 4 passi",
  steps: [
    {
      title: "Imposta la ditta",
      desc: "Dati aziendali, firmatario e logo, una volta sola.",
    },
    {
      title: "Descrivi l'imballo",
      desc: "Scheda tecnica, rotazioni e sistema di riutilizzo.",
    },
    {
      title: "Rispondi ai 23 requisiti",
      desc: "Sì, No o N.A. con note e riferimenti.",
    },
    {
      title: "Rivedi e scarica",
      desc: "Modifica le conclusioni, aggiungi la firma e genera il PDF.",
    },
  ],
  outcomeLabel: "Esito automatico",
  outcomeH2: "Tre esiti, una regola chiara",
  outcomeP: "L'app calcola l'esito in tempo reale e applica sempre la stessa logica.",
  outcomes: [
    {
      badge: "IDONEO",
      title: "Tutti i requisiti soddisfatti",
      desc: "Tutti i 23 requisiti hanno risposta Sì oppure N.A. motivata.",
    },
    {
      badge: "NON IDONEO",
      title: "Almeno un requisito non soddisfatto",
      desc: "Basta una risposta No tra i requisiti applicabili.",
    },
    {
      badge: "INCOMPLETO",
      title: "Valutazione ancora in bozza",
      desc: "Uno o più requisiti non hanno ancora una risposta.",
    },
  ],
  pdfLabel: "Report di conformità",
  pdfH2: "Un report A4 pronto per il fascicolo tecnico",
  pdfPoints: [
    "Intestazione con logo e dati della ditta",
    "Scheda tecnica dell'imballaggio e indice di utilizzo",
    "Descrizione del sistema di riutilizzo ed evidenze",
    "Le tre tabelle con i 23 requisiti, l'esito e le note",
    "Box finale con l'esito di idoneità",
    "Conclusioni modificabili e spazio per luogo, data, timbro e firma",
  ],
  pdfNote:
    "Impaginazione A4 senza tagli di riga. Il nome file segue lo schema AAAAMMGGHHmm-RIUTILIZZO-PPWR-titolo, utile per la tracciabilità documentale. La responsabilità della dichiarazione resta del compilatore.",
  pdf: {
    company: "Azienda Esempio S.r.l.",
    program: "Riutilizzabilità PPWR · Reg. UE 2025/40",
    title: "Report di conformità — IBC 1000 L",
    rows: [
      ["Tipologia", "IBC 1000 L"],
      ["Settore", "Chimico / ADR"],
      ["Indice di utilizzo", "70%"],
    ],
    colReq: "Requisito",
    colOutcome: "Esito",
    reqRows: [
      ["Art. 11 — Rotazioni multiple", "SÌ"],
      ["Allegato VI — Pulizia e lavaggio", "SÌ"],
      ["Sistema — Tracciabilità univoca", "SÌ"],
    ],
    result: "IMBALLAGGIO IDONEO AL RIUTILIZZO SECONDO IL REGOLAMENTO PPWR (UE 2025/40)",
    place: "Luogo",
    date: "Data",
    sign: "Timbro e firma del responsabile tecnico",
    footer: "Esempio illustrativo",
    page: "Pagina 1 di 3",
  },
  traceLabel: "Sistema e tracciabilità",
  traceH2: "Dal singolo pezzo al lotto, tutto documentato",
  traceP:
    "Un imballaggio riutilizzabile deve poter essere identificato, rintracciato e ricondizionato a ogni rotazione. L'app raccoglie queste informazioni nella scheda e le porta nel report.",
  tracePoints: [
    "Circuito chiuso, aperto (pooling o noleggio gestito) o misto",
    "Identificazione univoca: matricola, barcode, QR code, DataMatrix, RFID/NFC",
    "Ricondizionamento: ispezione, lavaggio, riparazione, prove di tenuta, controllo finale",
    "Evidenze: rapporti di prova, omologazione UN/ADR, scheda tecnica, conformità MOCA",
  ],
  secLabel: "Archivio e accesso",
  secH2: "I tuoi dati restano tuoi",
  security: [
    {
      title: "Dati nel tuo browser",
      desc: "Valutazioni e dati aziendali sono salvati localmente sul tuo computer, non su un archivio condiviso.",
    },
    {
      title: "Backup in JSON",
      desc: "Esporta una copia di sicurezza e importala su un altro computer: l'app accetta solo file validi e ne verifica l'integrità.",
    },
    {
      title: "Accesso senza password",
      desc: "Email e codice monouso di 6 cifre valido 15 minuti: nessuna password da ricordare o perdere.",
    },
    {
      title: "Licenza e PUK",
      desc: "Ogni piano ha licenza e codice PUK personale; i PDF residui sono sempre visibili in alto.",
    },
  ],
  forLabel: "A chi serve",
  forH2: "Per chi gestisce imballaggi riutilizzabili",
  forList: [
    {
      title: "Produttori di imballaggi",
      desc: "Dichiarano la riutilizzabilità del proprio modello e preparano la documentazione tecnica.",
    },
    {
      title: "Utilizzatori e riempitori",
      desc: "Verificano i requisiti degli imballi che mettono in circolo.",
    },
    {
      title: "Ricondizionatori",
      desc: "Documentano ispezione, pulizia, riparazione e controllo finale.",
    },
    {
      title: "Consulenti e responsabili qualità",
      desc: "Gestiscono più valutazioni, duplicano le varianti e producono report con i dati della ditta.",
    },
  ],
  plansLabel: "Piani",
  plansH2: "Quanti report ti servono?",
  plansP:
    "Ogni piano include un numero di esportazioni PDF. A PDF esauriti puoi comunque consultare e modificare le valutazioni ed esportarle in JSON.",
  plans: [
    {
      name: "Uso singolo",
      days: "2 giorni",
      pdf: "1 PDF",
    },
    {
      name: "Mensile",
      days: "30 giorni",
      pdf: "20 PDF",
    },
    {
      name: "Annuale",
      days: "365 giorni",
      pdf: "300 PDF",
    },
  ],
  plansNote: "Prezzi e acquisto nei pulsanti qui sotto.",
  faqLabel: "FAQ",
  faqH2: "Domande frequenti",
  faq: [
    {
      q: "L'app sostituisce una verifica tecnica o legale?",
      a: "No. È uno strumento di supporto che organizza i requisiti e produce il report. La veridicità delle risposte e la responsabilità della dichiarazione restano del compilatore e del responsabile tecnico che firma.",
    },
    {
      q: "Cosa significa N.A.?",
      a: "Non applicabile al caso specifico. Richiede sempre una motivazione tecnica nelle note, che compare nel report.",
    },
    {
      q: "Dove sono salvati i miei dati?",
      a: "Nel browser del computer che usi. Per spostarli su un altro computer esporti un file JSON e lo importi. Se lavori su un computer condiviso usa «Esci e cancella tutto».",
    },
    {
      q: "Cosa succede quando i PDF sono finiti?",
      a: "Il download del PDF si blocca, ma puoi continuare a consultare e modificare le valutazioni e usare l'esportazione JSON.",
    },
    {
      q: "Posso valutare più imballaggi e varianti?",
      a: "Sì. Le valutazioni sono salvate in un elenco con ricerca e puoi duplicarne una per creare una variante senza ricompilare tutto.",
    },
    {
      q: "Come si accede?",
      a: "Con la tua email e un codice monouso; al primo accesso inserisci licenza e PUK ricevuti all'acquisto e accetti le condizioni d'uso.",
    },
    {
      q: "In quali lingue è disponibile?",
      a: "Interfaccia in italiano, inglese, tedesco e spagnolo, cambiabile in qualsiasi momento.",
    },
  ],
  ctaH2: "Dichiara la riutilizzabilità dei tuoi imballaggi",
  ctaP: "Scegli il piano più adatto alle tue esigenze.",
  crossLabel: "Ti serve anche la riciclabilità?",
  crossText:
    "L'app Riciclabilità PPWR calcola la percentuale di riciclabilità e assegna il grado A, B o C.",
  crossBtn: "Scopri Riciclabilità PPWR",
  imgAlt: [
    "Imballaggi riutilizzabili (IBC, fusti, cassette) in un circuito di riutilizzo",
    "Schema del circuito di riutilizzo: riempimento, trasporto, utilizzo, restituzione, ricondizionamento",
    "Operatore che ispeziona un contenitore riutilizzabile durante il ricondizionamento",
    "Etichetta con QR code e DataMatrix su un contenitore riutilizzabile",
    "Elenco delle valutazioni con esito idoneo, non idoneo e incompleto",
  ],
  placeholderTitle: "Immagine da preparare",
};

const en: Locale = {
  metaTitle: "PPWR Reusability — Reusable packaging declaration, EU Reg. 2025/40",
  metaDescription:
    "Guided checklist of 23 requirements, automatic outcome and A4 PDF report for the technical file of reusable packaging (EU Reg. 2025/40 PPWR).",
  back: "Back to applications",
  eyebrow: "PPWR Reusability · EU Regulation 2025/40",
  h1: "PPWR Reusability, declared step by step",
  heroP:
    "The professional tool to assess whether packaging is reusable: fill in the sheet, answer the 23 requirements, get the automatic outcome and generate the A4 PDF report for the technical file.",
  keyPoints:
    "23 requirements · Automatic outcome · A4 report with logo and signature · Data stays in your browser · IT, EN, DE, ES",
  whatLabel: "European compliance",
  whatH2: "Packaging is reusable only within a system",
  whatP:
    "The PPWR does not treat packaging as reusable in the abstract: what matters is that it is designed for multiple rotations and is part of a verifiable reuse system, with collection, traceability and reconditioning. The app guides you through each of these aspects and summarises them in a single technical declaration.",
  tags: [
    "EU Reg. 2025/40",
    "23 requirements",
    "Automatic outcome",
    "A4 PDF report",
    "Local archive",
  ],
  reqLabel: "Compliance checklist",
  reqH2: "23 requirements, in three blocks",
  reqIntro:
    "For each requirement choose Yes, No or N/A (not applicable). For Yes answers you can cite the technical evidence or test; for N/A the justification is mandatory and appears in the report.",
  reqBlocks: [
    {
      title: "General requirements for reusable packaging",
      sub: "Art. 11 · 9 requirements",
      items: [
        "Designed and manufactured for multiple rotations under foreseeable conditions of use",
        "Safety, hygiene and health of workers and consumers",
        "Emptying, washing, disinfection and reconditioning without losing its function",
        "Specific requirements for food contact (FCM) or dangerous goods (ADR)",
        "Reconditioning requirements of Annex VI",
        "Recyclability at end of life",
        "Identification as reusable packaging (marking or label)",
        "Participation in a functioning reuse system",
        "Instructions for handling, transport and return",
      ],
    },
    {
      title: "Reconditioning steps",
      sub: "Annex VI part B · 8 requirements",
      items: [
        "Preliminary inspection and sorting",
        "Cleaning, decontamination or washing",
        "Repair or replacement of worn parts",
        "Integrity checks and leak/pressure tests",
        "Restoring marking and labelling",
        "Final check before returning to circulation",
        "Tracking of operations on each item or batch",
        "Reconditioning does not compromise health and safety",
      ],
    },
    {
      title: "Reuse system and reverse logistics",
      sub: "6 operational requirements",
      items: [
        "Defined reuse circuit (closed loop or pooling)",
        "Efficient collection network and reverse logistics",
        "Return incentives (deposit, rental fee, penalties)",
        "Unique identification and traceability in the field",
        "Up-to-date register of cycles and rotations",
        "Archive of evidence for audits",
      ],
    },
  ],
  featLabel: "Features",
  featH2: "Key features",
  features: [
    {
      title: "Packaging sheet",
      desc: "Title, type (IBC, drums, pallets, crates, big bags, jerrycans), model, material, dimensions and sector: food, chemical/ADR, industrial, cosmetic and pharmaceutical.",
    },
    {
      title: "Rotations and usage index",
      desc: "Enter the planned and the completed rotations: the app calculates the service life used and flags anything over 100%, with the need for integrity testing.",
    },
    {
      title: "System and traceability",
      desc: "Closed loop, pooling or mixed system; identification method (serial number, barcode, QR, DataMatrix, RFID/NFC) and supporting documents.",
    },
    {
      title: "Guided checklist",
      desc: "The 23 requirements with Yes, No or N/A answers and technical notes for each.",
    },
    {
      title: "Company data and logo",
      desc: "Company name, VAT number, contacts, technical signatory and logo appear in every report, with no retyping.",
    },
    {
      title: "Archive and duplication",
      desc: "Quick search across assessments, duplication for model variants, JSON backup and restore.",
    },
  ],
  stepsLabel: "How it works",
  stepsH2: "From sheet to report in 4 steps",
  steps: [
    {
      title: "Set up your company",
      desc: "Company data, signatory and logo, just once.",
    },
    {
      title: "Describe the packaging",
      desc: "Technical sheet, rotations and reuse system.",
    },
    {
      title: "Answer the 23 requirements",
      desc: "Yes, No or N/A with notes and references.",
    },
    {
      title: "Review and download",
      desc: "Edit the conclusions, add the signature and generate the PDF.",
    },
  ],
  outcomeLabel: "Automatic outcome",
  outcomeH2: "Three outcomes, one clear rule",
  outcomeP: "The app calculates the outcome in real time and always applies the same logic.",
  outcomes: [
    {
      badge: "SUITABLE",
      title: "All requirements met",
      desc: "All 23 requirements are answered Yes or N/A with justification.",
    },
    {
      badge: "NOT SUITABLE",
      title: "At least one requirement not met",
      desc: "A single No among the applicable requirements is enough.",
    },
    {
      badge: "INCOMPLETE",
      title: "Assessment still a draft",
      desc: "One or more requirements have no answer yet.",
    },
  ],
  pdfLabel: "Compliance report",
  pdfH2: "An A4 report ready for the technical file",
  pdfPoints: [
    "Header with company logo and details",
    "Packaging data sheet and usage index",
    "Description of the reuse system and evidence",
    "The three tables with the 23 requirements, outcome and notes",
    "Final box with the suitability outcome",
    "Editable conclusions and space for place, date, stamp and signature",
  ],
  pdfNote:
    "A4 layout with no split rows. The file name follows the pattern YYYYMMDDHHmm-RIUTILIZZO-PPWR-title, useful for document traceability. Responsibility for the declaration remains with the person completing it.",
  pdf: {
    company: "Example Company Ltd",
    program: "PPWR Reusability · EU Reg. 2025/40",
    title: "Compliance report — IBC 1000 L",
    rows: [
      ["Type", "IBC 1000 L"],
      ["Sector", "Chemical / ADR"],
      ["Usage index", "70%"],
    ],
    colReq: "Requirement",
    colOutcome: "Outcome",
    reqRows: [
      ["Art. 11 — Multiple rotations", "YES"],
      ["Annex VI — Cleaning and washing", "YES"],
      ["System — Unique traceability", "YES"],
    ],
    result: "PACKAGING SUITABLE FOR REUSE UNDER THE PPWR REGULATION (EU 2025/40)",
    place: "Place",
    date: "Date",
    sign: "Stamp and signature of the technical manager",
    footer: "Illustrative example",
    page: "Page 1 of 3",
  },
  traceLabel: "System and traceability",
  traceH2: "From single item to batch, fully documented",
  traceP:
    "Reusable packaging must be identifiable, traceable and reconditioned at every rotation. The app gathers this information in the sheet and carries it into the report.",
  tracePoints: [
    "Closed, open (pooling or managed rental) or mixed circuit",
    "Unique identification: serial number, barcode, QR code, DataMatrix, RFID/NFC",
    "Reconditioning: inspection, washing, repair, leak tests, final check",
    "Evidence: test reports, UN/ADR approval, data sheet, food-contact compliance",
  ],
  secLabel: "Archive and access",
  secH2: "Your data stays yours",
  security: [
    {
      title: "Data in your browser",
      desc: "Assessments and company data are stored locally on your computer, not in a shared archive.",
    },
    {
      title: "JSON backup",
      desc: "Export a backup copy and import it on another computer: the app only accepts valid files and checks their integrity.",
    },
    {
      title: "Passwordless access",
      desc: "Email plus a one-time 6-digit code valid for 15 minutes: no password to remember or lose.",
    },
    {
      title: "Licence and PUK",
      desc: "Each plan has a licence and a personal PUK code; remaining PDFs are always shown at the top.",
    },
  ],
  forLabel: "Who it is for",
  forH2: "For anyone handling reusable packaging",
  forList: [
    {
      title: "Packaging manufacturers",
      desc: "Declare the reusability of their model and prepare the technical documentation.",
    },
    {
      title: "Users and fillers",
      desc: "Check the requirements of the packaging they put into circulation.",
    },
    {
      title: "Reconditioners",
      desc: "Document inspection, cleaning, repair and final check.",
    },
    {
      title: "Consultants and quality managers",
      desc: "Manage several assessments, duplicate variants and produce reports with company details.",
    },
  ],
  plansLabel: "Plans",
  plansH2: "How many reports do you need?",
  plansP:
    "Each plan includes a number of PDF exports. Once they run out you can still view and edit assessments and export them as JSON.",
  plans: [
    {
      name: "Single use",
      days: "2 days",
      pdf: "1 PDF",
    },
    {
      name: "Monthly",
      days: "30 days",
      pdf: "20 PDF",
    },
    {
      name: "Annual",
      days: "365 days",
      pdf: "300 PDF",
    },
  ],
  plansNote: "Prices and purchase in the buttons below.",
  faqLabel: "FAQ",
  faqH2: "Frequently asked questions",
  faq: [
    {
      q: "Does the app replace a technical or legal review?",
      a: "No. It is a support tool that organises the requirements and produces the report. The accuracy of the answers and responsibility for the declaration remain with the person completing it and the technical manager who signs.",
    },
    {
      q: "What does N/A mean?",
      a: "Not applicable to the specific case. It always requires a technical justification in the notes, which appears in the report.",
    },
    {
      q: "Where is my data stored?",
      a: "In the browser of the computer you use. To move it to another computer, export a JSON file and import it. On a shared computer use “Sign out and clear everything”.",
    },
    {
      q: "What happens when the PDFs run out?",
      a: "PDF download is blocked, but you can keep viewing and editing assessments and use JSON export.",
    },
    {
      q: "Can I assess several packages and variants?",
      a: "Yes. Assessments are kept in a searchable list and you can duplicate one to create a variant without refilling everything.",
    },
    {
      q: "How do I sign in?",
      a: "With your email and a one-time code; on first access you enter the licence and PUK received at purchase and accept the terms of use.",
    },
    {
      q: "Which languages are available?",
      a: "The interface is available in Italian, English, German and Spanish and can be changed at any time.",
    },
  ],
  ctaH2: "Declare the reusability of your packaging",
  ctaP: "Choose the plan that fits your needs.",
  crossLabel: "Need recyclability too?",
  crossText:
    "The PPWR Recyclability app calculates the recyclability percentage and assigns grade A, B or C.",
  crossBtn: "Discover PPWR Recyclability",
  imgAlt: [
    "Reusable packaging (IBCs, drums, crates) in a reuse circuit",
    "Reuse circuit diagram: filling, transport, use, return, reconditioning",
    "Operator inspecting a reusable container during reconditioning",
    "Label with QR code and DataMatrix on a reusable container",
    "List of assessments with suitable, not suitable and incomplete outcomes",
  ],
  placeholderTitle: "Image to be prepared",
};

const de: Locale = {
  metaTitle: "PPWR-Wiederverwendbarkeit — Erklärung für Mehrwegverpackungen, EU-VO 2025/40",
  metaDescription:
    "Geführte Checkliste mit 23 Anforderungen, automatisches Ergebnis und A4-PDF-Bericht für die technische Akte von Mehrwegverpackungen (EU-VO 2025/40 PPWR).",
  back: "Zurück zu den Anwendungen",
  eyebrow: "PPWR-Wiederverwendbarkeit · EU-Verordnung 2025/40",
  h1: "PPWR-Wiederverwendbarkeit, geführt erklärt",
  heroP:
    "Das professionelle Werkzeug, um zu beurteilen, ob eine Verpackung wiederverwendbar ist: Datenblatt ausfüllen, 23 Anforderungen beantworten, automatisches Ergebnis erhalten und den A4-PDF-Bericht für die technische Akte erstellen.",
  keyPoints:
    "23 Anforderungen · Automatisches Ergebnis · A4-Bericht mit Logo und Unterschrift · Daten im eigenen Browser · IT, EN, DE, ES",
  whatLabel: "Europäische Konformität",
  whatH2: "Eine Verpackung ist nur innerhalb eines Systems wiederverwendbar",
  whatP:
    "Die PPWR betrachtet eine Verpackung nicht abstrakt als wiederverwendbar: Entscheidend ist, dass sie für mehrere Umläufe ausgelegt ist und Teil eines überprüfbaren Wiederverwendungssystems mit Rücknahme, Rückverfolgbarkeit und Wiederaufbereitung ist. Die App führt Sie durch alle diese Aspekte und fasst sie in einer technischen Erklärung zusammen.",
  tags: [
    "EU-VO 2025/40",
    "23 Anforderungen",
    "Automatisches Ergebnis",
    "A4-PDF-Bericht",
    "Lokales Archiv",
  ],
  reqLabel: "Konformitäts-Checkliste",
  reqH2: "23 Anforderungen in drei Blöcken",
  reqIntro:
    "Wählen Sie für jede Anforderung Ja, Nein oder N. z. (nicht zutreffend). Bei Ja können Sie den technischen Nachweis oder die Prüfung angeben; bei N. z. ist eine Begründung Pflicht und erscheint im Bericht.",
  reqBlocks: [
    {
      title: "Allgemeine Anforderungen an Mehrwegverpackungen",
      sub: "Art. 11 · 9 Anforderungen",
      items: [
        "Für mehrere Umläufe unter vorhersehbaren Nutzungsbedingungen ausgelegt und hergestellt",
        "Sicherheit, Hygiene und Gesundheit von Arbeitnehmern und Verbrauchern",
        "Entleeren, Waschen, Desinfizieren und Wiederaufbereiten ohne Funktionsverlust",
        "Besondere Anforderungen für Lebensmittel (MOCA) oder Gefahrgut (ADR)",
        "Wiederaufbereitungsanforderungen nach Anhang VI",
        "Recyclingfähigkeit am Ende der Nutzungsdauer",
        "Kennzeichnung als Mehrwegverpackung (Markierung oder Etikett)",
        "Teilnahme an einem funktionierenden Wiederverwendungssystem",
        "Anleitungen für Handhabung, Transport und Rückgabe",
      ],
    },
    {
      title: "Schritte der Wiederaufbereitung",
      sub: "Anhang VI Teil B · 8 Anforderungen",
      items: [
        "Eingangsprüfung und Sortierung",
        "Reinigung, Dekontamination oder Waschen",
        "Reparatur oder Austausch verschlissener Teile",
        "Integritätsprüfung und Dichtheits-/Druckprüfungen",
        "Wiederherstellung von Markierung und Kennzeichnung",
        "Endkontrolle vor der Wiedereinführung in den Umlauf",
        "Nachverfolgung der Arbeitsschritte je Stück oder Charge",
        "Die Wiederaufbereitung beeinträchtigt Gesundheit und Sicherheit nicht",
      ],
    },
    {
      title: "Wiederverwendungssystem und Rückwärtslogistik",
      sub: "6 operative Anforderungen",
      items: [
        "Definierter Wiederverwendungskreislauf (geschlossen oder Pooling)",
        "Effizientes Sammelnetz und Rückwärtslogistik",
        "Rückgabeanreize (Pfand, Mietgebühr, Vertragsstrafen)",
        "Eindeutige Kennzeichnung und Rückverfolgbarkeit im Einsatz",
        "Aktuelles Register der Zyklen und Umläufe",
        "Archiv der Nachweise für Audits",
      ],
    },
  ],
  featLabel: "Funktionen",
  featH2: "Wichtigste Funktionen",
  features: [
    {
      title: "Verpackungsdatenblatt",
      desc: "Titel, Art (IBC, Fässer, Paletten, Kisten, Big Bags, Kanister), Modell, Material, Abmessungen und Branche: Lebensmittel, Chemie/ADR, Industrie, Kosmetik und Pharma.",
    },
    {
      title: "Umläufe und Nutzungsindex",
      desc: "Geplante und bereits durchgeführte Umläufe eingeben: Die App berechnet die verbrauchte Lebensdauer und warnt bei über 100 % mit dem Hinweis auf Integritätsprüfungen.",
    },
    {
      title: "System und Rückverfolgbarkeit",
      desc: "Geschlossener Kreislauf, Pooling oder Mischsystem; Kennzeichnungsmethode (Seriennummer, Barcode, QR, DataMatrix, RFID/NFC) und Nachweisdokumente.",
    },
    {
      title: "Geführte Checkliste",
      desc: "Die 23 Anforderungen mit Antwort Ja, Nein oder N. z. und technischen Hinweisen zu jeder.",
    },
    {
      title: "Firmendaten und Logo",
      desc: "Firmenname, USt-IdNr., Kontakte, technischer Unterzeichner und Logo erscheinen in jedem Bericht, ohne erneute Eingabe.",
    },
    {
      title: "Archiv und Duplizieren",
      desc: "Schnellsuche in den Bewertungen, Duplizieren für Modellvarianten, Sicherung und Wiederherstellung als JSON.",
    },
  ],
  stepsLabel: "So funktioniert es",
  stepsH2: "Vom Datenblatt zum Bericht in 4 Schritten",
  steps: [
    {
      title: "Firma einrichten",
      desc: "Firmendaten, Unterzeichner und Logo, nur einmal.",
    },
    {
      title: "Verpackung beschreiben",
      desc: "Datenblatt, Umläufe und Wiederverwendungssystem.",
    },
    {
      title: "23 Anforderungen beantworten",
      desc: "Ja, Nein oder N. z. mit Hinweisen und Referenzen.",
    },
    {
      title: "Prüfen und herunterladen",
      desc: "Schlussfolgerungen anpassen, Unterschrift ergänzen und PDF erstellen.",
    },
  ],
  outcomeLabel: "Automatisches Ergebnis",
  outcomeH2: "Drei Ergebnisse, eine klare Regel",
  outcomeP: "Die App berechnet das Ergebnis in Echtzeit und wendet immer dieselbe Logik an.",
  outcomes: [
    {
      badge: "GEEIGNET",
      title: "Alle Anforderungen erfüllt",
      desc: "Alle 23 Anforderungen sind mit Ja oder begründetem N. z. beantwortet.",
    },
    {
      badge: "NICHT GEEIGNET",
      title: "Mindestens eine Anforderung nicht erfüllt",
      desc: "Ein einziges Nein bei den zutreffenden Anforderungen genügt.",
    },
    {
      badge: "UNVOLLSTÄNDIG",
      title: "Bewertung noch im Entwurf",
      desc: "Eine oder mehrere Anforderungen sind noch unbeantwortet.",
    },
  ],
  pdfLabel: "Konformitätsbericht",
  pdfH2: "Ein A4-Bericht, bereit für die technische Akte",
  pdfPoints: [
    "Kopfzeile mit Firmenlogo und Firmendaten",
    "Verpackungsdatenblatt und Nutzungsindex",
    "Beschreibung des Wiederverwendungssystems und Nachweise",
    "Die drei Tabellen mit den 23 Anforderungen, Ergebnis und Hinweisen",
    "Schlussfeld mit dem Eignungsergebnis",
    "Bearbeitbare Schlussfolgerungen und Platz für Ort, Datum, Stempel und Unterschrift",
  ],
  pdfNote:
    "A4-Layout ohne getrennte Zeilen. Der Dateiname folgt dem Schema JJJJMMTTHHmm-RIUTILIZZO-PPWR-Titel und unterstützt die Nachvollziehbarkeit der Dokumente. Die Verantwortung für die Erklärung liegt beim Ersteller.",
  pdf: {
    company: "Beispiel GmbH",
    program: "PPWR-Wiederverwendbarkeit · EU-VO 2025/40",
    title: "Konformitätsbericht — IBC 1000 L",
    rows: [
      ["Art", "IBC 1000 L"],
      ["Branche", "Chemie / ADR"],
      ["Nutzungsindex", "70 %"],
    ],
    colReq: "Anforderung",
    colOutcome: "Ergebnis",
    reqRows: [
      ["Art. 11 — Mehrere Umläufe", "JA"],
      ["Anhang VI — Reinigung und Waschen", "JA"],
      ["System — Eindeutige Rückverfolgbarkeit", "JA"],
    ],
    result: "VERPACKUNG FÜR DIE WIEDERVERWENDUNG GEMÄSS PPWR-VERORDNUNG (EU 2025/40) GEEIGNET",
    place: "Ort",
    date: "Datum",
    sign: "Stempel und Unterschrift des technischen Leiters",
    footer: "Illustratives Beispiel",
    page: "Seite 1 von 3",
  },
  traceLabel: "System und Rückverfolgbarkeit",
  traceH2: "Vom Einzelstück bis zur Charge, lückenlos dokumentiert",
  traceP:
    "Eine Mehrwegverpackung muss bei jedem Umlauf identifizierbar, rückverfolgbar und wiederaufbereitbar sein. Die App sammelt diese Informationen im Datenblatt und überträgt sie in den Bericht.",
  tracePoints: [
    "Geschlossener, offener (Pooling oder verwaltete Miete) oder gemischter Kreislauf",
    "Eindeutige Kennzeichnung: Seriennummer, Barcode, QR-Code, DataMatrix, RFID/NFC",
    "Wiederaufbereitung: Prüfung, Waschen, Reparatur, Dichtheitsprüfung, Endkontrolle",
    "Nachweise: Prüfberichte, UN/ADR-Zulassung, Datenblatt, Lebensmittelkonformität",
  ],
  secLabel: "Archiv und Zugang",
  secH2: "Ihre Daten bleiben Ihre Daten",
  security: [
    {
      title: "Daten in Ihrem Browser",
      desc: "Bewertungen und Firmendaten werden lokal auf Ihrem Computer gespeichert, nicht in einem gemeinsamen Archiv.",
    },
    {
      title: "JSON-Sicherung",
      desc: "Exportieren Sie eine Sicherungskopie und importieren Sie sie auf einem anderen Computer: Die App akzeptiert nur gültige Dateien und prüft deren Integrität.",
    },
    {
      title: "Zugang ohne Passwort",
      desc: "E-Mail und Einmalcode mit 6 Ziffern, 15 Minuten gültig: kein Passwort zu merken oder zu verlieren.",
    },
    {
      title: "Lizenz und PUK",
      desc: "Jeder Tarif hat eine Lizenz und einen persönlichen PUK-Code; verbleibende PDFs sind oben immer sichtbar.",
    },
  ],
  forLabel: "Für wen",
  forH2: "Für alle, die Mehrwegverpackungen handhaben",
  forList: [
    {
      title: "Verpackungshersteller",
      desc: "Erklären die Wiederverwendbarkeit ihres Modells und bereiten die technische Dokumentation vor.",
    },
    {
      title: "Anwender und Abfüller",
      desc: "Prüfen die Anforderungen der Verpackungen, die sie in Umlauf bringen.",
    },
    {
      title: "Wiederaufbereiter",
      desc: "Dokumentieren Prüfung, Reinigung, Reparatur und Endkontrolle.",
    },
    {
      title: "Berater und Qualitätsverantwortliche",
      desc: "Verwalten mehrere Bewertungen, duplizieren Varianten und erstellen Berichte mit Firmendaten.",
    },
  ],
  plansLabel: "Tarife",
  plansH2: "Wie viele Berichte brauchen Sie?",
  plansP:
    "Jeder Tarif enthält eine Anzahl von PDF-Exporten. Sind sie aufgebraucht, können Sie Bewertungen weiterhin ansehen, bearbeiten und als JSON exportieren.",
  plans: [
    {
      name: "Einmalnutzung",
      days: "2 Tage",
      pdf: "1 PDF",
    },
    {
      name: "Monatlich",
      days: "30 Tage",
      pdf: "20 PDF",
    },
    {
      name: "Jährlich",
      days: "365 Tage",
      pdf: "300 PDF",
    },
  ],
  plansNote: "Preise und Kauf in den Schaltflächen unten.",
  faqLabel: "FAQ",
  faqH2: "Häufige Fragen",
  faq: [
    {
      q: "Ersetzt die App eine technische oder rechtliche Prüfung?",
      a: "Nein. Sie ist ein Hilfsmittel, das die Anforderungen ordnet und den Bericht erstellt. Die Richtigkeit der Antworten und die Verantwortung für die Erklärung liegen beim Ersteller und beim unterzeichnenden technischen Leiter.",
    },
    {
      q: "Was bedeutet N. z.?",
      a: "Nicht zutreffend im konkreten Fall. Es erfordert immer eine technische Begründung in den Hinweisen, die im Bericht erscheint.",
    },
    {
      q: "Wo werden meine Daten gespeichert?",
      a: "Im Browser des von Ihnen genutzten Computers. Um sie auf einen anderen Computer zu übertragen, exportieren Sie eine JSON-Datei und importieren sie dort. Auf einem gemeinsam genutzten Computer verwenden Sie „Abmelden und alles löschen“.",
    },
    {
      q: "Was passiert, wenn die PDFs aufgebraucht sind?",
      a: "Der PDF-Download wird gesperrt, Sie können Bewertungen aber weiter ansehen, bearbeiten und als JSON exportieren.",
    },
    {
      q: "Kann ich mehrere Verpackungen und Varianten bewerten?",
      a: "Ja. Die Bewertungen liegen in einer durchsuchbaren Liste, und Sie können eine duplizieren, um eine Variante ohne erneutes Ausfüllen anzulegen.",
    },
    {
      q: "Wie melde ich mich an?",
      a: "Mit Ihrer E-Mail-Adresse und einem Einmalcode; beim ersten Zugang geben Sie die beim Kauf erhaltene Lizenz und den PUK ein und akzeptieren die Nutzungsbedingungen.",
    },
    {
      q: "In welchen Sprachen ist die App verfügbar?",
      a: "Die Oberfläche gibt es auf Italienisch, Englisch, Deutsch und Spanisch, jederzeit umschaltbar.",
    },
  ],
  ctaH2: "Erklären Sie die Wiederverwendbarkeit Ihrer Verpackungen",
  ctaP: "Wählen Sie den passenden Tarif.",
  crossLabel: "Brauchen Sie auch die Recyclingfähigkeit?",
  crossText:
    "Die App PPWR-Recyclingfähigkeit berechnet den Recyclinganteil und vergibt die Klasse A, B oder C.",
  crossBtn: "PPWR-Recyclingfähigkeit entdecken",
  imgAlt: [
    "Mehrwegverpackungen (IBC, Fässer, Kisten) in einem Wiederverwendungskreislauf",
    "Schema des Wiederverwendungskreislaufs: Befüllen, Transport, Nutzung, Rückgabe, Wiederaufbereitung",
    "Mitarbeiter prüft einen Mehrwegbehälter bei der Wiederaufbereitung",
    "Etikett mit QR-Code und DataMatrix auf einem Mehrwegbehälter",
    "Liste der Bewertungen mit den Ergebnissen geeignet, nicht geeignet und unvollständig",
  ],
  placeholderTitle: "Bild in Vorbereitung",
};

const es: Locale = {
  metaTitle: "Reutilizabilidad PPWR — Declaración de envases reutilizables, Reg. UE 2025/40",
  metaDescription:
    "Lista de verificación guiada de 23 requisitos, resultado automático e informe A4 en PDF para el expediente técnico de envases reutilizables (Reg. UE 2025/40 PPWR).",
  back: "Volver a aplicaciones",
  eyebrow: "Reutilizabilidad PPWR · Reglamento UE 2025/40",
  h1: "Reutilizabilidad PPWR, declarada de forma guiada",
  heroP:
    "La herramienta profesional para evaluar si un envase es reutilizable: rellenas la ficha, respondes a los 23 requisitos, obtienes el resultado automático y generas el informe A4 en PDF para el expediente técnico.",
  keyPoints:
    "23 requisitos · Resultado automático · Informe A4 con logo y firma · Datos en tu navegador · IT, EN, DE, ES",
  whatLabel: "Conformidad europea",
  whatH2: "Un envase es reutilizable solo dentro de un sistema",
  whatP:
    "El PPWR no considera reutilizable un envase en abstracto: lo que cuenta es que esté diseñado para varias rotaciones y forme parte de un sistema de reutilización verificable, con recogida, trazabilidad y reacondicionamiento. La app te guía en cada uno de estos aspectos y los resume en una única declaración técnica.",
  tags: [
    "Reg. UE 2025/40",
    "23 requisitos",
    "Resultado automático",
    "Informe A4 en PDF",
    "Archivo local",
  ],
  reqLabel: "Lista de verificación de conformidad",
  reqH2: "23 requisitos, en tres bloques",
  reqIntro:
    "Para cada requisito elige Sí, No o N.A. (no aplicable). En los Sí puedes citar la evidencia técnica o el ensayo de referencia; en los N.A. la justificación es obligatoria y aparece en el informe.",
  reqBlocks: [
    {
      title: "Requisitos generales de los envases reutilizables",
      sub: "Art. 11 · 9 requisitos",
      items: [
        "Diseñado y fabricado para múltiples rotaciones en condiciones de uso previsibles",
        "Seguridad, higiene y salud de trabajadores y consumidores",
        "Vaciado, lavado, desinfección y reacondicionamiento sin perder la función",
        "Requisitos específicos para alimentos (MOCA) o mercancías peligrosas (ADR)",
        "Requisitos de reacondicionamiento del Anexo VI",
        "Reciclabilidad al final de su vida útil",
        "Identificación como envase reutilizable (marcado o etiqueta)",
        "Participación en un sistema de reutilización en funcionamiento",
        "Instrucciones de manipulación, transporte y devolución",
      ],
    },
    {
      title: "Fases del reacondicionamiento",
      sub: "Anexo VI parte B · 8 requisitos",
      items: [
        "Inspección y selección previas",
        "Limpieza, descontaminación o lavado",
        "Reparación o sustitución de piezas desgastadas",
        "Verificación de integridad y pruebas de estanqueidad",
        "Restablecimiento del marcado y del etiquetado",
        "Control final antes de volver a ponerlo en circulación",
        "Trazabilidad de las operaciones en cada pieza o lote",
        "El reacondicionamiento no compromete la salud ni la seguridad",
      ],
    },
    {
      title: "Sistema de reutilización y logística inversa",
      sub: "6 requisitos operativos",
      items: [
        "Circuito de reutilización definido (cerrado o pooling)",
        "Red de recogida y logística inversa eficiente",
        "Incentivos a la devolución (fianza, alquiler, penalizaciones)",
        "Identificación y trazabilidad única sobre el terreno",
        "Registro actualizado de ciclos y rotaciones",
        "Archivo de evidencias para auditorías",
      ],
    },
  ],
  featLabel: "Funcionalidades",
  featH2: "Funcionalidades principales",
  features: [
    {
      title: "Ficha del envase",
      desc: "Título, tipo (IBC, bidones, palés, cajas, big bags, garrafas), modelo, material, dimensiones y sector: alimentario, químico/ADR, industrial, cosmético y farmacéutico.",
    },
    {
      title: "Rotaciones e índice de utilización",
      desc: "Introduce las rotaciones previstas y las ya realizadas: la app calcula la vida útil consumida y avisa al superar el 100 %, con la necesidad de pruebas de integridad.",
    },
    {
      title: "Sistema y trazabilidad",
      desc: "Circuito cerrado, pooling o sistema mixto; método de identificación (número de serie, código de barras, QR, DataMatrix, RFID/NFC) y documentos de apoyo.",
    },
    {
      title: "Lista de verificación guiada",
      desc: "Los 23 requisitos con respuesta Sí, No o N.A. y notas técnicas para cada uno.",
    },
    {
      title: "Datos de empresa y logo",
      desc: "Razón social, NIF/IVA, contactos, firmante técnico y logo aparecen en cada informe, sin volver a escribir nada.",
    },
    {
      title: "Archivo y duplicación",
      desc: "Búsqueda rápida entre las evaluaciones, duplicación para variantes de modelo, copia de seguridad y restauración en JSON.",
    },
  ],
  stepsLabel: "Cómo funciona",
  stepsH2: "De la ficha al informe en 4 pasos",
  steps: [
    {
      title: "Configura la empresa",
      desc: "Datos de empresa, firmante y logo, una sola vez.",
    },
    {
      title: "Describe el envase",
      desc: "Ficha técnica, rotaciones y sistema de reutilización.",
    },
    {
      title: "Responde a los 23 requisitos",
      desc: "Sí, No o N.A. con notas y referencias.",
    },
    {
      title: "Revisa y descarga",
      desc: "Edita las conclusiones, añade la firma y genera el PDF.",
    },
  ],
  outcomeLabel: "Resultado automático",
  outcomeH2: "Tres resultados, una regla clara",
  outcomeP: "La app calcula el resultado en tiempo real y aplica siempre la misma lógica.",
  outcomes: [
    {
      badge: "APTO",
      title: "Todos los requisitos cumplidos",
      desc: "Los 23 requisitos tienen respuesta Sí o N.A. justificada.",
    },
    {
      badge: "NO APTO",
      title: "Al menos un requisito incumplido",
      desc: "Basta un No entre los requisitos aplicables.",
    },
    {
      badge: "INCOMPLETO",
      title: "Evaluación aún en borrador",
      desc: "Uno o más requisitos todavía no tienen respuesta.",
    },
  ],
  pdfLabel: "Informe de conformidad",
  pdfH2: "Un informe A4 listo para el expediente técnico",
  pdfPoints: [
    "Cabecera con logo y datos de la empresa",
    "Ficha técnica del envase e índice de utilización",
    "Descripción del sistema de reutilización y evidencias",
    "Las tres tablas con los 23 requisitos, el resultado y las notas",
    "Recuadro final con el resultado de aptitud",
    "Conclusiones editables y espacio para lugar, fecha, sello y firma",
  ],
  pdfNote:
    "Maquetación A4 sin filas cortadas. El nombre del archivo sigue el esquema AAAAMMDDHHmm-RIUTILIZZO-PPWR-título, útil para la trazabilidad documental. La responsabilidad de la declaración recae en quien la elabora.",
  pdf: {
    company: "Empresa Ejemplo S.L.",
    program: "Reutilizabilidad PPWR · Reg. UE 2025/40",
    title: "Informe de conformidad — IBC 1000 L",
    rows: [
      ["Tipo", "IBC 1000 L"],
      ["Sector", "Químico / ADR"],
      ["Índice de utilización", "70 %"],
    ],
    colReq: "Requisito",
    colOutcome: "Resultado",
    reqRows: [
      ["Art. 11 — Rotaciones múltiples", "SÍ"],
      ["Anexo VI — Limpieza y lavado", "SÍ"],
      ["Sistema — Trazabilidad única", "SÍ"],
    ],
    result: "ENVASE APTO PARA LA REUTILIZACIÓN SEGÚN EL REGLAMENTO PPWR (UE 2025/40)",
    place: "Lugar",
    date: "Fecha",
    sign: "Sello y firma del responsable técnico",
    footer: "Ejemplo ilustrativo",
    page: "Página 1 de 3",
  },
  traceLabel: "Sistema y trazabilidad",
  traceH2: "De la pieza al lote, todo documentado",
  traceP:
    "Un envase reutilizable debe poder identificarse, rastrearse y reacondicionarse en cada rotación. La app reúne esta información en la ficha y la lleva al informe.",
  tracePoints: [
    "Circuito cerrado, abierto (pooling o alquiler gestionado) o mixto",
    "Identificación única: número de serie, código de barras, QR, DataMatrix, RFID/NFC",
    "Reacondicionamiento: inspección, lavado, reparación, pruebas de estanqueidad, control final",
    "Evidencias: informes de ensayo, homologación UN/ADR, ficha técnica, conformidad alimentaria",
  ],
  secLabel: "Archivo y acceso",
  secH2: "Tus datos siguen siendo tuyos",
  security: [
    {
      title: "Datos en tu navegador",
      desc: "Las evaluaciones y los datos de empresa se guardan localmente en tu ordenador, no en un archivo compartido.",
    },
    {
      title: "Copia en JSON",
      desc: "Exporta una copia de seguridad e impórtala en otro ordenador: la app solo acepta archivos válidos y comprueba su integridad.",
    },
    {
      title: "Acceso sin contraseña",
      desc: "Correo y código de un solo uso de 6 cifras válido 15 minutos: sin contraseñas que recordar o perder.",
    },
    {
      title: "Licencia y PUK",
      desc: "Cada plan tiene licencia y código PUK personal; los PDF restantes se ven siempre arriba.",
    },
  ],
  forLabel: "Para quién",
  forH2: "Para quien gestiona envases reutilizables",
  forList: [
    {
      title: "Fabricantes de envases",
      desc: "Declaran la reutilizabilidad de su modelo y preparan la documentación técnica.",
    },
    {
      title: "Usuarios y envasadores",
      desc: "Comprueban los requisitos de los envases que ponen en circulación.",
    },
    {
      title: "Reacondicionadores",
      desc: "Documentan inspección, limpieza, reparación y control final.",
    },
    {
      title: "Consultores y responsables de calidad",
      desc: "Gestionan varias evaluaciones, duplican variantes y generan informes con los datos de la empresa.",
    },
  ],
  plansLabel: "Planes",
  plansH2: "¿Cuántos informes necesitas?",
  plansP:
    "Cada plan incluye un número de exportaciones PDF. Cuando se agotan, puedes seguir consultando y editando las evaluaciones y exportarlas en JSON.",
  plans: [
    {
      name: "Uso único",
      days: "2 días",
      pdf: "1 PDF",
    },
    {
      name: "Mensual",
      days: "30 días",
      pdf: "20 PDF",
    },
    {
      name: "Anual",
      days: "365 días",
      pdf: "300 PDF",
    },
  ],
  plansNote: "Precios y compra en los botones de abajo.",
  faqLabel: "FAQ",
  faqH2: "Preguntas frecuentes",
  faq: [
    {
      q: "¿La app sustituye una revisión técnica o legal?",
      a: "No. Es una herramienta de apoyo que organiza los requisitos y genera el informe. La veracidad de las respuestas y la responsabilidad de la declaración recaen en quien la elabora y en el responsable técnico que firma.",
    },
    {
      q: "¿Qué significa N.A.?",
      a: "No aplicable al caso concreto. Siempre requiere una justificación técnica en las notas, que aparece en el informe.",
    },
    {
      q: "¿Dónde se guardan mis datos?",
      a: "En el navegador del ordenador que usas. Para trasladarlos a otro ordenador, exporta un archivo JSON e impórtalo. Si trabajas en un ordenador compartido, usa «Salir y borrar todo».",
    },
    {
      q: "¿Qué pasa cuando se agotan los PDF?",
      a: "La descarga del PDF se bloquea, pero puedes seguir consultando y editando las evaluaciones y usar la exportación JSON.",
    },
    {
      q: "¿Puedo evaluar varios envases y variantes?",
      a: "Sí. Las evaluaciones se guardan en una lista con búsqueda y puedes duplicar una para crear una variante sin volver a rellenarlo todo.",
    },
    {
      q: "¿Cómo se accede?",
      a: "Con tu correo y un código de un solo uso; en el primer acceso introduces la licencia y el PUK recibidos con la compra y aceptas las condiciones de uso.",
    },
    {
      q: "¿En qué idiomas está disponible?",
      a: "Interfaz en italiano, inglés, alemán y español, que se puede cambiar en cualquier momento.",
    },
  ],
  ctaH2: "Declara la reutilizabilidad de tus envases",
  ctaP: "Elige el plan que mejor se adapte a ti.",
  crossLabel: "¿Necesitas también la reciclabilidad?",
  crossText:
    "La app Reciclabilidad PPWR calcula el porcentaje de reciclabilidad y asigna el grado A, B o C.",
  crossBtn: "Descubre Reciclabilidad PPWR",
  imgAlt: [
    "Envases reutilizables (IBC, bidones, cajas) en un circuito de reutilización",
    "Esquema del circuito de reutilización: llenado, transporte, uso, devolución, reacondicionamiento",
    "Operario inspeccionando un contenedor reutilizable durante el reacondicionamiento",
    "Etiqueta con código QR y DataMatrix en un contenedor reutilizable",
    "Lista de evaluaciones con resultado apto, no apto e incompleto",
  ],
  placeholderTitle: "Imagen por preparar",
};

export const riusoPpwr = { it, en, de, es };

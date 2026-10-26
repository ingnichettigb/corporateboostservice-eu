/**
 * File: riciclo-ppwr.ts · Percorso: src/i18n/locales/pages/riciclo-ppwr.ts · Revisione: 2 · Data: 25/10/2026 · Ora: 19:56
 */
type T = { title: string; desc: string };
type Locale = {
  metaTitle: string; metaDescription: string; back: string;
  eyebrow: string; h1: string; heroP: string; keyPoints: string;
  shotsLabel: string; shotsH2: string; imgAlt: Record<string, string>;
  whatLabel: string; whatH2: string; whatP: string; tags: string[];
  featLabel: string; featH2: string; features: T[];
  stepsLabel: string; stepsH2: string; steps: T[];
  whyLabel: string; whyH2: string; why: T[];
  pdfLabel: string; pdfH2: string; pdfPoints: string[]; pdfNote: string;
  pdf: { company: string; program: string; title: string; colComp: string; colWeight: string; colIdx: string; rows: [string, string, string][]; result: string; place: string; date: string; ref: string; sign: string; footer: string; page: string };
  secLabel: string; secH2: string; security: T[];
  faqLabel: string; faqH2: string; faq: { q: string; a: string }[];
  ctaH2: string; ctaP: string;
};

const pdfRows: [string, string, string][] = [
  ["PET", "24,50 g", "100%"],
  ["HDPE", "2,10 g", "100%"],
  ["", "0,80 g", "0%"],
];

const it: Locale = {
  metaTitle: "Riciclabilità PPWR — Calcolo riciclabilità imballaggi Reg. UE 2025/40",
  metaDescription: "Calcola la percentuale di riciclabilità degli imballaggi secondo il Regolamento UE 2025/40 (PPWR), assegna il grado A, B o C e genera il PDF per il fascicolo tecnico.",
  back: "Torna alle applicazioni",
  eyebrow: "Riciclabilità PPWR · Regolamento UE 2025/40",
  h1: "Riciclabilità PPWR, calcolata in un click",
  heroP: "Lo strumento professionale per calcolare la percentuale di riciclabilità di un imballaggio a partire dai suoi componenti, assegnare il grado e generare il PDF per il fascicolo tecnico.",
  keyPoints: "Calcolo ponderale automatico · Gradi A, B, C · PDF con logo aziendale · Multilingua",
  shotsLabel: "Nell'app", shotsH2: "Le schermate principali",
  imgAlt: { m001: "Imballaggi campione su un banco di laboratorio: bottiglia PET, vetro, tappo, tubetto e scatola", m002: "Come funziona il calcolo: componenti, calcolo ponderale e percentuale di riciclabilità", m003: "Scala dei gradi A, B, C con le soglie 95%, 80% e 70%", m004: "Linea di selezione di un impianto di riciclo con bottiglie PET e balle di plastica", m005: "Tappo su una bilancia analitica di precisione", m006: "Storyboard in quattro passi: dati del prodotto, componenti, calcolo, salvataggio e PDF", m007: "Editor della valutazione con bilancio di massa, risultato e soglie dell'Allegato II", m008: "Impostazioni: dati dell'azienda e logo da usare nei report", m009: "Archivio delle valutazioni con percentuale e grado", m010: "Anteprima del report PDF per il fascicolo tecnico", m011: "Accesso sicuro: verifica e-mail, licenza con codice PUK e quota di export PDF", m012: "Componenti di un imballaggio PET: corpo, tappo, etichetta e colla" },
  whatLabel: "Conformità europea",
  whatH2: "Il calcolo della riciclabilità, semplice e tracciabile",
  whatP: "L'app calcola la riciclabilità su base ponderale. Per ogni componente si inserisce peso e indice di riciclabilità (0-100%). L'app calcola massa totale, massa riciclabile e percentuale complessiva, poi assegna il grado.",
  tags: ["Reg. UE 2025/40", "Calcolo ponderale", "Gradi A/B/C", "PDF per fascicolo tecnico"],
  featLabel: "Funzionalità", featH2: "Funzionalità principali",
  features: [
    { title: "Distinta componenti", desc: "Nome, materiale, peso e indice di riciclabilità per ogni parte: corpo, tappo, etichetta, strati, colla." },
    { title: "Calcolo automatico", desc: "Massa totale, massa riciclabile e percentuale complessiva in tempo reale." },
    { title: "Gradi PPWR", desc: "Grado A \"Eccellenza\" (≥ 95%), Grado B \"Alta riciclabilità\" (≥ 80%), Grado C \"Soglia minima di ammissibilità\" (≥ 70%), sotto il 70% \"Non conforme\"." },
    { title: "Dati aziendali e logo", desc: "Ragione sociale, indirizzo, P.IVA, referente e logo compaiono nei PDF." },
    { title: "Esempi pronti", desc: "Al primo accesso trovi tre valutazioni di esempio: Tubetto dentifricio, Bottiglia PET, Bottiglia VETRO." },
    { title: "Archivio e import/export", desc: "Valutazioni salvate e scambiabili in formato JSON standard PPWR-1.0." },
    { title: "Multilingua", desc: "Italiano, inglese, tedesco e spagnolo." },
  ],
  stepsLabel: "Come funziona", stepsH2: "Quattro passi, dal prodotto al PDF",
  steps: [
    { title: "Dati del prodotto", desc: "Nome imballaggio, revisione, data e note." },
    { title: "Componenti", desc: "Aggiungi ogni parte con materiale, peso e indice di riciclabilità." },
    { title: "Calcola", desc: "L'app mostra percentuale e grado." },
    { title: "Salva e scarica", desc: "Archivia la valutazione e genera il PDF." },
  ],
  whyLabel: "Vantaggi", whyH2: "Perché scegliere Riciclabilità PPWR",
  why: [
    { title: "Calcolo rapido", desc: "Il risultato in pochi minuti, senza fogli di calcolo." },
    { title: "Sempre tracciabile", desc: "Ogni valutazione ha revisione, data e note." },
    { title: "Risultati coerenti tra reparti", desc: "Stesso metodo per qualità, acquisti e progettazione." },
    { title: "Pronto per il fascicolo tecnico", desc: "PDF strutturato da allegare alla documentazione." },
    { title: "Gradi chiari", desc: "A, B, C o non conforme: lettura immediata." },
    { title: "Quattro lingue", desc: "Italiano, inglese, tedesco e spagnolo." },
  ],
  pdfLabel: "Report", pdfH2: "Anteprima del PDF",
  pdfPoints: ["Copertina con logo aziendale e logo del programma", "Tabella analitica dei componenti", "Percentuale e grado ben visibili", "Campi Luogo, Data e Referente compilabili nel PDF", "Spazio per la firma da compilare dopo il download", "Numerazione delle pagine"],
  pdfNote: "La firma si inserisce dopo il download del PDF.",
  pdf: { company: "Nome azienda", program: "Riciclabilità PPWR", title: "Valutazione di riciclabilità", colComp: "Componente", colWeight: "Peso", colIdx: "Indice", rows: [["Bottiglia PET", pdfRows[0][1], pdfRows[0][2]], ["Tappo HDPE", pdfRows[1][1], pdfRows[1][2]], ["Etichetta carta metallizzata", pdfRows[2][1], pdfRows[2][2]]], result: "Grado A — Eccellenza · 97,08%", place: "Luogo", date: "Data", ref: "Referente", sign: "Firma", footer: "Documento generato per il fascicolo tecnico di cui all'Allegato VII del Reg. (UE) 2025/40 — Nome azienda", page: "Pagina 1 di 1" },
  secLabel: "Accesso e sicurezza", secH2: "Accesso protetto e licenza controllata",
  security: [
    { title: "Verifica email", desc: "Accesso confermato con codice a 6 cifre." },
    { title: "Licenza con codice PUK", desc: "Attivazione guidata della licenza." },
    { title: "Quota di export PDF", desc: "Ogni licenza include una quota di export PDF." },
  ],
  faqLabel: "FAQ", faqH2: "Domande frequenti",
  faq: [
    { q: "Cos'è il Regolamento UE 2025/40 (PPWR)?", a: "È il Regolamento europeo sugli imballaggi e i rifiuti di imballaggio (PPWR), che introduce requisiti di riciclabilità e la valutazione per gradi degli imballaggi immessi sul mercato UE." },
    { q: "Come vengono assegnati i gradi A, B e C?", a: "In base alla percentuale ponderale di riciclabilità: A ≥ 95%, B ≥ 80%, C ≥ 70%. Sotto il 70% l'imballaggio risulta non conforme." },
    { q: "Posso inserire il logo della mia azienda nei PDF?", a: "Sì. Ragione sociale, indirizzo, P.IVA, referente e logo vengono riportati nei PDF generati." },
    { q: "Come si attiva la licenza?", a: "Dopo l'acquisto ricevi un codice PUK: l'attivazione guidata ti accompagna passo per passo." },
    { q: "Posso importare ed esportare le mie valutazioni?", a: "Sì, in formato JSON standard PPWR-1.0." },
    { q: "Il risultato ha valore legale?", a: "Ha valore di supporto tecnico; la responsabilità della valutazione finale resta del tecnico o dell'azienda che firma la documentazione." },
  ],
  ctaH2: "Calcola la riciclabilità dei tuoi imballaggi con Riciclabilità PPWR",
  ctaP: "Percentuale, grado e PDF per il fascicolo tecnico, in pochi minuti.",
};

const en: Locale = {
  metaTitle: "PPWR Recyclability — Packaging recyclability calculation EU Reg. 2025/40",
  metaDescription: "Calculate the recyclability percentage of packaging under EU Regulation 2025/40 (PPWR), assign grade A, B or C and generate the PDF for the technical file.",
  back: "Back to applications",
  eyebrow: "PPWR Recyclability · EU Regulation 2025/40",
  h1: "PPWR recyclability, calculated in one click",
  heroP: "The professional tool to calculate a packaging's recyclability percentage from its components, assign the grade and generate the PDF for the technical file.",
  keyPoints: "Automatic weight-based calculation · Grades A, B, C · PDF with company logo · Multilingual",
  shotsLabel: "In the app", shotsH2: "The main screens",
  imgAlt: { m001: "Packaging samples on a laboratory bench: PET bottle, glass, cap, tube and box", m002: "How the calculation works: components, weighted calculation and recyclability percentage", m003: "Scale of grades A, B, C with the 95%, 80% and 70% thresholds", m004: "Sorting line of a recycling plant with PET bottles and plastic bales", m005: "Cap on a precision analytical balance", m006: "Four-step storyboard: product data, components, calculation, save and PDF", m007: "Assessment editor with mass balance, result and Annex II thresholds", m008: "Settings: company data and logo used in reports", m009: "Assessment archive with percentage and grade", m010: "PDF report preview for the technical file", m011: "Secure access: email verification, licence with PUK code and PDF export quota", m012: "Components of a PET package: body, cap, label and glue" },
  whatLabel: "European compliance",
  whatH2: "Recyclability calculation, simple and traceable",
  whatP: "The app calculates recyclability on a weight basis. For each component you enter weight and recyclability index (0-100%). The app calculates total mass, recyclable mass and overall percentage, then assigns the grade.",
  tags: ["EU Reg. 2025/40", "Weight-based calculation", "Grades A/B/C", "PDF for technical file"],
  featLabel: "Features", featH2: "Main features",
  features: [
    { title: "Component list", desc: "Name, material, weight and recyclability index for each part: body, cap, label, layers, glue." },
    { title: "Automatic calculation", desc: "Total mass, recyclable mass and overall percentage in real time." },
    { title: "PPWR grades", desc: "Grade A \"Excellence\" (≥ 95%), Grade B \"High recyclability\" (≥ 80%), Grade C \"Minimum admissibility threshold\" (≥ 70%), below 70% \"Non-compliant\"." },
    { title: "Company data and logo", desc: "Company name, address, VAT number, contact person and logo appear in the PDFs." },
    { title: "Ready-made examples", desc: "On first access you find three sample assessments: Toothpaste tube, PET bottle, GLASS bottle." },
    { title: "Archive and import/export", desc: "Assessments saved and exchangeable in the standard PPWR-1.0 JSON format." },
    { title: "Multilingual", desc: "Italian, English, German and Spanish." },
  ],
  stepsLabel: "How it works", stepsH2: "Four steps, from product to PDF",
  steps: [
    { title: "Product data", desc: "Packaging name, revision, date and notes." },
    { title: "Components", desc: "Add each part with material, weight and recyclability index." },
    { title: "Calculate", desc: "The app shows percentage and grade." },
    { title: "Save and download", desc: "Archive the assessment and generate the PDF." },
  ],
  whyLabel: "Benefits", whyH2: "Why choose PPWR Recyclability",
  why: [
    { title: "Fast calculation", desc: "The result in minutes, no spreadsheets." },
    { title: "Always traceable", desc: "Every assessment has revision, date and notes." },
    { title: "Consistent results across departments", desc: "Same method for quality, purchasing and design." },
    { title: "Ready for the technical file", desc: "Structured PDF to attach to your documentation." },
    { title: "Clear grades", desc: "A, B, C or non-compliant: read at a glance." },
    { title: "Four languages", desc: "Italian, English, German and Spanish." },
  ],
  pdfLabel: "Report", pdfH2: "PDF preview",
  pdfPoints: ["Cover with company logo and program logo", "Analytical component table", "Clearly visible percentage and grade", "Place, Date and Contact person fields fillable in the PDF", "Signature space to complete after download", "Page numbering"],
  pdfNote: "The signature is added after downloading the PDF.",
  pdf: { company: "Company name", program: "PPWR Recyclability", title: "Recyclability assessment", colComp: "Component", colWeight: "Weight", colIdx: "Index", rows: [["PET bottle", pdfRows[0][1], pdfRows[0][2]], ["HDPE cap", pdfRows[1][1], pdfRows[1][2]], ["Metallised paper label", pdfRows[2][1], pdfRows[2][2]]], result: "Grade A — Excellence · 97.08%", place: "Place", date: "Date", ref: "Contact person", sign: "Signature", footer: "Document generated for the technical file referred to in Annex VII of Reg. (EU) 2025/40 — Company name", page: "Page 1 of 1" },
  secLabel: "Access and security", secH2: "Protected access and controlled licence",
  security: [
    { title: "Email verification", desc: "Access confirmed with a 6-digit code." },
    { title: "Licence with PUK code", desc: "Guided licence activation." },
    { title: "PDF export quota", desc: "Each licence includes a PDF export quota." },
  ],
  faqLabel: "FAQ", faqH2: "Frequently asked questions",
  faq: [
    { q: "What is EU Regulation 2025/40 (PPWR)?", a: "It is the European Packaging and Packaging Waste Regulation (PPWR), introducing recyclability requirements and grade-based assessment of packaging placed on the EU market." },
    { q: "How are grades A, B and C assigned?", a: "Based on the weight-based recyclability percentage: A ≥ 95%, B ≥ 80%, C ≥ 70%. Below 70% the packaging is non-compliant." },
    { q: "Can I add my company logo to the PDFs?", a: "Yes. Company name, address, VAT number, contact person and logo are shown in the generated PDFs." },
    { q: "How is the licence activated?", a: "After purchase you receive a PUK code: the guided activation takes you step by step." },
    { q: "Can I import and export my assessments?", a: "Yes, in the standard PPWR-1.0 JSON format." },
    { q: "Does the result have legal value?", a: "It has technical support value; responsibility for the final assessment remains with the technician or company signing the documentation." },
  ],
  ctaH2: "Calculate your packaging recyclability with PPWR Recyclability",
  ctaP: "Percentage, grade and PDF for the technical file, in minutes.",
};

const de: Locale = {
  metaTitle: "PPWR-Recyclingfähigkeit — Berechnung der Recyclingfähigkeit von Verpackungen VO (EU) 2025/40",
  metaDescription: "Berechnen Sie den Recyclingfähigkeitsanteil von Verpackungen nach Verordnung (EU) 2025/40 (PPWR), vergeben Sie die Stufe A, B oder C und erstellen Sie das PDF für die technischen Unterlagen.",
  back: "Zurück zu den Anwendungen",
  eyebrow: "PPWR-Recyclingfähigkeit · Verordnung (EU) 2025/40",
  h1: "PPWR-Recyclingfähigkeit, mit einem Klick berechnet",
  heroP: "Das professionelle Werkzeug, um den Recyclingfähigkeitsanteil einer Verpackung aus ihren Komponenten zu berechnen, die Stufe zu vergeben und das PDF für die technischen Unterlagen zu erstellen.",
  keyPoints: "Automatische gewichtsbasierte Berechnung · Stufen A, B, C · PDF mit Firmenlogo · Mehrsprachig",
  shotsLabel: "In der App", shotsH2: "Die wichtigsten Bildschirme",
  imgAlt: { m001: "Verpackungsmuster auf einem Labortisch: PET-Flasche, Glas, Verschluss, Tube und Karton", m002: "So funktioniert die Berechnung: Komponenten, gewichtete Berechnung und Recyclingfähigkeit in Prozent", m003: "Skala der Stufen A, B, C mit den Schwellen 95 %, 80 % und 70 %", m004: "Sortieranlage eines Recyclingwerks mit PET-Flaschen und Kunststoffballen", m005: "Verschluss auf einer analytischen Präzisionswaage", m006: "Storyboard in vier Schritten: Produktdaten, Komponenten, Berechnung, Speichern und PDF", m007: "Bewertungseditor mit Massenbilanz, Ergebnis und Schwellen aus Anhang II", m008: "Einstellungen: Firmendaten und Logo für die Berichte", m009: "Archiv der Bewertungen mit Prozentsatz und Stufe", m010: "Vorschau des PDF-Berichts für die technischen Unterlagen", m011: "Sicherer Zugang: E-Mail-Bestätigung, Lizenz mit PUK-Code und PDF-Exportkontingent", m012: "Komponenten einer PET-Verpackung: Körper, Verschluss, Etikett und Klebstoff" },
  whatLabel: "Europäische Konformität",
  whatH2: "Die Berechnung der Recyclingfähigkeit, einfach und nachvollziehbar",
  whatP: "Die App berechnet die Recyclingfähigkeit auf Gewichtsbasis. Für jede Komponente geben Sie Gewicht und Recyclingfähigkeitsindex (0-100%) ein. Die App berechnet Gesamtmasse, recycelbare Masse und Gesamtanteil und vergibt anschließend die Stufe.",
  tags: ["VO (EU) 2025/40", "Gewichtsbasierte Berechnung", "Stufen A/B/C", "PDF für technische Unterlagen"],
  featLabel: "Funktionen", featH2: "Hauptfunktionen",
  features: [
    { title: "Komponentenliste", desc: "Name, Material, Gewicht und Recyclingfähigkeitsindex für jedes Teil: Körper, Verschluss, Etikett, Schichten, Kleber." },
    { title: "Automatische Berechnung", desc: "Gesamtmasse, recycelbare Masse und Gesamtanteil in Echtzeit." },
    { title: "PPWR-Stufen", desc: "Stufe A \"Exzellenz\" (≥ 95%), Stufe B \"Hohe Recyclingfähigkeit\" (≥ 80%), Stufe C \"Mindestschwelle der Zulässigkeit\" (≥ 70%), unter 70% \"Nicht konform\"." },
    { title: "Firmendaten und Logo", desc: "Firmenname, Adresse, USt-IdNr., Ansprechpartner und Logo erscheinen in den PDFs." },
    { title: "Fertige Beispiele", desc: "Beim ersten Zugriff finden Sie drei Beispielbewertungen: Zahnpastatube, PET-Flasche, GLAS-Flasche." },
    { title: "Archiv und Import/Export", desc: "Bewertungen gespeichert und austauschbar im Standard-JSON-Format PPWR-1.0." },
    { title: "Mehrsprachig", desc: "Italienisch, Englisch, Deutsch und Spanisch." },
  ],
  stepsLabel: "So funktioniert es", stepsH2: "Vier Schritte, vom Produkt zum PDF",
  steps: [
    { title: "Produktdaten", desc: "Verpackungsname, Revision, Datum und Notizen." },
    { title: "Komponenten", desc: "Fügen Sie jedes Teil mit Material, Gewicht und Recyclingfähigkeitsindex hinzu." },
    { title: "Berechnen", desc: "Die App zeigt Anteil und Stufe." },
    { title: "Speichern und herunterladen", desc: "Bewertung archivieren und PDF erstellen." },
  ],
  whyLabel: "Vorteile", whyH2: "Warum PPWR-Recyclingfähigkeit",
  why: [
    { title: "Schnelle Berechnung", desc: "Ergebnis in wenigen Minuten, ohne Tabellenkalkulation." },
    { title: "Immer nachvollziehbar", desc: "Jede Bewertung mit Revision, Datum und Notizen." },
    { title: "Einheitliche Ergebnisse zwischen Abteilungen", desc: "Gleiche Methode für Qualität, Einkauf und Konstruktion." },
    { title: "Bereit für die technischen Unterlagen", desc: "Strukturiertes PDF zum Beifügen zur Dokumentation." },
    { title: "Klare Stufen", desc: "A, B, C oder nicht konform: sofort lesbar." },
    { title: "Vier Sprachen", desc: "Italienisch, Englisch, Deutsch und Spanisch." },
  ],
  pdfLabel: "Bericht", pdfH2: "PDF-Vorschau",
  pdfPoints: ["Deckblatt mit Firmenlogo und Programmlogo", "Analytische Komponententabelle", "Gut sichtbarer Anteil und Stufe", "Felder Ort, Datum und Ansprechpartner im PDF ausfüllbar", "Unterschriftsfeld zum Ausfüllen nach dem Download", "Seitennummerierung"],
  pdfNote: "Die Unterschrift wird nach dem Download des PDFs eingefügt.",
  pdf: { company: "Firmenname", program: "PPWR-Recyclingfähigkeit", title: "Bewertung der Recyclingfähigkeit", colComp: "Komponente", colWeight: "Gewicht", colIdx: "Index", rows: [["PET-Flasche", pdfRows[0][1], pdfRows[0][2]], ["HDPE-Verschluss", pdfRows[1][1], pdfRows[1][2]], ["Etikett aus metallisiertem Papier", pdfRows[2][1], pdfRows[2][2]]], result: "Stufe A — Exzellenz · 97,08%", place: "Ort", date: "Datum", ref: "Ansprechpartner", sign: "Unterschrift", footer: "Dokument erstellt für die technischen Unterlagen gemäß Anhang VII der VO (EU) 2025/40 — Firmenname", page: "Seite 1 von 1" },
  secLabel: "Zugang und Sicherheit", secH2: "Geschützter Zugang und kontrollierte Lizenz",
  security: [
    { title: "E-Mail-Verifizierung", desc: "Zugang bestätigt mit 6-stelligem Code." },
    { title: "Lizenz mit PUK-Code", desc: "Geführte Lizenzaktivierung." },
    { title: "PDF-Exportkontingent", desc: "Jede Lizenz enthält ein PDF-Exportkontingent." },
  ],
  faqLabel: "FAQ", faqH2: "Häufige Fragen",
  faq: [
    { q: "Was ist die Verordnung (EU) 2025/40 (PPWR)?", a: "Die europäische Verordnung über Verpackungen und Verpackungsabfälle (PPWR), die Anforderungen an die Recyclingfähigkeit und eine stufenbasierte Bewertung von Verpackungen auf dem EU-Markt einführt." },
    { q: "Wie werden die Stufen A, B und C vergeben?", a: "Anhand des gewichtsbasierten Recyclingfähigkeitsanteils: A ≥ 95%, B ≥ 80%, C ≥ 70%. Unter 70% ist die Verpackung nicht konform." },
    { q: "Kann ich mein Firmenlogo in die PDFs einfügen?", a: "Ja. Firmenname, Adresse, USt-IdNr., Ansprechpartner und Logo erscheinen in den erstellten PDFs." },
    { q: "Wie wird die Lizenz aktiviert?", a: "Nach dem Kauf erhalten Sie einen PUK-Code: Die geführte Aktivierung begleitet Sie Schritt für Schritt." },
    { q: "Kann ich meine Bewertungen importieren und exportieren?", a: "Ja, im Standard-JSON-Format PPWR-1.0." },
    { q: "Hat das Ergebnis rechtlichen Wert?", a: "Es dient der technischen Unterstützung; die Verantwortung für die endgültige Bewertung liegt beim Techniker oder Unternehmen, das die Dokumentation unterzeichnet." },
  ],
  ctaH2: "Berechnen Sie die Recyclingfähigkeit Ihrer Verpackungen mit PPWR-Recyclingfähigkeit",
  ctaP: "Anteil, Stufe und PDF für die technischen Unterlagen, in wenigen Minuten.",
};

const es: Locale = {
  metaTitle: "Reciclabilidad PPWR — Cálculo de reciclabilidad de envases Reg. UE 2025/40",
  metaDescription: "Calcula el porcentaje de reciclabilidad de los envases según el Reglamento UE 2025/40 (PPWR), asigna el grado A, B o C y genera el PDF para el expediente técnico.",
  back: "Volver a las aplicaciones",
  eyebrow: "Reciclabilidad PPWR · Reglamento UE 2025/40",
  h1: "Reciclabilidad PPWR, calculada en un clic",
  heroP: "La herramienta profesional para calcular el porcentaje de reciclabilidad de un envase a partir de sus componentes, asignar el grado y generar el PDF para el expediente técnico.",
  keyPoints: "Cálculo ponderal automático · Grados A, B, C · PDF con logotipo de empresa · Multilingüe",
  shotsLabel: "En la app", shotsH2: "Las pantallas principales",
  imgAlt: { m001: "Muestras de envases sobre una mesa de laboratorio: botella PET, vidrio, tapón, tubo y caja", m002: "Cómo funciona el cálculo: componentes, cálculo ponderal y porcentaje de reciclabilidad", m003: "Escala de grados A, B, C con los umbrales 95 %, 80 % y 70 %", m004: "Línea de clasificación de una planta de reciclaje con botellas PET y balas de plástico", m005: "Tapón sobre una balanza analítica de precisión", m006: "Storyboard en cuatro pasos: datos del producto, componentes, cálculo, guardado y PDF", m007: "Editor de la evaluación con balance de masa, resultado y umbrales del Anexo II", m008: "Ajustes: datos de la empresa y logotipo para los informes", m009: "Archivo de evaluaciones con porcentaje y grado", m010: "Vista previa del informe PDF para el expediente técnico", m011: "Acceso seguro: verificación de correo, licencia con código PUK y cuota de exportación de PDF", m012: "Componentes de un envase PET: cuerpo, tapón, etiqueta y cola" },
  whatLabel: "Conformidad europea",
  whatH2: "El cálculo de la reciclabilidad, sencillo y trazable",
  whatP: "La app calcula la reciclabilidad en base ponderal. Para cada componente se introduce el peso y el índice de reciclabilidad (0-100%). La app calcula masa total, masa reciclable y porcentaje global, y luego asigna el grado.",
  tags: ["Reg. UE 2025/40", "Cálculo ponderal", "Grados A/B/C", "PDF para expediente técnico"],
  featLabel: "Funciones", featH2: "Funciones principales",
  features: [
    { title: "Lista de componentes", desc: "Nombre, material, peso e índice de reciclabilidad de cada parte: cuerpo, tapón, etiqueta, capas, adhesivo." },
    { title: "Cálculo automático", desc: "Masa total, masa reciclable y porcentaje global en tiempo real." },
    { title: "Grados PPWR", desc: "Grado A \"Excelencia\" (≥ 95%), Grado B \"Alta reciclabilidad\" (≥ 80%), Grado C \"Umbral mínimo de admisibilidad\" (≥ 70%), por debajo del 70% \"No conforme\"." },
    { title: "Datos de empresa y logotipo", desc: "Razón social, dirección, NIF-IVA, persona de contacto y logotipo aparecen en los PDF." },
    { title: "Ejemplos listos", desc: "En el primer acceso encontrarás tres evaluaciones de ejemplo: Tubo de pasta dental, Botella PET, Botella de VIDRIO." },
    { title: "Archivo e importación/exportación", desc: "Evaluaciones guardadas e intercambiables en formato JSON estándar PPWR-1.0." },
    { title: "Multilingüe", desc: "Italiano, inglés, alemán y español." },
  ],
  stepsLabel: "Cómo funciona", stepsH2: "Cuatro pasos, del producto al PDF",
  steps: [
    { title: "Datos del producto", desc: "Nombre del envase, revisión, fecha y notas." },
    { title: "Componentes", desc: "Añade cada parte con material, peso e índice de reciclabilidad." },
    { title: "Calcular", desc: "La app muestra porcentaje y grado." },
    { title: "Guardar y descargar", desc: "Archiva la evaluación y genera el PDF." },
  ],
  whyLabel: "Ventajas", whyH2: "Por qué elegir Reciclabilidad PPWR",
  why: [
    { title: "Cálculo rápido", desc: "El resultado en pocos minutos, sin hojas de cálculo." },
    { title: "Siempre trazable", desc: "Cada evaluación con revisión, fecha y notas." },
    { title: "Resultados coherentes entre departamentos", desc: "Mismo método para calidad, compras y diseño." },
    { title: "Listo para el expediente técnico", desc: "PDF estructurado para adjuntar a la documentación." },
    { title: "Grados claros", desc: "A, B, C o no conforme: lectura inmediata." },
    { title: "Cuatro idiomas", desc: "Italiano, inglés, alemán y español." },
  ],
  pdfLabel: "Informe", pdfH2: "Vista previa del PDF",
  pdfPoints: ["Portada con logotipo de empresa y del programa", "Tabla analítica de componentes", "Porcentaje y grado bien visibles", "Campos Lugar, Fecha y Persona de contacto rellenables en el PDF", "Espacio para la firma a completar tras la descarga", "Numeración de páginas"],
  pdfNote: "La firma se añade después de descargar el PDF.",
  pdf: { company: "Nombre de la empresa", program: "Reciclabilidad PPWR", title: "Evaluación de reciclabilidad", colComp: "Componente", colWeight: "Peso", colIdx: "Índice", rows: [["Botella PET", pdfRows[0][1], pdfRows[0][2]], ["Tapón HDPE", pdfRows[1][1], pdfRows[1][2]], ["Etiqueta de papel metalizado", pdfRows[2][1], pdfRows[2][2]]], result: "Grado A — Excelencia · 97,08%", place: "Lugar", date: "Fecha", ref: "Persona de contacto", sign: "Firma", footer: "Documento generado para el expediente técnico previsto en el Anexo VII del Reg. (UE) 2025/40 — Nombre de la empresa", page: "Página 1 de 1" },
  secLabel: "Acceso y seguridad", secH2: "Acceso protegido y licencia controlada",
  security: [
    { title: "Verificación por email", desc: "Acceso confirmado con código de 6 dígitos." },
    { title: "Licencia con código PUK", desc: "Activación guiada de la licencia." },
    { title: "Cuota de exportación PDF", desc: "Cada licencia incluye una cuota de exportación PDF." },
  ],
  faqLabel: "FAQ", faqH2: "Preguntas frecuentes",
  faq: [
    { q: "¿Qué es el Reglamento UE 2025/40 (PPWR)?", a: "Es el Reglamento europeo de envases y residuos de envases (PPWR), que introduce requisitos de reciclabilidad y la evaluación por grados de los envases comercializados en la UE." },
    { q: "¿Cómo se asignan los grados A, B y C?", a: "Según el porcentaje ponderal de reciclabilidad: A ≥ 95%, B ≥ 80%, C ≥ 70%. Por debajo del 70% el envase no es conforme." },
    { q: "¿Puedo incluir el logotipo de mi empresa en los PDF?", a: "Sí. Razón social, dirección, NIF-IVA, persona de contacto y logotipo aparecen en los PDF generados." },
    { q: "¿Cómo se activa la licencia?", a: "Tras la compra recibes un código PUK: la activación guiada te acompaña paso a paso." },
    { q: "¿Puedo importar y exportar mis evaluaciones?", a: "Sí, en formato JSON estándar PPWR-1.0." },
    { q: "¿El resultado tiene valor legal?", a: "Tiene valor de apoyo técnico; la responsabilidad de la evaluación final corresponde al técnico o a la empresa que firma la documentación." },
  ],
  ctaH2: "Calcula la reciclabilidad de tus envases con Reciclabilidad PPWR",
  ctaP: "Porcentaje, grado y PDF para el expediente técnico, en pocos minutos.",
};

export const ricicloPpwr = { it, en, de, es };

import json
p = "src/content/blog/002-fat-in-trasferta-collaudo/article.json"
d = json.load(open(p))

def figs(c1, c2):
    return [{"id": "figura-1", "src": "figura-1.jpg", "caption": c1},
            {"id": "figura-2", "src": "figura-2.jpg", "caption": c2}]

EN1 = "Technicians in front of an industrial machine searching for a certificate in the acceptance test dossier"
EN2 = "Well-organised FAT dossier with bilingual cover, table of contents and chapters for technical attachments"
DE1 = "Techniker vor einer Industriemaschine auf der Suche nach einem Zertifikat im Abnahmedossier"
DE2 = "Geordnetes FAT-Dossier mit zweisprachigem Deckblatt, Inhaltsverzeichnis und Kapiteln für technische Anlagen"
ES1 = "Técnicos frente a una máquina industrial buscando un certificado en el dosier de pruebas de aceptación"
ES2 = "Dosier FAT ordenado con portada bilingüe, índice y capítulos dedicados a los anexos técnicos"

EN = f"""## A carefully planned trip, an acceptance test stopped at the first check

You have been away for two days. The alarm goes off at six, then an hour's drive to the manufacturer's plant. Waiting for you are an important machine, months of engineering and an investment worth hundreds of thousands of euros.

Today is the day of the **Factory Acceptance Test, the FAT**: the moment to verify the machine before shipment. You organised the trip, agreed the schedule and prepared the activities. Finally you are standing in front of the equipment.

You open the folder for the initial document check. And that is exactly where the schedule breaks down.

The certificate for a critical component is missing. The declaration of conformity is available only in Italian, while a German version had also been requested for this order bound for Germany. The technical attachments show a different revision from the configuration of the machine you are about to test.

The quality manager calls the engineering office. Someone searches the server, someone else pulls a PDF from a phone, a colleague runs to the printer.

**The machine is right in front of you, but the FAT does not start.**

## When the problem is not the machine, but the dossier

Anyone who takes part in industrial acceptance tests, as a customer or as a manufacturer, knows situations like this well. It is not always a mechanical or electrical issue that slows the day down: often the first obstacle is the documentation.

A missing attachment looks like a small inconvenience. The problem appears when recovering it means involving several people, working out which version is correct and checking that the document really refers to the installed component.

Meanwhile, the time of the trip keeps running. Half a day can disappear into phone calls, searches and reprints instead of the planned tests.

The consequences affect both parties:

- **The customer** spends hours on site on tasks that could have been done from the office.
- **The manufacturer** has to interrupt the work of technicians and contacts to retrieve documents.
- **The test team** starts the operational checks with less time and more pressure.

The point is not to treat documentation as a nuisance. It is to recognise that **checking it for the first time on the day of the FAT means doing it too late**.

[[FIGURA: {EN1}]]

![{EN1}](figura-1.jpg)

## The FAT starts before you leave

To keep the acceptance test from stopping at the first page, the order of activities has to change. Collecting documents should not run alongside the machine tests as an emergency: it should come before them.

The goal is to arrive at the plant with a dossier that is already structured, completed by the manufacturer and checked in its documentary parts. This does not replace the technical tests and does not anticipate the outcome of the FAT. It does, however, let you face it without dragging open organisational issues along.

### Define right away what the dossier must contain

The first step is to prepare a clear structure. Before generically asking for "all the documentation", identify the scope of the FAT and the documents needed for that specific order.

It pays to clarify in advance:

- customer and manufacturer details;
- the machine concerned and the purpose of the test;
- the required certificates, declarations and attachments;
- the languages expected for the document pages;
- how the dossier chapters are organised.

A precise request makes life easier both for whoever supplies the documents and for whoever has to check them.

### Share the structure with the manufacturer

Once the dossier is set up, send it to the manufacturer. The chapters already in place become a practical guide: every certificate and every attachment has a defined place.

The manufacturer can then insert its documentation behind the prepared pages, following a shared order. There is less need to rebuild the dossier from scattered files, unclear names or messages received at different times.

It is also the right moment to raise any doubts, without the pressure of an imminent test.

### Check the content before the trip

The completed dossier should come back a few days before the FAT. From your own office you can check that attachments are present, revisions are consistent and the agreed language versions are available.

If something is missing, you ask for it. If a reference does not match, you clarify it with the manufacturer.

**Document review becomes a planned activity**, not an emergency handled with your suitcase still in the car.

## MiniFAT: less layout work, more organisation

Applying this method with Word files, Excel sheets and folders built from scratch every time can take a lot of manual work. Covers, tables of contents, company details and introductory pages must be updated and kept consistent.

**MiniFAT is designed to simplify and standardise the creation of FAT dossiers**, offering a dedicated path for preparing the file.

The flow starts with entering manufacturer and customer details. It continues with guided entry of the test scope and selection of the required documents, up to PDF generation.

### A consistent dossier without starting over every time

The application automatically generates **cover, table of contents, company details and document pages**. This means less attention on layout and more attention on defining the content that is actually needed.

Guided selection of certificates, declarations and attachments helps reduce omissions. Of course, it remains essential to check that the documents supplied are correct and relevant to the order: a tidy structure makes checking easier, it does not replace professional judgement.

### Bilingual support for international orders

MiniFAT supports bilingual documentation in **Italian, English, German and Spanish**.

For those working with foreign customers, preparing the document pages in the agreed languages from the start means one less task to chase right before departure.

The manufacturer's attachments must also be checked against the order requirements, without confusing the generation of bilingual pages with the verification of original certificates.

[[FIGURA: {EN2}]]

### Local PDF and reusable archive

The final PDF is generated **directly on your device**, without sending data to external servers to create it. This matters when the dossier contains confidential information or technical references.

MiniFAT also lets you keep FATs in an organised archive and reuse templates for later projects. This does not mean copying a dossier without checking it, but starting from an already organised base and adapting it to the new machine.

![{EN2}](figura-2.jpg)

## Arrive at the FAT to actually run the test

The benefit of this approach becomes clear on the day of the trip. You arrive at the plant, meet the contacts, put on your PPE and can focus on the planned checks, instead of starting by hunting for a certificate.

For the customer it means making better use of time on site. For the manufacturer it means presenting a well-kept dossier and a clearer organisation. For both it means fewer avoidable interruptions.

The FAT remains a moment of responsibility, in which the machine is assessed and any issues are addressed before shipment. That is exactly why it deserves documentation prepared to the same standard.

**Your next acceptance test does not have to stop at the first page.** Preparing the dossier in advance lets you keep the day for the part that truly needs you there: observing, checking and assessing the machine.

**Discover how MiniFAT works and organise your next FAT before you leave.**

[cta:/minifat]Discover MiniFAT and organise your next acceptance test[/cta]"""

DE = f"""## Eine sorgfältig geplante Dienstreise, eine Abnahme, die bei der ersten Prüfung stoppt

Sie sind seit zwei Tagen unterwegs. Der Wecker klingelt um sechs, dann eine Stunde Fahrt zum Werk des Herstellers. Dort warten eine wichtige Maschine, monatelange Konstruktionsarbeit und eine Investition von mehreren hunderttausend Euro.

Heute ist der Tag des **Factory Acceptance Test, des FAT**: der Moment, die Maschine vor dem Versand zu prüfen. Sie haben die Reise organisiert, die Zeiten abgestimmt und die Aktivitäten vorbereitet. Endlich stehen Sie vor der Anlage.

Sie öffnen die Mappe für die erste Dokumentenprüfung. Und genau dort gerät der Zeitplan ins Stocken.

Das Zertifikat eines kritischen Bauteils fehlt. Die Konformitätserklärung liegt nur auf Italienisch vor, obwohl für diesen Auftrag mit Ziel Deutschland auch die deutsche Fassung verlangt war. Die technischen Anlagen zeigen einen anderen Revisionsstand als die Konfiguration der Maschine, die Sie abnehmen sollen.

Der Qualitätsverantwortliche ruft die Konstruktion an. Jemand sucht auf dem Server, ein anderer holt ein PDF vom Handy, ein Kollege läuft zum Drucker.

**Die Maschine steht vor Ihnen, aber der FAT beginnt nicht.**

## Wenn nicht die Anlage das Problem ist, sondern das Dossier

Wer an industriellen Abnahmen teilnimmt, ob als Kunde oder als Hersteller, kennt solche Situationen. Nicht immer bremst ein mechanisches oder elektrisches Problem den Tag: Oft ist die Dokumentation das erste Hindernis.

Eine fehlende Anlage wirkt wie eine Kleinigkeit. Das Problem zeigt sich, wenn für ihre Beschaffung mehrere Personen eingebunden werden müssen, die richtige Version geklärt und geprüft werden muss, ob das Dokument wirklich das eingebaute Bauteil betrifft.

Währenddessen läuft die Zeit der Dienstreise weiter. Ein halber Tag kann mit Telefonaten, Suchen und Nachdrucken vergehen, statt für die geplanten Prüfungen genutzt zu werden.

Die Folgen treffen beide Seiten:

- **Der Kunde** verbringt Stunden im Werk mit Aufgaben, die er auch im Büro hätte erledigen können.
- **Der Hersteller** muss die Arbeit von Technikern und Ansprechpartnern unterbrechen, um Dokumente zu beschaffen.
- **Das Abnahmeteam** beginnt die praktischen Prüfungen mit weniger Zeit und mehr Druck.

Es geht nicht darum, Dokumentation als lästig zu betrachten. Es geht darum zu erkennen, dass **sie erst am Tag des FAT zum ersten Mal zu prüfen, zu spät ist**.

[[FIGURA: {DE1}]]

![{DE1}](figura-1.jpg)

## Der FAT beginnt vor der Abreise

Damit die Abnahme nicht beim ersten Blatt stehen bleibt, muss sich die Reihenfolge der Aktivitäten ändern. Die Dokumentensammlung sollte die Maschinenprüfungen nicht im Notfallmodus begleiten, sondern ihnen vorausgehen.

Ziel ist es, mit einem bereits strukturierten Dossier ins Werk zu kommen, das vom Hersteller vervollständigt und in seinen Dokumententeilen geprüft wurde. Das ersetzt nicht die technischen Prüfungen und nimmt das Ergebnis der Abnahme nicht vorweg. Es erlaubt aber, sie ohne offene organisatorische Probleme anzugehen.

### Sofort festlegen, was das Dossier enthalten muss

Der erste Schritt ist eine klare Struktur. Statt pauschal „die gesamte Dokumentation“ anzufordern, sollten Gegenstand des FAT und die für diesen konkreten Auftrag nötigen Dokumente bestimmt werden.

Vorab sollte geklärt werden:

- die Stammdaten von Kunde und Hersteller;
- die betroffene Maschine und der Zweck der Abnahme;
- die geforderten Zertifikate, Erklärungen und Anlagen;
- die vorgesehenen Sprachen der Dokumentenseiten;
- die Gliederung der Kapitel des Dossiers.

Eine präzise Anfrage erleichtert die Arbeit derjenigen, die die Dokumente liefern, und derjenigen, die sie prüfen.

### Die Struktur mit dem Hersteller teilen

Ist das Dossier vorbereitet, wird es an den Hersteller gesendet. Die bereits angelegten Kapitel werden zum praktischen Leitfaden: Jedes Zertifikat und jede Anlage hat einen festen Platz.

Der Hersteller kann seine Dokumentation hinter den vorbereiteten Seiten einfügen und folgt dabei einer gemeinsamen Ordnung. Das Dossier muss seltener aus verstreuten Dateien, unklaren Namen oder zu verschiedenen Zeitpunkten erhaltenen Nachrichten rekonstruiert werden.

Es ist auch der richtige Moment, Unklarheiten anzusprechen, ohne den Druck einer unmittelbar bevorstehenden Abnahme.

### Den Inhalt vor der Reise prüfen

Das vollständige Dossier sollte einige Tage vor dem FAT zurückkommen. Vom eigenen Büro aus lassen sich das Vorhandensein der Anlagen, die Stimmigkeit der Revisionsstände und die Verfügbarkeit der vereinbarten Sprachfassungen prüfen.

Fehlt etwas, wird es nachgefordert. Passt ein Verweis nicht, wird er mit dem Hersteller geklärt.

**Die Dokumentenprüfung wird zu einer geplanten Tätigkeit**, nicht zu einem Notfall mit dem Koffer noch im Auto.

## MiniFAT: weniger Layoutarbeit, mehr Organisation

Diese Methode mit Word-Dateien, Excel-Tabellen und jedes Mal neu angelegten Ordnern umzusetzen, erfordert viel Handarbeit. Deckblätter, Inhaltsverzeichnisse, Stammdaten und Einleitungsseiten müssen aktualisiert und konsistent gehalten werden.

**MiniFAT wurde entwickelt, um die Erstellung von FAT-Dossiers zu vereinfachen und zu standardisieren**, mit einem eigenen Ablauf für die Vorbereitung der Unterlagen.

Der Ablauf beginnt mit der Eingabe der Daten von Hersteller und Kunde. Es folgen die geführte Beschreibung des Abnahmegegenstands und die Auswahl der geforderten Dokumente bis zur Erstellung des PDF.

### Ein konsistentes Dossier, ohne jedes Mal neu anzufangen

Die Anwendung erstellt automatisch **Deckblatt, Inhaltsverzeichnis, Stammdaten und Dokumentenseiten**. So bleibt weniger Aufmerksamkeit für das Layout und mehr für die Festlegung der wirklich benötigten Inhalte.

Die geführte Auswahl von Zertifikaten, Erklärungen und Anlagen hilft, Versäumnisse zu reduzieren. Natürlich bleibt es unerlässlich zu prüfen, ob die gelieferten Dokumente korrekt und für den Auftrag relevant sind: Eine geordnete Struktur erleichtert die Prüfung, ersetzt aber nicht die fachliche Bewertung.

### Zweisprachige Unterstützung für internationale Aufträge

MiniFAT unterstützt zweisprachige Dokumentation in **Italienisch, Englisch, Deutsch und Spanisch**.

Wer mit ausländischen Kunden arbeitet, erspart sich durch die frühzeitige Vorbereitung der Dokumentenseiten in den vereinbarten Sprachen eine weitere Aufgabe kurz vor der Abreise.

Auch die Anlagen des Herstellers müssen anhand der Auftragsanforderungen geprüft werden, ohne die Erstellung zweisprachiger Seiten mit der Prüfung der Originalzertifikate zu verwechseln.

[[FIGURA: {DE2}]]

### Lokales PDF und wiederverwendbares Archiv

Das finale PDF wird **direkt auf dem Gerät** erstellt, ohne Daten dafür an externe Server zu senden. Das ist wichtig, wenn das Dossier vertrauliche Informationen oder technische Angaben enthält.

MiniFAT ermöglicht außerdem, FATs in einem geordneten Archiv aufzubewahren und Vorlagen für spätere Projekte wiederzuverwenden. Das heißt nicht, ein Dossier ungeprüft zu kopieren, sondern von einer bereits organisierten Basis auszugehen und sie an die neue Maschine anzupassen.

![{DE2}](figura-2.jpg)

## Zum FAT kommen, um wirklich abzunehmen

Der Vorteil dieses Ansatzes zeigt sich am Reisetag. Sie kommen ins Werk, treffen die Ansprechpartner, legen die PSA an und können sich auf die geplanten Prüfungen konzentrieren, statt mit der Suche nach einem Zertifikat zu beginnen.

Für den Kunden bedeutet das eine bessere Nutzung der Zeit vor Ort. Für den Hersteller ein gepflegtes Dossier und eine klarere Organisation. Für beide weniger vermeidbare Unterbrechungen.

Der FAT bleibt ein verantwortungsvoller Schritt, bei dem die Maschine bewertet und mögliche Mängel vor dem Versand behandelt werden. Gerade deshalb verdient er eine Dokumentationsvorbereitung auf gleichem Niveau.

**Ihre nächste Abnahme muss nicht beim ersten Blatt stehen bleiben.** Wer das Dossier im Voraus vorbereitet, hält den Tag frei für das, was Ihre Anwesenheit wirklich erfordert: die Maschine beobachten, prüfen und bewerten.

**Entdecken Sie, wie MiniFAT funktioniert, und organisieren Sie Ihren nächsten FAT vor der Abreise.**

[cta:/minifat]MiniFAT entdecken und die nächste Abnahme organisieren[/cta]"""

ES = f"""## Un viaje preparado al detalle, una prueba de aceptación detenida en la primera verificación

Llevas dos días fuera. El despertador suena a las seis y luego una hora de carretera hasta la planta del fabricante. Te esperan una máquina importante, meses de ingeniería y una inversión de cientos de miles de euros.

Hoy es el día del **Factory Acceptance Test, el FAT**: el momento de verificar la máquina antes del envío. Has organizado el viaje, acordado los horarios y preparado las actividades. Por fin estás frente a la instalación.

Abres la carpeta para el control inicial de los documentos. Y es justo ahí donde el programa se interrumpe.

Falta el certificado de un componente crítico. La declaración de conformidad solo está disponible en italiano, mientras que para ese pedido con destino a Alemania también se había solicitado la versión alemana. Los anexos técnicos indican una revisión distinta de la configuración de la máquina que debes probar.

El responsable de calidad llama a la oficina técnica. Alguien busca en el servidor, otro recupera un PDF desde el móvil, un compañero corre a la impresora.

**La máquina está delante de ti, pero el FAT no arranca.**

## Cuando el problema no es la instalación, sino el dosier

Quien participa en pruebas de aceptación industriales, como cliente o como fabricante, conoce bien estas situaciones. No siempre es un problema mecánico o eléctrico lo que frena la jornada: a menudo el primer obstáculo es la documentación.

Un anexo que falta parece un inconveniente menor. El problema surge cuando, para recuperarlo, hay que implicar a varias personas, averiguar cuál es la versión correcta y comprobar que el documento corresponde realmente al componente instalado.

Mientras tanto, el tiempo del viaje sigue corriendo. Media jornada puede perderse entre llamadas, búsquedas y reimpresiones, en lugar de dedicarse a las pruebas previstas.

Las consecuencias afectan a ambas partes:

- **El cliente** dedica horas de presencia en planta a tareas que podría haber hecho desde su oficina.
- **El fabricante** debe interrumpir el trabajo de técnicos y responsables para recuperar documentos.
- **El equipo de pruebas** empieza las verificaciones operativas con menos tiempo y más presión.

No se trata de considerar la documentación una molestia. Se trata de reconocer que **revisarla por primera vez el día del FAT es hacerlo demasiado tarde**.

[[FIGURA: {ES1}]]

![{ES1}](figura-1.jpg)

## El FAT empieza antes de salir

Para evitar que la prueba se bloquee en la primera hoja, hay que cambiar el orden de las actividades. La recopilación documental no debería acompañar de urgencia las pruebas de la máquina: debería precederlas.

El objetivo es llegar a la planta con un dosier ya estructurado, completado por el fabricante y verificado en sus partes documentales. Esto no sustituye las pruebas técnicas ni anticipa el resultado del FAT. Permite, en cambio, afrontarlo sin arrastrar problemas organizativos pendientes.

### Definir desde el principio qué debe contener el dosier

El primer paso es preparar una estructura clara. Antes de pedir de forma genérica «toda la documentación», conviene identificar el objeto del FAT y los documentos necesarios para ese pedido concreto.

Conviene aclarar con antelación:

- los datos del cliente y del fabricante;
- la máquina en cuestión y el objetivo de la prueba;
- los certificados, declaraciones y anexos requeridos;
- los idiomas previstos para las páginas documentales;
- la organización de los capítulos del dosier.

Una solicitud precisa facilita el trabajo de quien debe aportar los documentos y de quien tendrá que revisarlos.

### Compartir la estructura con el fabricante

Una vez preparado el dosier, se envía al fabricante. Los capítulos ya organizados se convierten en una guía concreta: cada certificado y cada anexo tienen un lugar definido.

El fabricante puede así insertar su documentación detrás de las páginas preparadas, siguiendo un orden compartido. Se reduce la necesidad de reconstruir el dosier a partir de archivos dispersos, nombres poco claros o mensajes recibidos en momentos distintos.

También es el momento adecuado para plantear dudas, sin la presión de una prueba inminente.

### Verificar el contenido antes del viaje

El dosier completo debería volver unos días antes del FAT. Desde la propia oficina se puede comprobar la presencia de los anexos, la coherencia de las revisiones y la disponibilidad de las versiones lingüísticas acordadas.

Si falta algo, se solicita. Si una referencia no cuadra, se aclara con el fabricante.

**La revisión documental se convierte en una actividad planificada**, no en una urgencia gestionada con la maleta todavía en el coche.

## MiniFAT: menos maquetación, más organización

Aplicar este método con archivos Word, hojas Excel y carpetas creadas desde cero cada vez puede exigir mucho trabajo manual. Portadas, índices, datos de las empresas y páginas introductorias deben actualizarse y mantenerse coherentes.

**MiniFAT nace para simplificar y estandarizar la creación de dosieres FAT**, ofreciendo un recorrido dedicado a la preparación del expediente.

El flujo comienza con la introducción de los datos del fabricante y del cliente. Continúa con la descripción guiada del objeto de la prueba y la selección de los documentos requeridos, hasta la generación del PDF.

### Un dosier coherente sin empezar de cero cada vez

La aplicación genera automáticamente **portada, índice, datos de las empresas y páginas documentales**. Así se dedica menos atención a la maquetación y más a definir los contenidos realmente necesarios.

La selección guiada de certificados, declaraciones y anexos ayuda a reducir olvidos. Naturalmente, sigue siendo esencial comprobar que los documentos aportados sean correctos y pertinentes para el pedido: una estructura ordenada facilita la revisión, no sustituye la valoración profesional.

### Soporte bilingüe para pedidos internacionales

MiniFAT permite crear documentación bilingüe en **italiano, inglés, alemán y español**.

Para quien trabaja con clientes extranjeros, preparar desde el principio las páginas documentales en los idiomas acordados significa evitar otra tarea que perseguir justo antes de partir.

También los anexos del fabricante deben revisarse frente a los requisitos del pedido, sin confundir la generación de páginas bilingües con la verificación de los certificados originales.

[[FIGURA: {ES2}]]

### PDF local y archivo reutilizable

El PDF final se genera **directamente en el dispositivo**, sin enviar datos a servidores externos para crearlo. Es un aspecto relevante cuando el dosier contiene información confidencial o referencias técnicas.

MiniFAT permite además conservar los FAT en un archivo ordenado y reutilizar las plantillas en proyectos posteriores. No significa copiar un dosier sin revisarlo, sino partir de una base ya organizada y adaptarla a la nueva máquina.

![{ES2}](figura-2.jpg)

## Llegar al FAT para hacer realmente la prueba

La ventaja de este enfoque se hace evidente el día del viaje. Llegas a la planta, te reúnes con los responsables, te pones los EPI y puedes concentrarte en las verificaciones previstas, en lugar de empezar buscando un certificado.

Para el cliente significa aprovechar mejor el tiempo en planta. Para el fabricante, presentarse con un dosier cuidado y una organización más clara. Para ambos, reducir las interrupciones evitables.

El FAT sigue siendo un momento de responsabilidad, en el que se evalúa la máquina y se abordan las posibles incidencias antes del envío. Precisamente por eso merece una preparación documental a la altura.

**Tu próxima prueba de aceptación no tiene por qué detenerse en la primera hoja.** Preparar el dosier con antelación permite reservar la jornada para lo que realmente requiere tu presencia: observar, verificar y evaluar la máquina.

**Descubre cómo funciona MiniFAT y organiza tu próximo FAT antes de salir.**

[cta:/minifat]Descubre MiniFAT y organiza tu próxima prueba[/cta]"""

d["translations"]["en"] = {"title": "On-site FAT: the day the acceptance test stopped at the first page",
  "excerpt": "Checking that documentation is complete, compliant and up to date before the trip prevents delays in the Factory Acceptance Test.",
  "readingTime": "6 min", "topics": ["FAT and Acceptance Tests", "PED Directive", "Technical documentation"],
  "markdown": EN, "figures": figs(EN1, EN2)}
d["translations"]["de"] = {"title": "FAT vor Ort: der Tag, an dem die Abnahme beim ersten Blatt stehen blieb",
  "excerpt": "Wer Vollständigkeit, Konformität und Aktualität der Dokumentation vor der Reise prüft, vermeidet Verzögerungen beim Factory Acceptance Test.",
  "readingTime": "6 Min.", "topics": ["FAT und Abnahmen", "Druckgeräterichtlinie (PED)", "Technische Dokumentation"],
  "markdown": DE, "figures": figs(DE1, DE2)}
d["translations"]["es"] = {"title": "FAT en desplazamiento: el día en que la prueba se detuvo en la primera hoja",
  "excerpt": "Comprobar que la documentación esté completa, conforme y actualizada antes del viaje evita retrasos en el Factory Acceptance Test.",
  "readingTime": "6 min", "topics": ["FAT y pruebas de aceptación", "Directiva PED", "Documentación técnica"],
  "markdown": ES, "figures": figs(ES1, ES2)}
json.dump(d, open(p, "w"), ensure_ascii=False, indent=2)
print("ok", list(d["translations"]))

# Landing “Registro Credenziali Fornitori”

## Obiettivo
Creare una pagina prodotto singola, coerente con le landing CorporateBoostService, interamente disponibile in italiano, inglese, tedesco e spagnolo, e aggiungere la relativa card cliccabile nella pagina Applicazioni.

## Interventi
- Estendere il selettore lingua globale a IT, EN, DE ed ES, mantenendo l’italiano come lingua predefinita e traducendo nella nuova pagina anche header, footer, carrello e note fiscali necessarie.
- Creare `/registro-credenziali-fornitori` con:
  - hero, doppia CTA e mockup responsive del registro;
  - piano `040RegistroWEB-365` con pulsante carrello ID 18 e avviso acquisti in arrivo;
  - sezioni descrittive, funzionalità, flusso operativo, benefici, sicurezza, FAQ e CTA finale;
  - blocco prezzo ripetuto dopo ogni sezione principale.
- Aggiungere la card “Registro Credenziali Fornitori” nell’elenco Applicazioni e collegarla alla nuova pagina.
- Inserire la nuova pagina nella sitemap XML e nella mappa HTML, con metadati SEO dedicati.

## Dettagli tecnici
- Riutilizzo dei componenti esistenti per header, footer, pulsanti, accordion e disclaimer Paddle.
- Nessuna modifica a catalogo, database o flusso Paddle.
- La pagina userà il prodotto esistente `040RegistroWEB-365`, indice 18.
- Layout verificato su desktop e mobile, inclusi cambio lingua, link, scroll e aggiunta al carrello.

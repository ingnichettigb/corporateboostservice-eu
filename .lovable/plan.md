## Obiettivo
Nella pagina **Corsi** (`/corsi`) aggiungere un nuovo corso che compaia **per primo**, mantenendo lo stile delle card esistenti (come nell'immagine che hai postato). Tutti gli altri corsi già presenti riceveranno il **timbro "In costruzione"**.

## Nuovo corso (primo della lista)
Struttura testi della card:
- **GDPR e protezione dei dati** — titolo in grassetto
- **Guida pratica per l'addetto** — sottotitolo in grassetto
- "Tutto quello che l'addetto privacy deve sapere e fare ogni giorno" — testo descrittivo normale
- Pulsante **Iscriviti** (stesso stile degli altri)

Nota sul pulsante Iscriviti: per ora lo lascio **non attivo** (presente ma senza link), perché rimanderà a una landing page che stiamo ancora costruendo. Quando la landing sarà pronta lo colleghiamo.

Icona: userò un'icona coerente con lo stile (es. scudo/lucchetto, come la card Privacy che hai mostrato).

## Altri corsi
Gli altri corsi attuali (Privacy & Protezione Dati, GDPR per le Imprese, Sicurezza sul Lavoro, News Normative) riceveranno il **badge "In costruzione"** — lo stesso timbro giallo già usato nelle Applicazioni — e il loro pulsante Iscriviti resterà disattivato finché non saranno pronti.

## Dettagli tecnici
1. `src/data/site.ts`: aggiungo il nuovo item del corso in cima all'array `corsi` (con flag che indica corso attivo) e marco gli altri con `wip: true`.
2. `src/i18n/locales/it.json` e `en.json`: aggiungo le chiavi di testo del nuovo corso (titolo, sottotitolo, descrizione) e la chiave `wip` ("In costruzione" / "Under construction") nella sezione `corsi`.
3. `src/routes/corsi.tsx`: 
   - rendo la card capace di mostrare il sottotitolo in grassetto (solo per chi ce l'ha),
   - aggiungo il badge "In costruzione" sulle card `wip` (stesso stile di `applicazioni.tsx`),
   - disattivo il pulsante Iscriviti per le card `wip` e per il nuovo corso (in attesa della landing page).

## Cosa NON tocco
- Stile generale, header, footer e logica delle altre pagine.
- L'invio email degli altri corsi (resta invariato, ma i pulsanti wip sono disattivati).

Confermi e procedo?
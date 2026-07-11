# Uniformare la dicitura fiscale "+ iva e tasse"

## Obiettivo
Portare la stessa dicitura fiscale ovunque, come parte del testo del bottone, ed eliminare il badge separato "IVA/tasse escluse" che ora compare sotto il bottone.

Dicitura unificata (da un'unica fonte condivisa `taxDisclaimer.badge`):
- IT: `+ iva e tasse`
- EN: `+ VAT/tax`

Risultato sul bottone:
- IT: `Corso GRATIS – paghi solo l'attestato 40€ + iva e tasse`
- EN: `FREE course – pay only the 40€ certificate + VAT/tax`

## Cosa cambia, file per file

### 1. `src/i18n/taxDisclaimer.ts` (fonte unica della dicitura)
- Aggiorno il valore di `badge` per uniformarlo:
  - it → `+ iva e tasse`
  - en → `+ VAT/tax`
  - es → `+ IVA/impuestos` · de → `+ zzgl. MwSt.` (per coerenza)
- Rimuovo la chiave `badgeShort` (e dal tipo): non serve più, era il testo del badge separato "IVA/tasse escluse".
- La nota lunga `note` (paragrafo Paddle) resta invariata.

### 2. `src/components/TaxDisclaimer.tsx`
- Rimuovo il componente `TaxBadgeShort` (non più usato).
- Restano `TaxBadge` (span discreto che legge `badge`) e `TaxNote`.

### 3. `src/routes/corsi.tsx` (pagina Corsi)
- Accodo la dicitura al testo del bottone: `... 40€ + iva e tasse`, letta da `taxDisclaimer.badge` (stessa fonte).
- Rimuovo `<TaxBadgeShort className="text-center" />` sotto il bottone e il relativo import.

### 4. `src/routes/corso-gdpr-incaricati.tsx` (landing GDPR incaricati)
- Uso lo stesso bottone già presente (`FreeCourseButton`): accodo la stessa dicitura al testo del bottone.
- Rimuovo tutte le 6 occorrenze di `<TaxBadgeShort ... />` sotto i bottoni e il relativo import.

### 5. `src/routes/prezzi.tsx` (pagina Prezzi) — "anche il badge in Prezzi"
- Accanto a ogni prezzo aggiungo `<TaxBadge />` (`+ iva e tasse` / `+ VAT/tax`), sia nella tabella desktop sia nelle card mobile.
- La nota fiscale lunga sotto le tabelle (`TaxNote`) resta invariata.

### Effetto collaterale voluto (coerenza)
`TaxBadge` è già usato nei bottoni "Aggiungi al carrello" di `src/routes/pedflow.tsx`: cambiando `badge` diventeranno anch'essi `+ VAT/tax` / `+ iva e tasse`, in linea con l'uniformazione richiesta.

## Risposta alla tua domanda sulla tabella prezzi (/prezzi)
- Come si chiama / dove sta: la tabella è nella route `/prezzi`, file `src/routes/prezzi.tsx`.
- Struttura: due viste con gli stessi dati — tabella per desktop (`hidden md:block`) e lista di card per mobile (`md:hidden`).
- Dati: provengono da `pricingItems` in `src/i18n/locales/pages/legal.ts` (ID, codice, servizio, prezzo, durata + bottone carrello).
- Dicitura fiscale: il badge `+ iva e tasse` finirà accanto a ogni prezzo; la nota lunga Paddle resta subito sotto le tabelle.

## Verifica
- Typecheck (`tsgo`) per confermare che nessun riferimento residuo a `TaxBadgeShort`/`badgeShort` rompa il build.
- Controllo visivo su /corsi, /corso-gdpr-incaricati e /prezzi (IT ed EN) che i bottoni mostrino la dicitura inline e che non resti il badge separato.

## Fuori scope (non tocco)
Corso attivo (prezzo/funzionalità), form contatti, footer, e la nota fiscale lunga esistente.
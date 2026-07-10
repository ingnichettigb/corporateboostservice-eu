## Obiettivo
Adeguare il sito ai requisiti Paddle: rimuovere la card MOCA, uniformare il nome legale del titolare e nascondere in modo permanente il badge "Edit with Lovable".

## 1. Rimozione card "MOCA Serbatoi Inox"
La card è generata dall'array condiviso `applicazioni` in `src/data/site.ts` (usato sia dalla home che dalla pagina `/applicazioni`).

- Rimuovere la voce `{ icon: Container, key: "mocaSerbatoi", image: mocaSerbatoiLogo.url, wip: true }` dall'array.
- Rimuovere l'import ora inutilizzato `mocaSerbatoiLogo` e, se non più usato, l'icona `Container` da lucide-react.

Effetto: la card sparisce da home e da Applicazioni, sia come attiva che come "in costruzione". La rotta `/moca-serbatoi` e le traduzioni restano nel codice (non collegate) per una futura reintroduzione come SaaS.

## 2. Nome legale uniforme: "Nichetti Gian Battista"
Situazione attuale:
- `src/components/SiteFooter.tsx` → "Dott. Ing. Nichetti Gian Battista" (da correggere).
- `src/i18n/locales/pages/legal.ts` (2 punti) → già "Corporate Boost Service di Nichetti Gian Battista" (nome già corretto, si mantiene).

Azione:
- Nel footer sostituire "Dott. Ing. Nichetti Gian Battista" con "Nichetti Gian Battista".

Nessun'altra occorrenza del nome del titolare è presente nel sito (pagina contatti e altre pagine legali non lo riportano), quindi dopo la correzione del footer il nome sarà identico ovunque compaia.

## 3. Nascondere il badge "Edit with Lovable"
- Aggiungere in `src/styles.css` (foglio di stile globale importato dal layout condiviso, quindi valido su tutte le pagine) la regola:

```css
#lovable-badge {
  display: none !important;
}
```

- In aggiunta, impostare la visibilità del badge come nascosta tramite le impostazioni di pubblicazione (richiede piano Pro): copertura anche a livello di deploy.

## 4. Pubblicazione e verifica
- Ripubblicare il sito.
- Verificare che: la card MOCA non compaia su home e Applicazioni; il nome "Nichetti Gian Battista" sia coerente ovunque; il badge Lovable non appaia su nessuna pagina (home, Corsi, Applicazioni, Prezzi, ecc.).

## File coinvolti
- `src/data/site.ts` (rimozione voce MOCA + import inutilizzati)
- `src/components/SiteFooter.tsx` (nome legale)
- `src/styles.css` (regola CSS badge)
## Obiettivo

Spostare la dicitura "+ iva e tasse" **dentro** il bottone, subito dopo "50€/mese", esattamente come negli altri bottoni già fatti (es. `/corsi`, `/corso-gdpr-incaricati`), invece di mostrarla come riga separata sotto il bottone.

## Modifica

Un unico file: `src/components/MiniFatCta.tsx` (il bottone riutilizzabile usato in tutte le 8 posizioni della pagina `/minifat`).

- Rimuovere il wrapper `flex-col` con il `TaxBadge` posizionato sotto.
- Inserire il `TaxBadge` **all'interno** del bottone, subito dopo l'etichetta:
  risultato → `Attiva MiniFAT – 50€/mese + iva e tasse` (con "+ iva e tasse" più piccolo/attenuato, coerente con gli altri bottoni).

Poiché tutti gli 8 bottoni della pagina usano questo stesso componente, la correzione si applica automaticamente ovunque: hero, Cosa fa, Come funziona, Dentro l'app, Il metodo, Perché è indispensabile, Domande frequenti e CTA finale.

Nessun testo i18n cambia; nessun'altra sezione viene toccata.

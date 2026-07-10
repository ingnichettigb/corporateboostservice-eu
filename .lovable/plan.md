## Obiettivo
Rivedere i tre bottoni della card **corso GDPR addetto** (`gdprAddetto`) nella pagina `/corsi`. È l'unica card attiva; le altre restano invariate.

## Comportamento richiesto (solo card `gdprAddetto`)

```text
1° bottone  "Landing page"                         → /corso-gdpr-incaricati
2° bottone  "Informazioni"                          → apre email (invariato)
3° bottone  "Corso GRATIS – paghi solo             → aggiunge al carrello
             l'attestato 40€"                          l'articolo 02-GDPR-00 e
                                                        apre /carrello
```

Il 3° bottone sostituisce l'attuale "Preventivo". Al click:
- aggiunge al carrello **solo** l'articolo `Corso Privacy Addetto` (codice `02-GDPR-00`, 40€, durata 3 mesi, domain `02-gdpr-00.corporateboostservice.eu`) — stessi campi usati oggi da `AddBtn` in `/prezzi`;
- se già presente non lo duplica (il `CartProvider` già evita i duplicati);
- naviga a `/carrello`.

## Modifiche ai file

### 1. `src/routes/corsi.tsx`
- Importare `useCart` da `@/lib/cart`, `useNavigate` da `@tanstack/react-router` e un'icona adatta (`GraduationCap` o `ShoppingCart`).
- Definire la costante dell'articolo attestato (id/name/price/duration/domain) coerente con `pricingItems` (`02-gdpr-00`).
- Nel blocco della card, **solo per `key === "gdprAddetto"`**:
  - 1° bottone: mantenere il `Link to="/corso-gdpr-incaricati"` ma cambiare l'etichetta in `t("corsi.landingPage")`.
  - 3° bottone (`gdprAddetto`): rimpiazzare il bottone "Preventivo" con un `Button` che chiama `addItem(...)`, mostra un `toast.success` e poi `navigate({ to: "/carrello" })`, con etichetta `t("corsi.corsoGratis")`.
- Le altre card mantengono gli attuali tre bottoni (Iscriviti disabled, Informazioni, Preventivo).

### 2. Traduzioni corsi (`src/i18n/locales/it.json` e `en.json`, sezione `corsi`)
Aggiungere due chiavi:
- `landingPage`: IT "Landing page" · EN "Landing page"
- `corsoGratis`: IT "Corso GRATIS – paghi solo l'attestato 40€" · EN "FREE course – pay only the 40€ certificate"

## Note tecniche
- Solo frontend/presentazione: nessuna logica backend, nessun nuovo pacchetto.
- Il carrello persiste già in `localStorage` tramite `CartProvider`; `addItem` è idempotente.
- `toast` da `sonner` è già usato altrove nel progetto.

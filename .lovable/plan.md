## Conferme richieste

**Dove aggiungo il badge fiscale (chiave esistente o nuova): NUOVA chiave.**

La chiave breve `badge` in `src/i18n/taxDisclaimer.ts` esiste già, ma i suoi testi **non coincidono** con quelli richiesti e riusarla causerebbe due problemi:

| Lingua | `badge` attuale | Richiesto per Corsi |
|--------|-----------------|---------------------|
| IT | `+ IVA/tasse` (senza "escluse", volutamente) | `IVA/tasse escluse` |
| EN | `+ VAT/tax excluded` | `VAT/tax excluded` |
| ES | `+ IVA/impuestos excluidos` | `IVA/impuestos excluidos` |
| DE | `+ MwSt./Steuern zzgl.` | `zzgl. MwSt./Steuern` |

Modificare `badge` reintrodurrebbe "escluse" in italiano su PedFlow (dove era stato tolto di proposito) e cambierebbe l'ordine DE ovunque. Quindi aggiungo una **nuova chiave `badgeShort`** nella stessa costante condivisa (nessuna duplicazione: resta un'unica fonte a 4 lingue) con esattamente i testi richiesti, e un piccolo componente `TaxBadgeShort` che la legge.

**File che tocco (3):**
1. `src/i18n/taxDisclaimer.ts` — aggiungo la chiave `badgeShort` (IT/EN/ES/DE).
2. `src/components/TaxDisclaimer.tsx` — aggiungo `TaxBadgeShort` (stesso stile discreto di `TaxBadge`, legge `badgeShort`).
3. `src/routes/corsi.tsx` — badge sotto il bottone corso gratis, pulizia card in costruzione, spostamento sezione strumenti gratuiti.

Non tocco: corso attivo (funzionalità/prezzo), form contatti (`ContactSection`), footer.

## Interventi su `src/routes/corsi.tsx`

### 1. Badge fiscale sotto "Corso GRATIS – paghi solo l'attestato 40€"
Import di `TaxBadgeShort` e inserimento subito dopo il bottone `corsoGratis` (dentro il ramo `key === "gdprAddetto"`, sotto la `<Button>` alla riga 107), come testo piccolo centrato — non un box.

### 2. Card "Under construction" (le 4 card non-gdprAddetto)
Rimuovo, per il ramo `else` (WIP):
- il bottone "Enroll" (`corsi.iscriviti`, righe 85–89)
- il bottone "Buy the course" (`corsi.preventivoLabel`, righe 108–113)

Resta solo il bottone **"Information"** (`corsi.infoLabel`, righe 90–94), comune a tutte le card. Il corso attivo (gdprAddetto) mantiene invariati tutti i suoi bottoni.

### 3. Spostamento sezione "Strumenti gratuiti / Free tools"
Sposto l'intera `<section>` con `checklist.toolsTitle` + `ChecklistCTAs` (righe 124–130) da **sotto** la lista corsi a **subito dopo l'hero, prima del blocco corsi** (prima della `<section>` che contiene la griglia `corsi.map`). Nessuna modifica ai testi o al componente `ChecklistCTAs`.

## Dettaglio nuova chiave (`badgeShort`)

```text
it: "IVA/tasse escluse"
en: "VAT/tax excluded"
es: "IVA/impuestos excluidos"
de: "zzgl. MwSt./Steuern"
```

Riusabile in futuro su MiniFAT / Smart Maintenance importando `TaxBadgeShort`, senza duplicare testo.

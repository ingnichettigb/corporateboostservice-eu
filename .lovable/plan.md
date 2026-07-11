# Dicitura fiscale riusabile su PedFlow

Aggiungere una dicitura fiscale accanto a ogni prezzo (badge breve) e una nota estesa una sola volta, tramite una struttura dati condivisa a 4 lingue (IT/EN/ES/DE) e componenti riusabili, pronti per il riuso su MiniFAT e Smart Maintenance.

## 1. Nuovo file dati condiviso — `src/i18n/taxDisclaimer.ts`

Oggetto costante con badge e nota per le 4 lingue:

```text
export const taxDisclaimer = {
  it: { badge: "+ IVA/tasse escluse",  note: "I prezzi indicati si intendono al netto…" },
  en: { badge: "+ VAT/tax excluded",   note: "Prices shown are exclusive of tax…" },
  es: { badge: "+ IVA/impuestos excluidos", note: "Los precios indicados no incluyen impuestos…" },
  de: { badge: "+ MwSt./Steuern zzgl.", note: "Die angezeigten Preise verstehen sich zzgl. Steuern…" },
}
```

Testi esatti (come forniti):
- Nota IT: "I prezzi indicati si intendono al netto delle imposte. L'importo finale — comprensivo di IVA, GST o altra tassa applicabile in base al paese di fatturazione del cliente — viene calcolato automaticamente da Paddle al momento del checkout."
- Nota EN: "Prices shown are exclusive of tax. The final amount — including VAT, GST, or other applicable tax based on the customer's billing country — is calculated automatically by Paddle at checkout."
- Nota ES: "Los precios indicados no incluyen impuestos. El importe final —incluyendo IVA, GST u otro impuesto aplicable según el país de facturación del cliente— se calcula automáticamente mediante Paddle en el checkout."
- Nota DE: "Die angezeigten Preise verstehen sich zzgl. Steuern. Der Endbetrag — inklusive MwSt., GST oder anderer anfallender Steuern je nach Rechnungsland des Kunden — wird automatisch von Paddle beim Checkout berechnet."

## 2. Nuovo componente riusabile — `src/components/TaxDisclaimer.tsx`

Due export che leggono la lingua corrente da i18n (`useTranslation().i18n.language`) con fallback a `it` se la lingua non è tra le 4 previste:

- `TaxBadge` — `<span>` piccolo, meno enfatizzato del prezzo (es. `text-xs opacity-80`), da mettere accanto al prezzo dentro i bottoni.
- `TaxNote` — `<p>` con la nota estesa, stile coerente con le caption esistenti (es. `text-sm text-foreground/65`).

Entrambi accettano `className` opzionale per adattarsi al contesto (bottone scuro vs chiaro).

## 3. Modifiche a `src/routes/pedflow.tsx`

- Import di `TaxBadge` e `TaxNote`.
- Dentro `ActivateButton` (mensile) e `AnnualActivateButton` (annuale): affiancare `<TaxBadge />` all'etichetta prezzo. Questo copre automaticamente tutte le **9** istanze di `<ActivateButtons />` (righe 197, 229, 264, 301, 336, 376, 408, 433, 448) = **18 bottoni**, senza duplicare testo.
- Aggiungere `<TaxNote />` **una sola volta** nell'hero, subito dopo la riga `heroCaption` (dopo riga 201).

## 4. Vincoli rispettati

- Nessuna modifica a prezzi, CTA, layout o altre sezioni.
- Nessun intervento sul bug degli nbsp in "PDF GENERATO".
- ES/DE: la struttura dati è completa a 4 lingue; il componente le usa già. Finché il toggle header espone solo IT/EN, verranno mostrate IT/EN; ES/DE si attiveranno automaticamente quando il routing lingua sarà cablato — nessuna modifica ulteriore necessaria.

## Dettagli tecnici

- La costante NON entra nei namespace i18n esistenti (`pedflow` ha solo it/en): tenerla separata evita di dover ristrutturare `src/i18n/index.ts` e la rende importabile direttamente da qualsiasi app.
- Il componente determina la lingua con `i18n.language.split("-")[0]` e fa fallback a `it`, così è robusto anche con codici tipo `en-US`.
- Riuso futuro (MiniFAT, Smart Maintenance): basta importare `<TaxBadge />` nei bottoni prezzo e `<TaxNote />` una volta nella pagina.

## File

- `src/i18n/taxDisclaimer.ts` (nuovo)
- `src/components/TaxDisclaimer.tsx` (nuovo)
- `src/routes/pedflow.tsx` (badge nei 2 componenti bottone + nota in hero)
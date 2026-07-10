## Obiettivo
Rendere `pricingItems` (tabella in `/prezzi`) l'unica fonte di verità dei prezzi, così modificando quella tabella si aggiornano automaticamente anche i bottoni e le etichette nelle landing page Smart Maintenance, PedFlow e MiniFAT.

## Problema attuale
- I prezzi sono duplicati: `pricingItems` in `src/i18n/locales/pages/legal.ts` e oggetti locali (`SMART_MAINTENANCE_PLAN`, `PEDFLOW_PLAN`, ecc.) nelle route.
- Le etichette dei bottoni nei file di traduzione contengono il prezzo scritto a mano.
- C'è già una discrepanza: la tabella dice Smart Maintenance 60€/mese e 700€/anno, i bottoni dicono 70€/mese e 600€/anno.

## Soluzione proposta

### 1. Modulo di lookup prezzi centralizzato
Creare `src/lib/pricing.ts` che:
- importa `pricingItems` da `src/i18n/locales/pages/legal.ts`;
- espone `getPlanByCode(code)` per ottenere `{ id, code, name, price, duration }`;
- espone helper specifici per ogni prodotto, es. `getSmartMaintenanceMonthly()`, `getPedFlowAnnual()`, ecc.;
- espone funzioni per formattare la durata (`1 mese`, `12 mesi`) e il testo del bottone.

### 2. Aggiornare le route di vendita
In `src/routes/smart-maintenance.tsx`:
- sostituire `SMART_MAINTENANCE_PLAN` e `SMART_MAINTENANCE_ANNUAL_PLAN` con lookup da `src/lib/pricing.ts` usando i codici `001SmMntnnc-01` e `001SmMntnnc-12`;
- i bottoni leggeranno `price` e `duration` dal piano restituito.

In `src/routes/pedflow.tsx`:
- sostituire `PEDFLOW_PLAN` e `PEDFLOW_ANNUAL_PLAN` con lookup dai codici `011PedFlow-01` e `012PedFlow-12`.

In `src/routes/minifat.tsx`:
- sostituire lo `span` hardcoded `50€` con il prezzo live del codice `002MnFAT-01`;
- se il bottone finale aggiunge al carrello, collegarlo al piano `002MnFAT-12` o al piano scelto.

### 3. Etichette dinamiche
Nei file di traduzione:
- rimuovere il prezzo dalle stringhe `activateCta`, `annualActivateCta`, `activateMonthly`, `activateYearly`;
- usare placeholder o dividere in due parti: prefisso statico + prezzo/durata calcolato nel componente.

Esempio:
- IT: `activateCta: "Attiva subito per la tua azienda"`, poi in codice: `" — Solo {{price}}/mese"`.

### 4. Componente riutilizzabile (opzionale ma consigliato)
Creare un componente `PlanActivateButton` che:
- accetta `code`, `variant` (mensile/annuale), `className`;
- legge il piano da `pricingItems`;
- mostra prezzo e durata aggiornati;
- al click aggiunge al carrello e naviga a `/carrello`.

Questo riduce la duplicazione tra Smart Maintenance e PedFlow.

## File coinvolti
- `src/lib/pricing.ts` (nuovo)
- `src/i18n/locales/pages/legal.ts` (fonte di verità già esistente)
- `src/routes/prezzi.tsx` (nessuna modifica funzionale, solo verifica)
- `src/routes/smart-maintenance.tsx`
- `src/routes/pedflow.tsx`
- `src/routes/minifat.tsx`
- `src/i18n/locales/pages/smart-maintenance.ts`
- `src/i18n/locales/pages/pedflow.ts`

## Risultato atteso
Modificando solo i valori `price` in `pricingItems`, tutti i bottoni e le card delle landing page si aggiornano automaticamente, eliminando discrepanze e doppie modifiche.

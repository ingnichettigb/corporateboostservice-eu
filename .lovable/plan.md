## Obiettivo
Rimettere il **diagramma di processo PedFlow** nella sua posizione originale, sopra i pulsanti CTA del hero. Non serve riallegare nulla: l'immagine è già nel progetto (`src/assets/pedflow/pedflow-process-en.png.asset.json`).

## Cosa ripristino in `src/routes/pedflow.tsx`
1. **Import** del pointer asset:
   `import processAsset from "@/assets/pedflow/pedflow-process-en.png.asset.json";`
2. **Variabile** URL: `const processImg = processAsset.url;`
3. **`<img>` del diagramma** dentro l'hero, subito sopra il blocco dei pulsanti, con alt `t("processImgAlt")` (chiave di traduzione già esistente).

## Nota sul layout
L'hero ora è a colonna singola centrata (dopo la rimozione del logo beuta). Inserisco il diagramma centrato a piena larghezza del contenitore, così resta coerente con l'allineamento attuale.

## Cosa NON tocco
- Niente modifiche a pulsanti, invio mail o al logo beuta (che resta rimosso dall'hero).

Procedo così?
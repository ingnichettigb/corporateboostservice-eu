## Obiettivo
Rimuovere dalla landing page **PedFlow** l'immagine del logo della beuta NGB (quella nella tua schermata), che ho confermato essere visualizzata nell'area hero.

## Cosa ho individuato
- File: `src/routes/pedflow.tsx`
- L'immagine è renderizzata nel blocco `<figure>` accanto al titolo hero (righe 145-153), tramite `src={logoImg}` → `@/assets/apps/pedflow.png.asset.json`.
- È esattamente l'icona beuta NGB cerchiata di rosso che hai allegato.

## Modifiche previste
1. **Rimuovere il blocco `<figure>` con l'immagine** dall'hero (righe 145-153).
2. **Adattare il layout hero**: attualmente l'hero è una griglia a 2 colonne (`grid lg:grid-cols-2`). Senza l'immagine a destra, lo trasformo in colonna singola centrata/allineata così il testo non resta sbilanciato.

## Cosa NON tocco
- Il logo resta usato come `og:image` / `twitter:image` (metadati di condivisione) e nella pagina elenco applicazioni: lo lascio lì, a meno che tu non voglia rimuoverlo anche da quei punti.
- Nessuna modifica ai pulsanti o all'invio mail.

Confermi che devo procedere così?
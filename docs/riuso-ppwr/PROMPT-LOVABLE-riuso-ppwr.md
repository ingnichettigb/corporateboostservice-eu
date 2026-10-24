**File:** PROMPT-LOVABLE-riuso-ppwr.md · **Revisione:** 1 · **Data:** 24/10/2026 · **Ora:** 21:07

---

# Landing `/riuso-ppwr` — Riutilizzabilità PPWR

## Obiettivo
Sostituire il segnaposto «Contenuti della pagina in preparazione» della pagina `/riuso-ppwr` con la landing completa dell'app **Riutilizzabilità PPWR** (catalogo `070RiusoPPWR`), in italiano, inglese, tedesco e spagnolo, con lo stesso stile e gli stessi componenti della landing `/riciclo-ppwr`.

## File forniti (già pronti e verificati)
1. `riuso-ppwr.tsx` → **sostituisce integralmente** `src/routes/riuso-ppwr.tsx`
2. `riuso-ppwr.ts` → **nuovo file** `src/i18n/locales/pages/riuso-ppwr.ts` (testi IT/EN/DE/ES, già tradotti)

Il codice è già stato controllato con `tsc --noEmit` e `vite build` senza errori. **Non riscrivere, non rigenerare e non ritradurre i testi:** applica i file così come sono. Serve solo integrarli.

## Cosa NON modificare
- I bottoni d'acquisto (`PriceButtons` in pagina): sono i `PricingCartButton` già collegati a `product_catalog` con i codici `070RiusoPPWR-002`, `-030`, `-365` e gli indici 24, 25, 26. Così un cambio di prezzo nel database si propaga a tutti i bottoni della pagina. Resta anche il riquadro giallo «Acquisti in arrivo» e la nota fiscale `TaxNote`.
- `SiteHeader`, `SiteFooter`, selettore lingua, carrello, catalogo, database, Paddle.
- Nessuna nuova dipendenza.
- Stile: usa solo i token esistenti (`bg-primary`, `[background:var(--gradient-section-*)]`, `--shadow-card`, ecc.). Niente colori o font nuovi.

## Immagini e didascalie (regola del sito)
- Ogni immagine di contenuto ha **sempre** sotto di sé il codice univoco `[PAGINA]-[NNN]`, con il componente `MediaCode`. Mai su icone o loghi.
- Per questa pagina il prefisso è `RIUSOPPWR` e i codici sono `RIUSOPPWR-001` … `RIUSOPPWR-005`, in ordine progressivo di comparsa.
- Le 5 immagini non sono ancora pronte: nel file ci sono 5 riquadri tratteggiati (`MediaImage`) che mostrano il prompt, il formato e **già la didascalia sotto**.
- Quando una immagine è pronta, vale questa procedura: carica il file, copia l'URL e mettilo nel campo `src` dello slot corrispondente in `IMAGE_SLOTS`. La didascalia non va toccata.
- Se vuoi pubblicare prima di avere tutte le immagini, imposta `SHOW_PLACEHOLDERS = false`: i riquadri vuoti spariscono, quelli con `src` restano.

## Verifiche da fare dopo l'integrazione
- [ ] `/riuso-ppwr` si apre in IT, EN, DE, ES (`/en/riuso-ppwr`, `/de/riuso-ppwr`, `/es/riuso-ppwr`) senza testi mancanti.
- [ ] 3 bottoni d'acquisto per blocco, con prezzo e durata letti dal catalogo, indici 24/25/26.
- [ ] «Aggiungi al carrello» funziona e il carrello contiene il prodotto giusto.
- [ ] 5 riquadri immagine, ciascuno con la didascalia `RIUSOPPWR-00N` subito sotto.
- [ ] Layout corretto su mobile (nessuno scroll orizzontale) e con le opzioni di accessibilità del sito (testo grande, alto contrasto).
- [ ] Il link «Scopri Riciclabilità PPWR» porta a `/riciclo-ppwr`.
- [ ] Nessuna modifica a sitemap e mappa del sito: `/riuso-ppwr` c'è già.

---

## Prompt immagini per Nano Banana
Salva ogni immagine con il nome del codice (es. `RIUSOPPWR-001.png`). I prompt sono in inglese e senza testi né loghi, così non ci sono marchi da correggere.

| Codice | Dove compare | Formato | Prompt |
|---|---|---|---|
| RIUSOPPWR-001 | Hero, in fondo alla sezione iniziale | 16:9, 1600×900 | Photorealistic wide shot of a clean, modern logistics yard: stacked white reusable IBC containers in steel cages, grey steel drums and plastic crates on pallets, soft daylight, light blue and white colour palette, subtle circular arrows painted on the floor suggesting a reuse loop, professional corporate style. No text, no logos, no people. |
| RIUSOPPWR-002 | «Un imballaggio è riutilizzabile solo dentro un sistema» | 4:3, 1200×900 | Clean flat vector infographic on a white background: a circular reuse loop with five stages connected by arrows (fill, transport, use, return, inspect-clean-repair), a stylised IBC container icon at each stage, palette of blue shades (#0B3A8F, #3B82C4, #DCEBFA), rounded shapes, minimal and professional. No text labels, no logos. |
| RIUSOPPWR-003 | Sezione dei 23 requisiti (ricondizionamento) | 4:3, 1200×900 | Photorealistic medium shot of a technician in safety gloves and glasses inspecting a white reusable IBC container with steel cage inside a clean washing and reconditioning bay, holding a tablet, bright neutral lighting, shallow depth of field. No visible brand names, no readable text, face not in focus. |
| RIUSOPPWR-004 | «Sistema e tracciabilità» | 4:3, 1200×900 | Macro close-up photograph of a durable label on a reusable plastic container showing a QR code, a DataMatrix code and a small RFID tag, softly blurred warehouse background with more containers, cool blue tones, high detail. No readable text, no brand names. |
| RIUSOPPWR-005 | «I tuoi dati restano tuoi» (archivio) | 16:10, 1600×1000 | **Meglio uno screenshot reale** della dashboard dell'app (elenco valutazioni con badge verde IDONEO, rosso NON IDONEO, giallo INCOMPLETO). In alternativa: a laptop on a tidy desk showing a web app with a table list of records and green, red and amber status badges, blue and white interface, no real company names, no readable text. |

Opzionale, **senza didascalia** perché è un logo: un'icona/logo quadrato per la card «Riutilizzabilità PPWR» in `/applicazioni` (oggi senza immagine, a differenza di Riciclabilità PPWR). Se lo prepari, va aggiunto in `src/data/site.ts` e in `src/assets/apps/`.

---

## Da controllare prima di pubblicare (a carico tuo)
1. **Codice didascalia:** ho usato `RIUSOPPWR` e non `PPWR`, perché `/riciclo-ppwr` finisce con la stessa parola e i codici si sovrapporrebbero. Se preferisci un altro prefisso, si cambia la costante `MEDIA_PREFIX` in testa al file.
2. **Esportazioni PDF per piano (1, 20, 300):** sono scritte a mano nei testi, non lette dal database. Se cambi i piani vanno aggiornate nel file lingue (`plans`).
3. **Riferimenti normativi:** i blocchi «Art. 11», «Allegato VI parte B» e il numero 23 vengono dal manuale. Il testo pubblico non dice che la checklist replica lettera per lettera il regolamento, e la FAQ precisa che l'app è uno strumento di supporto e che la responsabilità resta del compilatore. Conviene far verificare la corrispondenza sul testo ufficiale del Reg. UE 2025/40.
4. **Scadenza della landing:** il riquadro «Acquisti in arrivo» resta finché Paddle non è attivo.

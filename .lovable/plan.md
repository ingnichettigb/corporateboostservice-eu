# Allineare i bottoni d'acquisto delle landing page alla pagina Prezzi

## Cosa ho capito

Nella tabella `/prezzi` ci sono ora 14 righe: per ogni applicazione esistono **tre** varianti (uso singolo `-002`, mensile `-030`, annuale `-365`), più i due corsi GDPR. Le landing page invece mostrano ancora solo **due** bottoni (mensile + annuale) e, in più, gli **indici** (il numerino in alto a sinistra del bottone) non corrispondono più al numero di riga della tabella Prezzi.

Stato attuale verificato:

```text
Prezzi (riga → codice)          Landing            Bottoni presenti      Indici usati
1  001SmMntnnc-002 (singolo)    /smart-maintenance mensile + annuale     2 e 1   (errati)
2  001SmMntnnc-030 (mensile)
3  001SmMntnnc-365 (annuale)
4  002MnFAT-002    (singolo)    /minifat           mensile + annuale     4 e 3   (errati)
5  002MnFAT-030
6  002MnFAT-365
7  011PedFlow-002  (singolo)    /pedflow           mensile + annuale     5 e 6   (errati)
8  011PedFlow-030
9  011PedFlow-365
10 001TARATURE-002 (singolo)    nessuna landing    —                     —
11 001TARATURE-030
12 001TARATURE-365
13 02-GDPR-00-090               /corso-gdpr-incaricati                   7 (ok)
14 01-GDPR-00-090               /corso-privacy-gdpr, /corsi              8 (errato, ora 14)
```

## Cosa farò

1. **Aggiungere il bottone "uso singolo"** accanto ai due esistenti su:
   - `/smart-maintenance` → `001SmMntnnc-002`
   - `/minifat` → `002MnFAT-002` (in tutti i gruppi CTA della pagina)
   - `/pedflow` → `011PedFlow-002`
   Ordine dei bottoni: uso singolo → mensile → annuale (dal più economico), stessa grafica e stesso componente `PricingCartButton`.

2. **Correggere gli indici** di tutti i bottoni perché combacino col numero di riga di `/prezzi` (es. Smart maintenance 1/2/3, MiniFAT 4/5/6, PedFlow 7/8/9, corsi 13 e 14).

3. **Nessuna nuova pagina per "Taratura Serbatoio"** (righe 10-12): resta acquistabile solo da `/prezzi`, salvo tua indicazione diversa.

## Dettagli tecnici

- `src/components/MiniFatCta.tsx`: passare da `annual?: boolean` a una variante `"single" | "monthly" | "annual"`, `MiniFatCtaGroup` renderizza i tre bottoni.
- `src/routes/pedflow.tsx`: aggiungere il wrapper del bottone uso singolo dove oggi ci sono i due esistenti.
- `src/routes/smart-maintenance.tsx`: aggiungere il terzo bottone e sistemare gli indici.
- `src/routes/corsi.tsx`, `src/routes/corso-privacy-gdpr.tsx`, `src/routes/corso-gdpr-incaricati.tsx`: solo aggiornamento indici.
- Prezzi, nomi e durate continuano a venire da `product_catalog` su Cloud: nessun valore hardcoded.

## Da confermare

- Vuoi che gli indici restino sincronizzati con le righe di `/prezzi`? (li allineo così)
- Serve anche una landing page per "Taratura Serbatoio"?

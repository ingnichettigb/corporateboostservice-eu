# Geografia Media e Registro Immagini (Stampone CBS)

Registro ufficiale e univoco dei media, cartelle e codici per CorporateBoostService.eu.
Ogni codice assegnato è **definitivo e immutabile nel tempo** (nessuna rinumerazione retroattiva).
Le icone e i loghi applicativi non portano codici MediaCode.

---

## 1. Mappa Prefissi e Cartelle Asset

| Pagina / Sezione | Cartella Asset | Prefisso Codice | Ultimo Codice Assegnato |
| :--- | :--- | :--- | :--- |
| **Riutilizzabilità PPWR** (`/riuso-ppwr`) | `src/assets/riuso-ppwr/` | `RIUSOPPWR-` | `RIUSOPPWR-003` |
| **Riciclabilità PPWR** (`/riciclo-ppwr`) | `src/assets/riciclo-ppwr/` | `RICICLOPPWR-` | *(in attesa contenuti)* |
| **Taratura Serbatoi** (`/taratura-serbatoi`) | `src/assets/tarature/` | `TARATURE-` | `TARATURE-001` |
| **miniFAT** (`/minifat`) | `src/assets/minifat/` | `MINFAT-` | `MINFAT-005` |
| **Smart Maintenance** (`/smart-maintenance`) | `src/assets/smart-maintenance/` | `SMART-` | `SMART-003` |
| **PEDFLOW** (`/pedflow`) | `src/assets/pedflow/` | `PEDFLOW-` | `PEDFLOW-001` |
| **Registro Credenziali** (`/registro-credenziali-fornitori`) | `src/assets/registro-credenziali/` | `REGWEB-` | `REGWEB-008` |
| **Corso GDPR Incaricati** (`/corso-gdpr-incaricati`) | `src/assets/gdpr-incaricati/` | `CORSOGDPR-` | `CORSOGDPR-001` |
| **Corso Privacy GDPR** (`/corso-privacy-gdpr`) | `src/assets/gdpr/` | `PRIVACYGDPR-` | *(in attesa contenuti)* |
| **Telecamere a Norma** (servizio Studio) | `src/assets/telecamere/` | `CAMERE-` | *(in attesa contenuti)* |
| **GPS Satellitare a Norma** (servizio Studio) | `src/assets/gps/` | `GPS-` | *(in attesa contenuti)* |
| **Blog CBS** (`/blog/$slug`) | `src/content/blog/<slug>/` | `BLOG-<NNN>-` | `BLOG-002-001` |
| **Loghi e Icone Applicazioni** (tutte) | `src/assets/apps/` | *Nessun codice* | *Loghi esenti da didascalia* |

---

## 2. Registro Dettagliato delle Immagini Censite

### Riutilizzabilità PPWR (`/riuso-ppwr`)
- Cartella: `src/assets/riuso-ppwr/`
- `RIUSOPPWR-001`: Schema di flusso — Flusso decisionale conformità PPWR (slot riservato)
- `RIUSOPPWR-002`: Fac-simile dichiarazione tecnica di riuso (slot riservato)
- `RIUSOPPWR-003`: `RIUSOPPWR-003.jpg` — Ciclo di ricondizionamento e ispezione imballaggi
- `RIUSOPPWR-004`: Interfaccia inserimento parametri ciclo (slot riservato)
- `RIUSOPPWR-005`: Tabella tracciabilità e rotazioni (slot riservato)
*Prossimo progressivo da assegnare: `RIUSOPPWR-006`*

### Taratura Serbatoi (`/taratura-serbatoi`)
- Cartella: `src/assets/tarature/`
- `TARATURE-001`: `TARATURE-001.png` — Immagine di confronto prima/dopo (calcolo manuale vs portale)
- *Nota geometrie*: Le 22 icone dei moduli (`TARATURE-003`..`024`) sono icone di servizio e mostrano a video solo il numero geometrico della scheda (es. modulo 17), senza badge alfanumerico.
*Prossimo progressivo immagini reali: `TARATURE-025`*

### miniFAT (`/minifat`)
- Cartella: `src/assets/minifat/`
- `MINFAT-001`: Schema flusso collaudo FAT
- `MINFAT-002`: Schermata principale archivio collaudi
- `MINFAT-003`: Schermata gestione documenti
- `MINFAT-004`: Schermata esecuzione test e spunte
- `MINFAT-005`: Fac-simile verbale FAT esportato in PDF
*Prossimo progressivo da assegnare: `MINFAT-006`*

### Smart Maintenance (`/smart-maintenance`)
- Cartella: `src/assets/smart-maintenance/`
- `SMART-001`: Schema ciclo manutenzione predittiva e preventiva
- `SMART-002`: Dashboard interventi e scadenze
- `SMART-003`: Scheda intervento e report esportabile
*Prossimo progressivo da assegnare: `SMART-004`*

### PEDFLOW (`/pedflow`)
- Cartella: `src/assets/pedflow/`
- `PEDFLOW-001`: Diagramma di flusso classificazione apparecchi a pressione (Direttiva PED 2014/68/UE)
*Prossimo progressivo da assegnare: `PEDFLOW-002`*

### Registro Credenziali Web (`/registro-credenziali-fornitori`)
- Cartella: `src/assets/registro-credenziali/`
- `REGWEB-001`: Cruscotto riepilogativo credenziali fornitori
- `REGWEB-005`: Scheda dettaglio assegnazione account
- `REGWEB-006`: Registro accessi e revoche
- `REGWEB-007`: Report di conformità audit
- `REGWEB-008`: Matrice permessi per fornitore
*Prossimo progressivo da assegnare: `REGWEB-009`*

### Corso GDPR Incaricati (`/corso-gdpr-incaricati`)
- Cartella: `src/assets/gdpr-incaricati/`
- `CORSOGDPR-001`: Struttura del percorso formativo e attestato
*Prossimo progressivo da assegnare: `CORSOGDPR-002`*

### Articoli Blog (`/blog/*`)
- Convenzione: `BLOG-<NUMERO_ARTICOLO>-<PROGRESSIVO_3CIFRE>`
- Articolo 001: `BLOG-001-001` (copertina credenziali), `BLOG-001-002` (figura 1)
- Articolo 002: `BLOG-002-001` (copertina collaudo FAT)

---

## 3. Regole per Aggiungere Nuove Immagini

1. Trova nella tabella sopra il **Prefisso** e la **Cartella** della pagina.
2. Prendi il primo numero libero (es. per Riutilizzabilità PPWR sarà `RIUSOPPWR-006`).
3. Rinomina il file sul tuo PC esattamente come il codice: `RIUSOPPWR-006.jpg`.
4. Salva il file nella cartella corrispondente (`src/assets/riuso-ppwr/`).
5. Nel codice della pagina, richiama il componente: `<MediaCode id="RIUSOPPWR-006" />`.
6. Aggiungi una riga a questo file aggiornando la lista.

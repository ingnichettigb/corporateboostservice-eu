# Inviare la sitemap corretta a Google Search Console

## Diagnosi (verifiche già eseguite)

- **Le 4 pagine sono raggiungibili direttamente**: `/prezzi`, `/corsi`, `/agenda-share` e `/registro-credenziali-fornitori` rispondono tutte con HTTP 200 sul sito pubblicato, senza alcun reindirizzamento.
- **La sitemap pubblicata è corretta**: `https://corporateboostservice.eu/sitemap.xml` risponde 200 con `application/xml` e contiene solo gli 18 URL canonici finali (nessun URL con redirect, carrello escluso). Nessuna modifica necessaria alla sitemap.
- **Problema trovato in Search Console**: l'unica sitemap inviata è `https://studio.corporateboostservice.eu/sitemap.xml` (sottodominio "studio", ancora in attesa di elaborazione). La sitemap del sito principale **non è mai stata inviata** alla proprietà `sc-domain:corporateboostservice.eu`. Questo spiega perché Google non scansiona le pagine nuove.

## Azione prevista

1. Inviare `https://corporateboostservice.eu/sitemap.xml` alla proprietà Search Console `sc-domain:corporateboostservice.eu` tramite l'API (richiede la tua approvazione nella scheda che apparirà).
2. Rileggere lo stato delle sitemap per confermare che l'invio sia registrato.

## Note

- La sitemap di "studio" non va rimossa: potrebbe appartenere a un altro tuo progetto; se vuoi eliminarla dimmelo e la gestiamo a parte.
- Dopo l'invio, Google inizierà a elaborare la sitemap e a scansionare le pagine nelle ore/giorni successivi. L'indicizzazione effettiva resta una decisione di Google; per accelerare puoi usare "Controllo URL → Richiedi indicizzazione" in Search Console per le 4 pagine (azione possibile solo dall'interfaccia di Search Console).

## Dettagli tecnici

- Chiamata: `PUT /webmasters/v3/sites/sc-domain%3Acorporateboostservice.eu/sitemaps/https%3A%2F%2Fcorporateboostservice.eu%2Fsitemap.xml` tramite la connessione Search Console collegata.
- Verifica successiva: `GET /webmasters/v3/sites/sc-domain%3Acorporateboostservice.eu/sitemaps` e confronto con lo stato pre-invio.
- Nessuna modifica al codice del sito: sitemap, redirect e pagine sono già corretti.

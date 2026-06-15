## Obiettivo
Creare una landing page professionale per il **Corso GDPR per Incaricati/Addetti**, con struttura, stile grafico e impaginazione identici alla pagina `assistenza-gdpr` (stessi token, card con bordo `border-primary/20`, gradienti `var(--gradient-section-*)`, icone Lucide, CTA ripetute, hero con badge + immagine, sezione contatti finale).

La nuova pagina sarà su rotta dedicata e verrà collegata dal corso **"GDPR e protezione dei dati — Guida pratica per l'addetto"** già presente in `/corsi` (oggi il bottone "Iscriviti" è disabilitato).

## File da creare / modificare

1. **`src/routes/corso-gdpr-incaricati.tsx`** (nuova route → URL `/corso-gdpr-incaricati`)
   - Stessa impalcatura di `assistenza-gdpr.tsx`: `SiteHeader`, back link, `head()` con `metaTitle`/`metaDesc` dedicati, `SiteFooter`.
   - Tutti i testi via `t("corsoIncaricati.*")` (i18n), niente stringhe hardcoded.
   - Icone semantiche per ogni area: `FileText` (documenti), `Phone` (telefonate), `KeyRound` (password), `DatabaseBackup` (backup), `Usb` (supporti rimovibili), `ShieldCheck`, `Ban`, `CheckCircle2`, `Users`, `GraduationCap`, ecc.

2. **`src/i18n/locales/pages/corso-gdpr-incaricati.ts`** — oggetto `corsoIncaricati` con blocchi `it` ed `en` (tutti i contenuti sotto, basati sui documenti forniti).

3. **`src/i18n/index.ts`** — import e registrazione di `corsoIncaricati.it`/`corsoIncaricati.en` nei resources (come per `assistenzaGdpr`).

4. **`src/routes/corsi.tsx`** — per la sola card `gdprAddetto`, trasformare il bottone "Iscriviti" da `disabled` a `Link` verso `/corso-gdpr-incaricati` (le altre card restano invariate). I bottoni Informazioni/Preventivo restano.

5. **Immagine hero**: generare `src/assets/gdpr-incaricati/hero.jpg` (stile coerente con la hero GDPR esistente: tema sicurezza dati/ufficio, toni istituzionali) e importarla nella route. Per le sezioni interne si riusano icone (nessuna immagine extra necessaria).

## Sezioni della landing (in ordine)

```text
1. HERO            badge "Formazione obbligatoria GDPR" + H1 con highlight
                   + sottotitolo + CTA "Accedi al Corso" (#contatti) + immagine
2. PERCHÉ          grid 4 card: prima linea sicurezza / errori comuni /
                   responsabilità personali e aziendali / procedure aggiornate
3. COSA IMPARERAI  grid di card per macro-aree operative, ognuna con elenco
                   puntato (CheckCircle2 / Ban per i divieti):
                   - Documenti cartacei (incustoditi, asportazione minima,
                     sguardi non autorizzati, copie, trasporto)
                   - Divieti assoluti (riciclo carta, copie, consegna a terzi)
                   - Telefonate e comunicazioni (verifica identità, niente voce
                     alta, no luoghi pubblici)
                   - Password e accessi (password sicure, cosa evitare,
                     blocco/salvaschermo, furto identità)
                   - Backup e sicurezza informatica (cosa si salva, verifica
                     backup, perdita dati, cartelle aziendali)
                   - Supporti rimovibili (rischi: calore/magneti/furto,
                     custodia corretta)
4. A CHI È RIVOLTO grid: segreterie, amministrativi, tecnici, addetti al
                   trattamento, front office
5. COSA INCLUDE    card: videolezioni, procedure operative, checklist
                   quotidiane, quiz finali, attestato
6. BENEFICI        sezione stat/colorata: riduzione rischi, sicurezza
                   operativa, conformità procedure, protezione azienda+incaricato
7. CTA FINALE      banner con "Accedi ora al corso GDPR per Incaricati..."
8. CONTATTI        stessa griglia 4 card (telefono/email/sede/orari) di
                   assistenza-gdpr, id="contatti", + back home
```

## Contenuti (sintesi dai documenti)
Tutti i testi saranno redatti in tono pratico e diretto, derivati dalle fonti citate: gestione documenti cartacei e divieti ("non portare documenti fuori dai locali, non riciclare la carta, no copie non autorizzate"), telefonate ("non parlare ad alta voce in presenza di terzi, verificare l'interlocutore"), password ("nessun riferimento personale, blocco automatico"), backup ("usare le cartelle aziendali indicate, verificare i salvataggi"), supporti rimovibili ("attenzione a calore, magneti, agenti chimici, furto"). Versione `en` come traduzione fedele.

## Note tecniche
- Pagina interamente frontend/presentazione: nessuna logica backend, nessuna dipendenza nuova oltre alle icone Lucide già disponibili.
- Responsive e accessibile come le altre pagine (container `max-w-*`, `grid sm/lg`, alt sull'immagine, CTA con label testuali).
- Build SSR/TanStack: rotta file-based standard, `head()` con title/description dedicati per SEO.

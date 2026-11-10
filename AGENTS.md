**File:** AGENTS.md · **Percorso:** AGENTS.md · **Revisione:** 2 · **Data:** 10/11/2026 · **Ora:** 17:55

---

# Linee Guida di Sviluppo — CorporateBoostService.eu

Questo file è la sorgente primaria di verità per sviluppatori, programmatori e assistenti AI che lavorano su questo repository. Tutte le regole devono essere rispettate scrupolosamente.

---

## 1. Intestazione Obbligatoria per tutti i File di Documentazione

Ogni file di documentazione o markdown (`.md`) creato o modificato nella cartella `docs/` o nella radice del progetto DEVE iniziare con la riga di intestazione standardizzata contenente numero di revisione, data completa (giorno, mese, anno) e ora:

```markdown
**File:** <NOME_FILE> · **Percorso:** <PERCORSO_RELATIVO> · **Revisione:** <NUMERO> · **Data:** <GG/MM/AAAA> · **Ora:** <HH:MM>

## Lingue

- Le lingue del sito sono definite solo in `LANGS` di `src/lib/locale.ts` (italiano senza prefisso, le altre con prefisso URL): selettore, hreflang e sitemap la leggono da lì. Il francese vive in file `src/i18n/locales/generated/*.fr.json` importati dai moduli di pagina, così i file sorgente non crescono.

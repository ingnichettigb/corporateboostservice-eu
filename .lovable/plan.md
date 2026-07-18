## Obiettivo
Collegare la pagina `/prezzi` al progetto Supabase esistente (`ruopxyprezzxoirfrjrm`) per leggere dinamicamente `price_eur` e `validity_months` dalla tabella `product_catalog`, mantenendo tutto il resto invariato.

## Approccio
Client Supabase pubblico standard nel bundle browser (anon key + URL). La anon key è pubblica per design ed è protetta da RLS; la tabella espone solo righe con `is_public = true`. Nessuna server function, nessuna dipendenza aggiuntiva oltre a `@supabase/supabase-js`.

## File toccati

1. **`src/integrations/supabase/client.ts`** (nuovo)
   - Crea il client con URL `https://ruopxyprezzxoirfrjrm.supabase.co` e anon key hardcoded.
   - Configurazione: `auth: { persistSession: false, autoRefreshToken: false }` (pagina pubblica, nessuna sessione).
   - Export singleton `supabase`.

2. **`src/routes/prezzi.tsx`** (modifica localizzata)
   - Import `supabase` e `useEffect` + `useState` (oppure `useQuery` da `@tanstack/react-query` che è già configurato → preferisco `useQuery` per coerenza col resto dello stack).
   - Estraggo l'elenco di `code` da `pricingItems` (unica fonte già presente) e faccio **una singola query**:
     ```
     supabase
       .from('product_catalog')
       .select('code, name, price_eur, validity_months')
       .in('code', codes)
       .eq('is_public', true)
     ```
   - Costruisco una `Map<code, {price_eur, validity_months}>` dalla risposta.
   - Nelle celle "Prezzo" e "Durata" (sia tabella desktop che card mobile):
     - Se dato presente → mostro `formatPrice(price_eur)` + `TaxBadge` e `formatDuration(validity_months)`.
     - Se in loading → skeleton (`<span className="inline-block h-4 w-16 animate-pulse bg-muted rounded" />`).
     - Se code non trovato → fallback al valore hardcoded esistente (`item.price` / `monthsLabel(item.duration)`) + `console.warn('[prezzi] code non trovato in product_catalog:', code)`.
   - Helper formatting:
     - `formatPrice(n)`: interi senza decimali (`50€`), decimali con 2 cifre (`49.90€`).
     - `formatDuration(m)`: `1 mese` se `m === 1`, altrimenti `${m} mesi` (usa le stesse chiavi i18n già presenti `legal.prezzi.month` / `months`).

3. **`package.json`** — aggiunta `@supabase/supabase-js` via `bun add`.

## Cosa NON tocco
- `pricingItems` in `legal.ts` resta la fonte per `code`, `name`, ID, e come **fallback** se Supabase non risponde. Nessuna riscrittura di layout, colonne, pulsanti carrello, `TaxBadge`, `TaxNote`, banner "Acquisti in arrivo".
- Nessuna scrittura sul DB, nessun'altra tabella, nessun altro campo oltre ai 4 elencati.
- Il carrello continua a usare `item.price` / `item.duration` da `pricingItems` locale (non nel perimetro di questa modifica — il briefing chiedeva solo di leggere Prezzo/Durata visualizzati, non di ricablare cart/checkout).

## Note tecniche
- **Anon key nel bundle**: è il pattern standard Supabase per SPA. La sicurezza dei dati dipende da RLS su `product_catalog` (che deve avere policy `SELECT` per role `anon` con predicato `is_public = true`, o equivalente). Non serve service role.
- **Singola query**: `in()` copre tutti i codici in un solo round-trip, come richiesto.
- **Stato loading**: uso `useQuery` con `queryKey: ['product_catalog', codes]`, così se in futuro cambia la lista di codici la cache si aggiorna automaticamente.
- **Fallback silenzioso ma visibile**: warning in console per ogni code mancante, così un disallineamento frontend/DB emerge subito nella devtools senza rompere la UI.

## Assunzioni da confermare implicitamente
- La anon key fornita (`eyJ...role=anon...ref=ruopxyprezzxoirfrjrm`) è valida e la tabella `product_catalog` ha una policy che permette a `anon` di leggere righe con `is_public = true`. Se la query torna 0 righe, tutte le celle useranno il fallback hardcoded e in console vedrai il warning per ogni code — è il segnale di RLS/grants mancanti lato DB, non un bug del client.

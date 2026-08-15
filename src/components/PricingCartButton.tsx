import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { Check, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { pricingItems } from "@/i18n/locales/pages/legal";
import { useCart } from "@/lib/cart";
import { pricingButtonStyle, resolvePricingButtonScale } from "@/lib/pricingButtonStyle";


type CatalogRow = {
  code: string;
  name: string;
  price_eur: number;
  validity_days: number;
};

function formatPrice(n: number) {
  const s = Number.isInteger(n) ? n.toString() : n.toFixed(2);
  return `${s}€`;
}

/**
 * Unified "Aggiungi al carrello" button used across the site.
 * Single source of truth: `product_catalog` row keyed by `code` (Supabase).
 *
 * Stile: metriche centrali in `@/lib/pricingButtonStyle`.
 *  - `base` (pagina Prezzi): scala fissa 1, non modificabile.
 *  - altrove: scala derivata (default o per codice), sovrascrivibile con `scale`.
 * Testo, funzione e azione restano invariati.
 */
export function PricingCartButton({
  code,
  index,
  full,
  base = false,
  scale,
  className = "",
}: {
  code: string;
  index: number;
  full?: boolean;
  /** true = stile base fisso della pagina Prezzi (nessuno scaling) */
  base?: boolean;
  /** fattore di scaling per i bottoni fuori dalla pagina Prezzi */
  scale?: number;
  className?: string;
}) {
  const { t } = useTranslation();
  const { addItem, has } = useCart();

  const fallback = pricingItems.find((p) => p.code === code);

  const { data: row } = useQuery({
    queryKey: ["product_catalog", "one", code],
    queryFn: async (): Promise<CatalogRow | null> => {
      const { data, error } = await supabase
        .from("product_catalog")
        .select("code, name, price_eur, validity_days")
        .eq("code", code)
        .eq("is_public", true)
        .maybeSingle();
      if (error) throw error;
      if (!data) {
        console.warn("[PricingCartButton] code non trovato in product_catalog:", code);
      }
      return (data as CatalogRow | null) ?? null;
    },
    staleTime: 5 * 60_000,
  });

  const serviceName = row?.name ?? fallback?.name ?? "";
  const priceText = row
    ? formatPrice(row.price_eur)
    : fallback?.price ?? "";
  const durationText = row
    ? `${row.validity_days} ${row.validity_days === 1 ? t("legal.prezzi.day") : t("legal.prezzi.days")}`
    : fallback
      ? `${fallback.duration} ${fallback.duration === "1" ? t("legal.prezzi.day") : t("legal.prezzi.days")}`
      : "";
  const hasDetails = Boolean(serviceName && priceText && durationText);

  const inCart = has(code);
  const ariaLabel = hasDetails
    ? `Riga ${index}. ${t("legal.cart.add")}: ${serviceName}, ${priceText} più iva e tasse, durata ${durationText}`
    : `Riga ${index}. ${t("legal.cart.add")}`;

  const appliedScale = base ? 1 : resolvePricingButtonScale(code, scale);
  const style = pricingButtonStyle(appliedScale);

  const btnBase =
    "relative inline-flex flex-col items-center justify-center font-semibold transition-colors text-center";
  const btnState = inCart
    ? "border border-border bg-muted text-foreground/70 cursor-default"
    : "bg-primary text-primary-foreground hover:bg-primary/90";

  return (
    <button
      type="button"
      disabled={inCart}
      aria-label={ariaLabel}
      style={style}
      onClick={() => {
        // Auto-compila dalla riga live del catalogo (row) quando disponibile;
        // il fallback statico serve solo se la query non ha ancora risposto.
        const source = row
          ? {
              code: row.code,
              name: row.name,
              price: formatPrice(row.price_eur),
              duration: String(row.validity_days),
            }
          : fallback;
        if (!source) return;
        addItem({
          id: source.code,
          name: source.name,
          price: source.price,
          duration: source.duration,
          domain: source.code,
        });
        toast.success(t("legal.cart.addedToast"));
      }}
      className={`${full ? "w-full " : ""}${btnBase} ${btnState} ${className}`}
    >
      <span
        className="absolute top-1 left-1.5 font-medium opacity-60 leading-none"
        style={{ fontSize: "var(--pcb-index-font)" }}
        aria-hidden
      >
        {index}
      </span>
      <span className="inline-flex items-center gap-1.5">
        {inCart ? (
          <Check style={{ height: "var(--pcb-icon)", width: "var(--pcb-icon)" }} aria-hidden />
        ) : (
          <ShoppingCart style={{ height: "var(--pcb-icon)", width: "var(--pcb-icon)" }} aria-hidden />
        )}
        <span className="font-semibold">
          {inCart ? t("legal.cart.added") : t("legal.cart.add")}
        </span>
      </span>
      {hasDetails && (
        <span
          className="font-normal opacity-85 leading-tight flex flex-wrap items-baseline justify-center gap-x-1 max-w-full"
          style={{ fontSize: "var(--pcb-detail-font)" }}
        >
          <span className="truncate max-w-[12rem]">{serviceName}</span>
          <span className="whitespace-nowrap">
            – {priceText} + iva e tasse – {durationText}
          </span>
        </span>
      )}
    </button>
  );
}


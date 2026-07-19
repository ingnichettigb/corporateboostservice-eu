import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { Check, Construction, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { pricingItems } from "@/i18n/locales/pages/legal";
import { useCart } from "@/lib/cart";

type CatalogRow = {
  code: string;
  name: string;
  price_eur: number;
  validity_months: number;
};

function formatPrice(n: number) {
  const s = Number.isInteger(n) ? n.toString() : n.toFixed(2);
  return `${s}€`;
}

/**
 * Unified "Aggiungi al carrello" button used across the site.
 * Single source of truth: `product_catalog` row keyed by `code` (Supabase).
 * Falls back to the hardcoded `pricingItems` entry while the query is loading
 * or if the code is missing from the DB.
 */
export function PricingCartButton({
  code,
  index,
  full,
  className = "",
}: {
  code: string;
  index: number;
  full?: boolean;
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
        .select("code, name, price_eur, validity_months")
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

  // GDPR completo: still under construction, no purchase.
  if (code === "01-GDPR-00") {
    return (
      <span
        className={`${full ? "w-full " : ""}relative inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-2 pl-5 text-xs font-semibold border border-amber-400 bg-amber-50 text-amber-700 ${className}`}
      >
        <span className="absolute top-0.5 left-1 text-[10px] font-medium text-amber-700/60 leading-none">
          {index}
        </span>
        <Construction className="h-4 w-4" aria-hidden />
        {t("legal.prezzi.underConstruction")}
      </span>
    );
  }

  const serviceName = row?.name ?? fallback?.name ?? "";
  const priceText = row
    ? formatPrice(row.price_eur)
    : fallback?.price ?? "";
  const durationText = row
    ? `${row.validity_months} ${row.validity_months === 1 ? t("legal.prezzi.month") : t("legal.prezzi.months")}`
    : fallback
      ? `${fallback.duration} ${fallback.duration === "1" ? t("legal.prezzi.month") : t("legal.prezzi.months")}`
      : "";
  const hasDetails = Boolean(serviceName && priceText && durationText);

  const inCart = has(code);
  const ariaLabel = hasDetails
    ? `Riga ${index}. ${t("legal.cart.add")}: ${serviceName}, ${priceText} più iva e tasse, durata ${durationText}`
    : `Riga ${index}. ${t("legal.cart.add")}`;

  return (
    <button
      type="button"
      disabled={inCart}
      aria-label={ariaLabel}
      onClick={() => {
        if (!fallback) return;
        addItem({
          id: fallback.code,
          name: fallback.name,
          price: fallback.price,
          duration: fallback.duration,
          domain: fallback.code,
        });
        toast.success(t("legal.cart.addedToast"));
        
      }}
      className={`${full ? "w-full " : ""}relative inline-flex flex-col items-center justify-center gap-0.5 rounded-md pl-5 pr-3 py-2 text-xs font-semibold transition-colors text-center ${
        inCart
          ? "border border-border bg-muted text-foreground/70 cursor-default"
          : "bg-primary text-primary-foreground hover:bg-primary/90"
      } ${className}`}
    >
      <span
        className="absolute top-0.5 left-1 text-[10px] font-medium opacity-60 leading-none"
        aria-hidden
      >
        {index}
      </span>
      <span className="inline-flex items-center gap-1.5">
        {inCart ? (
          <Check className="h-4 w-4" aria-hidden />
        ) : (
          <ShoppingCart className="h-4 w-4" aria-hidden />
        )}
        <span className="font-semibold">
          {inCart ? t("legal.cart.added") : t("legal.cart.add")}
        </span>
      </span>
      {hasDetails && (
        <span className="text-[10px] font-normal opacity-85 leading-tight flex flex-wrap items-baseline justify-center gap-x-1 max-w-full">
          <span className="truncate max-w-[10rem]">{serviceName}</span>
          <span className="whitespace-nowrap">
            – {priceText} + iva e tasse – {durationText}
          </span>
        </span>
      )}
    </button>
  );
}

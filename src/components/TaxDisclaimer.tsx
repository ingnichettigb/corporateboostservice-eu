import { useTranslation } from "react-i18next";
import { taxDisclaimer, resolveTaxLang } from "@/i18n/taxDisclaimer";

/**
 * Small, de-emphasized tax badge to place next to a price (e.g. "+ VAT/tax excluded").
 * Reads the currently selected language from i18n, falling back to IT.
 */
export function TaxBadge({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation();
  const { badge } = taxDisclaimer[resolveTaxLang(i18n.language)];
  return <span className={`text-xs font-normal opacity-80 ${className}`}>{badge}</span>;
}

/**
 * Extended tax note (Paddle Merchant of Record disclaimer). Render once per page.
 * Reads the currently selected language from i18n, falling back to IT.
 * Use `light` when placing the note on a dark/coloured background so text stays readable.
 */
export function TaxNote({ className = "", light = false }: { className?: string; light?: boolean }) {
  const { t, i18n } = useTranslation();
  const { note } = taxDisclaimer[resolveTaxLang(i18n.language)];
  return (
    <div className={`space-y-2 ${className}`}>
      <p className={`text-sm ${light ? "text-white/90" : "text-foreground/65"}`}>{note}</p>
      <div className={`rounded-lg border p-3 ${light ? "border-amber-500/30 bg-amber-500/10" : "border-amber-200/60 bg-amber-50/80 dark:border-amber-500/30 dark:bg-amber-500/10"}`}>
        <p className={`text-sm font-medium ${light ? "text-amber-300" : "text-amber-800 dark:text-amber-300"}`}>
          🚧 {t("legal.comingSoonBadge")}
        </p>
        <p className={`mt-1 text-sm ${light ? "text-amber-300/90" : "text-amber-800/90 dark:text-amber-300/90"}`}>
          {t("legal.comingSoonNote")}
        </p>
      </div>
    </div>
  );
}

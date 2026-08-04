import { useTranslation } from "react-i18next";
import { taxDisclaimer, resolveTaxLang } from "@/i18n/taxDisclaimer";

/**
 * Small, de-emphasized tax badge to place next to a price (e.g. "+ VAT/tax excluded").
 * Reads the currently selected language from i18n, falling back to IT.
 */
export function TaxBadge({
  size = "sm",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { i18n } = useTranslation();
  const { badge } = taxDisclaimer[resolveTaxLang(i18n.language)];
  const sizeClass = size === "lg" ? "text-base" : size === "md" ? "text-sm" : "text-xs";
  return <span className={`${sizeClass} font-normal opacity-80 ${className}`}>{badge}</span>;
}

/**
 * Extended tax note (Paddle Merchant of Record disclaimer). Render once per page.
 * Reads the currently selected language from i18n, falling back to IT.
 * Use `light` when placing the note on a dark/coloured background so text stays readable.
 */
export function TaxNote({
  size = "md",
  className = "",
  light = false,
}: {
  size?: "md" | "lg";
  className?: string;
  light?: boolean;
}) {
  const { t, i18n } = useTranslation();
  const { note } = taxDisclaimer[resolveTaxLang(i18n.language)];
  const textClass = size === "lg" ? "text-base" : "text-sm";
  return (
    <div className={`space-y-2 ${className}`}>
      <p className={`${textClass} ${light ? "text-white/90" : "text-foreground/65"}`}>{note}</p>
      <div className={`rounded-lg border p-3 ${light ? "border-amber-500/30 bg-amber-500/10" : "border-amber-200/60 bg-amber-50/80 dark:border-amber-500/30 dark:bg-amber-500/10"}`}>
        <p className={`${textClass} font-medium ${light ? "text-amber-300" : "text-amber-800 dark:text-amber-300"}`}>
          🚧 {t("legal.comingSoonBadge")}
        </p>
        <p className={`mt-1 ${textClass} ${light ? "text-amber-300/90" : "text-amber-800/90 dark:text-amber-300/90"}`}>
          {t("legal.comingSoonNote")}
        </p>
      </div>
    </div>
  );
}


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
 */
export function TaxNote({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation();
  const { note } = taxDisclaimer[resolveTaxLang(i18n.language)];
  return <p className={`text-sm text-foreground/65 ${className}`}>{note}</p>;
}

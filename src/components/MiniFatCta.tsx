import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";
import { TaxBadge } from "@/components/TaxDisclaimer";

/**
 * Single source of truth for the MiniFAT "Attiva MiniFAT – 50€/mese" CTA.
 * The label comes from the `minifat.heroCta` i18n key, so changing that one
 * key updates the button text everywhere it is used across the page.
 */
export function MiniFatCta({ className = "" }: { className?: string }) {
  const { t } = useTranslation();
  const label = t("minifat.heroCta");
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <Button variant="hero" size="lg" className="h-12 px-7 text-base" asChild>
        <a href={buildMailto(`MiniFAT — ${label}`)}>{label}</a>
      </Button>
      <TaxBadge />
    </div>
  );
}

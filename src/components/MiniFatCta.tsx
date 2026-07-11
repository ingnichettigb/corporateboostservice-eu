import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";

/**
 * Single source of truth for the MiniFAT "Attiva MiniFAT – 50€/mese" CTA.
 * The label comes from the `minifat.heroCta` i18n key, so changing that one
 * key updates the button text everywhere it is used across the page.
 */
export function MiniFatCta({ className = "", annual = false }: { className?: string; annual?: boolean }) {
  const { t } = useTranslation();
  const label = t(annual ? "minifat.heroCtaAnnual" : "minifat.heroCta");
  return (
    <Button variant="hero" size="lg" className={`h-12 px-7 text-base ${className}`} asChild>
      <a href={buildMailto(`MiniFAT — ${label}`)}>
        {label}
      </a>
    </Button>
  );
}

/**
 * Renders both the monthly and annual MiniFAT activation buttons, stacked and centered.
 */
export function MiniFatCtaGroup({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <MiniFatCta />
      <MiniFatCta annual />
    </div>
  );
}



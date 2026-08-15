import { PricingCartButton } from "@/components/PricingCartButton";

export const MINIFAT_DOMAIN = "minifat.corporateboostservice.eu";

/**
 * MiniFAT activation CTAs. Delegates to the shared PricingCartButton, so
 * price, duration and label come from the /prezzi table rows in Supabase:
 *  - monthly → 002MnFAT-01 (row 4)
 *  - annual  → 002MnFAT-12 (row 3)
 */
export function MiniFatCta({ className = "", annual = false }: { className?: string; annual?: boolean }) {
  return annual ? (
    <PricingCartButton code="002MnFAT-365" index={3} full className={className} />
  ) : (
    <PricingCartButton code="002MnFAT-030" index={4} full className={className} />
  );
}

export function MiniFatCtaGroup({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <MiniFatCta />
      <MiniFatCta annual />
    </div>
  );
}

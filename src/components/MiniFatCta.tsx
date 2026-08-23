import { PricingCartButton } from "@/components/PricingCartButton";

export const MINIFAT_DOMAIN = "minifat.corporateboostservice.eu";

export type MiniFatVariant = "single" | "monthly" | "annual";

/**
 * MiniFAT activation CTAs. Delegates to the shared PricingCartButton, so
 * price, duration and label come from the /prezzi table rows in Supabase:
 *  - single  → 002MnFAT-002 (row 4)
 *  - monthly → 002MnFAT-030 (row 5)
 *  - annual  → 002MnFAT-365 (row 6)
 */
export function MiniFatCta({
  className = "",
  variant = "monthly",
  annual = false,
}: {
  className?: string;
  variant?: MiniFatVariant;
  /** @deprecated usa variant="annual" */
  annual?: boolean;
}) {
  const v: MiniFatVariant = annual ? "annual" : variant;
  if (v === "single") {
    return <PricingCartButton code="002MnFAT-002" index={4} full className={className} />;
  }
  if (v === "annual") {
    return <PricingCartButton code="002MnFAT-365" index={6} full className={className} />;
  }
  return <PricingCartButton code="002MnFAT-030" index={5} full className={className} />;
}

export function MiniFatCtaGroup({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <MiniFatCta variant="single" />
      <MiniFatCta variant="monthly" />
      <MiniFatCta variant="annual" />
    </div>
  );
}

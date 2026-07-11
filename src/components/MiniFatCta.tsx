import { useTranslation } from "react-i18next";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { getMiniFatMonthly, getMiniFatAnnual, toCartItem } from "@/lib/pricing";

export const MINIFAT_DOMAIN = "minifat.corporateboostservice.eu";

/**
 * Single source of truth for the MiniFAT activation CTAs.
 * Clicking adds the correct plan to the cart and opens the checkout:
 *  - monthly → 002MnFAT-01
 *  - annual  → 002MnFAT-12
 * The label comes from the `minifat.heroCta` / `minifat.heroCtaAnnual` i18n keys.
 */
export function MiniFatCta({ className = "", annual = false }: { className?: string; annual?: boolean }) {
  const { t } = useTranslation();
  const { addItem } = useCart();
  const navigate = useNavigate();
  const plan = annual ? getMiniFatAnnual() : getMiniFatMonthly();
  const label = t(annual ? "minifat.heroCtaAnnual" : "minifat.heroCta");
  return (
    <Button
      variant="hero"
      size="lg"
      className={`h-12 px-7 text-base whitespace-normal leading-tight ${className}`}
      onClick={() => {
        addItem(toCartItem(plan, MINIFAT_DOMAIN));
        toast.success(t("minifat.addedToast"));
        navigate({ to: "/carrello" });
      }}
    >
      <ShoppingCart className="mr-2 h-5 w-5 shrink-0" aria-hidden /> {label}
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

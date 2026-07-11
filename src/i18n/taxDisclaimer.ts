// Shared tax disclaimer copy (badge + extended note) for all portfolio apps.
// Reusable across PedFlow, MiniFAT, Smart Maintenance, etc. — single source of truth.

export type TaxDisclaimerLang = "it" | "en" | "es" | "de";

export const taxDisclaimer: Record<TaxDisclaimerLang, { badge: string; badgeShort: string; note: string }> = {
  it: {
    badge: "+ IVA/tasse",
    badgeShort: "IVA/tasse escluse",
    note:
      "I prezzi indicati si intendono al netto delle imposte. L'importo finale — comprensivo di IVA, GST o altra tassa applicabile in base al paese di fatturazione del cliente — viene calcolato automaticamente da Paddle al momento del checkout.",
  },
  en: {
    badge: "+ VAT/tax excluded",
    badgeShort: "VAT/tax excluded",
    note:
      "Prices shown are exclusive of tax. The final amount — including VAT, GST, or other applicable tax based on the customer's billing country — is calculated automatically by Paddle at checkout.",
  },
  es: {
    badge: "+ IVA/impuestos excluidos",
    badgeShort: "IVA/impuestos excluidos",
    note:
      "Los precios indicados no incluyen impuestos. El importe final —incluyendo IVA, GST u otro impuesto aplicable según el país de facturación del cliente— se calcula automáticamente mediante Paddle en el checkout.",
  },
  de: {
    badge: "+ MwSt./Steuern zzgl.",
    badgeShort: "zzgl. MwSt./Steuern",
    note:
      "Die angezeigten Preise verstehen sich zzgl. Steuern. Der Endbetrag — inklusive MwSt., GST oder anderer anfallender Steuern je nach Rechnungsland des Kunden — wird automatisch von Paddle beim Checkout berechnet.",
  },
};

export function resolveTaxLang(lang?: string): TaxDisclaimerLang {
  const base = (lang ?? "it").split("-")[0].toLowerCase();
  if (base === "en" || base === "es" || base === "de") return base;
  return "it";
}

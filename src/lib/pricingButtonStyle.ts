/**
 * Stile centrale dei bottoni prezzo.
 *
 * BASE = lo stile ufficiale della pagina /prezzi: fisso, non scalabile.
 * DERIVED = stesso stile, con un fattore di scala applicabile agli altri
 * bottoni prezzo del sito (dimensioni, padding, font-size, radius).
 *
 * Testo, funzione e azione dei bottoni non dipendono da questo file:
 * qui si governa SOLO lo stile.
 */

/** Metriche base (rem / px) — identiche a quelle della pagina Prezzi. */
export const PRICING_BUTTON_BASE = {
  paddingY: 0.75, // rem
  paddingLeft: 1.5, // rem
  paddingRight: 1, // rem
  radius: 0.375, // rem
  labelFont: 0.875, // rem
  detailFont: 0.75, // rem
  indexFont: 0.75, // rem
  icon: 1.25, // rem
  gap: 0.25, // rem
  minHeight: 5.25, // rem
} as const;

/** Scala applicata di default ai bottoni prezzo fuori dalla pagina Prezzi. */
export const PRICING_BUTTON_DEFAULT_SCALE = 1.1;

/** Override per singolo codice prodotto (contesto specifico). */
export const PRICING_BUTTON_SCALE_BY_CODE: Record<string, number> = {
  // esempio: "006SmMntnnc-365": 1.2,
};

export function resolvePricingButtonScale(code: string, explicit?: number): number {
  if (typeof explicit === "number") return explicit;
  return PRICING_BUTTON_SCALE_BY_CODE[code] ?? PRICING_BUTTON_DEFAULT_SCALE;
}

/** Stile inline derivato dalle metriche base moltiplicate per `scale`. */
export function pricingButtonStyle(scale: number): React.CSSProperties {
  const b = PRICING_BUTTON_BASE;
  const r = (v: number) => `${(v * scale).toFixed(4)}rem`;
  return {
    paddingTop: r(b.paddingY),
    paddingBottom: r(b.paddingY),
    paddingLeft: r(b.paddingLeft),
    paddingRight: r(b.paddingRight),
    borderRadius: r(b.radius),
    fontSize: r(b.labelFont),
    gap: r(b.gap),
    minHeight: r(b.minHeight),
    ["--pcb-detail-font" as string]: r(b.detailFont),
    ["--pcb-index-font" as string]: r(b.indexFont),
    ["--pcb-icon" as string]: r(b.icon),
  };
}

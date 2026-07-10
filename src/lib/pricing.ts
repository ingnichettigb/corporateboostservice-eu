import { pricingItems } from "@/i18n/locales/pages/legal";

export type PricingPlan = {
  id: number;
  code: string;
  name: string;
  price: string;
  duration: string;
};

export function getPlanByCode(code: string): PricingPlan {
  const item = pricingItems.find((p) => p.code === code);
  if (!item) {
    throw new Error(`Pricing plan not found for code: ${code}`);
  }
  return item;
}

export function getSmartMaintenanceMonthly() {
  return getPlanByCode("001SmMntnnc-01");
}

export function getSmartMaintenanceAnnual() {
  return getPlanByCode("001SmMntnnc-12");
}

export function getPedFlowMonthly() {
  return getPlanByCode("011PedFlow-01");
}

export function getPedFlowAnnual() {
  return getPlanByCode("012PedFlow-12");
}

export function getMiniFatMonthly() {
  return getPlanByCode("002MnFAT-01");
}

export function getMiniFatAnnual() {
  return getPlanByCode("002MnFAT-12");
}

export function getGdprAddetto() {
  return getPlanByCode("02-GDPR-00");
}

export function getGdprCompleto() {
  return getPlanByCode("01-GDPR-00");
}

export function toCartItem(plan: PricingPlan, domain: string) {
  return {
    id: plan.code,
    name: plan.name,
    price: plan.price,
    duration: plan.duration,
    domain,
  };
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Info, Construction, Package, ShoppingCart, Check } from "lucide-react";
import { toast } from "sonner";
import { LegalLayout } from "@/components/LegalLayout";
import { pricingItems } from "@/i18n/locales/pages/legal";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/prezzi")({
  head: () => ({
    meta: [
      { title: i18n.t("legal.prezzi.metaTitle") },
      { name: "description", content: i18n.t("legal.prezzi.metaDesc") },
      { property: "og:title", content: i18n.t("legal.prezzi.metaTitle") },
      { property: "og:description", content: i18n.t("legal.prezzi.metaDesc") },
    ],
  }),
  component: PrezziPage,
});

const related = [
  { to: "/termini-e-condizioni", key: "navTermini" },
  { to: "/termini-di-servizio", key: "navServizio" },
  { to: "/privacy-policy", key: "navPrivacy" },
  { to: "/politica-di-rimborso", key: "navRimborso" },
] as const;

function PrezziPage() {
  const { t } = useTranslation();
  const { addItem, has } = useCart();
  const monthsLabel = (d: string) => `${d} ${d === "1" ? t("legal.prezzi.month") : t("legal.prezzi.months")}`;

  const AddBtn = ({ item, full }: { item: (typeof pricingItems)[number]; full?: boolean }) => {
    const inCart = has(item.code);
    return (
      <button
        type="button"
        disabled={inCart}
        onClick={() => {
          addItem({ id: item.code, name: item.name, price: item.price, duration: item.duration, domain: item.code });
          toast.success(t("legal.cart.addedToast"));
        }}
        className={`${full ? "w-full " : ""}inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold transition-colors ${
          inCart
            ? "border border-border bg-muted text-foreground/70 cursor-default"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        {inCart ? <Check className="h-4 w-4" aria-hidden /> : <ShoppingCart className="h-4 w-4" aria-hidden />}
        {inCart ? t("legal.cart.added") : t("legal.cart.add")}
      </button>
    );
  };


  return (
    <LegalLayout badge={t("legal.prezzi.badge")} title={t("legal.prezzi.title")} subtitle={t("legal.prezzi.subtitle")}>
      {/* TODO: sostituire questo banner con il bottone Paddle quando il link è disponibile */}
      <div className="mb-8 rounded-xl border-2 border-amber-400 bg-amber-50 p-5 text-amber-900">
        <div className="flex items-center gap-3 font-bold text-base md:text-lg">
          <Construction className="h-6 w-6 shrink-0 text-amber-600" aria-hidden />
          <span>🚧 {t("legal.comingSoonBadge")}</span>
        </div>
        <p className="mt-2 text-sm text-amber-800/90">{t("legal.comingSoonNote")}</p>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr className="text-left">
              <th className="px-4 py-3 font-semibold">ID</th>
              <th className="px-4 py-3 font-semibold">{t("legal.prezzi.colCode")}</th>
              <th className="px-4 py-3 font-semibold">{t("legal.prezzi.colService")}</th>
              <th className="px-4 py-3 font-semibold">{t("legal.prezzi.colPrice")}</th>
              <th className="px-4 py-3 font-semibold">{t("legal.prezzi.colDuration")}</th>
              <th className="px-4 py-3 font-semibold">{t("legal.cart.add")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {pricingItems.map((item, index) => (
              <tr key={item.code} className="hover:bg-muted/50">
                <td className="px-4 py-3 font-semibold text-foreground/70">{index + 1}</td>
                <td className="px-4 py-3 font-mono text-xs text-foreground/70 whitespace-nowrap">{item.code}</td>
                <td className="px-4 py-3 font-medium">{item.name}</td>
                <td className="px-4 py-3 whitespace-nowrap font-semibold text-primary">{item.price}</td>
                <td className="px-4 py-3 whitespace-nowrap">{monthsLabel(item.duration)}</td>
                {/* TODO: sostituire con link Paddle */}
                <td className="px-4 py-3">
                  <AddBtn item={item} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {pricingItems.map((item, index) => (
          <div key={item.code} className="rounded-xl border border-border p-4">
            <div className="text-xs font-semibold text-foreground/60">ID {index + 1}</div>
            <div className="mt-1 font-mono text-xs text-foreground/70 break-all">{item.code}</div>
            <div className="font-semibold">{item.name}</div>
            <div className="mt-2 flex items-center gap-3 text-sm">
              <span className="font-semibold text-primary">{item.price}</span>
              <span className="text-foreground/70">{monthsLabel(item.duration)}</span>
            </div>
            {/* TODO: sostituire con link Paddle */}
            <div className="mt-3">
              <AddBtn item={item} full />
            </div>
          </div>
        ))}
      </div>

      {/* Digital delivery */}
      <div className="mt-10 rounded-xl border border-border bg-muted/40 p-5">
        <div className="flex items-center gap-2 mb-3 font-bold">
          <Package className="h-5 w-5 text-primary" aria-hidden /> {t("legal.prezzi.deliveryHeading")}
        </div>
        <p className="text-sm text-foreground/85 mb-3">{t("legal.prezzi.deliveryIntro")}</p>
        <ul className="space-y-2 text-sm text-foreground/85 list-disc pl-5 mb-4">
          <li>{t("legal.prezzi.deliveryItem1")}</li>
          <li>{t("legal.prezzi.deliveryItem2")}</li>
          <li>{t("legal.prezzi.deliveryItem3")}</li>
          <li>{t("legal.prezzi.deliveryItem4")}</li>
        </ul>
        <p className="text-sm text-foreground/85 mb-3">{t("legal.prezzi.deliveryP1")}</p>
        <p className="text-sm text-foreground/85 mb-3">{t("legal.prezzi.deliveryP2")}</p>
        <p className="text-sm text-foreground/85">{t("legal.prezzi.deliveryP3")}</p>
      </div>

      {/* Notes */}
      <div className="mt-10 rounded-xl border border-border bg-muted/40 p-5">
        <div className="flex items-center gap-2 mb-3 font-bold">
          <Info className="h-5 w-5 text-primary" aria-hidden /> {t("legal.prezzi.notesHeading")}
        </div>
        <ul className="space-y-2 text-sm text-foreground/85 list-disc pl-5">
          <li>{t("legal.prezzi.note1")}</li>
          <li>{t("legal.prezzi.note2")}</li>
          <li>{t("legal.prezzi.note3")}</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-10">
        <h2 className="text-lg font-bold mb-3">{t("legal.prezzi.relatedHeading")}</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          {related.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-primary underline underline-offset-4 hover:opacity-80">
                {t(`legal.${l.key}`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </LegalLayout>
  );
}

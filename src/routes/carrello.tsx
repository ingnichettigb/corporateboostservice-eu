import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { ShoppingCart, Trash2, Construction, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { LegalLayout } from "@/components/LegalLayout";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/carrello")({
  head: () => ({
    meta: [
      { title: i18n.t("legal.cart.title") + " — Corporate Boost Service" },
      { name: "description", content: i18n.t("legal.cart.subtitle") },
      { property: "og:title", content: i18n.t("legal.cart.title") },
      { property: "og:description", content: i18n.t("legal.cart.subtitle") },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { t } = useTranslation();
  const { items, total, removeItem, clear } = useCart();
  const monthsLabel = (d: string) =>
    `${d} ${d === "1" ? t("legal.prezzi.month") : t("legal.prezzi.months")}`;

  return (
    <LegalLayout
      badge={t("legal.cart.nav")}
      title={t("legal.cart.title")}
      subtitle={t("legal.cart.subtitle")}
    >
      {items.length === 0 ? (
        <div className="rounded-xl border border-border bg-muted/40 p-8 text-center">
          <ShoppingCart className="mx-auto h-10 w-10 text-muted-foreground" aria-hidden />
          <p className="mt-4 text-foreground/80">{t("legal.cart.empty")}</p>
          <Link
            to="/prezzi"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {t("legal.cart.emptyCta")} <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold">{t("legal.cart.colService")}</th>
                  <th className="px-4 py-3 font-semibold">{t("legal.cart.colDuration")}</th>
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">{t("legal.cart.colPrice")}</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-muted/50">
                    <td className="px-4 py-3 font-medium">{item.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{monthsLabel(item.duration)}</td>
                    <td className="px-4 py-3 whitespace-nowrap font-semibold text-primary">{item.price}</td>
                    <td className="px-4 py-3 text-right">
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground/80 hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" aria-hidden /> {t("legal.cart.remove")}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-border bg-muted/40">
                  <td className="px-4 py-3 font-bold" colSpan={2}>
                    {t("legal.cart.total")}
                  </td>
                  <td className="px-4 py-3 font-bold text-primary whitespace-nowrap">{total}€</td>
                  <td />
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-6 rounded-xl border-2 border-amber-400 bg-amber-50 p-5 text-amber-900">
            <div className="flex items-center gap-3 font-bold">
              <Construction className="h-6 w-6 shrink-0 text-amber-600" aria-hidden />
              <span>{t("legal.cart.checkout")}</span>
            </div>
            <p className="mt-2 text-sm text-amber-800/90">{t("legal.cart.checkoutNote")}</p>
            {/* TODO: sostituire con checkout Paddle quando disponibile */}
            <button
              type="button"
              disabled
              className="mt-4 inline-flex cursor-not-allowed items-center gap-2 rounded-md bg-amber-600/60 px-5 py-2.5 text-sm font-semibold text-white opacity-70"
            >
              {t("legal.cart.checkout")}
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/prezzi"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              {t("legal.cart.continueShopping")}
            </Link>
            <button
              type="button"
              onClick={() => {
                clear();
                toast.success(t("legal.cart.clear"));
              }}
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-destructive/10 hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" aria-hidden /> {t("legal.cart.clear")}
            </button>
          </div>
        </>
      )}
    </LegalLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import i18n from "@/i18n";
import { Info, Construction, Package } from "lucide-react";
import { LegalLayout } from "@/components/LegalLayout";
import { TaxBadge, TaxNote } from "@/components/TaxDisclaimer";
import { PricingCartButton } from "@/components/PricingCartButton";
import { pricingItems } from "@/i18n/locales/pages/legal";
import { supabase } from "@/integrations/supabase/client";

type CatalogRow = { code: string; name: string; price_eur: number; validity_days: number };


export const Route = createFileRoute("/prezzi")({
  head: () => ({
    meta: [
      { title: i18n.t("legal.prezzi.metaTitle") },
      { name: "description", content: i18n.t("legal.prezzi.metaDesc") },
      { property: "og:title", content: i18n.t("legal.prezzi.metaTitle") },
      { property: "og:description", content: i18n.t("legal.prezzi.metaDesc") },
      { property: "og:url", content: "https://corporateboostservice.eu/prezzi" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://corporateboostservice.eu/prezzi" }],
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
  const daysLabel = (d: string) => `${d} ${d === "1" ? t("legal.prezzi.day") : t("legal.prezzi.days")}`;

  const codes = pricingItems.map((p) => p.code);
  const { data: catalog, isLoading } = useQuery({
    queryKey: ["product_catalog", codes],
    queryFn: async (): Promise<Map<string, CatalogRow>> => {
      const { data, error } = await supabase
        .from("product_catalog")
        .select("code, name, price_eur, validity_days")
        .in("code", codes)
        .eq("is_public", true);
      if (error) throw error;
      const map = new Map<string, CatalogRow>();
      (data as CatalogRow[] | null)?.forEach((r) => map.set(r.code, r));
      codes.forEach((c) => {
        if (!map.has(c)) console.warn("[prezzi] code non trovato in product_catalog:", c);
      });
      return map;
    },
    staleTime: 5 * 60_000,
  });

  const formatPrice = (n: number) => {
    const s = Number.isInteger(n) ? n.toString() : n.toFixed(2);
    return `${s}€`;
  };
  const formatDuration = (d: number) =>
    `${d} ${d === 1 ? t("legal.prezzi.day") : t("legal.prezzi.days")}`;

  const Skeleton = ({ w = "w-16" }: { w?: string }) => (
    <span className={`inline-block h-5 ${w} animate-pulse bg-muted rounded align-middle`} />
  );

  const PriceCell = ({ item }: { item: (typeof pricingItems)[number] }) => {
    const row = catalog?.get(item.code);
    if (isLoading && !row) return <Skeleton />;
    const priceText = row ? formatPrice(row.price_eur) : item.price;
    return (
      <>
        {priceText} <TaxBadge size="md" className="text-foreground/70" />
      </>
    );
  };

  const DurationCell = ({ item }: { item: (typeof pricingItems)[number] }) => {
    const row = catalog?.get(item.code);
    if (isLoading && !row) return <Skeleton w="w-16" />;
    return <>{row ? formatDuration(row.validity_days) : daysLabel(item.duration)}</>;
  };


  return (
    <LegalLayout badge={t("legal.prezzi.badge")} title={t("legal.prezzi.title")} subtitle={t("legal.prezzi.subtitle")} wide>
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
        <table className="w-full text-base">
          <thead className="bg-muted">
            <tr className="text-left">
              <th className="px-5 py-4 font-semibold min-w-[3rem]">ID</th>
              <th className="px-5 py-4 font-semibold min-w-[8rem]">{t("legal.prezzi.colCode")}</th>
              <th className="px-5 py-4 font-semibold min-w-[12rem]">{t("legal.prezzi.colService")}</th>
              <th className="px-5 py-4 font-semibold min-w-[9rem]">{t("legal.prezzi.colPrice")}</th>
              <th className="px-5 py-4 font-semibold min-w-[6rem]">{t("legal.prezzi.colDuration")}</th>
              <th className="px-5 py-4 font-semibold w-[19rem] whitespace-nowrap">{t("legal.cart.add")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {pricingItems.map((item, index) => (
              <tr key={item.code} className="hover:bg-muted/50">
                <td className="px-5 py-4 font-semibold text-foreground/70 align-middle">{index + 1}</td>
                <td className="px-5 py-4 font-mono text-sm text-foreground/70 whitespace-nowrap align-middle">{item.code}</td>
                <td className="px-5 py-4 font-medium align-middle">{item.name}</td>
                <td className="px-5 py-4 whitespace-nowrap font-semibold text-primary align-middle"><PriceCell item={item} /></td>
                <td className="px-5 py-4 whitespace-nowrap align-middle"><DurationCell item={item} /></td>

                {/* TODO: sostituire con link Paddle */}
                <td className="px-5 py-4 align-middle w-[19rem]">
                  <PricingCartButton code={item.code} index={index + 1} base full construction={item.code === "040RegistroWEB-365"} />
                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {pricingItems.map((item, index) => (
          <div key={item.code} className="rounded-xl border border-border p-5">
            <div className="text-sm font-semibold text-foreground/60">ID {index + 1}</div>
            <div className="mt-1 font-mono text-sm text-foreground/70 break-all">{item.code}</div>
            <div className="text-base font-semibold">{item.name}</div>
            <div className="mt-2 flex items-center gap-3 text-base">
              <span className="font-semibold text-primary"><PriceCell item={item} /></span>
              <span className="text-foreground/70"><DurationCell item={item} /></span>

            </div>
            {/* TODO: sostituire con link Paddle */}
            <div className="mt-4">
              <PricingCartButton code={item.code} index={index + 1} base full construction={item.code === "040RegistroWEB-365"} />
            </div>
          </div>
        ))}
      </div>

      <TaxNote size="lg" className="mt-5" />

      {/* Digital delivery */}
      <div className="mt-10 rounded-xl border border-border bg-muted/40 p-5">
        <div className="flex items-center gap-2 mb-3 font-bold text-base">
          <Package className="h-5 w-5 text-primary" aria-hidden /> {t("legal.prezzi.deliveryHeading")}
        </div>
        <p className="text-base text-foreground/85 mb-3">{t("legal.prezzi.deliveryIntro")}</p>
        <ul className="space-y-2 text-base text-foreground/85 list-disc pl-5 mb-4">
          <li>{t("legal.prezzi.deliveryItem1")}</li>
          <li>{t("legal.prezzi.deliveryItem2")}</li>
          <li>{t("legal.prezzi.deliveryItem3")}</li>
          <li>{t("legal.prezzi.deliveryItem4")}</li>
        </ul>
        <p className="text-base text-foreground/85 mb-3">{t("legal.prezzi.deliveryP1")}</p>
        <p className="text-base text-foreground/85 mb-3">{t("legal.prezzi.deliveryP2")}</p>
        <p className="text-base text-foreground/85">{t("legal.prezzi.deliveryP3")}</p>
      </div>

      {/* Notes */}
      <div className="mt-10 rounded-xl border border-border bg-muted/40 p-5">
        <div className="flex items-center gap-2 mb-3 font-bold text-base">
          <Info className="h-5 w-5 text-primary" aria-hidden /> {t("legal.prezzi.notesHeading")}
        </div>
        <ul className="space-y-2 text-base text-foreground/85 list-disc pl-5">
          <li>{t("legal.prezzi.note1")}</li>
          <li>{t("legal.prezzi.note2")}</li>
          <li>{t("legal.prezzi.note3")}</li>
        </ul>
      </div>

      {/* Related */}
      <div className="mt-10">
        <h2 className="text-lg font-bold mb-3">{t("legal.prezzi.relatedHeading")}</h2>
        <ul className="flex flex-wrap gap-3 text-base">
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

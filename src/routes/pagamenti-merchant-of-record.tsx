import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/pagamenti-merchant-of-record")({
  head: () => ({
    meta: [
      { title: i18n.t("legal.mor.metaTitle") },
      { name: "description", content: i18n.t("legal.mor.metaDesc") },
      { property: "og:title", content: i18n.t("legal.mor.metaTitle") },
      { property: "og:description", content: i18n.t("legal.mor.metaDesc") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PagamentiMoRPage,
});

const related = [
  { to: "/prezzi", key: "navPrezzi" },
  { to: "/termini-e-condizioni", key: "navTermini" },
  { to: "/termini-di-servizio", key: "navServizio" },
  { to: "/privacy-policy", key: "navPrivacy" },
  { to: "/politica-di-rimborso", key: "navRimborso" },
] as const;

function PagamentiMoRPage() {
  const { t } = useTranslation();

  return (
    <LegalLayout badge={t("legal.mor.badge")} title={t("legal.mor.title")} subtitle={t("legal.mor.subtitle")}>
      <LegalSection heading={t("legal.mor.s1Heading")}>
        <p>{t("legal.mor.s1Body")}</p>
      </LegalSection>
      <LegalSection heading={t("legal.mor.s2Heading")}>
        <p>{t("legal.mor.s2Body")}</p>
      </LegalSection>
      <LegalSection heading={t("legal.mor.s3Heading")}>
        <p>{t("legal.mor.s3Body")}</p>
      </LegalSection>
      <LegalSection heading={t("legal.mor.s4Heading")}>
        <p>{t("legal.mor.s4Body")}</p>
      </LegalSection>

      <div className="mt-6 border-t border-border pt-6">
        <h2 className="text-lg font-bold mb-3">{t("legal.mor.relatedHeading")}</h2>
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

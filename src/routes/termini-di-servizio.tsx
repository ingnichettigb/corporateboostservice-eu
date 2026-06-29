import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/termini-di-servizio")({
  head: () => ({
    meta: [
      { title: i18n.t("legal.servizio.metaTitle") },
      { name: "description", content: i18n.t("legal.servizio.metaDesc") },
      { property: "og:title", content: i18n.t("legal.servizio.metaTitle") },
      { property: "og:description", content: i18n.t("legal.servizio.metaDesc") },
    ],
  }),
  component: ServizioPage,
});

const related = [
  { to: "/prezzi", key: "navPrezzi" },
  { to: "/termini-e-condizioni", key: "navTermini" },
  { to: "/privacy-policy", key: "navPrivacy" },
  { to: "/politica-di-rimborso", key: "navRimborso" },
] as const;

function ServizioPage() {
  const { t } = useTranslation();
  const sections = t("legal.servizio.sections", { returnObjects: true }) as {
    heading: string;
    body: string;
  }[];

  return (
    <LegalLayout badge={t("legal.servizio.badge")} title={t("legal.servizio.title")} subtitle={t("legal.servizio.subtitle")}>
      {sections.map((s) => (
        <LegalSection key={s.heading} heading={s.heading}>
          <p>{s.body}</p>
        </LegalSection>
      ))}

      <LegalSection heading={t("legal.paddleServizioHeading")}>
        <p>{t("legal.paddleServizioBody")}</p>
      </LegalSection>

      <div className="mt-6 border-t border-border pt-6">
        <h2 className="text-lg font-bold mb-3">{t("legal.servizio.relatedHeading")}</h2>
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

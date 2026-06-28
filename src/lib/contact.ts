import i18n from "@/i18n";

export const CONTACT_EMAIL = "team@corporateboostservice.eu";

/** Default message pre-filled in the email body for purchase / info requests. */
export function defaultQuoteBody() {
  const isEn = i18n.language?.startsWith("en");
  return isEn
    ? [
        "Dear CorporateBoostService,",
        "",
        "I would like to activate the digital product indicated in the subject for my company. Could you let me know how to proceed?",
        "",
        "Thank you",
      ].join("\n")
    : [
        "Spettabile CorporateBoostService,",
        "",
        "desidero attivare il prodotto digitale indicato in oggetto per la mia azienda. Potreste indicarmi come procedere?",
        "",
        "Grazie",
      ].join("\n");
}

/** Build a mailto: href targeting the official inbox. */
export function buildMailto(subject: string, body?: string) {
  const parts: string[] = [];
  if (subject) parts.push(`subject=${encodeURIComponent(subject)}`);
  parts.push(`body=${encodeURIComponent(body ?? defaultQuoteBody())}`);
  return `mailto:${CONTACT_EMAIL}?${parts.join("&")}`;
}

import i18n from "@/i18n";

export const CONTACT_EMAIL = "team@corporateboostservice.eu";

/** Default message pre-filled in the email body for quote / info requests. */
export function defaultQuoteBody() {
  const isEn = i18n.language?.startsWith("en");
  return isEn
    ? "Dear CorporateBoostService, I would like a quote for no. ___ applications related to the service in subject. Thank you"
    : "Spettabile CorporateBoostService, chiedo preventivo per n. ___ applicazioni relative al servizio in oggetto. Grazie";
}

/** Build a mailto: href targeting the official inbox. */
export function buildMailto(subject: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  params.set("body", body ?? defaultQuoteBody());
  const query = params.toString();
  return `mailto:${CONTACT_EMAIL}${query ? `?${query}` : ""}`;
}

export const CONTACT_EMAIL = "team@corporateboostservice.eu";

/** Build a mailto: href targeting the official inbox. */
export function buildMailto(subject: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${CONTACT_EMAIL}${query ? `?${query}` : ""}`;
}

// v54 (decizie proprietar, 10.10.2026): site-ul nu trimite clienții spre
// producători. Linkurile externe se păstrează doar spre autorități și surse
// publice neutre (legislație UE, achiziții publice, protecția datelor).
const ALLOWED_HOSTS = [
  /(^|\.)europa\.eu$/,          // EUR-Lex, Comisia Europeană
  /(^|\.)e-licitatie\.ro$/,     // SEAP/SICAP
  /(^|\.)dataprotection\.ro$/,  // ANSPDCP
  /(^|\.)gov\.ro$/,
  /(^|\.)just\.ro$/,            // legislatie.just.ro
];

export function isNeutralPublicUrl(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    return ALLOWED_HOSTS.some((re) => re.test(host));
  } catch {
    return false;
  }
}

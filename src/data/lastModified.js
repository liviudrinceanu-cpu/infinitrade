// Real lastModified dates for sitemap.js, sourced from git history of the
// content/data files that drive each route group.
//
// HOW TO KEEP THIS ACCURATE:
// Whenever you edit a page or a data file listed below, also bump the
// matching date here to today's date (YYYY-MM-DD). This is what tells
// Google when content actually changed - stale/hardcoded dates get ignored
// by search engines and defeat the purpose of `lastModified` in the sitemap.
//
// Dates were seeded via: git log -1 --format=%cs -- <file>

export const lastModified = {
  // Static pages - one date per page, sourced from that page's own file
  home: '2026-02-14', // src/app/page.js
  contact: '2026-03-02', // src/app/contact/page.js
  despreNoi: '2026-02-13', // src/app/despre-noi/page.js
  blog: '2026-09-23', // src/app/blog/page.js (index; individual articles use their own dates)
  studiiDeCaz: '2026-02-14', // src/app/studii-de-caz/page.js (index; individual case studies use caseStudies date below)
  industrii: '2026-02-14', // src/app/industrii/page.js (index; individual industry pages use industries date below)
  faq: '2026-02-14', // src/app/faq/page.js
  certificari: '2026-02-14', // src/app/certificari/page.js
  testimoniale: '2026-02-14', // src/app/testimoniale/page.js
  ghidComparativ: '2026-02-14', // src/app/ghid-comparativ/page.js
  ghidAchizitiiSeap: '2026-02-14', // src/app/ghid-achizitii-seap/page.js
  gdpr: '2026-02-14', // src/app/gdpr/page.js
  politicaConfidentialitate: '2026-02-14', // src/app/politica-confidentialitate/page.js
  politicaCookies: '2026-02-14', // src/app/politica-cookies/page.js
  termeniSiConditii: '2026-02-14', // src/app/termeni-si-conditii/page.js
  echipa: '2026-02-14', // src/app/echipa/page.js
  echipamenteDiverse: '2026-02-13', // src/app/echipamente-diverse/page.js

  // Data-driven groups - one shared date per group, from the data file(s)
  // that feed all pages in that group
  categories: '2026-09-23', // src/data/products.js + src/data/equipmentCategories.js
  brands: '2026-09-23', // src/data/allBrandsIndex.js + src/data/brandContent.js
  industries: '2026-09-09', // src/data/industries.js
  caseStudies: '2026-02-14', // src/data/caseStudies.js

  // Blog does NOT use this map - it already uses article.dateModified || article.date per article. Keep that logic.
};

// F3-03 — the single "when was this brand page actually last updated" value.
// Used by BOTH the visible "Actualizat: <dată>" line
// (src/app/brand/[brandSlug]/BrandPageClient.js, heading-phrasings.md B-14)
// and the JSON-LD `dateModified` (src/lib/schema/brand.js) — one source, two
// surfaces, so they can never disagree (decisions-coverage-aeo.md §C5).
//
// Value = the most recent of: the group-wide `lastModified.brands` date,
// the brand's own `lastVerified` (brandContent.js data contract), and every
// `changelog[].date` on that brand. Plain ISO 'YYYY-MM-DD' strings compare
// correctly with `>` (lexicographic order matches chronological order).
// Never returns a date earlier than `lastModified.brands`.
export function getBrandUpdatedDate(brandContent) {
  let latest = lastModified.brands;
  if (brandContent?.lastVerified && brandContent.lastVerified > latest) {
    latest = brandContent.lastVerified;
  }
  if (Array.isArray(brandContent?.changelog)) {
    for (const entry of brandContent.changelog) {
      if (entry?.date && entry.date > latest) latest = entry.date;
    }
  }
  return latest;
}

// v19 (D-2026-09-27, audit R1): eight brands exist under two slugs, each with
// its own content page (the same manufacturer entered twice in different
// waves). Two indexable pages with the same name compete for the same
// queries. Owner rule: no indexed URL is deleted or redirected, so the
// secondary slug stays live but is noindex (follow), left out of the
// sitemap, and links to the primary page. The primary is the slug with
// Search Console impressions in the frozen 2026-09-07 reference
// (schneider-electric 126, brook 9, phoenix 5, elmo 2), else the slug that
// spells the full brand name.
export const DUPLICATE_BRANDS = {
  'schneider': 'schneider-electric',
  'brook-crompton': 'brook',
  'phoenix-contact': 'phoenix',
  'elmo-rietschle': 'elmo',
  'elprom': 'elprom-harmanli',
  'hoyer': 'hoyer-motors',
  'menzel': 'menzel-elektromotoren',
  'weidmuller-electric': 'weidmuller',
};

export function getPrimaryForDuplicate(simpleSlug) {
  return DUPLICATE_BRANDS[simpleSlug] || null;
}

// v16 (D-2026-09-26): the "other brands in this category" block of a brand
// page, computed on the server (src/app/brand/[brandSlug]/page.js). The
// client component used to receive the whole allCategoriesUnified (every
// brand of every category) as a prop — serialized into every brand page —
// and imported brandCategoryLinks.js to rank them. Server-only by convention.
//
// Ranking (v11, v44): product types shared with this brand, then
// featured, then Google impressions (v44, GSC), then name.

import { allCategoriesUnified } from './allBrandsIndex';
import { getProductTypesForBrand } from './brandCategoryLinks';
import { getGscBrandImpressions } from './gscBrandImpressions';

const LEGACY_PREFIXES = [
  'pompe-industriale-', 'pompe-vid-industriale-',
  'robineti-industriali-', 'robineti-reglare-industriali-',
  'regulatoare-presiune-industriale-', 'oale-condens-industriale-',
  'supape-siguranta-industriale-', 'motoare-electrice-industriale-',
  'motoare-atex-industriale-', 'schimbatoare-caldura-industriale-',
  'racitoare-ulei-industriale-', 'suflante-industriale-',
  'suflante-roots-industriale-', 'ventilatoare-industriale-',
  'compresoare-industriale-',
];
function toSimpleSlug(slug) {
  const prefix = LEGACY_PREFIXES.find((p) => slug.startsWith(p));
  return prefix ? slug.slice(prefix.length) : slug;
}

// { [categorySlug]: { count, top: [{ slug, name }] (≤ 8) } } for every
// category the brand belongs to.
export function getRelatedBrandsByCategory(brand, limit = 8) {
  const ownTypes = new Set(getProductTypesForBrand(brand.simpleSlug));
  const out = {};
  for (const cat of brand.categories || []) {
    const category = allCategoriesUnified.find((c) => c.slug === cat.slug);
    const others = ((category?.brands) || [])
      .map((b) => ({ ...b, simple: toSimpleSlug(b.slug) }))
      .filter((b) => b.name !== brand.name && b.simple !== brand.simpleSlug);
    const ranked = others
      .map((b) => ({ slug: b.simple, name: b.name, featured: Boolean(b.featured), gsc: getGscBrandImpressions(b.simple), shared: getProductTypesForBrand(b.simple).filter((t) => ownTypes.has(t)).length }))
      // v44: la tipuri comune egale, întâi mărcile pe care Google le afișează deja (GSC).
      .sort((a, b) => (b.shared - a.shared) || (Number(b.featured) - Number(a.featured)) || (b.gsc - a.gsc) || a.name.localeCompare(b.name, 'ro'));
    out[cat.slug] = { count: others.length, top: ranked.slice(0, limit).map(({ slug, name }) => ({ slug, name })) };
  }
  return out;
}

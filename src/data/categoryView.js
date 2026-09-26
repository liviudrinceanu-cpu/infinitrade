// v16 (D-2026-09-26): everything the category page needs from the brand
// index, computed on the server (src/app/[category]/page.js) and passed to
// CategoryClient as a compact prop. CategoryClient used to import
// allBrandsIndex / brandContent / usBrands / brandCategoryLinks itself, which
// put every brandContent batch into the page's JavaScript. Server-only by
// convention: never import this module from a client component.
//
// Ordering rules are unchanged from v11/v12 (D-2026-09-22 C): featured, then
// brands with a sourced content page, then Romanian search demand (ordering
// only, never a rendered figure), then name.

import { allCategoriesUnified } from './allBrandsIndex';
import { hasBrandContent } from './brandContent';
import { getBrandDemand } from './brandDemand';
import { getBrandsForProductType } from './brandCategoryLinks';
import { getUsBrandsForCategory } from './usBrands';
import { getCategoryFaq } from './categoryFaq';

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

export const TOP_CARDS = 24;

export function buildCategoryView(category) {
  const ranked = [...(category.brands || [])]
    .map((b) => {
      const simpleSlug = toSimpleSlug(b.slug);
      return { name: b.name, simpleSlug, description: b.description || '', featured: Boolean(b.featured), hasContent: hasBrandContent(simpleSlug), demand: getBrandDemand(simpleSlug) };
    })
    .sort((a, b) => (Number(b.featured) - Number(a.featured)) || (Number(b.hasContent) - Number(a.hasContent)) || (b.demand - a.demand) || a.name.localeCompare(b.name, 'ro'));

  const rankBySlug = new Map(ranked.map((b, i) => [b.simpleSlug, i]));
  const nameBySlug = new Map(ranked.map((b) => [b.simpleSlug, b.name]));
  const typeBrands = Object.fromEntries((category.productTypes || []).map((type) => [
    type.slug,
    getBrandsForProductType(type.slug)
      .filter((slug) => rankBySlug.has(slug))
      .sort((a, b) => rankBySlug.get(a) - rankBySlug.get(b))
      .slice(0, 8)
      .map((slug) => ({ slug, name: nameBySlug.get(slug) })),
  ]));

  return {
    brandCount: ranked.length,
    featuredNames: ranked.filter((b) => b.featured).slice(0, 5).map((b) => b.name),
    // Cards carry the description; the A–Z list needs only name/slug/flag.
    topBrands: ranked.slice(0, TOP_CARDS).map(({ demand, ...b }) => b),
    azBrands: ranked.map((b) => ({ name: b.name, simpleSlug: b.simpleSlug, hasContent: b.hasContent })),
    typeBrands,
    usBrands: getUsBrandsForCategory(category.slug).map((b) => ({ simpleSlug: b.simpleSlug, name: b.name, hasContent: Boolean(b.hasContent), euAvailability: b.euAvailability || null })),
    expertFaqs: getCategoryFaq(category.slug),
    otherCategories: allCategoriesUnified
      .filter((c) => c.slug !== category.slug)
      .map((c) => ({ id: c.id, slug: c.slug, name: c.name, tagline: c.tagline || '' })),
    categoryNames: allCategoriesUnified.map((c) => ({ id: c.id, name: c.name })),
  };
}

// The category object without its (large) brand list, for the client prop.
export function slimCategory(category) {
  const { brands, ...rest } = category;
  return rest;
}

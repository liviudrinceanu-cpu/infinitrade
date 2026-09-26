// Unified Brand Index - Combines products.js (5 original categories) + equipmentCategories.js (10 new categories)
// Provides lookup functions for brand pages with simple slugs

import { categories } from './products';
import { equipmentCategories } from './equipmentCategories';
import { NOINDEX_BRANDS } from './noindexBrands';
// getBrandsWithContent is a plain function reading a plain object (brandContent.js
// and its batches do not import this module), so a static import is safe here —
// no circular-import cycle exists. If that ever changes, resolve it lazily with
// a dynamic `await import('./brandContent')` inside getBrandStats() instead.
import { getBrandsWithContent } from './brandContent';
import { BRANDS_EXTENSION, EXTENSION_BY_SLUG } from './brandsExtension';
import { SECONDARY_CATEGORIES } from './brandCategoryLinks';
import { getBrandDemand } from './brandDemand';

// All 15 categories unified
// Branduri-500 (D-2026-09-21): the generated extension (src/data/brandsExtension.js)
// is appended per category here, so every consumer of allCategoriesUnified
// (brand index, category pages, header, sitemap) sees one merged list.
const primaryCategories = [...categories, ...equipmentCategories].map((category) => ({
  ...category,
  brands: [...category.brands, ...(BRANDS_EXTENSION[category.slug] || [])],
}));

// Branduri-500 v11 (D-2026-09-26): secondary category membership. A brand
// keeps its single URL and its primary category (categories[0] on the brand
// object, breadcrumbs, JSON-LD), but the categories it also manufactures for
// (src/data/brandCategoryLinks.js, classified from the brand's own published
// products) list it too — flagged `secondary: true`, slug = simple slug, so
// category pages, the A–Z index, header dropdowns and related-brand blocks
// see it. No new URL, no changed canonical.
const primaryBrandBySlug = new Map();
for (const category of primaryCategories) {
  for (const brand of category.brands) {
    const s = deriveSimpleSlug(brand.slug, category.slug);
    if (!primaryBrandBySlug.has(s)) primaryBrandBySlug.set(s, { brand, categorySlug: category.slug });
  }
}
export const allCategoriesUnified = primaryCategories.map((category) => {
  const own = new Set(category.brands.map((b) => deriveSimpleSlug(b.slug, category.slug)));
  const extra = (SECONDARY_CATEGORIES[category.slug] || [])
    .filter((s) => primaryBrandBySlug.has(s) && !own.has(s))
    .map((s) => {
      const { brand, categorySlug } = primaryBrandBySlug.get(s);
      return { ...brand, slug: s, featured: false, secondary: true, primaryCategory: categorySlug };
    });
  const merged = extra.length ? { ...category, brands: [...category.brands, ...extra] } : category;
  // Keep the displayed per-category count in sync with the merged list (the
  // raw data files only know their own hand-listed brands; a category fed
  // purely by the extension, like aparate-masura-testare, would read "0").
  return { ...merged, stats: { ...(merged.stats || {}), brands: String(merged.brands.length) } };
});

// Strip category prefix from old-style brand slugs to get simple slug
// e.g. 'pompe-industriale-grundfos' -> 'grundfos'
// e.g. 'motoare-electrice-industriale-siemens' -> 'siemens'
function deriveSimpleSlug(brandSlug, categorySlug) {
  // Known category prefixes used in products.js brand slugs
  const prefixes = [
    'pompe-industriale-',
    'pompe-vid-industriale-',
    'robineti-industriali-',
    'robineti-reglare-industriali-',
    'regulatoare-presiune-industriale-',
    'oale-condens-industriale-',
    'supape-siguranta-industriale-',
    'motoare-electrice-industriale-',
    'motoare-atex-industriale-',
    'schimbatoare-caldura-industriale-',
    'racitoare-ulei-industriale-',
    'suflante-industriale-',
    'suflante-roots-industriale-',
    'ventilatoare-industriale-',
    'compresoare-industriale-',
  ];

  for (const prefix of prefixes) {
    if (brandSlug.startsWith(prefix)) {
      return brandSlug.slice(prefix.length);
    }
  }
  // Already a simple slug (equipmentCategories use simple slugs)
  return brandSlug;
}

// D-AEO B6/B1: five brand entries got their display name from a category-specific
// data-file label (e.g. `robineti-industriali-siemens` is named "Siemens Valves"
// because that is the first category the brand is listed under). The slug, the
// data file and the URL are all correct and must not change (owner decision 8) —
// only the rendered name is wrong. This map is consumed in buildBrandIndex() below
// so every consumer (brand pages, sitemap, JSON-LD via brand.name) sees the fix.
export const DISPLAY_NAME_OVERRIDES = {
  siemens: 'Siemens',
  honeywell: 'Honeywell',
  norgren: 'Norgren',
  smc: 'SMC',
  festo: 'Festo',
};

// Build unified brand index
function buildBrandIndex() {
  const brandMap = new Map(); // simpleSlug -> brand object

  // Two passes: primary memberships first, secondary ones (v11) after, so
  // brand.categories[0] is always the primary category whatever the order of
  // the categories themselves.
  const passes = [
    (b) => !b.secondary,
    (b) => Boolean(b.secondary),
  ];
  for (const keep of passes) for (const category of allCategoriesUnified) {
    for (const brand of category.brands) {
      if (!keep(brand)) continue;
      const simpleSlug = deriveSimpleSlug(brand.slug, category.slug);

      if (brandMap.has(simpleSlug)) {
        // Brand already exists - add this category to it
        const existing = brandMap.get(simpleSlug);
        existing.categories.push({
          slug: category.slug,
          name: category.name,
          originalBrandSlug: brand.slug,
          productTypes: category.productTypes || [],
          accessories: category.accessories || [],
          services: category.services || [],
          stats: category.stats,
          icon: category.icon,
          color: category.color,
          gradient: category.gradient,
        });
        // Keep featured if any category marks it featured
        if (brand.featured) existing.featured = true;
      } else if (brand.secondary) {
        // A secondary membership can only extend a brand that already exists
        // (guarded in allCategoriesUnified above); never creates a brand.
        continue;
      } else {
        // New brand entry
        brandMap.set(simpleSlug, {
          simpleSlug,
          name: DISPLAY_NAME_OVERRIDES[simpleSlug] || brand.name,
          country: brand.country,
          description: brand.description,
          featured: brand.featured || false,
          logo: brand.logo || '/brands/placeholder.png',
          categories: [{
            slug: category.slug,
            name: category.name,
            originalBrandSlug: brand.slug,
            productTypes: category.productTypes || [],
            accessories: category.accessories || [],
            services: category.services || [],
            stats: category.stats,
            icon: category.icon,
            color: category.color,
            gradient: category.gradient,
          }],
        });
      }
    }
  }

  return brandMap;
}

const brandIndex = buildBrandIndex();

// All brands as a flat array (unified, deduplicated by simple slug)
export const allBrandsUnified = Array.from(brandIndex.values());

// Get brand by any slug (simple or old prefixed)
export function getBrandByAnySlug(slug) {
  // Try direct lookup by simple slug
  if (brandIndex.has(slug)) {
    return brandIndex.get(slug);
  }

  // Try stripping known prefixes
  const simpleSlug = deriveSimpleSlug(slug, '');
  if (brandIndex.has(simpleSlug)) {
    return brandIndex.get(simpleSlug);
  }

  return null;
}

// Get all simple brand slugs for generateStaticParams
export function getAllBrandSlugs() {
  return Array.from(brandIndex.keys());
}

// Get all original slugs (for redirect mapping)
export function getAllOriginalSlugs() {
  const slugs = [];
  for (const category of allCategoriesUnified) {
    for (const brand of category.brands) {
      const simpleSlug = deriveSimpleSlug(brand.slug, category.slug);
      if (!brand.secondary && brand.slug !== simpleSlug) {
        slugs.push({ original: brand.slug, simple: simpleSlug });
      }
    }
  }
  return slugs;
}

// Get brands filtered by category slug
export function getBrandsByCategory(categorySlug) {
  return allBrandsUnified.filter(brand =>
    brand.categories.some(cat => cat.slug === categorySlug)
  );
}

// Get category by slug
export function getCategoryBySlug(categorySlug) {
  return allCategoriesUnified.find(cat => cat.slug === categorySlug) || null;
}

// Single source of truth for brand counts (D-ARCH C8). Every surface that shows
// a brand count reads this instead of typing a number:
//   - total: every brand with its own page (allBrandsUnified.length)
//   - indexed: total minus brands deliberately kept noindex (src/data/noindexBrands.js)
//   - withContent: total minus brands that only have a thin/auto page, i.e. how many
//     allBrandsUnified slugs also have a rich brandContent entry
export function getBrandStats() {
  const total = allBrandsUnified.length;
  const contentSlugs = new Set(getBrandsWithContent());
  const withContent = allBrandsUnified.filter((b) => contentSlugs.has(b.simpleSlug)).length;
  const indexed = allBrandsUnified.filter((b) => !isBrandNoindex(b.simpleSlug, contentSlugs)).length;
  return { total, indexed, withContent };
}

// Single indexing rule for brand pages (used by page.js metadata, sitemap.js
// and getBrandStats so the three never disagree):
//   - slugs in NOINDEX_BRANDS (zero-evidence, generated list) -> noindex
//   - Branduri-500 extension brands WITHOUT a rich brandContent entry -> noindex
//     (a thin auto page is never offered to Google; it flips to index the
//     moment its content batch lands - no code change needed)
//   - everything else -> index
export function isBrandNoindex(simpleSlug, contentSlugs = null) {
  if (NOINDEX_BRANDS.includes(simpleSlug)) return true;
  if (Object.prototype.hasOwnProperty.call(EXTENSION_BY_SLUG, simpleSlug)) {
    const set = contentSlugs || new Set(getBrandsWithContent());
    return !set.has(simpleSlug);
  }
  return false;
}

// v11 (D-2026-09-26): the brands a category surfaces first — in the header
// dropdowns and anywhere a short list is needed. Same ordering rule as the
// category page cards: featured, then brands with a sourced content page,
// then Romanian search demand (ordering only, never a rendered figure),
// then name. Secondary members are eligible like any other.
export function getTopBrandsForCategory(categorySlug, limit = 10) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return [];
  const contentSlugs = new Set(getBrandsWithContent());
  return category.brands
    .map((b) => {
      const simpleSlug = deriveSimpleSlug(b.slug, category.slug);
      return { simpleSlug, name: DISPLAY_NAME_OVERRIDES[simpleSlug] || b.name, featured: Boolean(b.featured), hasContent: contentSlugs.has(simpleSlug), demand: getBrandDemand(simpleSlug) };
    })
    .filter((b) => !isBrandNoindex(b.simpleSlug, contentSlugs))
    .sort((a, b) => (Number(b.featured) - Number(a.featured)) || (Number(b.hasContent) - Number(a.hasContent)) || (b.demand - a.demand) || a.name.localeCompare(b.name, 'ro'))
    .slice(0, limit);
}

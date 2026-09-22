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

// All 15 categories unified
// Branduri-500 (D-2026-09-21): the generated extension (src/data/brandsExtension.js)
// is appended per category here, so every consumer of allCategoriesUnified
// (brand index, category pages, header, sitemap) sees one merged list.
export const allCategoriesUnified = [...categories, ...equipmentCategories].map((category) => ({
  ...category,
  brands: [...category.brands, ...(BRANDS_EXTENSION[category.slug] || [])],
}));

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

  for (const category of allCategoriesUnified) {
    for (const brand of category.brands) {
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
      if (brand.slug !== simpleSlug) {
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

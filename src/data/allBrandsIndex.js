// Unified Brand Index - Combines products.js (5 original categories) + equipmentCategories.js (10 new categories)
// Provides lookup functions for brand pages with simple slugs

import { categories } from './products';
import { equipmentCategories } from './equipmentCategories';

// All 15 categories unified
export const allCategoriesUnified = [...categories, ...equipmentCategories];

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
          name: brand.name,
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

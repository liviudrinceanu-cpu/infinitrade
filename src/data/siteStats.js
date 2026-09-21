// Site-wide figures derived from data, never typed by hand.
// Source of truth for rules: src/data/entityFacts.json (retired: 500+/800+/300+ claims).
import { getBrandStats } from './allBrandsIndex';

export const FOUNDING_YEAR = 2009;

// { total, indexed, withContent } — single source of truth (D-ARCH C8).
const brandStats = getBrandStats();

// Number of brands with their own page on the site (allBrandsUnified.length)
export const brandCount = brandStats.total;

// Of those, how many are indexed (total minus src/data/noindexBrands.js) and
// how many have rich brandContent rather than just an auto-generated page.
export const indexedBrandCount = brandStats.indexed;
export const brandsWithContentCount = brandStats.withContent;

// Years active, computed at build time
export const yearsActive = new Date().getFullYear() - FOUNDING_YEAR;

export const siteStats = {
  brands: String(brandCount),
  indexedBrands: String(indexedBrandCount),
  brandsWithContent: String(brandsWithContentCount),
  years: String(yearsActive),
  foundingYear: String(FOUNDING_YEAR),
  leadTime: '24-72h',
};

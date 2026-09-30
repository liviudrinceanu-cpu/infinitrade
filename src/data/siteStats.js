// Site-wide figures derived from data, never typed by hand.
// Source of truth for rules: src/data/entityFacts.json (retired: 500+/800+/300+ claims).
// v16 (D-2026-09-26): counts come from the generated src/data/headerMenus.js
// (CLIENT_BRAND_STATS = getBrandStats() at generation time, checked by G19 /
// `node scripts/build-client-indexes.mjs --check`). This module is imported
// by client components (Footer, Hero, contact); importing allBrandsIndex.js
// here shipped every brandContent batch to the browser.
import { CLIENT_BRAND_STATS } from './headerMenus';

export const FOUNDING_YEAR = 2009;

// { total, indexed, withContent } — single source of truth (D-ARCH C8).
const brandStats = CLIENT_BRAND_STATS;

// Number of brands with their own page on the site (allBrandsUnified.length)
export const brandCount = brandStats.total;

// Of those, how many are indexed (total minus src/data/noindexBrands.js) and
// how many have rich brandContent rather than just an auto-generated page.
export const indexedBrandCount = brandStats.indexed;
export const brandsWithContentCount = brandStats.withContent;

// Years active, computed at build time — ani ÎMPLINIȚI de la înființare
// (11 noiembrie 2009, ONRC). v34: înainte era anul curent − 2009, deci afișa
// „17+” încă din ianuarie 2026, deși firma împlinește 17 ani abia pe 11.11.2026.
const FOUNDING_DATE = new Date(Date.UTC(FOUNDING_YEAR, 10, 11));
const now = new Date();
export const yearsActive = now.getUTCFullYear() - FOUNDING_YEAR
  - (now.getUTCMonth() < FOUNDING_DATE.getUTCMonth()
    || (now.getUTCMonth() === FOUNDING_DATE.getUTCMonth() && now.getUTCDate() < FOUNDING_DATE.getUTCDate()) ? 1 : 0);

export const siteStats = {
  brands: String(brandCount),
  indexedBrands: String(indexedBrandCount),
  brandsWithContent: String(brandsWithContentCount),
  years: String(yearsActive),
  foundingYear: String(FOUNDING_YEAR),
  leadTime: '24–72 h',
};

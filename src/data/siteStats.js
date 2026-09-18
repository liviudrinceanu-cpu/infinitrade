// Site-wide figures derived from data, never typed by hand.
// Source of truth for rules: src/data/entityFacts.json (retired: 500+/800+/300+ claims).
import { allBrandsUnified } from './allBrandsIndex';

export const FOUNDING_YEAR = 2009;

// Number of brands with their own page on the site (allBrandsUnified.length)
export const brandCount = allBrandsUnified.length;

// Years active, computed at build time
export const yearsActive = new Date().getFullYear() - FOUNDING_YEAR;

export const siteStats = {
  brands: String(brandCount),
  years: String(yearsActive),
  foundingYear: String(FOUNDING_YEAR),
  leadTime: '24-72h',
};

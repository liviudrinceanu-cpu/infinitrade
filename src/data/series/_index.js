// src/data/series/_index.js — aggregates every src/data/series/<brand>.js
// into one index (decisions-architecture.md B "Series"). Add one import per
// brand file; the page route, the sitemap and the brand page all read this.
import { series as sew } from './sew';
import { series as ariArmaturen } from './ari-armaturen';

export const seriesIndex = [...sew, ...ariArmaturen];

export function getSeries(brandSlug, seriesSlug) {
  return seriesIndex.find((s) => s.brand === brandSlug && s.slug === seriesSlug) || null;
}

export function getSeriesForBrand(brandSlug) {
  return seriesIndex.filter((s) => s.brand === brandSlug);
}

// src/data/series/_index.js — aggregates every src/data/series/<brand>.js
// into one index (decisions-architecture.md B "Series"). Add one import per
// brand file; the page route, the sitemap and the brand page all read this.
import { series as sew } from './sew';
import { series as ariArmaturen } from './ari-armaturen';
import { series as wika } from './wika';
import { series as euchner } from './euchner';
import { series as leser } from './leser';
import { series as linak } from './linak';
import { series as becker } from './becker';
import { series as ktr } from './ktr';
import { series as burster } from './burster';
import { series as atos } from './atos';
import { series as deublin } from './deublin';
import { series as gestra } from './gestra';
import { series as keller } from './keller';
import { series as kern } from './kern';
import { series as lowara } from './lowara';
import { series as mankenberg } from './mankenberg';
import { series as victaulic } from './victaulic';
import { series as walvoil } from './walvoil';

export const seriesIndex = [...sew, ...ariArmaturen, ...wika, ...euchner, ...leser, ...linak, ...becker, ...ktr, ...burster, ...atos, ...deublin, ...gestra, ...keller, ...kern, ...lowara, ...mankenberg, ...victaulic, ...walvoil];

export function getSeries(brandSlug, seriesSlug) {
  return seriesIndex.find((s) => s.brand === brandSlug && s.slug === seriesSlug) || null;
}

export function getSeriesForBrand(brandSlug) {
  return seriesIndex.filter((s) => s.brand === brandSlug);
}

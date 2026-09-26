/**
 * Brand Content - Rich SEO content for brand landing pages
 *
 * This file merges all 46 batches of brand content into a single export
 * (batch1..18 hold written content, repaired Sept 2026 with sources; batch39..55 hold the
 * Branduri-500 wave-1/wave-2 content (Sept 2026); batch19..38 are reserved shards, each
 * either empty — marked with `__EMPTY_SHARD__` for scripts/gates/g04-import.mjs —
 * or filled in by a later content-writing wave via scripts/assign-batch.mjs).
 * Each batch contains detailed information for specific brands including:
 * - Company overview and history
 * - Key products and applications
 * - Industries served
 * - Certifications
 * - Infinitrade relationship and services
 *
 * CRITICAL: All content is factual about our supply capabilities.
 * We do NOT claim official distributor status where not authorized.
 *
 * ---------------------------------------------------------------------------
 * DATA CONTRACT (F3-03) — the fields below are what F4/F6 (content writers)
 * add to a brand entry, and EXACTLY what src/app/brand/[brandSlug]/
 * BrandPageClient.js renders. `ALLOWED_KEYS` in scripts/audit-brand-content.mjs
 * already whitelists all of them (rule B1); this comment is the shape
 * contract those writers follow so the audit and the live page agree.
 *
 * Every field below is OPTIONAL and renders ONLY when present — an absent
 * field means the matching question-H2 section is omitted entirely, never
 * rendered empty or with invented filler (heading-phrasings.md §1.1).
 *
 *   sources: [{ title, url, publisher, accessed }]
 *     - One entry per third-party fact the page states (founded,
 *       headquarters, employees, certifications, or anything in `ownFact`).
 *     - `title`     : the source page's own title (string, required).
 *     - `url`       : full https:// URL, the manufacturer's own page or a
 *                     standards body — never a search result (required).
 *     - `publisher` : the organisation the source belongs to, e.g.
 *                     "Grundfos" (required).
 *     - `accessed`  : ISO date 'YYYY-MM-DD' the writer actually fetched and
 *                     confirmed the page — never invented, never today's
 *                     date unless the fetch happened today (required).
 *     - Renders under B-13 ("De unde sunt datele din pagină?") as a visible
 *       ordered list (`<ol>`), each item linking `url` with
 *       `rel="nofollow noopener"` and showing `accessed`. Coverage class
 *       minimums (decisions-coverage-aeo.md §A3): 3 for `transactional`,
 *       2 for every other class (`sourcesMin` in coverage-policy.json).
 *
 *   ownFact: string
 *     - ONE sentence stating a real, checkable fact about what we can
 *       source or hold for this brand (e.g. a stock.tsv-backed SKU/date, or
 *       an anonymised demand aggregate genuinely present in the brand's
 *       plan-v2 packet). NEVER a price, an invented quantity, or a
 *       Romanian-market claim the packet does not support — when no such
 *       fact exists, leave the field out entirely; the template falls back
 *       to the registry sourcing statement instead of inventing one.
 *     - Renders as the first sentence under B-02 ("Ce avem pe stoc de la
 *       <Brand>?").
 *
 *   limitation: string
 *     - ONE sentence stating plainly what we cannot source, confirm or
 *       attest for this brand (a sub-range, a certification, a service) —
 *       never invented; only written when a real fact backs it.
 *     - Renders under B-09 ("Ce nu putem furniza de la <Brand>?"); the
 *       section is omitted (not rendered empty) when this field is absent.
 *
 *   lastVerified: 'YYYY-MM-DD'
 *     - The date this brand's data was last checked against its sources.
 *       Overrides the group-wide `lastModified.brands` date (src/data/
 *       lastModified.js) when more recent — see `getBrandUpdatedDate()` in
 *       that file, used by both the visible "Actualizat:" line
 *       (BrandPageClient.js, B-14) and the JSON-LD `dateModified`
 *       (src/lib/schema/brand.js), so the two never disagree.
 *
 *   changelog: [{ date: 'YYYY-MM-DD', note: string }]
 *     - What changed on this brand's page, most recent entries meaningful
 *       to a returning reader/crawler (never a future date).
 *     - Renders under B-14 ("Ce s-a schimbat pe pagina <Brand>?") as a
 *       dated list; also feeds `getBrandUpdatedDate()` (its max `date`
 *       competes with `lastVerified` and `lastModified.brands` for the
 *       single "Actualizat:" value used everywhere on the page).
 *
 *   evidenceClass: 'transactional' | 'gsc-only' | 'zero-evidence' |
 *                  'history-only' | 'unclassified'
 *     - Copied from coverage-policy.json's per-brand row (plan-v2). Governs
 *       which blocks/word-count band the brand's page must satisfy (G7/G10).
 *       Not itself rendered — read by gates, kept here so a writer can see
 *       which contract they are filling without re-opening coverage-policy.json.
 *
 *   tier: number
 *     - Queue-order metadata only (decisions-coverage-aeo.md §A1: evidence
 *       class governs the contract, tier only orders the backlog). Not
 *       rendered.
 * ---------------------------------------------------------------------------
 */

import { brandContentBatch1 } from './brandContent-batch1';
import { brandContentBatch2 } from './brandContent-batch2';
import { brandContentBatch3 } from './brandContent-batch3';
import { brandContentBatch4 } from './brandContent-batch4';
import { brandContentBatch5 } from './brandContent-batch5';
import { brandContentBatch6 } from './brandContent-batch6';
import { brandContentBatch7 } from './brandContent-batch7';
import { brandContentBatch8 } from './brandContent-batch8';
import { brandContentBatch9 } from './brandContent-batch9';
import { brandContentBatch10 } from './brandContent-batch10';
import { brandContentBatch11 } from './brandContent-batch11';
import { brandContentBatch12 } from './brandContent-batch12';
import { brandContentBatch13 } from './brandContent-batch13';
import { brandContentBatch14 } from './brandContent-batch14';
import { brandContentBatch15 } from './brandContent-batch15';
import { brandContentBatch16 } from './brandContent-batch16';
import { brandContentBatch17 } from './brandContent-batch17';
import { brandContentBatch18 } from './brandContent-batch18';
import { brandContentBatch19 } from './brandContent-batch19';
import { brandContentBatch20 } from './brandContent-batch20';
import { brandContentBatch21 } from './brandContent-batch21';
import { brandContentBatch22 } from './brandContent-batch22';
import { brandContentBatch23 } from './brandContent-batch23';
import { brandContentBatch24 } from './brandContent-batch24';
import { brandContentBatch25 } from './brandContent-batch25';
import { brandContentBatch26 } from './brandContent-batch26';
import { brandContentBatch27 } from './brandContent-batch27';
import { brandContentBatch28 } from './brandContent-batch28';
import { brandContentBatch29 } from './brandContent-batch29';
import { brandContentBatch30 } from './brandContent-batch30';
import { brandContentBatch31 } from './brandContent-batch31';
import { brandContentBatch32 } from './brandContent-batch32';
import { brandContentBatch33 } from './brandContent-batch33';
import { brandContentBatch34 } from './brandContent-batch34';
import { brandContentBatch35 } from './brandContent-batch35';
import { brandContentBatch36 } from './brandContent-batch36';
import { brandContentBatch37 } from './brandContent-batch37';
import { brandContentBatch38 } from './brandContent-batch38';
import { brandContentBatch39 } from './brandContent-batch39';
import { brandContentBatch40 } from './brandContent-batch40';
import { brandContentBatch41 } from './brandContent-batch41';
import { brandContentBatch42 } from './brandContent-batch42';
import { brandContentBatch43 } from './brandContent-batch43';
import { brandContentBatch44 } from './brandContent-batch44';
import { brandContentBatch45 } from './brandContent-batch45';
import { brandContentBatch46 } from './brandContent-batch46';
import { brandContentBatch47 } from './brandContent-batch47';
import { brandContentBatch48 } from './brandContent-batch48';
import { brandContentBatch49 } from './brandContent-batch49';
import { brandContentBatch50 } from './brandContent-batch50';
import { brandContentBatch51 } from './brandContent-batch51';
import { brandContentBatch52 } from './brandContent-batch52';
import { brandContentBatch53 } from './brandContent-batch53';
import { brandContentBatch54 } from './brandContent-batch54';
import { brandContentBatch55 } from './brandContent-batch55';
import { brandContentBatch56 } from './brandContent-batch56';
import { brandContentBatch57 } from './brandContent-batch57';
import { brandContentBatch58 } from './brandContent-batch58';
import { brandContentBatch59 } from './brandContent-batch59';
import { brandContentBatch60 } from './brandContent-batch60';
import { brandContentBatch61 } from './brandContent-batch61';
import { brandContentBatch62 } from './brandContent-batch62';
import { brandContentBatch63 } from './brandContent-batch63';
import { brandContentBatch64 } from './brandContent-batch64';
import { brandContentBatch65 } from './brandContent-batch65';
import { brandContentBatch66 } from './brandContent-batch66';
import { brandContentBatch67 } from './brandContent-batch67';
import { brandContentBatch68 } from './brandContent-batch68';
import { brandContentBatch69 } from './brandContent-batch69';
import { brandContentBatch70 } from './brandContent-batch70';
import { brandContentBatch71 } from './brandContent-batch71';
import { brandContentBatch72 } from './brandContent-batch72';
import { brandContentBatch73 } from './brandContent-batch73';
import { brandContentBatch74 } from './brandContent-batch74';
import { brandContentBatch75 } from './brandContent-batch75';
import { brandContentBatch76 } from './brandContent-batch76';
import { brandContentBatch77 } from './brandContent-batch77';
import { brandContentBatch78 } from './brandContent-batch78';
import { brandContentBatch79 } from './brandContent-batch79';
import { brandContentBatch80 } from './brandContent-batch80';
import { brandContentBatch81 } from './brandContent-batch81';
import { brandContentBatch82 } from './brandContent-batch82';
import { brandContentBatch83 } from './brandContent-batch83';
import { brandContentBatch84 } from './brandContent-batch84';
import { brandContentBatch85 } from './brandContent-batch85';
import { brandContentBatch86 } from './brandContent-batch86';
import { brandContentBatch87 } from './brandContent-batch87';
import { brandContentBatch88 } from './brandContent-batch88';
import { brandContentBatch89 } from './brandContent-batch89';
import { brandContentBatch90 } from './brandContent-batch90';
import { brandContentBatch91 } from './brandContent-batch91';
import { brandContentBatch92 } from './brandContent-batch92';
import { brandContentBatch93 } from './brandContent-batch93';
import { brandContentBatch94 } from './brandContent-batch94';
import { brandContentBatch95 } from './brandContent-batch95';
import { brandContentBatch96 } from './brandContent-batch96';
import { brandContentBatch97 } from './brandContent-batch97';
import { brandContentBatch98 } from './brandContent-batch98';
import { brandContentBatch99 } from './brandContent-batch99';
import { brandContentBatch100 } from './brandContent-batch100';
import { brandContentBatch101 } from './brandContent-batch101';
import { brandContentBatch102 } from './brandContent-batch102';
import { brandContentBatch103 } from './brandContent-batch103';
import { brandContentBatch104 } from './brandContent-batch104';
import { brandContentBatch105 } from './brandContent-batch105';
import { brandContentBatch106 } from './brandContent-batch106';
import { brandContentBatch107 } from './brandContent-batch107';
import { brandContentBatch108 } from './brandContent-batch108';
import { brandContentBatch109 } from './brandContent-batch109';
import { brandContentBatch110 } from './brandContent-batch110';
import { brandContentBatch111 } from './brandContent-batch111';
import { brandContentBatch112 } from './brandContent-batch112';
import { brandContentBatch113 } from './brandContent-batch113';
import { brandContentBatch114 } from './brandContent-batch114';
import { brandContentBatch115 } from './brandContent-batch115';
import { brandContentBatch116 } from './brandContent-batch116';
import { brandContentBatch117 } from './brandContent-batch117';
import { brandContentBatch118 } from './brandContent-batch118';
import { brandContentBatch119 } from './brandContent-batch119';
import { brandContentBatch120 } from './brandContent-batch120';
import { brandContentBatch121 } from './brandContent-batch121';
import { brandContentBatch122 } from './brandContent-batch122';
import { brandContentBatch123 } from './brandContent-batch123';
import { brandContentBatch124 } from './brandContent-batch124';
import { brandContentBatch125 } from './brandContent-batch125';
import { brandContentBatch126 } from './brandContent-batch126';
import { brandContentBatch127 } from './brandContent-batch127';
import { brandContentBatch128 } from './brandContent-batch128';
import { brandContentBatch129 } from './brandContent-batch129';
import { brandContentBatch130 } from './brandContent-batch130';
import { brandContentBatch131 } from './brandContent-batch131';
import { brandContentBatch132 } from './brandContent-batch132';
import { brandContentBatch133 } from './brandContent-batch133';
import { brandContentBatch134 } from './brandContent-batch134';
import { brandContentBatch135 } from './brandContent-batch135';
import { brandContentBatch136 } from './brandContent-batch136';
import { brandContentBatch137 } from './brandContent-batch137';
import { brandContentBatch138 } from './brandContent-batch138';
import { brandContentBatch139 } from './brandContent-batch139';
import { brandContentBatch140 } from './brandContent-batch140';
import { brandContentBatch141 } from './brandContent-batch141';
import { brandContentBatch142 } from './brandContent-batch142';
import { brandContentBatch143 } from './brandContent-batch143';
import { brandContentBatch144 } from './brandContent-batch144';
import { brandContentBatch145 } from './brandContent-batch145';
import { brandContentBatch146 } from './brandContent-batch146';
import { brandContentBatch147 } from './brandContent-batch147';
import { brandContentBatch148 } from './brandContent-batch148';
import { brandContentBatch149 } from './brandContent-batch149';
import { brandContentBatch150 } from './brandContent-batch150';

// Merge all batches into single object
export const brandContent = {
  ...brandContentBatch1,
  ...brandContentBatch2,
  ...brandContentBatch3,
  ...brandContentBatch4,
  ...brandContentBatch5,
  ...brandContentBatch6,
  ...brandContentBatch7,
  ...brandContentBatch8,
  ...brandContentBatch9,
  ...brandContentBatch10,
  ...brandContentBatch11,
  ...brandContentBatch12,
  ...brandContentBatch13,
  ...brandContentBatch14,
  ...brandContentBatch15,
  ...brandContentBatch16,
  ...brandContentBatch17,
  ...brandContentBatch18,
  ...brandContentBatch19,
  ...brandContentBatch20,
  ...brandContentBatch21,
  ...brandContentBatch22,
  ...brandContentBatch23,
  ...brandContentBatch24,
  ...brandContentBatch25,
  ...brandContentBatch26,
  ...brandContentBatch27,
  ...brandContentBatch28,
  ...brandContentBatch29,
  ...brandContentBatch30,
  ...brandContentBatch31,
  ...brandContentBatch32,
  ...brandContentBatch33,
  ...brandContentBatch34,
  ...brandContentBatch35,
  ...brandContentBatch36,
  ...brandContentBatch37,
  ...brandContentBatch38,
  ...brandContentBatch39,
  ...brandContentBatch40,
  ...brandContentBatch41,
  ...brandContentBatch42,
  ...brandContentBatch43,
  ...brandContentBatch44,
  ...brandContentBatch45,
  ...brandContentBatch46,
  ...brandContentBatch47,
  ...brandContentBatch48,
  ...brandContentBatch49,
  ...brandContentBatch50,
  ...brandContentBatch51,
  ...brandContentBatch52,
  ...brandContentBatch53,
  ...brandContentBatch54,
  ...brandContentBatch55,
  ...brandContentBatch56,
  ...brandContentBatch57,
  ...brandContentBatch58,
  ...brandContentBatch59,
  ...brandContentBatch60,
  ...brandContentBatch61,
  ...brandContentBatch62,
  ...brandContentBatch63,
  ...brandContentBatch64,
  ...brandContentBatch65,
  ...brandContentBatch66,
  ...brandContentBatch67,
  ...brandContentBatch68,
  ...brandContentBatch69,
  ...brandContentBatch70,
  ...brandContentBatch71,
  ...brandContentBatch72,
  ...brandContentBatch73,
  ...brandContentBatch74,
  ...brandContentBatch75,
  ...brandContentBatch76,
  ...brandContentBatch77,
  ...brandContentBatch78,
  ...brandContentBatch79,
  ...brandContentBatch80,
  ...brandContentBatch81,
  ...brandContentBatch82,
  ...brandContentBatch83,
  ...brandContentBatch84,
  ...brandContentBatch85,
  ...brandContentBatch86,
  ...brandContentBatch87,
  ...brandContentBatch88,
  ...brandContentBatch89,
  ...brandContentBatch90,
  ...brandContentBatch91,
  ...brandContentBatch92,
  ...brandContentBatch93,
  ...brandContentBatch94,
  ...brandContentBatch95,
  ...brandContentBatch96,
  ...brandContentBatch97,
  ...brandContentBatch98,
  ...brandContentBatch99,
  ...brandContentBatch100,
  ...brandContentBatch101,
  ...brandContentBatch102,
  ...brandContentBatch103,
  ...brandContentBatch104,
  ...brandContentBatch105,
  ...brandContentBatch106,
  ...brandContentBatch107,
  ...brandContentBatch108,
  ...brandContentBatch109,
  ...brandContentBatch110,
  ...brandContentBatch111,
  ...brandContentBatch112,
  ...brandContentBatch113,
  ...brandContentBatch114,
  ...brandContentBatch115,
  ...brandContentBatch116,
  ...brandContentBatch117,
  ...brandContentBatch118,
  ...brandContentBatch119,
  ...brandContentBatch120,
  ...brandContentBatch121,
  ...brandContentBatch122,
  ...brandContentBatch123,
  ...brandContentBatch124,
  ...brandContentBatch125,
  ...brandContentBatch126,
  ...brandContentBatch127,
  ...brandContentBatch128,
  ...brandContentBatch129,
  ...brandContentBatch130,
  ...brandContentBatch131,
  ...brandContentBatch132,
  ...brandContentBatch133,
  ...brandContentBatch134,
  ...brandContentBatch135,
  ...brandContentBatch136,
  ...brandContentBatch137,
  ...brandContentBatch138,
  ...brandContentBatch139,
  ...brandContentBatch140,
  ...brandContentBatch141,
  ...brandContentBatch142,
  ...brandContentBatch143,
  ...brandContentBatch144,
  ...brandContentBatch145,
  ...brandContentBatch146,
  ...brandContentBatch147,
  ...brandContentBatch148,
  ...brandContentBatch149,
  ...brandContentBatch150,
};

/**
 * Get brand content by simple slug
 * @param {string} simpleSlug - The brand's simple slug (e.g., 'grundfos', 'siemens')
 * @returns {Object|null} Brand content object or null if not found
 */
export function getBrandContent(simpleSlug) {
  return brandContent[simpleSlug] || null;
}

/**
 * Check if brand has rich content available
 * @param {string} simpleSlug - The brand's simple slug
 * @returns {boolean} True if content exists
 */
export function hasBrandContent(simpleSlug) {
  return simpleSlug in brandContent;
}

/**
 * Get list of all brands with rich content
 * @returns {string[]} Array of brand simple slugs
 */
export function getBrandsWithContent() {
  return Object.keys(brandContent);
}

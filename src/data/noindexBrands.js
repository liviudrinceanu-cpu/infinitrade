/**
 * src/data/noindexBrands.js — GENERATED FILE. Do not hand-edit.
 *
 * Regenerate with:
 *   node scripts/build-noindex.mjs
 *
 * Source: scripts/build-noindex.mjs, derived from
 *   - out/plan-v2/coverage-policy.json (zero-evidence rows that are on_site)
 *   - out/plan-v2/checks/gsc-reference-2026-09-07.json (impressions guard)
 *
 * NOINDEX_BRANDS = zero-evidence on-site slugs MINUS any slug that earns
 * >=1 impression in the frozen GSC reference. See build-noindex.mjs's own
 * doc comment for why the guard exists (it protects measurably-working
 * pages, e.g. bonfiglioli at 213 impressions/pos 6.4, from a blind noindex).
 *
 * 54 zero-evidence on-site candidate slug(s) in
 * coverage-policy.json, 9 excluded by the
 * impressions guard, 45 slug(s) below.
 * Guard-excluded (kept indexed): asco (1), bonfiglioli (213), dab (7), lafert (2), pedrollo (3), salmson (1), varvel (2), yaskawa (11), ziehl-abegg (2)
 *
 * Inputs: coverage-policy.json generated=2026-09-21T11:14:49.020Z; gsc-reference frozenAt=2026-09-07.
 */

export const NOINDEX_BRANDS = [
  "almatec",
  "amri",
  "atb",
  "badger-meter",
  "blackmer",
  "bohmer",
  "bornemann",
  "bray",
  "cameron",
  "cat-pumps",
  "dezurik",
  "dresser",
  "emit",
  "emmegi",
  "flowserve",
  "flygt",
  "habonim",
  "hengst",
  "jamesbury",
  "legrand",
  "lewa",
  "mahr",
  "makita",
  "marathon",
  "martin-sprocket",
  "mono",
  "msa-safety",
  "mueller",
  "parcol",
  "pcm",
  "pentair",
  "perar",
  "permatex",
  "persta",
  "pratt",
  "putzmeister",
  "roper",
  "schrack",
  "seepex",
  "stahlwille",
  "tesa",
  "truflo",
  "valtec",
  "velan",
  "watt-drive",
];

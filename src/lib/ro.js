// Helperi pure pentru limba română (client-safe).

/**
 * Prepoziția „de” dinaintea unui substantiv numărat.
 * Regula: n % 100 în 1..19 -> fără „de” (1–19, 101–119, 1.016…);
 * n % 100 === 0 sau n % 100 >= 20 -> cu „de” (20 de, 100 de, 167 de).
 * Întoarce „de ” sau șir gol, ca să se poată lipi direct: `${n} ${deNum(n)}branduri`.
 */
export function deNum(n) {
  const v = Math.abs(Math.trunc(Number(n)));
  if (!Number.isFinite(v) || v === 0) return '';
  const r = v % 100;
  return r === 0 || r >= 20 ? 'de ' : '';
}

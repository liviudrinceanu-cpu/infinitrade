// src/data/productTypeContent/_index.js — aggregates every category file into one
// index; the /[category]/[type] route, the sitemap and the category page read this.
import { productTypes as pompeIndustriale } from './pompe-industriale';
import { productTypes as robinetiIndustriali } from './robineti-industriali';
import { productTypes as motoareElectrice } from './motoare-electrice';
import { productTypes as schimbatoareCaldura } from './schimbatoare-caldura';
import { productTypes as suflanteVentilatoare } from './suflante-ventilatoare';
import { productTypes as automatizariIndustriale } from './automatizari-industriale';
import { productTypes as senzoriInstrumentatie } from './senzori-instrumentatie';
import { productTypes as componenteHidraulicePneumatice } from './componente-hidraulice-pneumatice';
import { productTypes as echipamenteElectrice } from './echipamente-electrice';
import { productTypes as componenteMecanice } from './componente-mecanice';
import { productTypes as filtreConsumabile } from './filtre-consumabile';
import { productTypes as sculeInstrumente } from './scule-instrumente';
import { productTypes as echipamenteTermice } from './echipamente-termice';
import { productTypes as lubrifiantiChimice } from './lubrifianti-chimice';
import { productTypes as echipamenteAuxiliare } from './echipamente-auxiliare';
import { productTypes as aparateMasuraTestare } from './aparate-masura-testare';

export const productTypeIndex = [...pompeIndustriale, ...robinetiIndustriali, ...motoareElectrice, ...schimbatoareCaldura, ...suflanteVentilatoare, ...automatizariIndustriale, ...senzoriInstrumentatie, ...componenteHidraulicePneumatice, ...echipamenteElectrice, ...componenteMecanice, ...filtreConsumabile, ...sculeInstrumente, ...echipamenteTermice, ...lubrifiantiChimice, ...echipamenteAuxiliare, ...aparateMasuraTestare];

export function getProductTypeContent(categorySlug, typeSlug) {
  return productTypeIndex.find((t) => t.category === categorySlug && t.slug === typeSlug) || null;
}

export function getProductTypesForCategory(categorySlug) {
  return productTypeIndex.filter((t) => t.category === categorySlug);
}

export function hasProductTypePage(categorySlug, typeSlug) {
  return productTypeIndex.some((t) => t.category === categorySlug && t.slug === typeSlug);
}

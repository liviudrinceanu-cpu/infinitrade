// v32 (D-2026-09-28, proprietar): sursa unică pentru termenele de livrare.
// 24–72 h din stocul nostru sau din stocul furnizorului; produsele fabricate la
// comandă, de regulă 1–4 săptămâni; raritățile, echipamentele și sistemele
// complexe pot depăși 4 săptămâni. Termenul depinde de producător și de
// rezervarea capacității lui de producție și curge de la plata avansului,
// comanda fermă, semnarea contractului sau înscrierea noastră ca furnizor.
// Kept tiny and dependency-free: it is imported by client components.

export const CATEGORY_LEAD_TIME = {
  headline: '24–72 h',
  headlineLabel: 'Livrare din stoc',
  stock: 'Livrare în 24–72 h când reperul este în stocul nostru sau în stocul furnizorului.',
  factory: 'Produsele fabricate la comandă durează de regulă 1–4 săptămâni.',
  special: 'Raritățile, echipamentele și sistemele complexe pot depăși 4 săptămâni: termenul depinde de producător și de rezervarea capacității lui de producție și curge de la plata avansului, comanda fermă, semnarea contractului sau, după caz, înscrierea noastră ca furnizor. Îl confirmăm în ofertă.',
  start: 'Termenul curge de la plata avansului, comanda fermă, semnarea contractului sau, după caz, înscrierea noastră ca furnizor.',
};

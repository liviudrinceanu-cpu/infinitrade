// Same as pass/, changed in exactly one way: the brand's category slug
// ("pompe-industriale-XXX") does not match any entry in allCategoriesUnified
// ("pompe-industriale") — the "category ∈ brand.categories" rule G2 exists for.
export const allCategoriesUnified = [
  {
    slug: 'pompe-industriale',
    name: 'Pompe Industriale',
    productTypes: [{ slug: 'pompe-centrifuge', name: 'Pompe centrifuge' }],
  },
];

export const allBrandsUnified = [
  {
    simpleSlug: 'grundfos',
    name: 'Grundfos',
    categories: [
      {
        slug: 'pompe-industriale-XXX',
        productTypes: [{ slug: 'pompe-centrifuge', name: 'Pompe centrifuge' }],
      },
    ],
  },
];

export function getAllBrandSlugs() {
  return allBrandsUnified.map((b) => b.simpleSlug);
}

export function getBrandByAnySlug(slug) {
  if (slug === 'pompe-industriale-grundfos') return allBrandsUnified[0];
  return allBrandsUnified.find((b) => b.simpleSlug === slug) || null;
}

export function getAllOriginalSlugs() {
  return [{ original: 'pompe-industriale-grundfos', simple: 'grundfos' }];
}

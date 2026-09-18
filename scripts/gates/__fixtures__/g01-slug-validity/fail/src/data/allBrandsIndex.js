// Same as pass/, changed in exactly one way: the second productType slug has an
// uppercase letter, which the ^[a-z0-9]+(-[a-z0-9]+)*$ pattern rejects.
export const allCategoriesUnified = [
  {
    slug: 'pompe-industriale',
    name: 'Pompe Industriale',
    productTypes: [
      { slug: 'pompe-centrifuge', name: 'Pompe centrifuge' },
      { slug: 'Pompe-dozare', name: 'Pompe de dozare' },
    ],
  },
  {
    slug: 'automatizari-industriale',
    name: 'Automatizari Industriale',
    productTypes: [{ slug: 'plc-controllere', name: 'PLC-uri si controllere' }],
  },
];

export const allBrandsUnified = [
  { simpleSlug: 'grundfos', name: 'Grundfos' },
  { simpleSlug: 'siemens', name: 'Siemens' },
];

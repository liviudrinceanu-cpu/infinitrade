// Minimal fixture standing in for the real src/data/allBrandsIndex.js — only the
// shape g01-slug.mjs actually reads: allCategoriesUnified, allBrandsUnified.
export const allCategoriesUnified = [
  {
    slug: 'pompe-industriale',
    name: 'Pompe Industriale',
    productTypes: [
      { slug: 'pompe-centrifuge', name: 'Pompe centrifuge' },
      { slug: 'pompe-dozare', name: 'Pompe de dozare' },
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

// Mirrors the real title-building pattern used in
// src/app/brand/[brandSlug]/page.js's generateMetadata(): a template literal
// interpolating a field off another object.
const brand = { name: 'Grundfos' };

export const items = [
  {
    id: 'grundfos',
    title: `${brand.name} | Catalog Produse 2026 | Infinitrade`,
    description: 'Furnizam echipamente Grundfos in Romania. Livrare 24-72h.',
  },
];

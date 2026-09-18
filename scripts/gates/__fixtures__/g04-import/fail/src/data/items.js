// Same as pass/, changed in exactly one way: `brand` no longer has a `name`
// field, so the template literal silently interpolates `undefined` into the
// title string. `node --check` parses this fine (it is valid syntax) — only a
// real `import()` executes the template literal and produces the bad value,
// which is exactly the bug class G4 exists to catch.
const brand = {};

export const items = [
  {
    id: 'grundfos',
    title: `${brand.name} | Catalog Produse 2026 | Infinitrade`,
    description: 'Furnizam echipamente Grundfos in Romania. Livrare 24-72h.',
  },
];

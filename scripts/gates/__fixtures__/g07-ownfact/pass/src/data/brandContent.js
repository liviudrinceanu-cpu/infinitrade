// Fixture for G7 (F0-07): zero-evidence brand carrying only the honest
// sourcing statement, no own fact — this MUST pass G7.
export const brandContent = {
  'acme-motors': {
    overview:
      'Acme Motors este un producător global de motoare electrice industriale, cu documentație tehnică publicată pe site-ul propriu.',
    keyProducts: ['Motoare asincrone trifazate', 'Motoare cu frână integrată'],
    limitation:
      'Nu deținem date proprii despre volume livrate sau stoc pentru acest brand; informațiile de mai jos provin exclusiv din surse publice ale producătorului. Nu putem confirma preț sau termen de livrare din surse interne — vă spunem clar ce putem și ce nu putem confirma înainte de a cere o ofertă.',
    ownFact: 'none',
    sources: [
      { field: 'overview', url: 'https://acme-motors.example/about', accessed: '2026-01-05' },
      { field: 'keyProducts', url: 'https://acme-motors.example/products', accessed: '2026-01-05' },
    ],
    evidenceClass: 'zero-evidence',
    indexing: 'noindex,follow',
  },
};

export default brandContent;

// Fixture for G10 (F0-08): identical to pass/ except the overview is cut
// down so total word count falls BELOW the history-only band's minimum
// (350 words, derived from coverage-policy.json) — the single change this
// fixture exists to trip. All required blocks are still present, so this
// isolates the word-count check. This MUST fail G10.
export const brandContent = {
  'acme-valves': {
    overview:
      'Acme Valves este un producător industrial de robinete cu bilă și robinete fluture pentru instalații de proces.',
    keyProducts: [
      'Robinete cu bilă flanșate, DN15-DN300, PN16-PN40.',
      'Robinete fluture wafer și lug, DN50-DN600.',
    ],
    faq: [
      { q: 'Ce presiune nominală acoperă gama Acme Valves?', a: 'Robinetele acoperă presiuni nominale de la PN16 până la PN40.' },
      { q: 'Se pot automatiza robinetele Acme Valves?', a: 'Da, corpul respectă interfața ISO 5211.' },
    ],
    ownFact: 'În 2024 am livrat, pentru acest brand, un volum agregat de 34 de poziții — cifră anonimizată.',
    limitation: 'Nu deținem stoc permanent pentru toate diametrele; restul gamei se livrează la comandă, termen orientativ 2-6 săptămâni.',
    sources: [
      { field: 'overview', url: 'https://acme-valves.example/about', accessed: '2026-01-05' },
      { field: 'keyProducts', url: 'https://acme-valves.example/products', accessed: '2026-01-05' },
    ],
    evidenceClass: 'history-only',
    indexing: 'index,follow',
  },
};

export default brandContent;

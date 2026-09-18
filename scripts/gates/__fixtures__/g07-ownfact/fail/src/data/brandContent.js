// Fixture for G7 (F0-07): transactional brand with NO own fact — this MUST
// fail G7. Differs from the pass fixture by the one thing G7 checks: no
// `ownFact` value and no sourcing-statement language (transactional pages do
// not get to substitute one for the other).
export const brandContent = {
  wilo: {
    overview:
      'Wilo este un producător german de pompe industriale, cu o gamă largă de soluții pentru clădiri, industrie și utilități publice.',
    keyProducts: ['Pompe de circulație', 'Pompe submersibile', 'Stații de pompare'],
    ownFact: '',
    sources: [
      { field: 'overview', url: 'https://wilo.com/about', accessed: '2026-01-05' },
      { field: 'keyProducts', url: 'https://wilo.com/products', accessed: '2026-01-05' },
      { field: 'overview', url: 'https://wilo.com/company', accessed: '2026-01-05' },
    ],
    evidenceClass: 'transactional',
    indexing: 'index,follow',
  },
};

export default brandContent;

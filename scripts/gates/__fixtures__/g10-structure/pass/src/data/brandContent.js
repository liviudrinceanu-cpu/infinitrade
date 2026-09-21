// Fixture for G10 (F0-08): a history-only page whose word count sits inside
// its class band ([350,800], derived from coverage-policy.json — NOT typed
// here) and that carries every block the history-only contract requires.
// This MUST pass G10.
export const brandContent = {
  'acme-valves': {
    overview:
      'Acme Valves este un producător industrial de robinete cu bilă și robinete fluture pentru instalații de proces, activ de peste patru decenii pe piețele europene. Gama acoperă diametre nominale de la DN15 până la DN600, presiuni nominale până la PN40, în variante de oțel carbon, oțel inoxidabil și fontă ductilă. Documentația tehnică publică descrie standardele de fabricație respectate (API 6D, ISO 5211 pentru actuatori) și domeniile tipice de utilizare în industria chimică, petrochimică și tratarea apei. Fabrica principală se află în vestul Europei, cu linii de testare hidrostatică pentru fiecare lot produs și rapoarte de conformitate disponibile la cerere pentru proiectele care necesită trasabilitate completă a materialelor și a proceselor de sudare, iar echipa tehnică publică periodic actualizări ale cataloagelor cu toleranțe dimensionale și recomandări de întreținere pentru fiecare familie de produs.',
    keyProducts: [
      'Robinete cu bilă flanșate, DN15-DN300, PN16-PN40, corp din oțel carbon sau inox, montare directă a actuatorului conform ISO 5211, utilizate pe conducte de proces în rafinării și stații de tratare a apei industriale, cu certificare de material pe cerere și opțiune de acționare manuală sau pneumatică.',
      'Robinete fluture wafer și lug, DN50-DN600, disc din inox sau alamă navală, garnitură EPDM sau NBR în funcție de fluidul vehiculat, potrivite pentru izolare pe conducte de aer comprimat, apă și fluide neagresive, cu reductor manual sau actuator electric montat direct pe corp.',
    ],
    faq: [
      { q: 'Ce presiune nominală acoperă gama Acme Valves?', a: 'Robinetele acoperă presiuni nominale de la PN16 până la PN40, în funcție de model și diametru.' },
      { q: 'Se pot automatiza robinetele Acme Valves?', a: 'Da, corpul respectă interfața ISO 5211, compatibilă cu actuatoare electrice sau pneumatice standard din piață.' },
    ],
    ownFact: 'În 2024 am livrat, pentru acest brand, un volum agregat de 34 de poziții către clienți din industria chimică și tratarea apei — cifră anonimizată, fără nume de client, calculată din comenzile efectiv facturate în cursul anului.',
    limitation:
      'Nu deținem un stoc permanent pentru toate diametrele din gama Acme Valves; modelele uzuale (DN50-DN150 în oțel carbon) se livrează din stoc în 24-72h, restul gamei la comandă, termen orientativ 2-6 săptămâni, în funcție de disponibilitatea din fabrică și de complexitatea configurației solicitate de client.',
    sources: [
      { field: 'overview', url: 'https://acme-valves.example/about', accessed: '2026-01-05' },
      { field: 'keyProducts', url: 'https://acme-valves.example/products', accessed: '2026-01-05' },
    ],
    evidenceClass: 'history-only',
    indexing: 'index,follow',
  },
};

export default brandContent;

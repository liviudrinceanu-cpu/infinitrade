// Fixture for G14 (F0-08): two zero-evidence pages that share ONLY the
// allow-listed D-AEO A4 sourcing sentence (entityFacts.json.boilerplate,
// id "sourcing-statement"), each with the <Brand> placeholder filled with
// its own brand name. This MUST pass G14 — the allow-list is what makes the
// shared wording not count as a duplicate-sentence violation.
export const brandContent = {
  'zeta-motors': {
    overview:
      'Zeta Motors produce motoare electrice industriale de mică și medie putere, documentate public pe site-ul propriu al producătorului, cu fișe tehnice descărcabile pentru fiecare familie de produs.',
    keyProducts: ['Motoare asincrone trifazate IE3, 0.75-90 kW'],
    limitation:
      'Nu ținem produse Zeta Motors în stoc; le putem oferta la comandă, termen orientativ 2–6 săptămâni.',
    byline: 'Verificat de inginer mecanic (12 ani, certificări) · actualizat 2026-09-21',
    evidenceClass: 'zero-evidence',
  },
  'omega-drives': {
    overview:
      'Omega Drives fabrică variatoare de frecvență și sisteme de acționare electrică, cu o gamă publicată pe site-ul oficial și un istoric de peste trei decenii pe piața europeană.',
    keyProducts: ['Variatoare de frecvență 0.4-315 kW'],
    limitation:
      'Nu ținem produse Omega Drives în stoc; le putem oferta la comandă, termen orientativ 2–6 săptămâni.',
    byline: 'Verificat de inginer mecanic (12 ani, certificări) · actualizat 2026-09-21',
    evidenceClass: 'zero-evidence',
  },
};

export default brandContent;

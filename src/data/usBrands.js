// src/data/usBrands.js — Branduri-500 v12 (D-2026-09-26, owner request):
// the American manufacturers on the site, for the /branduri-sua hub and the
// "Branduri din SUA" block on category pages. Pure derivation from the brand
// index + the generated extension (industries / euAvailability come from the
// confirmed-brands file of the US wave, verified on each manufacturer's site).
// No new URL per brand: every brand keeps its single /brand/<slug> page.

import { allBrandsUnified } from './allBrandsIndex';
import { EXTENSION_BY_SLUG } from './brandsExtension';
import { getBrandsWithContent } from './brandContent';

// Country labels used across products.js / equipmentCategories.js / the
// extension for US-headquartered manufacturers (a few dual-origin brands are
// written "Suedia/SUA" — they are counted, their current HQ is in the US).
const US_COUNTRY_RE = /(^|[\s/])(SUA|USA|US|Statele Unite)([\s/]|$)/;

export function isUsBrand(brand) {
  return US_COUNTRY_RE.test(brand?.country || '');
}

// Industry taxonomy of the hub. `keys` are the labels used in the confirmed
// file (agents wrote a few longer variants), normalised here to one slug.
export const US_INDUSTRIES = [
  { slug: 'automotive', name: 'Automotive și furnizori tier 1–2', keys: ['automotive'],
    text: 'Liniile de asamblare, presele, robotica de sudură și vopsitoriile din uzinele auto și de la furnizorii lor lucrează cu componente americane de acționare, pneumatică, scule de asamblare, senzori și sisteme de lubrifiere; piesele de schimb trebuie să fie de la același producător ca la punerea în funcțiune.' },
  { slug: 'petrol-gaze', name: 'Petrol și gaze', keys: ['petrol-gaze'],
    text: 'Foraj, extracție, transport prin conducte și rafinare: robineți de control și de siguranță, actuatoare, compresoare, pompe API, instrumentație de proces și echipamente antiex. Multe standarde din domeniu (API, ASME) au origine americană, iar producătorii americani rămân referința de specificare.' },
  { slug: 'chimie', name: 'Chimie și petrochimie', keys: ['chimie', 'petrochimie-chimie'],
    text: 'Reactoare, coloane, schimbătoare de căldură, pompe de dozare și analizoare de proces pentru instalații chimice și petrochimice, unde materialele speciale și trasabilitatea componentelor contează mai mult decât prețul unitar.' },
  { slug: 'energie', name: 'Energie (termo, nuclear, hidro, eolian)', keys: ['energie'],
    text: 'Centrale termo și nucleare, hidrocentrale și parcuri eoliene consumă turbomașini, generatoare, protecții și relee de rețea, robineți de abur și sisteme de monitorizare a vibrațiilor — echipamente cu cicluri de viață lungi și piese de schimb dedicate.' },
  { slug: 'apa', name: 'Apă și ape uzate', keys: ['apa', 'apa-ape-uzate'],
    text: 'Stațiile de tratare și epurare folosesc suflante de aerare, pompe de nămol, sisteme de dozare, filtre și echipamente de separare. Programele de investiții în rețele de apă și canalizare aduc în România echipamente proiectate în SUA.' },
  { slug: 'minerit', name: 'Minerit, ciment și agregate', keys: ['minerit', 'minerit-ciment'],
    text: 'Concasoare, site vibratoare, echipamente de transport pneumatic și de curățare a benzilor, componente hidraulice de forță pentru utilaje grele; consumabile cu uzură mare care se comandă periodic.' },
  { slug: 'metalurgie', name: 'Siderurgie și metalurgie', keys: ['siderurgie-metalurgie', 'metalurgie'],
    text: 'Cuptoare de inducție, linii de tratament termic, echipamente de turnare și sinterizare, filtrare a fumului — instalații mari, cu componente specifice producătorului original.' },
  { slug: 'alimentar', name: 'Alimentar și băuturi', keys: ['alimentar'],
    text: 'Pompe sanitare, robineți igienici, schimbătoare de căldură pentru procesare, sisteme de dozare și de curățare CIP, lubrifianți cu grad alimentar.' },
  { slug: 'farma', name: 'Farmaceutică și biotehnologie', keys: ['farma', 'farma-biotehnologie'],
    text: 'Filtrare sterilă, echipamente de bioprocesare, sisteme de dozare de precizie și instrumentație validabilă; documentația de conformitate a producătorului face parte din livrare.' },
  { slug: 'aerospatial', name: 'Aerospațial și apărare', keys: ['aerospatial', 'aerospatial-aparare'],
    text: 'Echipamente de testare a materialelor, scule de precizie, fixare și prindere, componente hidraulice și electrice certificate; furnizorii americani domină lanțul de aprovizionare al acestei industrii.' },
  { slug: 'semiconductori', name: 'Semiconductori și electronică', keys: ['semiconductori', 'semiconductori-electronica'],
    text: 'Instrumentație de vid și presiune, filtrare ultrapură, controlere de debit pentru gaze și camere curate — echipamente cu toleranțe strânse, produse de un număr mic de fabricanți, mulți din SUA.' },
  { slug: 'data-center', name: 'Centre de date', keys: ['data-centere', 'data-center'],
    text: 'Generatoare de rezervă, UPS-uri și baterii, răcire de precizie și management al cablurilor pentru centre de date; echipamentele critice sunt specificate frecvent pe branduri americane.' },
];

const INDUSTRY_BY_KEY = Object.fromEntries(US_INDUSTRIES.flatMap((i) => i.keys.map((k) => [k, i.slug])));

export const EU_AVAILABILITY_LABEL = {
  usoara: 'filială sau distribuție în Europa',
  medie: 'câțiva distribuitori în Europa',
  dificila: 'greu de găsit în Europa — import la comandă',
};

// Every US brand on the site, with the extra fields of the US wave when present.
export function getUsBrands() {
  const contentSlugs = new Set(getBrandsWithContent());
  return allBrandsUnified
    .filter(isUsBrand)
    .map((b) => {
      const ext = EXTENSION_BY_SLUG[b.simpleSlug] || null;
      const industries = [...new Set((ext?.industries || []).map((k) => INDUSTRY_BY_KEY[k]).filter(Boolean))];
      return {
        simpleSlug: b.simpleSlug,
        name: b.name,
        description: b.description || '',
        country: b.country,
        primaryCategory: b.categories[0],
        categories: b.categories.map((c) => ({ slug: c.slug, name: c.name })),
        hasContent: contentSlugs.has(b.simpleSlug),
        industries,
        euAvailability: ext?.euAvailability || null,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'ro'));
}

export function getUsBrandsForCategory(categorySlug) {
  return getUsBrands().filter((b) => b.categories.some((c) => c.slug === categorySlug));
}

export function getUsBrandsForIndustry(industrySlug) {
  return getUsBrands().filter((b) => b.industries.includes(industrySlug));
}

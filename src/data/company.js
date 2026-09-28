// v20: company data, split out of products.js so client components
// (contact page, Features) don't bundle the whole category/brand list.
// products.js re-exports everything for backwards compatibility.

// Top 15 Industries served
export const targetIndustries = [
  { name: 'Petrochimie și Rafinării', icon: 'Factory', description: 'Echipamente certificate pentru medii ATEX și procese critice' },
  { name: 'Energie și Utilități', icon: 'Zap', description: 'Soluții pentru centrale electrice și termoficare' },
  { name: 'Industria Alimentară', icon: 'Utensils', description: 'Echipamente din inox, certificate pentru contact alimentar' },
  { name: 'Industria Farmaceutică', icon: 'Pill', description: 'Componente pentru medii sterile și camere curate' },
  { name: 'Automotive și Producție', icon: 'Car', description: 'Fiabilitate pentru linii de producție non-stop' },
  { name: 'Construcții Navale', icon: 'Ship', description: 'Echipamente marine, cu certificatele de clasă cerute de proiect' },
  { name: 'Metalurgie și Siderurgie', icon: 'Hammer', description: 'Rezistență pentru temperaturi și condiții extreme' },
  { name: 'Tratare Apă și Mediu', icon: 'Droplet', description: 'Soluții pentru stații epurare și tratare' },
  { name: 'Industria Chimică', icon: 'FlaskConical', description: 'Materiale rezistente chimic și certificări speciale' },
  { name: 'HVAC și Climatizare', icon: 'Thermometer', description: 'Eficiență energetică și confort industrial' },
  { name: 'Minerit și Extracție', icon: 'Mountain', description: 'Echipamente robuste pentru condiții dificile' },
  { name: 'Industria Cimentului', icon: 'Building', description: 'Rezistență la abraziune și praf' },
  { name: 'Industria Hârtiei', icon: 'FileText', description: 'Soluții pentru procese continue' },
  { name: 'Logistică și Depozitare', icon: 'Warehouse', description: 'Sisteme de transport și manipulare' },
  { name: 'Biogaz și Energie Verde', icon: 'Leaf', description: 'Echipamente pentru energie regenerabilă' }
];

export const companyInfo = {
  name: 'Infinitrade Romania',
  legalEntity: 'Driatheli Group SRL',
  tagline: 'Dăm puls industriei',
  description: 'Furnizor de echipamente și piese de schimb industriale pentru departamentele de achiziții, mentenanță și investiții din România, cu depozit în Ghiroda (Timiș).',
  aboutUs: 'Infinitrade România furnizează din 2009 echipamente și piese de schimb industriale pentru departamentele de achiziții și mentenanță: pompe, robineți, motoare, schimbătoare de căldură, suflante, automatizări, instrumentație și componente mecanice. Avem depozit propriu în Ghiroda (Timiș), aducem restul gamei din canalele producătorilor din Europa și, la cerere, din SUA, și ofertăm pe cod de produs, inclusiv pentru licitații SEAP.',
  founded: 2009,
  location: { city: 'Ghiroda', county: 'Timiș', address: 'Calea Lugojului, nr.47/B, Hala nr. 3', country: 'România' },
  contact: { 
    email: 'vanzari@infinitrade-romania.ro', 
    emailSecretariat: 'secretariat@infinitrade-romania.ro', 
    phone: '+40 371 232 404', 
    hours: 'Luni - Vineri / 08:00 - 16:30' 
  },
  // brands/years: see src/data/siteStats.js (derived). 800+ clients / 300+ suppliers retired — no source (entityFacts.json).
  // Date oficiale verificabile (sursa: ONRC/risco.ro 2024)
  officialData: {
    revenue: '16.5M',
    revenueUnit: 'RON',
    revenueYear: '2024',
    employees: '16',
    foundingDate: '2009-11-11',
    cui: 'RO26209397',
    regCom: 'J35/2901/2009',
  },
  certifications: ['Furnizor industrial din 2009', 'Înregistrat în SEAP / SICAP', 'ISO 9001: certificare în curs'],
  industries: ['Petrochimie', 'Energie', 'Alimentar', 'Farmaceutic', 'Automotive', 'Naval', 'Metalurgie', 'HVAC', 'Tratare Apă', 'Minerit', 'Ciment', 'Hârtie', 'Chimie', 'Logistică', 'Biogaz'],
  targetAudience: 'Departamente de achiziții, echipe de mentenanță, ingineri de proiect și responsabili investiții din industria grea'
};

export const features = [
  { icon: 'Package', title: 'Depozit în Ghiroda', description: 'Repere uzuale de mentenanță pe stoc în depozitul din Ghiroda (Timiș), pentru livrare în 24–72 h' },
  { icon: 'Truck', title: 'Termen scris în ofertă', description: 'Din stocul nostru sau din stoc extern: 24–72 h. La comandă: de regulă 1–4 săptămâni; raritățile și sistemele complexe pot depăși 4 săptămâni' },
  { icon: 'Wrench', title: 'Piese de schimb originale', description: 'Componente de la producători, identificate după codul de pe plăcuță sau din documentație' },
  { icon: 'Headphones', title: 'Suport la selecție', description: 'Verificăm datele aplicației și propunem variantele din gama producătorului' },
  { icon: 'Shield', title: 'Documente de conformitate', description: 'Declarații de conformitate și certificate de la producător, la cerere, inclusiv pentru SEAP' },
  { icon: 'Globe', title: 'Producători din Europa și SUA', description: 'Aprovizionare prin canalele producătorilor din Uniunea Europeană și, la comandă, import din SUA' }
];

// Footer industries with links
export const footerIndustries = [
  { name: 'Petrochimie', slug: 'petrochimie' },
  { name: 'Energie', slug: 'energie' },
  { name: 'Alimentar', slug: 'alimentar' },
  { name: 'Farmaceutic', slug: 'farmaceutic' },
  { name: 'Tratare Apă', slug: 'tratare-apa' },
  { name: 'Chimie', slug: 'chimie' },
];

export const ctaMessages = {
  hero: 'Solicită Ofertă Personalizată',
  category: 'Cere Specificații Tehnice',
  brand: 'Verifică Disponibilitate',
  contact: 'Contactează Echipa Tehnică'
};

// v32.5 (proprietar, 28.09.2026): fără persoană de contact nominală; companiile
// scriu departamentului de vânzări (aceeași adresă primește și formularul).
// v28 (proprietar, 27.09.2026): clienți
// care pot fi numiți pe site. Continental Automotive Products NU apare: condițiile
// generale de achiziție Continental (cl. 15) cer acord scris pentru orice
// referire la relația comercială — se adaugă doar cu acordul scris.
export const companyContact = {
  name: 'Departamentul de vânzări',
  email: 'vanzari@infinitrade-romania.ro',
};

// v30 (27.09.2026, confirmat explicit de proprietar: vânzări și în afara SEAP): + Romgaz,
// Transelectrica, Aeroporturi București, Portul Constanța.
export const clientReferences = ['Alro Slatina', 'Hidroelectrica', 'Hidroserv', 'Nuclearelectrica', 'Romgaz', 'Transelectrica', 'Aeroporturi București', 'Portul Constanța (Administrația Porturilor Maritime)'];

// v29 (27.09.2026, confirmat explicit de proprietar): clienți din achiziții
// publice, verificabili în SEAP (agregat sicap.ai pentru CUI 26209397: 1.200
// de achiziții atribuite, 2017–2026; în listă doar autoritățile cu cumpărări
// repetate, ≥ 12 achiziții fiecare). Recalculați la actualizare.
export const publicClientReferences = [
  'CFR Călători',
  'Imprimeria Națională',
  'Aquatim Timișoara',
  'Apavital Iași',
  'Apă Canal Sibiu',
  'Compania de Apă Someș',
  'COMOTI (Institutul Național de Cercetare-Dezvoltare Turbomotoare)',
  'Universitatea Politehnica Timișoara',
];

export const publicProcurementStats = {
  count: '1.200',
  period: '2017–2026',
  sourceLabel: 'istoricul public de achiziții (SICAP)',
  sourceUrl: 'https://sicap.ai/achizitii/firma/169611',
};

// Pentru prima pagină: nume scurte, cele mai cunoscute.
export const homeClientReferences = ['Alro Slatina', 'Hidroelectrica', 'Nuclearelectrica', 'Romgaz', 'Transelectrica', 'CFR Călători', 'Aeroporturi București', 'Portul Constanța', 'Imprimeria Națională', 'Aquatim'];

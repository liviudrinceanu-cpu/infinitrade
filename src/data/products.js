// Infinitrade Romania - SEO-Optimized Product Data

export const categories = [
  {
    id: 'pompe-industriale',
    name: 'Pompe Industriale',
    slug: 'pompe-industriale',
    tagline: 'Putere în mișcare',
    metaTitle: 'Pompe Industriale Romania | Distribuitor Grundfos, Wilo, KSB | Infinitrade',
    metaDescription: 'Distribuitor autorizat pompe industriale în România. Pompe Grundfos, Wilo, KSB, Lowara. Pompe centrifugale, submersibile, dozatoare. Livrare 24-72h.',
    description: 'Distribuitor autorizat de pompe industriale în România. Gamă completă de pompe de la branduri premium.',
    heroDescription: 'Oferim cea mai variată gamă de pompe industriale din România. Consultanță tehnică gratuită.',
    icon: 'Droplets',
    color: '#0990db',
    gradient: 'linear-gradient(135deg, #0990db 0%, #063c69 100%)',
    image: '/images/pompe-hero.jpg',
    stats: { brands: '45+', products: '2000+', delivery: '24-72h' },
    brands: [
      { name: 'Grundfos', slug: 'pompe-grundfos', logo: '/brands/grundfos.png', country: 'Danemarca', description: 'Lider mondial în tehnologia pompelor', featured: true },
      { name: 'Wilo', slug: 'pompe-wilo', logo: '/brands/wilo.png', country: 'Germania', description: 'Eficiență și inovație în pompare', featured: true },
      { name: 'KSB', slug: 'pompe-ksb', logo: '/brands/ksb.png', country: 'Germania', description: 'Pompe și robineți de înaltă calitate', featured: true },
      { name: 'Lowara', slug: 'pompe-lowara', logo: '/brands/lowara.png', country: 'Italia', description: 'Soluții de pompare Xylem', featured: true },
      { name: 'Ebara', slug: 'pompe-ebara', logo: '/brands/ebara.png', country: 'Japonia', description: 'Tehnologie japoneză de precizie', featured: true },
      { name: 'Sulzer', slug: 'pompe-sulzer', logo: '/brands/sulzer.png', country: 'Elveția', description: 'Pompe pentru aplicații critice' },
      { name: 'Netzsch', slug: 'pompe-netzsch', logo: '/brands/netzsch.png', country: 'Germania', description: 'Pompe cu cavitate progresivă' },
      { name: 'Brinkmann', slug: 'pompe-brinkmann', logo: '/brands/brinkmann.png', country: 'Germania', description: 'Pompe pentru răcire și lubrifiere' },
      { name: 'Becker', slug: 'pompe-becker', logo: '/brands/becker.png', country: 'Germania', description: 'Pompe de vid și compresoare' },
      { name: 'DAB', slug: 'pompe-dab', logo: '/brands/dab.png', country: 'Italia', description: 'Pompe rezidențiale și industriale' }
    ],
    productTypes: [
      { name: 'Pompe Centrifugale', slug: 'pompe-centrifugale', description: 'Pentru transportul lichidelor', applications: ['Alimentare apă', 'HVAC', 'Chimie', 'Irigații'] },
      { name: 'Pompe Submersibile', slug: 'pompe-submersibile', description: 'Pentru drenaj și puțuri', applications: ['Drenaj', 'Canalizare', 'Puțuri forate'] },
      { name: 'Pompe cu Șurub', slug: 'pompe-surub-excentric', description: 'Pentru fluide vâscoase', applications: ['Alimentar', 'Petrochimie', 'Ape uzate'] },
      { name: 'Pompe Dozatoare', slug: 'pompe-dozatoare', description: 'Dozare precisă', applications: ['Tratare apă', 'Chimie', 'Farmaceutică'] },
      { name: 'Pompe de Vid', slug: 'pompe-vid', description: 'Vid industrial', applications: ['Ambalare', 'Manipulare', 'Proces'] },
      { name: 'Grupuri de Pompare', slug: 'grupuri-pompare', description: 'Sisteme hidrofoare', applications: ['Alimentare apă', 'Clădiri'] }
    ],
    accessories: ['Garnituri mecanice', 'Rotoare', 'Carcase', 'Rulmenți', 'Kituri service', 'Cuplaje', 'Convertizoare frecvență'],
    services: ['Consultanță tehnică', 'Dimensionare', 'Livrare expresă', 'Service mentenanță', 'Punere în funcțiune']
  },
  {
    id: 'robineti-industriali',
    name: 'Robineți Industriali',
    slug: 'robineti-industriali',
    tagline: 'Control perfect al fluxului',
    metaTitle: 'Robineți Industriali Romania | ARI Armaturen, Spirax Sarco | Infinitrade',
    metaDescription: 'Distribuitor robineți industriali România. ARI Armaturen, Spirax Sarco, Danfoss. Supape siguranță, oale condens. Livrare rapidă.',
    description: 'Distribuitor autorizat de robineți și armaturi industriale în România.',
    heroDescription: 'De la robineți cu bilă la supape de siguranță, oferim soluții complete pentru controlul fluidelor.',
    icon: 'Settings2',
    color: '#ff2800',
    gradient: 'linear-gradient(135deg, #ff2800 0%, #ff6b35 100%)',
    image: '/images/robineti-hero.jpg',
    stats: { brands: '35+', products: '3000+', delivery: '24-72h' },
    brands: [
      { name: 'ARI Armaturen', slug: 'ari-armaturen', logo: '/brands/ari.png', country: 'Germania', description: 'Specialiști în robineți industriali', featured: true },
      { name: 'Spirax Sarco', slug: 'spirax-sarco', logo: '/brands/spirax.png', country: 'UK', description: 'Lider în sisteme de abur', featured: true },
      { name: 'Ebro Armaturen', slug: 'ebro-armaturen', logo: '/brands/ebro.png', country: 'Germania', description: 'Robineți fluture de precizie', featured: true },
      { name: 'End Armaturen', slug: 'end-armaturen', logo: '/brands/end.png', country: 'Germania', description: 'Armaturi industriale premium', featured: true },
      { name: 'Danfoss', slug: 'danfoss-valve', logo: '/brands/danfoss.png', country: 'Danemarca', description: 'Soluții de reglare și control', featured: true },
      { name: 'Gestra Flowserve', slug: 'gestra-flowserve', logo: '/brands/gestra.png', country: 'Germania', description: 'Oale de condens' },
      { name: 'Leser', slug: 'supape-leser', logo: '/brands/leser.png', country: 'Germania', description: 'Supape de siguranță certificate' },
      { name: 'Samson', slug: 'samson-valve', logo: '/brands/samson.png', country: 'Germania', description: 'Robineți de reglare' },
      { name: 'Mankenberg', slug: 'mankenberg', logo: '/brands/mankenberg.png', country: 'Germania', description: 'Regulatoare de presiune' }
    ],
    productTypes: [
      { name: 'Robineți cu Bilă', slug: 'robineti-bila', description: 'Închidere rapidă', applications: ['Petrol', 'Gaze', 'Chimie', 'Alimentar'] },
      { name: 'Robineți Fluture', slug: 'robineti-fluture', description: 'Debite mari', applications: ['HVAC', 'Tratare apă', 'Alimentar'] },
      { name: 'Supape de Siguranță', slug: 'supape-siguranta', description: 'Protecție suprapresiune', applications: ['Cazane', 'Recipiente presiune'] },
      { name: 'Oale de Condens', slug: 'oale-condens', description: 'Evacuare condens', applications: ['Sisteme abur', 'Încălzire industrială'] },
      { name: 'Robineți de Reglare', slug: 'robineti-reglare', description: 'Control precis', applications: ['Automatizări', 'Control proces'] },
      { name: 'Clapete de Reținere', slug: 'clapete-retinere', description: 'Prevenire retur fluid', applications: ['Stații pompare', 'Conducte'] }
    ],
    accessories: ['Actuatoare pneumatice', 'Actuatoare electrice', 'Poziționere', 'Garnituri', 'Kituri reparație', 'Filtre Y'],
    services: ['Consultanță selecție', 'Dimensionare Cv/Kv', 'Livrare rapidă', 'Recondiționare', 'Testare certificare']
  },
  {
    id: 'motoare-electrice',
    name: 'Motoare Electrice',
    slug: 'motoare-electrice',
    tagline: 'Energia industriei',
    metaTitle: 'Motoare Electrice Industriale Romania | Siemens, SEW, ABB | Infinitrade',
    metaDescription: 'Distribuitor motoare electrice industriale România. Siemens, SEW Eurodrive, ABB. Motoare IE3, ATEX, servomotoare. Livrare 24-72h.',
    description: 'Distribuitor autorizat de motoare electrice industriale în România.',
    heroDescription: 'Gama completă de motoare electrice - de la asincrone la servomotoare.',
    icon: 'Zap',
    color: '#37c67f',
    gradient: 'linear-gradient(135deg, #37c67f 0%, #30d158 100%)',
    image: '/images/motoare-hero.jpg',
    stats: { brands: '25+', products: '1500+', delivery: '24-72h' },
    brands: [
      { name: 'Siemens', slug: 'motoare-siemens', logo: '/brands/siemens.png', country: 'Germania', description: 'Lider global în automatizări', featured: true },
      { name: 'SEW Eurodrive', slug: 'sew-eurodrive', logo: '/brands/sew.png', country: 'Germania', description: 'Motoare și reductoare integrate', featured: true },
      { name: 'ABB', slug: 'motoare-abb', logo: '/brands/abb.png', country: 'Elveția', description: 'Tehnologie de vârf în acționări', featured: true },
      { name: 'Bonfiglioli', slug: 'bonfiglioli', logo: '/brands/bonfiglioli.png', country: 'Italia', description: 'Motoreductoare și invertoare', featured: true },
      { name: 'Marelli', slug: 'motoare-marelli', logo: '/brands/marelli.png', country: 'Italia', description: 'Motoare electrice industriale', featured: true },
      { name: 'Brook Crompton', slug: 'brook-crompton', logo: '/brands/brook.png', country: 'UK', description: 'Motoare ATEX și speciale' },
      { name: 'WEG', slug: 'motoare-weg', logo: '/brands/weg.png', country: 'Brazilia', description: 'Motoare eficiente energetic' },
      { name: 'Nord', slug: 'nord-drivesystems', logo: '/brands/nord.png', country: 'Germania', description: 'Sisteme de acționare' },
      { name: 'Leroy Somer', slug: 'leroy-somer', logo: '/brands/leroy.png', country: 'Franța', description: 'Alternatori și motoare' }
    ],
    productTypes: [
      { name: 'Motoare Asincrone', slug: 'motoare-asincrone', description: 'IE2/IE3/IE4', applications: ['Pompe', 'Ventilatoare', 'Compresoare'] },
      { name: 'Motoare ATEX', slug: 'motoare-atex', description: 'Atmosfere explozive', applications: ['Petrochimie', 'Rafinării', 'Zone Ex'] },
      { name: 'Servomotoare', slug: 'servomotoare', description: 'Control precis', applications: ['CNC', 'Robotică', 'Automatizări'] },
      { name: 'Motoreductoare', slug: 'motoreductoare', description: 'Motor și reductor integrat', applications: ['Transportoare', 'Mixere'] },
      { name: 'Convertizoare Frecvență', slug: 'convertizoare-frecventa', description: 'Control viteză', applications: ['Economie energie', 'Automatizări'] },
      { name: 'Motoare Monofazate', slug: 'motoare-monofazate', description: 'Aplicații mici', applications: ['Ateliere', 'Utilaje mici'] }
    ],
    accessories: ['Convertizoare frecvență', 'Softstartere', 'Encodere', 'Frâne electromagnetice', 'Ventilatoare externe'],
    services: ['Dimensionare selecție', 'Parametrizare convertizoare', 'Rebobinare motoare', 'Diagnostic vibrații']
  },
  {
    id: 'schimbatoare-caldura',
    name: 'Schimbătoare de Căldură',
    slug: 'schimbatoare-caldura',
    tagline: 'Transfer termic eficient',
    metaTitle: 'Schimbătoare de Căldură Romania | Alfa Laval, Kelvion | Infinitrade',
    metaDescription: 'Distribuitor schimbătoare de căldură România. Alfa Laval, Kelvion, SWEP. Schimbătoare plăci, răcitoare ulei. Garnituri, piese schimb.',
    description: 'Distribuitor autorizat de schimbătoare de căldură în România.',
    heroDescription: 'Soluții complete pentru transfer termic - schimbătoare plăci, răcitoare ulei.',
    icon: 'Thermometer',
    color: '#ff2800',
    gradient: 'linear-gradient(135deg, #ff2800 0%, #ff6961 100%)',
    image: '/images/schimbatoare-hero.jpg',
    stats: { brands: '15+', products: '800+', delivery: '24-72h' },
    brands: [
      { name: 'Alfa Laval', slug: 'alfa-laval', logo: '/brands/alfalaval.png', country: 'Suedia', description: 'Lider mondial în transfer termic', featured: true },
      { name: 'Kelvion', slug: 'kelvion', logo: '/brands/kelvion.png', country: 'Germania', description: 'Fost GEA Heat Exchangers', featured: true },
      { name: 'SWEP', slug: 'swep', logo: '/brands/swep.png', country: 'Suedia', description: 'Schimbătoare brazate compacte', featured: true },
      { name: 'Danfoss', slug: 'danfoss-schimbatoare', logo: '/brands/danfoss.png', country: 'Danemarca', description: 'Soluții HVAC și refrigerare', featured: true },
      { name: 'Funke', slug: 'funke', logo: '/brands/funke.png', country: 'Germania', description: 'Schimbătoare plăci demontabile' },
      { name: 'Emmegi', slug: 'emmegi', logo: '/brands/emmegi.png', country: 'Italia', description: 'Răcitoare ulei și aer' }
    ],
    productTypes: [
      { name: 'Schimbătoare Plăci Brazate', slug: 'schimbatoare-placi-brazate', description: 'Compacte, fără garnituri', applications: ['HVAC', 'Răcire', 'Încălzire'] },
      { name: 'Schimbătoare Plăci Demontabile', slug: 'schimbatoare-placi-demontabile', description: 'Capacitate mare', applications: ['Industrie', 'Termoficare'] },
      { name: 'Schimbătoare Tubulare', slug: 'schimbatoare-tubulare', description: 'Aplicații speciale', applications: ['Chimie', 'Petrochimie'] },
      { name: 'Răcitoare de Ulei', slug: 'racitoare-ulei', description: 'Sisteme hidraulice', applications: ['Hidraulică', 'Compresoare'] },
      { name: 'Condensatoare', slug: 'condensatoare-refrigerare', description: 'Instalații frigorifice', applications: ['Refrigerare', 'Climatizare'] }
    ],
    accessories: ['Garnituri originale', 'Plăci de schimb', 'Kituri curățare', 'Izolații termice'],
    services: ['Dimensionare termică', 'Curățare chimică', 'Înlocuire garnituri', 'Testare presiune']
  },
  {
    id: 'suflante-ventilatoare',
    name: 'Suflante și Ventilatoare',
    slug: 'suflante-ventilatoare',
    tagline: 'Aerul în mișcare',
    metaTitle: 'Suflante Industriale | Ventilatoare | Becker, FPZ | Infinitrade Romania',
    metaDescription: 'Distribuitor suflante industriale și ventilatoare România. Becker, FPZ, Ziehl Abegg. Suflante canal lateral, pompe vid. Livrare 24-72h.',
    description: 'Distribuitor autorizat de suflante industriale și ventilatoare în România.',
    heroDescription: 'Soluții complete pentru mișcarea aerului - suflante canal lateral, ventilatoare.',
    icon: 'Wind',
    color: '#063c69',
    gradient: 'linear-gradient(135deg, #063c69 0%, #0990db 100%)',
    image: '/images/suflante-hero.jpg',
    stats: { brands: '20+', products: '600+', delivery: '24-72h' },
    brands: [
      { name: 'Becker', slug: 'suflante-becker', logo: '/brands/becker.png', country: 'Germania', description: 'Pompe de vid și suflante', featured: true },
      { name: 'FPZ', slug: 'suflante-fpz', logo: '/brands/fpz.png', country: 'Italia', description: 'Suflante cu canal lateral', featured: true },
      { name: 'Ziehl Abegg', slug: 'ziehl-abegg', logo: '/brands/ziehl.png', country: 'Germania', description: 'Ventilatoare EC eficiente', featured: true },
      { name: 'Gardner Denver', slug: 'gardner-denver', logo: '/brands/gardner.png', country: 'SUA', description: 'Suflante și compresoare', featured: true },
      { name: 'Elmo Rietschle', slug: 'elmo-rietschle', logo: '/brands/elmo.png', country: 'Germania', description: 'Tehnologie vid și presiune' },
      { name: 'Elektror', slug: 'elektror', logo: '/brands/elektror.png', country: 'Germania', description: 'Ventilatoare industriale' },
      { name: 'Aerzen', slug: 'aerzen', logo: '/brands/aerzen.png', country: 'Germania', description: 'Suflante Roots și compresoare' }
    ],
    productTypes: [
      { name: 'Suflante Canal Lateral', slug: 'suflante-canal-lateral', description: 'Debit constant', applications: ['Aerare', 'Transport pneumatic'] },
      { name: 'Suflante Roots', slug: 'suflante-roots', description: 'Debite mari', applications: ['Stații epurare', 'Transport cereale'] },
      { name: 'Ventilatoare Centrifugale', slug: 'ventilatoare-centrifugale', description: 'Presiuni ridicate', applications: ['Ventilație industrială', 'Filtrare'] },
      { name: 'Ventilatoare Axiale', slug: 'ventilatoare-axiale', description: 'Debite mari', applications: ['Răcire', 'Ventilație'] },
      { name: 'Pompe de Vid Lamele', slug: 'pompe-vid-lamele', description: 'Vid moderat', applications: ['Ambalare', 'CNC'] },
      { name: 'Compresoare', slug: 'compresoare-aer', description: 'Aer comprimat', applications: ['Medical', 'Alimentar'] }
    ],
    accessories: ['Filtre aspirație', 'Silențiatoare', 'Supape siguranță', 'Manometre', 'Kituri lamele'],
    services: ['Dimensionare sistem', 'Măsurători debit/presiune', 'Recondiționare suflante', 'Echilibrare rotoare']
  }
];

export const companyInfo = {
  name: 'Infinitrade Romania',
  legalEntity: 'Driatheli Group SRL',
  tagline: 'Dăm puls industriei',
  description: 'Distribuitor de echipamente industriale premium cu peste 15 ani de experiență.',
  founded: 2009,
  location: { city: 'Ghiroda', county: 'Timiș', address: 'Calea Lugojului, nr.47/B, Hala nr. 3', country: 'România' },
  contact: { email: 'vanzari@infinitrade-romania.ro', emailSecretariat: 'secretariat@infinitrade-romania.ro', phone: '+40 XXX XXX XXX', hours: 'Luni - Vineri / 08:00 - 16:30' },
  stats: { clients: '800+', brands: '500+', suppliers: '300+', years: '15+' },
  certifications: ['ISO 9001:2015', 'Distribuitor autorizat', 'SEAP / SICAP'],
  industries: ['Petrochimie', 'Energie', 'Alimentar', 'Farmaceutic', 'Auto', 'Naval', 'Metalurgie', 'HVAC', 'Tratare apă'],
  majorClients: ['Continental Automotive', 'Siemens', 'Aerostar', 'HeidelbergCement', 'ArcelorMittal Galați', 'Damen Shipyard', 'Romgaz', 'Azomureș']
};

export const features = [
  { icon: 'Package', title: 'Stoc Disponibil', description: 'Produse în stoc pentru livrare imediată' },
  { icon: 'Truck', title: 'Livrare Rapidă', description: 'Livrare în 24-72h pentru produse din stoc' },
  { icon: 'Wrench', title: 'Piese de Schimb', description: 'Gamă completă de piese de schimb' },
  { icon: 'Headphones', title: 'Suport Tehnic', description: 'Consultanță tehnică gratuită' },
  { icon: 'Shield', title: 'Garanție', description: 'Produse originale cu garanție' },
  { icon: 'Globe', title: 'Branduri Globale', description: 'Peste 500 de branduri internaționale' }
];

export const navigation = [
  { name: 'Acasă', href: '/' },
  { name: 'Pompe', href: '/pompe-industriale' },
  { name: 'Robineți', href: '/robineti-industriali' },
  { name: 'Motoare', href: '/motoare-electrice' },
  { name: 'Schimbătoare', href: '/schimbatoare-caldura' },
  { name: 'Suflante', href: '/suflante-ventilatoare' },
  { name: 'Contact', href: '/contact' }
];

export const allBrands = categories.flatMap(cat => cat.brands.map(brand => ({ ...brand, category: cat.slug, categoryName: cat.name })));
export const allProductTypes = categories.flatMap(cat => cat.productTypes.map(type => ({ ...type, category: cat.slug, categoryName: cat.name })));

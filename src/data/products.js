// Infinitrade Romania - Product Data
// Categories, Brands, and Product Types

export const categories = [
  {
    id: 'pompe-industriale',
    name: 'Pompe Industriale',
    slug: 'pompe-industriale',
    tagline: 'Putere în mișcare',
    description: 'Soluții complete de pompare pentru orice aplicație industrială. De la pompe centrifugale la pompe cu șurub, acoperim întreaga gamă de necesități.',
    heroDescription: 'Oferim cea mai variată gamă de pompe industriale din România, de la branduri de top mondial. Fie că aveți nevoie de pompe pentru apă, substanțe chimice, fluide vâscoase sau aplicații speciale - avem soluția potrivită.',
    icon: 'Droplets',
    color: '#0071e3',
    gradient: 'linear-gradient(135deg, #0071e3 0%, #00c7ff 100%)',
    image: '/images/pompe-hero.jpg',
    stats: {
      brands: '45+',
      products: '2000+',
      delivery: '24-72h'
    },
    brands: [
      {
        name: 'Grundfos',
        logo: '/brands/grundfos.png',
        country: 'Danemarca',
        description: 'Lider mondial în tehnologia pompelor',
        featured: true
      },
      {
        name: 'Wilo',
        logo: '/brands/wilo.png',
        country: 'Germania',
        description: 'Eficiență și inovație în pompare',
        featured: true
      },
      {
        name: 'KSB',
        logo: '/brands/ksb.png',
        country: 'Germania',
        description: 'Pompe și robineți de înaltă calitate',
        featured: true
      },
      {
        name: 'Lowara',
        logo: '/brands/lowara.png',
        country: 'Italia',
        description: 'Soluții de pompare Xylem',
        featured: true
      },
      {
        name: 'Ebara',
        logo: '/brands/ebara.png',
        country: 'Japonia',
        description: 'Tehnologie japoneză de precizie',
        featured: true
      },
      {
        name: 'Sulzer',
        logo: '/brands/sulzer.png',
        country: 'Elveția',
        description: 'Pompe pentru aplicații critice'
      },
      {
        name: 'Netzsch',
        logo: '/brands/netzsch.png',
        country: 'Germania',
        description: 'Specialiști în pompe cu cavitate progresivă'
      },
      {
        name: 'Brinkmann',
        logo: '/brands/brinkmann.png',
        country: 'Germania',
        description: 'Pompe pentru răcire și lubrifiere'
      },
      {
        name: 'Becker',
        logo: '/brands/becker.png',
        country: 'Germania',
        description: 'Pompe de vid și compresoare'
      },
      {
        name: 'Maximator',
        logo: '/brands/maximator.png',
        country: 'Germania',
        description: 'Pompe de înaltă presiune'
      }
    ],
    productTypes: [
      {
        name: 'Pompe Centrifugale',
        description: 'Pentru transportul lichidelor cu vâscozitate redusă',
        applications: ['Alimentare cu apă', 'HVAC', 'Industria chimică', 'Irigații']
      },
      {
        name: 'Pompe Submersibile',
        description: 'Pentru drenaj, canalizare și alimentare din puțuri',
        applications: ['Drenaj', 'Canalizare', 'Puțuri forate', 'Stații de pompare']
      },
      {
        name: 'Pompe cu Șurub',
        description: 'Pentru fluide vâscoase și cu particule solide',
        applications: ['Industria alimentară', 'Petrochimie', 'Tratare ape uzate']
      },
      {
        name: 'Pompe Dozatoare',
        description: 'Pentru dozare precisă de substanțe chimice',
        applications: ['Tratare apă', 'Industria chimică', 'Farmaceutică']
      },
      {
        name: 'Pompe de Vid',
        description: 'Pentru aplicații de vid industrial',
        applications: ['Ambalare', 'Manipulare', 'Procese industriale']
      },
      {
        name: 'Pompe de Înaltă Presiune',
        description: 'Pentru aplicații care necesită presiuni ridicate',
        applications: ['Tăiere cu jet de apă', 'Curățare industrială', 'Testare presiune']
      }
    ],
    accessories: [
      'Garnituri mecanice',
      'Rotoare și statoare',
      'Carcase și capace',
      'Rulmenți speciali',
      'Kituri de service',
      'Cuplaje',
      'Convertizoare de frecvență'
    ],
    services: [
      'Consultanță tehnică gratuită',
      'Dimensionare și selecție',
      'Livrare expresă piese de schimb',
      'Service și mentenanță',
      'Punere în funcțiune'
    ]
  },
  {
    id: 'robineti-industriali',
    name: 'Robineți Industriali',
    slug: 'robineti-industriali',
    tagline: 'Control perfect al fluxului',
    description: 'Robineți și armaturi pentru controlul precis al fluidelor în orice aplicație industrială.',
    heroDescription: 'De la robineți cu bilă la supape de siguranță, oferim soluții complete pentru controlul fluidelor. Branduri premium, certificate pentru cele mai exigente aplicații industriale.',
    icon: 'Settings2',
    color: '#ff6b35',
    gradient: 'linear-gradient(135deg, #ff6b35 0%, #ff9500 100%)',
    image: '/images/robineti-hero.jpg',
    stats: {
      brands: '35+',
      products: '3000+',
      delivery: '24-72h'
    },
    brands: [
      {
        name: 'ARI Armaturen',
        logo: '/brands/ari.png',
        country: 'Germania',
        description: 'Specialiști în robineți industriali',
        featured: true
      },
      {
        name: 'Spirax Sarco',
        logo: '/brands/spirax.png',
        country: 'UK',
        description: 'Lider în sisteme de abur',
        featured: true
      },
      {
        name: 'Ebro Armaturen',
        logo: '/brands/ebro.png',
        country: 'Germania',
        description: 'Robineți fluture de precizie',
        featured: true
      },
      {
        name: 'End Armaturen',
        logo: '/brands/end.png',
        country: 'Germania',
        description: 'Armaturi industriale premium',
        featured: true
      },
      {
        name: 'Danfoss',
        logo: '/brands/danfoss.png',
        country: 'Danemarca',
        description: 'Soluții de reglare și control',
        featured: true
      },
      {
        name: 'Gestra Flowserve',
        logo: '/brands/gestra.png',
        country: 'Germania',
        description: 'Oale de condens și accesorii abur'
      },
      {
        name: 'Leser',
        logo: '/brands/leser.png',
        country: 'Germania',
        description: 'Supape de siguranță certificate'
      },
      {
        name: 'Samson',
        logo: '/brands/samson.png',
        country: 'Germania',
        description: 'Robineți de reglare'
      },
      {
        name: 'Mankenberg',
        logo: '/brands/mankenberg.png',
        country: 'Germania',
        description: 'Regulatoare de presiune'
      }
    ],
    productTypes: [
      {
        name: 'Robineți cu Bilă',
        description: 'Pentru închidere rapidă și etanșare perfectă',
        applications: ['Industria petrolieră', 'Gaze', 'Chimie', 'Alimentară']
      },
      {
        name: 'Robineți Fluture',
        description: 'Pentru debite mari și pierderi de sarcină reduse',
        applications: ['HVAC', 'Tratare apă', 'Industria alimentară']
      },
      {
        name: 'Supape de Siguranță',
        description: 'Protecție împotriva suprapresiunii',
        applications: ['Cazane', 'Recipiente sub presiune', 'Instalații de proces']
      },
      {
        name: 'Oale de Condens',
        description: 'Pentru evacuarea condensului din sistemele de abur',
        applications: ['Sisteme de abur', 'Încălzire industrială']
      },
      {
        name: 'Robineți de Reglare',
        description: 'Control precis al debitului',
        applications: ['Automatizări', 'Control proces', 'HVAC']
      },
      {
        name: 'Clapete de Reținere',
        description: 'Prevenirea returului de fluid',
        applications: ['Stații de pompare', 'Conducte', 'Instalații industriale']
      }
    ],
    accessories: [
      'Actuatoare pneumatice',
      'Actuatoare electrice',
      'Poziționere',
      'Garnituri și etanșări',
      'Kituri de reparație',
      'Filtre Y',
      'Compensatoare'
    ],
    services: [
      'Consultanță în selecție',
      'Dimensionare Cv/Kv',
      'Livrare rapidă',
      'Recondiționare robineți',
      'Testare și certificare'
    ]
  },
  {
    id: 'motoare-electrice',
    name: 'Motoare Electrice',
    slug: 'motoare-electrice',
    tagline: 'Energia industriei',
    description: 'Motoare electrice eficiente energetic pentru toate aplicațiile industriale.',
    heroDescription: 'Gama completă de motoare electrice - de la motoare asincrone standard la servomotoare de precizie. Eficiență energetică IE3/IE4, fiabilitate dovedită, suport tehnic complet.',
    icon: 'Zap',
    color: '#30d158',
    gradient: 'linear-gradient(135deg, #30d158 0%, #34c759 100%)',
    image: '/images/motoare-hero.jpg',
    stats: {
      brands: '25+',
      products: '1500+',
      delivery: '24-72h'
    },
    brands: [
      {
        name: 'Siemens',
        logo: '/brands/siemens.png',
        country: 'Germania',
        description: 'Lider global în automatizări',
        featured: true
      },
      {
        name: 'SEW Eurodrive',
        logo: '/brands/sew.png',
        country: 'Germania',
        description: 'Motoare și reductoare integrate',
        featured: true
      },
      {
        name: 'ABB',
        logo: '/brands/abb.png',
        country: 'Elveția',
        description: 'Tehnologie de vârf în acționări',
        featured: true
      },
      {
        name: 'Bonfiglioli',
        logo: '/brands/bonfiglioli.png',
        country: 'Italia',
        description: 'Motorductoare și invertoare',
        featured: true
      },
      {
        name: 'Marelli',
        logo: '/brands/marelli.png',
        country: 'Italia',
        description: 'Motoare electrice industriale',
        featured: true
      },
      {
        name: 'Brook Crompton',
        logo: '/brands/brook.png',
        country: 'UK',
        description: 'Motoare ATEX și speciale'
      },
      {
        name: 'WEG',
        logo: '/brands/weg.png',
        country: 'Brazilia',
        description: 'Motoare eficiente energetic'
      },
      {
        name: 'Leroy Somer',
        logo: '/brands/leroy.png',
        country: 'Franța',
        description: 'Alternatori și motoare'
      }
    ],
    productTypes: [
      {
        name: 'Motoare Asincrone',
        description: 'Motoare trifazate standard IE2/IE3/IE4',
        applications: ['Pompe', 'Ventilatoare', 'Compresoare', 'Transportoare']
      },
      {
        name: 'Motoare ATEX',
        description: 'Pentru atmosfere explozive',
        applications: ['Petrochimie', 'Rafinării', 'Zone Ex']
      },
      {
        name: 'Servomotoare',
        description: 'Control precis al poziției și vitezei',
        applications: ['CNC', 'Robotică', 'Automatizări']
      },
      {
        name: 'Motoare cu Reluctanță',
        description: 'Eficiență maximă IE5',
        applications: ['Aplicații cu funcționare continuă']
      },
      {
        name: 'Motoare Monofazate',
        description: 'Pentru aplicații mici și medii',
        applications: ['Ateliere', 'Utilaje mici']
      },
      {
        name: 'Motorductoare',
        description: 'Motor și reductor integrat',
        applications: ['Transportoare', 'Mixere', 'Dozatoare']
      }
    ],
    accessories: [
      'Convertizoare de frecvență',
      'Softstar-tere',
      'Encodere',
      'Frâne electromagnetice',
      'Ventilatoare externe',
      'Rezistențe de încălzire',
      'Senzori de temperatură'
    ],
    services: [
      'Dimensionare și selecție',
      'Parametrizare convertizoare',
      'Rebobinare motoare',
      'Diagnostic vibrații',
      'Mentenanță predictivă'
    ]
  },
  {
    id: 'schimbatoare-caldura',
    name: 'Schimbătoare de Căldură',
    slug: 'schimbatoare-caldura',
    tagline: 'Transfer termic eficient',
    description: 'Schimbătoare de căldură cu plăci și tubulare pentru aplicații industriale și HVAC.',
    heroDescription: 'Soluții complete pentru transfer termic - de la schimbătoare cu plăci brazate la unități cu manta și tub. Dimensionare precisă, eficiență maximă, durabilitate garantată.',
    icon: 'Thermometer',
    color: '#ff453a',
    gradient: 'linear-gradient(135deg, #ff453a 0%, #ff6961 100%)',
    image: '/images/schimbatoare-hero.jpg',
    stats: {
      brands: '15+',
      products: '800+',
      delivery: '48-72h'
    },
    brands: [
      {
        name: 'Alfa Laval',
        logo: '/brands/alfalaval.png',
        country: 'Suedia',
        description: 'Lider mondial în transfer termic',
        featured: true
      },
      {
        name: 'Kelvion',
        logo: '/brands/kelvion.png',
        country: 'Germania',
        description: 'Fost GEA Heat Exchangers',
        featured: true
      },
      {
        name: 'SWEP',
        logo: '/brands/swep.png',
        country: 'Suedia',
        description: 'Schimbătoare brazate compacte',
        featured: true
      },
      {
        name: 'Danfoss',
        logo: '/brands/danfoss.png',
        country: 'Danemarca',
        description: 'Soluții pentru HVAC și refrigerare',
        featured: true
      },
      {
        name: 'Funke',
        logo: '/brands/funke.png',
        country: 'Germania',
        description: 'Schimbătoare cu plăci demontabile'
      },
      {
        name: 'Emmegi',
        logo: '/brands/emmegi.png',
        country: 'Italia',
        description: 'Răcitoare ulei și aer'
      }
    ],
    productTypes: [
      {
        name: 'Schimbătoare cu Plăci Brazate',
        description: 'Compacte, eficiente, fără garnituri',
        applications: ['HVAC', 'Răcire', 'Încălzire', 'Apă caldă']
      },
      {
        name: 'Schimbătoare cu Plăci Demontabile',
        description: 'Capacitate mare, ușor de întreținut',
        applications: ['Industrie', 'Termoficare', 'Proces']
      },
      {
        name: 'Schimbătoare Tubulare',
        description: 'Pentru aplicații speciale și fluide agresive',
        applications: ['Chimie', 'Petrochimie', 'Recuperare căldură']
      },
      {
        name: 'Răcitoare de Ulei',
        description: 'Pentru sisteme hidraulice și lubrifiere',
        applications: ['Hidraulică', 'Compresoare', 'Reductoare']
      },
      {
        name: 'Condensatoare',
        description: 'Pentru instalații frigorifice și de climatizare',
        applications: ['Refrigerare', 'Climatizare', 'Proces']
      }
    ],
    accessories: [
      'Garnituri originale',
      'Plăci de schimb',
      'Kituri de curățare',
      'Izolații termice',
      'Cadre și suporți',
      'Conexiuni și racorduri'
    ],
    services: [
      'Dimensionare termică',
      'Curățare chimică',
      'Înlocuire garnituri',
      'Testare presiune',
      'Audit energetic'
    ]
  },
  {
    id: 'suflante-ventilatoare',
    name: 'Suflante și Ventilatoare',
    slug: 'suflante-ventilatoare',
    tagline: 'Aerul în mișcare',
    description: 'Suflante industriale și ventilatoare pentru ventilație, transport pneumatic și proces.',
    heroDescription: 'Soluții complete pentru mișcarea aerului - de la ventilatoare axiale la suflante cu canal lateral. Pentru ventilație, aerare, transport pneumatic și aplicații de proces.',
    icon: 'Wind',
    color: '#5856d6',
    gradient: 'linear-gradient(135deg, #5856d6 0%, #af52de 100%)',
    image: '/images/suflante-hero.jpg',
    stats: {
      brands: '20+',
      products: '600+',
      delivery: '48-72h'
    },
    brands: [
      {
        name: 'Becker',
        logo: '/brands/becker.png',
        country: 'Germania',
        description: 'Pompe de vid și suflante',
        featured: true
      },
      {
        name: 'FPZ',
        logo: '/brands/fpz.png',
        country: 'Italia',
        description: 'Suflante cu canal lateral',
        featured: true
      },
      {
        name: 'Ziehl Abegg',
        logo: '/brands/ziehl.png',
        country: 'Germania',
        description: 'Ventilatoare EC eficiente',
        featured: true
      },
      {
        name: 'Gardner Denver',
        logo: '/brands/gardner.png',
        country: 'SUA',
        description: 'Suflante și compresoare',
        featured: true
      },
      {
        name: 'Elmo Rietschle',
        logo: '/brands/elmo.png',
        country: 'Germania',
        description: 'Tehnologie vid și presiune'
      },
      {
        name: 'Mapro',
        logo: '/brands/mapro.png',
        country: 'Italia',
        description: 'Suflante canal lateral'
      },
      {
        name: 'Elektror',
        logo: '/brands/elektror.png',
        country: 'Germania',
        description: 'Ventilatoare industriale'
      }
    ],
    productTypes: [
      {
        name: 'Suflante cu Canal Lateral',
        description: 'Debit constant, fără pulsații',
        applications: ['Aerare', 'Transport pneumatic', 'Aspirație']
      },
      {
        name: 'Suflante Roots',
        description: 'Debite mari, presiuni medii',
        applications: ['Stații epurare', 'Transport cereale', 'Fluidizare']
      },
      {
        name: 'Ventilatoare Centrifugale',
        description: 'Presiuni ridicate, debite moderate',
        applications: ['Ventilație industrială', 'Hote', 'Filtrare']
      },
      {
        name: 'Ventilatoare Axiale',
        description: 'Debite mari, presiuni joase',
        applications: ['Răcire', 'Ventilație', 'Turnuri de răcire']
      },
      {
        name: 'Pompe de Vid cu Lamele',
        description: 'Vid moderat, funcționare silențioasă',
        applications: ['Ambalare', 'CNC', 'Tipografii']
      },
      {
        name: 'Compresoare Scroll',
        description: 'Aer comprimat fără ulei',
        applications: ['Medical', 'Alimentar', 'Laborator']
      }
    ],
    accessories: [
      'Filtre de aspirație',
      'Silențiatoare',
      'Supape de siguranță',
      'Manometre',
      'Kituri de lamele',
      'Filtre de evacuare'
    ],
    services: [
      'Dimensionare sistem',
      'Măsurători debit/presiune',
      'Recondiționare suflante',
      'Echilibrare rotoare',
      'Mentenanță preventivă'
    ]
  }
];

export const companyInfo = {
  name: 'Infinitrade Romania',
  tagline: 'Dăm puls industriei',
  description: 'Distribuitor de echipamente industriale premium cu peste 15 ani de experiență. Peste 500 de branduri internaționale, livrare rapidă în toată România.',
  founded: 2009,
  legalEntity: 'Driatheli Group SRL',
  location: {
    city: 'Ghiroda',
    county: 'Timiș',
    address: 'Calea Lugojului, nr.47/B, Hala nr. 3',
    country: 'România'
  },
  contact: {
    email: 'vanzari@infinitrade-romania.ro',
    emailSecretariat: 'secretariat@infinitrade-romania.ro',
    emailOferte: 'liviu.drinceanu@infinitrade-romania.ro',
    phone: '+40 XXX XXX XXX',
    hours: 'Luni - Vineri / 08:00 - 16:30'
  },
  stats: {
    clients: '800+',
    brands: '500+',
    suppliers: '300+',
    years: '15+'
  },
  certifications: [
    'ISO 9001:2015',
    'Distribuitor autorizat',
    'SEAP / SICAP'
  ],
  industries: [
    'Petrochimie',
    'Energie',
    'Alimentar',
    'Farmaceutic',
    'Auto',
    'Naval',
    'Metalurgie',
    'HVAC',
    'Tratare apă'
  ]
};

export const features = [
  {
    icon: 'Package',
    title: 'Stoc Disponibil',
    description: 'Produse în stoc pentru livrare imediată sau comandă la furnizori internaționali'
  },
  {
    icon: 'Truck',
    title: 'Livrare Rapidă',
    description: 'Livrare în 24-72h pentru produse din stoc. Transport aerian disponibil pentru urgențe'
  },
  {
    icon: 'Wrench',
    title: 'Piese de Schimb',
    description: 'Gamă completă de piese de schimb și consumabile pentru mentenanță'
  },
  {
    icon: 'Headphones',
    title: 'Suport Tehnic',
    description: 'Consultanță tehnică gratuită pentru selecție și dimensionare'
  },
  {
    icon: 'Shield',
    title: 'Garanție',
    description: 'Produse originale cu garanție de la producător'
  },
  {
    icon: 'Globe',
    title: 'Branduri Globale',
    description: 'Peste 500 de branduri internaționale de top'
  }
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

// Infinitrade Romania - Additional Equipment Categories for Industrial Distribution
// 10 new specialized categories expanding product portfolio

export const equipmentCategories = [
  {
    id: 'automatizari-industriale',
    name: 'Automatizări Industriale',
    slug: 'automatizari-industriale',
    tagline: 'Automatizare inteligentă pentru industria 4.0',
    metaTitle: 'Automatizări Industriale | Furnizor SEAP | Siemens, ABB',
    metaDescription: 'Furnizor SEAP automatizări industriale. Distribuitor Siemens, ABB, Schneider Electric. PLC-uri, HMI, SCADA pentru licitații.',
    description: 'Sisteme complete de automatizare industrială pentru fabrici moderne. PLC-uri, HMI, SCADA, actuatoare și componente de control pentru producția automatizată.',
    heroDescription: 'Soluții de automatizare pentru transformarea digitală a proceselor industriale. Expertiză în integrare și modernizare sisteme existente.',
    icon: 'Cpu',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
    stats: { brands: '15+', products: '5000+', delivery: '24-72h' },
    lastUpdated: '2026-02-13',
    brands: [
      { name: 'Siemens', slug: 'siemens', country: 'Germania', description: 'Lider mondial în automatizare industrială și digitalizare', featured: true },
      { name: 'ABB', slug: 'abb', country: 'Elveția', description: 'Tehnologie de automatizare pentru industria grea', featured: true },
      { name: 'Schneider Electric', slug: 'schneider-electric', country: 'Franța', description: 'Soluții integrate de automatizare și management energetic', featured: true },
      { name: 'Mitsubishi Electric', slug: 'mitsubishi-electric', country: 'Japonia', description: 'Automatizare de precizie pentru producție', featured: true },
      { name: 'Rockwell Automation', slug: 'rockwell-automation', country: 'SUA', description: 'Sisteme Allen-Bradley pentru automatizare industrială', featured: true },
      { name: 'Beckhoff', slug: 'beckhoff', country: 'Germania', description: 'Automatizare bazată pe PC și EtherCAT', featured: false },
      { name: 'B&R', slug: 'br-automation', country: 'Austria', description: 'Automatizare flexibilă pentru mașini și procese', featured: false },
      { name: 'Omron', slug: 'omron', country: 'Japonia', description: 'Tehnologie de control și senzori industriali', featured: false },
      { name: 'Phoenix Contact', slug: 'phoenix-contact', country: 'Germania', description: 'Componente pentru automatizare și interfețe industriale', featured: false },
      { name: 'Weidmüller', slug: 'weidmuller', country: 'Germania', description: 'Conectivitate industrială și interfețe de automatizare', featured: false },
      { name: 'Murr Elektronik', slug: 'murr-elektronik', country: 'Germania', description: 'Surse de alimentare și componente de automatizare', featured: false },
      { name: 'Pilz', slug: 'pilz', country: 'Germania', description: 'Tehnologie de siguranță pentru automatizare', featured: false },
      { name: 'SICK', slug: 'sick', country: 'Germania', description: 'Senzori inteligenti pentru automatizare industrială', featured: false },
      { name: 'Turck', slug: 'turck', country: 'Germania', description: 'Senzori și tehnologie de conectare industrială', featured: false },
      { name: 'Pepperl+Fuchs', slug: 'pepperl-fuchs', country: 'Germania', description: 'Senzori și tehnologie pentru medii explozive', featured: false }
    ],
    productTypes: [
      {
        name: 'PLC-uri și Controllere',
        slug: 'plc-controllere',
        description: 'Controllere logice programabile pentru automatizare procese',
        applications: ['Linii de producție', 'Sisteme HVAC industriale', 'Prelucrare materiale', 'Controlul proceselor chimice']
      },
      {
        name: 'HMI și Panouri Operator',
        slug: 'hmi-panouri',
        description: 'Interfețe om-mașină pentru monitorizare și control',
        applications: ['Controlul producției', 'Monitorizare procese', 'Seturi mașini CNC', 'Stații de ambalare']
      },
      {
        name: 'Sisteme SCADA',
        slug: 'scada',
        description: 'Sisteme de supraveghere și achiziție date industriale',
        applications: ['Fabrici distribuite', 'Utilități publice', 'Managementul energiei', 'Controlul calității']
      },
      {
        name: 'Actuatoare Electrice',
        slug: 'actuatoare-electrice',
        description: 'Actuatoare pentru automatizare valve și mecanisme',
        applications: ['Armături industriale', 'Sisteme de ventilație', 'Porți și bariere', 'Mecanisme de poziționare']
      },
      {
        name: 'Relee și Contactoare Industriale',
        slug: 'relee-industriale',
        description: 'Componente de comutare pentru controlul automatizat',
        applications: ['Comenzi motoare', 'Circuite de control', 'Protecție echipamente', 'Automatizare iluminat']
      },
      {
        name: 'Module I/O și Interfețe',
        slug: 'module-io',
        description: 'Module de intrare-ieșire pentru extindere sisteme',
        applications: ['Extindere PLC', 'Achiziție semnale', 'Controlul distribuit', 'Integrare senzori']
      }
    ],
    accessories: ['Cabluri de comunicație industrială', 'Surse de alimentare 24V DC', 'Carcase și rack-uri', 'Software de programare', 'Module de comunicație Ethernet/Profibus', 'Terminale și conectori', 'Surse UPS pentru PLC'],
    services: ['Programare și configurare sisteme', 'Integrare cu echipamente existente', 'Consultanță Industry 4.0', 'Training operatori și mentenanță', 'Service și upgrade sisteme']
  },
  {
    id: 'senzori-instrumentatie',
    name: 'Senzori și Instrumentație',
    slug: 'senzori-instrumentatie',
    tagline: 'Măsurare de precizie pentru controlul proceselor',
    metaTitle: 'Senzori Industriali | Furnizor SEAP | Endress+Hauser, WIKA',
    metaDescription: 'Furnizor SEAP senzori și instrumentație. Distribuitor Endress+Hauser, WIKA, Siemens. Măsurare presiune, temperatură, debit.',
    description: 'Instrumentație de măsură și control pentru monitorizarea proceselor industriale. Senzori de presiune, temperatură, debit și nivel pentru aplicații critice.',
    heroDescription: 'Precizie în măsurare pentru optimizarea proceselor. Instrumentație certificată pentru medii industriale exigente și aplicații ATEX.',
    icon: 'Gauge',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    stats: { brands: '20+', products: '8000+', delivery: '24-72h' },
    lastUpdated: '2026-02-13',
    brands: [
      { name: 'Endress+Hauser', slug: 'endress-hauser', country: 'Elveția', description: 'Lider mondial în instrumentație de măsură industrială', featured: true },
      { name: 'WIKA', slug: 'wika', country: 'Germania', description: 'Specialiști în măsurarea presiunii și temperaturii', featured: true },
      { name: 'Siemens Instrumentation', slug: 'siemens-instrumentation', country: 'Germania', description: 'Tehnologie de măsurare pentru procese industriale', featured: true },
      { name: 'Emerson', slug: 'emerson', country: 'SUA', description: 'Soluții complete de măsurare și control proces', featured: true },
      { name: 'Yokogawa', slug: 'yokogawa', country: 'Japonia', description: 'Instrumentație de precizie pentru industrie', featured: false },
      { name: 'Krohne', slug: 'krohne', country: 'Germania', description: 'Debitimetre și instrumentație pentru procese', featured: false },
      { name: 'Vega', slug: 'vega', country: 'Germania', description: 'Senzori de nivel radar și ultrasonic', featured: false },
      { name: 'IFM', slug: 'ifm', country: 'Germania', description: 'Senzori și sisteme pentru automatizare', featured: false },
      { name: 'Baumer', slug: 'baumer', country: 'Elveția', description: 'Senzori optici și inductivi de precizie', featured: false },
      { name: 'Jumo', slug: 'jumo', country: 'Germania', description: 'Măsurare și control temperatură', featured: false },
      { name: 'Keller', slug: 'keller', country: 'Elveția', description: 'Transductoare de presiune electronice', featured: false },
      { name: 'Testo', slug: 'testo', country: 'Germania', description: 'Instrumente portabile de măsură', featured: false },
      { name: 'Fluke', slug: 'fluke', country: 'SUA', description: 'Instrumente de testare și măsurare', featured: false },
      { name: 'Dwyer', slug: 'dwyer', country: 'SUA', description: 'Instrumentație pentru presiune și debit', featured: false },
      { name: 'Honeywell Analytics', slug: 'honeywell-analytics', country: 'SUA', description: 'Detectoare de gaz și sisteme de siguranță', featured: false },
      { name: 'Bürkert Sensors', slug: 'burkert-sensors', country: 'Germania', description: 'Senzori de debit și tehnologie fluidică', featured: false },
      { name: 'Badger Meter', slug: 'badger-meter', country: 'SUA', description: 'Debitimetre pentru lichide industriale', featured: false },
      { name: 'ABB Instrumentation', slug: 'abb-instrumentation', country: 'Elveția', description: 'Instrumentație pentru controlul proceselor', featured: false },
      { name: 'Kobold', slug: 'kobold', country: 'Germania', description: 'Instrumentație pentru măsurare debit și nivel', featured: false },
      { name: 'Anderson-Negele', slug: 'anderson-negele', country: 'Germania', description: 'Senzori pentru industria alimentară și farmaceutică', featured: false }
    ],
    productTypes: [
      {
        name: 'Senzori de Presiune',
        slug: 'senzori-presiune',
        description: 'Transductoare și transmițătoare de presiune industriale',
        applications: ['Monitorizare hidraulică', 'Sisteme pneumatice', 'Controlul proceselor', 'Rezervoare sub presiune']
      },
      {
        name: 'Senzori de Temperatură',
        slug: 'senzori-temperatura',
        description: 'Termocuple, PT100/PT1000 și transmițătoare termice',
        applications: ['Monitorizare procese termice', 'Cazane industriale', 'Sisteme de răcire', 'Camere frigorifice']
      },
      {
        name: 'Debitimetre Industriale',
        slug: 'debitimetre',
        description: 'Măsurare debit lichide, gaze și vapori',
        applications: ['Măsurare consum utilități', 'Dozare produse chimice', 'Monitorizare procese', 'Facturare energie']
      },
      {
        name: 'Traductoare de Nivel',
        slug: 'traductoare-nivel',
        description: 'Senzori radar, ultrasonic, hidrostatici pentru nivel',
        applications: ['Rezervoare industriale', 'Silozuri', 'Bazine de proces', 'Stații de pompare']
      },
      {
        name: 'Manometre și Indicatoare',
        slug: 'manometre',
        description: 'Manometre mecanice și digitale pentru afișare presiune',
        applications: ['Instalații industriale', 'Compresoare', 'Sisteme hidraulice', 'Monitorizare în câmp']
      },
      {
        name: 'Analizoare și Detectoare',
        slug: 'analizoare',
        description: 'Analizoare gaze, pH, conductivitate și detectoare',
        applications: ['Calitatea apei', 'Detectare scurgeri gaz', 'Controlul emisiilor', 'Procese chimice']
      }
    ],
    accessories: ['Tuburi capilare și termoputuri', 'Manifolduri pentru presiune', 'Capete de sondă', 'Cabluri de extensie pentru termocuple', 'Convertoare semnal', 'Afișatoare și indicatoare locale', 'Separatoare și sigilii chimice'],
    services: ['Calibrare în laborator acreditat RENAR', 'Consultanță selecție instrumentație', 'Instalare și punere în funcțiune', 'Verificări periodice și recalibrare', 'Service și reparații']
  },
  {
    id: 'componente-hidraulice-pneumatice',
    name: 'Componente Hidraulice și Pneumatice',
    slug: 'componente-hidraulice-pneumatice',
    tagline: 'Putere și control în sistemele de acționare',
    metaTitle: 'Hidraulică și Pneumatică | Furnizor SEAP | Parker, Festo',
    metaDescription: 'Furnizor SEAP componente hidraulice și pneumatice. Distribuitor Parker, Bosch Rexroth, Festo. Cilindri, valve, pompe.',
    description: 'Componente și sisteme hidraulice și pneumatice pentru acționări industriale. Cilindri, distribuitoare, pompe și accesorii pentru mașini și utilaje grele.',
    heroDescription: 'Tehnologie de acționare pentru aplicații industriale exigente. Soluții complete de hidraulică și pneumatică pentru fabrici și mașini.',
    icon: 'CircuitBoard',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    stats: { brands: '15+', products: '12000+', delivery: '24-72h' },
    lastUpdated: '2026-02-13',
    brands: [
      { name: 'Parker Hannifin', slug: 'parker-hannifin', country: 'SUA', description: 'Lider mondial în tehnologii de mișcare și control', featured: true },
      { name: 'Bosch Rexroth', slug: 'bosch-rexroth', country: 'Germania', description: 'Sisteme hidraulice și pneumatice de înaltă performanță', featured: true },
      { name: 'Festo', slug: 'festo', country: 'Germania', description: 'Automatizare pneumatică și electrică inovatoare', featured: true },
      { name: 'SMC', slug: 'smc', country: 'Japonia', description: 'Componente pneumatice pentru automatizare industrială', featured: true },
      { name: 'Eaton Hydraulics', slug: 'eaton-hydraulics', country: 'SUA', description: 'Sisteme hidraulice pentru utilaje mobile și industriale', featured: false },
      { name: 'Moog', slug: 'moog', country: 'SUA', description: 'Servovalve și sisteme hidraulice de precizie', featured: false },
      { name: 'Hydac', slug: 'hydac', country: 'Germania', description: 'Tehnologie fluidică și hidraulică inteligentă', featured: false },
      { name: 'Bucher Hydraulics', slug: 'bucher-hydraulics', country: 'Elveția', description: 'Sisteme hidraulice pentru utilaje mobile', featured: false },
      { name: 'Atos', slug: 'atos', country: 'Italia', description: 'Electrohidraulică de precizie industrială', featured: false },
      { name: 'Aventics', slug: 'aventics', country: 'Germania', description: 'Pneumatică inteligentă pentru automatizare', featured: false },
      { name: 'Norgren', slug: 'norgren', country: 'UK', description: 'Componente pneumatice și tehnologie de control', featured: false },
      { name: 'Camozzi', slug: 'camozzi', country: 'Italia', description: 'Automatizare pneumatică pentru industrie', featured: false },
      { name: 'Metal Work', slug: 'metal-work', country: 'Italia', description: 'Cilindri și valve pneumatice', featured: false },
      { name: 'Airtac', slug: 'airtac', country: 'Taiwan', description: 'Componente pneumatice eficiente', featured: false },
      { name: 'Pneumax', slug: 'pneumax', country: 'Italia', description: 'Tehnologie pneumatică modulară', featured: false }
    ],
    productTypes: [
      {
        name: 'Cilindri Hidraulici',
        slug: 'cilindri-hidraulici',
        description: 'Cilindri cu simplă și dublă efect pentru aplicații grele',
        applications: ['Utilaje de construcții', 'Prese industriale', 'Mașini agricole', 'Echipamente de ridicare']
      },
      {
        name: 'Distribuitoare Hidraulice',
        slug: 'distribuitoare-hidraulice',
        description: 'Valve de control direcțional și proporțional',
        applications: ['Comenzi utilaje mobile', 'Circuite hidraulice industriale', 'Sisteme de prese', 'Mașini de injecție']
      },
      {
        name: 'Pompe Hidraulice',
        slug: 'pompe-hidraulice',
        description: 'Pompe cu piston, palete și roți dințate',
        applications: ['Agregate hidraulice', 'Sisteme centralizate', 'Utilaje mobile', 'Mașini de prelucrare']
      },
      {
        name: 'Cilindri Pneumatici',
        slug: 'cilindri-pneumatici',
        description: 'Actuatoare pneumatice pentru automatizare rapidă',
        applications: ['Linii de producție automatizate', 'Mașini de ambalare', 'Robotică industrială', 'Manipulatoare']
      },
      {
        name: 'Valve Pneumatice',
        slug: 'valve-pneumatice',
        description: 'Distribuitoare și valve de reglare pentru aer comprimat',
        applications: ['Circuite pneumatice', 'Comenzi secvențiale', 'Controlul vitezei', 'Automatizare procese']
      },
      {
        name: 'Furtunuri și Racorduri',
        slug: 'furtunuri-racorduri',
        description: 'Conexiuni și conducte pentru hidraulică și pneumatică',
        applications: ['Instalații hidraulice', 'Rețele pneumatice', 'Utilaje mobile', 'Service și mentenanță']
      }
    ],
    accessories: ['Filtre hidraulice și pneumatice', 'Acumulatoare hidraulice', 'Manometre și presostate', 'Tevi și țevi hidraulice', 'Unități de mentenanță FRL', 'Multiplicatori de presiune', 'Racorduri rapide'],
    services: ['Proiectare circuite hidraulice', 'Dimensionare componente', 'Punere în funcțiune sisteme', 'Training utilizatori', 'Mentenanță preventivă']
  },
  {
    id: 'echipamente-electrice',
    name: 'Echipamente Electrice și Automatizare',
    slug: 'echipamente-electrice',
    tagline: 'Distribuție și protecție electrică industrială',
    metaTitle: 'Echipamente Electrice | Furnizor SEAP | Siemens, ABB',
    metaDescription: 'Furnizor SEAP echipamente electrice industriale. Distribuitor Siemens, ABB, Schneider. Tablouri, întrerupătoare, cabluri.',
    description: 'Echipamente electrice pentru distribuție, protecție și automatizare industrială. Tablouri electrice, întrerupătoare automate, contactoare și componente de conexiune.',
    heroDescription: 'Soluții complete pentru instalații electrice industriale. Componente certificate pentru siguranță și eficiență energetică.',
    icon: 'Plug',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    stats: { brands: '20+', products: '15000+', delivery: '24-72h' },
    lastUpdated: '2026-02-13',
    brands: [
      { name: 'Siemens Electrical', slug: 'siemens-electrical', country: 'Germania', description: 'Tehnologie electrică pentru industrie și clădiri', featured: true },
      { name: 'ABB Electrical', slug: 'abb-electrical', country: 'Elveția', description: 'Echipamente de distribuție și protecție electrică', featured: true },
      { name: 'Schneider Electric', slug: 'schneider', country: 'Franța', description: 'Soluții electrice integrate pentru eficiență energetică', featured: true },
      { name: 'Eaton', slug: 'eaton', country: 'Irlanda', description: 'Managementul puterii pentru aplicații critice', featured: true },
      { name: 'Legrand', slug: 'legrand', country: 'Franța', description: 'Infrastructură electrică și digitală pentru clădiri', featured: false },
      { name: 'Rittal', slug: 'rittal', country: 'Germania', description: 'Carcase și sisteme de climatizare pentru tablouri', featured: false },
      { name: 'Phoenix Contact', slug: 'phoenix', country: 'Germania', description: 'Tehnologie de conexiune electrică industrială', featured: false },
      { name: 'Weidmüller', slug: 'weidmuller-electric', country: 'Germania', description: 'Componente de conexiune și interfețe', featured: false },
      { name: 'LAPP', slug: 'lapp', country: 'Germania', description: 'Cabluri și soluții de conexiune industrială', featured: false },
      { name: 'Helukabel', slug: 'helukabel', country: 'Germania', description: 'Cabluri și conducte pentru automatizare', featured: false },
      { name: 'Finder', slug: 'finder', country: 'Italia', description: 'Relee și componente electrice industriale', featured: false },
      { name: 'Lovato', slug: 'lovato', country: 'Italia', description: 'Aparataje de comandă și protecție', featured: false },
      { name: 'Schrack', slug: 'schrack', country: 'Austria', description: 'Relee și contactoare industriale', featured: false },
      { name: 'Hager', slug: 'hager', country: 'Germania', description: 'Echipamente modulare pentru tablouri', featured: false },
      { name: 'TE Connectivity', slug: 'te-connectivity', country: 'Elveția', description: 'Conectori și soluții de conectare', featured: false },
      { name: 'Harting', slug: 'harting', country: 'Germania', description: 'Tehnologie de conectare industrială', featured: false },
      { name: 'Wago', slug: 'wago', country: 'Germania', description: 'Tehnologie de conectare cu arc', featured: false },
      { name: 'Mersen', slug: 'mersen', country: 'Franța', description: 'Protecție electrică și componente de putere', featured: false },
      { name: 'Jean Müller', slug: 'jean-muller', country: 'Germania', description: 'Siguranțe fuzibile industriale', featured: false },
      { name: 'Dehn', slug: 'dehn', country: 'Germania', description: 'Protecție împotriva supratensiunilor', featured: false }
    ],
    productTypes: [
      {
        name: 'Întrerupătoare Automate',
        slug: 'intrerupatoare-automate',
        description: 'Protecție circuite electrice industriale',
        applications: ['Tablouri electrice', 'Distribuție energie', 'Protecție motoare', 'Instalații industriale']
      },
      {
        name: 'Contactoare și Relee',
        slug: 'contactoare-relee',
        description: 'Aparataje de comandă pentru motoare și circuite',
        applications: ['Pornire motoare', 'Comenzi automate', 'Circuite de control', 'Iluminat industrial']
      },
      {
        name: 'Convertizoare de Frecvență',
        slug: 'convertizoare-frecventa',
        description: 'Varioare de turație pentru motoare electrice',
        applications: ['Economii energie', 'Controlul pompelor', 'Ventilatoare industriale', 'Benzi transportoare']
      },
      {
        name: 'Tablouri Electrice',
        slug: 'tablouri-electrice',
        description: 'Tablouri de distribuție și automatizare fabricate',
        applications: ['Distribuție electrică', 'Comandă procese', 'Automatizare utilaje', 'Stații de pompare']
      },
      {
        name: 'Cabluri Industriale',
        slug: 'cabluri-industriale',
        description: 'Cabluri electrice pentru putere și comandă',
        applications: ['Alimentare motoare', 'Cablare tablouri', 'Instalații mobile', 'Cabluri de comandă']
      },
      {
        name: 'Componente de Protecție',
        slug: 'protectii-electrice',
        description: 'Siguranțe, descărcătoare și protecții diferențiale',
        applications: ['Protecție supratensiuni', 'Protecție diferențială', 'Siguranțe fuzibile', 'Parafulgere']
      }
    ],
    accessories: ['Borne și conectori', 'Șine DIN și accesorii montaj', 'Etichetare și marcare', 'Dulăpioare și carcase plastice', 'Ventilatoare pentru tablouri', 'Termostate și higrostate', 'Sigilii și lacăte siguranță'],
    services: ['Proiectare tablouri electrice', 'Fabricare tablouri pe comandă', 'Certificare conformitate', 'Punere în funcțiune', 'Service și upgrade']
  },
  {
    id: 'componente-mecanice',
    name: 'Componente Mecanice și Transmisii',
    slug: 'componente-mecanice',
    tagline: 'Componente de calitate pentru transmisii industriale',
    metaTitle: 'Componente Mecanice | Furnizor SEAP | SKF, FAG, Gates',
    metaDescription: 'Furnizor SEAP componente mecanice. Distribuitor SKF, FAG, Gates. Rulmenți, curele, lanțuri, cuplaje pentru licitații.',
    description: 'Componente mecanice pentru transmisii și mișcări industriale. Rulmenți, curele de transmisie, lanțuri, garnituri și cuplaje pentru mentenanță și investiții.',
    heroDescription: 'Piese de schimb și componente originale pentru utilaje industriale. Stock permanent și livrări rapide pentru minimizarea timpilor de nefuncționare.',
    icon: 'Cog',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    stats: { brands: '15+', products: '20000+', delivery: '24-72h' },
    lastUpdated: '2026-02-13',
    brands: [
      { name: 'SKF', slug: 'skf', country: 'Suedia', description: 'Lider mondial în tehnologia rulmenților', featured: true },
      { name: 'FAG Schaeffler', slug: 'fag-schaeffler', country: 'Germania', description: 'Rulmenți de precizie pentru industrie și automotive', featured: true },
      { name: 'NSK', slug: 'nsk', country: 'Japonia', description: 'Rulmenți și componente liniare de înaltă precizie', featured: true },
      { name: 'Timken', slug: 'timken', country: 'SUA', description: 'Rulmenți cu role conice pentru aplicații grele', featured: true },
      { name: 'Gates', slug: 'gates', country: 'SUA', description: 'Curele și sisteme de transmisie industriale', featured: false },
      { name: 'Optibelt', slug: 'optibelt', country: 'Germania', description: 'Curele de transmisie pentru industrie', featured: false },
      { name: 'Continental Belts', slug: 'continental-belts', country: 'Germania', description: 'Tehnologie de transmisie cu curele', featured: false },
      { name: 'Freudenberg', slug: 'freudenberg', country: 'Germania', description: 'Garnituri și simering-uri pentru industrie', featured: false },
      { name: 'Trelleborg', slug: 'trelleborg', country: 'Suedia', description: 'Componente din cauciuc și polimeri industriali', featured: false },
      { name: 'Rexnord', slug: 'rexnord', country: 'SUA', description: 'Lanțuri și componente pentru manipulare materiale', featured: false },
      { name: 'Habasit', slug: 'habasit', country: 'Elveția', description: 'Benzi transportoare și curele modulare', featured: false },
      { name: 'Forbo Siegling', slug: 'forbo-siegling', country: 'Germania', description: 'Benzi transportoare pentru industrie', featured: false },
      { name: 'Martin Sprocket', slug: 'martin-sprocket', country: 'SUA', description: 'Pinioane și componente de transmisie', featured: false },
      { name: 'Renold', slug: 'renold', country: 'UK', description: 'Lanțuri industriale pentru transmisii', featured: false },
      { name: 'Tsubaki', slug: 'tsubaki', country: 'Japonia', description: 'Lanțuri de precizie pentru industrie', featured: false }
    ],
    productTypes: [
      {
        name: 'Rulmenți Industriali',
        slug: 'rulmenți-industriali',
        description: 'Rulmenți cu bile, role și ace pentru toate aplicațiile',
        applications: ['Motoare electrice', 'Reductoare', 'Pompe și ventilatoare', 'Utilaje de procesare']
      },
      {
        name: 'Curele de Transmisie',
        slug: 'curele-transmisie',
        description: 'Curele trapezoidale, dințate și plate industriale',
        applications: ['Transmisii mecanice', 'Compresoare', 'Utilaje agricole', 'Echipamente HVAC']
      },
      {
        name: 'Lanțuri Industriale',
        slug: 'lanturi-industriale',
        description: 'Lanțuri cu role pentru transmisii și transportoare',
        applications: ['Transportoare cu lanț', 'Transmisii grele', 'Utilaje forestiere', 'Echipamente minerit']
      },
      {
        name: 'Garnituri și Simering-uri',
        slug: 'garnituri-simering',
        description: 'Etanșări pentru arbori, cilindri și capace',
        applications: ['Pompe industriale', 'Cilindri hidraulici', 'Reductoare', 'Compresoare']
      },
      {
        name: 'Cuplaje Mecanice',
        slug: 'cuplaje-mecanice',
        description: 'Cuplaje elastice, rigide și de siguranță',
        applications: ['Conectare motor-pompă', 'Transmisii industriale', 'Mașini CNC', 'Agitatoare']
      },
      {
        name: 'Benzi Transportoare',
        slug: 'benzi-transportoare',
        description: 'Benzi din cauciuc, PVC și modulare',
        applications: ['Transportoare industriale', 'Sortare și ambalare', 'Industria alimentară', 'Logistică']
      }
    ],
    accessories: ['Unsori și lubrifianți pentru rulmenți', 'Casete de rulmenți', 'Pinioane și roți dințate', 'Fittinguri pentru ungere', 'Chei pentru extragere rulmenți', 'Adezivi și retentori', 'Echipamente montaj curele'],
    services: ['Analiză vibrații și mentenanță predictivă', 'Consultanță selecție componente', 'Livrări urgente piese critice', 'Training mentenanță mecanică', 'Asistență montaj']
  },
  {
    id: 'filtre-consumabile',
    name: 'Filtre și Consumabile Industriale',
    slug: 'filtre-consumabile',
    tagline: 'Protecție și puritate în procesele industriale',
    metaTitle: 'Filtre Industriale | Furnizor SEAP | Mann+Hummel, Parker',
    metaDescription: 'Furnizor SEAP filtre industriale. Distribuitor Mann+Hummel, Parker, Hydac. Filtre hidraulice, aer, ulei pentru licitații.',
    description: 'Filtre industriale și consumabile pentru protecția echipamentelor. Filtre hidraulice, pneumatice, de ulei și aer pentru mentenanță preventivă.',
    heroDescription: 'Sisteme de filtrare pentru maximizarea duratei de viață a echipamentelor. Elemente filtrante originale și compatibile pentru toate aplicațiile.',
    icon: 'Filter',
    color: '#14b8a6',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
    stats: { brands: '12+', products: '8000+', delivery: '24-72h' },
    lastUpdated: '2026-02-13',
    brands: [
      { name: 'Mann+Hummel', slug: 'mann-hummel', country: 'Germania', description: 'Lider în tehnologia filtrării industriale', featured: true },
      { name: 'Donaldson', slug: 'donaldson', country: 'SUA', description: 'Sisteme de filtrare pentru aer comprimat și hidraulică', featured: true },
      { name: 'Parker Filtration', slug: 'parker-filtration', country: 'SUA', description: 'Soluții complete de filtrare industrială', featured: true },
      { name: 'Hydac Filtration', slug: 'hydac-filtration', country: 'Germania', description: 'Tehnologie de filtrare pentru hidraulică', featured: true },
      { name: 'Pall', slug: 'pall', country: 'SUA', description: 'Filtrare de precizie pentru procese critice', featured: false },
      { name: 'Mahle', slug: 'mahle', country: 'Germania', description: 'Filtre pentru motoare și sisteme industriale', featured: false },
      { name: 'Hengst', slug: 'hengst', country: 'Germania', description: 'Sisteme de filtrare pentru industrie și automotive', featured: false },
      { name: 'Boll & Kirch', slug: 'boll-kirch', country: 'Germania', description: 'Filtre automate pentru lichide industriale', featured: false },
      { name: 'Internormen', slug: 'internormen', country: 'Germania', description: 'Tehnologie de filtrare hidraulică', featured: false },
      { name: 'Eaton Filtration', slug: 'eaton-filtration', country: 'SUA', description: 'Filtre pentru sisteme hidraulice industriale', featured: false },
      { name: 'Filtrec', slug: 'filtrec', country: 'Italia', description: 'Elemente filtrante pentru hidraulică', featured: false },
      { name: 'MP Filtri', slug: 'mp-filtri', country: 'Italia', description: 'Filtre și accesorii pentru sistemele hidraulice', featured: false }
    ],
    productTypes: [
      {
        name: 'Filtre Hidraulice',
        slug: 'filtre-hidraulice',
        description: 'Elemente filtrante pentru protecția sistemelor hidraulice',
        applications: ['Agregate hidraulice', 'Sisteme de lubrifiere', 'Utilaje mobile', 'Prese industriale']
      },
      {
        name: 'Filtre Aer Comprimat',
        slug: 'filtre-aer',
        description: 'Purificarea aerului pentru sisteme pneumatice',
        applications: ['Compresoare industriale', 'Rețele pneumatice', 'Instrumentație', 'Mașini de ambalare']
      },
      {
        name: 'Filtre Ulei',
        slug: 'filtre-ulei',
        description: 'Filtre pentru motoare și sisteme de lubrifiere',
        applications: ['Grupuri electrogene', 'Motoare diesel', 'Sisteme de ungere centralizată', 'Turbine']
      },
      {
        name: 'Elemente Filtrante',
        slug: 'elemente-filtrante',
        description: 'Cartușe și elemente de schimb pentru toate tipurile',
        applications: ['Mentenanță preventivă', 'Service echipamente', 'Înlocuiri periodice', 'Stock piese schimb']
      },
      {
        name: 'Separatoare Ulei-Apă',
        slug: 'separatoare',
        description: 'Separarea condensului din sistemele de aer comprimat',
        applications: ['Compresoare cu șurub', 'Stații de aer comprimat', 'Uscătoare frigorifice', 'Tratare condensat']
      },
      {
        name: 'Uscătoare Aer Comprimat',
        slug: 'uscatoare-aer',
        description: 'Eliminarea umidității din aerul comprimat',
        applications: ['Instrumentație precisă', 'Vopsitorie industrială', 'Industria alimentară', 'Farmaceutică']
      }
    ],
    accessories: ['Indicatoare de colmatare', 'Capace și garnituri filtre', 'Manometre pentru filtre', 'Suporturi pentru cartușe', 'Kituri de service', 'Chei pentru filtre', 'Prelevatori de probe'],
    services: ['Audit sistem de filtrare', 'Program mentenanță preventivă', 'Analiză ulei hidraulic', 'Livrări programate consumabile', 'Consultanță îmbunătățire sistem']
  },
  {
    id: 'scule-instrumente',
    name: 'Scule și Instrumente de Măsură',
    slug: 'scule-instrumente',
    tagline: 'Scule profesionale pentru mentenanță industrială',
    metaTitle: 'Scule Industriale | Furnizor SEAP | Bosch, Hilti, Mitutoyo',
    metaDescription: 'Furnizor SEAP scule și instrumente industriale. Distribuitor Bosch, Hilti, Mitutoyo. Scule electrice, pneumatice, măsură.',
    description: 'Scule profesionale și instrumente de măsură pentru mentenanță industrială. Scule electrice, pneumatice, echipamente de testare și măsurare de precizie.',
    heroDescription: 'Echipamente profesionale pentru ateliere și departamente de mentenanță. Scule industriale durabile și instrumente de măsură certificate.',
    icon: 'Wrench',
    color: '#f97316',
    gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    stats: { brands: '10+', products: '5000+', delivery: '24-72h' },
    lastUpdated: '2026-02-13',
    brands: [
      { name: 'Bosch Professional', slug: 'bosch-professional', country: 'Germania', description: 'Scule electrice profesionale pentru industrie', featured: true },
      { name: 'Hilti', slug: 'hilti', country: 'Liechtenstein', description: 'Tehnologie premium pentru construcții și industrie', featured: true },
      { name: 'Makita', slug: 'makita', country: 'Japonia', description: 'Scule electrice și echipamente de putere', featured: true },
      { name: 'DeWalt', slug: 'dewalt', country: 'SUA', description: 'Scule profesionale pentru aplicații grele', featured: true },
      { name: 'Mitutoyo', slug: 'mitutoyo', country: 'Japonia', description: 'Lider mondial în instrumente de măsură de precizie', featured: true },
      { name: 'Tesa', slug: 'tesa', country: 'Elveția', description: 'Tehnologie de măsurare dimensională', featured: false },
      { name: 'Mahr', slug: 'mahr', country: 'Germania', description: 'Instrumente de măsură și control calitate', featured: false },
      { name: 'Stahlwille', slug: 'stahlwille', country: 'Germania', description: 'Scule de mână profesionale premium', featured: false },
      { name: 'Gedore', slug: 'gedore', country: 'Germania', description: 'Scule de calitate pentru profesioniști', featured: false },
      { name: 'Wera', slug: 'wera', country: 'Germania', description: 'Șurubelnițe și scule de mână inovatoare', featured: false }
    ],
    productTypes: [
      {
        name: 'Scule Electrice',
        slug: 'scule-electrice',
        description: 'Bormasini, șlefuitoare, ferăstraie electrice industriale',
        applications: ['Mentenanță utilaje', 'Montaj echipamente', 'Fabricație structuri', 'Service industrial']
      },
      {
        name: 'Scule Pneumatice',
        slug: 'scule-pneumatice',
        description: 'Cheie pneumatice, polizoare, ciocan pneumatice',
        applications: ['Service automotive industrial', 'Montaj structuri metalice', 'Mentenanță utilaje grele', 'Fabricație']
      },
      {
        name: 'Instrumente Măsură Dimensională',
        slug: 'masura-dimensionala',
        description: 'Șublere, micrometre, comparatoare, calibre',
        applications: ['Controlul calității', 'Verificare dimensiuni piese', 'Ateliere mecanice', 'Service utilaje']
      },
      {
        name: 'Echipamente de Testare',
        slug: 'echipamente-testare',
        description: 'Multimetre, megaohmetre, testere electrici',
        applications: ['Service electric', 'Verificare motoare', 'Testare izolații', 'Mentenanță electrică']
      },
      {
        name: 'Scule de Mână Profesionale',
        slug: 'scule-mana',
        description: 'Chei, tubulare, șurubelnițe, clești industriali',
        applications: ['Mentenanță utilaje', 'Montaj echipamente', 'Service mecanic', 'Instalații industriale']
      },
      {
        name: 'Echipamente pentru Sudură',
        slug: 'echipamente-sudura',
        description: 'Invertoare, posturi sudură, echipamente de protecție',
        applications: ['Reparații structuri metalice', 'Fabricație echipamente', 'Mentenanță utilaje', 'Construcții industriale']
      }
    ],
    accessories: ['Baterii și încărcătoare', 'Discuri abrazive și perii', 'Burghie și adaptatoare', 'Truse de chei și tubulare', 'Valize și organizatoare', 'Echipamente de protecție', 'Consumabile sudură'],
    services: ['Demonstrații produse', 'Consultanță selecție echipamente', 'Verificare și calibrare instrumente', 'Service și reparații scule', 'Programe de înlocuire']
  },
  {
    id: 'echipamente-termice',
    name: 'Echipamente Termice și Climatizare',
    slug: 'echipamente-termice',
    tagline: 'Soluții termice pentru confort și eficiență',
    metaTitle: 'Echipamente Termice | Furnizor SEAP | Carrier, Daikin',
    metaDescription: 'Furnizor SEAP echipamente termice industriale. Distribuitor Carrier, Daikin, Trane. Chillere, cazane, climatizare.',
    description: 'Echipamente termice și de climatizare pentru industrie și clădiri comerciale. Chillere, cazane, aeroterme și sisteme HVAC pentru aplicații diverse.',
    heroDescription: 'Sisteme de încălzire, răcire și ventilație pentru eficiență energetică. Soluții complete pentru confort termic industrial și comercial.',
    icon: 'Flame',
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    stats: { brands: '8+', products: '2000+', delivery: '24-72h' },
    lastUpdated: '2026-02-13',
    brands: [
      { name: 'Carrier', slug: 'carrier', country: 'SUA', description: 'Lider mondial în sisteme HVAC și refrigerare', featured: true },
      { name: 'Daikin', slug: 'daikin', country: 'Japonia', description: 'Tehnologie avansată de climatizare industrială', featured: true },
      { name: 'Trane', slug: 'trane', country: 'SUA', description: 'Sisteme HVAC pentru aplicații comerciale și industriale', featured: true },
      { name: 'Grundfos HVAC', slug: 'grundfos-hvac', country: 'Danemarca', description: 'Pompe și soluții pentru sisteme termice', featured: false },
      { name: 'Wilo HVAC', slug: 'wilo-hvac', country: 'Germania', description: 'Tehnologie de pompare pentru HVAC', featured: false },
      { name: 'Spirax Sarco Thermal', slug: 'spirax-sarco-thermal', country: 'UK', description: 'Specialiști în sisteme cu abur și termic', featured: false },
      { name: 'Armstrong', slug: 'armstrong', country: 'Canada', description: 'Echipamente pentru sisteme de încălzire', featured: false },
      { name: 'Caleffi Thermal', slug: 'caleffi-thermal', country: 'Italia', description: 'Componente pentru instalații termice', featured: false }
    ],
    productTypes: [
      {
        name: 'Chillere Industriale',
        slug: 'chillere-industriale',
        description: 'Sisteme de răcire cu apă pentru procese industriale',
        applications: ['Răcire procese plastice', 'Industria alimentară', 'Centre de date', 'Climatizare clădiri mari']
      },
      {
        name: 'Aeroterme Industriale',
        slug: 'aeroterme',
        description: 'Încălzitoare cu aer pentru hale industriale',
        applications: ['Hale de producție', 'Depozite', 'Spații logistice', 'Sere industriale']
      },
      {
        name: 'Cazane Industriale',
        slug: 'cazane-industriale',
        description: 'Generatoare de apă caldă și abur pentru industrie',
        applications: ['Încălzire clădiri', 'Procese industriale', 'Spălătorii', 'Industria alimentară']
      },
      {
        name: 'Arzătoare Industriale',
        slug: 'arzatoare',
        description: 'Arzătoare pe gaz și lichide pentru cazane',
        applications: ['Cazane de abur', 'Cazane apă caldă', 'Procese termice', 'Uscătorii']
      },
      {
        name: 'Sisteme de Climatizare',
        slug: 'sisteme-climatizare',
        description: 'Unități VRF și sisteme split pentru clădiri',
        applications: ['Birouri', 'Centre comerciale', 'Hoteluri', 'Spații industriale']
      },
      {
        name: 'Recuperatoare de Căldură',
        slug: 'recuperatoare',
        description: 'Sisteme de recuperare energie termică',
        applications: ['Eficiență energetică', 'Ventilație industrială', 'Uscătorii', 'Procese cu aer cald']
      }
    ],
    accessories: ['Pompe de circulație termică', 'Vase de expansiune', 'Valve termostatice', 'Izolații termice', 'Sisteme de filtrare apă', 'Automatizări HVAC', 'Sisteme de dezinfecție'],
    services: ['Proiectare sisteme HVAC', 'Calculul sarcinii termice', 'Instalare și punere în funcțiune', 'Mentenanță preventivă', 'Audit energetic și optimizare']
  },
  {
    id: 'lubrifianti-chimice',
    name: 'Lubrifianți și Chimice Industriale',
    slug: 'lubrifianti-chimice',
    tagline: 'Protecție și performanță pentru echipamente',
    metaTitle: 'Lubrifianți Industriali | Furnizor SEAP | Shell, Mobil',
    metaDescription: 'Furnizor SEAP lubrifianți și chimice industriale. Distribuitor Shell, Mobil, Castrol. Uleiuri, unsori, adezivi.',
    description: 'Lubrifianți industriali și produse chimice tehnice pentru mentenanță. Uleiuri hidraulice, unsori, fluide de răcire și adezivi pentru toate aplicațiile.',
    heroDescription: 'Soluții de lubrifiere pentru maximizarea duratei de viață a echipamentelor. Produse certificate pentru industrie grea și aplicații speciale.',
    icon: 'Droplets',
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
    stats: { brands: '8+', products: '1500+', delivery: '24-72h' },
    lastUpdated: '2026-02-13',
    brands: [
      { name: 'Shell Lubricants', slug: 'shell-lubricants', country: 'Olanda', description: 'Lubrifianți premium pentru industrie și transport', featured: true },
      { name: 'Mobil Industrial', slug: 'mobil-industrial', country: 'SUA', description: 'Tehnologie de lubrifiere pentru aplicații exigente', featured: true },
      { name: 'Castrol', slug: 'castrol', country: 'UK', description: 'Uleiuri și unsori pentru industrie', featured: true },
      { name: 'Klüber Lubrication', slug: 'kluber', country: 'Germania', description: 'Lubrifianți speciali pentru aplicații extreme', featured: true },
      { name: 'SKF Lubrication', slug: 'skf-lubrication', country: 'Suedia', description: 'Unsori și sisteme de lubrifiere automată', featured: false },
      { name: 'Loctite Henkel', slug: 'loctite', country: 'Germania', description: 'Adezivi și sigilante pentru industrie', featured: false },
      { name: 'Permatex', slug: 'permatex', country: 'SUA', description: 'Chimicale pentru service și mentenanță', featured: false },
      { name: 'Würth Chimice', slug: 'wurth-chimice', country: 'Germania', description: 'Produse chimice tehnice pentru profesioniști', featured: false }
    ],
    productTypes: [
      {
        name: 'Uleiuri Hidraulice',
        slug: 'uleiuri-hidraulice',
        description: 'Fluide hidraulice pentru sisteme industriale',
        applications: ['Agregate hidraulice', 'Utilaje mobile', 'Prese industriale', 'Sisteme de ridicare']
      },
      {
        name: 'Unsori Industriale',
        slug: 'unsori-industriale',
        description: 'Unsori pentru rulmenți și lagăre industriale',
        applications: ['Lagăre motoare', 'Rulmenți ventilatoare', 'Articulații mecanice', 'Echipamente grele']
      },
      {
        name: 'Uleiuri de Transmisie',
        slug: 'uleiuri-transmisie',
        description: 'Lubrifianți pentru reductoare și cutii de viteze',
        applications: ['Reductoare industriale', 'Cutii viteze utilaje', 'Sisteme cu angrenaje', 'Transmisii mecanice']
      },
      {
        name: 'Adezivi Industriali',
        slug: 'adezivi-industriali',
        description: 'Adezivi anaerobi, ciano și structurali',
        applications: ['Fixare rulmenți', 'Blocaj filete', 'Etanșări', 'Reparații rapide']
      },
      {
        name: 'Spray-uri Tehnice',
        slug: 'spray-tehnice',
        description: 'Spray-uri de curățare, lubrifiere și protecție',
        applications: ['Deblocări filete', 'Curățare contacte', 'Protecție anticorozivă', 'Lubrifiere mecanisme']
      },
      {
        name: 'Fluide de Răcire',
        slug: 'fluide-racire',
        description: 'Emulsii pentru prelucrări mecanice',
        applications: ['Strunguri CNC', 'Frezare metale', 'Rectificare', 'Prelucrări mecanice']
      }
    ],
    accessories: ['Pompe de gresat', 'Pistoale de uns', 'Suporturi spray-uri', 'Dozatoare automate', 'Recipiente și bidoane', 'Kituri scurgere', 'Echipamente protecție'],
    services: ['Analiză ulei și lubrifianți', 'Consultanță selecție produse', 'Programe de lubrifiere preventivă', 'Training utilizare corectă', 'Livrări programate']
  },
  {
    id: 'echipamente-auxiliare',
    name: 'Echipamente Auxiliare și Protecție',
    slug: 'echipamente-auxiliare',
    tagline: 'Siguranță și suport pentru operațiuni industriale',
    metaTitle: 'Echipamente Auxiliare | Furnizor SEAP | 3M, Kärcher',
    metaDescription: 'Furnizor SEAP echipamente auxiliare industriale. Protecție muncă, curățenie industrială, sisteme dozare pentru licitații.',
    description: 'Echipamente auxiliare pentru siguranță și eficiență operațională. Echipamente de protecție, curățenie industrială, sisteme de dozare și rezervoare.',
    heroDescription: 'Soluții complete pentru siguranța muncii și procese auxiliare. Produse certificate pentru protecția personalului și mediului de lucru.',
    icon: 'ShieldCheck',
    color: '#64748b',
    gradient: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
    stats: { brands: '8+', products: '3000+', delivery: '24-72h' },
    lastUpdated: '2026-02-13',
    brands: [
      { name: '3M Safety', slug: '3m-safety', country: 'SUA', description: 'Lider mondial în echipamente de protecție', featured: true },
      { name: 'Dräger', slug: 'drager', country: 'Germania', description: 'Tehnologie medicală și de siguranță industrială', featured: true },
      { name: 'MSA Safety', slug: 'msa-safety', country: 'SUA', description: 'Echipamente de protecție pentru medii periculoase', featured: true },
      { name: 'Honeywell Safety', slug: 'honeywell-safety', country: 'SUA', description: 'Soluții integrate de siguranță industrială', featured: false },
      { name: 'Kärcher Industrial', slug: 'karcher-industrial', country: 'Germania', description: 'Tehnologie de curățare pentru industrie', featured: false },
      { name: 'Nilfisk', slug: 'nilfisk', country: 'Danemarca', description: 'Echipamente profesionale de curățare', featured: false },
      { name: 'Grundfos Dosing', slug: 'grundfos-dosing', country: 'Danemarca', description: 'Sisteme de dozare și tratare chimicale', featured: false },
      { name: 'ProMinent Dosing', slug: 'prominent-dosing', country: 'Germania', description: 'Tehnologie de dozare precisă', featured: false }
    ],
    productTypes: [
      {
        name: 'Echipamente Protecție Muncă',
        slug: 'protectie-muncă',
        description: 'EPI pentru siguranța personalului industrial',
        applications: ['Protecție respiratorie', 'Echipamente anti-cădere', 'Ochelari și măști', 'Mănuși de protecție']
      },
      {
        name: 'Curățenie Industrială',
        slug: 'curatenie-industriala',
        description: 'Echipamente profesionale de curățare',
        applications: ['Hale de producție', 'Spălare utilaje', 'Curățare podele industriale', 'Aspiratoare industriale']
      },
      {
        name: 'Sisteme de Dozare',
        slug: 'sisteme-dozare',
        description: 'Pompe dozatoare pentru chimicale și aditivi',
        applications: ['Tratare apă', 'Dozare dezinfectanți', 'Procese chimice', 'Stații epurare']
      },
      {
        name: 'Rezervoare Industriale',
        slug: 'rezervoare-industriale',
        description: 'Rezervoare pentru stocare lichide și produse chimice',
        applications: ['Stocare combustibili', 'Chimicale', 'Apă tehnologică', 'Produse alimentare']
      },
      {
        name: 'Agitatoare și Mixere',
        slug: 'agitatoare',
        description: 'Echipamente pentru omogenizare și amestecare',
        applications: ['Procese chimice', 'Tratare apă', 'Industria alimentară', 'Preparare soluții']
      },
      {
        name: 'Echipamente de Laborator',
        slug: 'echipamente-laborator',
        description: 'Instrumente și echipamente pentru laboratoare industriale',
        applications: ['Control calitate', 'Analize chimice', 'Testare materiale', 'Cercetare-dezvoltare']
      }
    ],
    accessories: ['Consumabile protecție (filtre, cartușe)', 'Detergenți industriali', 'Tuburi și accesorii dozare', 'Pompe transfer lichide', 'Containere și bidoane', 'Etichete și marcare', 'Kituri intervenție scurgeri'],
    services: ['Training siguranță și protecție muncă', 'Consultanță sisteme de dozare', 'Mentenanță echipamente curățenie', 'Livrări programate consumabile', 'Audit siguranță operațională']
  }
];

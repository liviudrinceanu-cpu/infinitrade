import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { config } from '@/lib/config';
import { FileCheck, Shield, Clock, Truck, Phone, CheckCircle, AlertCircle, ArrowRight, FileText, Award, Building2, Users, Package, Zap, Settings2, Thermometer, Wind, Droplets } from 'lucide-react';
import styles from './ghid-seap.module.css';

// CPV Codes for each product category
const cpvCodes = {
  pompe: [
    { code: '42120000-6', name: 'Pompe și compresoare' },
    { code: '42122000-0', name: 'Pompe' },
    { code: '42122100-1', name: 'Pompe pentru lichide' },
    { code: '42122130-0', name: 'Pompe de apă' },
    { code: '42122400-4', name: 'Pompe centrifuge și elevatoare de lichide' },
    { code: '42122500-5', name: 'Pompe de laborator și accesorii' },
    { code: '42124000-4', name: 'Piese pentru pompe' },
    { code: '42124100-5', name: 'Piese pentru pompe de lichide' },
    { code: '42131000-6', name: 'Robinete și vane pentru pompe' },
  ],
  robineti: [
    { code: '42130000-9', name: 'Robinete, vane și dispozitive similare' },
    { code: '42131000-6', name: 'Robinete și vane' },
    { code: '42131100-7', name: 'Vane definite prin funcție' },
    { code: '42131110-0', name: 'Vane pentru radiatoare de încălzire centrală' },
    { code: '42131120-3', name: 'Vane de blocare' },
    { code: '42131130-6', name: 'Regulatoare de temperatură' },
    { code: '42131140-9', name: 'Vane de reducere, de control, de reținere sau de siguranță' },
    { code: '42131141-6', name: 'Vane de reducere a presiunii' },
    { code: '42131142-3', name: 'Vane de control' },
    { code: '42131143-0', name: 'Vane de reținere' },
    { code: '42131144-7', name: 'Vane de control al procesului' },
    { code: '42131145-4', name: 'Vane de siguranță' },
    { code: '42131146-1', name: 'Clapete de reținere' },
    { code: '42131147-8', name: 'Vane de siguranță' },
    { code: '42131160-5', name: 'Hidranți' },
    { code: '42131200-8', name: 'Vane definite prin construcție' },
    { code: '42131210-1', name: 'Robinete cu bilă' },
    { code: '42131220-4', name: 'Robinete de închidere' },
    { code: '42131230-7', name: 'Robinete cu poartă' },
    { code: '42131240-0', name: 'Robinete cu clapetă' },
    { code: '42131250-3', name: 'Robinete cu sertar' },
    { code: '42131260-6', name: 'Robinete cu obturator' },
    { code: '42131270-9', name: 'Robinete fluture' },
    { code: '42131280-2', name: 'Robinete cu membrană' },
    { code: '42131290-5', name: 'Robinete glisante' },
    { code: '42131291-2', name: 'Vane tip cuțit' },
    { code: '42131300-9', name: 'Piese pentru robinete și vane' },
  ],
  motoare: [
    { code: '31100000-7', name: 'Motoare, generatoare și transformatoare electrice' },
    { code: '31110000-0', name: 'Motoare electrice' },
    { code: '31111000-7', name: 'Adaptoare' },
    { code: '31120000-3', name: 'Generatoare' },
    { code: '31121000-0', name: 'Grupuri electrogene' },
    { code: '31121100-1', name: 'Grupuri electrogene cu motor cu aprindere prin comprimare' },
    { code: '31121200-2', name: 'Grupuri electrogene cu motor cu aprindere prin scânteie' },
    { code: '31121300-3', name: 'Generatoare eoliene' },
    { code: '31121310-6', name: 'Mori de vânt' },
    { code: '31121320-9', name: 'Turbine eoliene' },
    { code: '31121330-2', name: 'Generatoare cu turbine eoliene' },
    { code: '31121331-9', name: 'Rotoare de turbine' },
    { code: '31121340-5', name: 'Fermă eoliană' },
    { code: '31122000-7', name: 'Unități de generatoare' },
    { code: '31122100-8', name: 'Pile de combustie' },
    { code: '31124000-1', name: 'Generatoare cu turbine cu abur' },
    { code: '31124100-2', name: 'Grupuri de turbogeneratoare' },
    { code: '31126000-5', name: 'Dinamuri' },
    { code: '31127000-2', name: 'Generator de urgență' },
    { code: '31128000-9', name: 'Turbogenerator' },
    { code: '31130000-6', name: 'Alternatoare' },
    { code: '31131000-3', name: 'Motoare monofazate' },
    { code: '31131100-4', name: 'Actuatoare' },
    { code: '31131200-5', name: 'Anode' },
    { code: '31132000-0', name: 'Motoare polifazate' },
    { code: '31160000-5', name: 'Piese pentru motoare electrice, generatoare și transformatoare' },
    { code: '31161000-2', name: 'Piese pentru motoare și generatoare electrice' },
    { code: '31161100-3', name: 'Sisteme de excitare' },
    { code: '31161200-4', name: 'Sisteme de răcire cu gaz' },
    { code: '31161300-5', name: 'Rotoare de generatoare' },
    { code: '31161400-6', name: 'Sisteme de apă primară' },
    { code: '31161500-7', name: 'Sisteme de ulei de etanșare' },
    { code: '31161600-8', name: 'Sisteme de răcire a apei statorului' },
    { code: '31161700-9', name: 'Piese pentru generatoare cu abur' },
    { code: '31161800-0', name: 'Piese pentru generatoare de gaz' },
    { code: '31161900-1', name: 'Sisteme de control al tensiunii' },
  ],
  schimbatoare: [
    { code: '42511100-2', name: 'Schimbătoare de căldură' },
    { code: '42511110-5', name: 'Pompe de căldură' },
    { code: '42511200-3', name: 'Unități de tratare a aerului' },
    { code: '42530000-0', name: 'Piese pentru echipamente de refrigerare și de congelare' },
    { code: '42531000-7', name: 'Piese pentru echipamente de refrigerare' },
  ],
  suflante: [
    { code: '42123000-7', name: 'Compresoare' },
    { code: '42123100-8', name: 'Compresoare de gaz' },
    { code: '42123200-9', name: 'Compresoare rotative' },
    { code: '42123300-0', name: 'Compresoare utilizate în echipamentele frigorifice' },
    { code: '42123400-1', name: 'Compresoare de aer' },
    { code: '42123410-4', name: 'Compresoare de aer montate' },
    { code: '42123500-2', name: 'Turbocompresoare' },
    { code: '42123600-3', name: 'Compresoare cu piston alternativ' },
    { code: '42123610-6', name: 'Dispozitive cu aer comprimat' },
    { code: '42123700-4', name: 'Compresoare centrifuge' },
    { code: '42123800-5', name: 'Compresoare pentru aviație civilă' },
    { code: '39717200-3', name: 'Aparate de ventilare' },
    { code: '42522000-6', name: 'Ventilatoare, altele decât ventilatoarele de masă' },
    { code: '39721320-1', name: 'Uscătoare cu aer' },
  ],
};

// Product categories with links
const productCategories = [
  {
    name: 'Pompe Industriale',
    slug: 'pompe-industriale',
    icon: Droplets,
    color: '#0990db',
    brands: ['Grundfos', 'Wilo', 'KSB', 'Lowara', 'Ebara', 'Sulzer'],
    types: ['Pompe centrifugale', 'Pompe submersibile', 'Pompe dozatoare', 'Pompe de vid', 'Grupuri de pompare'],
    cpvKey: 'pompe',
    applications: ['Stații tratare apă', 'Centrale termice', 'Industria chimică', 'Petrochimie'],
  },
  {
    name: 'Robineți Industriali',
    slug: 'robineti-industriali',
    icon: Settings2,
    color: '#ff2800',
    brands: ['ARI Armaturen', 'Spirax Sarco', 'Ebro', 'Danfoss', 'Leser'],
    types: ['Robineți cu bilă', 'Robineți fluture', 'Supape de siguranță', 'Oale de condens', 'Robineți de reglare'],
    cpvKey: 'robineti',
    applications: ['Instalații de abur', 'Industria alimentară', 'Petrochimie', 'HVAC industrial'],
  },
  {
    name: 'Motoare Electrice',
    slug: 'motoare-electrice',
    icon: Zap,
    color: '#37c67f',
    brands: ['Siemens', 'ABB', 'SEW Eurodrive', 'Bonfiglioli', 'WEG'],
    types: ['Motoare asincrone IE3/IE4', 'Motoare ATEX', 'Servomotoare', 'Motoreductoare', 'Convertizoare'],
    cpvKey: 'motoare',
    applications: ['Linii de producție', 'Transportoare', 'Compresoare', 'Ventilatoare industriale'],
  },
  {
    name: 'Schimbătoare de Căldură',
    slug: 'schimbatoare-caldura',
    icon: Thermometer,
    color: '#ff6b35',
    brands: ['Alfa Laval', 'Kelvion', 'SWEP', 'Danfoss', 'Funke'],
    types: ['Schimbătoare plăci brazate', 'Schimbătoare plăci demontabile', 'Schimbătoare tubulare', 'Răcitoare ulei'],
    cpvKey: 'schimbatoare',
    applications: ['Termoficare', 'Industria alimentară', 'HVAC', 'Recuperare energie'],
  },
  {
    name: 'Suflante și Ventilatoare',
    slug: 'suflante-ventilatoare',
    icon: Wind,
    color: '#063c69',
    brands: ['Becker', 'FPZ', 'Ziehl Abegg', 'Gardner Denver', 'Aerzen'],
    types: ['Suflante canal lateral', 'Suflante Roots', 'Ventilatoare centrifugale', 'Pompe de vid'],
    cpvKey: 'suflante',
    applications: ['Stații epurare', 'Transport pneumatic', 'Ventilație industrială', 'Ambalare vid'],
  },
];

// Documents we provide
const documentsProvided = [
  { name: 'Certificate de conformitate CE', description: 'Pentru toate produsele comercializate' },
  { name: 'Declarații de conformitate', description: 'Document obligatoriu pentru achiziții publice' },
  { name: 'Fișe tehnice complete', description: 'Specificații detaliate în format PDF' },
  { name: 'Certificate de garanție', description: 'Garanție producător 12-24 luni' },
  { name: 'Certificate de origine', description: 'Pentru produse din UE și non-UE' },
  { name: 'Documente DUAE completate', description: 'Asistență la completare' },
  { name: 'Cataloage și broșuri', description: 'Materiale originale producător' },
  { name: 'Desene tehnice și CAD', description: 'La cerere, pentru proiectare' },
];

// Why choose Infinitrade
const advantages = [
  {
    icon: Shield,
    title: 'Operator Economic Verificat SEAP',
    description: 'Înregistrați și activi în Sistemul Electronic de Achiziții Publice din 2009. Istoric de contracte publice îndeplinite.',
  },
  {
    icon: FileCheck,
    title: 'Documentație Completă',
    description: 'Toate documentele necesare pentru dosarul de achiziție: certificate CE, declarații conformitate, fișe tehnice, garanții.',
  },
  {
    icon: Clock,
    title: 'Răspuns Rapid la Solicitări',
    description: 'Oferte în aceeași zi pentru achiziții directe. Răspuns în maxim 24h pentru proceduri complexe.',
  },
  {
    icon: Package,
    title: 'Stocuri Disponibile',
    description: 'Produse din stoc pentru livrare imediată 24-72h. Urgențe rezolvate cu transport express.',
  },
  {
    icon: Award,
    title: 'Produse Originale Certificate',
    description: 'Distribuitor autorizat pentru 45+ branduri premium. Garanție producător și piese de schimb originale.',
  },
  {
    icon: Users,
    title: 'Suport Tehnic Specializat',
    description: 'Echipă de ingineri pentru consultanță gratuită, dimensionare și asistență la elaborarea caietelor de sarcini.',
  },
];

// Procurement types
const procurementTypes = [
  {
    name: 'Achiziție Directă',
    threshold: 'până la 135.060 lei (produse)',
    description: 'Cea mai simplă procedură. Căutare în catalogul electronic SEAP și comandă directă.',
    timeline: 'Ofertă în aceeași zi',
    tip: 'Suntem în catalogul SEAP cu produse disponibile pentru comandă imediată.',
  },
  {
    name: 'Procedură Simplificată',
    threshold: '135.060 - 594.264 lei',
    description: 'Procedură cu termen scurt, anunț în SEAP și evaluare oferte.',
    timeline: 'Răspuns în 24-48h',
    tip: 'Pregătim documentația completă conform cerințelor din fișa de date.',
  },
  {
    name: 'Licitație Deschisă',
    threshold: 'peste 594.264 lei',
    description: 'Procedură completă cu publicare în SEAP și termen de depunere oferte.',
    timeline: 'Ofertă în 5-7 zile',
    tip: 'Participăm cu oferte tehnice detaliate și documentație completă.',
  },
];

// FAQs specific to SEAP
const seapFaqs = [
  {
    q: 'Ce coduri CPV acoperă echipamentele industriale Infinitrade?',
    a: 'Acoperim coduri CPV din grupele principale: 42120000 (Pompe), 42130000 (Robinete/Vane), 31110000 (Motoare electrice), 42511100 (Schimbătoare căldură), 42123000 (Compresoare/Suflante). Lista completă a codurilor o găsiți mai jos pe această pagină.',
  },
  {
    q: 'Cum pot achiziționa produse prin achiziție directă?',
    a: 'Căutați în catalogul electronic SEAP după cod CPV sau denumire produs. Produsele noastre sunt publicate cu prețuri actualizate. Pentru stocuri și disponibilitate, ne puteți contacta direct pentru confirmare înainte de a plasa comanda.',
  },
  {
    q: 'Ce documente pregătiți pentru licitații publice?',
    a: 'Pregătim: certificate de conformitate CE, declarații de conformitate, fișe tehnice complete, certificate de garanție, documente de origine, DUAE completat. Toate documentele sunt în format electronic, semnate digital, gata de încărcat în SEAP.',
  },
  {
    q: 'Livrați pentru proiecte cu fonduri europene sau PNRR?',
    a: 'Da, avem experiență cu proiecte finanțate din fonduri structurale, POIM, PNRR și alte programe. Cunoaștem cerințele specifice de documentație și trasabilitate. Am livrat pentru modernizări stații epurare, centrale termice, fabrici.',
  },
  {
    q: 'Puteți ajuta la elaborarea caietului de sarcini?',
    a: 'Da, oferim consultanță tehnică gratuită pentru specificații corecte și realiste. Vă ajutăm să definiți parametrii tehnici astfel încât să primiți oferte comparabile și să evitați contestații.',
  },
  {
    q: 'Care este termenul de livrare pentru achiziții publice?',
    a: 'Produse din stoc: 24-72h. Produse la comandă: 2-6 săptămâni, în funcție de producător. Pentru urgențe sau termene strânse, găsim soluții alternative sau livrare express.',
  },
];

// Generate JSON-LD Schema
function generateSeapGuideSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${config.site.url}/ghid-achizitii-seap#webpage`,
        name: 'Ghid Complet Achiziții SEAP/SICAP - Echipamente Industriale',
        description: 'Ghid complet pentru achiziții publice SEAP/SICAP de echipamente industriale: pompe, robineți, motoare, schimbătoare căldură. Coduri CPV, documentație, proceduri.',
        url: `${config.site.url}/ghid-achizitii-seap`,
        isPartOf: { '@id': `${config.site.url}/#website` },
        breadcrumb: { '@id': `${config.site.url}/ghid-achizitii-seap#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${config.site.url}/ghid-achizitii-seap#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Acasă', item: config.site.url },
          { '@type': 'ListItem', position: 2, name: 'Resurse', item: `${config.site.url}/blog` },
          { '@type': 'ListItem', position: 3, name: 'Ghid Achiziții SEAP', item: `${config.site.url}/ghid-achizitii-seap` },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${config.site.url}/ghid-achizitii-seap#faq`,
        mainEntity: seapFaqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      {
        '@type': 'Organization',
        '@id': `${config.site.url}/#organization`,
        name: 'Infinitrade Romania',
        url: config.site.url,
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'registration',
          name: 'Operator Economic SEAP/SICAP',
          description: 'Înregistrat în Sistemul Electronic de Achiziții Publice pentru licitații și achiziții directe',
        },
      },
    ],
  };
}

export const metadata = {
  title: 'Ghid Achiziții SEAP | Coduri CPV',
  description: 'Ghid achiziții SEAP/SICAP echipamente industriale: coduri CPV, documentație licitații, proceduri achiziție directă. Furnizor verificat.',
  keywords: [
    // SEAP/SICAP primary
    'ghid SEAP',
    'ghid SICAP',
    'ghid achizitii publice',
    'achizitii publice echipamente industriale',
    'licitatie echipamente industriale',
    'furnizor SEAP',
    'furnizor SICAP',
    'furnizor SEAP echipamente industriale',
    'operator economic SEAP',
    // CPV codes
    'cod CPV pompe',
    'cod CPV 42120000',
    'cod CPV robinete',
    'cod CPV 42130000',
    'cod CPV motoare electrice',
    'cod CPV 31110000',
    'cod CPV schimbatoare caldura',
    'cod CPV 42511100',
    'coduri CPV echipamente industriale',
    // Product specific SEAP
    'pompe industriale SEAP',
    'pompe Grundfos SEAP',
    'pompe Wilo licitatie',
    'robineti industriali SEAP',
    'ARI Armaturen SEAP',
    'motoare electrice SEAP',
    'motoare Siemens licitatie',
    'schimbatoare caldura SEAP',
    'Alfa Laval SEAP',
    'suflante industriale SEAP',
    // Procedures
    'achizitie directa SEAP',
    'achizitie directa echipamente',
    'procedura simplificata SEAP',
    'licitatie deschisa',
    'catalog electronic SEAP',
    // Documents
    'documentatie licitatie',
    'certificate conformitate SEAP',
    'DUAE echipamente',
    'documente achizitii publice',
    // Funding
    'fonduri europene echipamente',
    'PNRR echipamente industriale',
    'proiecte europene pompe',
    // Industries
    'achizitii statii epurare',
    'licitatie centrale termice',
    'echipamente spitale SEAP',
    'echipamente primarii',
    // General
    'furnizor echipamente industriale Romania',
    'distribuitor autorizat SEAP',
  ],
  openGraph: {
    title: 'Ghid Complet Achiziții SEAP/SICAP | Echipamente Industriale | Infinitrade',
    description: 'Ghid detaliat pentru achiziții publice de echipamente industriale. Coduri CPV, proceduri, documentație. Furnizor verificat SEAP.',
    url: `${config.site.url}/ghid-achizitii-seap`,
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'article',
  },
  alternates: {
    canonical: `${config.site.url}/ghid-achizitii-seap`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GhidSeapPage() {
  const jsonLd = generateSeapGuideSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content" className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <Breadcrumbs
              items={[{ label: 'Resurse', href: '/blog' }]}
              currentPage="Ghid Achiziții SEAP"
              variant="light"
            />
            <div className={styles.heroContent}>
              <div className={styles.heroIcon}>
                <FileCheck size={48} />
              </div>
              <h1>Ghid Complet: Achiziții Publice SEAP/SICAP pentru Echipamente Industriale</h1>
              <p className={styles.heroDescription}>
                Tot ce trebuie să știți despre achizițiile publice de pompe, robineți, motoare și echipamente industriale.
                Coduri CPV, proceduri, documentație și de ce Infinitrade este alegerea sigură pentru instituții publice.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>15+</span>
                  <span className={styles.statLabel}>Ani în SEAP</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>100+</span>
                  <span className={styles.statLabel}>Contracte Publice</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>45+</span>
                  <span className={styles.statLabel}>Branduri Premium</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is SEAP Section */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <div className={styles.introGrid}>
              <div className={styles.introContent}>
                <h2>Ce este SEAP/SICAP?</h2>
                <p>
                  <strong>SEAP</strong> (Sistemul Electronic de Achiziții Publice) este platforma oficială din România
                  prin care autoritățile publice - primării, spitale, școli, companii de stat, instituții guvernamentale -
                  achiziționează bunuri, servicii și lucrări.
                </p>
                <p>
                  În 2020, SEAP a fost modernizat și redenumit <strong>SICAP</strong> (Sistemul Informatic Colaborativ
                  pentru mediu performant de desfășurare al Achizițiilor Publice), dar termenii sunt folosiți interschimbabil.
                </p>
                <p>
                  <strong>De ce contează pentru dumneavoastră:</strong> Dacă sunteți responsabil de achiziții într-o
                  instituție publică sau beneficiar de fonduri europene, toate achizițiile peste anumite praguri trebuie
                  realizate prin SEAP. Iar noi suntem aici să vă simplificăm procesul.
                </p>
              </div>
              <div className={styles.introHighlight}>
                <div className={styles.highlightBox}>
                  <Building2 size={32} />
                  <h3>Piața Achizițiilor Publice</h3>
                  <ul>
                    <li><strong>23.000+</strong> autorități contractante</li>
                    <li><strong>235.000+</strong> operatori economici înregistrați</li>
                    <li><strong>Zeci de miliarde lei</strong> anual în achiziții</li>
                  </ul>
                  <p className={styles.highlightNote}>
                    Infinitrade este operator economic verificat și activ în SEAP din 2009.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Infinitrade Section */}
        <section className={styles.advantagesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>De Ce Să Alegeți Infinitrade pentru Achiziții SEAP?</h2>
              <p>
                Am participat și câștigat zeci de licitații pentru instituții publice din toată România.
                Știm exact ce aveți nevoie pentru un dosar de achiziție complet și conform.
              </p>
            </div>
            <div className={styles.advantagesGrid}>
              {advantages.map((adv, index) => (
                <div key={index} className={styles.advantageCard}>
                  <div className={styles.advantageIcon}>
                    <adv.icon size={28} />
                  </div>
                  <h3>{adv.title}</h3>
                  <p>{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products & CPV Codes Section */}
        <section className={styles.productsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Echipamente Industriale Disponibile pentru Achiziții SEAP</h2>
              <p>
                Comercializăm echipamente industriale de la 45+ branduri premium mondiale.
                Mai jos găsiți categoriile principale cu codurile CPV corespunzătoare.
              </p>
            </div>

            {productCategories.map((category, catIndex) => (
              <div key={catIndex} className={styles.categoryBlock}>
                <div className={styles.categoryHeader} style={{ borderColor: category.color }}>
                  <div className={styles.categoryIcon} style={{ background: category.color }}>
                    <category.icon size={28} />
                  </div>
                  <div className={styles.categoryInfo}>
                    <h3>{category.name}</h3>
                    <p>Branduri: {category.brands.join(', ')}</p>
                  </div>
                  <Link href={`/${category.slug}`} className={styles.categoryLink}>
                    Vezi Produse <ArrowRight size={16} />
                  </Link>
                </div>

                <div className={styles.categoryContent}>
                  <div className={styles.cpvList}>
                    <h4>Coduri CPV pentru {category.name}</h4>
                    <div className={styles.cpvGrid}>
                      {cpvCodes[category.cpvKey].slice(0, 9).map((cpv, cpvIndex) => (
                        <div key={cpvIndex} className={styles.cpvItem}>
                          <span className={styles.cpvCode}>{cpv.code}</span>
                          <span className={styles.cpvName}>{cpv.name}</span>
                        </div>
                      ))}
                    </div>
                    {cpvCodes[category.cpvKey].length > 9 && (
                      <p className={styles.cpvMore}>
                        + {cpvCodes[category.cpvKey].length - 9} coduri CPV suplimentare pentru subcategorii
                      </p>
                    )}
                  </div>

                  <div className={styles.categoryDetails}>
                    <div className={styles.detailBlock}>
                      <h5>Tipuri de Produse</h5>
                      <ul>
                        {category.types.map((type, i) => (
                          <li key={i}><CheckCircle size={14} /> {type}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.detailBlock}>
                      <h5>Aplicații în Achiziții Publice</h5>
                      <ul>
                        {category.applications.map((app, i) => (
                          <li key={i}><CheckCircle size={14} /> {app}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Procurement Types Section */}
        <section className={styles.proceduresSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Tipuri de Proceduri de Achiziție</h2>
              <p>
                În funcție de valoarea estimată a achiziției, există mai multe tipuri de proceduri.
                Noi participăm la toate și vă oferim suport pentru fiecare.
              </p>
            </div>
            <div className={styles.proceduresGrid}>
              {procurementTypes.map((proc, index) => (
                <div key={index} className={styles.procedureCard}>
                  <h3>{proc.name}</h3>
                  <div className={styles.procedureThreshold}>{proc.threshold}</div>
                  <p>{proc.description}</p>
                  <div className={styles.procedureTimeline}>
                    <Clock size={16} />
                    <span>{proc.timeline}</span>
                  </div>
                  <div className={styles.procedureTip}>
                    <AlertCircle size={16} />
                    <span>{proc.tip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className={styles.documentsSection}>
          <div className={styles.container}>
            <div className={styles.documentsGrid}>
              <div className={styles.documentsContent}>
                <h2>Documentația pe Care o Pregătim pentru Dumneavoastră</h2>
                <p>
                  Știm că documentația este partea cea mai consumatoare de timp în achizițiile publice.
                  De aceea, pregătim tot ce aveți nevoie - în format electronic, semnate digital, gata de încărcat în SEAP.
                </p>
                <div className={styles.documentsList}>
                  {documentsProvided.map((doc, index) => (
                    <div key={index} className={styles.documentItem}>
                      <FileText size={20} />
                      <div>
                        <strong>{doc.name}</strong>
                        <span>{doc.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.documentsHighlight}>
                <div className={styles.documentsBox}>
                  <h3>Fonduri Europene & PNRR</h3>
                  <p>
                    Avem experiență specifică cu proiecte finanțate din fonduri structurale, POIM și PNRR.
                    Cunoaștem cerințele suplimentare de documentație și trasabilitate pentru aceste programe.
                  </p>
                  <ul>
                    <li><CheckCircle size={16} /> Modernizări stații epurare</li>
                    <li><CheckCircle size={16} /> Reabilitări centrale termice</li>
                    <li><CheckCircle size={16} /> Dotări spitale și școli</li>
                    <li><CheckCircle size={16} /> Investiții în eficiență energetică</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Întrebări Frecvente despre Achiziții SEAP</h2>
            </div>
            <div className={styles.faqGrid}>
              {seapFaqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2>Aveți o Achiziție SEAP în Pregătire?</h2>
              <p>
                Contactați-ne pentru oferte personalizate, consultanță tehnică gratuită și asistență
                la elaborarea caietelor de sarcini. Răspundem în maxim 24h.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  <Phone size={18} />
                  Solicită Ofertă SEAP
                </Link>
                <Link href="/certificari" className={styles.ctaSecondary}>
                  Vezi Certificări
                </Link>
              </div>
              <div className={styles.ctaContact}>
                <p>
                  <strong>Email:</strong> vanzari@infinitrade-romania.ro |
                  <strong> Telefon:</strong> 0371 232 404
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2>Resurse Conexe</h2>
            <div className={styles.relatedGrid}>
              <Link href="/faq" className={styles.relatedCard}>
                <h3>Întrebări Frecvente</h3>
                <p>Răspunsuri la cele mai comune întrebări despre echipamente și achiziții</p>
                <ArrowRight size={16} />
              </Link>
              <Link href="/certificari" className={styles.relatedCard}>
                <h3>Certificări și Autorizări</h3>
                <p>ISO 9001, distribuitor autorizat, înregistrare SEAP</p>
                <ArrowRight size={16} />
              </Link>
              <Link href="/blog" className={styles.relatedCard}>
                <h3>Blog Tehnic</h3>
                <p>Articole despre selecția și mentenanța echipamentelor industriale</p>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

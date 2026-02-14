import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { config } from '@/lib/config';
import { categories } from '@/data/products';
import { safeJsonLd } from '@/lib/utils';
import styles from './ghid-comparativ.module.css';

export const metadata = {
  title: 'Ghid Comparativ Branduri Industriale | Infinitrade',
  description: 'Comparații între branduri: pompe Grundfos vs Wilo vs KSB, motoare Siemens vs ABB, automatizări, senzori Endress+Hauser vs WIKA vs Emerson.',
  keywords: [
    'comparatie pompe industriale',
    'Grundfos vs Wilo',
    'Grundfos vs KSB',
    'Siemens vs ABB motoare',
    'comparatie motoare electrice',
    'ARI Armaturen vs Spirax Sarco',
    'comparatie robineti industriali',
    'ghid selectie echipamente',
    'care pompa e mai buna',
    'cel mai bun brand pompe',
  ],
  openGraph: {
    title: 'Ghid Comparativ Echipamente Industriale | Infinitrade Romania',
    description: 'Comparații obiective între branduri: Grundfos vs Wilo, Siemens vs ABB. Ghid practic pentru achiziții informate.',
    url: `${config.site.url}/ghid-comparativ`,
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: `${config.site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Ghid Comparativ Echipamente Industriale - Infinitrade Romania',
      }
    ],
  },
  alternates: {
    canonical: `${config.site.url}/ghid-comparativ`,
  },
};

// Map old brand slugs to new simple slugs
function getBrandSlug(oldSlug) {
  const mapping = {
    'pompe-industriale-grundfos': 'grundfos',
    'pompe-industriale-wilo': 'wilo',
    'pompe-industriale-ksb': 'ksb',
    'motoare-electrice-industriale-siemens': 'siemens',
    'motoare-electrice-industriale-abb': 'abb',
    'motoare-electrice-industriale-sew': 'sew',
    'robineti-industriali-ari-armaturen': 'ari-armaturen',
    'robineti-industriali-spirax-sarco': 'spirax-sarco',
    'robineti-industriali-danfoss': 'danfoss',
    'schimbatoare-caldura-industriale-alfa-laval': 'alfa-laval',
    'schimbatoare-caldura-industriale-kelvion': 'kelvion',
    'schimbatoare-caldura-industriale-swep': 'swep',
    'automatizari-industriale-siemens': 'siemens',
    'automatizari-industriale-abb': 'abb',
    'automatizari-industriale-schneider': 'schneider-electric',
    'senzori-instrumentatie-endress-hauser': 'endress-hauser',
    'senzori-instrumentatie-wika': 'wika',
    'senzori-instrumentatie-emerson': 'emerson',
  };
  return mapping[oldSlug] || oldSlug;
}

// Comparison data for major categories
const comparisons = [
  {
    id: 'pompe-centrifugale',
    category: 'Pompe Industriale',
    title: 'Comparație Pompe Centrifugale: Grundfos vs Wilo vs KSB',
    slug: 'pompe-centrifugale',
    brands: [
      {
        name: 'Grundfos',
        slug: 'pompe-industriale-grundfos',
        country: 'Danemarca',
        founded: 1945,
        strengths: ['Eficiență energetică lider', 'Tehnologie IE5', 'Monitorizare IoT', 'Durabilitate excepțională'],
        weaknesses: ['Preț inițial cu 20-30% mai mare', 'Complexitate configurare IoT', 'Costuri ridicate piese de schimb', 'Necesită training specializat pentru modele avansate'],
        bestFor: ['Tratare apă', 'HVAC', 'Industrie alimentară', 'Aplicații cu debit variabil'],
        priceRange: '€€€',
        warranty: '2-5 ani',
        rating: 4.9,
      },
      {
        name: 'Wilo',
        slug: 'pompe-industriale-wilo',
        country: 'Germania',
        founded: 1872,
        strengths: ['Raport calitate-preț excelent', 'Gama largă', 'Service rapid', 'Ușor de întreținut'],
        weaknesses: ['Gama mai restrânsă pe pompe de proces', 'Suport tehnic local mai limitat față de Grundfos', 'Mai puțin prezent în aplicații chimice aggressive', 'Documentație tehnică mai puțin detaliată'],
        bestFor: ['Clădiri comerciale', 'Termoficare', 'Industrie generală', 'Drenaj'],
        priceRange: '€€',
        warranty: '2-3 ani',
        rating: 4.7,
      },
      {
        name: 'KSB',
        slug: 'pompe-industriale-ksb',
        country: 'Germania',
        founded: 1871,
        strengths: ['Robust pentru aplicații grele', 'Experiență 150+ ani', 'Customizare avansată', 'Materiale speciale'],
        weaknesses: ['Termene de livrare mai lungi (8-12 săptămâni)', 'Prețuri premium segment', 'Configurare mai complexă', 'Greu de justificat pentru aplicații standard'],
        bestFor: ['Petrochimie', 'Energie', 'Minerit', 'Aplicații ATEX'],
        priceRange: '€€€',
        warranty: '2-5 ani',
        rating: 4.8,
      },
    ],
    conclusion: 'Pentru eficiență energetică maximă și aplicații cu debit variabil, Grundfos este alegerea optimă. Pentru buget moderat cu calitate germană, Wilo oferă cel mai bun raport. Pentru aplicații grele în petrochimie sau minerit, KSB excelează prin robustețe.',
  },
  {
    id: 'motoare-electrice',
    category: 'Motoare Electrice',
    title: 'Comparație Motoare Industriale: Siemens vs ABB vs SEW',
    slug: 'motoare-electrice',
    brands: [
      {
        name: 'Siemens',
        slug: 'motoare-electrice-industriale-siemens',
        country: 'Germania',
        founded: 1847,
        strengths: ['Integrare completă cu automatizări', 'Gama IE4/IE5', 'Suport global', 'Digitalizare avansată'],
        weaknesses: ['Preț ridicat pentru aplicații standard', 'Complexitate software și parametrizare', 'Licențiere costisitoare pentru funcții avansate', 'Necesită formare specializată pentru întreținere'],
        bestFor: ['Linii de producție automatizate', 'Industrie 4.0', 'Aplicații de precizie', 'Sisteme integrate'],
        priceRange: '€€€',
        warranty: '2-3 ani',
        rating: 4.9,
      },
      {
        name: 'ABB',
        slug: 'motoare-electrice-industriale-abb',
        country: 'Elveția',
        founded: 1988,
        strengths: ['Motoare sincrone reluctanță', 'Eficiență IE5', 'Convertizoare VFD', 'Fiabilitate dovedită'],
        weaknesses: ['Integrare dificilă cu sisteme non-ABB', 'Documentație complexă pentru modele speciale', 'Cost ridicat service pentru reparații complexe', 'Termene mai lungi pentru configurații personalizate'],
        bestFor: ['Industria grea', 'Compresoare', 'Pompe mari', 'Aplicații continue 24/7'],
        priceRange: '€€€',
        warranty: '2-3 ani',
        rating: 4.8,
      },
      {
        name: 'SEW Eurodrive',
        slug: 'motoare-electrice-industriale-sew',
        country: 'Germania',
        founded: 1931,
        strengths: ['Sisteme motor-reductor integrate', 'Modularitate', 'Service excelent', 'Soluții complete'],
        weaknesses: ['Gama limitată la acționări și transportoare', 'Disponibilitate piese mai redusă local', 'Preț premium pentru soluții integrate', 'Mai puțin potrivit pentru motoare standalone mari'],
        bestFor: ['Transportoare', 'Logistică', 'Packaging', 'Automatizări modulare'],
        priceRange: '€€',
        warranty: '2-3 ani',
        rating: 4.7,
      },
    ],
    conclusion: 'Siemens domină în automatizări integrate și Industrie 4.0. ABB excelează în aplicații de mare putere și funcționare continuă. SEW Eurodrive este lider pentru sisteme motor-reductor în logistică și packaging.',
  },
  {
    id: 'robineti-industriali',
    category: 'Robineți Industriali',
    title: 'Comparație Robineți Industriali: ARI vs Spirax Sarco vs Danfoss',
    slug: 'robineti-industriali',
    brands: [
      {
        name: 'ARI Armaturen',
        slug: 'robineti-industriali-ari-armaturen',
        country: 'Germania',
        founded: 1950,
        strengths: ['Specializare în abur', 'Calitate germană', 'Gama completă', 'Customizare'],
        weaknesses: ['Preț ridicat față de alternative', 'Termene de livrare lungi pentru configurații speciale', 'Necesită cunoștințe avansate pentru montaj corect', 'Piese de schimb costisitoare'],
        bestFor: ['Instalații de abur', 'Industrie chimică', 'Rafinierii', 'Centrale termice'],
        priceRange: '€€€',
        warranty: '2 ani',
        rating: 4.8,
      },
      {
        name: 'Spirax Sarco',
        slug: 'robineti-industriali-spirax-sarco',
        country: 'UK',
        founded: 1888,
        strengths: ['Lider global în abur', 'Soluții complete', 'Training și consultanță', 'Monitorizare'],
        weaknesses: ['Cele mai ridicate prețuri din industrie', 'Timpi de răspuns mai lungi pentru suport tehnic', 'Complexitate ridicată pentru aplicații simple', 'Lock-in în ecosistem proprietar'],
        bestFor: ['Sisteme abur complexe', 'Industria alimentară', 'Farmaceutică', 'Optimizare energie'],
        priceRange: '€€€',
        warranty: '2 ani',
        rating: 4.9,
      },
      {
        name: 'Danfoss',
        slug: 'robineti-industriali-danfoss',
        country: 'Danemarca',
        founded: 1933,
        strengths: ['Inovație în reglare', 'HVAC și refrigerare', 'Digitalizare', 'Eficiență energetică'],
        weaknesses: ['Mai puțin potrivit pentru abur înaltă presiune', 'Gama limitată pentru aplicații chimice', 'Suport local mai slab decât concurența', 'Documentație tehnică uneori incompletă'],
        bestFor: ['HVAC industrial', 'Refrigerare', 'Reglare temperatură', 'Sisteme hidraulice'],
        priceRange: '€€',
        warranty: '2 ani',
        rating: 4.7,
      },
    ],
    conclusion: 'Pentru instalații complexe de abur, Spirax Sarco oferă soluții complete cu suport tehnic excelent. ARI Armaturen este alegerea pentru aplicații industriale grele în chimie și petrochimie. Danfoss domină în HVAC și sisteme de refrigerare.',
  },
  {
    id: 'schimbatoare-caldura',
    category: 'Schimbătoare de Căldură',
    title: 'Comparație Schimbătoare Căldură: Alfa Laval vs Kelvion vs SWEP',
    slug: 'schimbatoare-caldura',
    brands: [
      {
        name: 'Alfa Laval',
        slug: 'schimbatoare-caldura-industriale-alfa-laval',
        country: 'Suedia',
        founded: 1883,
        strengths: ['Tehnologie lider', 'Eficiență maximă', 'Inovație continuă', 'Gama vastă'],
        weaknesses: ['Cel mai scump brand din piață', 'Garnituri OEM foarte costisitoare', 'Timpi de livrare lungi pentru configurații speciale', 'Lock-in în gamă proprietară'],
        bestFor: ['Industria alimentară', 'Marine', 'Energie', 'Farmaceutică'],
        priceRange: '€€€',
        warranty: '2-3 ani',
        rating: 4.9,
      },
      {
        name: 'Kelvion',
        slug: 'schimbatoare-caldura-industriale-kelvion',
        country: 'Germania',
        founded: 1920,
        strengths: ['Raport calitate-preț', 'HVAC industrial', 'Răcire industrială', 'Flexibilitate'],
        weaknesses: ['Documentație tehnică mai puțin detaliată', 'Disponibilitate piese în România', 'Termene comanda din Germania (5-7 zile)', 'Suport tehnic mai slab față de Alfa Laval'],
        bestFor: ['HVAC', 'Răcire industrială', 'Data centers', 'Aplicații generale'],
        priceRange: '€€',
        warranty: '2 ani',
        rating: 4.7,
      },
      {
        name: 'SWEP',
        slug: 'schimbatoare-caldura-industriale-swep',
        country: 'Suedia',
        founded: 1983,
        strengths: ['Schimbătoare brazate compacte', 'Eficiență termică', 'Design compact', 'Durabilitate'],
        weaknesses: ['Nu se pot demonta pentru curățare manuală', 'Limitări pentru aplicații cu particule', 'Gama mai îngustă față de Alfa Laval', 'Dificil de reparat în caz de defecțiune'],
        bestFor: ['HVAC', 'Refrigerare', 'Pompe de căldură', 'Aplicații OEM'],
        priceRange: '€€',
        warranty: '2 ani',
        rating: 4.6,
      },
    ],
    conclusion: 'Alfa Laval este standardul de aur pentru eficiență și inovație. Kelvion oferă un raport calitate-preț excelent pentru aplicații HVAC și răcire industrială. SWEP excelează în schimbătoare brazate compacte pentru sisteme de încălzire și răcire.',
  },
  {
    id: 'automatizari-industriale',
    category: 'Automatizări Industriale',
    title: 'Comparație Automatizări: Siemens vs ABB vs Schneider Electric',
    slug: 'automatizari-industriale',
    brands: [
      {
        name: 'Siemens',
        slug: 'automatizari-industriale-siemens',
        country: 'Germania',
        founded: 1847,
        strengths: ['Ecosistem TIA Portal complet', 'PLC-uri S7-1500 performanță top', 'Integrare nativă cu acționări', 'Suport și training excelent în România'],
        weaknesses: ['Licențiere software costisitoare', 'Curbă de învățare abruptă pentru TIA Portal', 'Lock-in în ecosistem proprietar', 'Prețuri cu 20-30% peste concurență pentru configurații similare'],
        bestFor: ['Linii de producție complexe', 'Industrie 4.0 / digitalizare', 'Aplicații cu cerințe de precizie', 'Integrare cu motoare și VFD Siemens'],
        priceRange: '€€€',
        warranty: '2 ani',
        rating: 4.9,
      },
      {
        name: 'ABB',
        slug: 'automatizari-industriale-abb',
        country: 'Elveția',
        founded: 1988,
        strengths: ['Systeme DCS Ability™ pentru procese continue', 'Convertizoare ACS lider mondial', 'Roboți industriali integrați', 'Soluții complete de la senzor la cloud'],
        weaknesses: ['Piață mai mică de integratori locali în România', 'Documentație uneori doar în engleză', 'Cost ridicat pentru proiecte mici', 'Timp de răspuns mai lung pentru suport tehnic local'],
        bestFor: ['Industrie de proces (chimie, petrochimie)', 'Aplicații cu roboți industriali', 'Centrale electrice și energie', 'Sisteme de mari dimensiuni 24/7'],
        priceRange: '€€€',
        warranty: '2 ani',
        rating: 4.8,
      },
      {
        name: 'Schneider Electric',
        slug: 'automatizari-industriale-schneider',
        country: 'Franța',
        founded: 1836,
        strengths: ['Raport calitate-preț excelent', 'Gamă completă de la tablou la SCADA', 'EcoStruxure platformă IoT', 'Rețea vastă de distribuție în România'],
        weaknesses: ['PLC-uri Modicon mai puțin performante decât S7-1500', 'Ecosistem mai fragmentat între game', 'Mai puțin potrivit pentru aplicații de mare viteză', 'Software de programare mai puțin intuitiv'],
        bestFor: ['Clădiri inteligente și BMS', 'Distribuție electrică și energie', 'Aplicații HVAC industriale', 'Proiecte cu buget moderat'],
        priceRange: '€€',
        warranty: '2 ani',
        rating: 4.7,
      },
    ],
    conclusion: 'Siemens domină în automatizări de producție discretă și Industry 4.0. ABB excelează în proces continuu și aplicații energetice. Schneider Electric oferă cel mai bun raport calitate-preț pentru BMS, distribuție electrică și proiecte mid-range.',
  },
  {
    id: 'senzori-presiune',
    category: 'Senzori și Instrumentație',
    title: 'Comparație Senzori Presiune: Endress+Hauser vs WIKA vs Emerson',
    slug: 'senzori-presiune',
    brands: [
      {
        name: 'Endress+Hauser',
        slug: 'senzori-instrumentatie-endress-hauser',
        country: 'Elveția',
        founded: 1953,
        strengths: ['Precizie 0.025% best-in-class', 'Diagnosticare inteligentă Heartbeat', 'Gamă completă all-in-one (P, T, L, F)', 'Suport tehnic și calibrare în România'],
        weaknesses: ['Cel mai scump brand din segment', 'Configurare complexă pentru modele avansate', 'Termene de livrare lungi pentru configurații speciale', 'Necesită software proprietar W@M pentru management'],
        bestFor: ['Petrochimie și rafinării', 'Farmaceutic și alimentar (3A, EHEDG)', 'Aplicații cu cerințe de precizie critică', 'Instalații cu protocol HART/Profibus'],
        priceRange: '€€€',
        warranty: '3 ani',
        rating: 4.9,
      },
      {
        name: 'WIKA',
        slug: 'senzori-instrumentatie-wika',
        country: 'Germania',
        founded: 1946,
        strengths: ['Raport calitate-preț imbatabil', 'Livrare rapidă din stoc', 'Gamă vastă inclusiv manometre clasice', 'Opțiuni customizare la preț rezonabil'],
        weaknesses: ['Precizie standard 0.1% (inferioară E+H)', 'Diagnosticare limitată pe modele entry', 'Mai puțin prezent în pharma/food', 'Interfețe digitale mai puțin avansate'],
        bestFor: ['Aplicații industriale generale', 'HVAC și utilități', 'Buget moderat cu calitate germană', 'Înlocuire rapidă manometre și termometre'],
        priceRange: '€€',
        warranty: '2 ani',
        rating: 4.7,
      },
      {
        name: 'Emerson (Rosemount)',
        slug: 'senzori-instrumentatie-emerson',
        country: 'SUA',
        founded: 1890,
        strengths: ['Rosemount 3051 - referință mondială presiune', 'Tehnologie transmițător coplanar', 'Diagnosticare avansată PlantWeb', 'Rezistență în medii dure (offshore, desert)'],
        weaknesses: ['Preț ridicat, similar Endress+Hauser', 'Suport local mai limitat în România', 'Termene lungi pentru piese de schimb', 'Ecosistem DeltaV închis și costisitor'],
        bestFor: ['Oil & Gas și offshore', 'Centrale electrice', 'Aplicații în condiții extreme', 'Instalații cu DCS Emerson DeltaV'],
        priceRange: '€€€',
        warranty: '2-3 ani',
        rating: 4.8,
      },
    ],
    conclusion: 'Endress+Hauser oferă cea mai mare precizie și cel mai bun suport local pentru aplicații critice. WIKA este alegerea optimă pentru raport calitate-preț în aplicații standard. Emerson (Rosemount) excelează în oil & gas și condiții extreme.',
  },
];

// Rating stars component
function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className={styles.rating}>
      <span className={styles.ratingValue}>{rating}</span>
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < fullStars ? styles.starFilled : (i === fullStars && hasHalf ? styles.starHalf : styles.starEmpty)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

export default function GhidComparativPage() {
  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${config.site.url}/ghid-comparativ`,
        name: 'Ghid Comparativ Echipamente Industriale',
        description: 'Comparații detaliate între branduri de echipamente industriale',
        url: `${config.site.url}/ghid-comparativ`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Acasă', item: config.site.url },
          { '@type': 'ListItem', position: 2, name: 'Ghid Comparativ', item: `${config.site.url}/ghid-comparativ` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Care este mai bună: Grundfos sau Wilo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Grundfos excelează în eficiență energetică și aplicații cu debit variabil. Wilo oferă un raport calitate-preț excelent pentru aplicații comerciale și industriale generale. Alegerea depinde de cerințele specifice ale aplicației.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ce motor electric este mai fiabil: Siemens sau ABB?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ambele branduri au fiabilitate excepțională. Siemens excelează în integrare cu automatizări, în timp ce ABB este preferat pentru aplicații de mare putere și funcționare continuă 24/7.',
            },
          },
          {
            '@type': 'Question',
            name: 'Care sunt cele mai bune branduri de robineți pentru abur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Spirax Sarco și ARI Armaturen sunt lideri în domeniul armăturilor pentru abur. Spirax Sarco oferă soluții complete, în timp ce ARI Armaturen excelează în aplicații industriale grele.',
            },
          },
          {
            '@type': 'Question',
            name: 'Care este cel mai bun sistem de automatizare industrială?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Siemens domină în producție discretă cu TIA Portal. ABB excelează în procese continue cu DCS Ability. Schneider Electric oferă cel mai bun raport calitate-preț pentru BMS și proiecte mid-range.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ce senzori de presiune recomandați?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Endress+Hauser pentru precizie maximă, WIKA pentru raport calitate-preț, Emerson Rosemount pentru condiții extreme. Alegerea depinde de aplicație, buget și cerințe de precizie.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <Breadcrumbs items={[]} currentPage="Ghid Comparativ" variant="light" />
            <h1>Ghid Comparativ Echipamente Industriale</h1>
            <p className={styles.heroSubtitle}>
              Comparații obiective între cele mai importante branduri.
              Alege echipamentul potrivit pentru aplicația ta.
            </p>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className={styles.quickNav}>
          <div className={styles.container}>
            <h2>Alege Categoria</h2>
            <div className={styles.quickNavGrid}>
              {comparisons.map((comp) => (
                <a key={comp.id} href={`#${comp.id}`} className={styles.quickNavCard}>
                  <span className={styles.quickNavCategory}>{comp.category}</span>
                  <span className={styles.quickNavTitle}>{comp.brands.map(b => b.name).join(' vs ')}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Comparisons */}
        {comparisons.map((comparison) => (
          <section key={comparison.id} id={comparison.id} className={styles.comparisonSection}>
            <div className={styles.container}>
              <div className={styles.sectionHeader}>
                <span className={styles.categoryBadge}>{comparison.category}</span>
                <h2>{comparison.title}</h2>
              </div>

              <div className={styles.comparisonGrid}>
                {comparison.brands.map((brand, index) => (
                  <div key={brand.name} className={`${styles.brandCard} ${index === 0 ? styles.featured : ''}`}>
                    {index === 0 && <span className={styles.topPick}>Top Pick</span>}

                    <div className={styles.brandHeader}>
                      <h3>{brand.name}</h3>
                      <span className={styles.country}>Fondat {brand.founded}</span>
                    </div>

                    <StarRating rating={brand.rating} />

                    <div className={styles.priceRange}>
                      <span className={styles.priceLabel}>Nivel preț:</span>
                      <span className={styles.priceValue}>{brand.priceRange}</span>
                    </div>

                    <div className={styles.strengths}>
                      <h4>Puncte Forte:</h4>
                      <ul>
                        {brand.strengths.map((strength) => (
                          <li key={strength}><span style={{color: '#10b981'}}>✓</span> {strength}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.weaknesses}>
                      <h4>Puncte Slabe:</h4>
                      <ul>
                        {brand.weaknesses.map((weakness) => (
                          <li key={weakness}><span style={{color: '#ef4444'}}>✗</span> {weakness}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.bestFor}>
                      <h4>Recomandat Pentru:</h4>
                      <div className={styles.tags}>
                        {brand.bestFor.map((use) => (
                          <span key={use} className={styles.tag}>{use}</span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.warranty}>
                      <span>Garanție: {brand.warranty}</span>
                    </div>

                    <Link href={`/brand/${getBrandSlug(brand.slug)}`} className={styles.brandLink}>
                      Vezi Produse {brand.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div className={styles.conclusion}>
                <h4>Concluzia Noastră:</h4>
                <p>{comparison.conclusion}</p>
              </div>
            </div>
          </section>
        ))}

        {/* All Categories */}
        <section className={styles.allCategories}>
          <div className={styles.container}>
            <h2>Explorează Toate Categoriile</h2>
            <div className={styles.categoriesGrid}>
              {categories.map((category) => (
                <Link key={category.id} href={`/${category.slug}`} className={styles.categoryCard}>
                  <h3>{category.name}</h3>
                  <span>{category.stats.brands} branduri</span>
                  <span className={styles.arrow}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Expert Quote - GEO-02 Signal */}
        <section style={{padding: '3rem 0', background: '#f9fafb'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem'}}>
            <div style={{background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb'}}>
              <blockquote style={{fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', marginBottom: '1rem', lineHeight: '1.7'}}>
                „Comparația obiectivă între branduri este esențială înainte de orice achiziție industrială. După 15 ani de experiență cu Grundfos, Wilo și KSB, pot spune că fiecare brand excelează în aplicații diferite. Grundfos domină în eficiență energetică, Wilo în raport calitate-preț, iar KSB în aplicații de înaltă presiune. Nu există un brand universal mai bun — totul depinde de aplicația specifică."
              </blockquote>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <cite style={{fontWeight: '600', color: '#1f2937', fontStyle: 'normal'}}>L.D.</cite>
                <span style={{color: '#9ca3af'}}>·</span>
                <span style={{color: '#6b7280', fontSize: '0.875rem'}}>Director General</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Nu Ești Sigur Care Brand Este Potrivit?</h2>
            <p>Echipa noastră tehnică te poate ajuta să alegi echipamentul optim pentru aplicația ta specifică.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Solicită Consultanță Gratuită
              </Link>
              <Link href="/faq" className={styles.ctaSecondary}>
                Întrebări Frecvente
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

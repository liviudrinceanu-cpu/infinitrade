import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { categories } from '@/data/products';
import styles from './ghid-comparativ.module.css';

export const metadata = {
  title: 'Ghid Comparativ Echipamente Industriale | Grundfos vs Wilo vs KSB | Infinitrade',
  description: 'Comparații detaliate între branduri de echipamente industriale: pompe Grundfos vs Wilo vs KSB, motoare Siemens vs ABB vs SEW, robineți ARI vs Spirax Sarco. Alege corect!',
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
    url: 'https://infinitrade.ro/ghid-comparativ',
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
  },
  alternates: {
    canonical: 'https://infinitrade.ro/ghid-comparativ',
  },
};

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
    title: 'Comparație Schimbătoare Căldură: Alfa Laval vs GEA vs Kelvion',
    slug: 'schimbatoare-caldura',
    brands: [
      {
        name: 'Alfa Laval',
        slug: 'schimbatoare-caldura-alfa-laval',
        country: 'Suedia',
        founded: 1883,
        strengths: ['Tehnologie lider', 'Eficiență maximă', 'Inovație continuă', 'Gama vastă'],
        bestFor: ['Industria alimentară', 'Marine', 'Energie', 'Farmaceutică'],
        priceRange: '€€€',
        warranty: '2-3 ani',
        rating: 4.9,
      },
      {
        name: 'GEA',
        slug: 'schimbatoare-caldura-gea',
        country: 'Germania',
        founded: 1881,
        strengths: ['Soluții complete proces', 'Industrie alimentară', 'Customizare', 'Service global'],
        bestFor: ['Lactate', 'Băuturi', 'Chimie', 'Procese alimentare'],
        priceRange: '€€€',
        warranty: '2 ani',
        rating: 4.8,
      },
      {
        name: 'Kelvion',
        slug: 'schimbatoare-caldura-kelvion',
        country: 'Germania',
        founded: 1920,
        strengths: ['Raport calitate-preț', 'HVAC industrial', 'Răcire industrială', 'Flexibilitate'],
        bestFor: ['HVAC', 'Răcire industrială', 'Data centers', 'Aplicații generale'],
        priceRange: '€€',
        warranty: '2 ani',
        rating: 4.6,
      },
    ],
    conclusion: 'Alfa Laval este standardul de aur pentru eficiență și inovație. GEA excelează în industria alimentară cu soluții integrate. Kelvion oferă un raport calitate-preț excelent pentru aplicații HVAC și răcire industrială.',
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
        '@id': 'https://infinitrade.ro/ghid-comparativ',
        name: 'Ghid Comparativ Echipamente Industriale',
        description: 'Comparații detaliate între branduri de echipamente industriale',
        url: 'https://infinitrade.ro/ghid-comparativ',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Acasă', item: 'https://infinitrade.ro' },
          { '@type': 'ListItem', position: 2, name: 'Ghid Comparativ', item: 'https://infinitrade.ro/ghid-comparativ' },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <Breadcrumbs items={[]} currentPage="Ghid Comparativ" />
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
                      <span className={styles.country}>{brand.country} • Fondat {brand.founded}</span>
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
                          <li key={strength}>{strength}</li>
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

                    <Link href={`/brand/${brand.slug}`} className={styles.brandLink}>
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

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { config } from '@/lib/config';
import { allCategoriesUnified } from '@/data/allBrandsIndex';
import { CATEGORY_LEAD_TIME } from '@/data/leadTimes';
import { safeJsonLd } from '@/lib/utils';
import styles from './ghid-comparativ.module.css';

export const metadata = {
  title: 'Ghid Comparativ Branduri Industriale',
  description: 'Ce game au Grundfos, Wilo și KSB, Siemens, ABB și SEW, ARI și Spirax Sarco, Endress+Hauser, WIKA și Emerson și cum alegeți după aplicație, nu după brand.',
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
    'comparatie branduri pompe industriale',
  ],
  openGraph: {
    title: 'Ghid Comparativ Echipamente Industriale | Infinitrade Romania',
    description: 'Ce game oferă Grundfos, Wilo și KSB, Siemens, ABB și SEW, Endress+Hauser, WIKA și Emerson și cum alegeți după aplicație, nu după brand.',
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

// v20 (D-2026-09-27, audit R2): this page used to show star ratings
// (4.6–4.9), "Top Pick" badges, price levels, warranty periods and lists of
// "weaknesses" for third-party manufacturers (e.g. "prețuri cu 20-30% peste
// concurență", "suport local mai slab"). None of it had a source, and
// unsourced negative claims about named manufacturers are a legal and
// E-E-A-T risk. The page now lists representative product families (names
// published by each manufacturer) and typical applications, and explains how
// to choose by application. The URL and title stay unchanged.

const comparisons = [
  {
    id: 'pompe-centrifugale',
    category: 'Pompe Industriale',
    categorySlug: 'pompe-industriale',
    title: 'Pompe centrifugale: Grundfos, Wilo și KSB',
    brands: [
      {
        name: 'Grundfos',
        slug: 'grundfos',
        country: 'Danemarca',
        families: ['Pompe multietajate verticale CR', 'Pompe de circulație MAGNA3', 'Pompe submersibile SP pentru puțuri', 'Pompe cu aspirație axială NB/NK'],
        bestFor: ['Alimentare cu apă', 'HVAC', 'Industrie alimentară', 'Ridicarea presiunii'],
      },
      {
        name: 'Wilo',
        slug: 'wilo',
        country: 'Germania',
        families: ['Pompe de circulație Stratos MAXO', 'Pompe multietajate Helix', 'Pompe cu aspirație axială Atmos GIGA-N', 'Stații de ridicare a presiunii'],
        bestFor: ['Clădiri și HVAC', 'Alimentare cu apă', 'Apă uzată', 'Industrie generală'],
      },
      {
        name: 'KSB',
        slug: 'ksb',
        country: 'Germania',
        families: ['Pompe standardizate Etanorm', 'Pompe de proces MegaCPK', 'Pompe submersibile Amarex pentru ape uzate', 'Pompe multietajate Movitec'],
        bestFor: ['Industrie de proces', 'Energie', 'Apă uzată', 'Industrie chimică'],
      },
    ],
    howToChoose: 'Pentru pompe cu aspirație axială după EN 733 există echivalente directe la toți trei producătorii (Grundfos NB/NK, Wilo Atmos GIGA-N, KSB Etanorm), deci decid punctul de funcționare, materialele și etanșarea. La înlocuirea unei pompe existente contează dimensiunile de montaj și flanșele; trimiteți plăcuța vechii pompe și verificăm varianta compatibilă.',
  },
  {
    id: 'motoare-electrice',
    category: 'Motoare Electrice',
    categorySlug: 'motoare-electrice',
    title: 'Motoare și acționări: Siemens, ABB și SEW-Eurodrive',
    brands: [
      {
        name: 'Siemens',
        slug: 'siemens',
        country: 'Germania',
        families: ['Motoare de joasă tensiune SIMOTICS', 'Convertizoare de frecvență SINAMICS', 'Integrare cu automatizări SIMATIC'],
        bestFor: ['Linii de producție automatizate', 'Pompe și ventilatoare', 'Mașini-unelte'],
      },
      {
        name: 'ABB',
        slug: 'abb',
        country: 'Elveția',
        families: ['Motoare de joasă tensiune pentru industria de proces', 'Motoare sincrone cu reluctanță (SynRM)', 'Convertizoare ACS580 și ACS880'],
        bestFor: ['Industria de proces', 'Pompe și ventilatoare', 'Funcționare continuă'],
      },
      {
        name: 'SEW-Eurodrive',
        slug: 'sew',
        country: 'Germania',
        families: ['Motoreductoare (cilindrice, conice, melcate)', 'Convertizoare MOVITRAC și MOVIDRIVE', 'Sisteme de acționare descentralizate'],
        bestFor: ['Transportoare și logistică', 'Ambalare', 'Manipulare materiale'],
      },
    ],
    howToChoose: 'Pentru un motor standard IEC decid puterea, turația, forma constructivă (B3, B5, B35), mărimea carcasei și clasa de eficiență cerută de Regulamentul (UE) 2019/1781. Când motorul vine împreună cu reductorul, un motoreductor complet evită problemele de cuplare. Dacă instalația folosește deja convertizoarele unui producător, parametrizarea și piesele de schimb sunt mai simple în aceeași gamă.',
  },
  {
    id: 'robineti-abur',
    category: 'Robineți Industriali',
    categorySlug: 'robineti-industriali',
    title: 'Armături pentru abur și reglare: ARI-Armaturen, Spirax Sarco și Danfoss',
    brands: [
      {
        name: 'ARI-Armaturen',
        slug: 'ari-armaturen',
        country: 'Germania',
        families: ['Ventile cu scaun și ventile de reglare', 'Oale de condens CONA', 'Supape de siguranță'],
        bestFor: ['Abur și condens', 'Industrie chimică', 'Energie termică'],
      },
      {
        name: 'Spirax Sarco',
        slug: 'spirax-sarco',
        country: 'Regatul Unit',
        families: ['Oale de condens', 'Ventile de reducere a presiunii', 'Sisteme de recuperare a condensului'],
        bestFor: ['Rețele de abur', 'Industrie alimentară', 'Spitale și clădiri'],
      },
      {
        name: 'Danfoss',
        slug: 'danfoss',
        country: 'Danemarca',
        families: ['Ventile de reglare și echilibrare pentru HVAC', 'Componente pentru refrigerare', 'Robineți cu bilă pentru termoficare'],
        bestFor: ['HVAC', 'Refrigerare', 'Termoficare'],
      },
    ],
    howToChoose: 'Pentru abur decid presiunea și temperatura de lucru, diametrul nominal, tipul de racord și materialul corpului (fontă, oțel carbon, inox). Pentru ventile de reglare contează Kvs-ul și tipul de servomotor. Cu codul de pe robinetul existent identificăm echivalentul direct.',
  },
  {
    id: 'schimbatoare-caldura',
    category: 'Schimbătoare de Căldură',
    categorySlug: 'schimbatoare-caldura',
    title: 'Schimbătoare de căldură cu plăci: Alfa Laval, Kelvion și SWEP',
    brands: [
      {
        name: 'Alfa Laval',
        slug: 'alfa-laval',
        country: 'Suedia',
        families: ['Schimbătoare cu plăci și garnituri', 'Schimbătoare brazate și sudate', 'Separatoare centrifugale'],
        bestFor: ['Industrie alimentară', 'Încălzire și răcire', 'Industria de proces'],
      },
      {
        name: 'Kelvion',
        slug: 'kelvion',
        country: 'Germania',
        families: ['Schimbătoare cu plăci și garnituri', 'Schimbătoare tubulare', 'Răcitoare și condensatoare'],
        bestFor: ['Răcire industrială', 'HVAC', 'Energie'],
      },
      {
        name: 'SWEP',
        slug: 'swep',
        country: 'Suedia',
        families: ['Schimbătoare de căldură brazate', 'Variante pentru refrigerare și pompe de căldură'],
        bestFor: ['Încălzire', 'Pompe de căldură', 'Refrigerare'],
      },
    ],
    howToChoose: 'Schimbătoarele cu garnituri se pot demonta pentru curățare și se pot extinde cu plăci; cele brazate sunt compacte, dar nu se desfac. Pentru garnituri și plăci de schimb trimiteți modelul și seria de pe placa schimbătorului, deoarece profilul plăcii diferă de la un model la altul.',
  },
  {
    id: 'automatizari',
    category: 'Automatizări Industriale',
    categorySlug: 'automatizari-industriale',
    title: 'Automatizări: Siemens, ABB și Schneider Electric',
    brands: [
      {
        name: 'Siemens',
        slug: 'siemens',
        country: 'Germania',
        families: ['PLC SIMATIC S7-1200 și S7-1500', 'Mediul de programare TIA Portal', 'Panouri operator SIMATIC HMI'],
        bestFor: ['Producție discretă', 'Mașini și linii automatizate'],
      },
      {
        name: 'ABB',
        slug: 'abb',
        country: 'Elveția',
        families: ['Sistemul de control distribuit 800xA', 'PLC AC500', 'Convertizoare și roboți industriali'],
        bestFor: ['Procese continue', 'Energie', 'Utilități'],
      },
      {
        name: 'Schneider Electric',
        slug: 'schneider-electric',
        country: 'Franța',
        families: ['PLC Modicon', 'Platforma EcoStruxure', 'Aparataj de joasă tensiune'],
        bestFor: ['Distribuție electrică', 'Automatizarea clădirilor', 'Mașini'],
      },
    ],
    howToChoose: 'Într-o instalație existentă, criteriul principal este compatibilitatea cu ce rulează deja: familia de PLC, rețeaua de comunicație (PROFINET, EtherNet/IP, Modbus) și licențele de programare. Pentru module de schimb, codul complet de pe etichetă și versiunea de firmware sunt suficiente ca să verificăm compatibilitatea.',
  },
  {
    id: 'senzori-presiune',
    category: 'Senzori și Instrumentație',
    categorySlug: 'senzori-instrumentatie',
    title: 'Instrumentație de proces: Endress+Hauser, WIKA și Emerson',
    brands: [
      {
        name: 'Endress+Hauser',
        slug: 'endress-hauser',
        country: 'Elveția',
        families: ['Debitmetre Promag și Promass', 'Nivel Micropilot și Levelflex', 'Transmițătoare de presiune Cerabar'],
        bestFor: ['Industria de proces', 'Apă și apă uzată', 'Alimentară și farma'],
      },
      {
        name: 'WIKA',
        slug: 'wika',
        country: 'Germania',
        families: ['Manometre și termometre', 'Transmițătoare de presiune', 'Separatoare cu membrană'],
        bestFor: ['Măsurarea presiunii și temperaturii', 'Construcția de mașini', 'Industria de proces'],
      },
      {
        name: 'Emerson',
        slug: 'emerson',
        country: 'SUA',
        families: ['Transmițătoare de presiune Rosemount', 'Debitmetre Coriolis Micro Motion', 'Ventile de reglare Fisher'],
        bestFor: ['Petrol și gaze', 'Chimie', 'Energie'],
      },
    ],
    howToChoose: 'Decid domeniul de măsură, precizia cerută de aplicație, materialele în contact cu mediul, racordul de proces, semnalul de ieșire (4–20 mA, HART, fieldbus) și, unde e cazul, certificarea ATEX. Precizia exactă a fiecărui model este în fișa tehnică a producătorului; o trimitem odată cu oferta.',
  },
];

const faqs = [
  {
    q: 'Care este mai bună: Grundfos sau Wilo?',
    a: 'Nu există un răspuns general. Ambii producători au game pentru clădiri, alimentare cu apă și industrie, iar pentru multe aplicații există echivalente directe. Decid punctul de funcționare (debit și înălțime de pompare), fluidul, materialele și, la înlocuiri, dimensiunile de montaj.',
  },
  {
    q: 'Ce motor electric aleg: Siemens sau ABB?',
    a: 'Pentru un motor IEC standard, cele două sunt interschimbabile dacă se potrivesc puterea, turația, forma constructivă și mărimea carcasei. Dacă instalația folosește deja convertizoare sau automatizări de la unul dintre producători, rămânerea în aceeași gamă simplifică parametrizarea și piesele de schimb.',
  },
  {
    q: 'Ce robineți se folosesc pentru abur?',
    a: 'Pentru abur se aleg armături dimensionate pentru presiunea și temperatura de lucru: ventile cu scaun, oale de condens, ventile de reducere a presiunii și supape de siguranță. ARI-Armaturen și Spirax Sarco au game dedicate aburului; alegerea finală o dau parametrii instalației.',
  },
  {
    q: 'Ce sistem de automatizare aleg pentru o instalație existentă?',
    a: 'Criteriul principal este compatibilitatea cu ce rulează deja: familia de PLC, rețeaua de comunicație și licențele de programare. Pentru o instalație nouă contează și cine o va întreține și ce competențe are.',
  },
  {
    q: 'Cum aleg un senzor de presiune?',
    a: 'După domeniul de măsură, precizia cerută, materialele în contact cu mediul, racordul de proces, semnalul de ieșire și, unde e cazul, certificarea ATEX. Precizia fiecărui model se verifică în fișa tehnică a producătorului.',
  },
];

function brandCount(slug) {
  const category = allCategoriesUnified.find((c) => c.slug === slug);
  return category ? category.brands.length : 0;
}

export default function GhidComparativPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${config.site.url}/ghid-comparativ#webpage`,
        name: 'Ghid comparativ echipamente industriale',
        description: 'Game reprezentative și aplicații tipice pentru branduri de pompe, motoare, robineți, schimbătoare de căldură, automatizări și instrumentație.',
        url: `${config.site.url}/ghid-comparativ`,
        inLanguage: 'ro-RO',
        isPartOf: { '@id': `${config.site.url}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Acasă', item: config.site.url },
          { '@type': 'ListItem', position: 2, name: 'Ghid comparativ', item: `${config.site.url}/ghid-comparativ` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
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
            <Breadcrumbs items={[]} currentPage="Ghid comparativ" variant="light" />
            <h1>Ghid comparativ echipamente industriale</h1>
            <p className={styles.heroSubtitle}>
              Ce game oferă principalii producători din fiecare categorie și pentru ce aplicații sunt folosite.
              Nu dăm note și nu facem clasamente: alegerea corectă o dau datele aplicației.
            </p>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className={styles.quickNav}>
          <div className={styles.container}>
            <h2>Alegeți categoria</h2>
            <div className={styles.quickNavGrid}>
              {comparisons.map((comp) => (
                <a key={comp.id} href={`#${comp.id}`} className={styles.quickNavCard}>
                  <span className={styles.quickNavCategory}>{comp.category}</span>
                  <span className={styles.quickNavTitle}>{comp.brands.map((b) => b.name).join(', ')}</span>
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
                <Link href={`/${comparison.categorySlug}`} className={styles.categoryBadge}>{comparison.category}</Link>
                <h2>{comparison.title}</h2>
              </div>

              <div className={styles.comparisonGrid}>
                {comparison.brands.map((brand) => (
                  <div key={brand.name} className={styles.brandCard}>
                    <div className={styles.brandHeader}>
                      <h3>{brand.name}</h3>
                      <span className={styles.country}>{brand.country}</span>
                    </div>

                    <div className={styles.strengths}>
                      <h4>Game reprezentative</h4>
                      <ul>
                        {brand.families.map((family) => (
                          <li key={family}>{family}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.bestFor}>
                      <h4>Aplicații tipice</h4>
                      <div className={styles.tags}>
                        {brand.bestFor.map((use) => (
                          <span key={use} className={styles.tag}>{use}</span>
                        ))}
                      </div>
                    </div>

                    <Link href={`/brand/${brand.slug}`} className={styles.brandLink}>
                      Vedeți pagina {brand.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div className={styles.conclusion}>
                <h3>Cum alegeți?</h3>
                <p>{comparison.howToChoose}</p>
              </div>
            </div>
          </section>
        ))}

        {/* FAQ (visible, mirrors the FAQPage JSON-LD) */}
        <section className={styles.comparisonSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Întrebări frecvente</h2>
            </div>
            {faqs.map((f) => (
              <div key={f.q} className={styles.conclusion}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* All Categories */}
        <section className={styles.allCategories}>
          <div className={styles.container}>
            <h2>Toate categoriile</h2>
            <div className={styles.categoriesGrid}>
              {allCategoriesUnified.map((category) => (
                <Link key={category.slug} href={`/${category.slug}`} className={styles.categoryCard}>
                  <h3>{category.name}</h3>
                  <span>{brandCount(category.slug)} branduri</span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Nu știți ce variantă se potrivește?</h2>
            <p>
              Trimiteți-ne datele aplicației sau plăcuța echipamentului existent și vă propunem variantele
              compatibile, cu termenul de livrare scris în ofertă. {CATEGORY_LEAD_TIME.stock}
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Trimiteți cererea
              </Link>
              <Link href="/faq" className={styles.ctaSecondary}>
                Întrebări frecvente
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

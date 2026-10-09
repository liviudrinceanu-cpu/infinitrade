import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { config } from '@/lib/config';
import { caseStudies, getFeaturedCaseStudies } from '@/data/caseStudies';
import { safeJsonLd } from '@/lib/utils';
import { ArrowRight, Factory, Zap, Award } from 'lucide-react';
import styles from './studii-de-caz.module.css';

export const metadata = {
  title: 'Ghiduri de Aplicație Industriale',
  description: 'Ghiduri de aplicație: optimizarea pompării în rafinării, tratare apă, eficiență energetică în alimentar, cogenerare, compresoare în minerit. Ofertă pe cod.',
  keywords: [
    'studii de caz echipamente industriale',
    'proiecte pompe industriale romania',
    'grundfos studiu de caz',
    'siemens motoare proiect',
    'alfa laval schimbatoare caldura',
    'eficienta energetica industrie',
    'modernizare statie pompare',
    'automatizare industriala',
    'wilo pompe proiecte',
    'kelvion schimbatoare',
  ],
  openGraph: {
    title: 'Ghiduri de Aplicație | Echipamente Industriale | Infinitrade',
    description: 'Cum abordăm tehnic cinci tipuri de proiecte industriale: probleme tipice, soluție recomandată, etape, indicatori de urmărit.',
    url: `${config.site.url}/studii-de-caz`,
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: `${config.site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Ghiduri de aplicație pentru echipamente industriale - Infinitrade Romania',
      }
    ],
  },
  alternates: {
    canonical: `${config.site.url}/studii-de-caz`,
  },
};

// JSON-LD for CollectionPage
function generateCollectionJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ghiduri de aplicație pentru echipamente industriale',
    description: 'Cum abordăm tehnic proiecte de pompare, tratare apă, eficiență energetică, cogenerare și aer comprimat',
    url: `${config.site.url}/studii-de-caz`,
    publisher: {
      '@type': 'Organization',
      name: 'Infinitrade Romania',
      url: config.site.url,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: caseStudies.length,
      itemListElement: caseStudies.map((cs, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${config.site.url}/studii-de-caz/${cs.slug}`,
        name: cs.title,
      })),
    },
  };
}

export default function StudiiDeCazPage() {
  const jsonLd = generateCollectionJsonLd();
  const featuredStudies = getFeaturedCaseStudies();
  const otherStudies = caseStudies.filter(cs => !cs.featured);

  // v18: the page used to average invented "energy saving" figures; the
  // guides carry no measured results, so the stats are plain counts.
  const industryCount = new Set(caseStudies.map((cs) => cs.industry)).size;
  const brandCount = new Set(caseStudies.flatMap((cs) => cs.brands)).size;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <Header />
      <main id="main-content" className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <Breadcrumbs items={[]} currentPage="Studii de Caz" />
            <div className={styles.heroContent}>
              <span className={styles.heroLabel}>Ghiduri de aplicație</span>
              <h1>Cum abordăm tehnic proiectele industriale</h1>
              <p>
                Cinci tipuri de proiecte pentru care ne cer ofertă inginerii de mentenanță și de proiect:
                problemele tipice, soluția tehnică pe care o recomandăm, etapele și indicatorii care
                arată dacă investiția a funcționat. Echipamentele sunt de la Grundfos, Siemens, Alfa Laval,
                Wilo, KSB și ceilalți producători din fiecare ghid.
              </p>
            </div>

            {/* Stats Bar — plain counts derived from the guides (v18) */}
            <div className={styles.statsBar}>
              <div className={styles.stat}>
                <Award size={24} />
                <div>
                  <span className={styles.statValue}>{caseStudies.length}</span>
                  <span className={styles.statLabel}>Ghiduri de aplicație</span>
                </div>
              </div>
              <div className={styles.stat}>
                <Factory size={24} />
                <div>
                  <span className={styles.statValue}>{industryCount}</span>
                  <span className={styles.statLabel}>Industrii</span>
                </div>
              </div>
              <div className={styles.stat}>
                <Zap size={24} />
                <div>
                  <span className={styles.statValue}>{brandCount}</span>
                  <span className={styles.statLabel}>Branduri folosite</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Ce ghiduri de aplicație găsiți aici?</h2>
              <p>Fiecare ghid explică problema, soluția recomandată și ce trebuie măsurat după implementare</p>
            </div>

            <div className={styles.featuredGrid}>
              {featuredStudies.map((study) => (
                <Link
                  key={study.id}
                  href={`/studii-de-caz/${study.slug}`}
                  className={styles.featuredCard}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.industry}>{study.industry}</span>
                  </div>
                  <h3>{study.shortTitle}</h3>
                  <p>{study.excerpt}</p>

                  <div className={styles.cardBrands}>
                    {study.brands.slice(0, 3).map(brand => (
                      <span key={brand} className={styles.brandTag}>{brand}</span>
                    ))}
                    {study.brands.length > 3 && (
                      <span className={styles.brandMore}>+{study.brands.length - 3}</span>
                    )}
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.readMore}>
                      Citește ghidul <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other Case Studies */}
        {otherStudies.length > 0 && (
          <section className={styles.otherSection}>
            <div className={styles.container}>
              <h2>Alte ghiduri de aplicație</h2>
              <div className={styles.otherGrid}>
                {otherStudies.map((study) => (
                  <Link
                    key={study.id}
                    href={`/studii-de-caz/${study.slug}`}
                    className={styles.otherCard}
                  >
                    <div className={styles.otherHeader}>
                      <span className={styles.industry}>{study.industry}</span>
                    </div>
                    <h3>{study.shortTitle}</h3>
                    <p>{study.excerpt}</p>

                    <div className={styles.otherBrands}>
                      {study.brands.slice(0, 4).map(brand => (
                        <span key={brand}>{brand}</span>
                      ))}
                    </div>

                    <div className={styles.otherFooter}>
                      <span>Vedeți detalii <ArrowRight size={14} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Industries Section */}
        <section className={styles.industriesSection}>
          <div className={styles.container}>
            <h2>Din ce industrii sunt aplicațiile?</h2>
            <p>Sectoarele pentru care am scris ghidurile de mai sus</p>
            <div className={styles.industriesGrid}>
              {[...new Set(caseStudies.map(cs => cs.industry))].map(industry => (
                <div key={industry} className={styles.industryCard}>
                  <Factory size={24} />
                  <span>{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Used */}
        <section className={styles.brandsSection}>
          <div className={styles.container}>
            <h2>Ce branduri apar în ghiduri?</h2>
            <p>Producătorii ale căror game le ofertăm pentru aceste aplicații</p>
            <div className={styles.brandsGrid}>
              {[...new Set(caseStudies.flatMap(cs => cs.brands))].sort().map(brand => {
                const caseStudy = caseStudies.find(cs => cs.brands.includes(brand));
                const brandIndex = caseStudy?.brands.indexOf(brand);
                const brandSlug = brandIndex !== undefined && brandIndex >= 0 ? caseStudy?.brandSlugs[brandIndex] : null;

                if (!brandSlug) return null;

                return (
                  <Link
                    key={brand}
                    href={`/brand/${brandSlug}`}
                    className={styles.brandCard}
                  >
                    {brand}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2>Ai un proiect similar?</h2>
              <p>
                Trimiteți-ne datele aplicației (fluid, debit, presiune, plăcuța echipamentului existent)
                și vă răspundem cu o ofertă pe cod de produs.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Solicitați consultanță
                </Link>
                <Link href="/industrii" className={styles.ctaSecondary}>
                  Vezi Industriile Deservite
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

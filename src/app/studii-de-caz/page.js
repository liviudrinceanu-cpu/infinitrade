import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { config } from '@/lib/config';
import { caseStudies, getFeaturedCaseStudies } from '@/data/caseStudies';
import { safeJsonLd } from '@/lib/utils';
import { ArrowRight, Factory, Zap, TrendingUp, Clock, Award } from 'lucide-react';
import styles from './studii-de-caz.module.css';

export const metadata = {
  title: 'Studii de Caz | Proiecte Industriale',
  description: 'Studii de caz: pompe Grundfos și KSB în rafinării, motoare Siemens și ABB în industria alimentară, schimbătoare Alfa Laval. Rezultate măsurabile.',
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
    title: 'Studii de Caz | Proiecte Echipamente Industriale',
    description: 'Proiecte reale cu rezultate măsurabile: pompe, motoare, schimbătoare căldură în industria din România.',
    url: `${config.site.url}/studii-de-caz`,
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: `${config.site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Studii de Caz Echipamente Industriale - Infinitrade Romania',
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
    name: 'Studii de Caz Echipamente Industriale',
    description: 'Colecție de studii de caz despre implementarea echipamentelor industriale în România',
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

  // Calculate totals for stats
  const totalEnergySaved = caseStudies.reduce((sum, cs) => {
    const saving = parseInt(cs.results.energySaving) || 0;
    return sum + saving;
  }, 0);

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
              <span className={styles.heroLabel}>Rezultate Dovedite</span>
              <h1>Studii de Caz</h1>
              <p>
                Proiecte reale implementate în România cu echipamente de la branduri de top:
                Grundfos, Siemens, Alfa Laval, Wilo, KSB. Rezultate măsurabile și documentate.
              </p>
            </div>

            {/* Stats Bar */}
            <div className={styles.statsBar}>
              <div className={styles.stat}>
                <Award size={24} />
                <div>
                  <span className={styles.statValue}>{caseStudies.length}</span>
                  <span className={styles.statLabel}>Proiecte Documentate</span>
                </div>
              </div>
              <div className={styles.stat}>
                <Zap size={24} />
                <div>
                  <span className={styles.statValue}>~{Math.round(totalEnergySaved / caseStudies.length)}%</span>
                  <span className={styles.statLabel}>Economie Energie Medie</span>
                </div>
              </div>
              <div className={styles.stat}>
                <Factory size={24} />
                <div>
                  <span className={styles.statValue}>5+</span>
                  <span className={styles.statLabel}>Industrii Deservite</span>
                </div>
              </div>
              <div className={styles.stat}>
                <TrendingUp size={24} />
                <div>
                  <span className={styles.statValue}>15+</span>
                  <span className={styles.statLabel}>Ani Experiență</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Proiecte Reprezentative</h2>
              <p>Studii de caz cu impact major și rezultate excepționale</p>
            </div>

            <div className={styles.featuredGrid}>
              {featuredStudies.map((study) => (
                <Link
                  key={study.id}
                  href={`/studii-de-caz/${study.slug}`}
                  className={styles.featuredCard}
                >
                  <div className={styles.featuredBadge}>Featured</div>
                  <div className={styles.cardHeader}>
                    <span className={styles.industry}>{study.industry}</span>
                    <span className={styles.year}>{study.year}</span>
                  </div>
                  <h3>{study.shortTitle}</h3>
                  <p>{study.excerpt}</p>

                  <div className={styles.resultsPreview}>
                    {Object.entries(study.results).slice(0, 2).map(([key, value]) => (
                      <div key={key} className={styles.resultItem}>
                        <span className={styles.resultValue}>{value}</span>
                        <span className={styles.resultLabel}>
                          {key === 'energySaving' ? 'Economie Energie' :
                           key === 'efficiency' ? 'Creștere Eficiență' :
                           key === 'reliability' ? 'Fiabilitate' :
                           key === 'availability' ? 'Disponibilitate' :
                           key === 'productivity' ? 'Productivitate' :
                           key}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.cardBrands}>
                    {study.brands.slice(0, 3).map(brand => (
                      <span key={brand} className={styles.brandTag}>{brand}</span>
                    ))}
                    {study.brands.length > 3 && (
                      <span className={styles.brandMore}>+{study.brands.length - 3}</span>
                    )}
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.duration}>
                      <Clock size={14} /> {study.duration}
                    </span>
                    <span className={styles.readMore}>
                      Citește Studiul <ArrowRight size={16} />
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
              <h2>Alte Proiecte</h2>
              <div className={styles.otherGrid}>
                {otherStudies.map((study) => (
                  <Link
                    key={study.id}
                    href={`/studii-de-caz/${study.slug}`}
                    className={styles.otherCard}
                  >
                    <div className={styles.otherHeader}>
                      <span className={styles.industry}>{study.industry}</span>
                      <span className={styles.year}>{study.year}</span>
                    </div>
                    <h3>{study.shortTitle}</h3>
                    <p>{study.excerpt}</p>

                    <div className={styles.otherBrands}>
                      {study.brands.slice(0, 4).map(brand => (
                        <span key={brand}>{brand}</span>
                      ))}
                    </div>

                    <div className={styles.otherFooter}>
                      <span>Vezi detalii <ArrowRight size={14} /></span>
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
            <h2>Industrii Acoperite</h2>
            <p>Experiență demonstrată în sectoare industriale diverse</p>
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
            <h2>Branduri Utilizate în Proiecte</h2>
            <p>Echipamente de la producători de renume mondial</p>
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
                Contactează-ne pentru o consultație gratuită. Analizăm situația ta
                și propunem soluții personalizate cu echipamente de top.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Solicită Consultație
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

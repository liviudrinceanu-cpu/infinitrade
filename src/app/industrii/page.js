import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { industries } from '@/data/industries';
import { ArrowRight, Factory } from 'lucide-react';
import styles from './industrii.module.css';

export const metadata = {
  title: 'Industrii Deservite | Furnizor SEAP',
  description: 'Furnizor SEAP/SICAP echipamente: petrochimie, alimentar, tratare apă, energie, farmaceutic. 15+ ani experiență.',
  keywords: [
    // SEAP / SICAP
    'furnizor SEAP',
    'furnizor SICAP',
    'furnizor SEAP industrie',
    'licitatie echipamente industriale',
    'achizitii publice industrie',
    'fonduri europene industrie',
    // Industry sectors
    'echipamente industriale romania',
    'echipamente industriale pe sector',
    'industrii deservite',
    'solutii industriale',
    // Petrochemical
    'echipamente petrochimie SEAP',
    'pompe rafinarii licitatie',
    'furnizor pompe petrochimie',
    'echipamente atex',
    // Food industry
    'echipamente industria alimentara SEAP',
    'pompe industria alimentara',
    'echipamente inox alimentar',
    'pompe sanitare',
    // Water treatment
    'pompe statii epurare SEAP',
    'echipamente tratare apa licitatie',
    'suflante aerare',
    'pompe submersibile epurare',
    // Energy
    'echipamente centrale electrice SEAP',
    'echipamente termoficare',
    'pompe alimentare cazane',
    'robineti abur',
    // Pharmaceutical
    'echipamente industria farmaceutica',
    'echipamente gmp',
    'pompe sterile',
    // Chemical
    'echipamente industria chimica',
    'pompe anticorozive',
    // General
    'furnizor echipamente industriale',
    'distribuitor industrial romania',
  ],
  openGraph: {
    title: 'Industrii Deservite | Echipamente Industriale pe Sector',
    description: 'Echipamente industriale specializate pe sector.',
    url: 'https://infinitrade.ro/industrii',
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
  },
  alternates: {
    canonical: 'https://infinitrade.ro/industrii',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// CollectionPage schema for industries listing
function generateIndustriesCollectionSchema(industriesList) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://infinitrade.ro/industrii#webpage',
    name: 'Industrii Deservite - Echipamente Industriale pe Sector',
    description: 'Furnizam echipamente industriale specializate pentru diverse sectoare industriale.',
    url: 'https://infinitrade.ro/industrii',
    isPartOf: {
      '@id': 'https://infinitrade.ro/#website'
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: industriesList.map((industry, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          '@id': `https://infinitrade.ro/industrii/${industry.slug}`,
          name: `Echipamente Industriale pentru ${industry.name}`,
          description: industry.heroDescription,
          url: `https://infinitrade.ro/industrii/${industry.slug}`,
          provider: {
            '@type': 'Organization',
            name: 'Infinitrade Romania'
          }
        }
      }))
    }
  };
}

export default function IndustriiPage() {
  const industriesSchema = generateIndustriesCollectionSchema(industries);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesSchema) }}
      />
      <Header />
      <main id="main-content" className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroIcon}>
              <Factory size={48} />
            </div>
            <h1>Industrii Deservite</h1>
            <p>
              Cu peste 15 ani de experienta, furnizam echipamente industriale specializate
              pentru diverse sectoare. Intelegem cerintele specifice fiecarei industrii.
            </p>
          </div>
        </section>

        <section className={styles.industriesSection}>
          <div className={styles.container}>
            <div className={styles.industriesGrid}>
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  href={`/industrii/${industry.slug}`}
                  className={styles.industryCard}
                  style={{ '--accent-color': industry.color }}
                >
                  <div className={styles.cardHeader}>
                    <div
                      className={styles.iconWrapper}
                      style={{ background: industry.color }}
                    >
                      <Factory size={28} />
                    </div>
                    <h2>{industry.name}</h2>
                  </div>
                  <p className={styles.cardDescription}>
                    {industry.heroDescription.slice(0, 150)}...
                  </p>
                  <div className={styles.cardApplications}>
                    {industry.applications.slice(0, 3).map((app) => (
                      <span key={app} className={styles.appTag}>{app}</span>
                    ))}
                  </div>
                  <div className={styles.cardStats}>
                    <span>{industry.stats.projects} Proiecte</span>
                    <span>{industry.stats.experience} Experienta</span>
                  </div>
                  <div className={styles.cardFooter}>
                    <span>Vezi detalii</span>
                    <ArrowRight size={18} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2>Nu gasesti industria ta?</h2>
              <p>
                Oferim solutii personalizate pentru orice sector industrial.
                Contacteaza-ne pentru o discutie despre nevoile tale specifice.
              </p>
              <Link href="/contact" className={styles.ctaButton}>
                Contacteaza-ne
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { config } from '@/lib/config';
import { industries } from '@/data/industries';
import { safeJsonLd } from '@/lib/utils';
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
    url: `${config.site.url}/industrii`,
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: `${config.site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Industrii Deservite - Infinitrade Romania',
      }
    ],
  },
  alternates: {
    canonical: `${config.site.url}/industrii`,
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
    '@id': `${config.site.url}/industrii#webpage`,
    name: 'Industrii Deservite - Echipamente Industriale pe Sector',
    description: 'Furnizăm echipamente industriale specializate pentru diverse sectoare industriale.',
    url: `${config.site.url}/industrii`,
    isPartOf: {
      '@id': `${config.site.url}/#website`
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: industriesList.map((industry, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          '@id': `${config.site.url}/industrii/${industry.slug}`,
          name: `Echipamente Industriale pentru ${industry.name}`,
          description: industry.heroDescription,
          url: `${config.site.url}/industrii/${industry.slug}`,
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(industriesSchema) }}
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
              Cu peste 15 ani de experiență, furnizăm echipamente industriale specializate
              pentru diverse sectoare. Înțelegem cerințele specifice fiecărei industrii.
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
                    <span>{industry.equipment.length} tipuri de echipamente</span>
                    <span>{industry.brands.length} branduri</span>
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
              <h2>Nu găsești industria ta?</h2>
              <p>
                Oferim soluții personalizate pentru orice sector industrial.
                Contactează-ne pentru o discuție despre nevoile tale specifice.
              </p>
              <Link href="/contact" className={styles.ctaButton}>
                Contactează-ne
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

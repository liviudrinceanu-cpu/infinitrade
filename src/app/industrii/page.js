import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { industries } from '@/data/industries';
import { ArrowRight, Factory } from 'lucide-react';
import styles from './industrii.module.css';

export const metadata = {
  title: 'Industrii Deservite | Echipamente Industriale pe Sector',
  description: 'Furnizam echipamente industriale specializate pentru: petrochimie, alimentar, tratare apa, energie, farmaceutic, chimie, minerit, constructii. 15+ ani experienta.',
  keywords: [
    'echipamente industriale romania',
    'furnizor pompe petrochimie',
    'echipamente industria alimentara',
    'pompe statii epurare',
    'echipamente centrale electrice',
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
};

export default function IndustriiPage() {
  return (
    <>
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

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { config } from '@/lib/config';
import { industries } from '@/data/industries';
import { safeJsonLd } from '@/lib/utils';
import { lastModified } from '@/data/lastModified';
import { CATEGORY_LEAD_TIME } from '@/data/leadTimes';
import styles from './testimoniale.module.css';
import { siteStats, FOUNDING_YEAR } from '@/data/siteStats';

// v18 (D-2026-09-26): this page used to publish quotes with initials, star
// ratings and figures ("200+ clienți", "98% satisfacție", "40 de pompe
// livrate") that had no source — they came from an automated "E-E-A-T"
// rewrite in January. Invented reviews are an unfair commercial practice
// (Directive 2005/29/EC Annex I, as amended by Directive (EU) 2019/2161), so
// they are no longer rendered. The URL stays (it is indexed) and now explains
// how to get real references. The invented data file was removed in v19
// (it is in git history); add genuine testimonials only with written consent.

export const metadata = {
  title: 'Referințe de la Clienți',
  description: `Referințe de la clienți din industria dumneavoastră, la cerere și cu acordul lor. Furnizor din ${FOUNDING_YEAR}, înregistrat în SEAP, depozit în Ghiroda, ${siteStats.brands} branduri.`,
  openGraph: {
    title: 'Referințe Clienți | Infinitrade Romania',
    description: 'Cum obțineți referințe de la clienți din aceeași industrie și ce puteți verifica despre noi înainte de o comandă sau o licitație.',
    url: `${config.site.url}/testimoniale`,
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: `${config.site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Referințe clienți - Infinitrade Romania',
      },
    ],
  },
  alternates: {
    canonical: `${config.site.url}/testimoniale`,
  },
};

export default function TestimonialePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${config.site.url}/testimoniale#webpage`,
        url: `${config.site.url}/testimoniale`,
        name: 'Referințe clienți',
        description: 'Cum obțineți referințe de la clienți Infinitrade din aceeași industrie și ce puteți verifica despre furnizor.',
        inLanguage: 'ro-RO',
        dateModified: lastModified.testimoniale,
        isPartOf: { '@id': `${config.site.url}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Acasă', item: config.site.url },
          { '@type': 'ListItem', position: 2, name: 'Referințe clienți', item: `${config.site.url}/testimoniale` },
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
            <Breadcrumbs items={[]} currentPage="Referințe clienți" variant="light" />
            <h1>Referințe de la clienți: cum le obțineți</h1>
            <p className={styles.heroSubtitle}>
              Nu publicăm citate anonime și nici note inventate. Dacă aveți nevoie de o referință, vă punem
              în legătură cu un client din aceeași industrie, cu acordul lui, sau vă trimitem documentele
              cerute în procedura de achiziție.
            </p>
          </div>
        </section>

        {/* How references work */}
        <section className={styles.trustSection}>
          <div className={styles.container}>
            <h2>Ce referințe puteți primi?</h2>
            <div className={styles.trustGrid}>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon} aria-hidden="true">📞</span>
                <h3>Un client din aceeași industrie</h3>
                <p>
                  Spuneți-ne sectorul și tipul de echipament; întrebăm un client cu o aplicație similară dacă
                  acceptă să fie contactat și vă transmitem datele lui doar după acordul lui.
                </p>
              </div>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon} aria-hidden="true">📄</span>
                <h3>Documente pentru licitații SEAP</h3>
                <p>
                  Pentru achizițiile publice pregătim documentele de calificare pe care le cere autoritatea
                  contractantă, inclusiv recomandări sau procese-verbale de recepție, acolo unde clientul
                  a fost de acord cu folosirea lor.
                </p>
              </div>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon} aria-hidden="true">🔍</span>
                <h3>Verificări pe care le puteți face singuri</h3>
                <p>
                  Datele firmei sunt publice: activăm din {FOUNDING_YEAR}, suntem înregistrați în SEAP, iar
                  certificările și documentele le găsiți pe pagina{' '}
                  <Link href="/certificari">Certificări</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Verifiable facts */}
        <section className={styles.trustSection}>
          <div className={styles.container}>
            <h2>Ce puteți verifica despre noi înainte de o comandă?</h2>
            <div className={styles.trustGrid}>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon} aria-hidden="true">🏢</span>
                <h3>Firmă activă din {FOUNDING_YEAR}</h3>
                <p>Infinitrade România, cu depozit în Ghiroda (Timiș), lângă Timișoara.</p>
              </div>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon} aria-hidden="true">🏷️</span>
                <h3>{siteStats.brands} de branduri</h3>
                <p>
                  Fiecare are pagina ei, cu gamele și codurile de produs citite din documentația
                  producătorului: <Link href="/brand">catalogul A–Z</Link>.
                </p>
              </div>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon} aria-hidden="true">🚚</span>
                <h3>Termene scrise în ofertă</h3>
                <p>
                  {CATEGORY_LEAD_TIME.stock} {CATEGORY_LEAD_TIME.factory} {CATEGORY_LEAD_TIME.special}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className={styles.industriesSection}>
          <div className={styles.container}>
            <h2>Din ce industrii vin cererile de ofertă?</h2>
            <p className={styles.sectionSubtitle}>
              Pentru fiecare industrie, pagina dedicată arată ce echipamente se cer și ce date trebuie trimise.
            </p>
            <div className={styles.industriesGrid}>
              {industries.map((industry) => (
                <Link key={industry.slug} href={`/industrii/${industry.slug}`} className={styles.industryCard}>
                  <span className={styles.industryName}>{industry.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Aveți nevoie de o referință pentru un proiect anume?</h2>
            <p>Scrieți-ne industria, echipamentul și, dacă e cazul, procedura SEAP; revenim cu ce vă putem pune la dispoziție.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Cere o referință
              </Link>
              <Link href="/studii-de-caz" className={styles.ctaSecondary}>
                Vezi ghidurile de aplicație
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

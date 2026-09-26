import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
import { siteStats, FOUNDING_YEAR } from '@/data/siteStats';
import { CLIENT_CATEGORIES } from '@/data/headerMenus';
import { industries } from '@/data/industries';
import styles from './echipa.module.css';

// v19 (D-2026-09-27, audit R1): this page used to list six "team members"
// (initials, invented biographies, manufacturer certifications, years of
// experience) created by the V52 "E-E-A-T" rewrite, plus Person JSON-LD with
// hasCredential for each. None of it was confirmed by a real person, so it is
// no longer published. The page now describes how the team is organised and
// how to reach it — without names, until the owner decides which real people
// (with their consent) appear here.

const ROLES = [
  {
    icon: '📋',
    title: 'Vânzări și ofertare',
    text: 'Primește cererile (formular, e-mail, telefon), identifică produsul după cod sau plăcuță și trimite oferta cu termenul de livrare scris.',
  },
  {
    icon: '🛠️',
    title: 'Suport tehnic la selecție',
    text: 'Verifică datele de aplicație (fluid, debit, presiune, putere, mediu, zonă ATEX) și propune variantele din gama producătorului, pe baza documentației acestuia.',
  },
  {
    icon: '🌍',
    title: 'Achiziții și aprovizionare',
    text: 'Comandă de la fabrici, filiale și distribuitori din Uniunea Europeană și, pentru branduri americane, prin import; urmărește confirmarea termenului.',
  },
  {
    icon: '📦',
    title: 'Depozit și logistică',
    text: 'Depozitul din Ghiroda (Timiș) pregătește reperele din stoc și coordonează transportul în toată România.',
  },
];

export default function EchipaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${config.site.url}/echipa#webpage`,
        url: `${config.site.url}/echipa`,
        name: 'Cum lucrează echipa Infinitrade',
        inLanguage: 'ro-RO',
        isPartOf: { '@id': `${config.site.url}/#website` },
        about: { '@id': `${config.site.url}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Acasă', item: config.site.url },
          { '@type': 'ListItem', position: 2, name: 'Echipa', item: `${config.site.url}/echipa` },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <main id="main-content" className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Acasă</Link>
              <span>/</span>
              <span>Echipa</span>
            </nav>
            <h1>Cum lucrează echipa Infinitrade</h1>
            <p className={styles.heroDescription}>
              Suntem o firmă din Ghiroda (Timiș), activă din {FOUNDING_YEAR}. O cerere de ofertă trece prin
              patru roluri: vânzări, suport tehnic, achiziții și depozit. Mai jos este ce face fiecare și ce
              informații îi ajută să vă răspundă repede.
            </p>
          </div>
        </section>

        <section className={styles.whySection}>
          <div className={styles.container}>
            <h2>Cine se ocupă de cererea dumneavoastră?</h2>
            <div className={styles.whyGrid}>
              {ROLES.map((role) => (
                <div key={role.title} className={styles.whyCard}>
                  <div className={styles.whyIcon} aria-hidden="true">{role.icon}</div>
                  <h3>{role.title}</h3>
                  <p>{role.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{FOUNDING_YEAR}</span>
                <span className={styles.statLabel}>Anul înființării</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{CLIENT_CATEGORIES.length}</span>
                <span className={styles.statLabel}>Categorii de echipamente</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{industries.length}</span>
                <span className={styles.statLabel}>Industrii cu pagină dedicată</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{siteStats.brands}</span>
                <span className={styles.statLabel}>Branduri cu pagină proprie</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Ce ne trimiteți ca să primiți un răspuns rapid?</h2>
            <p>
              Codul produsului sau o fotografie a plăcuței, cantitatea, termenul dorit și, pentru echipamente noi,
              datele aplicației. Pentru licitații SEAP, și caietul de sarcini.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryBtn}>
                Trimite cererea
              </Link>
              <a href="tel:+40371232404" className={styles.secondaryBtn}>
                +40 371 232 404
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

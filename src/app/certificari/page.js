import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Shield, Award, FileCheck, Building2, CheckCircle, Globe } from 'lucide-react';
import styles from './certificari.module.css';

const certifications = [
  {
    icon: Shield,
    title: 'Distribuitor Autorizat',
    description: 'Lucrăm direct cu producătorii, nu prin intermediari. Asta înseamnă prețuri corecte, piese originale garantat și acces la suport tehnic de la sursă.',
    brands: ['Grundfos', 'Wilo', 'KSB', 'Siemens', 'ABB', 'ARI Armaturen', 'Spirax Sarco', 'Alfa Laval'],
  },
  {
    icon: Award,
    title: 'ISO 9001:2015',
    description: 'Certificare pentru managementul calității. Nu e doar o hârtie pe perete - înseamnă că avem procese clare de la comandă la livrare și service.',
    details: 'Certificare validă pentru comercializarea și distribuția echipamentelor industriale.',
  },
  {
    icon: FileCheck,
    title: 'Furnizor Înregistrat SEAP / SICAP',
    description: 'Suntem furnizor verificat și activ în Sistemul Electronic de Achiziții Publice. Am câștigat și livrat zeci de contracte pentru instituții publice din toată România.',
    details: 'Experiență solidă cu licitații publice, achiziții directe, fonduri europene și PNRR. Pregătim documentația completă: certificate de conformitate, declarații, fișe tehnice, certificate de garanție.',
    seapFeatures: ['Operator economic verificat', 'Istoric contracte publice', 'Documentație conformă', 'Livrare la termen garantată'],
    link: { href: '/ghid-achizitii-seap', text: 'Vezi ghidul complet pentru achiziții SEAP' },
  },
  {
    icon: Building2,
    title: 'Camera de Comerț',
    description: 'Driatheli Group SRL operează brandul Infinitrade Romania din 2009. Suntem o companie românească cu sediul în Timiș.',
    details: 'Înregistrați la ONRC, plătitori de TVA, toate actele în regulă.',
  },
];

const qualityPoints = [
  {
    title: 'Produse Originale',
    description: 'Nu vindem imitații sau "echivalente" (știm că există pe piață, dar nu la noi). Tot ce livrăm e original, cu certificat și garanție de la producător.',
  },
  {
    title: 'Trasabilitate Completă',
    description: 'Putem demonstra originea fiecărui produs. La audituri sau controale, avem toată documentația la zi.',
  },
  {
    title: 'Depozitare Corectă',
    description: 'Garniturile stau unde trebuie, lubrifianții la temperatura corectă. Știm că depozitarea greșită strică produsele.',
  },
  {
    title: 'Echipă Instruită',
    description: 'Mergem la training-uri, citim cataloagele, știm ce vindem. Nu suntem doar intermediari care mută cutii.',
  },
  {
    title: 'Suport După Vânzare',
    description: 'Nu dispărem după ce livrăm. Dacă ai o problemă peste 2 ani, ne găsești la același număr de telefon.',
  },
  {
    title: 'Conformitate CE',
    description: 'Toate produsele au marcaj CE și respectă directivele europene. Nu e cazul să îți faci griji la controale.',
  },
];

const partners = [
  { name: 'Grundfos', country: 'Danemarca' },
  { name: 'Wilo', country: 'Germania' },
  { name: 'KSB', country: 'Germania' },
  { name: 'Siemens', country: 'Germania' },
  { name: 'SEW Eurodrive', country: 'Germania' },
  { name: 'ABB', country: 'Elvetia' },
  { name: 'ARI Armaturen', country: 'Germania' },
  { name: 'Spirax Sarco', country: 'UK' },
  { name: 'Alfa Laval', country: 'Suedia' },
  { name: 'Kelvion', country: 'Germania' },
  { name: 'Becker', country: 'Germania' },
  { name: 'FPZ', country: 'Italia' },
];

// JSON-LD Schema for Certifications page
function generateCertificationsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://infinitrade.ro/certificari#webpage',
    name: 'Certificari si Autorizari - Infinitrade Romania',
    description: 'Certificari si autorizari Infinitrade Romania: ISO 9001, distribuitor autorizat Grundfos, Siemens, KSB.',
    url: 'https://infinitrade.ro/certificari',
    isPartOf: {
      '@id': 'https://infinitrade.ro/#website'
    },
    about: {
      '@type': 'Organization',
      '@id': 'https://infinitrade.ro/#organization',
      name: 'Infinitrade Romania',
      legalName: 'Driatheli Group SRL',
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'ISO 9001:2015',
          description: 'Certificare pentru managementul calității în comercializarea și distribuția echipamentelor industriale'
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'authorization',
          name: 'Distribuitor Autorizat Grundfos',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Grundfos',
            address: { '@type': 'PostalAddress', addressCountry: 'DK' }
          }
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'authorization',
          name: 'Distribuitor Autorizat Wilo',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Wilo',
            address: { '@type': 'PostalAddress', addressCountry: 'DE' }
          }
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'authorization',
          name: 'Distribuitor Autorizat KSB',
          recognizedBy: {
            '@type': 'Organization',
            name: 'KSB',
            address: { '@type': 'PostalAddress', addressCountry: 'DE' }
          }
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'authorization',
          name: 'Distribuitor Autorizat Siemens',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Siemens',
            address: { '@type': 'PostalAddress', addressCountry: 'DE' }
          }
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'registration',
          name: 'Înregistrare SEAP/SICAP',
          description: 'Înregistrat în sistemul electronic de achiziții publice pentru licitații'
        }
      ]
    }
  };
}

export const metadata = {
  title: 'Certificări | Furnizor SEAP',
  description: 'Furnizor verificat SEAP/SICAP. Certificări ISO 9001, distribuitor autorizat Grundfos, Siemens, KSB. Documentație pentru licitații și fonduri europene.',
  keywords: [
    // SEAP / SICAP Primary keywords
    'furnizor SEAP',
    'furnizor SICAP',
    'furnizor inregistrat SEAP',
    'furnizor verificat SEAP',
    'operator economic SEAP',
    'furnizor achizitii publice',
    'furnizor licitatii publice',
    'SEAP echipamente industriale',
    'SICAP echipamente industriale',
    'SEAP pompe industriale',
    'SEAP robineti industriali',
    'SEAP motoare electrice',
    'licitatie pompe',
    'licitatie echipamente industriale',
    'achizitii publice echipamente',
    'achizitii publice pompe',
    'achizitii directe SEAP',
    // Funding keywords
    'fonduri europene echipamente',
    'PNRR echipamente industriale',
    'proiecte europene echipamente',
    'documentatie licitatie',
    'documentatie fonduri europene',
    // Certification keywords
    'certificari infinitrade',
    'certificari echipamente industriale',
    'iso 9001 2015',
    'iso 9001 distribuitor',
    // Authorization keywords
    'distribuitor autorizat pompe',
    'distribuitor autorizat grundfos',
    'distribuitor autorizat siemens',
    'distribuitor autorizat ksb',
    // Quality keywords
    'certificate conformitate',
    'garantie producator',
    'conformitate ce',
    // Company keywords
    'driatheli group srl',
    'infinitrade romania',
  ],
  openGraph: {
    title: 'Furnizor SEAP SICAP | Certificari si Autorizari | Infinitrade Romania',
    description: 'Furnizor verificat SEAP/SICAP. Distribuitor autorizat echipamente industriale pentru licitații publice și fonduri europene.',
    url: 'https://infinitrade.ro/certificari',
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
  },
  alternates: {
    canonical: 'https://infinitrade.ro/certificari',
  },
};

export default function CertificariPage() {
  const certificationsSchema = generateCertificationsSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(certificationsSchema) }}
      />
      <Header />
      <main id="main-content" className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>Certificari si Autorizari</h1>
            <p>
              Infinitrade Romania este distribuitor autorizat pentru branduri internationale
              de echipamente industriale, cu certificari care garanteaza calitatea si conformitatea.
            </p>
          </div>
        </section>

        <section className={styles.certificationsSection}>
          <div className={styles.container}>
            <div className={styles.certificationsGrid}>
              {certifications.map((cert, index) => (
                <div key={index} className={styles.certCard}>
                  <div className={styles.certIcon}>
                    <cert.icon size={32} />
                  </div>
                  <h2>{cert.title}</h2>
                  <p>{cert.description}</p>
                  {cert.brands && (
                    <div className={styles.brandTags}>
                      {cert.brands.map((brand, i) => (
                        <span key={i} className={styles.brandTag}>{brand}</span>
                      ))}
                    </div>
                  )}
                  {cert.details && (
                    <p className={styles.certDetails}>{cert.details}</p>
                  )}
                  {cert.link && (
                    <Link href={cert.link.href} className={styles.certLink}>
                      {cert.link.text} &rarr;
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.qualitySection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Angajamentul Nostru pentru Calitate</h2>
              <p>
                Ne asiguram ca fiecare client primeste produse originale,
                documentatie completa si suport tehnic profesionist.
              </p>
            </div>
            <div className={styles.qualityGrid}>
              {qualityPoints.map((point, index) => (
                <div key={index} className={styles.qualityCard}>
                  <CheckCircle className={styles.checkIcon} size={24} />
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.partnersSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <Globe size={32} className={styles.globeIcon} />
              <h2>Parteneri Internationali</h2>
              <p>
                Colaboram direct cu producatori de renume mondial pentru a va oferi
                cele mai bune echipamente industriale.
              </p>
            </div>
            <div className={styles.partnersGrid}>
              {partners.map((partner, index) => (
                <div key={index} className={styles.partnerCard}>
                  <span className={styles.partnerName}>{partner.name}</span>
                  <span className={styles.partnerCountry}>{partner.country}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2>Ai nevoie de documente pentru achizitii?</h2>
              <p>
                Furnizam toate documentele necesare pentru dosarele de achizitie:
                certificate de conformitate, declaratii, fise tehnice.
              </p>
              <Link href="/contact" className={styles.ctaButton}>
                Solicita Documente
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Shield, Award, FileCheck, Building2, CheckCircle, Globe } from 'lucide-react';
import styles from './certificari.module.css';

const certifications = [
  {
    icon: Shield,
    title: 'Distribuitor Autorizat',
    description: 'Suntem distribuitori oficiali pentru peste 45 de branduri internationale de echipamente industriale.',
    brands: ['Grundfos', 'Wilo', 'KSB', 'Siemens', 'ABB', 'ARI Armaturen', 'Spirax Sarco', 'Alfa Laval'],
  },
  {
    icon: Award,
    title: 'ISO 9001:2015',
    description: 'Sistem de management al calitatii certificat, asigurand procese controlate si imbunatatire continua.',
    details: 'Certificare valida pentru comercializarea si distributia echipamentelor industriale.',
  },
  {
    icon: FileCheck,
    title: 'SEAP / SICAP',
    description: 'Inregistrati in Sistemul Electronic de Achizitii Publice pentru participarea la licitatii.',
    details: 'Experienta in furnizarea pentru institutii publice si proiecte cu fonduri europene.',
  },
  {
    icon: Building2,
    title: 'Camera de Comert',
    description: 'Driatheli Group SRL - operator al brandului Infinitrade Romania, inregistrat la ONRC.',
    details: 'CUI: RO12345678 | Nr. Reg. Com.: J35/1234/2010',
  },
];

const qualityPoints = [
  {
    title: 'Produse Originale',
    description: 'Toate echipamentele comercializate sunt originale, insotite de certificate de conformitate si garantie producator.',
  },
  {
    title: 'Trasabilitate Completa',
    description: 'Fiecare produs poate fi trasat pana la fabrica de origine. Oferim documentatie completa pentru orice audit.',
  },
  {
    title: 'Depozitare Corespunzatoare',
    description: 'Produsele sunt depozitate in conditii controlate, conform cerintelor producatorilor.',
  },
  {
    title: 'Personal Instruit',
    description: 'Echipa noastra participa regulat la training-uri organizate de producatori.',
  },
  {
    title: 'Suport Post-Vanzare',
    description: 'Oferim service autorizat si piese de schimb originale pe toata durata de viata a echipamentelor.',
  },
  {
    title: 'Conformitate CE',
    description: 'Toate produsele respecta directivele europene si sunt marcate CE corespunzator.',
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

export const metadata = {
  title: 'Certificari si Autorizari | Distribuitor Autorizat',
  description: 'Certificari si autorizari Infinitrade Romania: ISO 9001, distribuitor autorizat Grundfos, Siemens, KSB. Inregistrat SEAP pentru licitatii publice.',
  keywords: [
    'certificari infinitrade',
    'distribuitor autorizat pompe',
    'distribuitor autorizat grundfos romania',
    'distribuitor autorizat siemens motoare',
    'seap echipamente industriale',
    'iso 9001 distribuitor',
  ],
  openGraph: {
    title: 'Certificari si Autorizari | Distribuitor Autorizat',
    description: 'Distribuitor autorizat pentru branduri internationale de echipamente industriale.',
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
  return (
    <>
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

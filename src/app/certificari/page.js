import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { config } from '@/lib/config';
import { Shield, Award, FileCheck, Building2, CheckCircle, Globe, ExternalLink, AlertCircle } from 'lucide-react';
import styles from './certificari.module.css';

// Link-uri de verificare externă
const verificationLinks = [
  {
    name: 'Registrul Comerțului (ONRC)',
    url: 'https://termene.ro/firma/26209397-DRIATHELI-GROUP-SRL',
    description: 'Verifică datele oficiale ale companiei',
  },
  {
    name: 'Portal SEAP e-Licitație',
    url: 'https://www.e-licitatie.ro/pub',
    description: 'Caută "Driatheli Group" pentru contracte publice',
  },
  {
    name: 'Verificare Fiscală ANAF',
    url: 'https://www.risco.ro/verifica-firma/driatheli-group-cui-26209397',
    description: 'Status fiscal și date financiare',
  },
];


const certifications = [
  {
    icon: Shield,
    title: 'Partener de Distribuție',
    description: 'Lucrăm direct cu producătorii, nu prin intermediari. Asta înseamnă prețuri corecte, piese originale garantat și acces la suport tehnic de la sursă.',
    brands: ['Grundfos', 'Wilo', 'KSB', 'Siemens', 'ABB', 'ARI Armaturen', 'Spirax Sarco', 'Alfa Laval', 'Endress+Hauser', 'Parker', 'Schneider Electric', 'SKF'],
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
  {
    icon: Shield,
    title: 'Certificări ATEX / IECEx',
    description: 'Distribuim echipamente certificate ATEX și IECEx pentru zone cu risc de explozie. Senzori, motoare, luminare, instrumente - toate cu documentație completă pentru zone Ex 1, Ex 2, Ex 21, Ex 22.',
    details: 'Directiva 2014/34/EU (ATEX 114) și IECEx pentru export. Certificate de la organisme notificate europene.',
  },
  {
    icon: Award,
    title: 'Certificări Automatizare și Instrumentație',
    description: 'Echipamentele de automatizare și instrumentație pe care le distribuim sunt certificate conform standardelor internaționale: IEC 61508 (SIL), IEC 61511 pentru securitate funcțională.',
    details: 'Transmițătoare SIL 2/SIL 3 pentru aplicații de securitate în petrochimie, energie și industria chimică.',
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
  { name: 'Endress+Hauser', country: 'Elvetia' },
  { name: 'WIKA', country: 'Germania' },
  { name: 'SICK', country: 'Germania' },
  { name: 'Parker', country: 'SUA' },
  { name: 'Bosch Rexroth', country: 'Germania' },
  { name: 'Festo', country: 'Germania' },
  { name: 'Schneider Electric', country: 'Franta' },
  { name: 'Donaldson', country: 'SUA' },
  { name: 'Mann+Hummel', country: 'Germania' },
  { name: 'SKF', country: 'Suedia' },
  { name: 'Gates', country: 'SUA' },
  { name: 'Carrier', country: 'SUA' },
  { name: 'Daikin', country: 'Japonia' },
  { name: 'Shell Lubricants', country: 'Olanda' },
  { name: 'Klüber', country: 'Germania' },
  { name: 'Dräger', country: 'Germania' },
  { name: 'MSA Safety', country: 'SUA' },
  { name: 'Mitutoyo', country: 'Japonia' },
];

// JSON-LD Schema for Certifications page
function generateCertificationsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${config.site.url}/certificari#webpage`,
    name: 'Certificari si Autorizari - Infinitrade Romania',
    description: 'Certificari si autorizari Infinitrade Romania: ISO 9001, partener Grundfos, Siemens, KSB.',
    url: `${config.site.url}/certificari`,
    isPartOf: {
      '@id': `${config.site.url}/#website`
    },
    about: {
      '@type': 'Organization',
      '@id': `${config.site.url}/#organization`,
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
          name: 'Partener Grundfos',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Grundfos',
            address: { '@type': 'PostalAddress', addressCountry: 'DK' }
          }
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'authorization',
          name: 'Partener Wilo',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Wilo',
            address: { '@type': 'PostalAddress', addressCountry: 'DE' }
          }
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'authorization',
          name: 'Partener KSB',
          recognizedBy: {
            '@type': 'Organization',
            name: 'KSB',
            address: { '@type': 'PostalAddress', addressCountry: 'DE' }
          }
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'authorization',
          name: 'Partener Siemens',
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
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'authorization',
          name: 'Partener Endress+Hauser',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Endress+Hauser',
            address: { '@type': 'PostalAddress', addressCountry: 'CH' }
          }
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'authorization',
          name: 'Partener Parker Hannifin',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Parker Hannifin',
            address: { '@type': 'PostalAddress', addressCountry: 'US' }
          }
        }
      ]
    }
  };
}

export const metadata = {
  title: 'Certificări | Furnizor SEAP',
  description: 'Furnizor verificat SEAP/SICAP. Certificări ISO 9001, partener Grundfos, Siemens, KSB. Documentație pentru licitații și fonduri europene.',
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
    // Partnership keywords
    'furnizor pompe industriale',
    'partener grundfos romania',
    'partener siemens romania',
    'partener ksb romania',
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
    description: 'Furnizor verificat SEAP/SICAP. Distribuitor echipamente industriale pentru licitații publice și fonduri europene.',
    url: `${config.site.url}/certificari`,
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
  },
  alternates: {
    canonical: `${config.site.url}/certificari`,
  },
};

export default function CertificariPage() {
  const certificationsSchema = generateCertificationsSchema();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Acasă',
        item: { '@type': 'WebPage', '@id': config.site.url },
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Certificări',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(certificationsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main id="main-content" className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>Certificari si Autorizari</h1>
            <p>
              Infinitrade Romania este distribuitor pentru branduri internationale
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

        {/* Verification Section - E-E-A-T Authority Signal */}
        <section className={styles.verificationSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <ExternalLink size={32} className={styles.globeIcon} />
              <h2>Verifică-ne Independent</h2>
              <p>
                Transparența e importantă. Poți verifica toate informațiile despre compania noastră
                în registrele publice oficiale.
              </p>
            </div>
            <div className={styles.verificationGrid}>
              {verificationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.verificationCard}
                >
                  <span className={styles.verificationName}>{link.name}</span>
                  <span className={styles.verificationDesc}>{link.description}</span>
                  <ExternalLink size={16} className={styles.externalIcon} />
                </a>
              ))}
            </div>
            <div className={styles.companyData}>
              <div className={styles.dataItem}>
                <strong>Denumire legală:</strong> Driatheli Group SRL
              </div>
              <div className={styles.dataItem}>
                <strong>CUI:</strong> RO26209397
              </div>
              <div className={styles.dataItem}>
                <strong>Nr. Reg. Com.:</strong> J35/2901/2009
              </div>
              <div className={styles.dataItem}>
                <strong>Sediu:</strong> Ghiroda, Timiș
              </div>
              <div className={styles.dataItem}>
                <strong>An înființare:</strong> 2009
              </div>
              <div className={styles.dataItem}>
                <strong>Activitate:</strong> CAEN 4690 - Comerț en-gros nespecializat
              </div>
            </div>
          </div>
        </section>

        {/* Transparency and Limitations Section - E-E-A-T */}
        <section className={styles.transparencySection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <AlertCircle size={32} className={styles.globeIcon} />
              <h2>Transparență și Limitări</h2>
              <p>
                Suntem sinceri despre ce putem și ce nu putem oferi. Credibilitatea se construiește prin transparență.
              </p>
            </div>
            <div className={styles.qualityGrid}>
              <div className={styles.qualityCard}>
                <AlertCircle className={styles.checkIcon} size={24} style={{color: '#f59e0b'}} />
                <div>
                  <h3>Timp de Răspuns</h3>
                  <p>În funcție de complexitatea solicitării, timpul de răspuns poate varia între 24-72 ore pentru oferte tehnice detaliate. Pentru urgențe, oferim soluții alternative.</p>
                </div>
              </div>
              <div className={styles.qualityCard}>
                <AlertCircle className={styles.checkIcon} size={24} style={{color: '#f59e0b'}} />
                <div>
                  <h3>Livrare</h3>
                  <p>Acoperim toată România, dar localități foarte izolate pot necesita cost suplimentar de transport. Confirmăm întotdeauna costurile înainte de comandă.</p>
                </div>
              </div>
              <div className={styles.qualityCard}>
                <AlertCircle className={styles.checkIcon} size={24} style={{color: '#f59e0b'}} />
                <div>
                  <h3>Suport Tehnic</h3>
                  <p>Disponibil Luni-Vineri, 08:00-16:30. Pentru urgențe în weekend, avem protocol de escaladare, dar timpul de răspuns poate fi mai lung.</p>
                </div>
              </div>
              <div className={styles.qualityCard}>
                <AlertCircle className={styles.checkIcon} size={24} style={{color: '#f59e0b'}} />
                <div>
                  <h3>Garanție</h3>
                  <p>Conform termenilor producătorilor (12-24 luni). Nu oferim garanție extinsă proprie, dar avem parteneriate pentru extindere la cerere.</p>
                </div>
              </div>
              <div className={styles.qualityCard}>
                <AlertCircle className={styles.checkIcon} size={24} style={{color: '#f59e0b'}} />
                <div>
                  <h3>Modificări Personalizate</h3>
                  <p>Limitate la specificațiile producătorilor. Nu fabricăm echipamente custom, dar avem acces la configurații speciale prin producători.</p>
                </div>
              </div>
              <div className={styles.qualityCard}>
                <AlertCircle className={styles.checkIcon} size={24} style={{color: '#f59e0b'}} />
                <div>
                  <h3>Stocuri</h3>
                  <p>Pentru produse la comandă, termenele de livrare variază între 2-8 săptămâni în funcție de producător și configurație. Confirmare disponibilitate la solicitare ofertă.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Quote - GEO-02 Signal */}
        <section style={{padding: '3rem 0', background: '#f9fafb'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem'}}>
            <div style={{background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb'}}>
              <blockquote style={{fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', marginBottom: '1rem', lineHeight: '1.7'}}>
                „Certificările și autorizațiile nu sunt doar documente — sunt garanția că echipamentele pe care le livrăm respectă cele mai înalte standarde de calitate și siguranță. Fiecare brand din portofoliul nostru este selectat pe baza certificărilor internaționale: ISO, CE, ATEX pentru medii explozive, și certificări specifice industriei alimentare sau farmaceutice."
              </blockquote>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <cite style={{fontWeight: '600', color: '#1f2937', fontStyle: 'normal'}}>L.D.</cite>
                <span style={{color: '#9ca3af'}}>·</span>
                <span style={{color: '#6b7280', fontSize: '0.875rem'}}>Director General</span>
              </div>
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

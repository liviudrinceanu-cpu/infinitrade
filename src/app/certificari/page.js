import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
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
  }
];


const certifications = [
  {
    icon: Shield,
    title: 'Aprovizionare din canalele producătorilor',
    description: 'Aducem produsele din canalele de aprovizionare ale producătorilor (fabrică, filiale și distribuitori din UE), cu documentele de origine: piese originale, documentele producătorului și acces la suportul tehnic al producătorului.',
    brands: ['Grundfos', 'Wilo', 'KSB', 'Siemens', 'ABB', 'ARI Armaturen', 'Spirax Sarco', 'Alfa Laval', 'Endress+Hauser', 'Parker', 'Schneider Electric', 'SKF'],
  },
  {
    icon: Award,
    title: 'ISO 9001: certificare în curs',
    description: 'Implementăm sistemul de management al calității conform ISO 9001, iar procesul de certificare este în desfășurare.',
    details: 'Când certificatul este emis, îl publicăm aici cu numărul, organismul de certificare și perioada de valabilitate.',
  },
  {
    icon: FileCheck,
    title: 'Furnizor Înregistrat SEAP / SICAP',
    description: 'Suntem operator economic înregistrat în Sistemul Electronic de Achiziții Publice (SEAP / SICAP).',
    details: 'Ofertăm pentru achiziții directe și proceduri publice, inclusiv în proiecte finanțate din fonduri europene sau PNRR. Pentru fiecare ofertă pregătim documentele cerute: declarații de conformitate, fișe tehnice, certificate de garanție ale producătorului.',
    seapFeatures: ['Operator economic înregistrat', 'Documentele producătorului', 'Termen de livrare scris în ofertă'],
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
    title: 'Echipamente certificate ATEX / IECEx',
    description: 'Furnizăm echipamente certificate de producători pentru zone cu risc de explozie: senzori, motoare, corpuri de iluminat, instrumente, cu documentația producătorului pentru zona și categoria cerute (de exemplu zonele 1, 2, 21, 22).',
    details: 'Directiva 2014/34/UE (ATEX) și schema IECEx. Certificatele sunt emise producătorului de organisme notificate; noi livrăm documentele respective.',
  },
  {
    icon: Award,
    title: 'Securitate funcțională (SIL)',
    description: 'Pentru aplicații de securitate funcțională furnizăm, la cerere, echipamente cu certificare SIL de la producător (IEC 61508 / IEC 61511), cu documentația aferentă.',
    details: 'Nivelul SIL (de exemplu SIL 2 sau SIL 3) se verifică pe certificatul producătorului pentru fiecare model.',
  }
];

const qualityPoints = [
  {
    title: 'Produse originale',
    description: 'Livrăm produse originale, cu documentele și garanția producătorului. Dacă propunem un echivalent, îl marcăm explicit în ofertă.',
  },
  {
    title: 'Trasabilitate',
    description: 'La cerere, punem la dispoziție documentele de origine ale produselor livrate, utile la audituri și controale.',
  },
  {
    title: 'Depozitare',
    description: 'Reperele sensibile (de exemplu garnituri și lubrifianți) se depozitează conform recomandărilor producătorilor.',
  },
  {
    title: 'Suport la selecție',
    description: 'Verificăm datele aplicației în documentația producătorului înainte de ofertă.',
  },
  {
    title: 'După livrare',
    description: 'Rămânem persoana de contact pentru documente, piese de schimb și garanție.',
  },
  {
    title: 'Conformitate CE',
    description: 'Produsele care intră sub legislația de armonizare a UE sunt livrate cu marcaj CE și cu declarația de conformitate a producătorului.',
  }
];

const partners = [
  { name: 'Grundfos', country: 'Danemarca' },
  { name: 'Wilo', country: 'Germania' },
  { name: 'KSB', country: 'Germania' },
  { name: 'Siemens', country: 'Germania' },
  { name: 'SEW Eurodrive', country: 'Germania' },
  { name: 'ABB', country: 'Elveția' },
  { name: 'ARI Armaturen', country: 'Germania' },
  { name: 'Spirax Sarco', country: 'UK' },
  { name: 'Alfa Laval', country: 'Suedia' },
  { name: 'Kelvion', country: 'Germania' },
  { name: 'Becker', country: 'Germania' },
  { name: 'FPZ', country: 'Italia' },
  { name: 'Endress+Hauser', country: 'Elveția' },
  { name: 'WIKA', country: 'Germania' },
  { name: 'SICK', country: 'Germania' },
  { name: 'Parker', country: 'SUA' },
  { name: 'Bosch Rexroth', country: 'Germania' },
  { name: 'Festo', country: 'Germania' },
  { name: 'Schneider Electric', country: 'Franța' },
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
  { name: 'Mitutoyo', country: 'Japonia' }
];

// JSON-LD Schema for Certifications page
function generateCertificationsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${config.site.url}/certificari#webpage`,
    name: 'Certificări și autorizări - Infinitrade Romania',
    description: 'Certificări și documente Infinitrade Romania: înregistrare SEAP, documente de conformitate de la producător, ISO 9001 în curs de certificare.',
    url: `${config.site.url}/certificari`,
    isPartOf: {
      '@id': `${config.site.url}/#website`
    },
    about: {
      '@type': 'Organization',
      '@id': `${config.site.url}/#organization`,
    }
  };
}

export const metadata = {
  title: 'Certificări | Furnizor SEAP',
  description: 'Furnizor înregistrat SEAP/SICAP. Documente de conformitate CE, ATEX și SIL de la producător. ISO 9001 în curs de certificare. Documente pentru licitații.',
  keywords: [
    // SEAP / SICAP Primary keywords
    'furnizor SEAP',
    'furnizor SICAP',
    'furnizor inregistrat SEAP',
    'furnizor SEAP',
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
    // Partnership keywords
    'furnizor pompe industriale',
    // Quality keywords
    'certificate conformitate',
    'garantie producator',
    'conformitate ce',
    // Company keywords
    'driatheli group srl',
    'infinitrade romania'
  ],
  openGraph: {
    title: 'Furnizor SEAP SICAP | Certificări și autorizări | Infinitrade Romania',
    description: 'Furnizor înregistrat SEAP/SICAP. Distribuitor echipamente industriale pentru licitații publice și fonduri europene.',
    url: `${config.site.url}/certificari`,
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: `${config.site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Certificări și Autorizări - Infinitrade Romania',
      }
    ],
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
      }
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(certificationsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <Header />
      <main id="main-content" className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>Certificări și autorizări</h1>
            <p>
              Ce documente primiți de la noi, ce certificări au producătorii
              și ce putem confirma despre firmă, cu legături spre registrele publice.
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
                Ne asigurăm că fiecare client primește produse originale,
                documentație completă și suport tehnic profesionist.
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
              <h2>Producători din gama noastră</h2>
              <p>
                Câțiva dintre producătorii ale căror echipamente le furnizăm.
                Lista completă este în pagina de branduri.
              </p>
            </div>
            <div className={styles.partnersGrid}>
              {partners.map((partner, index) => (
                <div key={index} className={styles.partnerCard}>
                  <span className={styles.partnerName}>{partner.name}</span>
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
            <p className={styles.disclaimer}>
              <AlertCircle size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
              Link-urile de mai sus duc către site-uri externe operate de terți.
              Infinitrade nu controlează conținutul acestor site-uri.
            </p>
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
                  <p>Disponibil luni–vineri, 08:00–16:30. În afara programului, cererile se preiau în următoarea zi lucrătoare.</p>
                </div>
              </div>
              <div className={styles.qualityCard}>
                <AlertCircle className={styles.checkIcon} size={24} style={{color: '#f59e0b'}} />
                <div>
                  <h3>Garanție</h3>
                  <p>Conform termenilor producătorilor (de regulă 12–24 de luni, după producător). Nu oferim garanție extinsă proprie.</p>
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
                  <p>Din stocul nostru sau al furnizorului: 24–72 h. Pentru produsele fabricate la comandă, de regulă 1–4 săptămâni; raritățile, echipamentele și sistemele complexe pot depăși 4 săptămâni, în funcție de producător. Termenul curge de la plata avansului, comanda fermă, semnarea contractului sau, după caz, înscrierea noastră ca furnizor și se confirmă în ofertă.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2>Ai nevoie de documente pentru achiziții?</h2>
              <p>
                Furnizăm toate documentele necesare pentru dosarele de achiziție:
                certificate de conformitate, declarații, fișe tehnice.
              </p>
              <Link href="/contact" className={styles.ctaButton}>
                Solicită Documente
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

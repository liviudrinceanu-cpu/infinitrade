import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import styles from './faq.module.css';

const faqData = [
  {
    category: 'Produse si Comenzi',
    questions: [
      {
        q: 'Cum aleg pompa potrivita pentru aplicatia mea?',
        a: 'Selectia unei pompe industriale depinde de mai multi factori: debitul necesar (m³/h), presiunea de refulare (bar), tipul fluidului pompat, temperatura de lucru si mediul de instalare. Echipa noastra tehnica va ofera consultanta gratuita pentru dimensionarea corecta. Trimiteti-ne datele aplicatiei prin formularul de contact si va vom recomanda solutia optima.'
      },
      {
        q: 'Care sunt diferentele intre robineti cu bila si robineti fluture?',
        a: 'Robinetii cu bila ofera etansare perfecta (zero leakage) si sunt ideali pentru aplicatii on/off cu fluide curate sau usor vâscoase. Robinetii fluture sunt mai economici, ocupa mai putin spatiu si sunt potriviti pentru debite mari cu cadere de presiune redusa. Alegerea depinde de: presiunea de lucru, tipul fluidului, frecventa operarii si cerintele de etansare.'
      },
      {
        q: 'Ce tipuri de motoare electrice industriale aveti?',
        a: 'Oferim o gama completa: motoare asincrone trifazate (IE2, IE3, IE4), motoare ATEX pentru zone cu risc de explozie, servomotoare pentru aplicatii de precizie, motoreductoare integrate si convertizoare de frecventa. Branduri: Siemens, SEW Eurodrive, ABB, Bonfiglioli, WEG.'
      },
      {
        q: 'Aveti piese de schimb originale pentru echipamentele vandute?',
        a: 'Da, suntem distribuitori autorizati si oferim piese de schimb originale pentru toate brandurile din portofoliu: garnituri mecanice, rotoare, statoare, rulmenți, kituri de service complete. Piese originale = performanta garantata si durata de viata prelungita a echipamentelor.'
      },
    ]
  },
  {
    category: 'Livrare si Plata',
    questions: [
      {
        q: 'Cat dureaza livrarea produselor?',
        a: 'Produsele din stoc se livreaza in 24-72 ore lucratoare in toata Romania. Pentru echipamentele speciale sau configurate la comanda, termenul poate fi de 2-6 saptamâni, in functie de producator. La cerere, oferim si livrare expres pentru urgente de productie.'
      },
      {
        q: 'Oferiti livrare pe santiere si platforme industriale?',
        a: 'Da, livram direct la punctul de lucru specificat: santiere, fabrici, centrale, statii de pompare. Asiguram transport specializat pentru echipamente grele si voluminoase. Coordonatorii nostri logistici va pot ajuta cu programarea descarcarii.'
      },
      {
        q: 'Ce modalitati de plata acceptati?',
        a: 'Acceptam: transfer bancar (plata la termen pentru clienti cu istoric), plata la livrare (ramburs), card bancar, leasing operational sau financiar pentru investitii mari. Pentru proiecte mari oferim esalonare sau plata in transe.'
      },
      {
        q: 'Emiteti factura fiscala?',
        a: 'Da, suntem platitori de TVA si emitem factura fiscala pentru toate comenzile. Pentru achizitii din fonduri europene sau PNRR, oferim documentatia completa necesara.'
      },
    ]
  },
  {
    category: 'Suport Tehnic',
    questions: [
      {
        q: 'Oferiti consultanta tehnica pentru proiecte?',
        a: 'Da, consultanta tehnica este gratuita. Echipa noastra de ingineri va poate ajuta cu: dimensionarea echipamentelor, selectia materialelor potrivite, calculul eficientei energetice, integrarea in sisteme existente si specificatii pentru caietele de sarcini.'
      },
      {
        q: 'Faceti punere in functiune si service?',
        a: 'Oferim servicii complete de punere in functiune prin echipa proprie sau parteneri autorizati. De asemenea, asiguram service, mentenanta preventiva si reparatii pentru echipamentele din portofoliu. Intervenim rapid pentru urgente de productie.'
      },
      {
        q: 'Unde gasesc documentatia tehnica pentru produse?',
        a: 'Documentatia tehnica (fise tehnice, manuale, certificate, desene CAD) este disponibila la cerere. Trimiteti-ne un email cu codul produsului si va trimitem toate materialele necesare in format PDF sau DWG.'
      },
      {
        q: 'Oferiti garantie pentru produse?',
        a: 'Toate produsele beneficiaza de garantia producatorului, de obicei 12-24 luni. Garantia acopera defectele de fabricatie si materiale. Pentru garantie extinsa sau contracte de mentenanta, contactati-ne pentru o oferta personalizata.'
      },
    ]
  },
  {
    category: 'Despre Infinitrade',
    questions: [
      {
        q: 'Ce branduri distribuiti?',
        a: 'Suntem distribuitori autorizati pentru peste 45 de branduri internationale: Grundfos, Wilo, KSB (pompe), ARI Armaturen, Spirax Sarco (robineti), Siemens, SEW, ABB (motoare), Alfa Laval, Kelvion (schimbatoare caldura), Becker, FPZ (suflante). Lista completa pe site.'
      },
      {
        q: 'In ce industrii activati?',
        a: 'Furnizam echipamente pentru: petrochimie si rafinarii, centrale electrice si termoficare, industria alimentara si farmaceutica, tratarea apei si statii de epurare, constructii si HVAC industrial, minerit si extractie, automotive si logistica.'
      },
      {
        q: 'Participati la licitatii SEAP/SICAP?',
        a: 'Da, suntem inscrisi in SEAP si participam regulat la licitatii publice. Avem experienta in furnizarea de echipamente pentru institutii publice, companii de stat si proiecte finantate european. Oferim toate documentele necesare pentru dosarul de achizitie.'
      },
      {
        q: 'Cum va pot contacta?',
        a: 'Ne gasiti la sediul din Ghiroda, Timis. Email: secretariat@infinitrade-romania.ro. Programul de lucru: Luni-Vineri 08:00-17:00. Formularul de contact de pe site este monitorizat si raspundem in maxim 24h.'
      },
    ]
  },
];

// Generate FAQ JSON-LD
function generateFaqJsonLd() {
  const allQuestions = faqData.flatMap(cat => cat.questions);
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export const metadata = {
  title: 'Intrebari Frecvente (FAQ) | Echipamente Industriale',
  description: 'Raspunsuri la cele mai frecvente intrebari despre echipamente industriale: pompe, robineti, motoare, schimbatoare caldura. Consultanta tehnica gratuita.',
  keywords: [
    'faq echipamente industriale',
    'intrebari pompe industriale',
    'cum aleg pompa',
    'diferente robineti',
    'livrare echipamente industriale',
    'piese schimb originale',
    'garantie echipamente industriale',
  ],
  openGraph: {
    title: 'Intrebari Frecvente (FAQ) | Echipamente Industriale',
    description: 'Gaseste raspunsuri la intrebarile despre echipamente industriale.',
    url: 'https://infinitrade.ro/faq',
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
  },
  alternates: {
    canonical: 'https://infinitrade.ro/faq',
  },
};

export default function FAQPage() {
  const jsonLd = generateFaqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>Intrebari Frecvente</h1>
            <p>
              Gaseste raspunsuri la cele mai frecvente intrebari despre echipamentele
              industriale, livrare, plata si suport tehnic.
            </p>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            {faqData.map((category, catIndex) => (
              <div key={catIndex} className={styles.faqCategory}>
                <h2 className={styles.categoryTitle}>{category.category}</h2>
                <div className={styles.questionsList}>
                  {category.questions.map((item, qIndex) => (
                    <details key={qIndex} className={styles.faqItem}>
                      <summary className={styles.question}>
                        <span>{item.q}</span>
                        <ChevronDown className={styles.chevron} size={20} />
                      </summary>
                      <div className={styles.answer}>
                        <p>{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2>Nu ai gasit raspunsul?</h2>
              <p>
                Echipa noastra tehnica este gata sa te ajute cu orice intrebare
                despre echipamente industriale.
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

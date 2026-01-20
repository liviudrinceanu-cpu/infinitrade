import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import styles from './faq.module.css';

const faqData = [
  {
    category: 'Produse și Comenzi',
    questions: [
      {
        q: 'Cum aleg pompa potrivită pentru aplicația mea?',
        a: 'Cel mai simplu: trimite-ne datele aplicației (debit, presiune, ce fluid, temperatură) și ne ocupăm noi de dimensionare. E gratis și durează de obicei 24h. Dacă vrei să înțelegi mai bine procesul, avem un articol pe blog despre selectarea pompelor - acolo explicăm criteriile pas cu pas.'
      },
      {
        q: 'Care sunt diferențele între robineți cu bilă și robineți fluture?',
        a: 'Pe scurt: bila pentru când contează etanșarea (gaze, fluide scumpe), fluture pentru când contează prețul și spațiul (apă, HVAC). Bila e mai scumpă dar nu lasă nimic să treacă. Fluture e mai ieftin, mai compact, dar nu are aceeași etanșare. Pentru gaze, întotdeauna bilă. Pentru apă industrială, fluture merge perfect.'
      },
      {
        q: 'Ce tipuri de motoare electrice industriale aveți?',
        a: 'Cam tot ce ai nevoie: de la motoare asincrone standard (IE3, IE4) până la ATEX pentru zone cu risc de explozie. Lucrăm cu Siemens, ABB și SEW - trei branduri care acoperă 95% din aplicații. Dacă ai nevoie de ceva specific, spune-ne și vedem ce soluție găsim.'
      },
      {
        q: 'Aveți piese de schimb originale?',
        a: 'Da, pentru tot ce vindem. Garnituri mecanice, rotoare, rulmenți, kituri complete - le avem pe cele curente în stoc sau le comandăm rapid. Sfatul nostru: piesele originale par mai scumpe, dar durează de 2-3 ori mai mult. Pe termen lung, ies mai ieftine.'
      },
    ]
  },
  {
    category: 'Livrare și Plată',
    questions: [
      {
        q: 'Cât durează livrarea?',
        a: 'Ce avem în stoc: 24-72h în toată România. Ce trebuie comandat de la producător: 2-6 săptămâni, depinde de ce e. Pentru urgențe de producție, sună-ne direct - găsim soluție, fie din stocul altui distribuitor, fie cu livrare expres.'
      },
      {
        q: 'Livrați pe șantier sau direct în fabrică?',
        a: 'Da, oriunde e nevoie. Am livrat în rafinării, pe platforme offshore, în centrale electrice - nu e problemă locația. Pentru echipamente grele avem transport specializat. Coordonăm descărcarea cu echipa ta.'
      },
      {
        q: 'Ce modalități de plată acceptați?',
        a: 'Transfer bancar (cu termen pentru clienții cu istoric), ramburs la livrare, card. Pentru investiții mai mari putem discuta leasing sau plată în tranșe - depinde de situație.'
      },
      {
        q: 'Emiți factură fiscală?',
        a: 'Bineînțeles, suntem plătitori de TVA. Pentru achiziții din fonduri europene sau PNRR, pregătim toată documentația necesară - certificate, declarații, fișe tehnice, ce mai cere dosarul.'
      },
    ]
  },
  {
    category: 'Suport Tehnic',
    questions: [
      {
        q: 'Oferiți consultanță tehnică?',
        a: 'Da, și e gratuită. Dimensionare echipamente, selectare materiale, calcul eficiență - facem asta zilnic. Trimite-ne datele și răspundem în 24h cu recomandare. Nu ai obligația să cumperi de la noi doar pentru că te-am ajutat cu consultanță.'
      },
      {
        q: 'Faceți punere în funcțiune și service?',
        a: 'Punere în funcțiune: da, fie cu echipa noastră, fie cu parteneri autorizați, depinde de echipament și zonă. Service și mentenanță: da, pentru ce avem în portofoliu. Pentru urgențe, sună-ne - încercăm să intervenim cât mai repede.'
      },
      {
        q: 'Unde găsesc documentația tehnică?',
        a: 'Scrie-ne pe email cu codul produsului și îți trimitem ce ai nevoie: fișă tehnică, manual, certificat, desen CAD. Majoritatea documentelor le avem, pentru rest comandăm de la producător. Durează de obicei 1-2 zile.'
      },
      {
        q: 'Ce garanție au produsele?',
        a: 'Garanția producătorului, de obicei 12-24 luni. Acoperă defecte de fabricație, nu uzura normală sau folosirea greșită. Păstrează documentele și respectă condițiile de operare - altfel pot apărea probleme cu reclamațiile.'
      },
    ]
  },
  {
    category: 'Despre Infinitrade',
    questions: [
      {
        q: 'Ce branduri distribuiți?',
        a: 'Peste 45 de branduri, dintre care cele mai cerute: Grundfos și Wilo la pompe, Siemens și ABB la motoare, ARI Armaturen și Spirax Sarco la robineți, Alfa Laval la schimbătoare, Becker la suflante. Lista completă e pe site, la fiecare categorie.'
      },
      {
        q: 'În ce industrii lucrați?',
        a: 'Cam în toate care au nevoie de echipamente industriale: petrochimie, energie, alimentar, farmaceutic, tratare apă, construcții/HVAC, minerit. Avem experiență specifică în fiecare domeniu și știm ce funcționează.'
      },
      {
        q: 'Participați la licitații SEAP?',
        a: 'Da, suntem înscriși și participăm regulat. Am livrat pentru instituții publice, companii de stat, proiecte europene. Știm ce documente trebuie și cum să le pregătim ca să nu pierzi timp.'
      },
      {
        q: 'Cum vă pot contacta?',
        a: 'Email: secretariat@infinitrade-romania.ro. Telefon: vezi pagina de contact. Program: luni-vineri, 8:00-17:00. Sau trimite formularul de pe site - răspundem în maxim 24h în zilele lucrătoare.'
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
      <main id="main-content" className={styles.main}>
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

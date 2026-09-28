import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import styles from './faq.module.css';
import { brandCount } from '@/data/siteStats';

export const revalidate = 86400;

const faqData = [
  {
    category: 'Produse și Comenzi',
    questions: [
      {
        q: 'Cum aleg pompa potrivită pentru aplicația mea?',
        a: 'Cel mai simplu: trimiteți-ne datele aplicației (debit, presiune, fluidul vehiculat, temperatură) și ne ocupăm noi de dimensionare. Este gratuit și răspundem de regulă în aceeași zi lucrătoare sau în următoarea. Pentru înțelegerea procesului de selecție, este disponibil un articol pe blog despre selectarea pompelor, cu criteriile explicate pas cu pas.',
        link: { href: '/pompe-industriale', text: 'Vedeți gama de pompe industriale' }
      },
      {
        q: 'Care sunt diferențele între robineți cu bilă și robineți fluture?',
        a: 'Pe scurt: robinetul cu bilă se alege când contează etanșarea (gaze, fluide scumpe sau periculoase), robinetul fluture când contează spațiul și costul la diametre mari (apă, HVAC). Robinetul cu bilă are etanșare mai bună; cel fluture este mai compact și mai ușor. Pentru gaze se folosește de regulă robinetul cu bilă; pentru apă industrială, robinetul fluture este o alegere uzuală.',
      },
      {
        q: 'Ce tipuri de motoare electrice industriale aveți?',
        a: 'De la motoare asincrone standard în clasele de eficiență IE3 și IE4 până la motoare pentru zone cu risc de explozie (ATEX), de la Siemens, ABB, SEW și alți producători din catalog. Pentru cerințe speciale, trimiteți-ne datele de pe plăcuță sau specificația.',
      },
      {
        q: 'Aveți piese de schimb originale?',
        a: 'Da: garnituri mecanice, rotoare, rulmenți, kituri de reparație, identificate după codul de pe plăcuță sau din documentația producătorului. Reperele uzuale se livrează din stoc, restul se comandă la producător; disponibilitatea și termenul se confirmă în ofertă.',
      },
    ]
  },
  {
    category: 'Livrare și Plată',
    questions: [
      {
        q: 'Cât durează livrarea?',
        a: 'Pentru reperele aflate în stocul nostru sau în stoc extern: 24–72 h. Pentru produsele fabricate la comandă: de regulă 1–4 săptămâni; raritățile, echipamentele și sistemele complexe pot depăși 4 săptămâni, în funcție de producător și de rezervarea capacității lui de producție. Termenul curge de la plata avansului, comanda fermă, semnarea contractului sau, după caz, înscrierea noastră ca furnizor. Pentru urgențe de producție, vă rugăm să ne sunați: căutăm soluția cea mai rapidă, din stocul propriu sau prin rețeaua de furnizori.'
      },
      {
        q: 'Livrați pe șantier sau direct în fabrică?',
        a: 'Da, livrăm pe șantier sau direct în fabrică, indiferent de locație. Pentru echipamente grele asigurăm transport specializat și coordonăm descărcarea cu echipa dumneavoastră.'
      },
      {
        q: 'Ce modalități de plată acceptați?',
        a: 'Transfer bancar, cu termen de plată de regulă 30–60 de zile pentru clienții cu contract; pentru comenzi mici, și plată la livrare sau cu cardul. Pentru investiții mari se pot discuta plăți în tranșe. Condițiile se precizează în fiecare ofertă.'
      },
      {
        q: 'Emiteți factură fiscală?',
        a: 'Da, suntem plătitori de TVA, iar facturile către firme se emit prin sistemul RO e-Factura, obligatoriu pentru tranzacțiile între firme. Pentru achiziții din fonduri europene sau PNRR pregătim documentele cerute de dosar: certificate, declarații, fișe tehnice.'
      },
    ]
  },
  {
    category: 'Suport Tehnic',
    questions: [
      {
        q: 'Oferiți consultanță tehnică?',
        a: 'Da, și e gratuită. Dimensionare echipamente, selectare materiale, calcul eficiență. Trimiteți-ne datele; răspundem de regulă în aceeași zi lucrătoare sau în următoarea, cu recomandare. Nu aveți obligația să achiziționați de la noi doar pentru că ați beneficiat de consultanță.'
      },
      {
        q: 'Faceți punere în funcțiune și service?',
        a: 'Pentru punerea în funcțiune și service, soluția depinde de echipament și de zonă: lucrăm cu echipele de service ale producătorilor sau cu firme specializate, pe care le indicăm în ofertă. Pentru urgențe, vă rugăm să ne sunați.'
      },
      {
        q: 'Unde găsesc documentația tehnică?',
        a: 'Scrieți-ne codul produsului și vă trimitem documentația disponibilă: fișă tehnică, manual, certificat, desen CAD. Ce nu avem, cerem de la producător; vă spunem termenul la primirea cererii.'
      },
      {
        q: 'Ce garanție au produsele?',
        a: 'Garanția producătorului, de obicei 12-24 luni. Acoperă defecte de fabricație, nu uzura normală sau folosirea greșită. Vă recomandăm să păstrați documentele și să respectați condițiile de operare - altfel pot apărea probleme cu reclamațiile.'
      },
    ]
  },
  {
    category: 'Despre Infinitrade',
    questions: [
      {
        q: 'Ce branduri distribuiți?',
        a: `${brandCount} de branduri cu pagină proprie, din 16 categorii, de exemplu: Grundfos și Wilo la pompe, Siemens și ABB la motoare, ARI Armaturen și Spirax Sarco la robineți, Alfa Laval la schimbătoare, Becker la suflante, Endress+Hauser și WIKA la senzori, Parker și Bosch Rexroth la hidraulică, Schneider Electric la automatizări. Lista completă e pe site, la fiecare categorie.`
      },
      {
        q: 'În ce industrii lucrați?',
        a: 'Primim cereri din petrochimie, energie, alimentar, farmaceutic, tratare apă, construcții/HVAC, minerit, automotive, metalurgie, ciment, hârtie, logistică, biogaz și construcții navale. Pentru 15 dintre ele avem pagini dedicate, cu echipamentele cerute frecvent și datele de trimis pentru ofertă.'
      },
      {
        q: 'Cum vă pot contacta?',
        a: 'Email: secretariat@infinitrade-romania.ro. Telefon: +40 371 232 404. Program: luni–vineri, 08:00–16:30. Sau trimiteți formularul de pe site - răspundem de regulă în aceeași zi lucrătoare sau în următoarea.',
        link: { href: '/contact', text: 'Mergeți la pagina de contact' }
      },
    ]
  },
  {
    category: 'Echipamente Specializate',
    questions: [
      {
        q: 'Ce soluții de automatizare industrială oferiți?',
        a: 'PLC-uri, panouri HMI, senzori de proximitate, convertizoare de frecvență și componente SCADA de la Siemens, ABB, Schneider Electric, Festo și alți producători din catalog. Ofertăm atât componente separate, cât și pe listă, pentru un tablou sau o linie.',
        link: { href: '/automatizari-industriale', text: 'Vedeți gama de automatizări industriale' }
      },
      {
        q: 'Aveți senzori și instrumente certificate ATEX?',
        a: 'Da, furnizăm senzori și transmițătoare certificate de producător pentru zone cu risc de explozie (ATEX, IECEx), de exemplu de la Endress+Hauser, WIKA și SICK: presiune, temperatură, nivel, debit. Livrăm cu documentele producătorului: certificat ATEX, declarație de conformitate, fișă tehnică.',
        link: { href: '/senzori-instrumentatie', text: 'Vedeți senzori și instrumentație' }
      },
      {
        q: 'Aveți componente hidraulice pentru utilaje grele?',
        a: 'Da: cilindri, pompe, distribuitoare și valve proporționale, furtunuri și racorduri, de la Parker, Bosch Rexroth și alți producători din catalog. Dacă aveți o schemă hidraulică sau o listă de componente, pregătim oferta pe poziții.',
        link: { href: '/componente-hidraulice-pneumatice', text: 'Vedeți componente hidraulice și pneumatice' }
      },
      {
        q: 'Aveți filtre de schimb pentru compresoare și instalații?',
        a: 'Da: filtre de aer pentru compresoare, filtre de ulei, filtre hidraulice și cartușe pentru desprăfuire, de la Donaldson, Mann+Hummel, Parker și alți producători. Reperele uzuale se livrează din stoc în 24–72 h; restul, de regulă în 1–4 săptămâni. Recomandăm filtre originale sau echivalente cu specificație confirmată.',
        link: { href: '/filtre-consumabile', text: 'Vedeți filtre și consumabile' }
      },
      {
        q: 'Ce lubrifianți industriali aveți pentru reductoare?',
        a: 'Lubrifianți sintetici și minerali de la Shell, Klüber, Mobil și alți producători: uleiuri pentru reductoare (CLP, PAO, PAG), unsori pentru rulmenți, fluide hidraulice, inclusiv variante pentru industria alimentară și temperaturi extreme. Recomandarea se face pe baza fișei tehnice a echipamentului.',
        link: { href: '/lubrifianti-chimice', text: 'Vedeți lubrifianți și produse chimice' }
      },
      {
        q: 'Aveți instrumente de măsură Mitutoyo sau similare?',
        a: 'Da: șublere, micrometre, comparatoare, rugozimetre, de la Mitutoyo și alți producători, plus scule de mână și truse pentru mentenanță. Le putem include în aceeași ofertă cu echipamentele principale.',
        link: { href: '/scule-instrumente', text: 'Vedeți scule și instrumente' }
      },
      {
        q: 'Aveți chillere industriale Carrier sau Daikin?',
        a: 'Da, furnizăm echipamente termice de la Carrier, Daikin și alți producători: chillere, pompe de căldură, unități de tratare a aerului, ventiloconvectoare, pentru răcirea proceselor industriale sau climatizare. Pentru dimensionare avem nevoie de sarcina termică și de condițiile de lucru.',
        link: { href: '/echipamente-termice', text: 'Vedeți echipamente termice și HVAC' }
      },
      {
        q: 'Aveți tablouri electrice și protecții motor?',
        a: 'Da: contactoare, întrerupătoare, protecții de motor, relee termice, de la Schneider Electric, Siemens și alți producători. Ofertăm componente separate sau pe listă, pentru un tablou întreg.',
        link: { href: '/echipamente-electrice', text: 'Vedeți echipamente electrice' }
      },
      {
        q: 'Aveți rulmenți SKF sau FAG în stoc?',
        a: 'Rulmenți SKF, FAG (Schaeffler), NSK și alți producători: cu bile, cu role conice, oscilanți, axiali, plus bucșe, cuplaje și curele de transmisie Gates. Trimiteți codul; vă confirmăm disponibilitatea și termenul în ofertă.',
        link: { href: '/componente-mecanice', text: 'Vedeți componente mecanice' }
      },
      {
        q: 'Câte categorii de echipamente distribuiți?',
        a: `Acoperim 16 categorii de echipamente industriale cu ${brandCount} de branduri cu pagină proprie: de la pompe și robineți (nucleul activității din 2009) până la automatizări, senzori, hidraulică, echipamente electrice, filtre, lubrifianți, scule, echipamente termice, aparate de măsură și testare. Puteți cere o singură ofertă pentru o listă care acoperă mai multe categorii.`,
      },
    ]
  },
  {
    category: 'Licitații SEAP / SICAP',
    questions: [
      {
        q: 'Sunteți furnizor înregistrat în SEAP/SICAP?',
        a: 'Da, suntem operator economic înregistrat și activ în Sistemul Electronic de Achiziții Publice. Contractele publice atribuite se pot verifica pe e-licitatie.ro după CUI (RO26209397).',
        link: { href: '/ghid-achizitii-seap', text: 'Vedeți ghidul pentru achiziții publice' }
      },
      {
        q: 'Ce documente pregătiți pentru licitații publice?',
        a: 'Documentele necesare pentru dosarul de achiziție: certificate de conformitate CE, declarații de conformitate, fișe tehnice complete, certificate de garanție, documente de origine. Le pregătim în format electronic, gata de încărcat în SEAP.'
      },
      {
        q: 'Livrați pentru proiecte cu fonduri europene?',
        a: 'Da. Pentru proiectele finanțate din fonduri europene sau PNRR pregătim documentele cerute de dosar (declarații de conformitate, fișe tehnice, certificate de origine și de garanție) și respectăm termenele scrise în ofertă.'
      },
      {
        q: 'Puteți participa la achiziții directe sub prag?',
        a: 'Da. Pentru achizițiile directe (sub 270.120 lei fără TVA la produse și servicii), oferta vine de regulă în aceeași zi lucrătoare sau în următoarea, cu termenul de livrare scris.'
      },
      {
        q: 'Cum mă ajutați cu caietul de sarcini?',
        a: 'Dacă sunteți în faza de pregătire a caietului de sarcini, putem oferi consultanță tehnică gratuită: specificații corecte, parametri realiști, alternative tehnice. Aceasta ajută la obținerea unor oferte comparabile și la evitarea contestațiilor.',
        link: { href: '/ghid-achizitii-seap', text: 'Vedeți ghidul complet pentru achiziții SEAP' }
      },
      {
        q: 'Cum verific contractele publice anterioare?',
        a: 'Contractele publice atribuite sunt publice în SEAP și se pot verifica pe e-licitatie.ro după CUI (RO26209397). Pentru o procedură anume, trimitem documentele de experiență similară cerute în fișa de date.'
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
  title: 'FAQ | Întrebări Frecvente',
  description: 'Răspunsuri despre echipamente industriale și achiziții SEAP/SICAP: pompe, robineți, motoare, licitații. Consultanță gratuită.',
  openGraph: {
    title: 'Întrebări Frecvente (FAQ) | Echipamente Industriale',
    description: 'Găsiți răspunsuri la întrebările despre echipamente industriale.',
    url: `${config.site.url}/faq`,
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: `${config.site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'FAQ Echipamente Industriale - Infinitrade Romania',
      }
    ],
  },
  alternates: {
    canonical: `${config.site.url}/faq`,
  },
};

export default function FAQPage() {
  const jsonLd = generateFaqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <Header />
      <main id="main-content" className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>Întrebări Frecvente</h1>
            <p>
              Găsiți răspunsuri la cele mai frecvente întrebări despre echipamentele
              industriale, livrare, plată și suport tehnic.
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
                        {item.link && (
                          <Link href={item.link.href} className={styles.answerLink}>
                            {item.link.text} &rarr;
                          </Link>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-xs text-gray-400 mt-8 text-center">
              Ultima actualizare: Februarie 2026
            </p>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2>Nu ați găsit răspunsul?</h2>
              <p>
                Echipa noastră tehnică este gata să vă ajute cu orice întrebare
                despre echipamente industriale.
              </p>
              <Link href="/contact" className={styles.ctaButton}>
                Contactați-ne
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

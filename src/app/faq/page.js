import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import styles from './faq.module.css';

export const revalidate = 86400;

const faqData = [
  {
    category: 'Produse și Comenzi',
    questions: [
      {
        q: 'Cum aleg pompa potrivită pentru aplicația mea?',
        a: 'Cel mai simplu: trimite-ne datele aplicației (debit, presiune, ce fluid pompezi, temperatură) și ne ocupăm noi de dimensionare. E gratis și răspundem de obicei în 24h - uneori mai repede dacă nu-i aglomerat. Dacă vrei să înțelegi și tu procesul, avem un articol pe blog despre selectarea pompelor unde explicăm criteriile pas cu pas.',
        link: { href: '/pompe-industriale', text: 'Vezi gama de pompe industriale' }
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
        a: 'Da, pentru tot ce vindem. Garnituri mecanice, rotoare, rulmenți, kituri complete - pe cele curente le avem în stoc, restul le comandăm (și de obicei vin repede). Sfatul nostru: piesele originale par mai scumpe la prima vedere, dar durează de 2-3 ori mai mult. La final de calcul, tot ele ies mai ieftine.'
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
        a: 'Peste 400 de branduri din 15 categorii, dintre care cele mai cerute: Grundfos și Wilo la pompe, Siemens și ABB la motoare, ARI Armaturen și Spirax Sarco la robineți, Alfa Laval la schimbătoare, Becker la suflante, Endress+Hauser și WIKA la senzori, Parker și Bosch Rexroth la hidraulică, Schneider Electric la automatizări. Lista completă e pe site, la fiecare categorie.'
      },
      {
        q: 'În ce industrii lucrați?',
        a: 'Cam în toate care au nevoie de echipamente industriale: petrochimie, energie, alimentar, farmaceutic, tratare apă, construcții/HVAC, minerit, automotive, metalurgie, ciment, hârtie, logistică, biogaz și construcții navale. 15 industrii - și în fiecare avem proiecte concrete și clienți mulțumiți.'
      },
      {
        q: 'Cum vă pot contacta?',
        a: 'Email: secretariat@infinitrade-romania.ro. Telefon: vezi pagina de contact. Program: luni-vineri, 8:00-17:00. Sau trimite formularul de pe site - răspundem în maxim 24h în zilele lucrătoare.',
        link: { href: '/contact', text: 'Mergi la pagina de contact' }
      },
    ]
  },
  {
    category: 'Echipamente Specializate',
    questions: [
      {
        q: 'Ce soluții de automatizare industrială oferiți?',
        a: 'Avem tot ce ține de automatizare: PLC-uri Siemens și ABB, panouri HMI, senzori de proximitate, convertizoare de frecvență, sisteme SCADA. Lucrăm mult cu Schneider Electric și Festo pe partea de control. Dacă ai nevoie de un tablou complet configurat sau doar de un senzor - sună-ne, găsim soluția potrivită.',
        link: { href: '/automatizari-industriale', text: 'Vezi gama de automatizări industriale' }
      },
      {
        q: 'Aveți senzori și instrumente certificate ATEX?',
        a: 'Da, avem senzori ATEX și IECEx de la Endress+Hauser, WIKA și SICK - transmițătoare de presiune, temperatură, nivel și debit pentru zone Ex. Am echipat rafinării și platforme chimice cu sute de instrumente certificate. Livrăm cu toată documentația: certificate ATEX, fișe de siguranță, declarații de conformitate.',
        link: { href: '/senzori-instrumentatie', text: 'Vezi senzori și instrumentație' }
      },
      {
        q: 'Aveți componente hidraulice pentru utilaje grele?',
        a: 'Da, lucrăm cu Parker și Bosch Rexroth pe hidraulică - cilindri, pompe, valve proporționale, furtunuri, racorduri. De la sisteme hidraulice pentru prese de 500 tone până la cilindri de schimb pentru excavatoare. Dacă ai o schemă hidraulică, o analizăm și facem ofertă pe componente.',
        link: { href: '/componente-hidraulice-pneumatice', text: 'Vezi componente hidraulice și pneumatice' }
      },
      {
        q: 'Aveți filtre de schimb pentru compresoare și instalații?',
        a: 'Da, filtre originale și compatibile de la Donaldson, Mann+Hummel, Parker. Filtre aer compresor, filtre ulei, filtre hidraulice, cartușe pentru deprăfuire. Cele curente le avem în stoc, restul vin în 3-5 zile. Sfat de la noi: nu economisi la filtre - un filtru ieftin te costă de 10 ori mai mult în reparații.',
        link: { href: '/filtre-consumabile', text: 'Vezi filtre și consumabile' }
      },
      {
        q: 'Ce lubrifianți industriali aveți pentru reductoare?',
        a: 'Lubrifianți sintetici și minerali de la Shell, Klüber, Mobil - uleiuri pentru reductoare (CLP, PAO, PAG), grăsimi pentru rulmenți, fluide hidraulice. Klüber e alegerea noastră pentru aplicații speciale (temperaturi extreme, industrie alimentară). Putem face și recomandare pe baza fișei echipamentului.',
        link: { href: '/lubrifianti-chimice', text: 'Vezi lubrifianți și produse chimice' }
      },
      {
        q: 'Aveți instrumente de măsură Mitutoyo sau similare?',
        a: 'Avem instrumente de măsură de la mai multe branduri: șublere, micrometre, comparatoare, rugozimetre. Plus scule de mână profesionale și truse pentru mentenanță. Nu suntem magazin de scule (hai să fim sinceri), dar pentru clienții care cumpără echipamente mari, adăugăm și sculele necesare în pachet.',
        link: { href: '/scule-instrumente', text: 'Vezi scule și instrumente' }
      },
      {
        q: 'Aveți chillere industriale Carrier sau Daikin?',
        a: 'Da, lucrăm cu Carrier, Daikin și alți producători pe echipamente termice - chillere, pompe de căldură, unități de tratare aer, ventiloconvectoare. De la răcire procese industriale (turnare, sudură) până la climatizare data center-uri. Dimensionăm gratuit pe baza sarcinii termice.',
        link: { href: '/echipamente-termice', text: 'Vezi echipamente termice și HVAC' }
      },
      {
        q: 'Aveți tablouri electrice și protecții motor?',
        a: 'Da - contactoare, întrerupătoare, protecții motor, relee termice, de la Schneider Electric și Siemens. Fie componente separate, fie tablouri asamblate. Pentru proiecte mai mari, putem livra tablouri complete cu schemă și certificare.',
        link: { href: '/echipamente-electrice', text: 'Vezi echipamente electrice' }
      },
      {
        q: 'Aveți rulmenți SKF sau FAG în stoc?',
        a: 'Rulmenți SKF, FAG (Schaeffler), NSK - da, cele mai cerute dimensiuni le avem în stoc. Rulmenți cu bile, cu role conice, oscilatori, axiali. Plus bucșe, cuplaje, curele de transmisie de la Gates. Dacă ai codul, verificăm disponibilitatea pe loc.',
        link: { href: '/componente-mecanice', text: 'Vezi componente mecanice' }
      },
      {
        q: 'Câte categorii de echipamente distribuiți?',
        a: 'Acoperim 15 categorii de echipamente industriale cu peste 400 de branduri: de la pompe și robineți (nucleul nostru din 2009) până la automatizări, senzori, hidraulică, electrice, filtre, lubrifianți, scule, echipamente termice. Practic, tot ce ai nevoie într-o fabrică sau pe un șantier industrial - fără să alergi la 10 furnizori diferiți.',
      },
    ]
  },
  {
    category: 'Licitații SEAP / SICAP',
    questions: [
      {
        q: 'Sunteți furnizor înregistrat în SEAP/SICAP?',
        a: 'Da, suntem operator economic verificat și activ în Sistemul Electronic de Achiziții Publice. Am participat și câștigat zeci de licitații pentru instituții publice, primării, spitale, companii de stat. Avem experiență concretă cu procedurile SEAP.',
        link: { href: '/ghid-achizitii-seap', text: 'Vezi ghidul pentru achiziții publice' }
      },
      {
        q: 'Ce documente pregătiți pentru licitații publice?',
        a: 'Tot ce ai nevoie pentru dosarul de achiziție: certificate de conformitate CE, declarații de conformitate, fișe tehnice complete, certificate de garanție, documente de origine. Le pregătim în format electronic, gata de încărcat în SEAP.'
      },
      {
        q: 'Livrați pentru proiecte cu fonduri europene?',
        a: 'Da, avem experiență cu proiecte finanțate din fonduri europene și PNRR. Știm ce documentație specifică e necesară și cum să o pregătim corect. Am livrat pentru proiecte de modernizare stații de epurare, centrale termice, fabrici.'
      },
      {
        q: 'Puteți participa la achiziții directe sub prag?',
        a: 'Desigur. Pentru achizițiile directe sub pragul de licitație, putem trimite oferta în aceeași zi. Avem toate documentele pregătite și stocuri disponibile pentru livrare rapidă.'
      },
      {
        q: 'Cum mă ajutați cu caietul de sarcini?',
        a: 'Dacă ești în faza de pregătire a caietului de sarcini, putem oferi consultanță tehnică gratuită: specificații corecte, parametri realiști, alternative tehnice. Asta ajută să primești oferte comparabile și să eviți contestații.',
        link: { href: '/ghid-achizitii-seap', text: 'Vezi ghidul complet pentru achiziții SEAP' }
      },
      {
        q: 'Aveți istoric de contracte publice?',
        a: 'Da, avem un istoric solid de contracte îndeplinite pentru autorități publice. Putem furniza referințe și documente care atestă experiența similară dacă ai nevoie pentru evaluarea ofertelor.'
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
    title: 'Intrebari Frecvente (FAQ) | Echipamente Industriale',
    description: 'Gaseste raspunsuri la intrebarile despre echipamente industriale.',
    url: `${config.site.url}/faq`,
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
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

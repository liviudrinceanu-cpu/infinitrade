import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
import { allCategoriesUnified } from '@/data/allBrandsIndex';
import { getUsBrands, US_INDUSTRIES, EU_AVAILABILITY_LABEL } from '@/data/usBrands';
import { lastModified } from '@/data/lastModified';
import { Flag } from 'lucide-react';
import base from '../brand/brand-index.module.css';
import styles from './branduri-sua.module.css';

// /branduri-sua — Branduri-500 v12 (D-2026-09-26, owner request): one hub
// page for every American manufacturer with a page on the site, grouped by
// category and by the industries that consume their equipment, with a
// dedicated block for brands that are hard to source in Europe. Plain HTML
// links (crawl path), one URL, no per-category "US" sub-pages (no doorway
// pages: the category pages carry their own "Branduri din SUA" block).

const PAGE_URL = `${config.site.url}/branduri-sua`;

const FAQ = (total, hard) => [
  {
    q: 'Livrați echipamente de la producători americani în România?',
    a: `Da. Pe site avem ${total} de branduri cu sediul în SUA, fiecare cu pagină proprie (game, coduri de produs, întrebări frecvente). Le aducem la comandă, prin filialele sau distribuitorii europeni ai producătorului acolo unde există, sau prin import direct din SUA; pagina fiecărui brand spune exact ce putem și ce nu putem confirma.`,
  },
  {
    q: 'Cât durează livrarea unui brand american fără distribuție în Europa?',
    a: `Termenul orientativ este de 2–6 săptămâni la comandă, în funcție de confirmarea producătorului și de transport. Pentru ${hard} dintre branduri nu am identificat o rețea de distribuție vizibilă în Europa, deci comanda pleacă direct la producător; le marcăm explicit în listă.`,
  },
  {
    q: 'Ce trebuie să trimit ca să primesc o ofertă pentru o piesă americană?',
    a: 'Codul de produs sau de model exact așa cum apare pe plăcuța echipamentului sau în documentația originală, cantitatea și, dacă există, fișa tehnică sau o fotografie a plăcuței. Codurile publicate pe paginile de brand sunt culese din cataloagele oficiale ale producătorilor și ajută la identificare, nu înlocuiesc confirmarea la producător.',
  },
  {
    q: 'Aveți în depozit branduri din SUA?',
    a: 'Nu ținem pe raft gamele producătorilor americani; aducem la comandă. Pentru fiecare cerere verificăm disponibilitatea și termenul la producător sau la filiala lui europeană înainte de a confirma oferta.',
  },
  {
    q: 'De ce contează brandurile americane pentru automotive și petrol și gaze?',
    a: 'Multe linii de producție auto și instalații de petrol și gaze din România și Europa sunt proiectate pe standarde și componente americane (API, ASME, NEMA), iar piesele de schimb trebuie să fie de la același producător ca la punerea în funcțiune. Un înlocuitor european nu este întotdeauna compatibil dimensional sau certificat pentru aceeași aplicație.',
  },
];

export async function generateMetadata() {
  const brands = getUsBrands();
  const total = brands.length;
  const title = `Branduri din SUA (${total}) | Producători americani de echipamente industriale`;
  const description = `${total} de producători americani de echipamente și componente industriale pe care îi aducem în România: robineți, pompe, instrumentație, scule, hidraulică, motoare. Pe categorii și industrii (automotive, petrol și gaze, energie), cu brandurile greu de găsit în Europa marcate.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: PAGE_URL },
    openGraph: { title, description, url: PAGE_URL, siteName: 'Infinitrade Romania', locale: 'ro_RO', type: 'website' },
    robots: { index: true, follow: true },
  };
}

export default function UsBrandsPage() {
  const brands = getUsBrands();
  const total = brands.length;
  const published = brands.filter((b) => b.hasContent);
  const hard = brands.filter((b) => b.euAvailability === 'dificila');
  const faq = FAQ(total, hard.length);

  // Per category, in the order of the site's category list; a brand shows
  // under every category it belongs to (primary + secondary).
  const byCategory = allCategoriesUnified
    .map((cat) => ({
      slug: cat.slug,
      name: cat.name,
      brands: brands.filter((b) => b.categories.some((c) => c.slug === cat.slug)),
    }))
    .filter((c) => c.brands.length > 0);

  const byIndustry = US_INDUSTRIES
    .map((ind) => ({ ...ind, brands: brands.filter((b) => b.industries.includes(ind.slug)) }))
    .filter((ind) => ind.brands.length > 0);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': PAGE_URL,
      url: PAGE_URL,
      name: `Branduri din SUA (${total})`,
      description: `Producători americani de echipamente industriale cu pagină pe infinitrade.ro, grupați pe categorii și industrii.`,
      inLanguage: 'ro',
      dateModified: lastModified.brands,
      isPartOf: { '@id': `${config.site.url}/#website` },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: brands.length,
        itemListElement: brands.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          url: `${config.site.url}/brand/${b.simpleSlug}`,
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <Header />
      <main id="main-content" className={base.main}>
        <section className={base.hero}>
          <div className={base.container}>
            <Breadcrumbs items={[{ label: 'Branduri A–Z', href: '/brand' }]} currentPage="Branduri din SUA" variant="light" />
            <div className={base.heroIcon}><Flag size={40} /></div>
            <h1>Branduri din SUA: {total} de producători americani de echipamente industriale</h1>
            <p className={base.lede}>
              Aducem în România echipamente și componente de la {total} de producători cu sediul în Statele Unite, din {byCategory.length} categorii:
              robineți și actuatoare, pompe, instrumentație de proces, scule și echipamente de testare, hidraulică și pneumatică, motoare, filtre,
              lubrifianți. Le livrăm la comandă — prin filialele și distribuitorii europeni ai producătorilor acolo unde există, sau prin import
              direct din SUA — cu termen orientativ de 2–6 săptămâni; nu ținem aceste game pe raft. Pagina fiecărui brand spune ce putem oferta,
              ce coduri am verificat în cataloagele oficiale și ce nu putem confirma.
            </p>
            <dl className={base.counts}>
              <div><dt>Branduri americane cu pagină proprie</dt><dd>{total}</dd></div>
              <div><dt>Cu pagină publicată (coduri + FAQ)</dt><dd>{published.length}</dd></div>
              <div><dt>Greu de găsit în Europa</dt><dd>{hard.length}</dd></div>
            </dl>
          </div>
        </section>

        <nav className={base.letterNav} aria-label="Sari la secțiune">
          <div className={base.container}>
            <a href="#pe-categorii">Pe categorii</a>
            <a href="#pe-industrii">Pe industrii</a>
            <a href="#greu-de-gasit">Greu de găsit în Europa</a>
            <a href="#intrebari">Întrebări frecvente</a>
          </div>
        </nav>

        <section className={base.listSection} id="pe-categorii">
          <div className={base.container}>
            <h2 className={base.sectionTitle}>Ce branduri americane livrăm, pe categorii de echipamente?</h2>
            <p className={base.sectionNote}>
              Fiecare categorie de mai jos are propria pagină, cu toate brandurile (americane și europene) și tipurile de produs; aici sunt doar
              producătorii cu sediul în SUA. Eticheta de lângă nume arată cât de ușor se procură în Europa, așa cum reiese din paginile de
              distribuție ale producătorului.
            </p>
            {byCategory.map((cat) => (
              <div key={cat.slug} id={`sua-${cat.slug}`} className={base.letterBlock}>
                <h3 className={base.letter}>
                  <Link href={`/${cat.slug}`} className={styles.categoryTitleLink}>{cat.name}</Link>
                  <span className={styles.count}> · {cat.brands.length} {cat.brands.length === 1 ? 'brand' : 'branduri'}</span>
                </h3>
                <ul className={base.brandList}>
                  {cat.brands.map((b) => (
                    <li key={`${cat.slug}-${b.simpleSlug}`}>
                      <Link href={`/brand/${b.simpleSlug}`} className={base.brandLink}>
                        <span className={base.brandName}>{b.name}</span>
                        <span className={base.brandMeta}>
                          {b.description}
                          {b.euAvailability ? ` · ${EU_AVAILABILITY_LABEL[b.euAvailability]}` : ''}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={`${base.listSection} ${base.catalogSection}`} id="pe-industrii">
          <div className={base.container}>
            <h2 className={base.sectionTitle}>În ce industrii se folosesc echipamentele americane?</h2>
            <p className={base.sectionNote}>
              Industriile care consumă echipamente scumpe și foarte scumpe — și în care instalațiile importate vin cu componente americane.
              Brandurile listate la fiecare industrie sunt cele pe care producătorul le declară pentru acel domeniu; restul brandurilor americane
              se găsesc în secțiunea pe categorii.
            </p>
            <div className={styles.industryGrid}>
              {byIndustry.map((ind) => (
                <article key={ind.slug} id={`industrie-${ind.slug}`} className={styles.industryCard}>
                  <h3>{ind.name}</h3>
                  <p>{ind.text}</p>
                  <ul className={styles.industryBrands}>
                    {ind.brands.map((b) => (
                      <li key={b.simpleSlug}>
                        <Link href={`/brand/${b.simpleSlug}`}>{b.name}</Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={base.listSection} id="greu-de-gasit">
          <div className={base.container}>
            <h2 className={base.sectionTitle}>Branduri americane greu de găsit în Europa</h2>
            <p className={base.sectionNote}>
              Pentru aceste {hard.length} de branduri nu am identificat, pe site-ul producătorului, o filială sau o rețea de distribuție în Europa.
              Intră totuși ca subcomponente în multe utilaje importate din SUA — relee și temporizatoare, reductoare NEMA, cuplaje, cilindri hidraulici,
              filtre, termometre și manometre, robineți din plastic, scule. Le aducem la comandă prin import; trimite codul de pe piesă și îți
              confirmăm dacă putem oferta și în cât timp.
            </p>
            <ul className={`${base.brandList} ${base.compact}`}>
              {hard.map((b) => (
                <li key={b.simpleSlug}>
                  <Link href={`/brand/${b.simpleSlug}`} className={base.brandLink}>
                    <span className={base.brandName}>{b.name}</span>
                    <span className={base.brandMeta}>{b.primaryCategory?.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${base.listSection} ${base.catalogSection}`} id="intrebari">
          <div className={base.container}>
            <h2 className={base.sectionTitle}>Întrebări frecvente despre brandurile din SUA</h2>
            <dl className={styles.faq}>
              {faq.map((f) => (
                <div key={f.q}>
                  <dt>{f.q}</dt>
                  <dd>{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className={base.ctaSection}>
          <div className={base.container}>
            <h2>Cauți o piesă americană pe care nu o găsești în Europa?</h2>
            <p>Trimite codul de pe plăcuță sau fișa tehnică. Verificăm la producător sau la filiala lui europeană și îți spunem dacă putem oferta și în cât timp.</p>
            <Link href="/contact" className={base.ctaButton}>Cere ofertă</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

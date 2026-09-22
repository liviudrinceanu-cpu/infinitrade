import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
import { allBrandsUnified, allCategoriesUnified, isBrandNoindex } from '@/data/allBrandsIndex';
import { getBrandsWithContent } from '@/data/brandContent';
import { lastModified } from '@/data/lastModified';
import { Tag } from 'lucide-react';
import styles from './brand-index.module.css';

// Index A–Z of every brand with its own page (D-2026-09-21, Branduri-500).
// Plain HTML links, no client JS: this is the crawl path Google and the AI
// crawlers use to reach /brand/<slug>. Indexed brands are listed first,
// letter by letter; brands that are still noindex (thin auto page, no rich
// content yet) sit in a separate "catalog complet" block so the two counts
// shown on the page are always two labelled numbers, never one blurred one.

function groupByLetter(brands) {
  const groups = new Map();
  for (const b of brands) {
    const first = b.name
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .charAt(0)
      .toUpperCase();
    const key = /[A-Z]/.test(first) ? first : '0-9';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(b);
  }
  const keys = [...groups.keys()].sort((a, b) => (a === '0-9' ? 1 : b === '0-9' ? -1 : a.localeCompare(b)));
  return keys.map((k) => [k, groups.get(k).sort((a, b) => a.name.localeCompare(b.name, 'ro'))]);
}

export async function generateMetadata() {
  const total = allBrandsUnified.length;
  const title = `Toate brandurile A–Z (${total}) | Infinitrade România`;
  const description = `Index alfabetic cu ${total} de branduri de echipamente industriale pe care le putem oferta în România: pompe, robineți, motoare, automatizări, senzori, hidraulică, componente mecanice. Cere ofertă pe brand.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${config.site.url}/brand` },
    openGraph: { title, description, url: `${config.site.url}/brand`, siteName: 'Infinitrade Romania', locale: 'ro_RO', type: 'website' },
    robots: { index: true, follow: true },
  };
}

export default function BrandIndexPage() {
  const contentSlugs = new Set(getBrandsWithContent());
  const indexed = allBrandsUnified.filter((b) => !isBrandNoindex(b.simpleSlug, contentSlugs));
  const catalogOnly = allBrandsUnified.filter((b) => isBrandNoindex(b.simpleSlug, contentSlugs));
  const groups = groupByLetter(indexed);
  const catalogGroups = groupByLetter(catalogOnly);
  const total = allBrandsUnified.length;

  const countries = new Set(allBrandsUnified.map((b) => b.country).filter(Boolean));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${config.site.url}/brand`,
    url: `${config.site.url}/brand`,
    name: `Toate brandurile A–Z (${total})`,
    inLanguage: 'ro',
    dateModified: lastModified.brands,
    isPartOf: { '@id': `${config.site.url}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: indexed.length,
      itemListElement: indexed.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        url: `${config.site.url}/brand/${b.simpleSlug}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <Header />
      <main id="main-content" className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <Breadcrumbs currentPage="Branduri A–Z" variant="light" />
            <div className={styles.heroIcon}><Tag size={40} /></div>
            <h1>Toate brandurile, de la A la Z</h1>
            <p className={styles.lede}>
              {total} de producători de echipamente industriale din {countries.size} de țări, grupați pe {allCategoriesUnified.length} categorii.
              Pentru fiecare brand putem oferta din gama producătorului sau aducem la comandă; pagina brandului spune exact ce acoperim și ce nu.
            </p>
            <dl className={styles.counts}>
              <div><dt>Branduri cu pagină publicată</dt><dd>{indexed.length}</dd></div>
              <div><dt>În catalog, pagină în lucru</dt><dd>{catalogOnly.length}</dd></div>
              <div><dt>Total branduri cu pagină proprie</dt><dd>{total}</dd></div>
            </dl>
          </div>
        </section>

        <nav className={styles.letterNav} aria-label="Sari la literă">
          <div className={styles.container}>
            {groups.map(([letter]) => (
              <a key={letter} href={`#litera-${letter}`}>{letter}</a>
            ))}
          </div>
        </nav>

        <section className={styles.listSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Branduri cu pagină publicată</h2>
            <p className={styles.sectionNote}>
              Linkurile duc direct la pagina brandului: game, aplicații tipice, ce putem oferta și ce nu.
            </p>
            {groups.map(([letter, brands]) => (
              <div key={letter} id={`litera-${letter}`} className={styles.letterBlock}>
                <h3 className={styles.letter}>{letter}</h3>
                <ul className={styles.brandList}>
                  {brands.map((b) => (
                    <li key={b.simpleSlug}>
                      <Link href={`/brand/${b.simpleSlug}`} className={styles.brandLink}>
                        <span className={styles.brandName}>{b.name}</span>
                        <span className={styles.brandMeta}>
                          {b.categories[0]?.name}{b.country ? ` · ${b.country}` : ''}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {catalogOnly.length > 0 && (
          <section className={`${styles.listSection} ${styles.catalogSection}`} id="catalog-complet">
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Catalog complet: branduri cu pagina în lucru</h2>
              <p className={styles.sectionNote}>
                Pentru aceste {catalogOnly.length} de branduri putem primi cereri de ofertă de pe acum; pagina detaliată se publică pe măsură ce verificăm datele producătorului.
              </p>
              {catalogGroups.map(([letter, brands]) => (
                <div key={letter} className={styles.letterBlock}>
                  <h3 className={styles.letter}>{letter}</h3>
                  <ul className={`${styles.brandList} ${styles.compact}`}>
                    {brands.map((b) => (
                      <li key={b.simpleSlug}>
                        <Link href={`/brand/${b.simpleSlug}`} className={styles.brandLink}>
                          <span className={styles.brandName}>{b.name}</span>
                          <span className={styles.brandMeta}>{b.categories[0]?.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Nu găsești brandul?</h2>
            <p>Lucrăm cu canale de aprovizionare din toată Uniunea Europeană. Trimite codul sau fișa tehnică și îți spunem în 24 de ore dacă putem oferta.</p>
            <Link href="/contact" className={styles.ctaButton}>Cere ofertă</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
import { allCategoriesUnified, getBrandByAnySlug, isBrandNoindex } from '@/data/allBrandsIndex';
import { getBrandsForProductType } from '@/data/brandCategoryLinks';
import { getBrandsWithContent } from '@/data/brandContent';
import { getBrandDemand } from '@/data/brandDemand';
import { productTypeIndex, getProductTypeContent, getProductTypesForCategory } from '@/data/productTypeContent/_index';
import base from '../../brand/brand-index.module.css';
import styles from './type.module.css';

// /[category]/[type] — Branduri-500 v13 (D-2026-09-26, phase D): one selection
// guide per product type of every category (89 pages). Educational content
// from src/data/productTypeContent/<category>.js (what it is, how to choose,
// what to send for a quote, maintenance, FAQ) plus the brands on the site
// that make this type (src/data/brandCategoryLinks.js → BRAND_PRODUCT_TYPES,
// classified from each brand's own published products). No prices, no stock,
// no brand facts beyond name/country/category. Static, plain HTML links.

export const revalidate = 3600;

export async function generateStaticParams() {
  return productTypeIndex.map((t) => ({ category: t.category, type: t.slug }));
}

function resolve(categorySlug, typeSlug) {
  const category = allCategoriesUnified.find((c) => c.slug === categorySlug);
  if (!category) return null;
  const content = getProductTypeContent(categorySlug, typeSlug);
  const productType = (category.productTypes || []).find((p) => p.slug === typeSlug);
  if (!content || !productType) return null;
  return { category, content, productType };
}

function rankedBrandsForType(typeSlug) {
  const contentSlugs = new Set(getBrandsWithContent());
  return getBrandsForProductType(typeSlug)
    .map((slug) => getBrandByAnySlug(slug))
    .filter(Boolean)
    .map((b) => ({
      simpleSlug: b.simpleSlug,
      name: b.name,
      country: b.country || '',
      description: b.description || '',
      hasContent: contentSlugs.has(b.simpleSlug),
      indexed: !isBrandNoindex(b.simpleSlug, contentSlugs),
      demand: getBrandDemand(b.simpleSlug),
      featured: Boolean(b.featured),
    }))
    .sort((a, b) => (Number(b.featured) - Number(a.featured)) || (Number(b.hasContent) - Number(a.hasContent)) || (b.demand - a.demand) || a.name.localeCompare(b.name, 'ro'));
}

const trim = (s, n) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…');

export async function generateMetadata({ params }) {
  const { category: categorySlug, type: typeSlug } = await params;
  const r = resolve(categorySlug, typeSlug);
  if (!r) return { title: 'Pagină negăsită' };
  const { category, content } = r;
  const brands = rankedBrandsForType(typeSlug);
  const url = `${config.site.url}/${category.slug}/${content.slug}`;
  const title = `${content.name} | ${brands.length ? `${brands.length} branduri, ` : ''}ghid de selecție | Infinitrade`;
  const description = trim(`${content.lede} ${brands.length ? `Branduri pe care le livrăm în România: ${brands.slice(0, 4).map((b) => b.name).join(', ')}.` : ''} Cere ofertă cu codul produsului.`, 158);
  return {
    title: { absolute: trim(title, 70) },
    description,
    alternates: { canonical: url },
    openGraph: { title: content.name, description, url, siteName: 'Infinitrade Romania', locale: 'ro_RO', type: 'website' },
    robots: { index: true, follow: true },
  };
}

export default async function ProductTypePage({ params }) {
  const { category: categorySlug, type: typeSlug } = await params;
  const r = resolve(categorySlug, typeSlug);
  if (!r) notFound();
  const { category, content } = r;
  const brands = rankedBrandsForType(typeSlug);
  const shownBrands = brands.slice(0, 24);
  const related = content.relatedTypes
    .map((slug) => getProductTypesForCategory(category.slug).find((t) => t.slug === slug))
    .filter(Boolean);
  const siblings = getProductTypesForCategory(category.slug).filter((t) => t.slug !== content.slug);
  const url = `${config.site.url}/${category.slug}/${content.slug}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: content.name,
      description: content.lede,
      inLanguage: 'ro',
      dateModified: content.lastVerified,
      isPartOf: { '@id': `${config.site.url}/#website` },
      about: { '@type': 'Thing', name: content.name },
      ...(brands.length
        ? {
            mainEntity: {
              '@type': 'ItemList',
              name: `Branduri de ${content.shortName} livrate de Infinitrade`,
              numberOfItems: brands.length,
              itemListElement: brands.map((b, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: b.name,
                url: `${config.site.url}/brand/${b.simpleSlug}`,
              })),
            },
          }
        : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Acasă', item: `${config.site.url}/` },
        { '@type': 'ListItem', position: 2, name: category.name, item: `${config.site.url}/${category.slug}` },
        { '@type': 'ListItem', position: 3, name: content.name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: content.faq.map((f) => ({
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
        <section className={base.hero} style={category.gradient ? { background: category.gradient } : undefined}>
          <div className={base.container}>
            <Breadcrumbs items={[{ label: category.name, href: `/${category.slug}` }]} currentPage={content.name} variant="light" />
            <h1>{content.name}</h1>
            <p className={base.lede}>{content.lede}</p>
            <dl className={base.counts}>
              <div><dt>Branduri pe site pentru acest tip</dt><dd>{brands.length}</dd></div>
              <div><dt>Tipuri de produs în categorie</dt><dd>{siblings.length + 1}</dd></div>
              <div><dt>Actualizat</dt><dd className={styles.smallStat}>{content.lastVerified}</dd></div>
            </dl>
          </div>
        </section>

        <nav className={base.letterNav} aria-label="Sari la secțiune">
          <div className={base.container}>
            <a href="#ce-este">Ce este</a>
            <a href="#cum-alegi">Cum alegi</a>
            {brands.length > 0 && <a href="#branduri">Branduri</a>}
            <a href="#aplicatii">Aplicații</a>
            <a href="#oferta">Ce trimiți pentru ofertă</a>
            <a href="#mentenanta">Mentenanță</a>
            <a href="#intrebari">Întrebări frecvente</a>
          </div>
        </nav>

        <section className={base.listSection} id="ce-este">
          <div className={base.container}>
            <h2 className={base.sectionTitle}>Ce sunt {content.shortName} și cum funcționează?</h2>
            <div className={styles.prose}>
              {content.intro.split(/\n\s*\n/).map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        <section className={`${base.listSection} ${base.catalogSection}`} id="cum-alegi">
          <div className={base.container}>
            <h2 className={base.sectionTitle}>Cum alegi {content.shortName} potrivite?</h2>
            <p className={base.sectionNote}>Criteriile de mai jos sunt cele pe care le verificăm noi înainte de a cere o ofertă la producător; în ordinea în care contează.</p>
            <ol className={styles.criteria}>
              {content.howToChoose.map((c) => (
                <li key={c.criterion}>
                  <strong>{c.criterion}</strong>
                  <p>{c.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {brands.length > 0 && (
          <section className={base.listSection} id="branduri">
            <div className={base.container}>
              <h2 className={base.sectionTitle}>Ce branduri de {content.shortName} livrăm în România?</h2>
              <p className={base.sectionNote}>
                {brands.length} {brands.length === 1 ? 'producător' : 'producători'} de pe site {brands.length === 1 ? 'are' : 'au'} acest tip de produs în gamă, conform propriilor cataloage.
                Pagina fiecărui brand arată seriile, codurile verificate și ce putem confirma. Toate brandurile din categoria{' '}
                <Link href={`/${category.slug}#branduri`}>{category.name.toLowerCase()}</Link> sunt în lista A–Z.
              </p>
              <ul className={base.brandList}>
                {shownBrands.map((b) => (
                  <li key={b.simpleSlug}>
                    <Link href={`/brand/${b.simpleSlug}`} className={base.brandLink}>
                      <span className={base.brandName}>{b.name}</span>
                      <span className={base.brandMeta}>{b.description || b.country}{b.description && b.country ? ` · ${b.country}` : ''}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              {brands.length > shownBrands.length && (
                <p className={base.sectionNote} style={{ marginTop: '16px' }}>
                  Încă {brands.length - shownBrands.length} de branduri pentru acest tip sunt în{' '}
                  <Link href={`/${category.slug}#branduri`}>lista completă a categoriei</Link>.
                </p>
              )}
            </div>
          </section>
        )}

        <section className={`${base.listSection} ${base.catalogSection}`} id="aplicatii">
          <div className={base.container}>
            <h2 className={base.sectionTitle}>Unde se folosesc {content.shortName}?</h2>
            <ul className={styles.chips}>
              {content.applications.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </section>

        <section className={base.listSection} id="oferta">
          <div className={base.container}>
            <h2 className={base.sectionTitle}>Ce trebuie să trimiți pentru o ofertă de {content.shortName}?</h2>
            <ul className={styles.checklist}>
              {content.whatToSend.map((w) => <li key={w}>{w}</li>)}
            </ul>
            <p className={base.sectionNote}>
              Aducem la comandă, prin canalele de aprovizionare ale producătorului; termen orientativ 2–6 săptămâni, în funcție de confirmarea fabricii.
            </p>
            <Link href="/contact" className={base.ctaButton}>Cere ofertă</Link>
          </div>
        </section>

        <section className={`${base.listSection} ${base.catalogSection}`} id="mentenanta">
          <div className={base.container}>
            <h2 className={base.sectionTitle}>Mentenanță și piese de schimb</h2>
            <div className={styles.prose}><p>{content.maintenance}</p></div>
          </div>
        </section>

        <section className={base.listSection} id="intrebari">
          <div className={base.container}>
            <h2 className={base.sectionTitle}>Întrebări frecvente despre {content.shortName}</h2>
            <dl className={styles.faq}>
              {content.faq.map((f) => (
                <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className={`${base.listSection} ${base.catalogSection}`}>
          <div className={base.container}>
            <h2 className={base.sectionTitle}>Alte tipuri de produse din categoria {category.name.toLowerCase()}</h2>
            <ul className={styles.relatedList}>
              {[...related, ...siblings.filter((s) => !related.some((r2) => r2.slug === s.slug))].map((t) => (
                <li key={t.slug}>
                  <Link href={`/${category.slug}/${t.slug}`}>{t.name}</Link>
                  <span>{t.lede.split(/(?<=[.!?])\s+/)[0]}</span>
                </li>
              ))}
            </ul>
            <p className={base.sectionNote} style={{ marginTop: '18px' }}>
              <Link href={`/${category.slug}`}>← Înapoi la {category.name.toLowerCase()}</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
import { getAllBrandSlugs, getBrandByAnySlug } from '@/data/allBrandsIndex';
import { seriesIndex, getSeries, getSeriesForBrand } from '@/data/series/_index';
import styles from './series.module.css';

// Series pages: /brand/<brand>/<serie> (decisions-architecture.md B, "Series").
// - params come from seriesIndex only; dynamicParams=false so anything else 404s
// - brand membership is checked against getAllBrandSlugs() (simple slugs), never
//   getBrandByAnySlug: a category-prefixed brand path must 404 here (gate G3)
// - JSON-LD: ItemList of the models + BreadcrumbList. No Product/Offer
//   (owner decision 6; PLAN.md §2.7 reserves ProductGroup for stock.tsv-backed rows)
export const dynamicParams = false;

export async function generateStaticParams() {
  const live = new Set(getAllBrandSlugs());
  return seriesIndex.filter((s) => live.has(s.brand)).map((s) => ({ brandSlug: s.brand, seriesSlug: s.slug }));
}

function resolve(brandSlug, seriesSlug) {
  if (!getAllBrandSlugs().includes(brandSlug)) return null;
  const s = getSeries(brandSlug, seriesSlug);
  if (!s) return null;
  return { series: s, brand: getBrandByAnySlug(brandSlug) };
}

export async function generateMetadata({ params }) {
  const { brandSlug, seriesSlug } = await params;
  const r = resolve(brandSlug, seriesSlug);
  if (!r) return { title: 'Serie negăsită' };
  const { series: s, brand } = r;
  // D-2026-09-25: some series names already carry the brand ("EUCHNER MGB") — don't repeat it.
  const displayName = s.name.toLowerCase().includes(brand.name.toLowerCase()) ? s.name : `${s.name} ${brand.name}`;
  const title = `${displayName} — coduri, specificații, ofertă | Infinitrade`;
  const description = `${s.oneLine} Coduri de tip, parametri din documentația ${brand.name} și ce trebuie să trimiți pentru o ofertă. Cere ofertă.`.slice(0, 158);
  const url = `${config.site.url}/brand/${brandSlug}/${seriesSlug}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: 'Infinitrade Romania', locale: 'ro_RO', type: 'website' },
    robots: { index: true, follow: true },
  };
}

export default async function SeriesPage({ params }) {
  const { brandSlug, seriesSlug } = await params;
  const r = resolve(brandSlug, seriesSlug);
  if (!r) notFound();
  const { series: s, brand } = r;
  const displayName = s.name.toLowerCase().includes(brand.name.toLowerCase()) ? s.name : `${s.name} ${brand.name}`;
  const category = brand.categories[0];
  const siblings = getSeriesForBrand(brandSlug).filter((x) => x.slug !== s.slug);
  const url = `${config.site.url}/brand/${brandSlug}/${seriesSlug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage', '@id': url, url, name: displayName, inLanguage: 'ro', dateModified: s.dateModified,
        isPartOf: { '@id': `${config.site.url}/#website` },
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Acasă', item: config.site.url },
          { '@type': 'ListItem', position: 2, name: category.name, item: `${config.site.url}/${category.slug}` },
          { '@type': 'ListItem', position: 3, name: brand.name, item: `${config.site.url}/brand/${brandSlug}` },
          { '@type': 'ListItem', position: 4, name: s.name, item: url },
        ],
      },
      {
        '@type': 'ItemList', '@id': `${url}#models`, name: `Coduri de tip ${s.name}`, numberOfItems: s.models.length,
        itemListElement: s.models.map((m, i) => ({ '@type': 'ListItem', position: i + 1, name: m.code, url: `${url}#${m.code.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` })),
      },
      ...(s.faq && s.faq.length ? [{
        '@type': 'FAQPage', '@id': `${url}#faq`,
        mainEntity: s.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }] : []),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <Header />
      <main id="main-content" className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <Breadcrumbs items={[{ label: category.name, href: `/${category.slug}` }, { label: brand.name, href: `/brand/${brandSlug}` }]} currentPage={s.name} variant="light" />
            <p className={styles.kicker}>{brand.name} · {category.name}</p>
            <h1>{s.name}</h1>
            <p className={styles.lede}>{s.oneLine}</p>
            <p className={styles.meta}>
              Stare în catalogul producătorului: <strong>{s.lifecycle}</strong>{s.lifecycleNote ? ` — ${s.lifecycleNote}` : ''} · Actualizat: {s.dateModified}
            </p>
            <div className={styles.ctas}>
              <Link href={`/contact?brand=${encodeURIComponent(brand.name)}&serie=${encodeURIComponent(s.name)}`} className={styles.ctaPrimary}>Cere ofertă {s.name}</Link>
              <Link href={`/brand/${brandSlug}`} className={styles.ctaSecondary}>Toată gama {brand.name}</Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Ce este {s.name} și ce putem oferta?</h2>
            {s.intro.split(/\n\s*\n/).map((p, i) => <p key={i} className={styles.prose}>{p}</p>)}
          </div>
        </section>

        <section className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <h2>Ce coduri de tip {s.name} cer clienții?</h2>
            <table className={styles.table}>
              <thead><tr><th>Cod de tip</th><th>Ce înseamnă</th></tr></thead>
              <tbody>
                {s.models.map((m) => (
                  <tr key={m.code} id={m.code.toLowerCase().replace(/[^a-z0-9]+/g, '-')}><td><code>{m.code}</code></td><td>{m.note}</td></tr>
                ))}
              </tbody>
            </table>
            <p className={styles.note}>Codurile provin din documentația producătorului citată mai jos; alte variante din serie se confirmă pe cod, la cerere.</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Ce parametri are seria {s.name}?</h2>
            <table className={styles.table}>
              <thead><tr><th>Parametru</th><th>Valoare</th></tr></thead>
              <tbody>
                {s.specs.map((sp) => (
                  <tr key={sp.label}><td>{sp.label}</td><td>{sp.value}{sp.unit ? ` ${sp.unit}` : ''}</td></tr>
                ))}
              </tbody>
            </table>
            {s.applications && s.applications.length > 0 && (
              <>
                <h3>Unde se folosește</h3>
                <ul className={styles.list}>{s.applications.map((a, i) => { const t = typeof a === 'string' ? a : (a && (a.name || a.code)) || ''; return <li key={i}>{t}</li>; })}</ul>
              </>
            )}
            {s.accessories && s.accessories.length > 0 && (
              <>
                <h3>Accesorii și opțiuni menționate de producător</h3>
                <ul className={styles.list}>{s.accessories.map((a, i) => { const t = typeof a === 'string' ? a : (a && (a.code ? a.code + (a.note ? ' — ' + a.note : '') : a.name)) || ''; return <li key={i}>{t}</li>; })}</ul>
              </>
            )}
          </div>
        </section>

        {s.faq && s.faq.length > 0 && (
          <section className={`${styles.section} ${styles.alt}`}>
            <div className={styles.container}>
              {s.faq.map((f) => (
                <div key={f.q} className={styles.faqItem}>
                  <h2>{f.q}</h2>
                  <p className={styles.prose}>{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Ce nu putem furniza pentru {s.name}?</h2>
            <p className={styles.prose}>{s.limitation}</p>
            <h2>De unde sunt datele din pagină?</h2>
            <ol className={styles.sources}>
              {s.sources.map((src) => (
                <li key={src.url}><a href={src.url} rel="nofollow noopener" target="_blank">{src.title}</a> — {src.publisher}, accesat {src.accessed}</li>
              ))}
            </ol>
            {siblings.length > 0 && (
              <>
                <h3>Alte serii {brand.name} documentate</h3>
                <ul className={styles.list}>{siblings.map((x) => <li key={x.slug}><Link href={`/brand/${brandSlug}/${x.slug}`}>{x.name}</Link></li>)}</ul>
              </>
            )}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Ai codul? Trimite-l.</h2>
            <p>Răspundem cu o ofertă în cel mult o zi lucrătoare, cu confirmarea compatibilității din documentația {brand.name}.</p>
            <Link href={`/contact?brand=${encodeURIComponent(brand.name)}&serie=${encodeURIComponent(s.name)}`} className={styles.ctaPrimary}>Cere ofertă</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

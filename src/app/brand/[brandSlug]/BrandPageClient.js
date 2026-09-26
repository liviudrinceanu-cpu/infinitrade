'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Phone, Mail, Plus, ShoppingCart, Package, Truck, Wrench, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useQuoteCart } from '@/context/QuoteCartContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { getBrandUpdatedDate } from '@/data/lastModified';
import { getProductTypesForBrand } from '@/data/brandCategoryLinks';
import entityFacts from '@/data/entityFacts.json';
import styles from './brand.module.css';

// Strip category prefix from brand slug to get simple slug
function toSimpleSlug(slug) {
  const prefixes = [
    'pompe-industriale-', 'pompe-vid-industriale-',
    'robineti-industriali-', 'robineti-reglare-industriali-',
    'regulatoare-presiune-industriale-', 'oale-condens-industriale-',
    'supape-siguranta-industriale-', 'motoare-electrice-industriale-',
    'motoare-atex-industriale-', 'schimbatoare-caldura-industriale-',
    'racitoare-ulei-industriale-', 'suflante-industriale-',
    'suflante-roots-industriale-', 'ventilatoare-industriale-',
    'compresoare-industriale-',
  ];
  for (const prefix of prefixes) {
    if (slug.startsWith(prefix)) return slug.slice(prefix.length);
  }
  return slug;
}

// F3-02 helpers ---------------------------------------------------------
// The template only ever reads its own data fields - it never invents a
// number, a claim or a heading string that is not in heading-phrasings.md
// (F3-01). Sections whose backing field does not exist yet on a given brand
// render nothing (no empty question-H2) - most of those fields (limitation,
// sources[], changelog, series successor) are F3-03's job, not this one's.

// First citable sentence out of a longer field - the unit an answer engine
// actually lifts (heading-phrasings.md "answer-first" rule).
function firstSentence(text) {
  if (typeof text !== 'string' || !text.trim()) return '';
  const firstParagraph = text.trim().split(/\n\s*\n/)[0].trim();
  const match = firstParagraph.match(/^[^.!?]*[.!?]/);
  return (match ? match[0] : firstParagraph).trim();
}

const SOURCING_STATEMENT = entityFacts.boilerplate.find((b) => b.id === 'sourcing-statement')?.template
  || 'Nu avem stoc permanent documentat pentru <Brand>; putem oferta la comandă, termen orientativ 2–6 săptămâni.';
const LEAD_TIME_FROM_STOCK = entityFacts.leadTimePhrases?.[0] || '24–72 h din stoc';
const LEAD_TIME_TO_ORDER = entityFacts.leadTimePhrases?.[1] || '2–6 săptămâni la comandă';

export default function BrandPageClient({ brand, allCategories, brandContent, seriesPages = [] }) {
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [productsRef, productsVisible] = useIntersectionObserver();
  const { addItem, items: cartItems } = useQuoteCart();
  const [addedAnimation, setAddedAnimation] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);

  // Current category from brand's categories
  const category = brand.categories[activeCategory];
  const productTypes = category.productTypes || [];

  const handleAddToCart = (item) => {
    const success = addItem(item);
    if (success) {
      setAddedAnimation(item.name);
      setTimeout(() => setAddedAnimation(null), 1000);
    }
  };

  const isInCart = (name) => {
    return cartItems.some(item => item.name === name);
  };

  // B-LEDE - answer-first block, above every section (heading-phrasings.md §1.2).
  // First sentence of `overview`, falling back to `infinitrade`, falling back
  // to the plain brand description when there is no rich content at all.
  const ledeSentence = brandContent
    ? (firstSentence(brandContent.overview) || firstSentence(brandContent.infinitrade))
    : `${brand.description}.`;
  const hasFoundedFact = brandContent && (brandContent.founded || brandContent.headquarters);

  // B-01 - table rows: keyProducts when the brand has them, else the active
  // category's product types (heading-phrasings.md B-01 "if keyProducts is
  // empty, render the table from category.productTypes").
  const usesKeyProductsTable = Boolean(brandContent?.keyProducts?.length);
  const tableRows = usesKeyProductsTable ? brandContent.keyProducts : productTypes;
  const tableCount = tableRows.length;

  // B-14 - F3-03: the single "Actualizat:" value, identical to the JSON-LD
  // `dateModified` computed the same way in src/lib/schema/brand.js.
  const updatedDate = getBrandUpdatedDate(brandContent);

  // B-16 - other brands in the same active category, minus this one.
  // v11 (D-2026-09-26): ordered by how many product types they share with
  // this brand (src/data/brandCategoryLinks.js), then featured, then name —
  // so "similar brands" are the closest substitutes, not the alphabet.
  const ownTypes = new Set(getProductTypesForBrand(brand.simpleSlug));
  const relatedBrands = ((allCategories
    .find(c => c.slug === category.slug)
    ?.brands
    ?.filter(b => b.name !== brand.name && toSimpleSlug(b.slug) !== brand.simpleSlug)) || [])
    .map((b) => ({ ...b, shared: getProductTypesForBrand(toSimpleSlug(b.slug)).filter((t) => ownTypes.has(t)).length }))
    .sort((a, b) => (b.shared - a.shared) || (Number(Boolean(b.featured)) - Number(Boolean(a.featured))) || a.name.localeCompare(b.name, 'ro'));

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className={styles.hero} ref={heroRef}>
          <div className={styles.heroContainer}>
            <Breadcrumbs
              items={[{ label: category.name, href: `/${category.slug}` }]}
              currentPage={brand.name}
              variant="light"
            />
            <div
              className={`animate-fade-up ${heroVisible ? 'is-visible' : ''}`}
            >

              <h1 className={styles.heroTitle}>
                {brand.name}
              </h1>
              <p className={styles.heroSubtitle}>
                Furnizor în România
              </p>

              {/* Category badges for multi-category brands */}
              {brand.categories.length > 1 && (
                <div className={styles.categoryBadges}>
                  {brand.categories.map((cat) => (
                    <span key={cat.slug} className={styles.categoryBadge}>{cat.name}</span>
                  ))}
                </div>
              )}

              {/* B-LEDE: answer-first block, directly under the H1, above
                  everything else on the page (heading-phrasings.md §1.1). */}
              <div className={styles.ledeBlock}>
                <p className={styles.ledeText}>{ledeSentence}</p>
                {hasFoundedFact && (
                  <p className={styles.ledeFacts}>
                    {brandContent.founded && <>Fondată în {brandContent.founded}</>}
                    {brandContent.founded && brandContent.headquarters && ' · '}
                    {brandContent.headquarters && <>Sediu: {brandContent.headquarters}</>}
                  </p>
                )}
              </div>

              <div className={styles.heroCtas}>
                <button
                  className={`${styles.ctaAddCart} ${isInCart(brand.name) ? styles.inCart : ''} ${addedAnimation === brand.name ? styles.adding : ''}`}
                  onClick={() => handleAddToCart({
                    type: 'brand',
                    name: brand.name,
                    category: category.name,
                    url: `/brand/${brand.simpleSlug}`
                  })}
                >
                  {isInCart(brand.name) ? (
                    <>
                      <Check size={18} />
                      In Cerere
                    </>
                  ) : (
                    <>
                      <Plus size={18} />
                      Adauga la Cerere
                    </>
                  )}
                </button>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Trimite Cererea
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className={styles.valueProps}>
          <div className={styles.container}>
            <div className={styles.valuePropsGrid}>
              <div className={styles.valueProp}>
                <Package size={24} />
                <div>
                  <h4>Produse Originale</h4>
                  <p>Garantie producator</p>
                </div>
              </div>
              <div className={styles.valueProp}>
                <Truck size={24} />
                <div>
                  <h4>Livrare Rapida</h4>
                  <p>{LEAD_TIME_FROM_STOCK}</p>
                </div>
              </div>
              <div className={styles.valueProp}>
                <Wrench size={24} />
                <div>
                  <h4>Piese Schimb</h4>
                  <p>Kituri service</p>
                </div>
              </div>
              <div className={styles.valueProp}>
                <Shield size={24} />
                <div>
                  <h4>Suport Tehnic</h4>
                  <p>Consultanta gratuita</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B-01 - Ce livrăm din gama <Brand>? - visible <table>, all classes,
            renders from keyProducts or, when empty, from productTypes. */}
        {tableCount > 0 && (
          <section className={styles.keyProductsSection}>
            <div className={styles.container}>
              <h2 className={styles.richSectionTitle}>Ce livrăm din gama {brand.name}?</h2>
              <p className={styles.sectionLead}>
                {usesKeyProductsTable
                  ? <>Livrăm {tableCount} familii de produse {brand.name} din categoria {category.name.toLowerCase()}.</>
                  : <>{brand.name} are {tableCount} tipuri de echipamente listate în categoria {category.name.toLowerCase()}.</>}
              </p>
              <div className={styles.dataTableWrap}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th scope="col">Produs</th>
                      <th scope="col">Descriere</th>
                      {!usesKeyProductsTable && <th scope="col">Aplicații</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row, i) => (
                      <tr key={row.slug || row.name || i}>
                        <td>{row.name}</td>
                        <td>{row.description}</td>
                        {!usesKeyProductsTable && (
                          <td>{(row.applications || []).join(', ')}</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* B-02 - Ce avem pe stoc de la <Brand>? - never omitted: the honest
            sourcing statement is a fact the manufacturer's own site does not
            carry (decisions-coverage-aeo.md §A4.3). Real stock.tsv-backed
            facts are F3-03/F4's job (ownFact field, not yet on this data
            model); until then this renders the registry sourcing statement
            verbatim, brand name interpolated. */}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <h2 className={styles.richSectionTitle}>Ce avem pe stoc de la {brand.name}?</h2>
            <p className={styles.sectionLead}>
              {brandContent?.ownFact || SOURCING_STATEMENT.replace(/<Brand>/g, brand.name)}
            </p>
          </div>
        </section>

        {/* B-03 - Cât durează livrarea la <Brand>? - both standing lead
            times, never a brand-specific promise, never a number outside
            entityFacts.leadTimePhrases. */}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <h2 className={styles.richSectionTitle}>Cât durează livrarea la {brand.name}?</h2>
            <p className={styles.sectionLead}>
              Pentru produsele {brand.name}, termenul orientativ este {LEAD_TIME_TO_ORDER} pentru
              comenzi de fabrică, respectiv {LEAD_TIME_FROM_STOCK} pentru reperele aflate deja pe stoc.
            </p>
          </div>
        </section>

        {/* Serii documentate (src/data/series/<brand>.js) — rendered only when
            the brand has at least one series page (decisions-architecture.md B). */}
        {seriesPages.length > 0 && (
          <section className={styles.industriesSection}>
            <div className={styles.container}>
              <h2 className={styles.richSectionTitle}>Ce serii {brand.name} avem documentate pe cod?</h2>
              <p className={styles.sectionLead}>
                Pentru seriile de mai jos avem pagini cu codurile de tip cerute de clienți, parametrii din documentația producătorului și ce trebuie trimis pentru ofertă:
              </p>
              <div className={styles.industriesTags}>
                {seriesPages.map((s) => (
                  <Link key={s.slug} href={`/brand/${brand.simpleSlug}/${s.slug}`} className={styles.industryTag}>{s.name}</Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* B-05 - Ce piese și consumabile <Brand> livrăm? - from the active
            category's accessories list; falls back to nothing (omitted) when
            a category carries none. */}
        {category.accessories && category.accessories.length > 0 && (
          <section className={styles.industriesSection}>
            <div className={styles.container}>
              <h2 className={styles.richSectionTitle}>Ce piese și consumabile {brand.name} livrăm?</h2>
              <p className={styles.sectionLead}>
                Pentru echipamentele {brand.name} din categoria {category.name.toLowerCase()} livrăm
                {' '}{category.accessories.length} familii de piese și consumabile:
              </p>
              <div className={styles.industriesTags}>
                {category.accessories.map((acc, i) => (
                  <span key={i} className={styles.industryTag}>{acc}</span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Rich Brand Content (when available) OR Generic About */}
        {brandContent ? (
          <>
            {/* B-06 - Ce tipuri de echipamente are <Brand>? */}
            {productTypes.length > 0 && (
              <section className={styles.productsSection} ref={productsRef}>
                <div className={styles.container}>
                  <div className={styles.sectionHeader}>
                    <h2>Ce tipuri de echipamente are {brand.name}?</h2>
                    <p>
                      Gama {brand.name} din categoria {category.name.toLowerCase()} cuprinde {productTypes.length}{' '}
                      tipuri de echipamente. Selectează produsele de care ai nevoie și solicită oferta.
                    </p>
                  </div>
                  <div className={styles.productsGrid}>
                    {productTypes.map((type, index) => (
                      <div
                        key={type.slug}
                        className={`${styles.productCard} animate-fade-up animate-delay-${Math.min(Math.floor(index * 0.5) + 1, 6)} ${productsVisible ? 'is-visible' : ''}`}
                      >
                        <div className={styles.productCardContent}>
                          <h3>{type.name}</h3>
                          <p>{type.description}</p>
                          <div className={styles.applications}>
                            {(type.applications || []).slice(0, 3).map(app => (
                              <span key={app} className={styles.appTag}>{app}</span>
                            ))}
                          </div>
                        </div>
                        <div className={styles.productCardActions}>
                          <button
                            className={`${styles.addBtn} ${isInCart(`${type.name} ${brand.name}`) ? styles.inCart : ''} ${addedAnimation === `${type.name} ${brand.name}` ? styles.adding : ''}`}
                            onClick={() => handleAddToCart({
                              type: 'product',
                              name: `${type.name} ${brand.name}`,
                              category: category.name,
                              url: `/${category.slug}#${type.slug}`
                            })}
                          >
                            {isInCart(`${type.name} ${brand.name}`) ? (
                              <Check size={18} />
                            ) : (
                              <Plus size={18} />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* B-07 - Unde se folosesc echipamentele <Brand>? */}
            {brandContent.industries && brandContent.industries.length > 0 && (
              <section className={styles.industriesSection}>
                <div className={styles.container}>
                  <h2 className={styles.richSectionTitle}>Unde se folosesc echipamentele {brand.name}?</h2>
                  <p className={styles.sectionLead}>
                    Echipamentele {brand.name} se folosesc în {brandContent.industries.length} industrii:
                  </p>
                  <div className={styles.industriesTags}>
                    {brandContent.industries.map((industry, i) => (
                      <span key={i} className={styles.industryTag}>{industry}</span>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* B-08 - De ce <Brand> și nu altă marcă? */}
            {brandContent.whyChoose && brandContent.whyChoose.length > 0 && (
              <section className={styles.whyChooseSection}>
                <div className={styles.container}>
                  <h2 className={styles.richSectionTitle}>De ce {brand.name} și nu altă marcă?</h2>
                  <div className={styles.whyChooseGrid}>
                    {brandContent.whyChoose.map((reason, i) => (
                      <div key={i} className={styles.whyChooseCard}>
                        <Check size={20} className={styles.whyChooseIcon} />
                        <p>{reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* B-15 (D-2026-09-22) - Ce coduri și serii <Brand> sunt cerute frecvent?
                `productCodes` = [{ code, description }] copied from the
                manufacturer's public catalogue by the content writer. It is an
                identification aid for the customer (what to put in the RFQ),
                NOT a stock list - the lead says so explicitly (owner rule #6). */}
            {Array.isArray(brandContent.productCodes) && brandContent.productCodes.length > 0 && (
              <section className={styles.aboutSection}>
                <div className={styles.container}>
                  <h2 className={styles.richSectionTitle}>Ce coduri și serii {brand.name} sunt cerute frecvent?</h2>
                  <p className={styles.sectionLead}>
                    Denumiri de serie și coduri de tip {brand.name} preluate din catalogul public al producătorului,
                    ca reper pentru identificare — nu o listă de stoc. Trimite-ne codul complet de pe plăcuța
                    echipamentului și primești ofertă pentru modelul exact sau pentru un echivalent.
                  </p>
                  <div className={styles.codesTableWrap}>
                    <table className={styles.codesTable}>
                      <thead>
                        <tr><th scope="col">Cod / serie</th><th scope="col">Ce este</th></tr>
                      </thead>
                      <tbody>
                        {brandContent.productCodes.map((item, i) => (
                          <tr key={i}>
                            <td><code>{item.code}</code></td>
                            <td>{item.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}

            {/* B-09 - Ce nu putem furniza de la <Brand>? - requires
                `limitation` (F3-03). Rendering nothing rather than inventing
                a limitation, per heading-phrasings.md B-09. */}
            {brandContent.limitation && (
              <section className={styles.aboutSection}>
                <div className={styles.container}>
                  <h2 className={styles.richSectionTitle}>Ce nu putem furniza de la {brand.name}?</h2>
                  <p className={styles.sectionLead}>{brandContent.limitation}</p>
                </div>
              </section>
            )}

            {/* B-10 - Cine e <Brand> și ce produce? (was "Despre {brand}") */}
            <section className={styles.aboutSection}>
              <div className={styles.container}>
                <h2 className={styles.richSectionTitle}>Cine e {brand.name} și ce produce?</h2>
                <div className={styles.brandOverview}>
                  <div className={styles.overviewText}>
                    {brandContent.overview.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  <div className={styles.overviewSidebar}>
                    <div className={styles.factItem}>
                      <span className={styles.factLabel}>Fondată:</span>
                      <span className={styles.factValue}>{brandContent.founded}</span>
                    </div>
                    <div className={styles.factItem}>
                      <span className={styles.factLabel}>Sediu:</span>
                      <span className={styles.factValue}>{brandContent.headquarters}</span>
                    </div>
                    <div className={styles.factItem}>
                      <span className={styles.factLabel}>Angajați:</span>
                      <span className={styles.factValue}>{brandContent.employees}</span>
                    </div>
                    {brandContent.certifications && (
                      <div className={styles.factItem}>
                        <span className={styles.factLabel}>Certificări:</span>
                        <div className={styles.certBadges}>
                          {brandContent.certifications.slice(0, 3).map((cert, i) => (
                            <span key={i} className={styles.certBadge}>
                              {cert.split(' ')[0]}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* B-11 - Cum lucrăm cu gama <Brand>? (was "Infinitrade & {brand}") */}
            {brandContent.infinitrade && (
              <section className={styles.infinitradeSection}>
                <div className={styles.container}>
                  <div className={styles.infinitradeBox}>
                    <h2>Cum lucrăm cu gama {brand.name}?</h2>
                    {brandContent.infinitrade.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                    <Link href="/contact" className={styles.infinitradeBtn}>
                      Solicită Ofertă
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </section>
            )}
            {/* B-16 (D-2026-09-22) - Întrebări frecvente despre <Brand> -
                `faq` = [{ q, a }], mirrored 1:1 by the FAQPage node in
                src/lib/schema/brand.js (same data, never two literals). */}
            {Array.isArray(brandContent.faq) && brandContent.faq.length > 0 && (
              <section className={styles.aboutSection}>
                <div className={styles.container}>
                  <h2 className={styles.richSectionTitle}>Întrebări frecvente despre {brand.name}</h2>
                  <div className={styles.faqList}>
                    {brandContent.faq.map((item, i) => (
                      <div key={i} className={styles.faqItem}>
                        <h3 className={styles.faqQuestion}>{item.q}</h3>
                        <p className={styles.faqAnswer}>{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        ) : (
          <>
            {/* Generic About Section (fallback for brands without rich content) -
                B-10, no `overview` so no invented prose beyond the existing
                factual copy. */}
            <section className={styles.aboutSection}>
              <div className={styles.container}>
                <div className={styles.aboutGrid}>
                  <div className={styles.aboutContent}>
                    <h2>Cine e {brand.name} și ce produce?</h2>
                    <p>
                      <strong>{brand.name}</strong> este un producator de renume mondial,
                      recunoscut pentru calitatea exceptionala si inovatia in domeniul {category.name.toLowerCase()}.
                    </p>
                    <p>
                      Ca furnizor {brand.name} in Romania, Infinitrade va ofera acces la intreaga gama de produse,
                      consultanta tehnica specializata si service post-vanzare de inalta calitate.
                    </p>
                  </div>
                  <div className={styles.aboutStats}>
                    <div className={styles.statCard}>
                      <span className={styles.statValue}>{category.stats?.brands || '10+'}</span>
                      <span className={styles.statLabel}>Branduri</span>
                    </div>
                    <div className={styles.statCard}>
                      <span className={styles.statValue}>{category.stats?.products || '500+'}</span>
                      <span className={styles.statLabel}>Produse</span>
                    </div>
                    <div className={styles.statCard}>
                      <span className={styles.statValue}>15+</span>
                      <span className={styles.statLabel}>Ani Experienta</span>
                    </div>
                    <div className={styles.statCard}>
                      <span className={styles.statValue}>24h</span>
                      <span className={styles.statLabel}>Raspuns Rapid</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* B-06 - Ce tipuri de echipamente are <Brand>? (generic path) */}
            {productTypes.length > 0 && (
              <section className={styles.productsSection} ref={productsRef}>
                <div className={styles.container}>
                  <div className={styles.sectionHeader}>
                    <h2>Ce tipuri de echipamente are {brand.name}?</h2>
                    <p>Selecteaza produsele de care ai nevoie si solicita oferta</p>
                  </div>
                  <div className={styles.productsGrid}>
                    {productTypes.map((type, index) => (
                      <div
                        key={type.slug}
                        className={`${styles.productCard} animate-fade-up animate-delay-${Math.min(Math.floor(index * 0.5) + 1, 6)} ${productsVisible ? 'is-visible' : ''}`}
                      >
                        <div className={styles.productCardContent}>
                          <h3>{type.name}</h3>
                          <p>{type.description}</p>
                          <div className={styles.applications}>
                            {(type.applications || []).slice(0, 3).map(app => (
                              <span key={app} className={styles.appTag}>{app}</span>
                            ))}
                          </div>
                        </div>
                        <div className={styles.productCardActions}>
                          <button
                            className={`${styles.addBtn} ${isInCart(`${type.name} ${brand.name}`) ? styles.inCart : ''} ${addedAnimation === `${type.name} ${brand.name}` ? styles.adding : ''}`}
                            onClick={() => handleAddToCart({
                              type: 'product',
                              name: `${type.name} ${brand.name}`,
                              category: category.name,
                              url: `/${category.slug}#${type.slug}`
                            })}
                          >
                            {isInCart(`${type.name} ${brand.name}`) ? (
                              <Check size={18} />
                            ) : (
                              <Plus size={18} />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}

        {/* Category Tabs (only for multi-category brands) */}
        {brand.categories.length > 1 && (
          <section className={styles.categoryTabsSection}>
            <div className={styles.container}>
              <div className={styles.categoryTabs}>
                {brand.categories.map((cat, index) => (
                  <button
                    key={cat.slug}
                    className={`${styles.categoryTab} ${activeCategory === index ? styles.activeTab : ''}`}
                    onClick={() => setActiveCategory(index)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* B-12 - Ce servicii oferim pentru echipamentele <Brand>? (was
            "Servicii pentru {brand}") */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Ce servicii oferim pentru echipamentele {brand.name}?</h2>
              <p>Vânzare, piese de schimb și suport tehnic pentru echipamentele {brand.name}.</p>
            </div>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3>Vanzare Echipamente</h3>
                <ul className={styles.serviceList}>
                  <li><Check size={16} /> Produse originale</li>
                  <li><Check size={16} /> Consultanta tehnica</li>
                  <li><Check size={16} /> Oferte personalizate</li>
                  <li><Check size={16} /> Preturi competitive</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <h3>Piese de Schimb</h3>
                <ul className={styles.serviceList}>
                  <li><Check size={16} /> Piese originale</li>
                  <li><Check size={16} /> Kituri service</li>
                  <li><Check size={16} /> Livrare expresa</li>
                  <li><Check size={16} /> Compatibilitate</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <h3>Suport Tehnic</h3>
                <ul className={styles.serviceList}>
                  <li><Check size={16} /> Dimensionare</li>
                  <li><Check size={16} /> Documentatie</li>
                  <li><Check size={16} /> Instalare</li>
                  <li><Check size={16} /> Mentenanta</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* B-13 - De unde sunt datele din pagină? - requires sources[]
            (F3-03: sources: [{ title, url, publisher, accessed }], see the
            data contract atop src/data/brandContent.js). Rendering nothing
            when the array is empty/absent is deliberate: an empty sources
            section is exactly the class-contract failure §A3 wants surfaced,
            not something this item should paper over. A visible ordered
            list, not cards - each item links the manufacturer/standards-body
            page directly, `rel="nofollow noopener"`, with its accessed date
            (heading-phrasings.md B-13). */}
        {Array.isArray(brandContent?.sources) && brandContent.sources.length > 0 && (
          <section className={styles.aboutSection}>
            <div className={styles.container}>
              <h2 className={styles.richSectionTitle}>De unde sunt datele din pagină?</h2>
              <p className={styles.sectionLead}>
                Pagina se bazează pe {brandContent.sources.length} surse verificate.
              </p>
              <ol className={styles.serviceList}>
                {brandContent.sources.map((src, i) => (
                  <li key={i}>
                    <a href={src.url} rel="nofollow noopener" target="_blank">{src.title}</a>
                    {src.publisher && <> — {src.publisher}</>}
                    {src.accessed && <>, accesat {src.accessed}</>}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* B-14 - Ce s-a schimbat pe pagina <Brand>? + "Actualizat: <dată>".
            F3-03: `changelog` is `[{ date, note }]` (data contract atop
            src/data/brandContent.js). `updatedDate` (computed above via
            `getBrandUpdatedDate`) is the max of `lastModified.brands`,
            `brandContent.lastVerified` and every `changelog[].date` - the
            SAME value src/lib/schema/brand.js uses for JSON-LD
            `dateModified` and the sitemap uses as `lastmod`
            (decisions-coverage-aeo.md §C5). The heading only renders when a
            changelog exists; the "Actualizat:" label always renders
            (heading-phrasings.md B-14). */}
        <section className={styles.updatedSection}>
          <div className={styles.container}>
            {Array.isArray(brandContent?.changelog) && brandContent.changelog.length > 0 && (
              <h2 className={styles.richSectionTitle}>Ce s-a schimbat pe pagina {brand.name}?</h2>
            )}
            <p className={styles.updatedLine}>
              <strong>Actualizat:</strong> {updatedDate}
            </p>
            {Array.isArray(brandContent?.changelog) && brandContent.changelog.length > 0 && (
              <ul className={styles.serviceList}>
                {brandContent.changelog.map((entry, i) => (
                  <li key={i} className={styles.changelogNote}>
                    {entry.date && <strong>{entry.date}: </strong>}
                    {entry.note}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* B-15 - Cum cer o ofertă <Brand>? (was "Ai nevoie de produse
            {brand}?") */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <div className={styles.ctaContent}>
                <h2>Cum cer o ofertă {brand.name}?</h2>
                <p>
                  Trimite-ne plăcuța sau codul produsului, cantitatea și termenul dorit.
                  Adaugă produsele la cerere și primești oferta personalizată în 24h.
                </p>
              </div>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaButtonPrimary}>
                  <ShoppingCart size={20} />
                  Vezi Cererea ({cartItems.length})
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* B-16 - Ce alte mărci livrăm din aceeași categorie? (was "Alte
            Branduri in {category.name}") */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2>Ce alte mărci livrăm din aceeași categorie?</h2>
            <p className={styles.sectionLead}>
              În categoria {category.name.toLowerCase()} mai livrăm încă {relatedBrands.length} branduri.
            </p>
            <div className={styles.relatedGrid}>
              {relatedBrands
                .slice(0, 8)
                .map(relatedBrand => {
                  const href = `/brand/${toSimpleSlug(relatedBrand.slug)}`;
                  return (
                    <Link
                      key={relatedBrand.slug}
                      href={href}
                      className={styles.relatedCard}
                    >
                      <div className={styles.relatedInfo}>
                        <span className={styles.relatedName}>{relatedBrand.name}</span>
                      </div>
                      <ArrowRight size={16} />
                    </Link>
                  );
                })}
            </div>
            <p className={styles.sectionLead} style={{ marginTop: '20px' }}>
              <Link href={`/${category.slug}#branduri`}>
                Toate brandurile din categoria {category.name.toLowerCase()} (lista A–Z) →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

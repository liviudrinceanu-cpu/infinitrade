'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Package, Truck, Wrench, Phone, Send, Plus, ShoppingCart } from 'lucide-react';
import { allCategoriesUnified as categories } from '@/data/allBrandsIndex';
import { hasBrandContent } from '@/data/brandContent';
import { getBrandDemand } from '@/data/brandDemand';
import { getCategoryFaq } from '@/data/categoryFaq';
import { lastModified } from '@/data/lastModified';
import entityFacts from '@/data/entityFacts.json';
import { useQuoteCart } from '@/context/QuoteCartContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './category.module.css';

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

// F3-02 - fixed per-category question headings, copied VERBATIM from
// out/plan-v2/heading-phrasings.md §3.2 (F3-01's input contract). Not
// derived at runtime, per that document's rule 3/4 ("F3-02 must not derive
// it at runtime"). C-07, the two C-10 headings and C-11 are identical across
// all 15 categories by design (all ≤8 words, G14-safe without an allow-list
// entry - see heading-phrasings.md §4).
const CATEGORY_HEADINGS = {
  'pompe-industriale': {
    c01: 'Ce mărci de pompe industriale livrăm?',
    c02: 'Ce tipuri de pompe industriale livrăm?',
    c03: 'Cum aleg debitul și înălțimea de pompare?',
    c05: 'Ce piese de schimb la pompe ținem?',
    c06: 'Cât durează livrarea la pompe industriale?',
    c08: 'Ce servicii tehnice oferim la pompe?',
  },
  'robineti-industriali': {
    c01: 'Ce mărci de robineți industriali livrăm?',
    c02: 'Ce tipuri de robineți și supape livrăm?',
    c03: 'Cum aleg DN, PN și materialul corpului?',
    c05: 'Ce garnituri și kituri de revizie livrăm?',
    c06: 'Cât durează livrarea la robineți industriali?',
    c08: 'Ce servicii tehnice oferim la robineți?',
  },
  'motoare-electrice': {
    c01: 'Ce mărci de motoare electrice livrăm?',
    c02: 'Ce tipuri de motoare electrice livrăm?',
    c03: 'Cum aleg puterea, turația și mărimea carcasei?',
    c05: 'Ce piese de schimb la motoare livrăm?',
    c06: 'Cât durează livrarea la motoare electrice?',
    c08: 'Ce servicii tehnice oferim la motoare?',
  },
  'schimbatoare-caldura': {
    c01: 'Ce mărci de schimbătoare de căldură livrăm?',
    c02: 'Ce tipuri de schimbătoare de căldură livrăm?',
    c03: 'Cum dimensionez un schimbător de căldură?',
    c05: 'Ce plăci și garnituri de schimb livrăm?',
    c06: 'Cât durează livrarea la schimbătoare de căldură?',
    c08: 'Ce servicii tehnice oferim la schimbătoare?',
  },
  'suflante-ventilatoare': {
    c01: 'Ce mărci de suflante și ventilatoare livrăm?',
    c02: 'Ce tipuri de suflante și ventilatoare livrăm?',
    c03: 'Cum aleg debitul de aer și presiunea?',
    c05: 'Ce filtre și curele de schimb livrăm?',
    c06: 'Cât durează livrarea la suflante industriale?',
    c08: 'Ce servicii tehnice oferim la suflante?',
  },
  'automatizari-industriale': {
    c01: 'Ce mărci de automatizări industriale livrăm?',
    c02: 'Ce tipuri de echipamente de automatizare livrăm?',
    c03: 'Cum aleg PLC-ul potrivit pentru aplicație?',
    c05: 'Ce module și accesorii de automatizare livrăm?',
    c06: 'Cât durează livrarea la automatizări industriale?',
    c08: 'Ce servicii tehnice oferim la automatizări?',
  },
  'senzori-instrumentatie': {
    c01: 'Ce mărci de senzori și traductoare livrăm?',
    c02: 'Ce tipuri de senzori industriali livrăm?',
    c03: 'Cum aleg domeniul de măsură și semnalul?',
    c05: 'Ce cabluri și accesorii pentru senzori livrăm?',
    c06: 'Cât durează livrarea la senzori industriali?',
    c08: 'Ce servicii tehnice oferim la instrumentație?',
  },
  'componente-hidraulice-pneumatice': {
    c01: 'Ce mărci de hidraulică și pneumatică livrăm?',
    c02: 'Ce componente hidraulice și pneumatice livrăm?',
    c03: 'Cum aleg presiunea de lucru și debitul?',
    c05: 'Ce garnituri, furtunuri și racorduri livrăm?',
    c06: 'Cât durează livrarea la componente hidraulice?',
    c08: 'Ce servicii tehnice oferim la hidraulică?',
  },
  'echipamente-electrice': {
    c01: 'Ce mărci de aparataj electric livrăm?',
    c02: 'Ce tipuri de aparataj electric livrăm?',
    c03: 'Cum aleg curentul nominal și capacitatea de rupere?',
    c05: 'Ce siguranțe și accesorii de tablou livrăm?',
    c06: 'Cât durează livrarea la aparataj electric?',
    c08: 'Ce servicii tehnice oferim la tablouri?',
  },
  'componente-mecanice': {
    c01: 'Ce mărci de transmisii mecanice livrăm?',
    c02: 'Ce componente mecanice și transmisii livrăm?',
    c03: 'Cum aleg raportul de transmisie și cuplul?',
    c05: 'Ce rulmenți, curele și cuplaje ținem?',
    c06: 'Cât durează livrarea la componente mecanice?',
    c08: 'Ce servicii tehnice oferim la transmisii?',
  },
  'filtre-consumabile': {
    c01: 'Ce mărci de filtre industriale livrăm?',
    c02: 'Ce tipuri de filtre industriale livrăm?',
    c03: 'Cum aleg finețea de filtrare în microni?',
    c05: 'Ce elemente filtrante de schimb livrăm?',
    c06: 'Cât durează livrarea la filtre industriale?',
    c08: 'Ce servicii tehnice oferim la filtrare?',
  },
  'scule-instrumente': {
    c01: 'Ce mărci de scule și aparate livrăm?',
    c02: 'Ce tipuri de scule și instrumente livrăm?',
    c03: 'Cum aleg clasa de precizie a instrumentului?',
    c05: 'Ce accesorii și piese pentru scule livrăm?',
    c06: 'Cât durează livrarea la scule industriale?',
    c08: 'Ce servicii tehnice oferim la instrumente?',
  },
  'echipamente-termice': {
    c01: 'Ce mărci de echipamente termice livrăm?',
    c02: 'Ce tipuri de echipamente termice livrăm?',
    c03: 'Cum aleg puterea termică necesară?',
    c05: 'Ce piese de schimb la echipamente termice?',
    c06: 'Cât durează livrarea la echipamente termice?',
    c08: 'Ce servicii tehnice oferim la termice?',
  },
  'lubrifianti-chimice': {
    c01: 'Ce mărci de lubrifianți industriali livrăm?',
    c02: 'Ce tipuri de lubrifianți și chimice livrăm?',
    c03: 'Cum aleg vâscozitatea ISO VG potrivită?',
    c05: 'Ce ambalaje și cantități de lubrifianți livrăm?',
    c06: 'Cât durează livrarea la lubrifianți industriali?',
    c08: 'Ce servicii tehnice oferim la lubrifianți?',
  },
  'echipamente-auxiliare': {
    c01: 'Ce mărci de echipamente auxiliare livrăm?',
    c02: 'Ce echipamente auxiliare și de protecție livrăm?',
    c03: 'Cum aleg clasa de protecție IP corectă?',
    c05: 'Ce consumabile de protecția muncii livrăm?',
    c06: 'Cât durează livrarea la echipamente auxiliare?',
    c08: 'Ce servicii tehnice oferim la protecție?',
  },
};

// Identical across all 15 categories (heading-phrasings.md §3.1).
const C07_HEADING = 'Ce date ne trimiteți pentru ofertă?';
const C09_HEADING = 'Ce ne întreabă cel mai des inginerii?';
// C-10's "De unde sunt datele din pagină?" heading renders once sources[]
// exists per category (F3-03) - not declared here to avoid an unused
// constant; see the C-10 section below for the changelog/date half that
// ships now.
const C10_CHANGELOG_HEADING = 'Ce s-a schimbat pe această pagină?';
const C11_HEADING = 'Ce alte categorii de echipamente livrăm?';

const LEAD_TIME_FROM_STOCK = entityFacts.leadTimePhrases?.[0] || '24–72 h din stoc';
const LEAD_TIME_TO_ORDER = entityFacts.leadTimePhrases?.[1] || '2–6 săptămâni la comandă';

export default function CategoryClient({ category }) {
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [brandsRef, brandsVisible] = useIntersectionObserver();
  const [typesRef, typesVisible] = useIntersectionObserver();
  const { addItem, items: cartItems } = useQuoteCart();
  const [addedAnimation, setAddedAnimation] = useState(null);

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

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: category?.name || '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Eroare la trimiterea formularului');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const headings = CATEGORY_HEADINGS[category.slug] || {};
  const featuredBrands = (category.brands || []).filter((b) => b.featured);
  const brandCount = (category.brands || []).length;
  // D-2026-09-22 (C): with 1009 brands the flat grid no longer scales. Brands
  // with a sourced content page come first (featured, then by Romanian search
  // demand — ordering only, never a rendered figure); at most TOP_CARDS get a
  // card, every brand gets a link in the A–Z list below (indexed or not: the
  // page exists and is crawlable via follow).
  const TOP_CARDS = 24;
  const rankedBrands = [...(category.brands || [])]
    .map((b) => ({ ...b, simpleSlug: toSimpleSlug(b.slug) }))
    .map((b) => ({ ...b, hasContent: hasBrandContent(b.simpleSlug), demand: getBrandDemand(b.simpleSlug) }))
    .sort((a, b) => (Number(b.featured) - Number(a.featured)) || (Number(b.hasContent) - Number(a.hasContent)) || (b.demand - a.demand) || a.name.localeCompare(b.name, 'ro'));
  const topBrands = rankedBrands.slice(0, TOP_CARDS);
  const azGroups = rankedBrands
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, 'ro'))
    .reduce((acc, b) => { const k = /^[0-9]/.test(b.name) ? '0–9' : b.name.charAt(0).toUpperCase(); (acc[k] = acc[k] || []).push(b); return acc; }, {});
  const azKeys = Object.keys(azGroups).sort((a, b) => a.localeCompare(b, 'ro'));
  const productTypeCount = (category.productTypes || []).length;
  const expertFaqs = getCategoryFaq(category.slug);
  // C-03's answer-first sentence borrows the category's own first expert FAQ
  // entry: it is already the real selection criterion for the category
  // (categoryFaq.js), so this is the citable sentence heading-phrasings.md
  // §3.1 asks for, not a manufactured one. The remaining entries render
  // under C-09 below.
  const selectionFaq = expertFaqs[0] || null;
  const remainingFaqs = expertFaqs.slice(1);

  // C-LEDE - answer-first block, above every section (heading-phrasings.md
  // §3.1): what the category covers, how many brands and product types.
  const ledeSentence = category.description
    ? category.description.split(/\n\s*\n/)[0].match(/^[^.!?]*[.!?]/)?.[0]?.trim() || category.description
    : `${category.name}: ${brandCount} branduri, ${productTypeCount} tipuri de produse.`;

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} style={{ background: category.gradient }} ref={heroRef}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <div
            className={`animate-fade-up ${heroVisible ? 'is-visible' : ''}`}
          >
            <h1 className={styles.heroTitle}>{category.name}</h1>
            <p className={styles.heroTagline}>{category.tagline}</p>

            {/* C-LEDE: answer-first block, directly under the H1, above
                every section. */}
            <div className={styles.ledeBlock}>
              <p className={styles.ledeText}>{ledeSentence}</p>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>{brandCount || category.stats.brands}</span>
                <span className={styles.heroStatLabel}>Branduri</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>{productTypeCount || category.stats.products}</span>
                <span className={styles.heroStatLabel}>Tipuri de produse</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>{category.stats.delivery}</span>
                <span className={styles.heroStatLabel}>Livrare</span>
              </div>
            </div>

            <div className={styles.heroCtas}>
              <button
                className={`${styles.ctaAddCart} ${isInCart(category.name) ? styles.inCart : ''} ${addedAnimation === category.name ? styles.adding : ''}`}
                onClick={() => handleAddToCart({
                  type: 'category',
                  name: category.name,
                  category: category.name,
                  url: `/${category.slug}`
                })}
              >
                {isInCart(category.name) ? (
                  <>
                    <Check size={18} />
                    În Cerere
                  </>
                ) : (
                  <>
                    <Plus size={18} />
                    Adaugă la Cerere
                  </>
                )}
              </button>
              <Link href="/contact" className={styles.ctaPrimary}>
                <ShoppingCart size={18} />
                Vezi Cererea ({cartItems.length})
              </Link>
              <a href="#branduri" className={styles.ctaSecondary}>
                Vezi Branduri
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* C-01 - Ce mărci de <categorie> livrăm? (was "Branduri Premium
          {category.name}") */}
      <section id="branduri" className={styles.brandsSection} ref={brandsRef}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>{headings.c01 || `Ce mărci de ${category.name.toLowerCase()} livrăm?`}</h2>
            <p>
              Livrăm {brandCount} branduri în categoria {category.name.toLowerCase()}
              {featuredBrands.length > 0 && (
                <> — cele mai cerute: {featuredBrands.slice(0, 5).map((b) => b.name).join(', ')}</>
              )}.
            </p>
          </div>

          <div className={styles.brandsGrid}>
            {topBrands.map((brand, index) => (
              <div
                key={brand.name}
                className={`${styles.brandCard} ${brand.featured ? styles.brandFeatured : ''} animate-fade-up animate-delay-${Math.min(Math.floor(index * 0.5) + 1, 6)} ${brandsVisible ? 'is-visible' : ''}`}
              >
                <div className={styles.brandLogo}>
                  {brand.name.charAt(0)}
                </div>
                <div className={styles.brandInfo}>
                  <h3>{brand.name}</h3>
                  <p>{brand.description}</p>
                </div>
                <div className={styles.brandActions}>
                  <button
                    className={`${styles.brandAddBtn} ${isInCart(brand.name) ? styles.inCart : ''} ${addedAnimation === brand.name ? styles.adding : ''}`}
                    onClick={() => handleAddToCart({
                      type: 'brand',
                      name: brand.name,
                      category: category.name,
                      url: `/brand/${toSimpleSlug(brand.slug)}`
                    })}
                    title={isInCart(brand.name) ? 'În cerere' : 'Adaugă la cerere'}
                  >
                    {isInCart(brand.name) ? <Check size={16} /> : <Plus size={16} />}
                  </button>
                  <Link href={`/brand/${toSimpleSlug(brand.slug)}`} className={styles.brandLink}>
                    Detalii <ArrowRight size={14} />
                  </Link>
                </div>
                {brand.featured && (
                  <span className={styles.brandBadge}>Partner Premium</span>
                )}
              </div>
            ))}
          </div>

          {rankedBrands.length > topBrands.length && (
            <div className={styles.azWrap}>
              <h3 className={styles.azTitle}>Toate cele {brandCount} de mărci de {category.name.toLowerCase()}, de la A la Z</h3>
              <p className={styles.azLead}>
                Mărcile marcate cu ● au pagină cu game, coduri și surse verificate; celelalte au deocamdată fișa din catalog și pot fi ofertate la comandă.
              </p>
              <nav className={styles.azNav} aria-label="Index alfabetic mărci">
                {azKeys.map((k) => (
                  <a key={k} href={`#marci-${k === '0–9' ? '0-9' : k}`} className={styles.azNavItem}>{k}</a>
                ))}
              </nav>
              {azKeys.map((k) => (
                <div key={k} id={`marci-${k === '0–9' ? '0-9' : k}`} className={styles.azGroup}>
                  <span className={styles.azLetter}>{k}</span>
                  <ul className={styles.azList}>
                    {azGroups[k].map((b) => (
                      <li key={b.simpleSlug}>
                        <Link href={`/brand/${b.simpleSlug}`} className={b.hasContent ? styles.azLinkRich : styles.azLink}>
                          {b.hasContent ? '● ' : ''}{b.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* C-02 - Ce tipuri de <categorie> livrăm? (was "Tipuri de
          {category.name}") */}
      <section className={styles.typesSection} ref={typesRef}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>{headings.c02 || `Ce tipuri de ${category.name.toLowerCase()} livrăm?`}</h2>
            <p>
              Categoria {category.name.toLowerCase()} se împarte în {productTypeCount} tipuri de produse.
            </p>
          </div>

          <div className={styles.typesGrid}>
            {category.productTypes.map((type, index) => (
              <div
                key={type.name}
                className={`${styles.typeCard} animate-fade-up animate-delay-${Math.min(index + 1, 6)} ${typesVisible ? 'is-visible' : ''}`}
              >
                <h3>{type.name}</h3>
                <p>{type.description}</p>
                <div className={styles.typeApplications}>
                  <span className={styles.typeApplicationsLabel}>Aplicații:</span>
                  <div className={styles.typeApplicationsList}>
                    {type.applications.map((app) => (
                      <span key={app} className={styles.applicationTag}>{app}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.typeActions}>
                  <button
                    className={`${styles.typeAddBtn} ${isInCart(type.name) ? styles.inCart : ''} ${addedAnimation === type.name ? styles.adding : ''}`}
                    onClick={() => handleAddToCart({
                      type: 'product',
                      name: type.name,
                      category: category.name,
                      url: `/${category.slug}#${type.slug}`
                    })}
                    title={isInCart(type.name) ? 'În cerere' : 'Adaugă la cerere'}
                  >
                    {isInCart(type.name) ? <Check size={16} /> : <Plus size={16} />}
                  </button>
                  <Link href="/contact" className={styles.typeLink}>
                    Cere ofertă <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C-03 - the category's selection criterion, the citable sentence of
          the page (heading-phrasings.md §3.1). Renders only when the
          category has an expert FAQ entry to answer it from - never
          invented. */}
      {selectionFaq && (
        <section className={styles.typesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>{headings.c03 || selectionFaq.q}</h2>
            </div>
            <p className={styles.sectionLead}>{selectionFaq.a}</p>
          </div>
        </section>
      )}

      {/* C-04 - replacement / equivalence. Requires equivalence-seed.tsv rows
          for this category, not yet wired into repo data (F3-03/F4). Omitted
          rather than writing a placeholder, per heading-phrasings.md. */}

      {/* Services & Accessories */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {/* C-05 - Ce piese de schimb livrăm? (was "Piese de Schimb &
                Accesorii") */}
            {category.accessories && category.accessories.length > 0 && (
              <div className={styles.servicesCard}>
                <div className={styles.servicesIcon}>
                  <Package size={32} />
                </div>
                <h3>{headings.c05 || 'Ce piese de schimb livrăm?'}</h3>
                <p>Livrăm {category.accessories.length} familii de piese de schimb și consumabile originale pentru mentenanța echipamentelor.</p>
                <ul className={styles.servicesList}>
                  {category.accessories.map((acc) => (
                    <li key={acc}>
                      <Check size={16} />
                      {acc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* C-08 - Ce servicii tehnice oferim? (was "Servicii Tehnice") */}
            <div className={styles.servicesCard}>
              <div className={styles.servicesIcon}>
                <Wrench size={32} />
              </div>
              <h3>{headings.c08 || 'Ce servicii tehnice oferim?'}</h3>
              <p>Suport tehnic complet de la selecție până la punerea în funcțiune și mentenanță.</p>
              <ul className={styles.servicesList}>
                {category.services.map((service) => (
                  <li key={service}>
                    <Check size={16} />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* C-06 - Cât durează livrarea la <categorie>? (was "Livrare
                Rapidă") */}
            <div className={styles.servicesCard}>
              <div className={styles.servicesIcon}>
                <Truck size={32} />
              </div>
              <h3>{headings.c06 || `Cât durează livrarea la ${category.name.toLowerCase()}?`}</h3>
              <p>
                Termenul orientativ este {LEAD_TIME_TO_ORDER} pentru comenzi de fabrică, respectiv{' '}
                {LEAD_TIME_FROM_STOCK} pentru reperele aflate deja pe stoc.
              </p>
              <ul className={styles.servicesList}>
                <li><Check size={16} />Livrare {LEAD_TIME_FROM_STOCK} pentru stoc disponibil</li>
                <li><Check size={16} />Transport express internațional</li>
                <li><Check size={16} />Livrare în toată România</li>
                <li><Check size={16} />Ambalare profesională</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - C-07 heading, identical across categories */}
      <section id="contact-form" className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>{C07_HEADING}</h2>
              <p>
                Trimiteți plăcuța sau codul produsului, cantitatea și termenul dorit prin formularul
                alăturat, pentru a primi o ofertă personalizată în cel mai scurt timp.
              </p>

              <div className={styles.contactFeatures}>
                <div className={styles.contactFeature}>
                  <Phone size={20} />
                  <span>Răspuns în maxim 24h</span>
                </div>
                <div className={styles.contactFeature}>
                  <Check size={20} />
                  <span>Consultanță tehnică gratuită</span>
                </div>
                <div className={styles.contactFeature}>
                  <Package size={20} />
                  <span>Ofertă personalizată</span>
                </div>
              </div>
            </div>

            {!isSubmitted ? (
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Nume complet *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nume și prenume"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Companie</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Numele companiei"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@companie.ro"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07XX XXX XXX"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Categorie produs</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Descrieți solicitarea *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Descrieți echipamentele de care aveți nevoie, aplicația, cantitatea, etc."
                  required
                />
              </div>

              {error && (
                <div className={styles.errorMessage}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? 'Se trimite...' : 'Trimite Cererea'}
                {!isLoading && <Send size={18} />}
              </button>

              <p className={styles.formNote}>
                * Câmpuri obligatorii. Datele dumneavoastră sunt protejate conform GDPR.
              </p>
            </form>
            ) : (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>
                  <Check size={32} />
                </div>
                <h3>Mulțumim pentru solicitare!</h3>
                <p>Am primit cererea dumneavoastră și vă vom contacta în cel mai scurt timp posibil.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* C-09 - Ce ne întreabă cel mai des inginerii? - the remaining expert
          FAQ entries (the first now answers C-03 above), still rendered as
          <h3> questions, still the single FAQPage schema's visible copy
          (src/app/[category]/page.js). */}
      {remainingFaqs.length > 0 && (
        <section aria-labelledby="faq-heading" className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 id="faq-heading">{C09_HEADING}</h2>
              <p>Răspunsuri din tipare reale de cerere de ofertă pentru {category.name.toLowerCase()}.</p>
            </div>
            <div className={styles.faqList}>
              {remainingFaqs.map((item, index) => (
                <details key={index} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{item.q}</summary>
                  <div className={styles.faqAnswer}>
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* C-10 - De unde sunt datele din pagină? / Ce s-a schimbat pe această
          pagină? + visible "Actualizat: <dată>", bound to
          src/data/lastModified.js - the same value the sitemap uses as
          `lastmod` and JSON-LD uses as `dateModified`
          (src/lib/schema/category.js). Sources[] itself is F3-03's job. */}
      <section className={styles.updatedSection}>
        <div className={styles.container}>
          <h2>{C10_CHANGELOG_HEADING}</h2>
          <p className={styles.updatedLine}>
            <strong>Actualizat:</strong> {lastModified.categories}
          </p>
        </div>
      </section>

      {/* C-11 - Ce alte categorii de echipamente livrăm? (was "Explorează și
          alte categorii") */}
      <section className={styles.otherCategories}>
        <div className={styles.container}>
          <h2>{C11_HEADING}</h2>
          <p className={styles.sectionLead}>
            Livrăm echipamente în {categories.length} categorii; iată celelalte {categories.length - 1}.
          </p>
          <div className={styles.otherCategoriesGrid}>
            {categories
              .filter(c => c.id !== category.id)
              .map((cat) => (
                <Link key={cat.id} href={`/${cat.slug}`} className={styles.otherCategoryCard}>
                  <span className={styles.otherCategoryName}>{cat.name}</span>
                  <span className={styles.otherCategoryTagline}>{cat.tagline}</span>
                  <ArrowRight size={18} />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

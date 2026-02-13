'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Phone, Mail, Plus, ShoppingCart, Package, Truck, Wrench, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useQuoteCart } from '@/context/QuoteCartContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
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

export default function BrandPageClient({ brand, allCategories }) {
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
                Furnizor în România &bull; {brand.country}
              </p>

              {/* Category badges for multi-category brands */}
              {brand.categories.length > 1 && (
                <div className={styles.categoryBadges}>
                  {brand.categories.map((cat) => (
                    <span key={cat.slug} className={styles.categoryBadge}>{cat.name}</span>
                  ))}
                </div>
              )}

              <p className={styles.heroDescription}>
                {brand.description}. Oferim gama completa de produse {brand.name}, piese de schimb originale si suport tehnic specializat.
              </p>

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
                  <p>24-72h din stoc</p>
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

        {/* About Brand */}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutContent}>
                <h2>Despre {brand.name}</h2>
                <p>
                  <strong>{brand.name}</strong> este un producator de renume mondial din <strong>{brand.country}</strong>,
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

        {/* Product Types */}
        <section className={styles.productsSection} ref={productsRef}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Produse {brand.name} - {category.name}</h2>
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

        {/* Services */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Servicii pentru {brand.name}</h2>
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

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <div className={styles.ctaContent}>
                <h2>Ai nevoie de produse {brand.name}?</h2>
                <p>
                  Adauga produsele dorite si trimite cererea.
                  Primesti oferta personalizata in 24h.
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

        {/* Related Brands (from current active category) */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2>Alte Branduri in {category.name}</h2>
            <div className={styles.relatedGrid}>
              {allCategories
                .find(c => c.slug === category.slug)
                ?.brands
                ?.filter(b => {
                  // Filter out current brand by comparing names
                  return b.name !== brand.name;
                })
                .slice(0, 5)
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
                        <span className={styles.relatedCountry}>{relatedBrand.country}</span>
                      </div>
                      <ArrowRight size={16} />
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

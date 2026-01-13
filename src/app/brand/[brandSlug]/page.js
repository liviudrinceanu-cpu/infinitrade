'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Phone, Mail, Plus, ShoppingCart, Package, Truck, Wrench, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { allBrands, categories } from '@/data/products';
import { useQuoteCart } from '@/context/QuoteCartContext';
import styles from './brand.module.css';

export default function BrandPage() {
  const params = useParams();
  const { addItem, items: cartItems } = useQuoteCart();
  const [addedAnimation, setAddedAnimation] = useState(null);
  
  const brand = allBrands.find(b => b.slug === params.brandSlug);
  const category = brand ? categories.find(c => c.slug === brand.category) : null;

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

  if (!brand || !category) {
    return (
      <>
        <Header />
        <main className={styles.notFound}>
          <h1>Brand negăsit</h1>
          <Link href="/">Înapoi la pagina principală</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.breadcrumb}>
                <Link href="/">Acasă</Link>
                <span>/</span>
                <Link href={`/${category.slug}`}>{category.name}</Link>
                <span>/</span>
                <span>{brand.name}</span>
              </div>
              
              <h1 className={styles.heroTitle}>
                {brand.name}
              </h1>
              <p className={styles.heroSubtitle}>
                Distribuitor Autorizat • {brand.country}
              </p>
              <p className={styles.heroDescription}>
                {brand.description}. Oferim gama completă de produse {brand.name}, piese de schimb originale și suport tehnic specializat.
              </p>

              <div className={styles.heroCtas}>
                <button 
                  className={`${styles.ctaAddCart} ${isInCart(brand.name) ? styles.inCart : ''} ${addedAnimation === brand.name ? styles.adding : ''}`}
                  onClick={() => handleAddToCart({
                    type: 'brand',
                    name: brand.name,
                    category: category.name,
                    url: `/brand/${brand.slug}`
                  })}
                >
                  {isInCart(brand.name) ? (
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
                  Trimite Cererea
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
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
                  <p>Garanție producător</p>
                </div>
              </div>
              <div className={styles.valueProp}>
                <Truck size={24} />
                <div>
                  <h4>Livrare Rapidă</h4>
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
                  <p>Consultanță gratuită</p>
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
                  <strong>{brand.name}</strong> este un producător de renume mondial din <strong>{brand.country}</strong>, 
                  recunoscut pentru calitatea excepțională și inovația în domeniul {category.name.toLowerCase()}.
                </p>
                <p>
                  Ca distribuitor autorizat {brand.name} în România, Infinitrade vă oferă acces la întreaga gamă de produse, 
                  consultanță tehnică specializată și service post-vânzare de înaltă calitate.
                </p>
              </div>
              <div className={styles.aboutStats}>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>{category.stats.brands}+</span>
                  <span className={styles.statLabel}>Branduri</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>{category.stats.products}+</span>
                  <span className={styles.statLabel}>Produse</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>15+</span>
                  <span className={styles.statLabel}>Ani Experiență</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>24h</span>
                  <span className={styles.statLabel}>Răspuns Rapid</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Types */}
        <section className={styles.productsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Produse {brand.name} Disponibile</h2>
              <p>Selectează produsele de care ai nevoie și solicită ofertă</p>
            </div>
            <div className={styles.productsGrid}>
              {category.productTypes.map((type, index) => (
                <motion.div
                  key={type.slug}
                  className={styles.productCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className={styles.productCardContent}>
                    <h3>{type.name}</h3>
                    <p>{type.description}</p>
                    <div className={styles.applications}>
                      {type.applications.slice(0, 3).map(app => (
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
                </motion.div>
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
                <h3>Vânzare Echipamente</h3>
                <ul className={styles.serviceList}>
                  <li><Check size={16} /> Produse originale</li>
                  <li><Check size={16} /> Consultanță tehnică</li>
                  <li><Check size={16} /> Oferte personalizate</li>
                  <li><Check size={16} /> Prețuri competitive</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <h3>Piese de Schimb</h3>
                <ul className={styles.serviceList}>
                  <li><Check size={16} /> Piese originale</li>
                  <li><Check size={16} /> Kituri service</li>
                  <li><Check size={16} /> Livrare expresă</li>
                  <li><Check size={16} /> Compatibilitate</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <h3>Suport Tehnic</h3>
                <ul className={styles.serviceList}>
                  <li><Check size={16} /> Dimensionare</li>
                  <li><Check size={16} /> Documentație</li>
                  <li><Check size={16} /> Instalare</li>
                  <li><Check size={16} /> Mentenanță</li>
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
                  Adaugă produsele dorite și trimite cererea. 
                  Primești ofertă personalizată în 24h.
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

        {/* Related Brands */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2>Alte Branduri în {category.name}</h2>
            <div className={styles.relatedGrid}>
              {category.brands
                .filter(b => b.slug !== brand.slug)
                .slice(0, 5)
                .map(relatedBrand => (
                  <Link
                    key={relatedBrand.slug}
                    href={`/brand/${relatedBrand.slug}`}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedInfo}>
                      <span className={styles.relatedName}>{relatedBrand.name}</span>
                      <span className={styles.relatedCountry}>{relatedBrand.country}</span>
                    </div>
                    <ArrowRight size={16} />
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

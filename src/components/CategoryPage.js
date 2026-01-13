'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check, Truck, Wrench, Phone, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { categories } from '@/data/products';
import styles from './CategoryPage.module.css';

export default function CategoryPage({ slug }) {
  const category = categories.find(c => c.slug === slug);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero} style={{ '--category-color': category.color }}>
          <div className={styles.heroBackground}>
            <div className={styles.heroGradient} style={{ background: category.gradient }} />
          </div>
          <div className={styles.heroContainer}>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <div className={styles.breadcrumb}>
                <Link href="/">Acasă</Link>
                <ChevronRight size={14} />
                <span>{category.name}</span>
              </div>

              <h1 className={styles.heroTitle}>{category.name}</h1>
              <p className={styles.heroTagline}>{category.tagline}</p>
              <p className={styles.heroDescription}>{category.heroDescription}</p>

              {/* Stats */}
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{category.stats.brands}</span>
                  <span className={styles.heroStatLabel}>Branduri</span>
                </div>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{category.stats.products}</span>
                  <span className={styles.heroStatLabel}>Produse</span>
                </div>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{category.stats.delivery}</span>
                  <span className={styles.heroStatLabel}>Livrare</span>
                </div>
              </div>

              <div className={styles.heroCtas}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Cere Ofertă
                  <ArrowRight size={18} />
                </Link>
                <a href="#branduri" className={styles.ctaSecondary}>
                  Vezi Branduri
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Props */}
        <section className={styles.valueProps}>
          <div className={styles.container}>
            <div className={styles.valuePropsGrid}>
              <div className={styles.valueProp}>
                <div className={styles.valuePropIcon}>
                  <Check size={24} />
                </div>
                <div>
                  <h4>Echipamente Premium</h4>
                  <p>Produse originale de la producători de top</p>
                </div>
              </div>
              <div className={styles.valueProp}>
                <div className={styles.valuePropIcon}>
                  <Truck size={24} />
                </div>
                <div>
                  <h4>Livrare Rapidă</h4>
                  <p>Piese de schimb în 24-72h din stoc</p>
                </div>
              </div>
              <div className={styles.valueProp}>
                <div className={styles.valuePropIcon}>
                  <Wrench size={24} />
                </div>
                <div>
                  <h4>Mentenanță Completă</h4>
                  <p>Accesorii și consumabile pentru service</p>
                </div>
              </div>
              <div className={styles.valueProp}>
                <div className={styles.valuePropIcon}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Suport Tehnic</h4>
                  <p>Consultanță gratuită pentru selecție</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section id="branduri" className={styles.brandsSection} ref={ref}>
          <div className={styles.container}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2>Branduri Partenere</h2>
              <p>Colaborăm cu cei mai importanți producători mondiali pentru a-ți oferi soluții de calitate.</p>
            </motion.div>

            <div className={styles.brandsGrid}>
              {category.brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  className={`${styles.brandCard} ${brand.featured ? styles.brandCardFeatured : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className={styles.brandHeader}>
                    <h3 className={styles.brandName}>{brand.name}</h3>
                    {brand.featured && <span className={styles.brandBadge}>Top</span>}
                  </div>
                  <p className={styles.brandCountry}>{brand.country}</p>
                  <p className={styles.brandDescription}>{brand.description}</p>
                  <Link href="/contact" className={styles.brandCta}>
                    Solicită Ofertă →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Types */}
        <section className={styles.typesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Tipuri de Produse</h2>
              <p>Gamă completă pentru toate aplicațiile industriale</p>
            </div>

            <div className={styles.typesGrid}>
              {category.productTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  className={styles.typeCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className={styles.typeName}>{type.name}</h3>
                  <p className={styles.typeDescription}>{type.description}</p>
                  <div className={styles.typeApplications}>
                    <span className={styles.typeAppLabel}>Aplicații:</span>
                    <div className={styles.typeAppTags}>
                      {type.applications.map((app) => (
                        <span key={app} className={styles.typeAppTag}>{app}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessories & Services */}
        <section className={styles.extrasSection}>
          <div className={styles.container}>
            <div className={styles.extrasGrid}>
              {/* Accessories */}
              <div className={styles.extrasCard}>
                <h3>Piese de Schimb & Accesorii</h3>
                <p>Gamă completă de componente pentru mentenanță și service</p>
                <ul className={styles.extrasList}>
                  {category.accessories.map((item) => (
                    <li key={item}>
                      <Check size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={styles.extrasLink}>
                  Solicită piese de schimb →
                </Link>
              </div>

              {/* Services */}
              <div className={styles.extrasCard}>
                <h3>Servicii Incluse</h3>
                <p>Suport complet pentru succesul proiectului tău</p>
                <ul className={styles.extrasList}>
                  {category.services.map((item) => (
                    <li key={item}>
                      <Check size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={styles.extrasLink}>
                  Contactează-ne →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <div className={styles.ctaContent}>
                <h2>Ai nevoie de {category.name.toLowerCase()}?</h2>
                <p>
                  Contactează-ne pentru o ofertă personalizată. Echipa noastră tehnică 
                  te ajută să găsești soluția perfectă pentru aplicația ta.
                </p>
              </div>
              <Link href="/contact" className={styles.ctaButton}>
                Cere Ofertă Gratuită
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

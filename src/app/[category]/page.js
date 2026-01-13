'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Package, Truck, Wrench, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { categories } from '@/data/products';
import styles from './category.module.css';

export default function CategoryPage() {
  const params = useParams();
  const category = categories.find(c => c.slug === params.category);

  if (!category) {
    return (
      <>
        <Header />
        <main className={styles.notFound}>
          <h1>Categoria nu a fost găsită</h1>
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
        <section className={styles.hero} style={{ background: category.gradient }}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContainer}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className={styles.backLink}>
                <ArrowLeft size={18} />
                Înapoi la categorii
              </Link>
              
              <h1 className={styles.heroTitle}>{category.name}</h1>
              <p className={styles.heroTagline}>{category.tagline}</p>
              <p className={styles.heroDescription}>{category.heroDescription}</p>

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
                <a href="#contact-form" className={styles.ctaPrimary}>
                  Cere Ofertă
                  <ArrowRight size={18} />
                </a>
                <a href="#branduri" className={styles.ctaSecondary}>
                  Vezi Branduri
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brands Section */}
        <section id="branduri" className={styles.brandsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Branduri Premium</h2>
              <p>Colaborăm cu cele mai prestigioase branduri mondiale pentru a-ți oferi echipamente de cea mai înaltă calitate.</p>
            </div>

            <div className={styles.brandsGrid}>
              {category.brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  className={`${styles.brandCard} ${brand.featured ? styles.brandFeatured : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className={styles.brandLogo}>
                    {brand.name.charAt(0)}
                  </div>
                  <div className={styles.brandInfo}>
                    <h3>{brand.name}</h3>
                    <span className={styles.brandCountry}>{brand.country}</span>
                    <p>{brand.description}</p>
                  </div>
                  {brand.featured && (
                    <span className={styles.brandBadge}>Partner Premium</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Types Section */}
        <section className={styles.typesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Tipuri de {category.name}</h2>
              <p>Explorează gama completă de produse disponibile în această categorie.</p>
            </div>

            <div className={styles.typesGrid}>
              {category.productTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  className={styles.typeCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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
                  <a href="#contact-form" className={styles.typeLink}>
                    Cere ofertă <ArrowRight size={16} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Accessories */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.servicesGrid}>
              {/* Accessories */}
              <div className={styles.servicesCard}>
                <div className={styles.servicesIcon}>
                  <Package size={32} />
                </div>
                <h3>Piese de Schimb & Accesorii</h3>
                <p>Gamă completă de piese de schimb originale și accesorii pentru mentenanța echipamentelor.</p>
                <ul className={styles.servicesList}>
                  {category.accessories.map((acc) => (
                    <li key={acc}>
                      <Check size={16} />
                      {acc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className={styles.servicesCard}>
                <div className={styles.servicesIcon}>
                  <Wrench size={32} />
                </div>
                <h3>Servicii Tehnice</h3>
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

              {/* Delivery */}
              <div className={styles.servicesCard}>
                <div className={styles.servicesIcon}>
                  <Truck size={32} />
                </div>
                <h3>Livrare Rapidă</h3>
                <p>Livrăm rapid în toată România. Transport aerian disponibil pentru situații urgente.</p>
                <ul className={styles.servicesList}>
                  <li><Check size={16} />Livrare 24-72h pentru stoc disponibil</li>
                  <li><Check size={16} />Transport express internațional</li>
                  <li><Check size={16} />Livrare în toată România</li>
                  <li><Check size={16} />Ambalare profesională</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <h2>Cere Ofertă pentru {category.name}</h2>
                <p>
                  Completează formularul alăturat și vei primi o ofertă personalizată 
                  în cel mai scurt timp. Echipa noastră tehnică te va contacta pentru 
                  a înțelege exact nevoile tale.
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

              <form className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Nume complet *</label>
                    <input type="text" placeholder="Nume și prenume" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Companie</label>
                    <input type="text" placeholder="Numele companiei" />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Email *</label>
                    <input type="email" placeholder="email@companie.ro" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Telefon *</label>
                    <input type="tel" placeholder="07XX XXX XXX" required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Categorie produs</label>
                  <select defaultValue={category.name}>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Descrieți solicitarea *</label>
                  <textarea 
                    rows={5} 
                    placeholder="Descrieți echipamentele de care aveți nevoie, aplicația, cantitatea, etc."
                    required
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Trimite Cererea
                  <ArrowRight size={18} />
                </button>

                <p className={styles.formNote}>
                  * Câmpuri obligatorii. Datele tale sunt protejate conform GDPR.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Other Categories */}
        <section className={styles.otherCategories}>
          <div className={styles.container}>
            <h2>Explorează și alte categorii</h2>
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
      </main>
      <Footer />
    </>
  );
}

'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Package, Truck, Wrench, Phone, Send, Plus, ShoppingCart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { categories } from '@/data/products';
import { useQuoteCart } from '@/context/QuoteCartContext';
import styles from './category.module.css';

export default function CategoryPage() {
  const params = useParams();
  const category = categories.find(c => c.slug === params.category);
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
                  <div className={styles.brandActions}>
                    <button
                      className={`${styles.brandAddBtn} ${isInCart(brand.name) ? styles.inCart : ''} ${addedAnimation === brand.name ? styles.adding : ''}`}
                      onClick={() => handleAddToCart({
                        type: 'brand',
                        name: brand.name,
                        category: category.name,
                        url: `/brand/${brand.slug}`
                      })}
                      title={isInCart(brand.name) ? 'În cerere' : 'Adaugă la cerere'}
                    >
                      {isInCart(brand.name) ? <Check size={16} /> : <Plus size={16} />}
                    </button>
                    <Link href={`/brand/${brand.slug}`} className={styles.brandLink}>
                      Detalii <ArrowRight size={14} />
                    </Link>
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
                <h2>Solicitați Ofertă pentru {category.name}</h2>
                <p>
                  Completați formularul alăturat pentru a primi o ofertă personalizată 
                  în cel mai scurt timp. Echipa noastră tehnică vă va contacta pentru 
                  a identifica soluția optimă pentru cerințele dumneavoastră.
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

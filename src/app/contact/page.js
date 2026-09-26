'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Check, X, ShoppingCart, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { companyInfo } from '@/data/products';
import { allCategoriesUnified as categories, getBrandByAnySlug } from '@/data/allBrandsIndex';
import { siteStats } from '@/data/siteStats';
import { useQuoteCart } from '@/context/QuoteCartContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './contact.module.css';

export default function ContactPage() {
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [formRef, formVisible] = useIntersectionObserver();
  const [infoRef, infoVisible] = useIntersectionObserver();
  const [mapRef, mapVisible] = useIntersectionObserver();
  const { items: cartItems, removeItem, clearCart, getCartSummary } = useQuoteCart();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [honeypot, setHoneypot] = useState('');
  const [formLoadedAt] = useState(() => Date.now());

  // v11 (D-2026-09-26): "Categorii de interes" is a checkbox list over ALL
  // 15 site categories (not the 5 legacy ones). Categories are pre-checked
  // from the quote-cart items — a brand item checks every category the brand
  // belongs to (primary + secondary, src/data/brandCategoryLinks.js), a
  // product/category item checks its category — and the visitor can tick or
  // untick freely. `touched` remembers manual changes so a cart refresh never
  // re-checks a box the visitor cleared.
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [touched, setTouched] = useState({});
  const categoryNameBySlug = Object.fromEntries(categories.map((c) => [c.slug, c.name]));
  const categorySlugByName = Object.fromEntries(categories.map((c) => [c.name.toLowerCase(), c.slug]));
  const categoriesFromCart = (items) => {
    const found = new Set();
    for (const item of items) {
      const path = (item.url || '').replace(/^https?:\/\/[^/]+/, '').split(/[#?]/)[0];
      const brandMatch = path.match(/^\/brand\/([^/]+)/);
      if (brandMatch) {
        const brand = getBrandByAnySlug(brandMatch[1]);
        (brand?.categories || []).forEach((c) => found.add(c.slug));
        continue;
      }
      const catMatch = path.match(/^\/([^/]+)$/);
      if (catMatch && categoryNameBySlug[catMatch[1]]) found.add(catMatch[1]);
      const byName = item.category && categorySlugByName[String(item.category).toLowerCase()];
      if (byName) found.add(byName);
    }
    return [...found];
  };
  useEffect(() => {
    const auto = categoriesFromCart(cartItems);
    setCheckedCategories((prev) => {
      const next = new Set(prev);
      for (const slug of auto) if (touched[slug] !== false) next.add(slug);
      return [...next];
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);
  const toggleCategory = (slug) => {
    setCheckedCategories((prev) => {
      const isOn = prev.includes(slug);
      setTouched((t) => ({ ...t, [slug]: !isOn }));
      return isOn ? prev.filter((x) => x !== slug) : [...prev, slug];
    });
  };

  // Pre-fill message with cart items including links
  useEffect(() => {
    if (cartItems.length > 0 && !formData.message) {
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.infinitrade.ro';
      const cartSummaryWithLinks = cartItems.map(item => {
        const emoji = item.type === 'brand' ? '🏷️' : item.type === 'category' ? '📦' : '🔧';
        const link = item.url ? `${baseUrl}${item.url}` : '';
        return `${emoji} ${item.name}${item.category ? ` (${item.category})` : ''}${link ? `\n   Link: ${link}` : ''}`;
      }).join('\n\n');

      setFormData(prev => ({
        ...prev,
        message: `Solicit ofertă pentru:\n\n${cartSummaryWithLinks}\n\nDetalii suplimentare:\n`
      }));
    }
  }, [cartItems]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Add cart items to form data for API (including URLs)
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.infinitrade.ro';
    const categoryLabel = checkedCategories
      .map((slug) => (slug === 'altele' ? 'Altele' : categoryNameBySlug[slug]))
      .filter(Boolean)
      .join(', ')
      .slice(0, 500);
    const submitData = {
      ...formData,
      category: categoryLabel,
      categorySlugs: checkedCategories,
      website: honeypot,
      _t: formLoadedAt,
      cartItems: cartItems.map(item => ({
        type: item.type,
        name: item.name,
        category: item.category,
        url: item.url ? `${baseUrl}${item.url}` : null
      }))
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      // Handle empty or invalid JSON responses
      let result;
      const responseText = await response.text();

      if (!responseText || responseText.trim() === '') {
        // Empty response - likely a timeout or server error
        throw new Error('Serverul nu a răspuns. Te rugăm să încerci din nou sau să ne contactezi direct la email.');
      }

      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        // Invalid JSON response
        console.error('Invalid JSON response:', responseText);
        throw new Error('Eroare la procesarea răspunsului. Te rugăm să încerci din nou.');
      }

      if (!response.ok) {
        throw new Error(result.error || 'Eroare la trimiterea formularului');
      }

      // Clear cart after successful submission
      clearCart();
      setIsSubmitted(true);
    } catch (err) {
      // Handle network errors specifically
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setError('Eroare de conexiune. Verifică conexiunea la internet și încearcă din nou.');
      } else {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <main id="main-content" className={styles.main}>
        {/* Hero */}
        <section className={styles.hero} ref={heroRef}>
          <div className={styles.container}>
            <div
              className={`animate-fade-up ${heroVisible ? 'is-visible' : ''}`}
            >
              <h1 className={styles.title}>Contactează-ne</h1>
              <p className={styles.subtitle}>
                Echipa noastră este pregătită să te ajute cu orice întrebare.
                Oferim consultanță tehnică gratuită pentru selecția echipamentelor.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {/* Contact Form */}
              <div
                ref={formRef}
                className={`${styles.formWrapper} animate-fade-left animate-delay-2 ${formVisible ? 'is-visible' : ''}`}
              >
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <h2>Cere Ofertă</h2>
                    <p>Completează formularul și te vom contacta în cel mai scurt timp.</p>

                    {/* Cart Items Display */}
                    {cartItems.length > 0 && (
                      <div className={styles.cartItemsSection}>
                        <div className={styles.cartItemsHeader}>
                          <ShoppingCart size={18} />
                          <span>Produse selectate ({cartItems.length})</span>
                        </div>
                        <div className={styles.cartItemsList}>
                          {cartItems.map((item) => (
                            <div key={item.id} className={styles.cartItemTag}>
                              <span className={styles.cartItemEmoji}>
                                {item.type === 'brand' ? '🏷️' : item.type === 'category' ? '📦' : '🔧'}
                              </span>
                              <div className={styles.cartItemContent}>
                                {item.url ? (
                                  <Link href={item.url} className={styles.cartItemLink} target="_blank" rel="noopener noreferrer">
                                    {item.name}
                                    <ExternalLink size={12} />
                                  </Link>
                                ) : (
                                  <span className={styles.cartItemName}>{item.name}</span>
                                )}
                                {item.category && <small className={styles.cartItemCategory}>{item.category}</small>}
                              </div>
                              <button
                                type="button"
                                className={styles.cartItemRemoveBtn}
                                onClick={() => removeItem(item.id)}
                              >
                                <X size={14} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label htmlFor="name">Nume și Prenume *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="email">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="phone">Telefon</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="company">Companie</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <fieldset className={styles.categoryFieldset}>
                      <legend>
                        Categorii de interes
                        <span className={styles.categoryHint}>
                          {checkedCategories.length > 0
                            ? ` — ${checkedCategories.length} ${checkedCategories.length === 1 ? 'selectată' : 'selectate'}${cartItems.length > 0 ? ' (completate din cererea ta; poți bifa sau debifa)' : ''}`
                            : ' — bifează una sau mai multe'}
                        </span>
                      </legend>
                      <div className={styles.categoryGrid}>
                        {[...categories.map((cat) => ({ slug: cat.slug, name: cat.name })), { slug: 'altele', name: 'Altele' }].map((cat) => (
                          <label key={cat.slug} className={`${styles.categoryOption} ${checkedCategories.includes(cat.slug) ? styles.categoryOptionChecked : ''}`}>
                            <input
                              type="checkbox"
                              name="categories"
                              value={cat.slug}
                              checked={checkedCategories.includes(cat.slug)}
                              onChange={() => toggleCategory(cat.slug)}
                            />
                            <span>{cat.name}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div className={styles.formGroup}>
                      <label htmlFor="message">Mesaj *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Descrie ce echipamente cauți, specificații tehnice, cantități, termen de livrare dorit..."
                        required
                      />
                    </div>

                    {/* Honeypot - invisible to humans, bots fill it */}
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, height: 0, overflow: 'hidden', tabIndex: -1 }}>
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        autoComplete="off"
                        tabIndex={-1}
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
                  </form>
                ) : (
                  <div className={styles.successMessage}>
                    <div className={styles.successIcon}>
                      <Check size={32} />
                    </div>
                    <h2>Mulțumim pentru mesaj!</h2>
                    <p>
                      Am primit cererea dumneavoastră și vă vom contacta în cel mai scurt timp posibil.
                      De obicei răspundem în maxim 24 de ore în zilele lucrătoare.
                    </p>
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div
                ref={infoRef}
                className={`${styles.info} animate-fade-right animate-delay-3 ${infoVisible ? 'is-visible' : ''}`}
              >
                <div className={styles.infoCard}>
                  <h2>Informații Contact</h2>
                  
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Email Vânzări</span>
                      <a href="mailto:vanzari@infinitrade-romania.ro">
                        vanzari@infinitrade-romania.ro
                      </a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Email Secretariat</span>
                      <a href="mailto:secretariat@infinitrade-romania.ro">
                        secretariat@infinitrade-romania.ro
                      </a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <Clock size={20} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Program</span>
                      <span>Luni - Vineri: 08:00 - 16:30</span>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Adresă</span>
                      <span>
                        {companyInfo.location.address}<br />
                        {companyInfo.location.city}, {companyInfo.location.county}<br />
                        {companyInfo.location.country}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.whyCard}>
                  <h2>De ce să ne alegi?</h2>
                  <ul>
                    <li>
                      <Check size={18} />
                      Consultanță tehnică gratuită
                    </li>
                    <li>
                      <Check size={18} />
                      {siteStats.brands} de branduri disponibile
                    </li>
                    <li>
                      <Check size={18} />
                      Livrare rapidă în toată România
                    </li>
                    <li>
                      <Check size={18} />
                      Piese de schimb și service
                    </li>
                    <li>
                      <Check size={18} />
                      {siteStats.years} ani de experiență
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className={styles.mapSection}>
          <div className={styles.container}>
            <div
              ref={mapRef}
              className={`${styles.mapWrapper} animate-fade-up ${mapVisible ? 'is-visible' : ''}`}
            >
              <div className={styles.mapHeader}>
                <h2>Locația Noastră</h2>
                <p>Calea Lugojului 47/B, Hala 3, Ghiroda, Timiș 307200</p>
              </div>
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps?q=Calea+Lugojului+47B,+Ghiroda,+Timis,+Romania&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locația Driatheli Group SRL - Calea Lugojului 47/B, Ghiroda, Timiș"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

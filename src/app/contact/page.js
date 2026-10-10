'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Check, X, ShoppingCart, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import ClickToLoadMap from '@/components/ClickToLoadMap';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { companyInfo, GOOGLE_BUSINESS_PROFILE_URL } from '@/data/company';
import { CLIENT_CATEGORIES as categories } from '@/data/headerMenus';
import { BRAND_CATEGORY_SLUGS } from '@/data/brandCategorySlugs';
import { siteStats } from '@/data/siteStats';
import { useQuoteCart } from '@/context/QuoteCartContext';
import { ROLE_OPTIONS, ROLE_VALUES } from '@/data/roleOptions';
import { validateQuoteForm, QUOTE_FIELDS, PLACEHOLDERS } from '@/lib/formValidation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './contact.module.css';

// v16 (D-2026-09-26): compact generated indexes instead of allBrandsIndex.js
// (which pulled every brandContent batch into this client page). Old cart
// entries may still carry a legacy prefixed brand slug
// (e.g. /brand/pompe-industriale-grundfos): strip the prefix the same way
// allBrandsIndex.getBrandByAnySlug does.
const LEGACY_BRAND_PREFIXES = [
  'pompe-industriale-', 'pompe-vid-industriale-', 'robineti-industriali-', 'robineti-reglare-industriali-',
  'regulatoare-presiune-industriale-', 'oale-condens-industriale-', 'supape-siguranta-industriale-',
  'motoare-electrice-industriale-', 'motoare-atex-industriale-', 'schimbatoare-caldura-industriale-',
  'racitoare-ulei-industriale-', 'suflante-industriale-', 'suflante-roots-industriale-',
  'ventilatoare-industriale-', 'compresoare-industriale-',
];
// v27: atașament opțional (listă Excel/CSV, PDF, poza plăcuței). Limita de
// 3 MB ține cererea sub limita de 4,5 MB a funcțiilor Vercel (base64 +33%).
const MAX_FILE_BYTES = 3 * 1024 * 1024;
const ALLOWED_EXT = ['xlsx', 'xls', 'csv', 'pdf', 'jpg', 'jpeg', 'png', 'webp'];
const FILE_ACCEPT = ALLOWED_EXT.map((e) => '.' + e).join(',');
const ROLE_PLACEHOLDERS = {
  mentenanta: 'Producătorul, codul de pe plăcuță sau codul piesei, ce s-a defectat, cantitatea și dacă oprește producția...',
  proiecte: 'Proiectul, lista de echipamente (sau atașați fișierul), termenele și documentele cerute...',
  achizitii: 'Reperele sau lista pentru ofertă, ori documentele de înscriere ca furnizor pe care ni le trimiteți...',
};

const brandCategorySlugs = (slug) => {
  if (BRAND_CATEGORY_SLUGS[slug]) return BRAND_CATEGORY_SLUGS[slug];
  const prefix = LEGACY_BRAND_PREFIXES.find((p) => slug.startsWith(p));
  return (prefix && BRAND_CATEGORY_SLUGS[slug.slice(prefix.length)]) || [];
};

export default function ContactPage() {
  // v17: the hero is rendered visible (no scroll-reveal) — it is the LCP
  // element, and hiding it until hydration pushed LCP past 2.5 s on mobile.
  const [heroRef] = useIntersectionObserver();
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
  const [role, setRole] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [fileError, setFileError] = useState(null);

  // v27: /contact?rol=mentenanta (din paginile de rol) precompletează rolul.
  useEffect(() => {
    try {
      const r = new URLSearchParams(window.location.search).get('rol');
      if (r && ROLE_VALUES.includes(r)) setRole(r);
    } catch (e) { /* fără parametru */ }
  }, []);

  const handleFile = (e) => {
    const f = e.target.files && e.target.files[0];
    setFileError(null);
    if (!f) { setAttachment(null); return; }
    const ext = (f.name.split('.').pop() || '').toLowerCase();
    if (!ALLOWED_EXT.includes(ext)) {
      setFileError('Tip de fișier neacceptat. Folosiți Excel, CSV, PDF, JPG, PNG sau WEBP.');
      e.target.value = '';
      setAttachment(null);
      return;
    }
    if (f.size > MAX_FILE_BYTES) {
      setFileError('Fișierul depășește 3 MB. Trimiteți-l comprimat sau pe e-mail, la vanzari@infinitrade-romania.ro.');
      e.target.value = '';
      setAttachment(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const res = String(reader.result || '');
      setAttachment({ name: f.name.slice(0, 150), type: f.type || '', size: f.size, data: res.slice(res.indexOf(',') + 1) });
    };
    reader.onerror = () => setFileError('Fișierul nu a putut fi citit. Încercați din nou.');
    reader.readAsDataURL(f);
  };
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
        brandCategorySlugs(brandMatch[1]).forEach((slug) => found.add(slug));
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

  // v33: aceeași validare ca pe server (src/lib/formValidation.js); erorile
  // apar sub fiecare câmp, în română, iar cursorul sare la primul câmp greșit.
  const [fieldErrors, setFieldErrors] = useState({});
  const showFieldErrors = (fields) => {
    setFieldErrors(fields);
    const first = QUOTE_FIELDS.find((k) => fields[k]);
    if (first && typeof document !== 'undefined') document.getElementById(first)?.focus();
  };
  const fieldProps = (key) => ({
    'aria-invalid': fieldErrors[key] ? 'true' : undefined,
    'aria-describedby': fieldErrors[key] ? `${key}-error` : undefined,
    className: fieldErrors[key] ? styles.inputInvalid : undefined,
  });
  const fieldError = (key) => (fieldErrors[key]
    ? <p id={`${key}-error`} className={styles.fieldError}>{fieldErrors[key]}</p>
    : null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const check = validateQuoteForm(formData);
    if (!check.ok) {
      showFieldErrors(check.fields);
      setError('Vă rugăm să corectați câmpurile marcate cu roșu.');
      return;
    }
    setFieldErrors({});
    setIsLoading(true);

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
      role: role || undefined,
      attachment: attachment || undefined,
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
        throw new Error('Serverul nu a răspuns. Vă rugăm să încercați din nou sau să ne scrieți direct pe e-mail.');
      }

      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        // Invalid JSON response
        console.error('Invalid JSON response:', responseText);
        throw new Error('Eroare la procesarea răspunsului. Vă rugăm să încercați din nou.');
      }

      if (!response.ok) {
        if (result.fields) {
          showFieldErrors(result.fields);
          throw new Error('Vă rugăm să corectați câmpurile marcate cu roșu.');
        }
        throw new Error(result.error || 'Cererea nu a putut fi trimisă. Vă rugăm să încercați din nou sau să ne scrieți la vanzari@infinitrade-romania.ro.');
      }

      // Clear cart after successful submission
      clearCart();
      setIsSubmitted(true);
    } catch (err) {
      // Handle network errors specifically
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setError('Eroare de conexiune. Verificați conexiunea la internet și încercați din nou.');
      } else {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (fieldErrors[name]) setFieldErrors((prev) => { const next = { ...prev }; delete next[name]; return next; });
  };

  return (
    <>
      <Header />
      <main id="main-content" className={styles.main}>
        {/* Hero */}
        <section className={styles.hero} ref={heroRef}>
          <div className={styles.container}>
            <div>
              <h1 className={styles.title}>Contactați-ne</h1>
              <p className={styles.subtitle}>
                Trimiteți codul, poza plăcuței sau lista de echipamente; răspundem de regulă în aceeași zi lucrătoare sau în următoarea.
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
                  <form onSubmit={handleSubmit} className={styles.form} noValidate>
                    <h2>Cerere de ofertă</h2>
                    <p>Completați formularul; puteți atașa lista de repere, poza plăcuței sau documentele de calificare.</p>

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
                                aria-label={`Elimină ${item.name} din cerere`}
                                title="Elimină din cerere"
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
                        <label htmlFor="name">Nume și prenume *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          autoComplete="name"
                          placeholder={PLACEHOLDERS.name}
                          {...fieldProps('name')}
                          required
                        />
                        {fieldError('name')}
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="email">E-mail *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                          inputMode="email"
                          placeholder={PLACEHOLDERS.email}
                          {...fieldProps('email')}
                          required
                        />
                        {fieldError('email')}
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="phone">Telefon</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          inputMode="tel"
                          placeholder={PLACEHOLDERS.phone}
                          {...fieldProps('phone')}
                        />
                        {fieldError('phone')}
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="company">Companie</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          autoComplete="organization"
                          placeholder={PLACEHOLDERS.company}
                          {...fieldProps('company')}
                        />
                        {fieldError('company')}
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="role">Rolul dumneavoastră</label>
                        <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                          <option value="">Selectați (opțional)</option>
                          {ROLE_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <fieldset className={styles.categoryFieldset}>
                      <legend>
                        Categorii de interes
                        <span className={styles.categoryHint}>
                          {checkedCategories.length > 0
                            ? ` — ${checkedCategories.length} ${checkedCategories.length === 1 ? 'selectată' : 'selectate'}${cartItems.length > 0 ? ' (completate din cererea dumneavoastră; le puteți bifa sau debifa)' : ''}`
                            : ' — bifați una sau mai multe'}
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
                        {...fieldProps('message')}
                        rows={5}
                        placeholder={ROLE_PLACEHOLDERS[role] || 'Descrieți echipamentele, codurile, cantitățile și termenul de livrare dorit...'}
                        required
                      />
                      {fieldError('message')}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="attachment">Atașament (opțional)</label>
                      <input
                        type="file"
                        id="attachment"
                        name="attachment"
                        accept={FILE_ACCEPT}
                        onChange={handleFile}
                        aria-describedby="attachment-help"
                      />
                      <small id="attachment-help" className={styles.categoryHint}>
                        Listă de repere (Excel, CSV), PDF sau poza plăcuței (JPG, PNG, WEBP), până la 3 MB.
                        {attachment ? ` Atașat: ${attachment.name}.` : ''}
                      </small>
                      {fileError && <div className={styles.errorMessage} role="alert">{fileError}</div>}
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
                      <div className={styles.errorMessage} role="alert">
                        {error}
                      </div>
                    )}

                    <button 
                      type="submit" 
                      className={styles.submitButton}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Se trimite...' : 'Trimiteți cererea'}
                      {!isLoading && <Send size={18} />}
                    </button>

                    {/* v49: promisiunea de răspuns lângă buton și nota de informare
                        GDPR (art. 13) — fără bifă: datele se folosesc pentru
                        cererea de ofertă (art. 6 alin. 1 lit. b). */}
                    <p className={styles.formNote}>
                      Vă răspundem de regulă în aceeași zi lucrătoare sau în următoarea.
                    </p>
                    <p className={styles.formNote}>
                      Folosim datele din formular doar pentru a vă răspunde și pentru oferta solicitată.
                      Detalii în <Link href="/politica-confidentialitate">Politica de confidențialitate</Link>.
                    </p>
                  </form>
                ) : (
                  <div className={styles.successMessage} role="status">
                    <div className={styles.successIcon}>
                      <Check size={32} />
                    </div>
                    <h2>Mulțumim, am primit cererea</h2>
                    <p>
                      Vă răspundem de regulă în aceeași zi lucrătoare sau în următoarea.
                      Pentru urgențe de producție, sunați-ne la +40 371 232 404 (luni–vineri, 08:00–16:30).
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
                      <span className={styles.infoLabel}>E-mail vânzări</span>
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
                      <span className={styles.infoLabel}>E-mail secretariat</span>
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
                      <span>Luni–vineri: 08:00–16:30</span>
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
                  <h2>Ce primiți de la noi</h2>
                  <ul>
                    <li>
                      <Check size={18} />
                      Consultanță tehnică gratuită
                    </li>
                    <li>
                      <Check size={18} />
                      {siteStats.brands} de branduri cu pagină proprie
                    </li>
                    <li>
                      <Check size={18} />
                      Termen de livrare scris în ofertă (din stoc: 24–72 h)
                    </li>
                    <li>
                      <Check size={18} />
                      Piese de schimb originale și documente de conformitate
                    </li>
                    <li>
                      <Check size={18} />
                      Activi din {siteStats.foundingYear}, înregistrați în SEAP
                    </li>
                  </ul>
                  <p style={{ marginTop: '1rem' }}>
                    Pentru companii:{' '}
                    <Link href="/achizitii">achiziții</Link>
                    {' · '}
                    <Link href="/mentenanta">mentenanță</Link>
                    {' · '}
                    <Link href="/proiecte">proiecte (CAPEX)</Link>
                  </p>
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
                <h2>Sediu și depozit</h2>
                <p>Calea Lugojului 47/B, Hala 3, Ghiroda, Timiș 307200</p>
                <p>
                  <a href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                    Vedeți profilul nostru pe Google Maps (program, indicații rutiere, recenzii) <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </p>
              </div>
              <div className={styles.mapContainer}>
                <ClickToLoadMap
                  src="https://www.google.com/maps?q=Calea+Lugojului+47B,+Ghiroda,+Timis,+Romania&output=embed"
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

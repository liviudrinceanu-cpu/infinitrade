'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { companyInfo, categories } from '@/data/products';
import styles from './contact.module.css';

export default function ContactPage() {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className={styles.title}>Contactează-ne</h1>
              <p className={styles.subtitle}>
                Echipa noastră este pregătită să te ajute cu orice întrebare. 
                Oferim consultanță tehnică gratuită pentru selecția echipamentelor.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {/* Contact Form */}
              <motion.div
                className={styles.formWrapper}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <h2>Cere Ofertă</h2>
                    <p>Completează formularul și te vom contacta în cel mai scurt timp.</p>

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

                    <div className={styles.formGroup}>
                      <label htmlFor="category">Categorie de Interes</label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                      >
                        <option value="">Selectează categoria</option>
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                        <option value="altele">Altele</option>
                      </select>
                    </div>

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
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className={styles.info}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className={styles.infoCard}>
                  <h3>Informații Contact</h3>
                  
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
                  <h3>De ce să ne alegi?</h3>
                  <ul>
                    <li>
                      <Check size={18} />
                      Consultanță tehnică gratuită
                    </li>
                    <li>
                      <Check size={18} />
                      Peste 500 de branduri disponibile
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
                      15+ ani de experiență
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

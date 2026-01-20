'use client';

import { motion } from 'framer-motion';
import { Award, Users, Globe, Clock, Shield, Truck, CheckCircle, Building } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { companyInfo, targetIndustries } from '@/data/products';
import styles from './despre.module.css';

export default function DesprePage() {
  const stats = [
    { value: companyInfo.stats.years, label: 'Ani Experiență', icon: Clock },
    { value: companyInfo.stats.clients, label: 'Clienți Industriali', icon: Users },
    { value: companyInfo.stats.brands, label: 'Branduri Distribuite', icon: Globe },
    { value: companyInfo.stats.suppliers, label: 'Furnizori Globali', icon: Truck },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground} />
          <div className={styles.heroContainer}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.heroContent}
            >
              <h1>Despre Infinitrade Romania</h1>
              <p className={styles.heroTagline}>{companyInfo.tagline}</p>
              <p className={styles.heroDescription}>
                Partener strategic pentru industria românească din 2009. Furnizăm echipamente 
                industriale de înaltă performanță pentru cele mai exigente aplicații.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={styles.statCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <stat.icon size={32} className={styles.statIcon} />
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.aboutGrid}>
              <motion.div
                className={styles.aboutContent}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2>Cine Suntem</h2>
                <p>
                  <strong>Infinitrade Romania</strong> e brandul sub care operăm din 2009, parte a
                  <strong> Driatheli Group SRL</strong>. Am început cu câțiva clienți și câteva branduri,
                  și am crescut pe baza unui principiu simplu: livrăm ce promitem, când promitem.
                </p>
                <p>
                  Știm cum e să ai o pompă stricată vineri după-amiază și producția oprită (am fost și noi în situația aia).
                  De asta am construit stocuri pentru componentele critice și relații cu peste 300 de furnizori
                  din toată Europa. Când ai nevoie urgent de ceva, de obicei găsim o soluție - nu garantăm mereu, dar încercăm.
                </p>
                <p>
                  Lucrăm cu peste <strong>500 de branduri internaționale</strong>: de la Grundfos și Wilo
                  la pompe, Siemens și ABB la motoare, până la Alfa Laval pentru schimbătoare de căldură.
                  Nu vindem orice - vindem ce știm că funcționează.
                </p>

                <h3>Ce Ne Diferențiază</h3>
                <p>
                  Nu suntem cel mai mare distribuitor din România și nu pretindem să fim. Dar clienții
                  care lucrează cu noi rămân pentru că răspundem la telefon, știm ce vindem și nu
                  dispărem după ce livrăm. Suportul tehnic nu e un cost pentru noi, e modul în care
                  ne facem treaba.
                </p>
              </motion.div>

              <motion.div
                className={styles.aboutFeatures}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3>De Ce Să Ne Alegeți</h3>
                <ul className={styles.featureList}>
                  <li>
                    <CheckCircle size={20} />
                    <span>Distribuitor autorizat pentru branduri premium</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Stocuri strategice pentru livrare rapidă 24-72h</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Echipă tehnică specializată pentru consultanță</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Piese de schimb originale cu garanție</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Furnizor înregistrat SEAP/SICAP</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Certificare ISO 9001:2015</span>
                  </li>
                </ul>

                <div className={styles.certifications}>
                  <h4>Certificări</h4>
                  <div className={styles.certList}>
                    {companyInfo.certifications.map((cert) => (
                      <span key={cert} className={styles.certBadge}>
                        <Shield size={16} />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className={styles.industriesSection}>
          <div className={styles.container}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Industrii Deservite</h2>
              <p>Furnizăm echipamente industriale pentru cele mai importante sectoare ale economiei</p>
            </motion.div>

            <div className={styles.industriesGrid}>
              {companyInfo.industries.slice(0, 12).map((industry, index) => (
                <motion.div
                  key={industry}
                  className={styles.industryCard}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Building size={24} />
                  <span>{industry}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className={styles.clientsSection}>
          <div className={styles.container}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Clienți de Referință</h2>
              <p>Companii de top care ne-au acordat încrederea</p>
            </motion.div>

            <div className={styles.clientsGrid}>
              {companyInfo.majorClients.map((client, index) => (
                <motion.div
                  key={client}
                  className={styles.clientCard}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <motion.div
              className={styles.ctaBox}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Pregătiți pentru o colaborare?</h2>
              <p>
                Echipa noastră tehnică vă stă la dispoziție pentru consultanță și oferte personalizate.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimary}>
                  Solicită Ofertă
                </a>
                <a href="tel:0371232404" className={styles.ctaSecondary}>
                  Sună: 0371 232 404
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

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
                  <strong>Infinitrade Romania</strong>, parte a grupului <strong>Driatheli Group SRL</strong>, 
                  este unul dintre cei mai importanți distribuitori de echipamente industriale din România, 
                  activ pe piață din 2009.
                </p>
                <p>
                  Înțelegem provocările departamentelor de achiziții și mentenanță: nevoia de echipamente 
                  fiabile, livrări rapide pentru a evita oprirea producției și suport tehnic competent. 
                  De aceea, am construit o rețea de peste 300 de furnizori internaționali și menținem 
                  stocuri strategice pentru componentele critice.
                </p>
                <p>
                  Portofoliul nostru include peste <strong>500 de branduri internaționale</strong> de renume, 
                  acoperind toate nevoile industriale: pompe, robineți, motoare electrice, schimbătoare 
                  de căldură și suflante.
                </p>

                <h3>Misiunea Noastră</h3>
                <p>
                  Să fim partenerul de încredere al industriei românești, oferind echipamente de calitate 
                  superioară, suport tehnic specializat și servicii care minimizează timpul de nefuncționare 
                  al instalațiilor clienților noștri.
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

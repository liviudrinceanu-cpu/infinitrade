'use client';

import { Award, Users, Globe, Clock, Shield, Truck, CheckCircle, Building } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { companyInfo, targetIndustries } from '@/data/products';
import { siteStats } from '@/data/siteStats';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './despre.module.css';

export default function DesprePage() {
  // v17: the hero is rendered visible (no scroll-reveal) — it is the LCP
  // element, and hiding it until hydration pushed LCP past 2.5 s on mobile.
  const [heroRef] = useIntersectionObserver();
  // v19: stats sit right under the hero — rendered visible, no scroll-reveal.
  const [statsRef] = useIntersectionObserver();
  const [aboutRef, aboutVisible] = useIntersectionObserver();
  const [industriesRef, industriesVisible] = useIntersectionObserver();
  const [officialRef, officialVisible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();

  const stats = [
    { value: `${siteStats.years}+`, label: 'Ani Experiență', icon: Clock },
    { value: siteStats.foundingYear, label: 'Din anul', icon: Users },
    { value: siteStats.brands, label: 'Branduri cu pagină proprie', icon: Globe },
    { value: siteStats.leadTime, label: 'Livrare din stoc', icon: Truck },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero} ref={heroRef}>
          <div className={styles.heroBackground} />
          <div className={styles.heroContainer}>
            <div
              className={styles.heroContent}
            >
              <h1>Despre Infinitrade Romania</h1>
              <p className={styles.heroTagline}>{companyInfo.tagline}</p>
              <p className={styles.heroDescription}>
                Furnizor de echipamente industriale și piese de schimb pentru companii
                din România, din 2009.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection} ref={statsRef}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={styles.statCard}
                >
                  <stat.icon size={32} className={styles.statIcon} />
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className={styles.aboutSection} ref={aboutRef}>
          <div className={styles.container}>
            <div className={styles.aboutGrid}>
              <div
                className={`${styles.aboutContent} animate-fade-left ${aboutVisible ? 'is-visible' : ''}`}
              >
                <h2>Cine Suntem</h2>
                <p>
                  <strong>Infinitrade Romania</strong> e brandul sub care operăm din 2009, parte a
                  <strong> Driatheli Group SRL</strong>, cu sediul și depozitul în județul Timiș.
                </p>
                <p>
                  O pompă oprită înseamnă producție oprită. De aceea ținem pe stoc repere uzuale de mentenanță
                  în depozitul din Ghiroda și lucrăm prin canalele de aprovizionare ale producătorilor din Europa.
                  Pentru urgențe, vă spunem de la început termenul realist.
                </p>
                <p>
                  Lucrăm cu <strong>{siteStats.brands} de branduri internaționale din 16 categorii</strong>, fiecare cu pagină proprie pe site: de la Grundfos și Wilo
                  la pompe, Siemens și ABB la motoare, Endress+Hauser la senzori, Parker la hidraulică,
                  până la Schneider Electric pentru automatizări.
                </p>

                <h3>Ce Ne Diferențiază</h3>
                <p>
                  Nu pretindem că suntem cel mai mare furnizor din România. Ne concentrăm pe răspunsuri
                  tehnice corecte, termene scrise în ofertă și documentele de care au nevoie
                  departamentele de achiziții, mentenanță și investiții.
                </p>
              </div>

              <div
                className={`${styles.aboutFeatures} animate-fade-right animate-delay-2 ${aboutVisible ? 'is-visible' : ''}`}
              >
                <h3>De Ce Să Ne Alegeți</h3>
                <ul className={styles.featureList}>
                  <li>
                    <CheckCircle size={20} />
                    <span>Branduri din Europa, SUA și Asia, fiecare cu pagină proprie</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Repere uzuale pe stoc, livrare 24–72 h</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Suport tehnic la selecție</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Piese de schimb originale, cu garanția producătorului</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Furnizor înregistrat SEAP/SICAP</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>ISO 9001: certificare în curs</span>
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
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className={styles.industriesSection} ref={industriesRef}>
          <div className={styles.container}>
            <div
              className={`${styles.sectionHeader} animate-fade-up ${industriesVisible ? 'is-visible' : ''}`}
            >
              <h2>Industrii Deservite</h2>
              <p>Sectoare pentru care furnizăm echipamente și piese de schimb</p>
            </div>

            <div className={styles.industriesGrid}>
              {companyInfo.industries.slice(0, 12).map((industry, index) => (
                <div
                  key={industry}
                  className={`${styles.industryCard} animate-scale animate-delay-${Math.min(Math.floor(index * 0.5) + 1, 6)} ${industriesVisible ? 'is-visible' : ''}`}
                >
                  <Building size={24} />
                  <span>{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Official Data Section - E-E-A-T */}
        <section className={styles.officialSection} ref={officialRef}>
          <div className={styles.container}>
            <div
              className={`${styles.sectionHeader} animate-fade-up ${officialVisible ? 'is-visible' : ''}`}
            >
              <h2>Date Oficiale Verificabile</h2>
              <p>Informații publice din registrele oficiale (ONRC, 2024)</p>
            </div>
            <div className={styles.officialGrid}>
              <div className={styles.officialCard}>
                <span className={styles.officialLabel}>Cifră de Afaceri</span>
                <span className={styles.officialValue}>{companyInfo.officialData.revenue} {companyInfo.officialData.revenueUnit}</span>
                <span className={styles.officialYear}>{companyInfo.officialData.revenueYear}</span>
              </div>
              <div className={styles.officialCard}>
                <span className={styles.officialLabel}>Angajați</span>
                <span className={styles.officialValue}>{companyInfo.officialData.employees}</span>
                <span className={styles.officialYear}>persoane</span>
              </div>
              <div className={styles.officialCard}>
                <span className={styles.officialLabel}>CUI</span>
                <span className={styles.officialValue}>{companyInfo.officialData.cui}</span>
                <span className={styles.officialYear}>Cod Unic de Identificare</span>
              </div>
              <div className={styles.officialCard}>
                <span className={styles.officialLabel}>Nr. Reg. Com.</span>
                <span className={styles.officialValue}>{companyInfo.officialData.regCom}</span>
                <span className={styles.officialYear}>Registrul Comerțului</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-8 text-center">
              Ultima actualizare: Februarie 2026
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className={styles.ctaSection} ref={ctaRef}>
          <div className={styles.container}>
            <div
              className={`${styles.ctaBox} animate-fade-up ${ctaVisible ? 'is-visible' : ''}`}
            >
              <h2>Pregătiți pentru o colaborare?</h2>
              <p>
                Echipa noastră tehnică vă stă la dispoziție pentru consultanță și oferte personalizate.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimary}>
                  Solicită Ofertă
                </a>
                <a href="tel:+40371232404" className={styles.ctaSecondary}>
                  Sună: +40 371 232 404
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

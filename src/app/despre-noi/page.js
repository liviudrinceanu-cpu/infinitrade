'use client';

import { Award, Users, Globe, Clock, Shield, Truck, CheckCircle, Building } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { companyInfo, targetIndustries } from '@/data/products';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './despre.module.css';

export default function DesprePage() {
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [statsRef, statsVisible] = useIntersectionObserver();
  const [aboutRef, aboutVisible] = useIntersectionObserver();
  const [industriesRef, industriesVisible] = useIntersectionObserver();
  const [clientsRef, clientsVisible] = useIntersectionObserver();
  const [officialRef, officialVisible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();

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
        <section className={styles.hero} ref={heroRef}>
          <div className={styles.heroBackground} />
          <div className={styles.heroContainer}>
            <div
              className={`${styles.heroContent} animate-fade-up ${heroVisible ? 'is-visible' : ''}`}
            >
              <h1>Despre Infinitrade Romania</h1>
              <p className={styles.heroTagline}>{companyInfo.tagline}</p>
              <p className={styles.heroDescription}>
                Partener strategic pentru industria românească din 2009. Furnizăm echipamente
                industriale de înaltă performanță pentru cele mai exigente aplicații.
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
                  className={`${styles.statCard} animate-fade-up animate-delay-${Math.min(index + 1, 6)} ${statsVisible ? 'is-visible' : ''}`}
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
              </div>

              <div
                className={`${styles.aboutFeatures} animate-fade-right animate-delay-2 ${aboutVisible ? 'is-visible' : ''}`}
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
              <p>Furnizăm echipamente industriale pentru cele mai importante sectoare ale economiei</p>
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

        {/* Clients Section */}
        <section className={styles.clientsSection} ref={clientsRef}>
          <div className={styles.container}>
            <div
              className={`${styles.sectionHeader} animate-fade-up ${clientsVisible ? 'is-visible' : ''}`}
            >
              <h2>Clienți de Referință</h2>
              <p>Companii de top care ne-au acordat încrederea</p>
            </div>

            <div className={styles.clientsGrid}>
              {companyInfo.majorClients.map((client, index) => (
                <div
                  key={client}
                  className={`${styles.clientCard} animate-fade-up animate-delay-${Math.min(Math.floor(index * 0.5) + 1, 6)} ${clientsVisible ? 'is-visible' : ''}`}
                >
                  {client}
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
                <a href="tel:0371232404" className={styles.ctaSecondary}>
                  Sună: 0371 232 404
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

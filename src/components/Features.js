'use client';

import { Package, Truck, Wrench, Headphones, Shield, Globe } from 'lucide-react';
import { features } from '@/data/company';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './Features.module.css';

const iconMap = {
  Package,
  Truck,
  Wrench,
  Headphones,
  Shield,
  Globe,
};

export default function Features() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        {/* Header */}
        <div
          className={`${styles.header} animate-fade-up ${isVisible ? 'is-visible' : ''}`}
        >
          <h2 className={styles.title}>De ce Infinitrade?</h2>
          <p className={styles.subtitle}>
            Ce contează pentru achiziții, mentenanță și proiecte: stoc, termene scrise, piese originale și documente.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.grid}>
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className={`${styles.feature} animate-fade-up animate-delay-${Math.min(index + 1, 6)} ${isVisible ? 'is-visible' : ''}`}
              >
                <div className={styles.featureIcon}>
                  <Icon size={28} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`${styles.cta} animate-fade-up animate-delay-6 ${isVisible ? 'is-visible' : ''}`}
        >
          <div className={styles.ctaContent}>
            <h2>Aveți nevoie de asistență tehnică?</h2>
            <p>Trimiteți datele aplicației sau codul echipamentului; vă răspundem de regulă în aceeași zi lucrătoare sau în următoarea.</p>
          </div>
          <a href="/contact" className={styles.ctaButton}>
            Contactați echipa tehnică
          </a>
        </div>

        {/* Content Freshness Signal */}
        <p className="text-xs text-gray-400 mt-8 text-center">
          Ultima actualizare: septembrie 2026
        </p>
      </div>
    </section>
  );
}

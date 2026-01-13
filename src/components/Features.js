'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Package, Truck, Wrench, Headphones, Shield, Globe } from 'lucide-react';
import { features } from '@/data/products';
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>De ce Infinitrade?</h2>
          <p className={styles.subtitle}>
            Mai mult decât un distribuitor - suntem partenerul tău de încredere pentru succesul industrial.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className={styles.grid}>
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                className={styles.feature}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.featureIcon}>
                  <Icon size={28} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className={styles.ctaContent}>
            <h3>Ai nevoie de asistență tehnică?</h3>
            <p>Echipa noastră te poate asista în orice situație - contactează-ne.</p>
          </div>
          <a href="/contact" className={styles.ctaButton}>
            Contactează Echipa Tehnică
          </a>
        </motion.div>
      </div>
    </section>
  );
}

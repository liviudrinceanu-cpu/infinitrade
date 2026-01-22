'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gridOverlay} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Badge */}
          <motion.div
            className={styles.badge}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.05, duration: 0.3 }}
          >
            <span className={styles.badgeDot} />
            <span>Peste 500 de branduri internaționale</span>
          </motion.div>

          {/* Headline - LCP ELEMENT: Pure CSS animation, no JS dependency for immediate render */}
          <h1 className={`${styles.headline} ${styles.headlineAnimate}`}>
            Dăm puls
            <br />
            <span className={styles.headlineAccent}>industriei.</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            className={styles.subheadline}
            initial={{ y: 15 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            Distribuitor premium de echipamente industriale.
            Pompe, robineți, motoare, schimbătoare de căldură și suflante
            de la cele mai prestigioase branduri mondiale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={styles.ctas}
            initial={{ y: 15 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Link href="/contact" className={styles.ctaPrimary}>
              Cere Ofertă
              <ArrowRight size={18} />
            </Link>
            <Link href="#categorii" className={styles.ctaSecondary}>
              Explorează Produse
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className={styles.stats}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div className={styles.stat}>
              <span className={styles.statNumber}>800+</span>
              <span className={styles.statLabel}>Clienți Activi</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Branduri</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Ani Experiență</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>24h</span>
              <span className={styles.statLabel}>Livrare Rapidă</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          className={styles.visual}
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <div className={styles.visualInner}>
            {/* Abstract Industrial Visual */}
            <div className={styles.visualCircles}>
              <div className={styles.circle1}>
                <svg viewBox="0 0 200 200" className={styles.circleIcon}>
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                  <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                  <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="100" cy="100" r="20" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.circle2}>
                <svg viewBox="0 0 100 100" className={styles.gearIcon}>
                  <path d="M50 20 L55 35 L70 30 L65 45 L80 50 L65 55 L70 70 L55 65 L50 80 L45 65 L30 70 L35 55 L20 50 L35 45 L30 30 L45 35 Z" fill="currentColor"/>
                  <circle cx="50" cy="50" r="15" fill="white"/>
                </svg>
              </div>
              <div className={styles.circle3}>
                <svg viewBox="0 0 100 100" className={styles.flowIcon}>
                  <path d="M10 50 Q30 30 50 50 T90 50" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <path d="M10 60 Q30 40 50 60 T90 60" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
                  <path d="M10 70 Q30 50 50 70 T90 70" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                </svg>
              </div>
            </div>

            {/* Floating Brand Badges */}
            <div className={styles.floatingBadges}>
              <motion.div
                className={styles.floatingBadge}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Grundfos
              </motion.div>
              <motion.div
                className={styles.floatingBadge}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                Siemens
              </motion.div>
              <motion.div
                className={styles.floatingBadge}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                Alfa Laval
              </motion.div>
              <motion.div
                className={styles.floatingBadge}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                KSB
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      >
        <motion.div
          className={styles.scrollMouse}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className={styles.scrollWheel} />
        </motion.div>
      </motion.div>
    </section>
  );
}

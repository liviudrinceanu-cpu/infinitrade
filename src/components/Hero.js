'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

// Lazy load framer-motion only for non-critical animations (visual section)
// This improves LCP by not blocking the main thread with motion library initialization

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Mark as loaded after initial paint for progressive enhancement
    const timer = requestAnimationFrame(() => {
      setIsLoaded(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Elements - CSS only, no JS */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gridOverlay} />
      </div>

      <div className={styles.container}>
        {/* Content - Pure CSS animations for LCP optimization */}
        <div className={`${styles.content} ${styles.contentAnimate}`}>
          {/* Badge - CSS animation */}
          <div className={`${styles.badge} ${styles.badgeAnimate}`}>
            <span className={styles.badgeDot} />
            <span>Peste 500 de branduri internationale</span>
          </div>

          {/* Headline - LCP ELEMENT: Pure CSS animation, immediate render */}
          <h1 className={`${styles.headline} ${styles.headlineAnimate}`}>
            Dăm puls
            <br />
            <span className={styles.headlineAccent}>industriei.</span>
          </h1>

          {/* Subheadline - CSS animation */}
          <p className={`${styles.subheadline} ${styles.subheadlineAnimate}`}>
            Distribuitor premium de echipamente industriale.
            Pompe, robineti, motoare, schimbatoare de caldura si suflante
            de la cele mai prestigioase branduri mondiale.
          </p>

          {/* CTA Buttons - CSS animation */}
          <div className={`${styles.ctas} ${styles.ctasAnimate}`}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Cere Oferta
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="#categorii" className={styles.ctaSecondary}>
              Exploreaza Produse
            </Link>
          </div>

          {/* Stats - CSS animation */}
          <div className={`${styles.stats} ${styles.statsAnimate}`}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>800+</span>
              <span className={styles.statLabel}>Clienti Activi</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Branduri</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Ani Experienta</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>24h</span>
              <span className={styles.statLabel}>Livrare Rapida</span>
            </div>
          </div>
        </div>

        {/* Visual Element - CSS animations only, hidden on mobile */}
        <div className={`${styles.visual} ${isLoaded ? styles.visualLoaded : ''}`}>
          <div className={styles.visualInner}>
            {/* Abstract Industrial Visual - Pure CSS */}
            <div className={styles.visualCircles}>
              <div className={styles.circle1}>
                <svg viewBox="0 0 200 200" className={styles.circleIcon} aria-hidden="true">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                  <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                  <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="100" cy="100" r="20" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.circle2}>
                <svg viewBox="0 0 100 100" className={styles.gearIcon} aria-hidden="true">
                  <path d="M50 20 L55 35 L70 30 L65 45 L80 50 L65 55 L70 70 L55 65 L50 80 L45 65 L30 70 L35 55 L20 50 L35 45 L30 30 L45 35 Z" fill="currentColor"/>
                  <circle cx="50" cy="50" r="15" fill="white"/>
                </svg>
              </div>
              <div className={styles.circle3}>
                <svg viewBox="0 0 100 100" className={styles.flowIcon} aria-hidden="true">
                  <path d="M10 50 Q30 30 50 50 T90 50" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <path d="M10 60 Q30 40 50 60 T90 60" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
                  <path d="M10 70 Q30 50 50 70 T90 70" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                </svg>
              </div>
            </div>

            {/* Floating Brand Badges - Pure CSS animations */}
            <div className={styles.floatingBadges}>
              <div className={`${styles.floatingBadge} ${styles.float1}`}>
                Grundfos
              </div>
              <div className={`${styles.floatingBadge} ${styles.float2}`}>
                Siemens
              </div>
              <div className={`${styles.floatingBadge} ${styles.float3}`}>
                Alfa Laval
              </div>
              <div className={`${styles.floatingBadge} ${styles.float4}`}>
                KSB
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Pure CSS */}
      <div className={`${styles.scrollIndicator} ${styles.scrollIndicatorAnimate}`}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Droplets, Settings2, Zap, Thermometer, Wind, ArrowRight, Plus, Check } from 'lucide-react';
import { categories } from '@/data/products';
import { useQuoteCart } from '@/context/QuoteCartContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './Categories.module.css';

const iconMap = {
  Droplets,
  Settings2,
  Zap,
  Thermometer,
  Wind,
};

export default function Categories() {
  const [ref, isVisible] = useIntersectionObserver();
  const { addItem, items: cartItems } = useQuoteCart();
  const [addedAnimation, setAddedAnimation] = useState(null);

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    const success = addItem(item);
    if (success) {
      setAddedAnimation(item.name);
      setTimeout(() => setAddedAnimation(null), 1000);
    }
  };

  const isInCart = (name) => {
    return cartItems.some(item => item.name === name);
  };

  return (
    <section id="categorii" className={styles.section} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <div
          className={`${styles.header} animate-fade-up ${isVisible ? 'is-visible' : ''}`}
        >
          <h2 className={styles.title}>Echipamente Industriale Premium</h2>
          <p className={styles.subtitle}>
            Explorează gama noastră completă de soluții industriale.
            De la pompe la motoare, avem tot ce ai nevoie pentru proiectul tău.
          </p>
        </div>

        {/* Categories Grid */}
        <div className={styles.grid}>
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <div
                key={category.id}
                className={`animate-fade-up animate-delay-${Math.min(index + 1, 6)} ${isVisible ? 'is-visible' : ''}`}
              >
                <Link href={`/${category.slug}`} className={styles.card}>
                  <div className={styles.cardInner}>
                    {/* Icon */}
                    <div 
                      className={styles.iconWrapper}
                      style={{ background: `${category.color}15` }}
                    >
                      <Icon 
                        size={32} 
                        style={{ color: category.color }}
                      />
                    </div>

                    {/* Content */}
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{category.name}</h3>
                      <p className={styles.cardTagline}>{category.tagline}</p>
                      <p className={styles.cardDescription}>{category.description}</p>
                    </div>

                    {/* Stats */}
                    <div className={styles.cardStats}>
                      <div className={styles.cardStat}>
                        <span className={styles.cardStatValue}>{category.stats.brands}</span>
                        <span className={styles.cardStatLabel}>Branduri</span>
                      </div>
                      <div className={styles.cardStat}>
                        <span className={styles.cardStatValue}>{category.stats.products}</span>
                        <span className={styles.cardStatLabel}>Produse</span>
                      </div>
                      <div className={styles.cardStat}>
                        <span className={styles.cardStatValue}>{category.stats.delivery}</span>
                        <span className={styles.cardStatLabel}>Livrare</span>
                      </div>
                    </div>

                    {/* Featured Brands */}
                    <div className={styles.cardBrands}>
                      {category.brands.filter(b => b.featured).slice(0, 4).map((brand) => (
                        <span key={brand.name} className={styles.brandTag}>
                          {brand.name}
                        </span>
                      ))}
                    </div>

                    {/* CTA + Add Button */}
                    <div className={styles.cardActions}>
                      <div className={styles.cardCta}>
                        <span>Explorează</span>
                        <ArrowRight size={18} />
                      </div>
                      <button
                        className={`${styles.addToCartBtn} ${isInCart(category.name) ? styles.inCart : ''} ${addedAnimation === category.name ? styles.adding : ''}`}
                        onClick={(e) => handleAddToCart(e, {
                          type: 'category',
                          name: category.name,
                          category: category.name,
                          url: `/${category.slug}`
                        })}
                        title={isInCart(category.name) ? 'În cerere' : 'Adaugă la cerere'}
                        aria-label={isInCart(category.name) ? `${category.name} este în cerere` : `Adaugă ${category.name} la cerere`}
                      >
                        {isInCart(category.name) ? <Check size={18} /> : <Plus size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Hover Gradient */}
                  <div 
                    className={styles.cardGradient}
                    style={{ background: category.gradient }}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

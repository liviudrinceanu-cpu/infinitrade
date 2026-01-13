'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Clock } from 'lucide-react';
import { navigation, categories } from '@/data/products';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.topBarLeft}>
            <a href="mailto:vanzari@infinitrade-romania.ro" className={styles.topBarLink}>
              <Mail size={14} />
              vanzari@infinitrade-romania.ro
            </a>
          </div>
          <div className={styles.topBarRight}>
            <a href="tel:0371232404" className={styles.topBarLink}>
              <Phone size={14} />
              0371 232 404
            </a>
            <span className={styles.topBarDivider}>|</span>
            <span className={styles.topBarLink}>
              <Clock size={14} />
              Luni - Vineri: 08:00 - 16:30
            </span>
          </div>
        </div>
      </div>

      {/* Main Header - Two Rows */}
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContent}>
          {/* Row 1: Logo + CTA */}
          <div className={styles.headerTop}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="/logo-header.png" 
                alt="Infinitrade - Dăm puls industriei" 
                width={280} 
                height={90}
                className={styles.logoImage}
                priority
              />
            </Link>

            <div className={styles.headerTopRight}>
              <Link href="/contact" className={styles.ctaButton}>
                Cere Ofertă
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                className={styles.mobileMenuButton}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Row 2: Navigation */}
          <nav className={styles.navRow}>
            <div className={styles.nav}>
              {navigation.map((item) => {
                const isCategory = !['/despre-noi', '/contact', '/'].includes(item.href);
                
                return (
                  <div
                    key={item.name}
                    className={styles.navItem}
                    onMouseEnter={() => isCategory && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link href={item.href} className={styles.navLink}>
                      {item.name}
                      {isCategory && (
                        <ChevronDown size={14} className={styles.navChevron} />
                      )}
                    </Link>
                    
                    {/* Dropdown for categories */}
                    <AnimatePresence>
                      {activeDropdown === item.name && isCategory && (
                        <motion.div
                          className={styles.dropdown}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {categories
                            .filter(cat => `/${cat.slug}` === item.href)
                            .map(category => (
                              <div key={category.id} className={styles.dropdownContent}>
                                <div className={styles.dropdownMain}>
                                  <h4>{category.name}</h4>
                                  <p>{category.tagline}</p>
                                  <Link href={`/${category.slug}`} className={styles.dropdownCta}>
                                    Vezi toate produsele →
                                  </Link>
                                </div>
                                <div className={styles.dropdownBrands}>
                                  <span className={styles.dropdownLabel}>Branduri populare:</span>
                                  <div className={styles.brandTags}>
                                    {category.brands.filter(b => b.featured).slice(0, 4).map(brand => (
                                      <Link 
                                        key={brand.slug} 
                                        href={`/brand/${brand.slug}`}
                                        className={styles.brandTag}
                                      >
                                        {brand.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <nav className={styles.mobileNav}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className={styles.mobileCta}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cere Ofertă
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

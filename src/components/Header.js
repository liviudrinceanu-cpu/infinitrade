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
            <span className={styles.topBarLink}>
              <Clock size={14} />
              Luni - Vineri: 08:00 - 16:30
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContent}>
          {/* Logo - Horizontal version */}
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo-full.png" 
              alt="Infinitrade - Dăm puls industriei" 
              width={200} 
              height={50}
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            {navigation.map((item) => (
              <div
                key={item.name}
                className={styles.navItem}
                onMouseEnter={() => item.href !== '/' && item.href !== '/contact' && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={item.href} className={styles.navLink}>
                  {item.name}
                  {item.href !== '/' && item.href !== '/contact' && (
                    <ChevronDown size={14} className={styles.navChevron} />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className={styles.headerActions}>
            <Link href="/contact" className={styles.ctaButton}>
              Cere Ofertă
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mega Dropdown */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              className={styles.megaDropdown}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className={styles.megaDropdownContent}>
                {categories
                  .filter((cat) => {
                    const navItem = navigation.find(n => n.name === activeDropdown);
                    return navItem && cat.slug === navItem.href.replace('/', '');
                  })
                  .map((category) => (
                    <div key={category.id} className={styles.megaDropdownGrid}>
                      <div className={styles.megaDropdownMain}>
                        <h3 className={styles.megaDropdownTitle}>{category.name}</h3>
                        <p className={styles.megaDropdownDesc}>{category.description}</p>
                        <Link href={`/${category.slug}`} className={styles.megaDropdownLink}>
                          Explorează {category.name} →
                        </Link>
                      </div>
                      <div className={styles.megaDropdownTypes}>
                        <h4>Tipuri de Produse</h4>
                        <ul>
                          {category.productTypes.slice(0, 6).map((type) => (
                            <li key={type.name}>
                              <Link href={`/${category.slug}#${type.name.toLowerCase().replace(/ /g, '-')}`}>
                                {type.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.megaDropdownBrands}>
                        <h4>Branduri Top</h4>
                        <div className={styles.brandLogos}>
                          {category.brands.filter(b => b.featured).slice(0, 4).map((brand) => (
                            <span key={brand.name} className={styles.brandBadge}>
                              {brand.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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

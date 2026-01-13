'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Clock, Search } from 'lucide-react';
import { navigation, categories, allBrands } from '@/data/products';
import styles from './Header.module.css';

// Build search index
const buildSearchIndex = () => {
  const items = [];
  
  // Add categories
  categories.forEach(cat => {
    items.push({
      type: 'category',
      name: cat.name,
      url: `/${cat.slug}`,
      keywords: [cat.name.toLowerCase(), cat.tagline?.toLowerCase() || '']
    });
    
    // Add product types
    cat.productTypes?.forEach(pt => {
      items.push({
        type: 'product',
        name: pt.name,
        category: cat.name,
        url: `/${cat.slug}#${pt.slug}`,
        keywords: [pt.name.toLowerCase(), cat.name.toLowerCase()]
      });
    });
  });
  
  // Add brands
  allBrands.forEach(brand => {
    const cat = categories.find(c => c.slug === brand.category);
    items.push({
      type: 'brand',
      name: brand.name,
      category: cat?.name || '',
      url: `/brand/${brand.slug}`,
      keywords: [brand.name.toLowerCase(), cat?.name?.toLowerCase() || '']
    });
  });
  
  return items;
};

const searchIndex = buildSearchIndex();

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search function
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }
    
    const q = query.toLowerCase();
    const results = searchIndex.filter(item => 
      item.keywords.some(kw => kw.includes(q)) || 
      item.name.toLowerCase().includes(q)
    ).slice(0, 8);
    
    setSearchResults(results);
  };

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      router.push(searchResults[0].url);
      setSearchQuery('');
      setSearchResults([]);
      setIsSearchFocused(false);
    }
  };

  // Handle result click
  const handleResultClick = (url) => {
    router.push(url);
    setSearchQuery('');
    setSearchResults([]);
    setIsSearchFocused(false);
  };

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

      {/* Main Header */}
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContent}>
          {/* Row 1: Logo + Navigation */}
          <div className={styles.headerMain}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="/logo-header.png" 
                alt="Infinitrade - Dăm puls industriei" 
                width={380} 
                height={120}
                className={styles.logoImage}
                priority
              />
            </Link>

            {/* Navigation - right of logo */}
            <nav className={styles.nav}>
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
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={styles.mobileMenuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Row 2: Search + CTA Button */}
          <div className={styles.searchRow}>
            <div className={styles.searchWrapper} ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
                <div className={`${styles.searchContainer} ${isSearchFocused ? styles.searchFocused : ''}`}>
                  <div className={styles.searchGlow} />
                  <Search size={20} className={styles.searchIcon} />
                  <input
                    type="text"
                    placeholder="Caută branduri, produse, echipamente..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    className={styles.searchInput}
                  />
                </div>
              </form>

              {/* Search Results Dropdown */}
              <AnimatePresence>
                {isSearchFocused && searchResults.length > 0 && (
                  <motion.div
                    className={styles.searchResults}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    {searchResults.map((result, idx) => (
                      <button
                        key={idx}
                        className={styles.searchResult}
                        onClick={() => handleResultClick(result.url)}
                      >
                        <span className={styles.resultType}>
                          {result.type === 'brand' ? '🏷️' : result.type === 'category' ? '📦' : '🔧'}
                        </span>
                        <div className={styles.resultInfo}>
                          <span className={styles.resultName}>{result.name}</span>
                          {result.category && (
                            <span className={styles.resultCategory}>{result.category}</span>
                          )}
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className={styles.ctaButton}>
              Cere Ofertă
            </Link>
          </div>
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

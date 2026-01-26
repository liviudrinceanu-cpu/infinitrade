'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Clock, Search, ShoppingCart, Plus, Trash2 } from 'lucide-react';
import { navigation, secondaryNavigation, categories, allBrands } from '@/data/products';
import { useQuoteCart } from '@/context/QuoteCartContext';
import { debounce } from '@/lib/utils';
import styles from './Header.module.css';

// Build search index - moved outside component
const buildSearchIndex = () => {
  const items = [];
  
  categories.forEach(cat => {
    items.push({
      type: 'category',
      name: cat.name,
      url: `/${cat.slug}`,
      keywords: [cat.name.toLowerCase(), cat.tagline?.toLowerCase() || '']
    });
    
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

// Build once, reuse
const searchIndex = buildSearchIndex();

export default function Header() {
  const router = useRouter();
  const { items: cartItems, itemCount, lastAction, addItem, removeItem } = useQuoteCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartAnimation, setCartAnimation] = useState(null); // 'add' | 'remove'
  const searchRef = useRef(null);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart animation effect
  useEffect(() => {
    if (lastAction) {
      setCartAnimation(lastAction.type);
      const timer = setTimeout(() => setCartAnimation(null), 600);
      return () => clearTimeout(timer);
    }
  }, [lastAction]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMobileMenuOpen]);

  // Search function with debounce
  const handleSearch = useMemo(
    () => debounce((query) => {
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
    }, 300),
    []
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    handleSearch(value);
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
                alt="Infinitrade Romania - Distribuitor echipamente industriale. Dăm puls industriei." 
                width={380} 
                height={120}
                className={styles.logoImage}
                priority
              />
            </Link>

            {/* Navigation - right of logo */}
            <nav className={styles.nav} aria-label="Navigare principală">
              {navigation.map((item) => {
                const isCategory = !['/despre-noi', '/contact', '/', '/blog'].includes(item.href) && !item.isDropdown;
                const isResourcesDropdown = item.isDropdown;
                const hasDropdown = isCategory || isResourcesDropdown;

                return (
                  <div
                    key={item.name}
                    className={styles.navItem}
                    onMouseEnter={() => hasDropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link href={item.href} className={styles.navLink}>
                      {item.name}
                      {(isCategory || isResourcesDropdown) && (
                        <ChevronDown size={14} className={styles.navChevron} aria-hidden="true" />
                      )}
                    </Link>

                    {/* Dropdown for Resources */}
                    <AnimatePresence>
                      {activeDropdown === item.name && isResourcesDropdown && (
                        <motion.div
                          className={styles.resourcesDropdown}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className={styles.resourcesGrid}>
                            {item.children.map(child => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={styles.resourceLink}
                              >
                                <span className={styles.resourceName}>{child.name}</span>
                                <span className={styles.resourceDesc}>{child.description}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

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
              aria-label={isMobileMenuOpen ? 'Închide meniu' : 'Deschide meniu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Secondary Navigation Row - Centered */}
          <div className={styles.secondaryNav}>
            {secondaryNavigation.map((item) => (
              <Link key={item.name} href={item.href} className={styles.secondaryNavLink}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Row 2: Search + CTA Button */}
          <div className={styles.searchRow}>
            <div className={styles.searchWrapper} ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className={styles.searchForm} role="search">
                <div className={`${styles.searchContainer} ${isSearchFocused ? styles.searchFocused : ''}`}>
                  <div className={styles.searchGlow} />
                  <Search size={20} className={styles.searchIcon} aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Caută branduri, produse, echipamente..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => setIsSearchFocused(true)}
                    className={styles.searchInput}
                    aria-label="Căutare produse"
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
                    role="listbox"
                    aria-label="Rezultate căutare"
                  >
                    {searchResults.map((result, idx) => (
                      <div key={idx} className={styles.searchResult} role="option">
                        <button
                          className={styles.searchResultMain}
                          onClick={() => handleResultClick(result.url)}
                        >
                          <span className={styles.resultType} aria-hidden="true">
                            {result.type === 'brand' ? '🏷️' : result.type === 'category' ? '📦' : '🔧'}
                          </span>
                          <div className={styles.resultInfo}>
                            <span className={styles.resultName}>{result.name}</span>
                            {result.category && (
                              <span className={styles.resultCategory}>{result.category}</span>
                            )}
                          </div>
                        </button>
                        <button
                          className={styles.addToCartBtn}
                          onClick={(e) => {
                            e.stopPropagation();
                            addItem({
                              type: result.type,
                              name: result.name,
                              category: result.category || '',
                              url: result.url
                            });
                          }}
                          title="Adaugă la cerere ofertă"
                          aria-label={`Adaugă ${result.name} la cerere ofertă`}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cart Button with Badge */}
            <div className={styles.cartWrapper} ref={cartRef}>
              <button 
                className={`${styles.cartButton} ${cartAnimation === 'add' ? styles.cartAdded : ''} ${cartAnimation === 'remove' ? styles.cartRemoved : ''}`}
                onClick={() => setIsCartOpen(!isCartOpen)}
                aria-label={`Coș cereri ofertă. ${itemCount} ${itemCount === 1 ? 'produs' : 'produse'}`}
                aria-expanded={isCartOpen}
              >
                <ShoppingCart size={20} aria-hidden="true" />
                {itemCount > 0 && (
                  <span className={styles.cartBadge} aria-hidden="true">{itemCount}</span>
                )}
              </button>

              {/* Cart Dropdown */}
              <AnimatePresence>
                {isCartOpen && (
                  <motion.div
                    className={styles.cartDropdown}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <div className={styles.cartHeader}>
                      <h4>Cerere Ofertă ({itemCount})</h4>
                    </div>
                    
                    {cartItems.length === 0 ? (
                      <div className={styles.cartEmpty}>
                        <p>Nu ai adăugat produse</p>
                        <span>Caută și adaugă produse pentru a solicita ofertă</span>
                      </div>
                    ) : (
                      <>
                        <div className={styles.cartItems} role="list">
                          {cartItems.map((item) => (
                            <div key={item.id} className={styles.cartItem} role="listitem">
                              <div className={styles.cartItemInfo}>
                                <span className={styles.cartItemType} aria-hidden="true">
                                  {item.type === 'brand' ? '🏷️' : item.type === 'category' ? '📦' : '🔧'}
                                </span>
                                <div>
                                  <span className={styles.cartItemName}>{item.name}</span>
                                  {item.category && (
                                    <span className={styles.cartItemCategory}>{item.category}</span>
                                  )}
                                </div>
                              </div>
                              <button
                                className={styles.cartItemRemove}
                                onClick={() => removeItem(item.id)}
                                aria-label={`Elimină ${item.name} din coș`}
                              >
                                <Trash2 size={14} aria-hidden="true" />
                              </button>
                            </div>
                          ))}
                        </div>
                        <div className={styles.cartFooter}>
                          <Link 
                            href="/contact" 
                            className={styles.cartSubmit}
                            onClick={() => setIsCartOpen(false)}
                          >
                            Trimite Cererea
                          </Link>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className={styles.ctaButton}>
              Cere Ofertă
              {itemCount > 0 && <span className={styles.ctaBadge} aria-hidden="true">{itemCount}</span>}
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
            <nav className={styles.mobileNav} aria-label="Navigare mobilă">
              {/* Secondary navigation first */}
              {secondaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Separator */}
              <div className={styles.mobileDivider} />

              {/* Primary navigation - categories */}
              {navigation.map((item) => (
                item.isDropdown ? (
                  <div key={item.name} className={styles.mobileDropdownGroup}>
                    <span className={styles.mobileDropdownLabel}>{item.name}</span>
                    {item.children.map(child => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={styles.mobileNavLink}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
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

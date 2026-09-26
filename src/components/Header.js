'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
// Removed framer-motion - using CSS transitions for better performance (~30KB savings)
import { Menu, X, ChevronDown, Phone, Mail, Clock, Search, ShoppingCart, Plus, Trash2 } from 'lucide-react';
import { navigation, secondaryNavigation } from '@/data/products';
import { allCategoriesUnified as categories, allBrandsUnified, getTopBrandsForCategory } from '@/data/allBrandsIndex';
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
  
  allBrandsUnified.forEach(brand => {
    const catName = brand.categories?.[0]?.name || '';
    items.push({
      type: 'brand',
      name: brand.name,
      category: catName,
      url: `/brand/${brand.simpleSlug}`,
      keywords: [brand.name.toLowerCase(), catName.toLowerCase(), brand.country?.toLowerCase() || '']
    });
  });
  
  return items;
};

// Build once, reuse
const searchIndex = buildSearchIndex();

// v11 (D-2026-09-26): one dropdown per main category — its product types,
// its 10 leading brands (same ordering rule as the category page) and a link
// to the full A–Z list. Computed once at module load, never per render.
const MAIN_CATEGORY_MENUS = Object.fromEntries(
  navigation
    .filter((item) => !item.isDropdown)
    .map((item) => {
      const category = categories.find((cat) => `/${cat.slug}` === item.href);
      if (!category) return null;
      return [item.href, {
        category,
        productTypes: (category.productTypes || []).slice(0, 6),
        topBrands: getTopBrandsForCategory(category.slug, 10),
        brandCount: (category.brands || []).length,
      }];
    })
    .filter(Boolean)
);

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
            <a href="tel:+40371232404" className={styles.topBarLink}>
              <Phone size={14} />
              +40 371 232 404
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
                    {isResourcesDropdown && (
                      <div
                        className={`${styles.resourcesDropdown} ${activeDropdown === item.name ? styles.dropdownVisible : ''}`}
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
                      </div>
                    )}

                    {/* Dropdown for categories (v11): product types + top brands + all brands */}
                    {isCategory && MAIN_CATEGORY_MENUS[item.href] && (() => {
                      const menu = MAIN_CATEGORY_MENUS[item.href];
                      const { category } = menu;
                      return (
                        <div
                          className={`${styles.dropdown} ${styles.dropdownWide} ${activeDropdown === item.name ? styles.dropdownVisible : ''}`}
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className={styles.dropdownColumns}>
                            <div className={styles.dropdownMain}>
                              <h4>{category.name}</h4>
                              <p>{category.tagline}</p>
                              <span className={styles.dropdownLabel}>Tipuri de produse</span>
                              <ul className={styles.dropdownList}>
                                {menu.productTypes.map((pt) => (
                                  <li key={pt.slug}>
                                    <Link href={`/${category.slug}#${pt.slug}`} className={styles.dropdownListLink}>
                                      {pt.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              <Link href={`/${category.slug}`} className={styles.dropdownCta}>
                                Vezi toate produsele →
                              </Link>
                            </div>
                            <div className={styles.dropdownBrandsCol}>
                              <span className={styles.dropdownLabel}>Branduri de top</span>
                              <div className={styles.brandTags}>
                                {menu.topBrands.map((brand) => (
                                  <Link
                                    key={brand.simpleSlug}
                                    href={`/brand/${brand.simpleSlug}`}
                                    className={styles.brandTag}
                                  >
                                    {brand.name}
                                  </Link>
                                ))}
                              </div>
                              <Link href={`/${category.slug}#branduri`} className={styles.dropdownAllBrands}>
                                {`Toate cele ${menu.brandCount}${menu.brandCount >= 20 ? ' de' : ''} branduri →`}
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
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
              item.isMegaMenu ? (
                <div
                  key={item.name}
                  className={styles.megaMenuWrapper}
                  onMouseEnter={() => setActiveDropdown('mega')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`${styles.secondaryNavLink} ${styles.secondaryNavLinkRed}`}
                  >
                    {item.name}
                    <ChevronDown size={12} />
                  </Link>
                  <div className={`${styles.megaMenuDropdown} ${activeDropdown === 'mega' ? styles.dropdownVisible : ''}`}>
                    <div className={styles.megaMenuGrid}>
                      {item.children.map(child => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={styles.megaMenuCard}
                        >
                          <span className={styles.megaMenuName}>{child.name}</span>
                          <span className={styles.megaMenuDesc}>{child.description}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.name} href={item.href} className={styles.secondaryNavLink}>
                  {item.name}
                </Link>
              )
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
              <div
                className={`${styles.searchResults} ${isSearchFocused && searchResults.length > 0 ? styles.dropdownVisible : ''}`}
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
              </div>
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
              <div
                className={`${styles.cartDropdown} ${isCartOpen ? styles.dropdownVisible : ''}`}
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
              </div>
            </div>

            <Link href="/contact" className={styles.ctaButton}>
              Cere Ofertă
              {itemCount > 0 && <span className={styles.ctaBadge} aria-hidden="true">{itemCount}</span>}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuVisible : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Navigare mobilă">
          {/* Secondary navigation first */}
          {secondaryNavigation.map((item) => (
            item.isMegaMenu ? (
              <div key={item.name} className={styles.mobileDropdownGroup}>
                <Link
                  href={item.href}
                  className={`${styles.mobileNavLink} ${styles.mobileNavLinkRed}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  {item.name}
                </Link>
                {item.children.map(child => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={styles.mobileSubLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                    tabIndex={isMobileMenuOpen ? 0 : -1}
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
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                {item.name}
              </Link>
            )
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
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ) : MAIN_CATEGORY_MENUS[item.href] ? (
              /* v11: main category + its product types + top brands on mobile too */
              <div key={item.name} className={styles.mobileDropdownGroup}>
                <Link
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  {item.name}
                </Link>
                {MAIN_CATEGORY_MENUS[item.href].productTypes.map((pt) => (
                  <Link
                    key={pt.slug}
                    href={`${item.href}#${pt.slug}`}
                    className={styles.mobileSubLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                  >
                    {pt.name}
                  </Link>
                ))}
                <Link
                  href={`${item.href}#branduri`}
                  className={styles.mobileSubLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  {`Toate cele ${MAIN_CATEGORY_MENUS[item.href].brandCount}${MAIN_CATEGORY_MENUS[item.href].brandCount >= 20 ? ' de' : ''} branduri`}
                </Link>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                {item.name}
              </Link>
            )
          ))}
          <Link
            href="/contact"
            className={styles.mobileCta}
            onClick={() => setIsMobileMenuOpen(false)}
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            Cere Ofertă
          </Link>
        </nav>
      </div>
    </>
  );
}

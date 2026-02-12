'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { config } from '@/lib/config';
import styles from './Breadcrumbs.module.css';

/**
 * Breadcrumbs component with JSON-LD schema
 * @param {Object} props
 * @param {Array} props.items - Array of {label, href} objects
 * @param {string} props.currentPage - Current page label (no link)
 * @param {string} props.variant - 'default' or 'light' (for dark backgrounds)
 */
export default function Breadcrumbs({ items = [], currentPage, variant = 'default' }) {
  // Build the full breadcrumb list including home and current page
  const allItems = [
    { label: 'Acasă', href: '/' },
    ...items,
  ];

  // Generate JSON-LD schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      ...allItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: `${config.site.url}${item.href}`,
      })),
      {
        '@type': 'ListItem',
        position: allItems.length + 1,
        name: currentPage,
      },
    ],
  };

  return (
    <>
      {/* Visual Breadcrumbs - JSON-LD is handled at page level to avoid duplicates */}
      <nav className={`${styles.breadcrumbs} ${variant === 'light' ? styles.light : ''}`} aria-label="Breadcrumb">
        <ol className={styles.list}>
          {allItems.map((item, index) => (
            <li key={item.href} className={styles.item}>
              <Link href={item.href} className={styles.link}>
                {index === 0 ? (
                  <>
                    <Home size={14} aria-hidden="true" />
                    <span className={styles.srOnly}>{item.label}</span>
                  </>
                ) : (
                  item.label
                )}
              </Link>
              <ChevronRight size={14} className={styles.separator} aria-hidden="true" />
            </li>
          ))}
          <li className={styles.item}>
            <span className={styles.current} aria-current="page">
              {currentPage}
            </span>
          </li>
        </ol>
      </nav>
    </>
  );
}

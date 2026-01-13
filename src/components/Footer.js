'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { categories, companyInfo } from '@/data/products';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer */}
        <div className={styles.main}>
          {/* Brand Column */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="/logo-full.png" 
                alt="Infinitrade - Dăm puls industriei" 
                width={180} 
                height={50}
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.brandDescription}>
              Distribuitor premium de echipamente industriale 
              cu peste {companyInfo.stats.years} ani de experiență.
            </p>
            <div className={styles.certifications}>
              {companyInfo.certifications.map((cert) => (
                <span key={cert} className={styles.certification}>
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Produse</h4>
            <ul className={styles.columnList}>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link href={`/${category.slug}`} className={styles.columnLink}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Industrii</h4>
            <ul className={styles.columnList}>
              {companyInfo.industries.slice(0, 6).map((industry) => (
                <li key={industry}>
                  <span className={styles.industryTag}>{industry}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <Mail size={18} />
                <a href={`mailto:${companyInfo.contact.email}`}>
                  {companyInfo.contact.email}
                </a>
              </li>
              <li>
                <Clock size={18} />
                <span>{companyInfo.contact.hours}</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>
                  {companyInfo.location.address}<br />
                  {companyInfo.location.city}, {companyInfo.location.county}
                </span>
              </li>
            </ul>
            <Link href="/contact" className={styles.contactCta}>
              Cere Ofertă
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{companyInfo.stats.clients}</span>
            <span className={styles.statLabel}>Clienți</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{companyInfo.stats.brands}</span>
            <span className={styles.statLabel}>Branduri</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{companyInfo.stats.suppliers}</span>
            <span className={styles.statLabel}>Furnizori</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{companyInfo.stats.years}</span>
            <span className={styles.statLabel}>Ani Experiență</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Infinitrade Romania. Toate drepturile rezervate.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/termeni">Termeni și Condiții</Link>
            <Link href="/confidentialitate">Politica de Confidențialitate</Link>
            <Link href="/gdpr">GDPR</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

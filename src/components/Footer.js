'use client';

import Link from 'next/link';
import { Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { categories, companyInfo, footerIndustries } from '@/data/products';
import { config } from '@/lib/config';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer */}
        <div className={styles.main}>
          {/* Brand Column - NO LOGO */}
          <div className={styles.brand}>
            <h3 className={styles.brandTitle}>Infinitrade Romania</h3>
            <p className={styles.brandTagline}>Dăm puls industriei</p>
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
              {footerIndustries.map((industry) => (
                <li key={industry.slug}>
                  <Link href={`/industrii/${industry.slug}`} className={styles.columnLink}>
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Resurse</h4>
            <ul className={styles.columnList}>
              <li>
                <Link href="/ghid-achizitii-seap" className={styles.columnLink}>
                  Ghid Achiziții SEAP
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.columnLink}>
                  Blog Tehnic
                </Link>
              </li>
              <li>
                <Link href="/studii-de-caz" className={styles.columnLink}>
                  Studii de Caz
                </Link>
              </li>
              <li>
                <Link href="/faq" className={styles.columnLink}>
                  Întrebări Frecvente
                </Link>
              </li>
              <li>
                <Link href="/certificari" className={styles.columnLink}>
                  Certificări
                </Link>
              </li>
              <li>
                <Link href="/despre-noi" className={styles.columnLink}>
                  Despre Noi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <Mail size={18} aria-hidden="true" />
                <div>
                  <a href={`mailto:${config.site.email.sales}`}>
                    {config.site.email.sales}
                  </a>
                  <br />
                  <a href={`mailto:${config.site.email.secretariat}`}>
                    {config.site.email.secretariat}
                  </a>
                </div>
              </li>
              <li>
                <Clock size={18} aria-hidden="true" />
                <span>Luni - Vineri: 08:00 - 16:30</span>
              </li>
              <li>
                <MapPin size={18} aria-hidden="true" />
                <span>
                  {companyInfo.location.address}<br />
                  {companyInfo.location.city}, {companyInfo.location.county}
                </span>
              </li>
            </ul>
            <Link href="/contact" className={styles.contactCta}>
              Cere Ofertă
              <ArrowUpRight size={16} aria-hidden="true" />
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
          <div className={styles.bottomLeft}>
            <p className={styles.copyright}>
              © {currentYear} Driatheli Group SRL. Toate drepturile rezervate.
            </p>
            <p className={styles.companyInfo}>
              Brand: Infinitrade Romania | CUI: {config.site.cui}
            </p>
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/termeni-si-conditii">Termeni și Condiții</Link>
            <Link href="/politica-confidentialitate">Politica de Confidențialitate</Link>
            <Link href="/politica-cookies">Politica Cookies</Link>
            <Link href="/gdpr">GDPR</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

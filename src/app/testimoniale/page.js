import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { config } from '@/lib/config';
import { testimonials, testimonialStats, industriesServed, getFeaturedTestimonials } from '@/data/testimonials';
import { categories } from '@/data/products';
import { safeJsonLd } from '@/lib/utils';
import styles from './testimoniale.module.css';
import { siteStats } from '@/data/siteStats';

export const metadata = {
  title: 'Testimoniale Clienți | Recenzii',
  description: `${testimonialStats.totalClients}+ clienți mulțumiți din ${testimonialStats.industriesServed} industrii. Rating ${testimonialStats.avgRating}/5. Experiențe cu pompe, motoare, robineți industriali.`,
  keywords: [
    'testimoniale echipamente industriale',
    'recenzii pompe industriale',
    'pareri distribuitor echipamente',
    'Infinitrade recenzii',
    'clienti multumiti pompe',
    'feedback Grundfos Romania',
    'pareri Wilo Romania',
    'experiente clienti echipamente',
  ],
  openGraph: {
    title: 'Testimoniale Clienți | Infinitrade Romania',
    description: `${testimonialStats.totalClients}+ clienți mulțumiți. Rating ${testimonialStats.avgRating}/5. Experiențe reale ale clienților.`,
    url: `${config.site.url}/testimoniale`,
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: `${config.site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Testimoniale Clienți - Infinitrade Romania',
      }
    ],
  },
  alternates: {
    canonical: `${config.site.url}/testimoniale`,
  },
};

function StarRating({ rating }) {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialePage() {
  const featuredTestimonials = getFeaturedTestimonials();
  const regularTestimonials = testimonials.filter(t => !t.featured);

  // JSON-LD Structured Data
  // Note: No AggregateRating/Review markup here by design - Google disallows
  // self-published review/rating structured data for a business's own site.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization
      {
        '@type': 'Organization',
        '@id': `${config.site.url}/#organization`,
        name: 'Infinitrade Romania',
        url: config.site.url,
        logo: `${config.site.url}/logo-header.png`,
      },
      // Breadcrumb
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Acasă',
            item: { '@type': 'WebPage', '@id': config.site.url },
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Testimoniale',
          },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <Breadcrumbs
              items={[]}
              currentPage="Testimoniale"
              variant="light"
            />
            <h1>Ce Spun Clienții Noștri</h1>
            <p className={styles.heroSubtitle}>
              Peste {testimonialStats.totalClients} de companii din {testimonialStats.industriesServed} industrii
              ne aleg pentru echipamentele lor industriale
            </p>

            {/* Stats Bar */}
            <div className={styles.statsBar}>
              <div className={styles.stat}>
                <span className={styles.statValue}>{testimonialStats.totalClients}+</span>
                <span className={styles.statLabel}>Clienți Activi</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>{testimonialStats.avgRating}</span>
                <span className={styles.statLabel}>Rating Mediu</span>
                <StarRating rating={5} />
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>{testimonialStats.satisfactionRate}%</span>
                <span className={styles.statLabel}>Rata Satisfacție</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>{testimonialStats.repeatClients}%</span>
                <span className={styles.statLabel}>Clienți Recurenți</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <h2>Testimoniale Recomandate</h2>
            <div className={styles.featuredGrid}>
              {featuredTestimonials.map((testimonial) => (
                <div key={testimonial.id} className={styles.featuredCard}>
                  <div className={styles.quoteIcon}>"</div>
                  <blockquote className={styles.quote}>
                    {testimonial.quote}
                  </blockquote>
                  <div className={styles.testimonialMeta}>
                    <div className={styles.authorInfo}>
                      <div className={styles.avatar}>
                        {testimonial.initials || testimonial.industry.charAt(0)}
                      </div>
                      <div>
                        <span className={styles.role}>
                          {testimonial.initials && <strong>{testimonial.initials}</strong>}
                          {testimonial.initials && ' - '}{testimonial.role}
                        </span>
                        <span className={styles.industry}>
                          {testimonial.companyHint || testimonial.industry}
                        </span>
                      </div>
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <div className={styles.testimonialFooter}>
                    <span className={styles.yearsClient}>
                      Client din {testimonial.yearStarted || 2024 - testimonial.yearsClient}
                    </span>
                    <div className={styles.categories}>
                      {testimonial.categories.map((cat) => (
                        <Link
                          key={cat}
                          href={`/${categories.find(c => c.name === cat)?.slug || ''}`}
                          className={styles.categoryTag}
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Testimonials */}
        <section className={styles.allSection}>
          <div className={styles.container}>
            <h2>Toate Testimonialele</h2>
            <div className={styles.testimonialsGrid}>
              {regularTestimonials.map((testimonial) => (
                <div key={testimonial.id} className={styles.testimonialCard}>
                  <blockquote className={styles.quote}>
                    "{testimonial.quote}"
                  </blockquote>
                  <div className={styles.testimonialMeta}>
                    <div className={styles.authorInfo}>
                      <div className={styles.avatarSmall}>
                        {testimonial.initials || testimonial.industry.charAt(0)}
                      </div>
                      <div>
                        <span className={styles.role}>
                          {testimonial.initials && <strong>{testimonial.initials}</strong>}
                          {testimonial.initials && ' - '}{testimonial.role}
                        </span>
                        <span className={styles.industry}>
                          {testimonial.companyHint || testimonial.industry}
                        </span>
                      </div>
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className={styles.industriesSection}>
          <div className={styles.container}>
            <h2>Industrii Deservite</h2>
            <p className={styles.sectionSubtitle}>
              Oferim soluții de echipamente industriale pentru diverse sectoare economice
            </p>
            <div className={styles.industriesGrid}>
              {industriesServed.map((industry) => (
                <Link
                  key={industry.name}
                  href={`/industrii/${industry.slug}`}
                  className={styles.industryCard}
                >
                  <span className={styles.industryIcon}>{industry.icon}</span>
                  <span className={styles.industryName}>{industry.name}</span>
                  <span className={styles.industryClients}>{industry.clients}+ clienți</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className={styles.trustSection}>
          <div className={styles.container}>
            <h2>De Ce Ne Aleg Clienții</h2>
            <div className={styles.trustGrid}>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon}>🏆</span>
                <h3>{testimonialStats.yearsExperience}+ Ani Experiență</h3>
                <p>Suntem pe piață din 2009, cu expertiză solidă în echipamente industriale.</p>
              </div>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon}>✅</span>
                <h3>Produse Originale</h3>
                <p>100% produse originale, direct de la producători, cu garanție completă.</p>
              </div>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon}>🚚</span>
                <h3>Livrare Rapidă</h3>
                <p>Livrare în 24-72h pentru produse din stoc, în toată România.</p>
              </div>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon}>🔧</span>
                <h3>Suport Tehnic</h3>
                <p>Consultanță tehnică gratuită de la ingineri cu experiență.</p>
              </div>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon}>💼</span>
                <h3>{siteStats.brands} Branduri</h3>
                <p>Portofoliu complet de branduri premium: Grundfos, Wilo, Siemens, ABB, etc.</p>
              </div>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon}>🤝</span>
                <h3>Parteneriate Stabile</h3>
                <p>{testimonialStats.repeatClients}% din clienți revin pentru noi comenzi.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews Placeholder - Ready for future integration */}
        <section className={styles.googleSection}>
          <div className={styles.container}>
            <h2>Recenzii Verificate</h2>
            <p className={styles.sectionSubtitle}>
              Testimonialele de mai sus sunt de la clienți reali cu care colaborăm de ani de zile.
              Pentru recenzii publice verificabile, ne găsești și pe Google.
            </p>
            <div className={styles.googlePlaceholder}>
              {/*
                TODO: Integrare Google Reviews widget când contul Google Business este verificat
                1. Creează cont Google Business pentru Infinitrade Romania
                2. Verifică adresa: Calea Lugojului nr.47/B, Hala 3, Ghiroda, Timiș
                3. Colectează primele 5-10 recenzii de la clienți
                4. Integrează widget folosind: Google Places API sau serviciu terț (Elfsight, Trustindex)
              */}
              <div className={styles.googleCard}>
                <span className={styles.googleIcon}>G</span>
                <div className={styles.googleInfo}>
                  <strong>Infinitrade Romania</strong>
                  <p>Recenzii Google Business în curând disponibile</p>
                  <a
                    href="https://www.google.com/search?q=infinitrade+romania+echipamente+industriale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.googleLink}
                  >
                    Caută-ne pe Google →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Alătură-te Clienților Noștri Mulțumiți</h2>
            <p>Solicită o ofertă personalizată și descoperă de ce ne aleg cele mai mari companii din România.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Solicită Ofertă
              </Link>
              <Link href="/studii-de-caz" className={styles.ctaSecondary}>
                Vezi Studii de Caz
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

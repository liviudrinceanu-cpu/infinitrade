import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { config } from '@/lib/config';
import { industries, getIndustry } from '@/data/industries';
import { safeJsonLd } from '@/lib/utils';
import { ArrowRight, CheckCircle, Building2, Users, Award, Phone, Factory } from 'lucide-react';
import styles from './industry.module.css';

// Generate static params
export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    return {
      title: 'Industrie negăsită',
      description: 'Pagina căutată nu a fost găsită.',
    };
  }

  // Generate comprehensive keywords for industry pages
  const baseKeywords = [
    // Industry name variations
    industry.name.toLowerCase(),
    `echipamente ${industry.name.toLowerCase()}`,
    `echipamente industriale ${industry.name.toLowerCase()}`,
    `furnizor echipamente ${industry.name.toLowerCase()}`,
    `distribuitor ${industry.name.toLowerCase()}`,
    // SEAP / SICAP / Public Procurement
    `echipamente ${industry.name.toLowerCase()} SEAP`,
    `furnizor SEAP ${industry.name.toLowerCase()}`,
    `licitatie echipamente ${industry.name.toLowerCase()}`,
    `achizitii publice ${industry.name.toLowerCase()}`,
    `${industry.name.toLowerCase()} fonduri europene`,
    // Equipment keywords
    ...industry.equipment.map(eq => eq.name.toLowerCase()),
    ...industry.equipment.map(eq => `${eq.name.toLowerCase()} SEAP`),
    ...industry.equipment.map(eq => `${eq.name.toLowerCase()} licitatie`),
    // Application keywords
    ...industry.applications.map(a => a.toLowerCase()),
    // Brand keywords in industry context
    ...industry.brands,
    ...industry.brands.map(b => `${b} ${industry.name.toLowerCase()}`),
    ...industry.brands.map(b => `${b} SEAP`),
    // Client reference keywords (without company names for privacy)
    `echipamente ${industry.slug}`,
    `pompe ${industry.name.toLowerCase()}`,
    `robineti ${industry.name.toLowerCase()}`,
    // Purchase intent
    `oferta echipamente ${industry.name.toLowerCase()}`,
    `pret echipamente ${industry.name.toLowerCase()}`,
    // General
    'echipamente industriale romania',
    'furnizor SEAP',
    'furnizor SICAP',
    'distribuitor industrial',
    'piese schimb originale',
    'service industrial',
  ];

  // Remove duplicates and limit
  const keywords = [...new Set(baseKeywords)].slice(0, 40);

  // Shortened title for SEO - use shortTitle if available, otherwise extract first part of metaTitle
  const enhancedTitle = industry.shortTitle || industry.metaTitle.split('|')[0].trim();
  // Use metaDescription directly (already contains SEAP/SICAP info where needed)
  const enhancedDescription = industry.metaDescription;

  return {
    title: enhancedTitle,
    description: enhancedDescription,
    keywords,
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `${config.site.url}/industrii/${industry.slug}`,
      siteName: 'Infinitrade Romania',
      locale: 'ro_RO',
      type: 'website',
    },
    alternates: {
      canonical: `${config.site.url}/industrii/${industry.slug}`,
    },
  };
}

// Generate JSON-LD
function generateIndustryJsonLd(industry) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Acasa',
            item: config.site.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Industrii',
            item: `${config.site.url}/industrii`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: industry.name,
            item: `${config.site.url}/industrii/${industry.slug}`,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${config.site.url}/industrii/${industry.slug}#service`,
        name: `Echipamente pentru ${industry.name}`,
        description: industry.metaDescription,
        image: `${config.site.url}/logo-header.png`,
        provider: {
          '@type': 'Organization',
          name: 'Infinitrade Romania',
          url: config.site.url,
          logo: `${config.site.url}/logo-header.png`,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Romania',
        },
        serviceType: 'Industrial Equipment Distribution',
      },
      {
        '@type': 'Organization',
        '@id': `${config.site.url}/#organization`,
        name: 'Infinitrade Romania',
        url: config.site.url,
        logo: `${config.site.url}/logo-header.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+40 371 232 404',
          contactType: 'sales',
          availableLanguage: ['Romanian', 'English'],
        },
      },
    ],
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  const jsonLd = generateIndustryJsonLd(industry);
  const otherIndustries = industries.filter(ind => ind.slug !== industry.slug).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <Header />
      <main id="main-content" className={styles.main}>
        {/* Hero */}
        <section
          className={styles.hero}
          style={{ '--accent-color': industry.color }}
        >
          <div className={styles.container}>
            <Breadcrumbs
              items={[{ label: 'Industrii', href: '/industrii' }]}
              currentPage={industry.name}
              variant="light"
            />
            <div className={styles.heroContent}>
              <div
                className={styles.heroIcon}
                style={{ background: industry.color }}
              >
                <Factory size={40} />
              </div>
              <h1>{industry.heroTitle}</h1>
              <p>{industry.heroDescription}</p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <Building2 size={20} />
                  <span>{industry.stats.projects}</span>
                  <small>Proiecte</small>
                </div>
                <div className={styles.stat}>
                  <Award size={20} />
                  <span>{industry.stats.experience}</span>
                  <small>Experienta</small>
                </div>
                <div className={styles.stat}>
                  <Users size={20} />
                  <span>{industry.stats.satisfaction}</span>
                  <small>Satisfactie</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className={styles.applicationsSection}>
          <div className={styles.container}>
            <h2>Aplicatii Principale</h2>
            <div className={styles.applicationsGrid}>
              {industry.applications.map((app, index) => (
                <div key={index} className={styles.applicationCard}>
                  <CheckCircle
                    size={24}
                    style={{ color: industry.color }}
                  />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className={styles.equipmentSection}>
          <div className={styles.container}>
            <h2>Echipamente Recomandate</h2>
            <p className={styles.sectionDescription}>
              Selectie de echipamente optimizate pentru cerintele specifice din {industry.name.toLowerCase()}.
            </p>
            <div className={styles.equipmentGrid}>
              {industry.equipment.map((eq, index) => (
                <div key={index} className={styles.equipmentCard}>
                  <h3>{eq.name}</h3>
                  <p>{eq.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className={styles.brandsSection}>
          <div className={styles.container}>
            <h2>Branduri Disponibile</h2>
            <div className={styles.brandsList}>
              {industry.brands.map((brand) => (
                <div key={brand} className={styles.brandBadge}>
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        {industry.clients && industry.clients.length > 0 && (
          <section className={styles.clientsSection}>
            <div className={styles.container}>
              <h2>Clienti din Sector</h2>
              <p className={styles.sectionDescription}>
                Companii de top care ne-au ales ca furnizor de echipamente industriale.
              </p>
              <div className={styles.clientsList}>
                {industry.clients.map((client) => (
                  <div key={client} className={styles.clientBadge}>
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div
              className={styles.ctaBox}
              style={{ background: `linear-gradient(135deg, ${industry.color} 0%, #063c69 100%)` }}
            >
              <h2>Ai nevoie de echipamente pentru {industry.name.toLowerCase()}?</h2>
              <p>
                Echipa noastra tehnica iti ofera consultanta gratuita si oferte personalizate.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaButtonPrimary}>
                  <Phone size={18} />
                  Solicita Oferta
                </Link>
                <Link href="/faq" className={styles.ctaButtonSecondary}>
                  Intrebari Frecvente
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Industries */}
        <section className={styles.otherSection}>
          <div className={styles.container}>
            <h2>Alte Industrii</h2>
            <div className={styles.otherGrid}>
              {otherIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industrii/${ind.slug}`}
                  className={styles.otherCard}
                >
                  <div
                    className={styles.otherIcon}
                    style={{ background: ind.color }}
                  >
                    <Factory size={20} />
                  </div>
                  <span>{ind.name}</span>
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

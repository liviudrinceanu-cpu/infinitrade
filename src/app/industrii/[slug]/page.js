import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { industries, getIndustry } from '@/data/industries';
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
      title: 'Industrie negasita | Infinitrade Romania',
      description: 'Pagina cautata nu a fost gasita.',
    };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: [
      industry.name.toLowerCase(),
      `echipamente ${industry.name.toLowerCase()}`,
      ...industry.applications.map(a => a.toLowerCase()),
      ...industry.brands,
    ],
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://infinitrade.ro/industrii/${industry.slug}`,
      siteName: 'Infinitrade Romania',
      locale: 'ro_RO',
      type: 'website',
    },
    alternates: {
      canonical: `https://infinitrade.ro/industrii/${industry.slug}`,
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
            item: 'https://infinitrade.ro',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Industrii',
            item: 'https://infinitrade.ro/industrii',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: industry.name,
            item: `https://infinitrade.ro/industrii/${industry.slug}`,
          },
        ],
      },
      {
        '@type': 'Service',
        name: `Echipamente pentru ${industry.name}`,
        description: industry.metaDescription,
        provider: {
          '@type': 'Organization',
          name: 'Infinitrade Romania',
          url: 'https://infinitrade.ro',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Romania',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Echipamente ${industry.name}`,
          itemListElement: industry.equipment.map((eq) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: eq.name,
              description: eq.description,
            },
          })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.main}>
        {/* Hero */}
        <section
          className={styles.hero}
          style={{ '--accent-color': industry.color }}
        >
          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link href="/">Acasa</Link>
              <span>/</span>
              <Link href="/industrii">Industrii</Link>
              <span>/</span>
              <span>{industry.name}</span>
            </div>
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

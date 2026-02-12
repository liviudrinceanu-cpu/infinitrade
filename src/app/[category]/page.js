import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { categories, companyInfo } from '@/data/products';
import { config } from '@/lib/config';
import CategoryClient from './CategoryClient';
import styles from './category.module.css';

// Generate static paths for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

// Generate dynamic metadata for each category - CRITICAL FOR SEO
export async function generateMetadata({ params }) {
  const { category: categorySlug } = await params;
  const category = categories.find(c => c.slug === categorySlug);

  if (!category) {
    return {
      title: 'Categorie negăsită',
    };
  }

  // Get brand names for keywords
  const brandNames = category.brands.map(b => b.name).join(', ');
  const productTypeNames = category.productTypes.map(p => p.name).slice(0, 5).join(', ');

  // Shorten title to stay under 60 chars with template suffix (21 chars for " | Infinitrade Romania")
  // Max title before suffix: 39 chars. Use short names for long categories.
  const shortNames = {
    'suflante-ventilatoare': 'Suflante Industriale',
    'schimbatoare-caldura': 'Schimbătoare Căldură',
    'motoare-electrice': 'Motoare Electrice',
  };
  const displayName = shortNames[category.slug] || category.name;
  const title = `${displayName} | Distribuitor 2026`;
  // Use metaDescription from data (already optimized for length) instead of dynamic description
  const description = category.metaDescription;

  // Generate comprehensive keywords
  const baseKeywords = [
    // Category variations
    category.name,
    `${category.name} Romania`,
    `${category.name} industriale`,
    `${category.name.toLowerCase()} pret`,
    `${category.name.toLowerCase()} preturi`,
    `${category.name.toLowerCase()} oferta`,
    `${category.name.toLowerCase()} catalog`,
    // SEAP / SICAP / Public Procurement
    `${category.name.toLowerCase()} SEAP`,
    `${category.name.toLowerCase()} SICAP`,
    `furnizor SEAP ${category.name.toLowerCase()}`,
    `licitatie ${category.name.toLowerCase()}`,
    `achizitii publice ${category.name.toLowerCase()}`,
    `${category.name.toLowerCase()} fonduri europene`,
    `${category.name.toLowerCase()} PNRR`,
    // Distributor intent
    `distribuitor ${category.name.toLowerCase()}`,
    `distribuitor autorizat ${category.name.toLowerCase()}`,
    `furnizor ${category.name.toLowerCase()}`,
    `furnizor ${category.name.toLowerCase()} romania`,
    // Brand keywords
    ...category.brands.map(b => b.name),
    ...category.brands.map(b => `${b.name} Romania`),
    ...category.brands.slice(0, 5).map(b => `${b.name} ${category.name.toLowerCase()}`),
    ...category.brands.slice(0, 3).map(b => `${b.name} SEAP`),
    // Product type keywords
    ...category.productTypes.map(p => p.name),
    ...category.productTypes.map(p => `${p.name.toLowerCase()} licitatie`),
    // Application keywords
    ...category.productTypes.flatMap(pt => pt.applications.slice(0, 2)),
    // Accessories and services
    ...category.accessories.slice(0, 5),
    // Purchase intent
    `cumpara ${category.name.toLowerCase()}`,
    `achizitie ${category.name.toLowerCase()}`,
    // 2026 keywords
    'catalog 2026',
    'preturi 2026',
    // General
    'echipamente industriale romania',
    'furnizor SEAP',
    'furnizor SICAP',
    'distribuitor autorizat',
    'livrare rapida',
    'piese schimb originale',
  ];

  // Remove duplicates and limit
  const keywords = [...new Set(baseKeywords)].slice(0, 45);

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `${category.name} | Distribuitor Autorizat Romania | Infinitrade`,
      description: `Distribuitor ${category.name.toLowerCase()} în România. Branduri: ${brandNames}. ${category.stats.products} produse disponibile. Livrare 24-72h.`,
      url: `${config.site.url}/${category.slug}`,
      siteName: 'Infinitrade Romania',
      locale: 'ro_RO',
      type: 'website',
      images: [
        {
          url: `${config.site.url}/og-${category.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${category.name} - Infinitrade Romania`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} | Distribuitor`,
      description: `Distribuitor ${category.name.toLowerCase()} în România. ${category.stats.brands} branduri premium.`,
    },
    alternates: {
      canonical: `${config.site.url}/${category.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Main page component (Server Component)
export default async function CategoryPage({ params }) {
  const { category: categorySlug } = await params;
  const category = categories.find(c => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  // Get brand names for schema
  const brandNames = category.brands.map(b => b.name);

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // Product Collection Schema
      {
        '@type': 'ProductGroup',
        '@id': `${config.site.url}/${category.slug}#product-group`,
        name: category.name,
        description: category.heroDescription,
        url: `${config.site.url}/${category.slug}`,
        image: `${config.site.url}/logo-header.png`,
        productGroupID: category.slug,
        brand: category.brands.slice(0, 5).map(brand => ({
          '@type': 'Brand',
          name: brand.name,
        })),
        hasVariant: category.productTypes.slice(0, 5).map(type => ({
          '@type': 'Product',
          name: type.name,
          description: type.description,
          image: `${config.site.url}/logo-header.png`,
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'EUR',
            lowPrice: '100',
            highPrice: '50000',
            offerCount: parseInt(category.stats.products) || 100,
            availability: 'https://schema.org/InStock',
          },
        })),
      },
      // Breadcrumb Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${config.site.url}/${category.slug}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Acasă',
            item: config.site.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: category.name,
            item: `${config.site.url}/${category.slug}`,
          },
        ],
      },
      // Organization Schema
      {
        '@type': 'Organization',
        '@id': `${config.site.url}/#organization`,
        name: 'Infinitrade Romania',
        url: config.site.url,
        logo: `${config.site.url}/logo-header.png`,
        description: `Distribuitor autorizat ${category.name.toLowerCase()} în România`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: companyInfo.location.address,
          addressLocality: companyInfo.location.city,
          addressRegion: companyInfo.location.county,
          postalCode: '300699',
          addressCountry: 'RO',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+40-371-232-404',
          contactType: 'sales',
          availableLanguage: ['Romanian', 'English'],
        },
        sameAs: [
          'https://www.linkedin.com/company/infinitrade-romania',
        ],
      },
      // Service Schema
      {
        '@type': 'Service',
        '@id': `${config.site.url}/${category.slug}#service`,
        name: `Distribuție ${category.name}`,
        serviceType: 'Industrial Equipment Distribution',
        provider: {
          '@type': 'Organization',
          name: 'Infinitrade Romania',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Romania',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Catalog ${category.name}`,
          itemListElement: category.productTypes.map((type, index) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: type.name,
              description: type.description,
            },
          })),
        },
      },
      // FAQ Schema for common questions
      {
        '@type': 'FAQPage',
        '@id': `${config.site.url}/${category.slug}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `Ce branduri de ${category.name.toLowerCase()} aveți disponibile?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Oferim ${category.name.toLowerCase()} de la ${brandNames.slice(0, 5).join(', ')} și alte ${category.stats.brands} branduri premium. Toate produsele sunt originale cu garanție.`,
            },
          },
          {
            '@type': 'Question',
            name: `Cât durează livrarea pentru ${category.name.toLowerCase()}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Livrarea pentru ${category.name.toLowerCase()} din stoc se face în 24-72h în toată România. Pentru produse la comandă, termenul este de 2-4 săptămâni în funcție de producător.`,
            },
          },
          {
            '@type': 'Question',
            name: `Oferiți suport tehnic pentru ${category.name.toLowerCase()}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Da, oferim consultanță tehnică gratuită pentru selectarea ${category.name.toLowerCase()} potrivite aplicației dumneavoastră. Echipa noastră de ingineri vă ajută cu dimensionare, instalare și punere în funcțiune.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main id="main-content">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumbs - visible on page */}
        <div className={styles.breadcrumbWrapper}>
          <div className={styles.container}>
            <Breadcrumbs items={[]} currentPage={category.name} />
          </div>
        </div>

        {/* Client-side interactive content */}
        <CategoryClient category={category} />
      </main>
      <Footer />
    </>
  );
}

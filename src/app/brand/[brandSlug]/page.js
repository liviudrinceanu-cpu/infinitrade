import { notFound } from 'next/navigation';
import { allBrands, categories } from '@/data/products';
import { config } from '@/lib/config';
import BrandPageClient from './BrandPageClient';

// Generate static params for all brand pages
export async function generateStaticParams() {
  return allBrands.map((brand) => ({
    brandSlug: brand.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { brandSlug } = await params;
  const brand = allBrands.find(b => b.slug === brandSlug);
  const category = brand ? categories.find(c => c.slug === brand.category) : null;

  if (!brand || !category) {
    return {
      title: 'Brand negăsit',
      description: 'Pagina căutată nu a fost găsită.',
    };
  }

  const title = `${brand.name} | Distribuitor Autorizat Catalog 2026`;
  const description = `2026: Distribuitor autorizat ${brand.name} (${brand.country}). Furnizor SEAP/SICAP. ${brand.description}. Livrare 24-72h.`;

  // Generate comprehensive keywords based on brand, category, and products
  const baseKeywords = [
    // Brand variations
    brand.name,
    `${brand.name} Romania`,
    `${brand.name} pret`,
    `${brand.name} oferta`,
    `${brand.name} distribuitor`,
    `${brand.name} distribuitor autorizat`,
    `${brand.name} piese schimb`,
    `${brand.name} service`,
    `${brand.name} catalog`,
    // SEAP / SICAP / Public Procurement
    `${brand.name} SEAP`,
    `${brand.name} SICAP`,
    `${brand.name} licitatie`,
    `${brand.name} achizitii publice`,
    `furnizor ${brand.name} SEAP`,
    `licitatie ${category.name.toLowerCase()} ${brand.name}`,
    `${brand.name} fonduri europene`,
    // Category + Brand combinations
    `${category.name.toLowerCase()} ${brand.name}`,
    `${brand.name} ${category.name.toLowerCase()}`,
    // Product type keywords
    ...category.productTypes.map(pt => `${pt.name.toLowerCase()} ${brand.name}`),
    ...category.productTypes.map(pt => `${brand.name} ${pt.name.toLowerCase()}`),
    // Application keywords
    ...category.productTypes.flatMap(pt =>
      pt.applications.slice(0, 2).map(app => `${brand.name} ${app.toLowerCase()}`)
    ),
    // Industry keywords
    `${brand.name} industrial`,
    `${brand.name} industrie`,
    // Purchase intent
    `cumpara ${brand.name}`,
    `achizitie ${brand.name}`,
    `furnizor ${brand.name}`,
    // General
    'echipamente industriale romania',
    'furnizor SEAP echipamente industriale',
    `piese schimb ${category.name.toLowerCase()}`,
    brand.country,
  ];

  // Remove duplicates and limit to 35 keywords
  const keywords = [...new Set(baseKeywords)].slice(0, 35);

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${config.site.url}/brand/${brand.slug}`,
      siteName: 'Infinitrade Romania',
      locale: 'ro_RO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${config.site.url}/brand/${brand.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Generate JSON-LD structured data
function generateJsonLd(brand, category) {
  // Generate Product entries for each product type
  const productItems = category.productTypes.map((product, index) => ({
    '@type': 'Product',
    '@id': `${config.site.url}/brand/${brand.slug}#product-${product.slug}`,
    name: `${product.name} ${brand.name}`,
    description: product.description,
    image: `${config.site.url}/logo-header.png`,
    category: category.name,
    brand: {
      '@type': 'Brand',
      name: brand.name,
    },
    manufacturer: {
      '@type': 'Organization',
      name: brand.name,
      address: {
        '@type': 'PostalAddress',
        addressCountry: brand.country,
      },
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'RON',
      price: '0',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: 'Infinitrade Romania',
        url: config.site.url,
      },
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization
      {
        '@type': 'Organization',
        '@id': `${config.site.url}/#organization`,
        name: 'Infinitrade Romania',
        url: config.site.url,
        logo: `${config.site.url}/logo-header.png`,
        description: 'Distribuitor autorizat echipamente industriale Romania',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Calea Lugojului nr.47/B, Hala nr. 3',
          addressLocality: 'Ghiroda',
          addressRegion: 'Timis',
          postalCode: '307200',
          addressCountry: 'RO',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+40 371 232 404',
          contactType: 'sales',
          areaServed: 'RO',
          availableLanguage: ['Romanian', 'English'],
        },
      },
      // BreadcrumbList
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
            name: category.name,
            item: `${config.site.url}/${category.slug}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: brand.name,
            item: `${config.site.url}/brand/${brand.slug}`,
          },
        ],
      },
      // Main Product (Brand as product line)
      {
        '@type': 'ProductGroup',
        '@id': `${config.site.url}/brand/${brand.slug}#brand-products`,
        name: `${brand.name} ${category.name}`,
        description: `${brand.description}. Distribuitor autorizat ${brand.name} in Romania - produse originale, piese schimb, suport tehnic.`,
        url: `${config.site.url}/brand/${brand.slug}`,
        image: `${config.site.url}/logo-header.png`,
        brand: {
          '@type': 'Brand',
          name: brand.name,
        },
        manufacturer: {
          '@type': 'Organization',
          name: brand.name,
          address: {
            '@type': 'PostalAddress',
            addressCountry: brand.country,
          },
        },
        hasVariant: productItems,
        productGroupID: brand.slug,
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'RON',
          lowPrice: '0',
          highPrice: '999999',
          availability: 'https://schema.org/InStock',
          offerCount: productItems.length,
          seller: {
            '@type': 'Organization',
            name: 'Infinitrade Romania',
            url: config.site.url,
          },
        },
      },
      // ItemList for product catalog
      {
        '@type': 'ItemList',
        name: `Produse ${brand.name} disponibile`,
        description: `Lista completa produse ${brand.name} ${category.name.toLowerCase()} disponibile la Infinitrade Romania`,
        numberOfItems: productItems.length,
        itemListElement: category.productTypes.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: `${product.name} ${brand.name}`,
          url: `${config.site.url}/${category.slug}#${product.slug}`,
        })),
      },
    ],
  };
}

export default async function BrandPage({ params }) {
  const { brandSlug } = await params;
  const brand = allBrands.find(b => b.slug === brandSlug);
  const category = brand ? categories.find(c => c.slug === brand.category) : null;

  if (!brand || !category) {
    notFound();
  }

  const jsonLd = generateJsonLd(brand, category);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrandPageClient brand={brand} category={category} />
    </>
  );
}

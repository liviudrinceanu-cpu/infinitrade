import { notFound } from 'next/navigation';
import { allCategoriesUnified, getBrandByAnySlug, getAllBrandSlugs } from '@/data/allBrandsIndex';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
import { getBrandContent } from '@/data/brandContent';
import BrandPageClient from './BrandPageClient';

// Generate static params for all brand pages (simple slugs)
export async function generateStaticParams() {
  return getAllBrandSlugs().map((slug) => ({
    brandSlug: slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { brandSlug } = await params;
  const brand = getBrandByAnySlug(brandSlug);

  if (!brand) {
    return {
      title: 'Brand negăsit',
      description: 'Pagina căutată nu a fost găsită.',
    };
  }

  // Use first category for primary SEO context
  const primaryCategory = brand.categories[0];
  const categoryNames = brand.categories.map(c => c.name).join(', ');

  const title = `${brand.name} | Catalog Produse 2026 | Infinitrade`;
  const description = `2026: Distribuitor ${brand.name} în România. Furnizor SEAP/SICAP. ${brand.description}. Livrare 24-72h.`;

  const baseKeywords = [
    brand.name,
    `${brand.name} Romania`,
    `${brand.name} pret`,
    `${brand.name} oferta`,
    `${brand.name} distribuitor`,
    `${brand.name} furnizor Romania`,
    `${brand.name} piese schimb`,
    `${brand.name} service`,
    `${brand.name} catalog`,
    `${brand.name} SEAP`,
    `${brand.name} SICAP`,
    `${brand.name} licitatie`,
    `${brand.name} achizitii publice`,
    `furnizor ${brand.name} SEAP`,
    // Keywords from all categories this brand belongs to
    ...brand.categories.flatMap(cat => [
      `${cat.name.toLowerCase()} ${brand.name}`,
      `${brand.name} ${cat.name.toLowerCase()}`,
      `licitatie ${cat.name.toLowerCase()} ${brand.name}`,
    ]),
    // Product type keywords from primary category
    ...(primaryCategory.productTypes || []).map(pt => `${pt.name.toLowerCase()} ${brand.name}`),
    ...(primaryCategory.productTypes || []).map(pt => `${brand.name} ${pt.name.toLowerCase()}`),
    ...(primaryCategory.productTypes || []).flatMap(pt =>
      (pt.applications || []).slice(0, 2).map(app => `${brand.name} ${app.toLowerCase()}`)
    ),
    `${brand.name} industrial`,
    `${brand.name} industrie`,
    `cumpara ${brand.name}`,
    `achizitie ${brand.name}`,
    `furnizor ${brand.name}`,
    'echipamente industriale romania',
    'furnizor SEAP echipamente industriale',
  ];

  const keywords = [...new Set(baseKeywords)].slice(0, 35);

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${config.site.url}/brand/${brand.simpleSlug}`,
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
      canonical: `${config.site.url}/brand/${brand.simpleSlug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Generate JSON-LD structured data (multi-category aware)
function generateJsonLd(brand) {
  const primaryCategory = brand.categories[0];
  const allProductItems = brand.categories.flatMap(cat =>
    (cat.productTypes || []).map((product) => ({
      '@type': 'Product',
      '@id': `${config.site.url}/brand/${brand.simpleSlug}#product-${product.slug}`,
      name: `${product.name} ${brand.name}`,
      description: product.description,
      image: `${config.site.url}/logo-header.png`,
      category: cat.name,
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
    }))
  );

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${config.site.url}/#organization`,
        name: 'Infinitrade Romania',
        url: config.site.url,
        logo: `${config.site.url}/logo-header.png`,
        description: 'Distribuitor echipamente industriale Romania',
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
            name: primaryCategory.name,
            item: `${config.site.url}/${primaryCategory.slug}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: brand.name,
            item: `${config.site.url}/brand/${brand.simpleSlug}`,
          },
        ],
      },
      {
        '@type': 'ProductGroup',
        '@id': `${config.site.url}/brand/${brand.simpleSlug}#brand-products`,
        name: `${brand.name} - ${brand.categories.map(c => c.name).join(', ')}`,
        description: `${brand.description}. Furnizor ${brand.name} in Romania - produse originale, piese schimb, suport tehnic.`,
        url: `${config.site.url}/brand/${brand.simpleSlug}`,
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
        hasVariant: allProductItems.slice(0, 10),
        productGroupID: brand.simpleSlug,
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'RON',
          lowPrice: '100',
          highPrice: '50000',
          availability: 'https://schema.org/InStock',
          offerCount: allProductItems.length,
          seller: {
            '@type': 'Organization',
            name: 'Infinitrade Romania',
            url: config.site.url,
          },
        },
      },
      {
        '@type': 'ItemList',
        name: `Produse ${brand.name} disponibile`,
        description: `Lista completa produse ${brand.name} disponibile la Infinitrade Romania`,
        numberOfItems: allProductItems.length,
        itemListElement: allProductItems.slice(0, 15).map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: product.name,
          url: `${config.site.url}/brand/${brand.simpleSlug}`,
        })),
      },
    ],
  };
}

export default async function BrandPage({ params }) {
  const { brandSlug } = await params;
  const brand = getBrandByAnySlug(brandSlug);

  if (!brand) {
    notFound();
  }

  // Get rich brand content if available
  const content = getBrandContent(brand.simpleSlug);

  const jsonLd = generateJsonLd(brand);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <BrandPageClient brand={brand} allCategories={allCategoriesUnified} brandContent={content} />
    </>
  );
}

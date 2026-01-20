import { notFound } from 'next/navigation';
import { allBrands, categories } from '@/data/products';
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
      title: 'Brand negasit | Infinitrade Romania',
      description: 'Pagina cautata nu a fost gasita.',
    };
  }

  const title = `${brand.name} Romania | Distribuitor Autorizat ${category.name} | Infinitrade`;
  const description = `Distribuitor autorizat ${brand.name} (${brand.country}) in Romania. ${brand.description}. Produse originale, piese schimb, suport tehnic. Livrare rapida 24-72h.`;

  return {
    title,
    description,
    keywords: [
      brand.name,
      `${brand.name} Romania`,
      `${brand.name} pret`,
      `${brand.name} distribuitor`,
      category.name.toLowerCase(),
      `${category.name.toLowerCase()} ${brand.name}`,
      'echipamente industriale',
      'piese schimb',
      brand.country,
    ],
    openGraph: {
      title,
      description,
      url: `https://infinitrade.ro/brand/${brand.slug}`,
      siteName: 'Infinitrade Romania',
      locale: 'ro_RO',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${brand.name} - Distribuitor Infinitrade Romania`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://infinitrade.ro/brand/${brand.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Generate JSON-LD structured data
function generateJsonLd(brand, category) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization
      {
        '@type': 'Organization',
        '@id': 'https://infinitrade.ro/#organization',
        name: 'Infinitrade Romania',
        url: 'https://infinitrade.ro',
        logo: 'https://infinitrade.ro/logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+40-256-XXX-XXX',
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
            item: 'https://infinitrade.ro',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: category.name,
            item: `https://infinitrade.ro/${category.slug}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: brand.name,
            item: `https://infinitrade.ro/brand/${brand.slug}`,
          },
        ],
      },
      // Product (Brand as product line)
      {
        '@type': 'Product',
        name: `${brand.name} ${category.name}`,
        description: brand.description,
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
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Infinitrade Romania',
          },
        },
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

import { notFound } from 'next/navigation';
import { allCategoriesUnified, getBrandByAnySlug, getAllBrandSlugs } from '@/data/allBrandsIndex';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
import { getBrandContent } from '@/data/brandContent';
import BrandPageClient from './BrandPageClient';

export async function generateStaticParams() {
  return getAllBrandSlugs().map((slug) => ({ brandSlug: slug }));
}

// Generate JSON-LD structured data (multi-category aware) — ItemList of
// ListItem instead of Product/Offer/AggregateOffer (G15 pass fixture).
function generateJsonLd(brand) {
  const primaryCategory = brand.categories[0];
  const allProductNames = brand.categories.flatMap((cat) =>
    (cat.productTypes || []).map((product) => `${product.name} ${brand.name}`)
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
        description: 'Furnizor de echipamente industriale în România',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Calea Lugojului nr.47/B, Hala nr. 3',
          addressLocality: 'Ghiroda',
          addressRegion: 'Timis',
          postalCode: '307200',
          addressCountry: 'RO',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${config.site.url}/brand/${brand.simpleSlug}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Acasa', item: config.site.url },
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
        '@type': 'ItemList',
        '@id': `${config.site.url}/brand/${brand.simpleSlug}#produse`,
        name: `Produse ${brand.name} disponibile`,
        description: `Lista completa produse ${brand.name} disponibile la Infinitrade Romania`,
        numberOfItems: allProductNames.length,
        itemListElement: allProductNames.slice(0, 15).map((name, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name,
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

  const content = getBrandContent(brand.simpleSlug);
  const jsonLd = generateJsonLd(brand);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <BrandPageClient brand={brand} allCategories={allCategoriesUnified} brandContent={content} />
    </>
  );
}

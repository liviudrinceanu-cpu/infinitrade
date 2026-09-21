// Pure JSON-LD builder for /brand/[brandSlug] pages.
//
// Extracted out of the page template (F1-01) so it is unit-testable and so
// G15 can scan it directly. Emits ZERO `Offer`, `AggregateOffer` or `Product`
// nodes: owner decision 6 forbids machine-readable price/stock/availability
// claims we cannot back with real data (stock.tsv covers ~45 SKUs, not whole
// brands). The former Product/ProductGroup+AggregateOffer pair is replaced by
// a single ItemList of ListItem — a plain, factual listing of the product
// types this brand's categories carry, with no price/stock assertion at all.
//
// Every other node (Organization, BreadcrumbList) and every `@id` value that
// survives is unchanged from the previous inline implementation.
//
// F3-02: adds a `WebPage` node carrying `dateModified`. Its value is
// `lastModified.brands` (src/data/lastModified.js) - the SAME value the
// sitemap uses as `lastmod` for this same URL (src/app/sitemap.js) and the
// SAME value the visible "Actualizat: <dată>" line renders in
// BrandPageClient.js (decisions-coverage-aeo.md §C5 / heading-phrasings.md
// B-14). One source, three surfaces, never three literals.
//
// F3-03: when the brand carries a `changelog[]`/`lastVerified` (brandContent
// data contract, see src/data/brandContent.js), `dateModified` is computed
// via `getBrandUpdatedDate()` instead of reading `lastModified.brands`
// directly, so it stays identical to the visible "Actualizat:" line.
import { getBrandUpdatedDate } from '@/data/lastModified';

export function buildBrandJsonLd(brand, config, brandContent) {
  const primaryCategory = brand.categories[0];

  const allProductItems = brand.categories.flatMap((cat) =>
    (cat.productTypes || []).map((product) => ({
      name: `${product.name} ${brand.name}`,
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
        description: 'Furnizor de echipamente industriale în România',
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
        '@type': 'WebPage',
        '@id': `${config.site.url}/brand/${brand.simpleSlug}#webpage`,
        url: `${config.site.url}/brand/${brand.simpleSlug}`,
        name: brand.name,
        dateModified: getBrandUpdatedDate(brandContent),
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

export default buildBrandJsonLd;

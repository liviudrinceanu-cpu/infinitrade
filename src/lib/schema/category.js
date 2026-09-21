// Pure JSON-LD builder for /[category] pages.
//
// Extracted out of the page template (F1-01) so it is unit-testable and so
// G15 can scan it directly. Emits ZERO `Offer`, `AggregateOffer` or `Product`
// nodes: owner decision 6 forbids machine-readable price/stock/availability
// claims we cannot back with real data. The former ProductGroup (with
// AggregateOffer'd Product variants) and the Service node's OfferCatalog
// (Offer-wrapping-Product entries) are both replaced by plain ItemList of
// ListItem — a factual listing of product types, with no price/stock
// assertion at all.
//
// Every other node (BreadcrumbList, the Organization reference, Service
// itself) and every `@id` value that survives is unchanged from the previous
// inline implementation.
//
// F3-02: adds a `WebPage` node carrying `dateModified`, the SAME value as
// `lastModified.categories` (src/data/lastModified.js) used by the sitemap's
// `lastmod` for this same URL and by the visible "Actualizat: <dată>" line
// rendered in CategoryClient.js.
import { lastModified } from '@/data/lastModified';

export function buildCategoryJsonLd(category, config) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${config.site.url}/${category.slug}#webpage`,
        url: `${config.site.url}/${category.slug}`,
        name: category.name,
        dateModified: lastModified.categories,
      },
      // Product type listing - no Offer/AggregateOffer/Product: see file header.
      {
        '@type': 'ItemList',
        '@id': `${config.site.url}/${category.slug}#product-group`,
        name: category.name,
        description: category.heroDescription,
        url: `${config.site.url}/${category.slug}`,
        image: `${config.site.url}/logo-header.png`,
        numberOfItems: category.productTypes.length,
        itemListElement: category.productTypes.slice(0, 5).map((type, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: type.name,
          url: `${config.site.url}/${category.slug}`,
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
      // Reference global Organization Schema (defined in layout.js)
      {
        '@type': 'Organization',
        '@id': `${config.site.url}/#organization`,
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
          '@type': 'ItemList',
          name: `Catalog ${category.name}`,
          itemListElement: category.productTypes.map((type, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: type.name,
          })),
        },
      },
    ],
  };
}

export default buildCategoryJsonLd;

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
import { EXTENSION_BY_SLUG } from '@/data/brandsExtension';

// D-2026-09-22: `sameAs` for the Brand node = the manufacturer's official
// site (brandsExtension.officialUrl for the +726 brands; for the 283 base
// brands the origin of the first cited manufacturer source). Never a
// distributor/marketplace URL — sources[] are official sites by contract.
function officialSameAs(brand, brandContent) {
  const ext = EXTENSION_BY_SLUG[brand.simpleSlug];
  if (ext && /^https?:\/\//.test(ext.officialUrl || '')) return ext.officialUrl;
  const first = Array.isArray(brandContent?.sources) ? brandContent.sources.find((x) => /^https?:\/\//.test(x?.url || '')) : null;
  if (!first) return null;
  try { return new URL(first.url).origin + '/'; } catch { return null; }
}

export function buildBrandJsonLd(brand, config, brandContent) {
  const primaryCategory = brand.categories[0];

  const allProductItems = brand.categories.flatMap((cat) =>
    (cat.productTypes || []).map((product) => ({
      name: `${product.name} ${brand.name}`,
    }))
  );

  const sameAs = officialSameAs(brand, brandContent);
  const brandNode = {
    '@type': 'Brand',
    '@id': `${config.site.url}/brand/${brand.simpleSlug}#brand`,
    name: brand.name,
    ...(sameAs ? { sameAs: [sameAs] } : {}),
  };
  const faq = Array.isArray(brandContent?.faq) ? brandContent.faq.filter((f) => f && f.q && f.a) : [];
  const codes = Array.isArray(brandContent?.productCodes) ? brandContent.productCodes.filter((c) => c && c.code) : [];

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
        about: { '@id': brandNode['@id'] },
      },
      brandNode,
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
      // B-15: series/type designations from the manufacturer's catalogue —
      // plain ListItem names, no Product/Offer (owner decision 6).
      ...(codes.length
        ? [{
            '@type': 'ItemList',
            name: `Coduri și serii ${brand.name} cerute frecvent`,
            numberOfItems: codes.length,
            itemListElement: codes.map((c, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: c.description ? `${c.code} — ${c.description}` : c.code,
            })),
          }]
        : []),
      // B-16: FAQPage mirrors the visible "Întrebări frecvente" block 1:1.
      ...(faq.length
        ? [{
            '@type': 'FAQPage',
            '@id': `${config.site.url}/brand/${brand.simpleSlug}#faq`,
            mainEntity: faq.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }]
        : []),
    ],
  };
}

export default buildBrandJsonLd;

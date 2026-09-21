import { notFound } from 'next/navigation';
import { allCategoriesUnified, getBrandByAnySlug, getAllBrandSlugs } from '@/data/allBrandsIndex';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
import { getBrandContent } from '@/data/brandContent';
import { buildBrandJsonLd } from '@/lib/schema/brand';
import { NOINDEX_BRANDS } from '@/data/noindexBrands';
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

  const title = `${brand.name} | Catalog Produse 2026 | Infinitrade`;
  const description = `2026: Furnizăm echipamente ${brand.name} în România. Furnizor SEAP/SICAP. ${brand.description}. Livrare 24-72h.`;

  return {
    title,
    description,
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
    robots: NOINDEX_BRANDS.includes(brand.simpleSlug)
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

// Generate JSON-LD structured data (multi-category aware).
// Builder lives in '@/lib/schema/brand' (pure function, unit-testable, and
// what G15 scans) - see that file for why there is no Offer/AggregateOffer/
// Product node here.
function generateJsonLd(brand) {
  return buildBrandJsonLd(brand, config);
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

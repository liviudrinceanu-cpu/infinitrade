import { notFound } from 'next/navigation';
import { getBrandByAnySlug, getAllBrandSlugs, isBrandNoindex } from '@/data/allBrandsIndex';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
import { getBrandContent } from '@/data/brandContent';
import { buildBrandJsonLd } from '@/lib/schema/brand';
import BrandPageClient from './BrandPageClient';
import { getPrimaryForDuplicate } from '@/data/duplicateBrands';
import { getRelatedBrandsByCategory } from '@/data/brandView';
import { getSeriesForBrand } from '@/data/series/_index';

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

  // v19 (audit R1): title ≤ 65 characters without truncation (longest
  // variant that fits), description 110–160 characters (the brand
  // description is trimmed on a word boundary, never mid-word).
  const dupOf = getPrimaryForDuplicate(brand.simpleSlug);
  const titleVariants = [
    ...(dupOf ? [`${brand.name} (${brand.categories[0].name}) | Infinitrade`, `${brand.name} (${brand.categories[0].name})`] : []),
    `${brand.name} | Catalog Produse 2026 | Infinitrade`,
    `${brand.name} | Catalog 2026 | Infinitrade`,
    `${brand.name} | Infinitrade`,
    brand.name,
  ];
  const title = { absolute: titleVariants.find((t) => t.length <= 65) || brand.name };
  const lead = `Furnizăm echipamente ${brand.name} în România`;
  const tail = ' Furnizor SEAP, livrare 24–72 h din stoc.';
  const room = 158 - lead.length - tail.length - 2;
  const rawDesc = String(brand.description || '').replace(/\.$/, '');
  const cut = rawDesc.length <= room ? rawDesc : rawDesc.slice(0, room).replace(/[\s,;:–-]+\S*$/, '');
  let description = cut ? `${lead}: ${cut}.${tail}` : `${lead}.${tail}`;
  if (description.length < 110) description += ' Ofertă pe cod de produs, la comandă sau din stoc.';

  return {
    title,
    description,
    openGraph: {
      title: title.absolute,
      description,
      url: `${config.site.url}/brand/${brand.simpleSlug}`,
      siteName: 'Infinitrade Romania',
      locale: 'ro_RO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title.absolute,
      description,
    },
    alternates: {
      canonical: `${config.site.url}/brand/${brand.simpleSlug}`,
    },
    robots: isBrandNoindex(brand.simpleSlug)
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

// Generate JSON-LD structured data (multi-category aware).
// Builder lives in '@/lib/schema/brand' (pure function, unit-testable, and
// what G15 scans) - see that file for why there is no Offer/AggregateOffer/
// Product node here.
function generateJsonLd(brand, brandContent) {
  return buildBrandJsonLd(brand, config, brandContent);
}

export default async function BrandPage({ params }) {
  const { brandSlug } = await params;
  const brand = getBrandByAnySlug(brandSlug);

  if (!brand) {
    notFound();
  }

  // Get rich brand content if available
  const content = getBrandContent(brand.simpleSlug);

  const jsonLd = generateJsonLd(brand, content);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <BrandPageClient brand={brand} primaryDuplicate={(() => { const p = getPrimaryForDuplicate(brand.simpleSlug); const pb = p && getBrandByAnySlug(p); return pb ? { slug: pb.simpleSlug, name: pb.name } : null; })()} relatedByCategory={getRelatedBrandsByCategory(brand)} brandContent={content} seriesPages={getSeriesForBrand(brand.simpleSlug)} />
    </>
  );
}

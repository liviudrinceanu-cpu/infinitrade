import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { companyInfo } from '@/data/products';
import { allCategoriesUnified as categories } from '@/data/allBrandsIndex';
import { getCategoryFaq } from '@/data/categoryFaq';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
import { buildCategoryJsonLd } from '@/lib/schema/category';
import CategoryClient from './CategoryClient';
import { getRelatedForCategory } from '@/data/categoryRelated';
import { buildCategoryView, slimCategory } from '@/data/categoryView';
import styles from './category.module.css';

export const revalidate = 3600;

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

  // Brand names for the meta description: featured first, at most 6 — the
  // full list (now 100+ in some categories) would blow past 155 characters.
  const brandNames = [...category.brands.filter(b => b.featured), ...category.brands.filter(b => !b.featured)]
    .slice(0, 6).map(b => b.name).join(', ');
  const productTypeNames = category.productTypes.map(p => p.name).slice(0, 5).join(', ');

  // v15 (D-2026-09-26): the page title is the curated `metaTitle` from the
  // data file (≤ 62 characters: category + "Furnizor SEAP" + two or three
  // headline brands), rendered as an absolute title so the root layout
  // template does not append " | Infinitrade Romania" and push it past the
  // width Google shows. The site name still reaches the SERP through the
  // WebSite JSON-LD in the root layout. Before v15 the title was only the
  // short category name and the stored metaTitle was never rendered.
  const title = category.metaTitle && category.metaTitle.length <= 62
    ? { absolute: category.metaTitle }
    : category.name;
  // v16: metaDescription (140–155 characters once filled) carries a {N}
  // placeholder for the live brand count of the merged category list.
  const description = (category.metaDescription || '').replace('{N}', String(category.brands.length));

  return {
    title,
    description,
    openGraph: {
      title: `${category.name} | Furnizor România | Infinitrade`,
      description: `Furnizor de ${category.name.toLowerCase()} în România. Branduri: ${brandNames}. Ofertă pe cod de produs, livrare la comandă.`,
      url: `${config.site.url}/${category.slug}`,
      siteName: 'Infinitrade Romania',
      locale: 'ro_RO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} | Furnizor România | Infinitrade`,
      description: `Furnizor de ${category.name.toLowerCase()} în România. Branduri: ${brandNames}.`,
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

  // Expert FAQ content (answer-engine optimization) - separate from the generic
  // The only FAQPage schema on the page - its questions are rendered visibly below.
  const expertFaqs = getCategoryFaq(category.slug);
  const expertFaqJsonLd = expertFaqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${config.site.url}/${category.slug}#expert-faq`,
    mainEntity: expertFaqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  } : null;

  // JSON-LD Structured Data
  const jsonLd = buildCategoryJsonLd(category, config);

  return (
    <>
      <Header />
      <main id="main-content">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />

        {/* Expert FAQ Structured Data (answer-engine optimization) */}
        {expertFaqJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(expertFaqJsonLd) }}
          />
        )}

        {/* Breadcrumbs - visible on page */}
        <div className={styles.breadcrumbWrapper}>
          <div className={styles.container}>
            <Breadcrumbs items={[]} currentPage={category.name} />
          </div>
        </div>

        {/* Client-side interactive content */}
        <CategoryClient category={slimCategory(category)} view={buildCategoryView(category)} related={getRelatedForCategory(category.slug)} />

        {/* v16 (D-2026-09-26): the expert FAQ is rendered once, inside
            CategoryClient (first entry as C-03, the rest as C-09) — the second,
            full copy that used to follow here doubled ~800 px on phones and
            duplicated id="faq-heading". The FAQPage JSON-LD above still maps
            1:1 to the visible questions. */}
      </main>
      <Footer />
    </>
  );
}

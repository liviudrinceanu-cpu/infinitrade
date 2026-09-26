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

  // Shorten title to stay under 70 chars total
  // Use short names for long categories to fit "| Infinitrade" suffix (14 chars)
  const shortNames = {
    'suflante-ventilatoare': 'Suflante Industriale',
    'schimbatoare-caldura': 'Schimbătoare Căldură',
    'motoare-electrice': 'Motoare Electrice',
    'echipamente-electrice': 'Echipamente Electrice',
    'echipamente-auxiliare': 'Echipamente Auxiliare',
    'lubrifianti-chimice': 'Lubrifianți Chimice',
    'scule-instrumente': 'Scule Măsură',
    'componente-mecanice': 'Componente Mecanice',
    'filtre-consumabile': 'Filtre Industriale',
    'componente-hidraulice-pneumatice': 'Hidraulică Pneumatică',
    'aparate-masura-testare': 'Aparate Măsură Testare',
  };
  const displayName = shortNames[category.slug] || category.name;
  const title = displayName;
  // Use metaDescription from data (already optimized for length) instead of dynamic description
  const description = category.metaDescription;

  return {
    title,
    description,
    openGraph: {
      title: `${category.name} | Distribuitor Romania | Infinitrade`,
      description: `Distribuitor ${category.name.toLowerCase()} în România. Branduri: ${brandNames}. ${category.stats.products} produse disponibile. Livrare 24-72h.`,
      url: `${config.site.url}/${category.slug}`,
      siteName: 'Infinitrade Romania',
      locale: 'ro_RO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} | Distribuitor`,
      description: `Distribuitor ${category.name.toLowerCase()} în România. ${category.stats.brands} branduri premium.`,
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
        <CategoryClient category={category} />

        {/* Expert FAQ - concrete, technical answers for buyers, engineers and AI answer engines */}
        {expertFaqs.length > 0 && (
          <section aria-labelledby="faq-heading" className={styles.faqSection}>
            <div className={styles.container}>
              <div className={styles.sectionHeader}>
                <h2 id="faq-heading">Întrebări frecvente despre {category.name}</h2>
              </div>
              <div className={styles.faqList}>
                {expertFaqs.map((item, index) => (
                  <details key={index} className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>{item.q}</summary>
                    <div className={styles.faqAnswer}>
                      <p>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

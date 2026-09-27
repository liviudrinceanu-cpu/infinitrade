import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { config } from '@/lib/config';
import { caseStudies, getCaseStudy, getRelatedCaseStudies } from '@/data/caseStudies';
import {
  Factory, Zap, TrendingUp, CheckCircle,
  ArrowRight, Target, Wrench, BarChart3, Users
} from 'lucide-react';
import { safeJsonLd } from '@/lib/utils';
import { sanitizeContentHtml } from '@/lib/sanitize';
import { lastModified } from '@/data/lastModified';
import styles from './case-study.module.css';

// Generate static params for all case studies
export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: 'Studiu de Caz negăsit',
      description: 'Pagina căutată nu a fost găsită.',
    };
  }

  // v18: guides, not case studies; the excerpt is written at 140–160
  // characters, so it is used whole (no mid-word "..." truncation).
  const title = { absolute: `${caseStudy.shortTitle}: ghid de aplicație | Infinitrade` };
  const description = caseStudy.excerpt;

  return {
    title,
    description,
    keywords: [
      ...caseStudy.tags,
      ...caseStudy.brands.map(b => `${b.toLowerCase()} romania`),
      ...caseStudy.products.map(p => p.toLowerCase()),
      caseStudy.industry.toLowerCase(),
      'ghid de aplicație',
      'proiect industrial',
    ],
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.excerpt,
      url: `${config.site.url}/studii-de-caz/${caseStudy.slug}`,
      siteName: 'Infinitrade Romania',
      locale: 'ro_RO',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: caseStudy.title,
      description: caseStudy.excerpt,
    },
    alternates: {
      canonical: `${config.site.url}/studii-de-caz/${caseStudy.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Generate Case Study JSON-LD
function generateCaseStudyJsonLd(caseStudy) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Article schema
      {
        '@type': 'Article',
        '@id': `${config.site.url}/studii-de-caz/${caseStudy.slug}#article`,
        headline: caseStudy.title,
        description: caseStudy.excerpt,
        dateModified: lastModified.caseStudies,
        author: {
          '@type': 'Organization',
          name: 'Infinitrade Romania',
          url: config.site.url,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Infinitrade Romania',
          logo: {
            '@type': 'ImageObject',
            url: `${config.site.url}/logo-header.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${config.site.url}/studii-de-caz/${caseStudy.slug}`,
        },
        image: `${config.site.url}/logo-header.png`,
        articleSection: 'Ghiduri de aplicație',
        inLanguage: 'ro-RO',
        keywords: caseStudy.tags.join(', '),
        about: [
          ...caseStudy.brands.map(brand => ({
            '@type': 'Brand',
            name: brand,
          })),
          ...caseStudy.categories.map(cat => ({
            '@type': 'Thing',
            name: cat,
          })),
        ],
      },
      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
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
            name: 'Studii de Caz',
            item: `${config.site.url}/studii-de-caz`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: caseStudy.title,
          },
        ],
      },
    ],
  };
}

// Render markdown-like content
function renderContent(content) {
  const lines = content.trim().split('\n');
  const elements = [];
  let currentList = [];
  let inTable = false;
  let tableRows = [];

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(<ul key={elements.length} className={styles.contentList}>{currentList}</ul>);
      currentList = [];
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const headerRow = tableRows[0];
      const bodyRows = tableRows.slice(2);
      elements.push(
        <div key={elements.length} className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                {headerRow.map((cell, i) => (
                  <th key={i}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Table detection
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushList();
      const cells = trimmed.split('|').filter(c => c.trim()).map(c => c.trim());
      tableRows.push(cells);
      inTable = true;
      return;
    } else if (inTable) {
      flushTable();
    }

    // Headers
    if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      flushList();
      const text = trimmed.replace(/\*\*/g, '');
      elements.push(<h4 key={index} className={styles.subheading}>{text}</h4>);
      return;
    }

    // Lists
    if (trimmed.startsWith('- ')) {
      const text = trimmed.replace(/^- /, '');
      const processed = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      currentList.push(
        <li key={currentList.length} dangerouslySetInnerHTML={{ __html: sanitizeContentHtml(processed) }} />
      );
      return;
    }

    // Empty line
    if (!trimmed) {
      flushList();
      return;
    }

    // Regular paragraph - sanitize HTML to prevent XSS
    flushList();
    let processed = trimmed;
    processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    elements.push(
      <p key={index} dangerouslySetInnerHTML={{ __html: sanitizeContentHtml(processed) }} />
    );
  });

  flushList();
  flushTable();

  return elements;
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const jsonLd = generateCaseStudyJsonLd(caseStudy);
  const relatedStudies = getRelatedCaseStudies(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <Header />
      <main id="main-content" className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <Breadcrumbs
              items={[{ label: 'Studii de Caz', href: '/studii-de-caz' }]}
              currentPage={caseStudy.shortTitle}
            />

            <div className={styles.heroContent}>
              <div className={styles.heroMeta}>
                <Link
                  href={`/industrii/${caseStudy.industrySlug}`}
                  className={styles.industryTag}
                >
                  <Factory size={14} />
                  {caseStudy.industry}
                </Link>
                <span className={styles.metaDivider}>•</span>
                <span className={styles.metaItem}>
                  Ghid de aplicație
                </span>
              </div>

              <h1>{caseStudy.title}</h1>
              <p className={styles.heroExcerpt}>{caseStudy.excerpt}</p>

            </div>
          </div>
        </section>

        {/* Brands Used */}
        <section className={styles.brandsSection}>
          <div className={styles.container}>
            <div className={styles.brandsHeader}>
              <h2>Ce branduri se folosesc în această aplicație?</h2>
              <p>Producătorii ale căror game le ofertăm pentru acest tip de proiect</p>
            </div>
            <div className={styles.brandsGrid}>
              {caseStudy.brands.map((brand, index) => (
                <Link
                  key={brand}
                  href={`/brand/${caseStudy.brandSlugs[index]}`}
                  className={styles.brandCard}
                >
                  <span className={styles.brandName}>{brand}</span>
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
            <div className={styles.categoriesLinks}>
              <span>Categorii:</span>
              {caseStudy.categories.map((cat, index) => (
                <Link
                  key={cat}
                  href={`/${caseStudy.categorySlugs[index]}`}
                  className={styles.categoryLink}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className={styles.contentSection}>
          <div className={styles.container}>
            <div className={styles.sectionIcon}>
              <Target size={24} />
            </div>
            <h2>Care sunt problemele tipice?</h2>
            <div className={styles.contentBody}>
              {renderContent(caseStudy.challenge)}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className={styles.contentSection + ' ' + styles.solutionSection}>
          <div className={styles.container}>
            <div className={styles.sectionIcon}>
              <Wrench size={24} />
            </div>
            <h2>Ce soluție tehnică recomandăm?</h2>
            <div className={styles.contentBody}>
              {renderContent(caseStudy.solution)}
            </div>

            {/* Products Grid */}
            <div className={styles.productsUsed}>
              <h3>Tipuri de produse pe care le ofertăm:</h3>
              <div className={styles.productsTags}>
                {caseStudy.products.map(product => (
                  <span key={product} className={styles.productTag}>
                    <CheckCircle size={14} />
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section className={styles.contentSection}>
          <div className={styles.container}>
            <div className={styles.sectionIcon}>
              <Users size={24} />
            </div>
            <h2>Cum se desfășoară implementarea?</h2>
            <div className={styles.contentBody}>
              {renderContent(caseStudy.implementation)}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className={styles.contentSection + ' ' + styles.resultsSection}>
          <div className={styles.container}>
            <div className={styles.sectionIcon}>
              <BarChart3 size={24} />
            </div>
            <h2>Ce indicatori merită urmăriți?</h2>
            <div className={styles.contentBody}>
              {renderContent(caseStudy.results_detailed)}
            </div>
          </div>
        </section>

        {/* v18: no testimonial — the quotes had no source (removed). */}

        {/* Tags Section */}
        <section className={styles.tagsSection}>
          <div className={styles.container}>
            <h3>Cuvinte cheie:</h3>
            <div className={styles.tagsGrid}>
              {caseStudy.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.container}>
              <h2>Studii de Caz Similare</h2>
              <div className={styles.relatedGrid}>
                {relatedStudies.map(related => (
                  <Link
                    key={related.id}
                    href={`/studii-de-caz/${related.slug}`}
                    className={styles.relatedCard}
                  >
                    <span className={styles.relatedIndustry}>{related.industry}</span>
                    <h3>{related.shortTitle}</h3>
                    <p>{related.excerpt.slice(0, 100)}...</p>
                    <div className={styles.relatedBrands}>
                      {related.brands.slice(0, 3).map(b => (
                        <span key={b}>{b}</span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2>Ai un proiect similar?</h2>
              <p>
                Contactează echipa noastră tehnică pentru o consultație gratuită.
                Analizăm cerințele tale și propunem soluția optimă.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Solicită Consultație Gratuită
                </Link>
                <Link href="/studii-de-caz" className={styles.ctaSecondary}>
                  Vezi Alte Proiecte
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

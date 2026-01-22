import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { caseStudies, getCaseStudy, getRelatedCaseStudies } from '@/data/caseStudies';
import {
  Factory, Clock, Calendar, Zap, TrendingUp, CheckCircle,
  ArrowRight, Quote, Target, Wrench, BarChart3, Users
} from 'lucide-react';
import { sanitizeContentHtml } from '@/lib/utils';
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

  const title = `${caseStudy.shortTitle} | Studiu de Caz`;
  // Truncate excerpt to 140 chars to leave room for brand mention
  const shortExcerpt = caseStudy.excerpt.length > 140
    ? caseStudy.excerpt.substring(0, 137) + '...'
    : caseStudy.excerpt;
  const description = shortExcerpt;

  return {
    title,
    description,
    keywords: [
      ...caseStudy.tags,
      ...caseStudy.brands.map(b => `${b.toLowerCase()} romania`),
      ...caseStudy.products.map(p => p.toLowerCase()),
      caseStudy.industry.toLowerCase(),
      'studiu de caz',
      'proiect industrial',
    ],
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.excerpt,
      url: `https://infinitrade.ro/studii-de-caz/${caseStudy.slug}`,
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
      canonical: `https://infinitrade.ro/studii-de-caz/${caseStudy.slug}`,
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
        '@id': `https://infinitrade.ro/studii-de-caz/${caseStudy.slug}#article`,
        headline: caseStudy.title,
        description: caseStudy.excerpt,
        datePublished: caseStudy.date || `${caseStudy.year}-01-15`,
        dateModified: '2026-01-22',
        author: {
          '@type': 'Organization',
          name: 'Infinitrade Romania',
          url: 'https://infinitrade.ro',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Infinitrade Romania',
          logo: {
            '@type': 'ImageObject',
            url: 'https://infinitrade.ro/logo-header.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://infinitrade.ro/studii-de-caz/${caseStudy.slug}`,
        },
        image: 'https://infinitrade.ro/logo-header.png',
        articleSection: 'Studii de Caz',
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
      // HowTo schema for the implementation
      {
        '@type': 'HowTo',
        name: `Implementare: ${caseStudy.shortTitle}`,
        description: caseStudy.excerpt,
        totalTime: `P${parseInt(caseStudy.duration)}M`,
        tool: caseStudy.products.map(product => ({
          '@type': 'HowToTool',
          name: product,
        })),
        step: [
          {
            '@type': 'HowToStep',
            name: 'Analiza si Proiectare',
            text: 'Audit detaliat al sistemului existent si proiectare solutie optimizata',
          },
          {
            '@type': 'HowToStep',
            name: 'Furnizare Echipamente',
            text: `Livrare echipamente: ${caseStudy.brands.join(', ')}`,
          },
          {
            '@type': 'HowToStep',
            name: 'Instalare si Punere in Functiune',
            text: 'Montaj profesional si testare completa',
          },
          {
            '@type': 'HowToStep',
            name: 'Optimizare si Training',
            text: 'Fine-tuning parametri si instruire personal',
          },
        ],
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
            name: 'Studii de Caz',
            item: 'https://infinitrade.ro/studii-de-caz',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
                  <Clock size={14} />
                  {caseStudy.duration}
                </span>
                <span className={styles.metaDivider}>•</span>
                <span className={styles.metaItem}>
                  <Calendar size={14} />
                  {caseStudy.year}
                </span>
              </div>

              <h1>{caseStudy.title}</h1>
              <p className={styles.heroExcerpt}>{caseStudy.excerpt}</p>

              {/* Results Highlights */}
              <div className={styles.resultsHighlight}>
                {Object.entries(caseStudy.results).map(([key, value]) => (
                  <div key={key} className={styles.resultCard}>
                    <span className={styles.resultValue}>{value}</span>
                    <span className={styles.resultLabel}>
                      {key === 'energySaving' ? 'Economie Energie' :
                       key === 'efficiency' ? 'Creștere Eficiență' :
                       key === 'reliability' ? 'Fiabilitate' :
                       key === 'availability' ? 'Disponibilitate' :
                       key === 'productivity' ? 'Productivitate' :
                       key === 'quality' ? 'Calitate' :
                       key === 'payback' ? 'Perioada Recuperare' :
                       key === 'roi' ? 'ROI' :
                       key === 'co2Reduction' ? 'Reducere CO2' :
                       key === 'capacity' ? 'Capacitate' :
                       key === 'compliance' ? 'Conformitate' :
                       key === 'heatRecovery' ? 'Recuperare Căldură' :
                       key === 'emissions' ? 'Emisii' :
                       key === 'airQuality' ? 'Calitate Aer' :
                       key === 'maintenance' ? 'Cost Mentenanță' :
                       key}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Brands Used */}
        <section className={styles.brandsSection}>
          <div className={styles.container}>
            <div className={styles.brandsHeader}>
              <h2>Echipamente Utilizate</h2>
              <p>Branduri de top pentru rezultate garantate</p>
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
            <h2>Provocarea</h2>
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
            <h2>Soluția Implementată</h2>
            <div className={styles.contentBody}>
              {renderContent(caseStudy.solution)}
            </div>

            {/* Products Grid */}
            <div className={styles.productsUsed}>
              <h3>Tipuri de Produse Furnizate:</h3>
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
            <h2>Implementare</h2>
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
            <h2>Rezultate Măsurate</h2>
            <div className={styles.contentBody}>
              {renderContent(caseStudy.results_detailed)}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className={styles.testimonialSection}>
          <div className={styles.container}>
            <div className={styles.testimonialCard}>
              <Quote size={32} className={styles.quoteIcon} />
              <blockquote>
                "{caseStudy.testimonialQuote}"
              </blockquote>
              <cite>— {caseStudy.testimonialIndustry}</cite>
              <p className={styles.confidentialNote}>
                * Din motive de confidențialitate, nu putem divulga numele companiei
              </p>
            </div>
          </div>
        </section>

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

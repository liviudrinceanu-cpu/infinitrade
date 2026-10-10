import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBox from '@/components/AuthorBox';
import { blogArticles, getBlogArticle } from '@/data/blog';
import { getAuthorById } from '@/data/authors';
import { config } from '@/lib/config';
import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { safeJsonLd } from '@/lib/utils';
import { sanitizeContentHtml } from '@/lib/sanitize';
import styles from './article.module.css';
import { isNeutralPublicUrl } from '@/lib/externalLinks';

export const revalidate = 3600;

// Generate static params for all blog articles
export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {
      title: { absolute: 'Articol negăsit | Infinitrade Romania' },
      description: 'Articolul căutat nu a fost găsit.',
    };
  }

  // Truncate title to fit within 60 char limit (with template suffix)
  // Template adds " | Infinitrade Romania" (21 chars), so title should be max 39 chars
  const shortTitle = article.shortTitle || article.title.substring(0, 38);
  // v20 (audit R2): meta description 110–160 characters without touching the
  // article text — long excerpts are cut on a word boundary, short ones get
  // a neutral suffix.
  const metaDescription = (() => {
    const ex = String(article.excerpt || '').trim();
    if (ex.length > 160) return ex.slice(0, 157).replace(/[\s,;:–-]+\S*$/, '') + '…';
    if (ex.length < 110) return `${ex.replace(/\.$/, '')}. Ghid tehnic Infinitrade pentru ingineri și achiziții.`.slice(0, 160);
    return ex;
  })();

  return {
    title: shortTitle,
    description: metaDescription,
    authors: [{ name: 'Echipa tehnică Infinitrade' }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${config.site.url}/blog/${article.slug}`,
      siteName: 'Infinitrade Romania',
      locale: 'ro_RO',
      type: 'article',
      publishedTime: article.date,
      authors: ['Echipa tehnică Infinitrade'],
      tags: article.tags,
      images: [{
        url: `/blog/${article.slug}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: article.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [`/blog/${article.slug}/opengraph-image`],
    },
    alternates: {
      canonical: `${config.site.url}/blog/${article.slug}`,
    },
  };
}

// Generate Article JSON-LD with enhanced author details for E-E-A-T
function generateArticleJsonLd(article, author) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${config.site.url}/blog/${article.slug}#article`,
    headline: article.title,
    description: article.excerpt,
    image: {
      '@type': 'ImageObject',
      url: `${config.site.url}/blog/${article.slug}/opengraph-image`,
      width: 1200,
      height: 630
    },
    // v19: articles are signed by the team (src/data/authors.js), so the
    // author is the Organization, not an unconfirmed Person.
    author: { '@type': 'Organization', '@id': `${config.site.url}/#organization`, name: 'Infinitrade Romania' },
    publisher: {
      '@type': 'Organization',
      name: 'Infinitrade Romania',
      logo: {
        '@type': 'ImageObject',
        url: `${config.site.url}/logo-header.png`,
        width: 200,
        height: 60
      },
    },
    datePublished: article.date,
    dateModified: article.dateModified || article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${config.site.url}/blog/${article.slug}`,
    },
    keywords: article.tags.join(', '),
    inLanguage: 'ro-RO',
    isPartOf: {
      '@type': 'Blog',
      '@id': `${config.site.url}/blog#blog`,
      name: 'Blog Tehnic Infinitrade Romania'
    },
    // GEO optimization: speakable sections for voice search
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.articleSummary', 'h2'],
    },
  };
}

// Generate HowTo JSON-LD for guide articles (GEO optimization)
function generateHowToJsonLd(article) {
  if (!article.howToSteps || article.howToSteps.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${config.site.url}/blog/${article.slug}#howto`,
    name: article.title,
    description: article.excerpt,
    step: article.howToSteps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

// Simple markdown-like renderer
function renderContent(content) {
  const lines = content.trim().split('\n');
  const elements = [];
  let currentList = [];
  let listType = null;
  let inTable = false;
  let tableRows = [];

  const flushList = () => {
    if (currentList.length > 0) {
      if (listType === 'ul') {
        elements.push(<ul key={elements.length}>{currentList}</ul>);
      } else {
        elements.push(<ol key={elements.length}>{currentList}</ol>);
      }
      currentList = [];
      listType = null;
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const headerRow = tableRows[0];
      const bodyRows = tableRows.slice(2); // Skip separator row
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
      if (cells.some(c => /^[-:]+$/.test(c))) {
        // Separator row
        tableRows.push(cells);
      } else {
        tableRows.push(cells);
      }
      inTable = true;
      return;
    } else if (inTable) {
      flushTable();
    }

    // Headers
    if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(<h2 key={index}>{trimmed.replace('## ', '')}</h2>);
      return;
    }
    if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(<h3 key={index}>{trimmed.replace('### ', '')}</h3>);
      return;
    }

    // Lists
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (listType !== 'ul') {
        flushList();
        listType = 'ul';
      }
      currentList.push(<li key={currentList.length}>{trimmed.replace(/^[-*] /, '')}</li>);
      return;
    }

    // Checkbox lists
    if (trimmed.startsWith('- [ ]') || trimmed.startsWith('- [x]')) {
      if (listType !== 'ul') {
        flushList();
        listType = 'ul';
      }
      const checked = trimmed.startsWith('- [x]');
      const text = trimmed.replace(/^- \[[ x]\] /, '');
      currentList.push(
        <li key={currentList.length} className={styles.checkbox}>
          <span className={checked ? styles.checked : styles.unchecked}></span>
          {text}
        </li>
      );
      return;
    }

    // Empty line
    if (!trimmed) {
      flushList();
      return;
    }

    // Bold text processing
    let processed = trimmed;
    processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Link processing - markdown style [text](url)
    processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline">$1</a>');

    // Regular paragraph - sanitize HTML to prevent XSS
    flushList();
    elements.push(
      <p key={index} dangerouslySetInnerHTML={{ __html: sanitizeContentHtml(processed) }} />
    );
  });

  flushList();
  flushTable();

  return elements;
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  const author = getAuthorById(article.authorId);
  const jsonLd = generateArticleJsonLd(article, author);
  const howToJsonLd = generateHowToJsonLd(article);
  const relatedArticles = blogArticles
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(howToJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Acasă',
              item: { '@type': 'WebPage', '@id': config.site.url },
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: { '@type': 'WebPage', '@id': `${config.site.url}/blog` },
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: article.title,
            },
          ],
        }) }}
      />
      <Header />
      <main id="main-content" className={styles.main}>
        <article className={styles.article}>
          <div className={styles.container}>
            <Breadcrumbs
              items={[{ label: 'Blog', href: '/blog' }]}
              currentPage={article.title}
            />

            <header className={styles.header}>
              <span className={styles.category}>{article.category}</span>
              <h1>{article.title}</h1>
              <p className={styles.excerpt}>{article.excerpt}</p>
              <div className={styles.meta}>
                <span><User size={16} /> {author.name}</span>
                <span><Calendar size={16} /> {article.date}</span>
                <span><Clock size={16} /> {article.readTime}</span>
              </div>
            </header>

            {/* Answer-first summary for AI search engines (GEO optimization) */}
            <div className={styles.articleSummary} style={{
              background: '#f8f9fa',
              borderLeft: '4px solid #0077b6',
              padding: '16px 20px',
              borderRadius: '0 8px 8px 0',
              marginBottom: '32px',
            }}>
              <p style={{ margin: 0, fontWeight: 500, color: '#333', lineHeight: 1.6 }}>
                {article.excerpt}
              </p>
            </div>

            <div className={styles.content}>
              {renderContent(article.content)}
            </div>

            {/* v54: doar sursele publice neutre (legislație, autorități); paginile
                producătorilor nu se mai afișează ca linkuri (decizie proprietar). */}
            {(() => {
              const publicSources = (article.sources || []).filter((src) => isNeutralPublicUrl(src.url));
              return publicSources.length > 0 && (
                <section className={styles.content} aria-labelledby="surse-heading">
                  <h2 id="surse-heading">Ce legislație citează acest ghid?</h2>
                  <ul>
                    {publicSources.map((src, i) => (
                      <li key={i}>
                        <a href={src.url} target="_blank" rel="noopener noreferrer nofollow">{src.title}</a>
                        {' '}— {src.publisher}, accesat {src.accessed}
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })()}

            <footer className={styles.footer}>
              <div className={styles.tags}>
                <span className={styles.tagsLabel}>Etichete:</span>
                {article.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    <Tag size={12} /> {tag}
                  </span>
                ))}
              </div>

              {/* Author Box - E-E-A-T Enhancement */}
              <AuthorBox author={author} />
            </footer>
          </div>
        </article>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2>Aveți întrebări despre echipamente industriale?</h2>
              <p>Trimiteți-ne datele aplicației sau codul echipamentului; vă răspundem cu variantele compatibile și termenul de livrare.</p>
              <Link href="/contact" className={styles.ctaButton}>
                Contactați-ne
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.container}>
              <h2>Articole Similare</h2>
              <div className={styles.relatedGrid}>
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className={styles.relatedCard}
                  >
                    <span className={styles.relatedCategory}>{related.category}</span>
                    <h3>{related.title}</h3>
                    <div className={styles.relatedMeta}>
                      <span>{related.date}</span>
                      <span>{related.readTime}</span>
                    </div>
                  </Link>
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

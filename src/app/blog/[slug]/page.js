import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { blogArticles, getBlogArticle } from '@/data/blog';
import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { sanitizeContentHtml } from '@/lib/utils';
import styles from './article.module.css';

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
      title: 'Articol negasit | Blog Infinitrade',
      description: 'Articolul cautat nu a fost gasit.',
    };
  }

  // Generate comprehensive keywords for blog articles
  const titleWords = article.title.toLowerCase().split(' ').filter(w => w.length > 3);
  const baseKeywords = [
    // Article tags (primary keywords)
    ...article.tags,
    // Category keyword
    article.category.toLowerCase(),
    `${article.category.toLowerCase()} echipamente industriale`,
    // Title-based keywords
    ...titleWords.slice(0, 5),
    // Search intent variations
    `ghid ${article.tags[0]?.toLowerCase() || ''}`.trim(),
    `cum sa alegi ${article.tags[0]?.toLowerCase() || ''}`.trim(),
    `sfaturi ${article.tags[0]?.toLowerCase() || ''}`.trim(),
    // Romanian industrial keywords
    'echipamente industriale',
    'pompe industriale',
    'motoare electrice',
    'robineti industriali',
    'mentenanta industriala',
    'eficienta energetica',
    // Blog content keywords
    'articole tehnice',
    'blog industrial',
    'ghiduri tehnice',
  ];

  // Remove empty strings, duplicates, and limit
  const keywords = [...new Set(baseKeywords.filter(k => k && k.length > 2))].slice(0, 25);

  // Truncate title to fit within 60 char limit (with template suffix)
  // Template adds " | Infinitrade Romania" (21 chars), so title should be max 39 chars
  const shortTitle = article.shortTitle || article.title.substring(0, 38);

  return {
    title: shortTitle,
    description: article.excerpt,
    keywords,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://infinitrade.ro/blog/${article.slug}`,
      siteName: 'Infinitrade Romania',
      locale: 'ro_RO',
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
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
      canonical: `https://infinitrade.ro/blog/${article.slug}`,
    },
  };
}

// Generate Article JSON-LD
function generateArticleJsonLd(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://infinitrade.ro/blog/${article.slug}#article`,
    headline: article.title,
    description: article.excerpt,
    image: {
      '@type': 'ImageObject',
      url: `https://infinitrade.ro/blog/${article.slug}/opengraph-image`,
      width: 1200,
      height: 630
    },
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Infinitrade Romania',
      logo: {
        '@type': 'ImageObject',
        url: 'https://infinitrade.ro/logo-header.png',
        width: 200,
        height: 60
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://infinitrade.ro/blog/${article.slug}`,
    },
    keywords: article.tags.join(', '),
    inLanguage: 'ro-RO',
    isPartOf: {
      '@type': 'Blog',
      '@id': 'https://infinitrade.ro/blog#blog',
      name: 'Blog Tehnic Infinitrade Romania'
    }
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

  const jsonLd = generateArticleJsonLd(article);
  const relatedArticles = blogArticles
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
                <span><User size={16} /> {article.author}</span>
                <span><Calendar size={16} /> {article.date}</span>
                <span><Clock size={16} /> {article.readTime}</span>
              </div>
            </header>

            <div className={styles.content}>
              {renderContent(article.content)}
            </div>

            <footer className={styles.footer}>
              <div className={styles.tags}>
                <span className={styles.tagsLabel}>Etichete:</span>
                {article.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    <Tag size={12} /> {tag}
                  </span>
                ))}
              </div>
            </footer>
          </div>
        </article>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2>Ai intrebari despre echipamente industriale?</h2>
              <p>Echipa noastra tehnica iti ofera consultanta gratuita.</p>
              <Link href="/contact" className={styles.ctaButton}>
                Contacteaza-ne
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

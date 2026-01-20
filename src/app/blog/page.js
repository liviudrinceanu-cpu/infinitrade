import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogArticles, blogCategories } from '@/data/blog';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import styles from './blog.module.css';

export const metadata = {
  title: 'Blog Tehnic | Ghiduri Echipamente Industriale',
  description: 'Articole tehnice despre pompe industriale, motoare electrice, robineti. Ghiduri de selectie, comparatii, eficienta energetica si mentenanta.',
  keywords: [
    // Blog main keywords
    'blog echipamente industriale',
    'blog tehnic industrial',
    'articole tehnice industriale',
    'articole pompe industriale',
    // Guide keywords
    'ghid pompe industriale',
    'ghid selectie pompe',
    'ghid alegere pompa',
    'ghid motoare electrice',
    'ghid robineti industriali',
    // Comparison keywords
    'comparatie pompe industriale',
    'comparatie motoare electrice',
    'comparatie siemens abb sew',
    'comparatie grundfos wilo',
    'comparatie robineti bila fluture',
    // Technical topics
    'eficienta energetica pompe',
    'eficienta energetica motoare',
    'consum energie pompe',
    'mentenanta pompe industriale',
    'mentenanta preventiva',
    'intretinere pompe',
    // Information keywords
    'sfaturi echipamente industriale',
    'informatii pompe',
    'cum functioneaza pompele',
    'tipuri pompe industriale',
  ],
  openGraph: {
    title: 'Blog Tehnic | Ghiduri Echipamente Industriale',
    description: 'Articole tehnice despre echipamente industriale.',
    url: 'https://infinitrade.ro/blog',
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
  },
  alternates: {
    canonical: 'https://infinitrade.ro/blog',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// CollectionPage schema for blog listing
function generateBlogCollectionSchema(articles) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://infinitrade.ro/blog#webpage',
    name: 'Blog Tehnic - Ghiduri Echipamente Industriale',
    description: 'Articole tehnice despre pompe industriale, motoare electrice, robineti. Ghiduri de selectie, comparatii, eficienta energetica si mentenanta.',
    url: 'https://infinitrade.ro/blog',
    isPartOf: {
      '@id': 'https://infinitrade.ro/#website'
    },
    about: {
      '@type': 'Thing',
      name: 'Echipamente Industriale'
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          '@id': `https://infinitrade.ro/blog/${article.slug}`,
          headline: article.title,
          description: article.excerpt,
          url: `https://infinitrade.ro/blog/${article.slug}`,
          datePublished: article.date,
          author: {
            '@type': 'Organization',
            name: 'Infinitrade Romania'
          }
        }
      }))
    }
  };
}

export default function BlogPage() {
  const featuredArticles = blogArticles.filter(a => a.featured);
  const regularArticles = blogArticles.filter(a => !a.featured);
  const collectionSchema = generateBlogCollectionSchema(blogArticles);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Header />
      <main id="main-content" className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>Blog Tehnic</h1>
            <p>
              Ghiduri practice, comparatii si sfaturi pentru selectia si utilizarea
              echipamentelor industriale.
            </p>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className={styles.featuredSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Articole Recomandate</h2>
              <div className={styles.featuredGrid}>
                {featuredArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    className={styles.featuredCard}
                  >
                    <div className={styles.featuredContent}>
                      <span className={styles.category}>{article.category}</span>
                      <h3>{article.title}</h3>
                      <p>{article.excerpt}</p>
                      <div className={styles.meta}>
                        <span><Calendar size={14} /> {article.date}</span>
                        <span><Clock size={14} /> {article.readTime}</span>
                      </div>
                    </div>
                    <div className={styles.featuredArrow}>
                      <ArrowRight size={20} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className={styles.articlesSection}>
          <div className={styles.container}>
            <div className={styles.articlesLayout}>
              <div className={styles.articlesMain}>
                <h2 className={styles.sectionTitle}>Toate Articolele</h2>
                <div className={styles.articlesGrid}>
                  {blogArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/blog/${article.slug}`}
                      className={styles.articleCard}
                    >
                      <div className={styles.articleContent}>
                        <span className={styles.category}>{article.category}</span>
                        <h3>{article.title}</h3>
                        <p>{article.excerpt}</p>
                        <div className={styles.meta}>
                          <span><Calendar size={14} /> {article.date}</span>
                          <span><Clock size={14} /> {article.readTime}</span>
                        </div>
                        <div className={styles.tags}>
                          {article.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className={styles.tag}>
                              <Tag size={12} /> {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <aside className={styles.sidebar}>
                <div className={styles.sidebarCard}>
                  <h3>Categorii</h3>
                  <ul className={styles.categoryList}>
                    {blogCategories.map((cat) => (
                      <li key={cat}>
                        <span>{cat}</span>
                        <span className={styles.count}>
                          {blogArticles.filter(a => a.category === cat).length}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.sidebarCard}>
                  <h3>Ai nevoie de ajutor?</h3>
                  <p>Echipa noastra tehnica iti ofera consultanta gratuita pentru selectia echipamentelor.</p>
                  <Link href="/contact" className={styles.sidebarCta}>
                    Contacteaza-ne
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

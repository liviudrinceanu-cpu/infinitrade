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
    'blog echipamente industriale',
    'ghid pompe industriale',
    'comparatie motoare electrice',
    'eficienta energetica pompe',
    'mentenanta pompe',
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
};

export default function BlogPage() {
  const featuredArticles = blogArticles.filter(a => a.featured);
  const regularArticles = blogArticles.filter(a => !a.featured);

  return (
    <>
      <Header />
      <main className={styles.main}>
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

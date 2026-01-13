'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Phone, Mail, MapPin, Package, Truck, Wrench, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { allBrands, categories } from '@/data/products';
import styles from './brand.module.css';

export default function BrandPage() {
  const params = useParams();
  const brand = allBrands.find(b => b.slug === params.brandSlug);
  const category = brand ? categories.find(c => c.slug === brand.category) : null;

  if (!brand || !category) {
    return (
      <>
        <Header />
        <main className={styles.notFound}>
          <h1>Brand negăsit</h1>
          <Link href="/">Înapoi la pagina principală</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className={styles.hero} style={{ background: category.gradient }}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContainer}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.breadcrumb}>
                <Link href="/">Acasă</Link>
                <span>/</span>
                <Link href={`/${category.slug}`}>{category.name}</Link>
                <span>/</span>
                <span>{brand.name}</span>
              </div>
              
              <h1 className={styles.heroTitle}>
                {brand.name} România
              </h1>
              <p className={styles.heroSubtitle}>
                Distribuitor Autorizat | {brand.country}
              </p>
              <p className={styles.heroDescription}>
                {brand.description}. Oferim gama completă de produse {brand.name}, piese de schimb originale și suport tehnic specializat pentru toate aplicațiile industriale.
              </p>

              <div className={styles.heroCtas}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Cere Ofertă {brand.name}
                  <ArrowRight size={18} />
                </Link>
                <a href={`tel:+40XXXXXXXXX`} className={styles.ctaSecondary}>
                  <Phone size={18} />
                  Sună Acum
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Props */}
        <section className={styles.valueProps}>
          <div className={styles.container}>
            <div className={styles.valuePropsGrid}>
              <div className={styles.valueProp}>
                <Package size={28} />
                <div>
                  <h4>Produse {brand.name} Originale</h4>
                  <p>Echipamente noi cu garanție de la producător</p>
                </div>
              </div>
              <div className={styles.valueProp}>
                <Truck size={28} />
                <div>
                  <h4>Livrare Rapidă</h4>
                  <p>24-72h pentru produse din stoc</p>
                </div>
              </div>
              <div className={styles.valueProp}>
                <Wrench size={28} />
                <div>
                  <h4>Piese Schimb {brand.name}</h4>
                  <p>Piese originale și kituri service</p>
                </div>
              </div>
              <div className={styles.valueProp}>
                <Shield size={28} />
                <div>
                  <h4>Suport Tehnic</h4>
                  <p>Consultanță gratuită de la specialiști</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Brand */}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutContent}>
                <h2>Despre {brand.name}</h2>
                <p>
                  <strong>{brand.name}</strong> este un producător de renume mondial din <strong>{brand.country}</strong>, 
                  recunoscut pentru calitatea excepțională și inovația în domeniul {category.name.toLowerCase()}.
                </p>
                <p>
                  Ca distribuitor autorizat {brand.name} în România, Infinitrade vă oferă acces la întreaga gamă de produse, 
                  consultanță tehnică specializată și service post-vânzare de înaltă calitate.
                </p>
                <p>
                  Beneficiați de prețuri competitive, livrare rapidă și suport tehnic profesionist pentru toate 
                  proiectele dumneavoastră industriale.
                </p>
              </div>
              <div className={styles.aboutStats}>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>{category.stats.brands}</span>
                  <span className={styles.statLabel}>Branduri Partenere</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>{category.stats.products}</span>
                  <span className={styles.statLabel}>Produse Disponibile</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>15+</span>
                  <span className={styles.statLabel}>Ani Experiență</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>24-72h</span>
                  <span className={styles.statLabel}>Livrare Rapidă</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Types */}
        <section className={styles.productsSection}>
          <div className={styles.container}>
            <h2>Produse {brand.name} Disponibile</h2>
            <p className={styles.sectionSubtitle}>
              Comandă echipamente {brand.name} pentru orice aplicație industrială
            </p>
            <div className={styles.productsGrid}>
              {category.productTypes.map((type, index) => (
                <motion.div
                  key={type.slug}
                  className={styles.productCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3>{type.name}</h3>
                  <p>{type.description}</p>
                  <div className={styles.applications}>
                    <span>Aplicații:</span>
                    <div className={styles.appTags}>
                      {type.applications.slice(0, 3).map(app => (
                        <span key={app} className={styles.appTag}>{app}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" className={styles.productLink}>
                    Solicită Ofertă <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <h2>Servicii pentru Produse {brand.name}</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3>Vânzare Echipamente</h3>
                <ul>
                  <li><Check size={16} /> Produse {brand.name} originale</li>
                  <li><Check size={16} /> Consultanță tehnică gratuită</li>
                  <li><Check size={16} /> Oferte personalizate</li>
                  <li><Check size={16} /> Prețuri competitive</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <h3>Piese de Schimb</h3>
                <ul>
                  <li><Check size={16} /> Piese originale {brand.name}</li>
                  <li><Check size={16} /> Kituri de service complete</li>
                  <li><Check size={16} /> Livrare expresă</li>
                  <li><Check size={16} /> Compatibilitate garantată</li>
                </ul>
              </div>
              <div className={styles.serviceCard}>
                <h3>Suport Tehnic</h3>
                <ul>
                  <li><Check size={16} /> Dimensionare și selecție</li>
                  <li><Check size={16} /> Documentație tehnică</li>
                  <li><Check size={16} /> Asistență la instalare</li>
                  <li><Check size={16} /> Service și mentenanță</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <div className={styles.ctaContent}>
                <h2>Ai nevoie de produse {brand.name}?</h2>
                <p>
                  Contactează-ne pentru o ofertă personalizată. Echipa noastră de specialiști 
                  te ajută să găsești soluția perfectă pentru aplicația ta.
                </p>
              </div>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaButtonPrimary}>
                  Cere Ofertă Gratuită
                  <ArrowRight size={20} />
                </Link>
                <a href="mailto:vanzari@infinitrade-romania.ro" className={styles.ctaButtonSecondary}>
                  <Mail size={20} />
                  vanzari@infinitrade-romania.ro
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Brands */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2>Alte Branduri în {category.name}</h2>
            <div className={styles.relatedGrid}>
              {category.brands
                .filter(b => b.slug !== brand.slug)
                .slice(0, 5)
                .map(relatedBrand => (
                  <Link
                    key={relatedBrand.slug}
                    href={`/brand/${relatedBrand.slug}`}
                    className={styles.relatedCard}
                  >
                    <span className={styles.relatedName}>{relatedBrand.name}</span>
                    <span className={styles.relatedCountry}>{relatedBrand.country}</span>
                    <ArrowRight size={16} />
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

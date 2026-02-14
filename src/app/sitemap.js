import { allCategoriesUnified as categories, allBrandsUnified } from '@/data/allBrandsIndex';
import { blogArticles } from '@/data/blog';
import { caseStudies } from '@/data/caseStudies';
import { config } from '@/lib/config';

const BASE_URL = config.site.url;

export default function sitemap() {
  // Use fixed dates for static content instead of dynamic dates
  const staticDate = '2026-02-13';

  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: staticDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: staticDate,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/despre-noi`,
      lastModified: staticDate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/studii-de-caz`,
      lastModified: staticDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industrii`,
      lastModified: staticDate,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: staticDate,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/certificari`,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/testimoniale`,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ghid-comparativ`,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ghid-achizitii-seap`,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gdpr`,
      lastModified: staticDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/politica-confidentialitate`,
      lastModified: staticDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/politica-cookies`,
      lastModified: staticDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/termeni-si-conditii`,
      lastModified: staticDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/echipa`,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/echipamente-diverse`,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Category pages
  const categoryPages = categories.map((category) => ({
    url: `${BASE_URL}/${category.slug}`,
    lastModified: staticDate,
    changeFrequency: 'weekly',
    priority: 0.9,
    ...(category.image && { images: [`${BASE_URL}${category.image}`] }),
  }));

  // Brand pages (unified, simple slugs)
  const brandPages = allBrandsUnified.map((brand) => ({
    url: `${BASE_URL}/brand/${brand.simpleSlug}`,
    lastModified: staticDate,
    changeFrequency: 'weekly',
    priority: 0.8,
    ...(brand.logo && brand.logo !== '/brands/placeholder.png' && { images: [`${BASE_URL}${brand.logo}`] }),
  }));

  // Industry pages (to be added later)
  const industryPages = [
    'petrochimie',
    'alimentar',
    'tratare-apa',
    'energie',
    'farmaceutic',
    'chimie',
    'minerit',
    'constructii',
    'automotive',
    'metalurgie',
    'ciment',
    'hartie',
    'logistica',
    'biogaz',
    'naval',
  ].map((industry) => ({
    url: `${BASE_URL}/industrii/${industry}`,
    lastModified: staticDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Blog article pages - use actual article dates when available
  const blogPages = blogArticles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: article.dateModified || article.date || staticDate,
    changeFrequency: 'monthly',
    priority: 0.7,
    ...(article.image && { images: [`${BASE_URL}${article.image}`] }),
  }));

  // Case study pages
  const caseStudyPages = caseStudies.map((cs) => ({
    url: `${BASE_URL}/studii-de-caz/${cs.slug}`,
    lastModified: staticDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...brandPages,
    ...industryPages,
    ...blogPages,
    ...caseStudyPages,
  ];
}

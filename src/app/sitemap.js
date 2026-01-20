import { categories, allBrands } from '@/data/products';
import { blogArticles } from '@/data/blog';
import { caseStudies } from '@/data/caseStudies';

const BASE_URL = 'https://infinitrade.ro';

export default function sitemap() {
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/despre-noi`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/studii-de-caz`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industrii`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/certificari`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/gdpr`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/politica-confidentialitate`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/politica-cookies`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/termeni-si-conditii`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Category pages
  const categoryPages = categories.map((category) => ({
    url: `${BASE_URL}/${category.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Brand pages
  const brandPages = allBrands.map((brand) => ({
    url: `${BASE_URL}/brand/${brand.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
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
    'logistica',
    'hvac',
    'agricultura',
    'naval',
    'textile',
    'hartie',
  ].map((industry) => ({
    url: `${BASE_URL}/industrii/${industry}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Blog article pages
  const blogPages = blogArticles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Case study pages
  const caseStudyPages = caseStudies.map((cs) => ({
    url: `${BASE_URL}/studii-de-caz/${cs.slug}`,
    lastModified: currentDate,
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

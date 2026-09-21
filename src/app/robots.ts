import { MetadataRoute } from 'next';
import { config } from '@/lib/config';

const DISALLOW = [
  '/admin/',
  '/api/',
  '/_next/',
  '/private/',
  '/download/',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: DISALLOW,
      },
      // AI crawlers - explicit allow for LLM indexing
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Claude-SearchBot',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Amazonbot',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Meta-ExternalAgent',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'YouBot',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'DuckAssistBot',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'MistralAI-User',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: DISALLOW,
      },
    ],
    sitemap: `${config.site.url}/sitemap.xml`,
    host: new URL(config.site.url).host,
  };
}

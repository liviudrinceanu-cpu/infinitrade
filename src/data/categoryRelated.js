// v16 (D-2026-09-26): internal links from each category page to the industry
// pages and blog articles that actually discuss that equipment. Curated by
// hand from the industries' own `equipment` lists (src/data/industries.js)
// and the articles' subjects (src/data/blog.js); every slug is checked at
// render time, so a removed article or industry simply drops out.
//
// Server-only by convention: it imports the full blog data, so it is read in
// src/app/[category]/page.js and the result is passed to CategoryClient as a
// prop — never imported from a client component (bundle size).

import { industries } from './industries';
import { blogArticles } from './blog';

const RELATED = {
  'pompe-industriale': {
    industries: ['tratare-apa', 'petrochimie', 'alimentar', 'chimie', 'minerit', 'constructii'],
    articles: ['ghid-selectare-pompa-industriala', 'grundfos-vs-wilo-vs-dab-pompe', 'mentenanta-preventiva-pompe-industriale', 'garnituri-mecanice-ghid-complet'],
  },
  'robineti-industriali': {
    industries: ['petrochimie', 'energie', 'alimentar', 'chimie', 'tratare-apa', 'naval'],
    articles: ['robineti-bila-vs-fluture-ghid', 'oale-condens-instalatii-abur', 'echipamente-atex-ghid-zone-periculoase'],
  },
  'motoare-electrice': {
    industries: ['automotive', 'logistica', 'ciment', 'metalurgie', 'minerit'],
    articles: ['comparatie-motoare-siemens-abb-sew', 'danfoss-vs-abb-vs-siemens-convertizoare-frecventa', 'convertizoare-frecventa-beneficii', 'echipamente-atex-ghid-zone-periculoase'],
  },
  'schimbatoare-caldura': {
    industries: ['energie', 'alimentar', 'chimie', 'hartie', 'petrochimie', 'farmaceutic'],
    articles: ['ghid-schimbatoare-caldura-industriale', 'alfa-laval-vs-kelvion-schimbatoare'],
  },
  'suflante-ventilatoare': {
    industries: ['tratare-apa', 'biogaz', 'ciment', 'alimentar', 'naval'],
    articles: ['suflante-industriale-tipuri-aplicatii', 'prelungire-viata-echipamente-industriale'],
  },
  'automatizari-industriale': {
    industries: ['automotive', 'logistica', 'tratare-apa', 'energie', 'constructii'],
    articles: ['danfoss-vs-abb-vs-siemens-convertizoare-frecventa', 'convertizoare-frecventa-beneficii', 'tendinte-echipamente-industriale-2026'],
  },
  'senzori-instrumentatie': {
    industries: ['petrochimie', 'farmaceutic', 'chimie', 'alimentar', 'hartie', 'biogaz'],
    articles: ['wika-vs-endress-hauser-vs-keller-masurare-presiune', 'echipamente-atex-ghid-zone-periculoase'],
  },
  'componente-hidraulice-pneumatice': {
    industries: ['automotive', 'minerit', 'metalurgie', 'naval', 'logistica'],
    articles: ['festo-vs-smc-vs-camozzi-pneumatica', 'prelungire-viata-echipamente-industriale'],
  },
  'echipamente-electrice': {
    industries: ['constructii', 'logistica', 'energie', 'automotive'],
    articles: ['gewiss-vs-schneider-vs-hager-aparataj-tablouri', 'danfoss-vs-abb-vs-siemens-convertizoare-frecventa'],
  },
  'componente-mecanice': {
    industries: ['ciment', 'minerit', 'automotive', 'logistica', 'energie'],
    articles: ['prelungire-viata-echipamente-industriale', 'garnituri-mecanice-ghid-complet'],
  },
  'filtre-consumabile': {
    industries: ['ciment', 'metalurgie', 'minerit', 'automotive'],
    articles: ['prelungire-viata-echipamente-industriale', 'mentenanta-preventiva-pompe-industriale'],
  },
  'scule-instrumente': {
    industries: ['automotive', 'naval', 'constructii', 'metalurgie'],
    articles: ['knipex-vs-wera-vs-gedore-scule-de-mana'],
  },
  'echipamente-termice': {
    industries: ['constructii', 'energie', 'alimentar', 'farmaceutic'],
    articles: ['ghid-schimbatoare-caldura-industriale', 'tendinte-echipamente-industriale-2026'],
  },
  'lubrifianti-chimice': {
    industries: ['automotive', 'metalurgie', 'ciment', 'minerit'],
    articles: ['prelungire-viata-echipamente-industriale'],
  },
  'echipamente-auxiliare': {
    industries: ['alimentar', 'farmaceutic', 'chimie', 'logistica'],
    articles: ['echipamente-atex-ghid-zone-periculoase', 'prelungire-viata-echipamente-industriale'],
  },
  'aparate-masura-testare': {
    industries: ['energie', 'automotive', 'constructii', 'farmaceutic'],
    articles: ['wika-vs-endress-hauser-vs-keller-masurare-presiune', 'echipamente-atex-ghid-zone-periculoase', 'prelungire-viata-echipamente-industriale'],
  },
};

const industryBySlug = new Map(industries.map((i) => [i.slug, i]));
const articleBySlug = new Map(blogArticles.map((a) => [a.slug, a]));

export function getRelatedForCategory(categorySlug) {
  const entry = RELATED[categorySlug] || { industries: [], articles: [] };
  return {
    industries: entry.industries
      .map((s) => industryBySlug.get(s))
      .filter(Boolean)
      .map((i) => ({ slug: i.slug, name: i.name, url: `/industrii/${i.slug}` })),
    articles: entry.articles
      .map((s) => articleBySlug.get(s))
      .filter(Boolean)
      .map((a) => ({ slug: a.slug, title: a.title, url: `/blog/${a.slug}` })),
  };
}

import { notFound } from 'next/navigation';
import { getBrandByAnySlug, getAllBrandSlugs, isBrandNoindex } from '@/data/allBrandsIndex';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
import { getBrandContent } from '@/data/brandContent';
import { buildBrandJsonLd } from '@/lib/schema/brand';
import BrandPageClient from './BrandPageClient';
import { getPrimaryForDuplicate } from '@/data/duplicateBrands';
import { getRelatedBrandsByCategory } from '@/data/brandView';
import { getProductTypesForBrand } from '@/data/brandCategoryLinks';
import { getSeriesForBrand } from '@/data/series/_index';
import { brandSeoMeta } from '@/data/brandSeoMeta';
import { hasProductTypePage } from '@/data/productTypeContent/_index';

// v58: etichete scurte de categorie pentru titlul paginii de brand.
const CATEGORY_SHORT = {
  'Pompe Industriale': 'pompe industriale',
  'Robineți Industriali': 'robineți industriali',
  'Motoare Electrice Industriale': 'motoare electrice',
  'Schimbătoare de Căldură Industriale': 'schimbătoare de căldură',
  'Suflante și Ventilatoare Industriale': 'suflante și ventilatoare',
  'Automatizări Industriale': 'automatizări industriale',
  'Senzori și Instrumentație': 'senzori și instrumentație',
  'Componente Hidraulice și Pneumatice': 'hidraulică și pneumatică',
  'Echipamente Electrice și Automatizare': 'echipamente electrice',
  'Componente Mecanice și Transmisii': 'componente mecanice',
  'Filtre și Consumabile Industriale': 'filtre industriale',
  'Scule și Instrumente de Măsură': 'scule și instrumente',
  'Echipamente Termice și Climatizare': 'echipamente termice',
  'Lubrifianți și Chimice Industriale': 'lubrifianți industriali',
  'Echipamente Auxiliare și Protecție': 'echipamente auxiliare',
  'Aparate de Măsură și Testare': 'aparate de măsură',
};

// Generate static params for all brand pages (simple slugs)
export async function generateStaticParams() {
  return getAllBrandSlugs().map((slug) => ({
    brandSlug: slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { brandSlug } = await params;
  const brand = getBrandByAnySlug(brandSlug);

  if (!brand) {
    return {
      title: 'Brand negăsit',
      description: 'Pagina căutată nu a fost găsită.',
    };
  }

  // v19 (audit R1): title ≤ 65 characters without truncation (longest
  // variant that fits), description 110–160 characters (the brand
  // description is trimmed on a word boundary, never mid-word).
  const dupOf = getPrimaryForDuplicate(brand.simpleSlug);
  // v58 (audit): același model ca titlurile scrise manual (v39) pentru toate
  // celelalte branduri — „{Brand} România – {categoria} | Infinitrade”.
  // v60: la brandurile din mai multe categorii, categoria cu cele mai multe tipuri
  // de produse ale brandului (nu prima din listă: „Siemens – robineți” era greșit).
  const ownTypes = new Set(getProductTypesForBrand(brand.simpleSlug));
  const bestCategory = brand.categories.reduce((best, c) => {
    const n = (c.productTypes || []).filter((t) => ownTypes.has(t.slug)).length;
    return n > best.n ? { c, n } : best;
  }, { c: brand.categories[0], n: -1 }).c;
  const shortCategory = CATEGORY_SHORT[bestCategory?.name] || String(bestCategory?.name || '').toLowerCase();
  const titleVariants = [
    ...(dupOf ? [`${brand.name} (${brand.categories[0].name}) | Infinitrade`, `${brand.name} (${brand.categories[0].name})`] : []),
    `${brand.name} România – ${shortCategory} | Infinitrade`,
    `${brand.name} România – ${shortCategory}`,
    `${brand.name} | Infinitrade`,
    brand.name,
  ];
  const title = { absolute: titleVariants.find((t) => t.length <= 60) || brand.name };
  // v31 (D-2026-09-28): coada și începutul descrierii variază determinist pe
  // brand (aceeași pagină primește mereu aceeași variantă), ca ~1.200 de
  // descrieri să nu repete aceeași frază. Toate variantele sunt fapte
  // confirmate (SEAP, termene, documente, ofertă pe cod/plăcuță).
  const h = [...brand.simpleSlug].reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) >>> 0, 7);
  const LEADS = [
    `Furnizăm echipamente ${brand.name} în România`,
    `Echipamente și piese de schimb ${brand.name} pentru companii din România`,
    `Ofertăm echipamente ${brand.name} în România`,
  ];
  const TAILS = [
    ' Furnizor SEAP, livrare 24–72 h din stoc.',
    ' Ofertă pe cod sau plăcuță, livrare 24–72 h din stoc.',
    ' Din stoc în 24–72 h, din fabrică în 1–4 săptămâni.',
    ' Documente de conformitate și ofertă pe cod de produs.',
    ' Produse originale, termen de livrare scris în ofertă.',
  ];
  const lead = LEADS[h % LEADS.length];
  const tail = TAILS[Math.floor(h / LEADS.length) % TAILS.length];
  const room = 158 - lead.length - tail.length - 2;
  const rawDesc = String(brand.description || '').replace(/\.$/, '');
  // v20: when the brand description is too long, cut it at a natural phrase
  // boundary (comma, dash or before "pentru/folosit/cu/din/și/în…"), never
  // leaving a dangling "folosite în automatizarea." fragment; if no boundary
  // keeps at least 40% of the room, drop the description instead.
  const cutAtPhrase = (text, max) => {
    const head = text.slice(0, max + 1);
    const re = /(?:[,;:–—(]| - | (?=(?:pentru|folosit[eăi]?|utilizat[eăi]?|destinat[eăi]?|cu|din|de la|prin|și|sau|în|la|care|precum|inclusiv|dedicat[eăi]?) ))/g;
    let best = -1;
    for (const m of head.matchAll(re)) if (m.index <= max) best = m.index;
    if (best < Math.floor(max * 0.4)) return '';
    let out = text.slice(0, best).replace(/[\s,;:–—-]+$/, '');
    // Drop dangling participles/function words left at the end ("… folosite").
    const DANGLING = /\s+(?:folosit[eăi]?|utilizat[eăi]?|destinat[eăi]?|dedicat[eăi]?|pentru|cu|din|de|la|în|și|sau|prin|care|precum|inclusiv)$/i;
    while (DANGLING.test(out)) out = out.replace(DANGLING, '');
    return out;
  };
  let cut = rawDesc.length <= room ? rawDesc : cutAtPhrase(rawDesc, room);
  // Lower-case a common-noun opener after the colon ("…: tehnologie de…"),
  // but keep brand names and acronyms ("…: Bimba produce…", "…: PLC-uri…").
  const firstWord = cut.split(/\s+/)[0] || '';
  if (/^[A-ZĂÂÎȘȚ][a-zăâîșț]+$/.test(firstWord) && !brand.name.startsWith(firstWord)) {
    cut = cut.charAt(0).toLowerCase() + cut.slice(1);
  }
  let description = cut ? `${lead}: ${cut}.${tail}` : `${lead}.${tail}`;
  if (description.length < 110) description += ' Ofertă pe cod de produs, la comandă sau din stoc.';

  // v39: brandurile cu afișări în Google (GSC, pozițiile 4–20) au titlu și
  // descriere scrise manual, după căutările reale; restul păstrează generatorul.
  const seo = brandSeoMeta[brand.simpleSlug];
  if (seo) {
    title.absolute = seo.title;
    description = seo.description;
  }

  return {
    title,
    description,
    openGraph: {
      title: title.absolute,
      description,
      url: `${config.site.url}/brand/${brand.simpleSlug}`,
      siteName: 'Infinitrade Romania',
      locale: 'ro_RO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title.absolute,
      description,
    },
    alternates: {
      canonical: `${config.site.url}/brand/${brand.simpleSlug}`,
    },
    robots: isBrandNoindex(brand.simpleSlug)
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

// Generate JSON-LD structured data (multi-category aware).
// Builder lives in '@/lib/schema/brand' (pure function, unit-testable, and
// what G15 scans) - see that file for why there is no Offer/AggregateOffer/
// Product node here.
function generateJsonLd(brand, brandContent) {
  return buildBrandJsonLd(brand, config, brandContent);
}

export default async function BrandPage({ params }) {
  const { brandSlug } = await params;
  const brand = getBrandByAnySlug(brandSlug);

  if (!brand) {
    notFound();
  }

  // Get rich brand content if available
  const content = getBrandContent(brand.simpleSlug);

  const jsonLd = generateJsonLd(brand, content);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <BrandPageClient brand={brand} primaryDuplicate={(() => { const p = getPrimaryForDuplicate(brand.simpleSlug); const pb = p && getBrandByAnySlug(p); return pb ? { slug: pb.simpleSlug, name: pb.name } : null; })()} relatedByCategory={getRelatedBrandsByCategory(brand)} brandContent={content} seriesPages={getSeriesForBrand(brand.simpleSlug)} typePages={brand.categories.flatMap((c) => (c.productTypes || []).filter((t) => hasProductTypePage(c.slug, t.slug)).map((t) => `${c.slug}/${t.slug}`))} />
    </>
  );
}

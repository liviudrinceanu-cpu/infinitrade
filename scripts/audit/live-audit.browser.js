// v34 — Audit live „ce vede clientul” pentru www.infinitrade.ro.
// Se rulează în consola browserului (sau prin unealta javascript a
// orchestratorului) pe o pagină https://www.infinitrade.ro/…, deci same-origin.
// Citește TOATE URL-urile din sitemap + linkurile interne descoperite, extrage
// textul vizibil și rulează detectoarele deterministe din SUPERPROMPT v2 (§3).
// Rezultatul: window.__AUDIT = { pages, findings }. Fără trimiteri de
// formulare; doar GET-uri.
(async () => {
  const sm = await fetch('/sitemap.xml', { cache: 'no-store' }).then((r) => r.text());
  const sitemap = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/^https?:\/\/[^/]+/, '') || '/');
  const pages = {};
  const queue = [...sitemap];
  const seen = new Set(queue);
  async function one(u) {
    try {
      const r = await fetch(u, { cache: 'no-store', redirect: 'manual' });
      const status = r.status || (r.type === 'opaqueredirect' ? 301 : 0);
      const ct = r.headers.get('content-type') || '';
      if (status !== 200 || !ct.includes('text/html')) { pages[u] = { status, ct }; return; }
      const d = new DOMParser().parseFromString(await r.text(), 'text/html');
      const q = (s) => d.querySelector(s);
      const jsonld = [...d.querySelectorAll('script[type="application/ld+json"]')].map((s) => { try { JSON.parse(s.textContent); return 'ok'; } catch { return 'BAD'; } });
      d.querySelectorAll('script,style,noscript,template').forEach((e) => e.remove());
      // separatori între blocuri, ca textul să nu se lipească
      d.querySelectorAll('p,li,h1,h2,h3,h4,h5,h6,div,section,td,th,dt,dd,br').forEach((e) => e.append('\n'));
      const main = d.querySelector('main') || d.body;
      const links = [...d.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')).filter((h) => h && h.startsWith('/') && !h.startsWith('//'));
      for (const h of links) { const p = h.split('#')[0].split('?')[0]; if (p && !seen.has(p)) { seen.add(p); queue.push(p); } }
      pages[u] = {
        status, title: q('title')?.textContent || '', desc: q('meta[name=description]')?.content || '',
        canon: q('link[rel=canonical]')?.href || '', robots: q('meta[name=robots]')?.content || '',
        h1: d.querySelectorAll('h1').length, heads: [...main.querySelectorAll('h1,h2,h3,h4')].map((h) => h.tagName + ':' + h.textContent.trim()),
        jsonld, imgNoAlt: [...d.querySelectorAll('img')].filter((i) => !i.hasAttribute('alt')).length,
        text: main.textContent.replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim(), links: [...new Set(links)],
      };
    } catch (e) { pages[u] = { status: 'ERR ' + e.message }; }
  }
  while (queue.length) { const batch = queue.splice(0, 12); await Promise.all(batch.map(one)); }

  const ok = Object.entries(pages).filter(([, p]) => p.status === 200 && p.text);
  const F = [];
  const add = (detector, url, evidence) => F.push({ detector, url, evidence: String(evidence).slice(0, 220) });
  const redirects = new Set(Object.entries(pages).filter(([, p]) => p.status !== 200 && p.status !== 0).map(([u]) => u));
  const titles = {}; const descs = {};
  for (const [u, p] of ok) {
    (titles[p.title] = titles[p.title] || []).push(u); (descs[p.desc] = descs[p.desc] || []).push(u);
    if (p.h1 !== 1) add('A.h1', u, p.h1);
    if (p.title.length < 30 || p.title.length > 70) add('A.titleLen', u, p.title);
    if (p.desc.length < 100 || p.desc.length > 170) add('A.descLen', u, p.desc);
    if (p.jsonld.includes('BAD')) add('B.jsonld', u, 'JSON-LD invalid');
    if (sitemap.includes(u) && /noindex/.test(p.robots)) add('A.noindexInSitemap', u, p.robots);
    if (p.imgNoAlt) add('E.imgNoAlt', u, p.imgNoAlt);
    let prev = 1; for (const h of p.heads) { const lv = +h[1]; if (lv > prev + 1) add('E.headingSkip', u, h); prev = lv; }
    for (const l of p.links) { const t = l.split('#')[0].split('?')[0]; if (redirects.has(t)) add('G.linkToRedirect', u, t); if (pages[t] && pages[t].status === 404) add('G.linkTo404', u, t); }
    const scan = (id, re) => { for (const m of p.text.matchAll(re)) { add(id, u, p.text.slice(Math.max(0, m.index - 60), m.index + m[0].length + 60)); break; } };
    scan('C.jargon', /reparați[ae]:|TODO|FIXME|TBD\b|lorem|placeholder|undefined|\bnull\b|NaN|\[object|\{\{|\$\{|\b429\b|robots\.txt|inaccesibil la verificare|brandContent|backlog|confirmat[e]? neschimbat|sursă secundară|declarație de aprovizionare/g);
    scan('C.entities', /&amp;|&#x?[0-9a-f]+;|&quot;|&lt;|&gt;/g);
    scan('C.cedilla', /[şţŞŢ]/g);
    scan('C.forbidden', /distribuitor (autorizat|oficial|exclusiv)(?! al niciunuia)|partener (oficial|autorizat)|service autorizat|\blider\b|nr\. ?1\b|cel mai (bun|mare|ieftin)(?! furnizor din România)|garantat[ăe]?\b(?! foarte precis)|legendar|best-in-class/gi);
    scan('C.truncated', /\p{L}{2,}\.\.\.(?=\S|$)/gu);
    scan('C.leadTimeOffPolicy', /\b(?!1–4)\d+\s?[-–]\s?\d+\s?săptămâni|\b24\s?-\s?72\s?(h|ore)\b/g);
    scan('C.englishRun', /\b(the|with|and|for|your|our)\s+[a-z]+\s+(the|and|with|for|of|to|in|is)\b/g);
  }
  for (const [t, us] of Object.entries(titles)) if (us.length > 1) add('A.dupTitle', us.slice(0, 3).join(' '), t);
  for (const [t, us] of Object.entries(descs)) if (us.length > 1) add('A.dupDesc', us.slice(0, 3).join(' '), t);
  // cifre identice între branduri diferite (semn de text copiat): propoziții cu număr + unitate
  const numSent = {};
  for (const [u, p] of ok.filter(([u]) => u.startsWith('/brand/'))) {
    for (const s of p.text.split(/\n|(?<=[.!?])\s+/)) {
      if (!/\d[\d.,]*\s?(m³\/h|l\/min|bar|kW|°C|mm|rpm|Nm|kg|V\b|A\b|Hz)/.test(s) || s.split(/\s+/).length < 6) continue;
      (numSent[s.trim()] = numSent[s.trim()] || new Set()).add(u);
    }
  }
  for (const [s, us] of Object.entries(numSent)) if (us.size > 1) add('C.sameSpecsAcrossBrands', [...us].slice(0, 4).join(' '), s);
  const byDetector = F.reduce((a, f) => ((a[f.detector] = (a[f.detector] || 0) + 1), a), {});
  window.__AUDIT = { crawled: Object.keys(pages).length, sitemap: sitemap.length, byDetector, findings: F, pages };
  console.log('[live-audit]', window.__AUDIT.crawled, 'pagini;', byDetector);
})();

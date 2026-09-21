/**
 * scripts/gates/deploy/browser-check.js — F0-10 browser-side evidence
 * collector for the deploy-verified gate pack.
 *
 * WHAT THIS IS: a single self-contained snippet the orchestrator pastes into
 * the DevTools console of a logged-in browser tab that is ALREADY on the
 * deployed page (preview or production). It runs same-origin `fetch()`
 * calls (so it can read /sitemap.xml with real cookies/session, unlike a
 * cross-origin WebFetch call) and reads the live DOM, then resolves to one
 * JSON object. Copy that object out of the console and hand it to
 * scripts/gates/deploy-checks.mjs's functions (or paste it straight into a
 * fixture-shaped file for --self-test-style manual runs).
 *
 * WHAT IT DOES NOT DO: it cannot prove what a non-browser crawler (Googlebot,
 * GPTBot) would see — it runs inside a real Chromium renderer with a normal
 * User-Agent and cookies attached. Route-count and content-presence findings
 * from this snippet are exactly the same class of evidence as a WebFetch
 * result: content presence, not crawler access. See
 * out/plan-v2/deploy-check-protocol.md, "Evidence limits" section.
 *
 * USAGE
 *   1. Open the deployed URL in the browser pane, logged in as needed.
 *   2. Open DevTools console, paste this entire file, press Enter.
 *   3. It is `async` and self-invoking; wait for it to log
 *      "browser-check: done" and print the JSON result.
 *   4. Copy the JSON object. It has this shape:
 *        {
 *          pageUrl: string,
 *          sitemap: { url, ok, status, locCount, locs: string[] } | { error },
 *          jsonLd: { count, types: string[], raw: object[] },
 *          meta: { title, description, canonical },
 *          internalLinksSample: string[]   // deduped same-origin "/..." hrefs
 *                                            // found in the CURRENT page's DOM
 *        }
 *   For G17 (checkG17InboundLinks), run this on EACH hub page in the
 *   protocol's hub list and build:
 *        { hubs: [ { url: result.pageUrl, internalLinks: result.internalLinksSample }, ... ] }
 */
(async function browserCheck() {
  const origin = window.location.origin;
  const result = {
    pageUrl: window.location.href,
    sitemap: null,
    jsonLd: null,
    meta: null,
    internalLinksSample: null,
  };

  // --- sitemap.xml: same-origin fetch, so it carries real cookies and gets
  //     the real response the browser session would get (still not a
  //     crawler UA — see the caveat above). ---
  try {
    const sitemapUrl = `${origin}/sitemap.xml`;
    const res = await fetch(sitemapUrl, { credentials: 'include' });
    const text = await res.text();
    const locs = [...text.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) => m[1]);
    result.sitemap = { url: sitemapUrl, ok: res.ok, status: res.status, locCount: locs.length, locs };
  } catch (err) {
    result.sitemap = { error: String((err && err.message) || err) };
  }

  // --- JSON-LD on the CURRENT page ---
  try {
    const scripts = [...document.querySelectorAll('script[type="application/ld+json"]')];
    const raw = [];
    const types = new Set();
    for (const s of scripts) {
      try {
        const parsed = JSON.parse(s.textContent);
        raw.push(parsed);
        const collectTypes = (node) => {
          if (!node || typeof node !== 'object') return;
          if (Array.isArray(node)) return node.forEach(collectTypes);
          if (node['@type']) {
            (Array.isArray(node['@type']) ? node['@type'] : [node['@type']]).forEach((t) => types.add(t));
          }
          if (Array.isArray(node['@graph'])) node['@graph'].forEach(collectTypes);
          if (Array.isArray(node.itemListElement)) node.itemListElement.forEach(collectTypes);
        };
        collectTypes(parsed);
      } catch (e) {
        raw.push({ parseError: String((e && e.message) || e), rawText: s.textContent.slice(0, 200) });
      }
    }
    result.jsonLd = { count: scripts.length, types: [...types], raw };
  } catch (err) {
    result.jsonLd = { error: String((err && err.message) || err) };
  }

  // --- meta title/description/canonical ---
  try {
    result.meta = {
      title: document.title || null,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || null,
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || null,
    };
  } catch (err) {
    result.meta = { error: String((err && err.message) || err) };
  }

  // --- internal links sample: every same-origin "/..." href on THIS page,
  //     deduped, static-asset extensions excluded (mirrors g18-links.mjs's
  //     STATIC_ASSET_EXT / isInternalPath filter so the two evidence sources
  //     agree on what counts as an internal page link). ---
  try {
    const STATIC_ASSET_EXT = /\.(png|jpe?g|svg|gif|webp|ico|xml|json|txt|pdf|css|js|woff2?|ttf|mp4|webmanifest)$/i;
    const set = new Set();
    for (const a of document.querySelectorAll('a[href]')) {
      let href = a.getAttribute('href');
      if (!href) continue;
      if (href.startsWith('/') && !href.startsWith('//')) {
        const clean = href.split('#')[0].split('?')[0];
        if (clean && !STATIC_ASSET_EXT.test(clean)) set.add(clean.length > 1 ? clean.replace(/\/$/, '') : clean);
      } else if (href.startsWith(origin)) {
        const clean = href.slice(origin.length).split('#')[0].split('?')[0] || '/';
        if (!STATIC_ASSET_EXT.test(clean)) set.add(clean.length > 1 ? clean.replace(/\/$/, '') : clean);
      }
    }
    result.internalLinksSample = [...set].sort();
  } catch (err) {
    result.internalLinksSample = { error: String((err && err.message) || err) };
  }

  console.log('browser-check: done');
  console.log(JSON.stringify(result, null, 2));
  return result;
})();

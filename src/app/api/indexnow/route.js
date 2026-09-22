import { NextResponse } from 'next/server';

/**
 * POST /api/indexnow  — pushes URLs to IndexNow (Bing, Yandex, Seznam, Naver
 * share one endpoint). No Bing Webmaster account needed; the key file
 * public/<key>.txt proves ownership of the host.
 *
 * Body (JSON, optional): { urls: ["https://www.infinitrade.ro/brand/igus", ...] }
 * With no body it reads /sitemap.xml and submits every URL in it (max 10 000).
 *
 * Auth: header  x-indexnow-token: <INDEXNOW_KEY>  — the key is public by
 * design (it sits in public/), so this only stops casual hits; the worst an
 * abuser can do is re-submit our own sitemap, which is harmless.
 *
 * Run after every content deploy:
 *   curl -X POST https://www.infinitrade.ro/api/indexnow -H "x-indexnow-token: <key>"
 */
export const runtime = 'nodejs';
export const maxDuration = 60;

const INDEXNOW_KEY = '98201fd4751643c81f1650ba6184ab9f';
const HOST = 'www.infinitrade.ro';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

export async function POST(request) {
  if (request.headers.get('x-indexnow-token') !== INDEXNOW_KEY) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }
  let urls = [];
  try {
    const body = await request.json();
    if (Array.isArray(body?.urls)) urls = body.urls;
  } catch { /* no body: fall through to sitemap */ }
  if (!urls.length) {
    const xml = await fetch(`https://${HOST}/sitemap.xml`, { cache: 'no-store' }).then((r) => r.text());
    urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  }
  urls = urls.filter((u) => { try { return new URL(u).host === HOST; } catch { return false; } }).slice(0, 10000);
  if (!urls.length) return NextResponse.json({ error: 'no urls' }, { status: 400 });

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: INDEXNOW_KEY, keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`, urlList: urls }),
  });
  return NextResponse.json({ submitted: urls.length, indexnowStatus: res.status, ok: res.status === 200 || res.status === 202 });
}

export async function GET() {
  return NextResponse.json({ key: INDEXNOW_KEY, keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`, usage: 'POST with header x-indexnow-token' });
}

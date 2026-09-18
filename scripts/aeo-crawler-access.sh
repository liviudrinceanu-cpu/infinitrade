#!/usr/bin/env bash
# aeo-crawler-access.sh — gate 0 for the whole AEO goal (closes critique G29).
#
# A single CDN/WAF rule makes "be cited by AI engines" impossible no matter how
# good the content is, so this runs FIRST and runs again on every deploy.
# Every line is a pass/fail assertion, not an observation.
#
#   bash scripts/aeo-crawler-access.sh                       # www.infinitrade.ro
#   BASE=https://staging.example.ro bash scripts/aeo-crawler-access.sh
#
# Exits non-zero on any FAIL. Vercel-side checks (bot protection, bot hit counts)
# need the Vercel MCP or dashboard and are printed as MANUAL steps with the exact
# call to make — they cannot be curled.

set -uo pipefail
BASE="${BASE:-https://www.infinitrade.ro}"
# A page that must contain a technical table, i.e. the thing we want quoted.
PROBE_PATH="${PROBE_PATH:-/brand/grundfos}"
FAILED=0

pass() { printf '  PASS  %s\n' "$1"; }
fail() { printf '  FAIL  %s\n' "$1"; FAILED=1; }
info() { printf '  ----  %s\n' "$1"; }

say() { printf '\n== %s\n' "$1"; }

UA_SEARCH=(
  "OAI-SearchBot/1.4; +https://openai.com/searchbot"
  "PerplexityBot/1.0; +https://perplexity.ai/perplexitybot"
  "Claude-SearchBot/1.0; +https://claude.com/claude-searchbot"
  "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)"
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
  "ChatGPT-User/1.0; +https://openai.com/bot"
)

say "1. robots.txt is reachable and does not block the AI SEARCH crawlers"
ROBOTS=$(curl -fsS --max-time 20 "$BASE/robots.txt" 2>/dev/null)
if [ -z "$ROBOTS" ]; then
  fail "robots.txt did not return a body"
else
  pass "robots.txt reachable ($(printf '%s' "$ROBOTS" | wc -l | tr -d ' ') lines)"
  for bot in OAI-SearchBot PerplexityBot Claude-SearchBot Bingbot Googlebot; do
    if printf '%s' "$ROBOTS" | grep -qi "^User-agent: *$bot"; then
      blk=$(printf '%s' "$ROBOTS" | awk -v b="$bot" 'BEGIN{IGNORECASE=1} $0 ~ "^User-agent: *"b"$"{f=1;next} /^User-agent:/{f=0} f' | grep -i '^Disallow: */$')
      if [ -n "$blk" ]; then fail "$bot is Disallow: / in robots.txt"; else pass "$bot explicitly allowed"; fi
    else
      info "$bot has no explicit block (inherits User-agent: *) — acceptable, explicit is safer"
    fi
  done
  printf '%s' "$ROBOTS" | grep -qi '^Sitemap:' && pass "Sitemap: line present" || fail "no Sitemap: line in robots.txt"
  # Training bots are a business choice, not a citation blocker — report only.
  for bot in GPTBot ClaudeBot Google-Extended; do
    st=$(printf '%s' "$ROBOTS" | awk -v b="$bot" 'BEGIN{IGNORECASE=1} $0 ~ "^User-agent: *"b"$"{f=1;next} /^User-agent:/{f=0} f' | grep -ci '^Disallow: */$')
    info "$bot (training only, does NOT affect citation): $( [ "$st" -gt 0 ] && echo blocked || echo allowed )"
  done
fi

say "2. SSR: each AI search crawler gets the real content on first byte (no JS)"
for ua in "${UA_SEARCH[@]}"; do
  short="${ua%%/*}"; short="${short%%;*}"
  body=$(curl -fsSL --max-time 25 -A "$ua" "$BASE$PROBE_PATH" 2>/dev/null)
  code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 25 -A "$ua" "$BASE$PROBE_PATH")
  if [ "$code" != "200" ]; then
    fail "$short -> HTTP $code on $PROBE_PATH (bot protection / WAF / geo rule)"
    continue
  fi
  bytes=$(printf '%s' "$body" | wc -c | tr -d ' ')
  has_h1=$(printf '%s' "$body" | grep -o '<h1' | wc -l | tr -d ' ')
  has_table=$(printf '%s' "$body" | grep -o '<table' | wc -l | tr -d ' ')
  has_jsonld=$(printf '%s' "$body" | grep -o 'application/ld+json' | wc -l | tr -d ' ')
  if [ "$bytes" -lt 5000 ] || [ "$has_h1" -eq 0 ]; then
    fail "$short -> 200 but ${bytes}B, h1=$has_h1 — looks like a JS shell, not SSR"
  else
    pass "$short -> 200, ${bytes}B, h1=$has_h1, <table>=$has_table, json-ld=$has_jsonld"
  fi
done

say "2b. AEO page contract on the probe page (structure, not prose)"
probe=$(curl -fsSL --max-time 25 -A "${UA_SEARCH[0]}" "$BASE$PROBE_PATH" 2>/dev/null)
n_table=$(printf '%s' "$probe" | grep -o '<table' | wc -l | tr -d ' ')
n_h2=$(printf '%s' "$probe" | grep -o '<h2' | wc -l | tr -d ' ')
n_qh2=$(printf '%s' "$probe" | grep -oE '<h2[^>]*>[^<]*\?' | wc -l | tr -d ' ')
n_date=$(printf '%s' "$probe" | grep -oiE 'actualizat[^<]{0,30}[0-9]{4}' | wc -l | tr -d ' ')
[ "$n_table" -ge 1 ] && pass "visible <table> present ($n_table)" || fail "no visible <table> — AI engines quote HTML tables; a spec/equivalence table is the citable unit"
[ "$n_qh2" -ge 2 ] && pass "$n_qh2 H2s phrased as questions (>=2)" || fail "$n_qh2 of $n_h2 H2s are questions (need >=2; 78.4% of citations sit under a question H2)"
[ "$n_date" -ge 1 ] && pass "visible 'Actualizat: <date>' label present" || fail "no visible dated 'Actualizat:' label — dateModified with no visible twin"

say "3. No directive that blocks grounding (noarchive / nocache / max-snippet)"
hdr=$(curl -fsSI --max-time 20 -A "${UA_SEARCH[0]}" "$BASE$PROBE_PATH" 2>/dev/null)
body=$(curl -fsSL --max-time 25 -A "${UA_SEARCH[0]}" "$BASE$PROBE_PATH" 2>/dev/null)
for bad in noarchive nocache nosnippet noindex; do
  if printf '%s\n%s' "$hdr" "$body" | grep -qi "$bad"; then fail "\`$bad\` present on $PROBE_PATH (Bing: NOARCHIVE = no grounding)"; else pass "no \`$bad\`"; fi
done
if printf '%s\n%s' "$hdr" "$body" | grep -qiE 'max-snippet: *-?[0-9]+' && ! printf '%s\n%s' "$hdr" "$body" | grep -qi 'max-snippet:-1'; then
  fail "restrictive max-snippet found — limits what an AI Overview may show"
else
  pass "no restrictive max-snippet"
fi

say "4. Sitemap + llms.txt reachable, lastmod real"
for f in /sitemap.xml /llms.txt; do
  code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "$BASE$f")
  [ "$code" = "200" ] && pass "$f -> 200" || fail "$f -> HTTP $code"
done
sm=$(curl -fsS --max-time 30 "$BASE/sitemap.xml" 2>/dev/null)
n_url=$(printf '%s' "$sm" | grep -co '<loc>')
n_lm=$(printf '%s' "$sm" | grep -co '<lastmod>')
future=$(printf '%s' "$sm" | grep -o '<lastmod>[^<]*' | sed 's/<lastmod>//' | awk -v today="$(date -u +%F)" '$0 > today' | wc -l | tr -d ' ')
info "sitemap: $n_url URLs, $n_lm lastmod values"
[ "$n_lm" -gt 0 ] && pass "lastmod present" || fail "sitemap has no lastmod"
[ "$future" -eq 0 ] && pass "no future-dated lastmod" || fail "$future future-dated lastmod values (Google: 'don't specify future dates')"

say "5. Canonical host is consistent (apex vs www, http vs https)"
for host in "http://infinitrade.ro$PROBE_PATH" "https://infinitrade.ro$PROBE_PATH" "http://www.infinitrade.ro$PROBE_PATH"; do
  final=$(curl -s -o /dev/null -w '%{url_effective}' -L --max-time 25 "$host")
  [ "$final" = "$BASE$PROBE_PATH" ] && pass "$host -> $final" || fail "$host -> $final (expected $BASE$PROBE_PATH)"
done

say "6. MANUAL — Vercel-side checks that curl cannot see"
cat <<'MANUAL'
  [ ] Vercel MCP get_project_deployment_protection  -> must report protection DISABLED for production
  [ ] Vercel dashboard > Firewall > Bot protection / Attack Challenge Mode -> must be OFF for production
      (a challenge page returns 200 with a JS shell, so step 2 above can pass while every bot sees nothing)
  [ ] Vercel MCP get_runtime_logs, filtered by user-agent, 30 days, count hits for:
      OAI-SearchBot, PerplexityBot, Claude-SearchBot, ChatGPT-User, Perplexity-User, Bingbot
      -> a count of 0 for a search bot over 30 days is a FAIL even if robots.txt allows it
  [ ] Bing Webmaster Tools: site verified; AI Performance report read; IndexNow key installed
  [ ] Verify bot identity by IP, not UA, before trusting the log counts:
      openai.com/searchbot.json  perplexity.com/perplexitybot.json  claude.com/crawling/bots.json
MANUAL

say "RESULT"
if [ "$FAILED" -eq 0 ]; then echo "  all automated checks passed"; else echo "  FAILURES present — fix before any content work counts"; fi
exit "$FAILED"

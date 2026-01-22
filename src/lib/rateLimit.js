/**
 * Rate Limiter with Upstash Redis support for production
 * Falls back to in-memory for development (with warning)
 *
 * For production, set these environment variables:
 *   UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
 *   UPSTASH_REDIS_REST_TOKEN=AXxx...
 */

// Check if Upstash is configured
const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// In-memory fallback store (only for development)
const memoryStore = new Map();

// Log warning once per process
let hasWarnedAboutMemory = false;

function warnAboutMemoryStore() {
  if (!hasWarnedAboutMemory && IS_PRODUCTION) {
    console.warn(
      '\n⚠️  SECURITY WARNING: Using in-memory rate limiting in production!\n' +
      'This is NOT suitable for serverless environments (Vercel, AWS Lambda, etc.)\n' +
      'Please configure Upstash Redis:\n' +
      '  1. Create account at https://upstash.com\n' +
      '  2. Create a Redis database\n' +
      '  3. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in .env\n'
    );
    hasWarnedAboutMemory = true;
  }
}

/**
 * Upstash Redis rate limiter using REST API (no SDK required)
 */
async function upstashRateLimit(key, maxRequests, windowMs) {
  const windowKey = `ratelimit:${key}:${Math.floor(Date.now() / windowMs)}`;

  try {
    // Increment counter using Upstash REST API
    const response = await fetch(`${UPSTASH_URL}/incr/${encodeURIComponent(windowKey)}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Upstash error: ${response.status}`);
    }

    const data = await response.json();
    const currentCount = data.result;

    // Set expiry on first request in window
    if (currentCount === 1) {
      await fetch(`${UPSTASH_URL}/expire/${encodeURIComponent(windowKey)}/${Math.ceil(windowMs / 1000)}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${UPSTASH_TOKEN}`,
        },
      });
    }

    const allowed = currentCount <= maxRequests;
    const remaining = Math.max(0, maxRequests - currentCount);

    return { allowed, remaining, source: 'upstash' };
  } catch (error) {
    console.error('Upstash rate limit error:', error);
    // Fall back to memory store on error
    return memoryRateLimit(key, maxRequests, windowMs);
  }
}

/**
 * In-memory rate limiter (development fallback)
 */
function memoryRateLimit(key, maxRequests, windowMs) {
  warnAboutMemoryStore();

  const now = Date.now();
  const windowStart = now - windowMs;
  const userKey = `memory:${key}`;

  // Get existing requests
  const requests = memoryStore.get(userKey) || [];

  // Filter to only requests within window
  const validRequests = requests.filter(time => time > windowStart);

  if (validRequests.length >= maxRequests) {
    return { allowed: false, remaining: 0, source: 'memory' };
  }

  // Add current request
  validRequests.push(now);
  memoryStore.set(userKey, validRequests);

  // Periodic cleanup (1% chance per request)
  if (Math.random() < 0.01) {
    cleanupMemoryStore(windowMs);
  }

  return {
    allowed: true,
    remaining: maxRequests - validRequests.length,
    source: 'memory'
  };
}

/**
 * Clean old entries from memory store
 */
function cleanupMemoryStore(windowMs) {
  const now = Date.now();
  const windowStart = now - windowMs;

  for (const [key, times] of memoryStore.entries()) {
    const valid = times.filter(time => time > windowStart);
    if (valid.length === 0) {
      memoryStore.delete(key);
    } else {
      memoryStore.set(key, valid);
    }
  }
}

/**
 * Main rate limit function
 *
 * @param {string} identifier - Unique identifier (IP, email, etc.)
 * @param {number} maxRequests - Maximum requests allowed in window (default: 5)
 * @param {number} windowMs - Time window in milliseconds (default: 15 minutes)
 * @returns {Promise<{allowed: boolean, remaining: number, source: string}>}
 */
export async function rateLimit(identifier, maxRequests = 5, windowMs = 15 * 60 * 1000) {
  // Use Upstash if configured
  if (UPSTASH_URL && UPSTASH_TOKEN) {
    return upstashRateLimit(identifier, maxRequests, windowMs);
  }

  // Fall back to memory
  return memoryRateLimit(identifier, maxRequests, windowMs);
}

/**
 * Synchronous rate limit for backwards compatibility
 * Only uses memory store (for code that can't be async)
 */
export function rateLimitSync(identifier, maxRequests = 5, windowMs = 15 * 60 * 1000) {
  return memoryRateLimit(identifier, maxRequests, windowMs);
}

/**
 * Extract client IP from request headers
 */
export function getClientIP(request) {
  // Vercel/Cloudflare headers
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnecting = request.headers.get('cf-connecting-ip');

  // Priority: CF > Real IP > Forwarded (first IP)
  if (cfConnecting) return cfConnecting;
  if (realIP) return realIP;
  if (forwarded) return forwarded.split(',')[0].trim();

  return 'unknown';
}

/**
 * Check if rate limiting is properly configured for production
 */
export function isRateLimitConfigured() {
  return Boolean(UPSTASH_URL && UPSTASH_TOKEN);
}

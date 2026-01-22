/**
 * CSRF Protection for API Routes
 *
 * Validates requests by checking Origin/Referer headers against allowed domains.
 * This prevents cross-site request forgery attacks.
 */

const ALLOWED_ORIGINS = [
  'https://infinitrade.ro',
  'https://www.infinitrade.ro',
  process.env.NEXTAUTH_URL,
  process.env.NEXT_PUBLIC_SITE_URL,
].filter(Boolean);

// Allow localhost in development
if (process.env.NODE_ENV === 'development') {
  ALLOWED_ORIGINS.push(
    'http://localhost:3000',
    'http://127.0.0.1:3000'
  );
}

/**
 * Validates CSRF for a request
 *
 * @param {Request} request - The incoming request
 * @returns {{ valid: boolean, error?: string }}
 */
export function validateCsrf(request) {
  const method = request.method?.toUpperCase();

  // Skip CSRF check for safe methods (GET, HEAD, OPTIONS)
  if (['GET', 'HEAD', 'OPTIONS'].includes(method)) {
    return { valid: true };
  }

  // Get origin from headers (Origin takes priority over Referer)
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  // Extract origin from referer if origin header is missing
  let requestOrigin = origin;
  if (!requestOrigin && referer) {
    try {
      const url = new URL(referer);
      requestOrigin = url.origin;
    } catch {
      requestOrigin = null;
    }
  }

  // No origin information - could be a direct API call (block in production)
  if (!requestOrigin) {
    if (process.env.NODE_ENV === 'production') {
      return {
        valid: false,
        error: 'Missing origin header'
      };
    }
    // Allow in development for testing with tools like Postman
    return { valid: true };
  }

  // Check if origin is allowed
  const isAllowed = ALLOWED_ORIGINS.some(allowed => {
    if (!allowed) return false;
    // Exact match or subdomain match
    return requestOrigin === allowed ||
           requestOrigin.endsWith('.' + new URL(allowed).hostname);
  });

  if (!isAllowed) {
    return {
      valid: false,
      error: `Origin not allowed: ${requestOrigin}`
    };
  }

  return { valid: true };
}

/**
 * CSRF protection middleware helper
 * Use this in API routes to validate requests
 *
 * @param {Request} request
 * @returns {Response|null} Returns error response if invalid, null if valid
 */
export function csrfProtection(request) {
  const result = validateCsrf(request);

  if (!result.valid) {
    console.warn(`CSRF validation failed: ${result.error}`);
    return new Response(
      JSON.stringify({ error: 'CSRF validation failed' }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  return null;
}

/**
 * Validates content type for JSON APIs
 * Helps prevent CSRF via form submissions
 *
 * @param {Request} request
 * @returns {{ valid: boolean, error?: string }}
 */
export function validateContentType(request) {
  const method = request.method?.toUpperCase();

  // Skip for methods without body
  if (['GET', 'HEAD', 'OPTIONS', 'DELETE'].includes(method)) {
    return { valid: true };
  }

  const contentType = request.headers.get('content-type');

  // Must be JSON for POST/PUT/PATCH
  if (!contentType?.includes('application/json')) {
    return {
      valid: false,
      error: 'Content-Type must be application/json'
    };
  }

  return { valid: true };
}

// Simple in-memory rate limiter (for production, use Redis or similar)
const requests = new Map();

export function rateLimit(ip, maxRequests = 5, windowMs = 15 * 60 * 1000) {
  const now = Date.now();
  const userRequests = requests.get(ip) || [];

  // Remove old requests outside the window
  const validRequests = userRequests.filter(time => now - time < windowMs);

  if (validRequests.length >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  validRequests.push(now);
  requests.set(ip, validRequests);

  // Cleanup old entries periodically
  if (Math.random() < 0.01) {
    for (const [key, times] of requests.entries()) {
      const valid = times.filter(time => now - time < windowMs);
      if (valid.length === 0) {
        requests.delete(key);
      } else {
        requests.set(key, valid);
      }
    }
  }

  return { allowed: true, remaining: maxRequests - validRequests.length };
}

export function getClientIP(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || realIP || 'unknown';
}

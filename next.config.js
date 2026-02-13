/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.infinitrade-romania.ro',
      },
      {
        protocol: 'https',
        hostname: 'infinitrade-romania.ro',
      },
      {
        protocol: 'https',
        hostname: 'infinitrade.ro',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
  },

  // Enable compression
  compress: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // Strict mode for better development experience
  reactStrictMode: true,

  // Performance optimizations
  experimental: {
    // Tree-shake lucide-react for smaller bundles
    optimizePackageImports: ['lucide-react'],
  },

  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Enable SWC minification (faster than Terser)
  swcMinify: true,

  // Security and performance headers
  async headers() {
    return [
      // Global headers
      {
        source: '/:path*',
        headers: [
          // DNS prefetch for faster resolution
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          // Security headers
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://vercel.live wss://ws-us3.pusher.com",
              "frame-src 'self' https://vercel.live https://www.google.com https://maps.google.com",
              "frame-ancestors 'self'",
              "form-action 'self'",
              "base-uri 'self'",
              "object-src 'none'"
            ].join('; ')
          }
        ],
      },
      // Long-term cache for static assets (images)
      {
        source: '/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      // Long-term cache for fonts
      {
        source: '/(.*)\\.(woff|woff2|eot|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      // Cache JS and CSS files (hashed filenames = immutable)
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      // API routes should not be cached
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate'
          }
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // 301 redirects from old category-prefixed brand slugs to simple slugs
      { source: '/brand/pompe-industriale-:slug', destination: '/brand/:slug', permanent: true },
      { source: '/brand/pompe-vid-industriale-:slug', destination: '/brand/:slug', permanent: true },
      { source: '/brand/robineti-industriali-:slug', destination: '/brand/:slug', permanent: true },
      { source: '/brand/robineti-reglare-industriali-:slug', destination: '/brand/:slug', permanent: true },
      { source: '/brand/regulatoare-presiune-industriale-:slug', destination: '/brand/:slug', permanent: true },
      { source: '/brand/oale-condens-industriale-:slug', destination: '/brand/:slug', permanent: true },
      { source: '/brand/supape-siguranta-industriale-:slug', destination: '/brand/:slug', permanent: true },
      { source: '/brand/motoare-electrice-industriale-:slug', destination: '/brand/:slug', permanent: true },
      { source: '/brand/motoare-atex-industriale-:slug', destination: '/brand/:slug', permanent: true },
      { source: '/brand/schimbatoare-caldura-industriale-:slug', destination: '/brand/:slug', permanent: true },
      { source: '/brand/racitoare-ulei-industriale-:slug', destination: '/brand/:slug', permanent: true },
      { source: '/brand/suflante-industriale-:slug', destination: '/brand/:slug', permanent: true },
      { source: '/brand/suflante-roots-industriale-:slug', destination: '/brand/:slug', permanent: true },
      { source: '/brand/ventilatoare-industriale-:slug', destination: '/brand/:slug', permanent: true },
      { source: '/brand/compresoare-industriale-:slug', destination: '/brand/:slug', permanent: true },
    ];
  },
}

module.exports = nextConfig

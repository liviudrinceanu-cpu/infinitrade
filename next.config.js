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

      // Legacy site redirects (old infinitrade.ro)
      // Exact match redirects - old info pages → new equivalents
      { source: '/contact-infinitrade', destination: '/contact', permanent: true },
      { source: '/cum-cumpar', destination: '/despre-noi', permanent: true },
      { source: '/cum-platesc', destination: '/despre-noi', permanent: true },
      { source: '/livrare-produse', destination: '/despre-noi', permanent: true },
      { source: '/termeni-si-conditii-infinitrade', destination: '/termeni-si-conditii', permanent: true },
      { source: '/cataloage-produse', destination: '/', permanent: true },
      { source: '/articole-tehnice', destination: '/blog', permanent: true },
      { source: '/echipamente-curatenie-karcher', destination: '/', permanent: true },
      { source: '/echipamente-de-protectie', destination: '/', permanent: true },
      { source: '/echipamente-de-curatenie', destination: '/', permanent: true },
      { source: '/masini-de-spalat-industriale-profesionale', destination: '/', permanent: true },
      { source: '/masini-de-spalat-profesionale-industriale', destination: '/', permanent: true },
      { source: '/masini-spalat-industriale-profesionale-wf150', destination: '/', permanent: true },
      { source: '/tehnica-aerului-comprimat', destination: '/', permanent: true },
      { source: '/tehnica-abraziva-si-diamantata', destination: '/', permanent: true },
      { source: '/utilaje-prelucrare-lemn-metal', destination: '/', permanent: true },
      { source: '/utilaje-de-mica-mecanizare-pentru-constructii', destination: '/', permanent: true },
      { source: '/scule-electrice-si-cu-acumulator', destination: '/', permanent: true },
      { source: '/scule-aschietoare', destination: '/', permanent: true },
      { source: '/accesorii-sudura', destination: '/', permanent: true },
      { source: '/aparate-sudura-mig-mag', destination: '/', permanent: true },
      { source: '/transformatoare-de-sudura', destination: '/', permanent: true },
      { source: '/piese-de-schimb-accesorii-si-consumabile-pentru-industrie', destination: '/', permanent: true },
      { source: '/echipamente-agricultura-si-gradina', destination: '/', permanent: true },
      { source: '/casti-de-protectie', destination: '/', permanent: true },
      { source: '/protectie-auditiva', destination: '/', permanent: true },
      { source: '/calandre-de-calcat-industriale-profesionale', destination: '/', permanent: true },
      { source: '/uscator-rufe-industrial-profesional', destination: '/', permanent: true },
      { source: '/radio-cu-acumulator', destination: '/', permanent: true },
      { source: '/suflante-de-aer-cald', destination: '/', permanent: true },
      { source: '/testarea-conductelor-de-apa-reziduala', destination: '/', permanent: true },

      // Pattern match redirects - bulk old product/brand URLs
      { source: '/download/:path*', destination: '/', permanent: true },
      { source: '/compresor-fiac-:path*', destination: '/', permanent: true },
      { source: '/invertor-:path(sudura|de-sudura)-:rest*', destination: '/', permanent: true },
      { source: '/aparat-:path(de-sudura|sudura|de-taiat|de-taiere)-:rest*', destination: '/', permanent: true },
      { source: '/transformator-:path(de-sudura|sudura)-:rest*', destination: '/', permanent: true },
      { source: '/incarcator-:path*', destination: '/', permanent: true },
      { source: '/redresor-:path*', destination: '/', permanent: true },
      { source: '/robot-pornire-:path*', destination: '/', permanent: true },
      { source: '/strung-:path*', destination: '/', permanent: true },
      { source: '/masina-:path*', destination: '/', permanent: true },
      { source: '/expandor-:path*', destination: '/', permanent: true },
      { source: '/pompa-:path*', destination: '/', permanent: true },
      { source: '/pistolet-:path*', destination: '/', permanent: true },
      { source: '/masca-:path*', destination: '/', permanent: true },
      { source: '/polizor-:path*', destination: '/', permanent: true },
      { source: '/fierastrau-:path*', destination: '/', permanent: true },
      { source: '/betoniera-:path*', destination: '/', permanent: true },
      { source: '/taietor-:path*', destination: '/', permanent: true },
      { source: '/motopompa-:path*', destination: '/', permanent: true },
      { source: '/generator-:path*', destination: '/', permanent: true },
      { source: '/cleste-:path*', destination: '/', permanent: true },
      { source: '/suport-:path*', destination: '/', permanent: true },
      { source: '/rezervor-:path*', destination: '/', permanent: true },
      { source: '/kit-de-:path*', destination: '/', permanent: true },
      { source: '/saci-aspirator-:path*', destination: '/', permanent: true },

      // Old brand pages → homepage
      { source: '/ksb-romania-:path*', destination: '/', permanent: true },
      { source: '/parker-hannifin-:path*', destination: '/', permanent: true },
      { source: '/festo-:path*', destination: '/', permanent: true },
      { source: '/bosch-rexroth-:path*', destination: '/', permanent: true },
      { source: '/spirax-sarco-romania', destination: '/', permanent: true },
      { source: '/wilo-romania-:path*', destination: '/', permanent: true },
      { source: '/aventics-:path*', destination: '/', permanent: true },
      { source: '/ebro-armaturen-:path*', destination: '/', permanent: true },
      { source: '/loctite-:path*', destination: '/', permanent: true },
      { source: '/3m-:path*', destination: '/', permanent: true },
      { source: '/skf-:path*', destination: '/', permanent: true },
      { source: '/gimatic-:path*', destination: '/', permanent: true },
      { source: '/leser-:path*', destination: '/', permanent: true },
      { source: '/gemu-:path*', destination: '/', permanent: true },
      { source: '/lovato-:path*', destination: '/', permanent: true },
      { source: '/biral-:path*', destination: '/', permanent: true },
      { source: '/armstrong-:path*', destination: '/', permanent: true },
      { source: '/gestra-:path*', destination: '/', permanent: true },
      { source: '/danfoss-:path*', destination: '/', permanent: true },
      { source: '/stubbe-:path*', destination: '/', permanent: true },
      { source: '/db-santasalo-:path*', destination: '/', permanent: true },
      { source: '/veljan-:path*', destination: '/', permanent: true },
      { source: '/abb-:path*', destination: '/', permanent: true },
      { source: '/bopp-reuther-:path*', destination: '/', permanent: true },
      { source: '/cosgra-:path*', destination: '/', permanent: true },
      { source: '/bahr-:path*', destination: '/', permanent: true },
      { source: '/ekoval-:path*', destination: '/', permanent: true },
      { source: '/schneeberger-:path*', destination: '/', permanent: true },
      { source: '/interroll-:path*', destination: '/', permanent: true },
      { source: '/rulmeca-:path*', destination: '/', permanent: true },
      { source: '/masterchem-:path*', destination: '/', permanent: true },
      { source: '/vag-armaturen-:path*', destination: '/', permanent: true },
      { source: '/erhard-armaturen-:path*', destination: '/', permanent: true },
      { source: '/meca-inox-:path*', destination: '/', permanent: true },
      { source: '/eckart-:path*', destination: '/', permanent: true },
      { source: '/amortizoare-:path*', destination: '/', permanent: true },
      { source: '/maximator-:path*', destination: '/', permanent: true },
      { source: '/hutchinson-:path*', destination: '/', permanent: true },
      { source: '/enerdis-:path*', destination: '/', permanent: true },
      { source: '/alldos-:path*', destination: '/', permanent: true },
      { source: '/pompe-brinkmann-:path*', destination: '/', permanent: true },
      { source: '/pompe-lowara-:path*', destination: '/', permanent: true },
      { source: '/pompe-grundfos-:path*', destination: '/', permanent: true },
      { source: '/tc-direct-:path*', destination: '/', permanent: true },
      { source: '/hanhart-:path*', destination: '/', permanent: true },
      { source: '/yuken-:path*', destination: '/', permanent: true },
      { source: '/generatoare-de-aer-:path*', destination: '/', permanent: true },
      { source: '/rulmenti-:path*', destination: '/', permanent: true },

      // Old Karcher/Rothenberger/REMS/Makita product pages
      { source: '/karcher-:path*', destination: '/', permanent: true },
      { source: '/rothenberger-:path*', destination: '/', permanent: true },
      { source: '/rems-:path*', destination: '/', permanent: true },
      { source: '/makita-:path*', destination: '/', permanent: true },
      { source: '/pferd-:path*', destination: '/', permanent: true },

      // Pagination URLs
      { source: '/:path*/Page-:num', destination: '/', permanent: true },
    ];
  },
}

module.exports = nextConfig

export const config = {
  site: {
    name: 'Infinitrade Romania',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://infinitrade.ro',
    email: {
      sales: 'vanzari@infinitrade-romania.ro',
      secretariat: 'secretariat@infinitrade-romania.ro',
    },
    phone: '0371 232 404',
    cui: 'RO26209397',
  },
  api: {
    timeout: 10000,
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 5, // 5 requests per window
    },
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID,
  },
  verification: {
    google: 'googlec0ad5029219ba2ec',
  },
};

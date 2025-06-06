/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable React's streaming and server components
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs']
  },
  // Image optimization
  images: {
    domains: ['images.unsplash.com'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Redirect old URLs to new ones
  async redirects() {
    return [
      {
        source: '/ourservices',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/ourservices/:slug',
        destination: '/services/:slug',
        permanent: true,
      },
    ];
  },
  // Webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  // Handle static files
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Output source maps for debugging in production
  productionBrowserSourceMaps: true,
  // Enable React DevTools in production
  reactStrictMode: true,
};

module.exports = nextConfig;

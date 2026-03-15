import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'readdy.ai',
        pathname: '/api/search-image**',
      },
      // Beget CDN — добавьте хостнейм после создания CDN в Beget
      // {
      //   protocol: 'https',
      //   hostname: process.env.CDN_HOSTNAME ?? '',
      // },
    ],
  },
  // CDN prefix для статических ассетов (раскомментировать после настройки CDN)
  // assetPrefix: process.env.CDN_URL,
};

export default nextConfig;

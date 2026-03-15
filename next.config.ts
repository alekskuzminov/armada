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
      {
        protocol: 'https',
        hostname: 'buelifmopuduegur.begetcdn.cloud',
      },
    ],
  },
};

export default nextConfig;

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

  // 301-редиректы со старых URL на Tilda → новые URL на Next.js
  // Нужны для сохранения SEO-позиций при переезде с armadaprom.ru
  // Числа в source — уникальные ID товаров из Tilda (неизменны)
  async redirects() {
    return [
      // ─── Измерительные инструменты ─────────────────────────────────────
      {
        source: '/(.*)/tproduct/112917553422(.*)',
        destination: '/products/izmeritelnye-instrumenty/shtsrt-s-gubkami-tip-1',
        permanent: true,
      },
      {
        source: '/(.*)/tproduct/663870272112(.*)',
        destination: '/products/izmeritelnye-instrumenty/shtsrt-s-verhnimi-gubkami-tip-2',
        permanent: true,
      },
      {
        source: '/(.*)/tproduct/368956340442(.*)',
        destination: '/products/izmeritelnye-instrumenty/shtsrt-s-nizhnimi-gubkami-tip-2',
        permanent: true,
      },
      {
        source: '/(.*)/tproduct/465324333792(.*)',
        destination: '/products/izmeritelnye-instrumenty/shtsrt-s-nizhnimi-i-verhnimi-gubkami-tip-2',
        permanent: true,
      },
      {
        source: '/(.*)/tproduct/193065697042(.*)',
        destination: '/products/izmeritelnye-instrumenty/shtsrt-s-gubkami-tip-3',
        permanent: true,
      },
      {
        source: '/(.*)/tproduct/687114251812(.*)',
        destination: '/products/izmeritelnye-instrumenty/shtangentsirkul-putevoj-pshv',
        permanent: true,
      },
      {
        source: '/(.*)/tproduct/635086395462(.*)',
        destination: '/products/izmeritelnye-instrumenty/shablon-universalnyj-00316a',
        permanent: true,
      },
      {
        source: '/(.*)/tproduct/801369477822(.*)',
        destination: '/products/izmeritelnye-instrumenty/spetsialnyj-izmeritelnyj-instrument',
        permanent: true,
      },

      // ─── Муфты приводные ────────────────────────────────────────────────
      {
        source: '/(.*)/tproduct/491584530752(.*)',
        destination: '/products/privodnye-mufty/mufta-kulackovaya-s-uprugim-elementom',
        permanent: true,
      },
      {
        source: '/(.*)/tproduct/927338880732(.*)',
        destination: '/products/privodnye-mufty/uprugie-elementy',
        permanent: true,
      },
      {
        source: '/(.*)/tproduct/398995268222(.*)',
        destination: '/products/privodnye-mufty/mufta-kulaczkovo-diskovaya-kd',
        permanent: true,
      },

      // ─── Концентрат СОЖ ─────────────────────────────────────────────────
      {
        source: '/(.*)/tproduct/497449314132(.*)',
        destination: '/products/konczentrat-sozh-armol-2',
        permanent: true,
      },

      // ─── Страница галереи (есть на старом сайте, нет на новом) ──────────
      {
        source: '/gallery',
        destination: '/about',
        permanent: true,
      },

      // ─── Листинг услуг (на старом сайте есть /services, у нас нет) ──────
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

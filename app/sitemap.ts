import type { MetadataRoute } from 'next';
import { measuringInstruments, driveCouplings } from './products/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://armadaprom.ru';

  const staticRoutes = [
    '',
    '/about',
    '/contacts',
    '/payment',
    '/services/tokarnye-raboty-s-chpu',
    '/services/frezernaya-obrabotka-s-chpu',
    '/services/elektroerozionnaya-obrabotka',
    '/services/termoobrabotka',
    '/services/shlifovalnye-raboty',
    '/services/izgotovlenie-detalej-na-zakaz',
    '/products',
    '/products/izmeritelnye-instrumenty',
    '/products/privodnye-mufty',
    '/products/konczentrat-sozh-armol-2',
  ];

  const measureRoutes = measuringInstruments.map(
    (p) => `/products/izmeritelnye-instrumenty/${p.slug}`
  );

  const couplingRoutes = driveCouplings.map(
    (p) => `/products/privodnye-mufty/${p.slug}`
  );

  const allRoutes = [...staticRoutes, ...measureRoutes, ...couplingRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority:
      route === ''
        ? 1
        : route.startsWith('/services')
        ? 0.8
        : route.startsWith('/products/izmeritelnye-instrumenty/') || route.startsWith('/products/privodnye-mufty/')
        ? 0.7
        : route.startsWith('/products')
        ? 0.75
        : 0.6,
  }));
}

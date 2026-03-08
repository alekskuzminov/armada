import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://armada-cnc.ru';

  const routes = [
    '',
    '/about',
    '/contacts',
    '/delivery',
    '/services/turning',
    '/services/milling',
    '/services/edm',
    '/services/heat-treatment',
    '/services/grinding',
    '/services/custom',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') ? 0.8 : 0.6,
  }));
}

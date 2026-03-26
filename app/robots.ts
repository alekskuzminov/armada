import type { MetadataRoute } from 'next';

// Установите ROBOTS_NOINDEX=true на временном домене (armadasite.ru),
// чтобы поисковики не индексировали промежуточную версию сайта.
// На боевом домене (armadaprom.ru) переменную не задавать или выставить в false.
const noIndex = process.env.ROBOTS_NOINDEX === 'true';

export default function robots(): MetadataRoute.Robots {
  if (noIndex) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://armadaprom.ru/sitemap.xml',
  };
}

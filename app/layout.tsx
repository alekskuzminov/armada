import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import AppProviders from '@/components/shared/AppProviders';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Армада — Изготовление деталей на ЧПУ с точностью ±0.01 мм',
    template: '%s | Армада',
  },
  description:
    'Производство деталей на станках ЧПУ по всей России. Токарная и фрезерная обработка металла с точностью ±0.01 мм. Серийное производство от 50 деталей. Расчёт стоимости за 24 часа.',
  keywords: [
    'ЧПУ обработка',
    'токарная обработка',
    'фрезерная обработка',
    'изготовление деталей',
    'серийное производство',
    'обработка металла',
  ],
  metadataBase: new URL('https://armada-cnc.ru'),
  openGraph: {
    title: 'Армада — Изготовление деталей на ЧПУ с точностью ±0.01 мм',
    description:
      'Токарная и фрезерная обработка металла. Серийное производство от 50 деталей. Расчёт за 24 часа.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://armada-cnc.ru',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <AppProviders>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}

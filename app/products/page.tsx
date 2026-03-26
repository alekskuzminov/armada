import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { categories } from './data';

export const metadata: Metadata = {
  title: 'Каталог продукции',
  description:
    'Измерительные инструменты (штангенциркули ШЦРТ), муфты приводные и концентрат СОЖ «Армол-2» от производителя. Доставка по России.',
  openGraph: {
    title: 'Каталог продукции | Армада',
    description:
      'Штангенциркули разметочные ШЦРТ, кулачковые муфты, концентрат СОЖ «Армол-2». Доставка по России.',
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function CatalogPage() {
  return (
    <>
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Каталог продукции' }]} />
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Каталог продукции
          </h1>
          <p className="text-gray-600 max-w-2xl mb-12 leading-relaxed">
            Измерительный инструмент, приводные муфты и смазочно-охлаждающие жидкости
            собственного производства. Поставка по всей России.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group block bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-brand/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                  <i
                    className={`text-brand text-2xl ${
                      category.slug === 'measuring-instruments'
                        ? 'ri-ruler-line'
                        : category.slug === 'drive-couplings'
                        ? 'ri-settings-2-line'
                        : 'ri-drop-line'
                    }`}
                  />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand transition-colors">
                  {category.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{category.description}</p>
                {category.hasProducts && (
                  <p className="text-xs text-gray-400">
                    {category.products.length}{' '}
                    {category.products.length === 1
                      ? 'позиция'
                      : category.products.length < 5
                      ? 'позиции'
                      : 'позиций'}
                  </p>
                )}
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand mt-3">
                  Смотреть
                  <i className="ri-arrow-right-line" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Нужна консультация по продукции?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Поможем подобрать инструмент или муфту под ваши задачи. Ответим на вопросы по
            наличию, ценам и доставке.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
          >
            Связаться с нами
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </section>
    </>
  );
}

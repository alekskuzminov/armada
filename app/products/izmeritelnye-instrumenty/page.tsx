import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { measuringInstruments } from '../data';

export const metadata: Metadata = {
  title: 'Измерительные инструменты',
  description:
    'Штангенциркули разметочные ШЦРТ с губками из твёрдого сплава I, II, III типов, штангенциркуль путевой ПШВ, шаблон 00316А. Производство и поставка.',
  openGraph: {
    title: 'Измерительные инструменты | Армада',
    description:
      'Штангенциркули ШЦРТ с твёрдосплавными губками, путевой ПШВ, шаблон 00316А. Собственное производство.',
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function MeasuringInstrumentsPage() {
  return (
    <>
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Каталог продукции', href: '/products' },
              { label: 'Измерительные инструменты' },
            ]}
          />
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Измерительные инструменты
          </h1>
          <p className="text-gray-600 max-w-2xl mb-12 leading-relaxed">
            Штангенциркули разметочные серии ШЦРТ с твёрдосплавными губками, путевые штангенциркули
            ПШВ, универсальные шаблоны и специальный инструмент по техническому заданию.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {measuringInstruments.map((product) => (
              <Link
                key={product.slug}
                href={`/products/izmeritelnye-instrumenty/${product.slug}`}
                className="group block bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-brand/30 transition-all"
              >
                {/* Заглушка изображения — заменить на реальное */}
                <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <i className="ri-ruler-line text-gray-300 text-5xl" />
                </div>
                <h2 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-brand transition-colors leading-snug">
                  {product.name}
                </h2>
                {product.standard && (
                  <p className="text-xs text-brand font-medium mb-2">{product.standard}</p>
                )}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand mt-4">
                  Подробнее
                  <i className="ri-arrow-right-line" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Блок доверия */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Преимущества нашего инструмента</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'ri-shield-check-line',
                title: 'Твёрдосплавные губки',
                desc: 'Повышенная стойкость при разметке закалённых и твёрдых материалов. Долговечность в несколько раз выше стандартной.',
              },
              {
                icon: 'ri-settings-3-line',
                title: 'Собственное производство',
                desc: 'Инструмент изготавливается на производственной базе Армады. Возможно изготовление по чертежам заказчика.',
              },
              {
                icon: 'ri-truck-line',
                title: 'Доставка по России',
                desc: 'Отправляем транспортными компаниями и Почтой России. Возможна срочная отгрузка со склада.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                  <i className={`${item.icon} text-brand text-2xl`} />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand/5 border border-brand/20 rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-14 h-14 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
              <i className="ri-question-line text-brand text-3xl" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900 font-semibold text-lg">Не нашли нужный инструмент?</p>
              <p className="text-gray-600 text-sm mt-1">
                Изготовим специальный измерительный инструмент по вашему чертежу или техническому заданию.
              </p>
            </div>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-brand-dark transition-colors whitespace-nowrap"
            >
              Обсудить заказ
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

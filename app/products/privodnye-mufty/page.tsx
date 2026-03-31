import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { driveCouplings } from '../data';

export const metadata: Metadata = {
  title: 'Муфты приводные',
  description:
    'Кулачковые муфты с упругим элементом (звёздочкой), кулачково-дисковые муфты, упругие элементы. Производство и поставка по России.',
  openGraph: {
    title: 'Муфты приводные | Армада',
    description:
      'Муфта кулачковая (звёздочка), муфта кулачково-дисковая, упругие элементы. Собственное производство.',
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function DriveCouplingsPage() {
  return (
    <>
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Каталог продукции', href: '/products' },
              { label: 'Муфты приводные' },
            ]}
          />
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Муфты приводные
          </h1>
          <p className="text-gray-600 max-w-2xl mb-12 leading-relaxed">
            Кулачковые муфты с упругим элементом (звёздочкой), кулачково-дисковые муфты и сменные
            упругие элементы. Применяются в приводах насосов, компрессоров и станков.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {driveCouplings.map((product) => (
              <Link
                key={product.slug}
                href={`/products/privodnye-mufty/${product.slug}`}
                className="group block bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-brand/30 transition-all"
              >
                {product.images && product.images.length > 0 ? (
                  <div className="w-full aspect-square bg-gray-50 rounded-lg mb-4 overflow-hidden border border-gray-100">
                    <img
                      src={product.images[0]}
                      alt={product.shortName}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <i className="ri-settings-2-line text-gray-300 text-5xl" />
                  </div>
                )}
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

      {/* Преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Преимущества нашей продукции</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'ri-settings-3-line',
                title: 'Собственное производство',
                desc: 'Муфты изготавливаются на производственных мощностях Армады с контролем качества на каждом этапе.',
              },
              {
                icon: 'ri-repeat-line',
                title: 'Взаимозаменяемые детали',
                desc: 'Упругие элементы (звёздочки) заменяются без демонтажа полумуфт, что сокращает время обслуживания.',
              },
              {
                icon: 'ri-truck-line',
                title: 'Быстрая поставка',
                desc: 'Отгрузка со склада в течение 1–3 рабочих дней. Доставка транспортными компаниями по всей России.',
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
              <p className="text-gray-900 font-semibold text-lg">Нужна муфта нестандартного размера?</p>
              <p className="text-gray-600 text-sm mt-1">
                Изготовим муфту под ваши параметры. Передайте чертёж или технические требования.
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

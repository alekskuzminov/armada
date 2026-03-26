import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactFormBlock from '@/components/shared/ContactFormBlock';
import { driveCouplings, getProductBySlug } from '../../data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return driveCouplings.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug('drive-couplings', slug);

  if (!product) return { title: 'Товар не найден' };

  return {
    title: product.name,
    description: `${product.name}. ${product.description} Производство и поставка по России — Армада.`,
    openGraph: {
      title: `${product.name} | Армада`,
      description: product.description,
      type: 'website',
      locale: 'ru_RU',
    },
  };
}

export default async function DriveCouplingsProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug('drive-couplings', slug);

  if (!product) notFound();

  // Похожие товары (остальные в категории, кроме текущего)
  const related = driveCouplings.filter((p) => p.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Каталог продукции', href: '/products' },
              { label: 'Муфты приводные', href: '/products/privodnye-mufty' },
              { label: product.shortName },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-10 mt-4 items-start">
            {/* Заглушка изображения — заменить на реальное */}
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl flex flex-col items-center justify-center gap-3">
              <i className="ri-settings-2-line text-gray-300 text-6xl" />
              <p className="text-xs text-gray-400">Изображение товара</p>
            </div>

            <div>
              {product.standard && (
                <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-2">
                  {product.standard}
                </p>
              )}
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#order"
                  className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
                >
                  Запросить цену
                </a>
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-brand hover:text-brand transition-colors"
                >
                  Задать вопрос
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Технические характеристики */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Технические характеристики</h2>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, index) => (
                      <tr
                        key={spec.label}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      >
                        <td className="px-4 py-3 font-medium text-gray-700 w-1/2 border-b border-gray-100">
                          {spec.label}
                        </td>
                        <td className="px-4 py-3 text-gray-600 border-b border-gray-100">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Область применения</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{product.application}</p>

              <div className="bg-brand/5 border border-brand/20 rounded-xl p-5">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Нужны точные характеристики?
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Предоставим полный паспорт изделия и актуальные цены по запросу.
                </p>
                <a
                  href="#order"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                >
                  Запросить документацию
                  <i className="ri-arrow-right-line" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section id="order" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Запросить цену и наличие</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Укажите нужное количество и контактные данные — ответим с ценой и сроками
                поставки в течение рабочего дня.
              </p>
              <div className="space-y-3">
                {[
                  'Ответим в течение рабочего дня',
                  'Предоставим паспорт изделия',
                  'Доставка транспортными компаниями по России',
                  'Оплата по безналичному расчёту (НДС)',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm text-gray-600">
                    <i className="ri-check-line text-brand text-lg" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-sm">
              <ContactFormBlock
                formId={`product-${product.slug}`}
                heading="Оставить заявку"
                subheading={`Запрос по: ${product.shortName}`}
                fields={['name', 'phone', 'email', 'quantity', 'message']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Похожие товары */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Другие муфты приводные</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/privodnye-mufty/${p.slug}`}
                  className="group block bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-brand/30 transition-all"
                >
                  <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <i className="ri-settings-2-line text-gray-300 text-4xl" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-brand transition-colors leading-snug">
                    {p.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-brand mt-3">
                    Подробнее
                    <i className="ri-arrow-right-line" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

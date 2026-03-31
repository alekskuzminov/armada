import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactFormBlock from '@/components/shared/ContactFormBlock';
import Gallery from '@/components/shared/Gallery';
import ProductOrderBlock from '@/components/products/ProductOrderBlock';
import ModelsTableWithCart from '@/components/products/ModelsTableWithCart';
import { measuringInstruments, getProductBySlug, hasModelsWithPrices, formatPrice } from '../../data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return measuringInstruments.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug('izmeritelnye-instrumenty', slug);

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

export default async function MeasuringInstrumentProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug('izmeritelnye-instrumenty', slug);

  if (!product) notFound();

  // Похожие товары (остальные в категории, кроме текущего)
  const related = measuringInstruments.filter((p) => p.slug !== slug).slice(0, 3);

  // JSON-LD микроразметка Schema.org Product
  const modelsWithPrices = product.models?.filter((m) => m.price > 0) ?? [];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    ...(product.images?.[0] && { image: `https://armada-cnc.ru${product.images[0]}` }),
    brand: { '@type': 'Brand', name: 'Армада' },
    manufacturer: { '@type': 'Organization', name: 'Армада' },
    ...(modelsWithPrices.length > 0 && {
      offers: modelsWithPrices.length === 1
        ? {
            '@type': 'Offer',
            priceCurrency: 'RUB',
            price: modelsWithPrices[0].price / 100,
            availability: 'https://schema.org/InStock',
            seller: { '@type': 'Organization', name: 'Армада' },
          }
        : {
            '@type': 'AggregateOffer',
            priceCurrency: 'RUB',
            lowPrice: Math.min(...modelsWithPrices.map((m) => m.price / 100)),
            highPrice: Math.max(...modelsWithPrices.map((m) => m.price / 100)),
            offerCount: modelsWithPrices.length,
            availability: 'https://schema.org/InStock',
          },
    }),
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Каталог продукции', href: '/products' },
              { label: 'Измерительные инструменты', href: '/products/izmeritelnye-instrumenty' },
              { label: product.shortName },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-10 mt-4 items-start">
            {/* Галерея изображений продукта */}
            {product.images && product.images.length > 0 ? (
              <Gallery
                layout="product"
                images={product.images.map((src, i) => ({
                  src,
                  alt: `${product.shortName} — фото ${i + 1}`,
                }))}
              />
            ) : (
              <div className="w-full aspect-square bg-gray-100 rounded-xl flex flex-col items-center justify-center gap-3">
                <i className="ri-ruler-line text-gray-300 text-6xl" />
                <p className="text-xs text-gray-400">Изображение товара</p>
              </div>
            )}

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

              {hasModelsWithPrices(product) ? (
                <ProductOrderBlock
                  productSlug={product.slug}
                  categorySlug={product.categorySlug}
                  productName={product.shortName}
                  models={product.models!.filter((m) => m.price > 0)}
                  standard={product.standard}
                />
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Технические характеристики + Описание */}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Описание</h2>
              {product.fullDescription ? (
                <div className="space-y-4">
                  {product.fullDescription.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-sm">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 leading-relaxed">{product.application}</p>
              )}

              <div className="bg-brand/5 border border-brand/20 rounded-xl p-5 mt-8">
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

      {/* Доступные модели */}
      {product.models && product.models.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Доступные модели</h2>
            {hasModelsWithPrices(product) ? (
              <ModelsTableWithCart
                models={product.models}
                productSlug={product.slug}
                categorySlug={product.categorySlug}
                productName={product.shortName}
              />
            ) : (
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Наименование</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-700 w-40">Цена деления</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.models.map((model, index) => (
                      <tr
                        key={model.name}
                        className={`border-b border-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                      >
                        <td className="px-4 py-3 text-gray-700">{model.name}</td>
                        <td className="px-4 py-3 text-gray-600 text-right">{model.division}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Форма заявки */}
      <section id="order" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Запросить цену и наличие</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Укажите нужное количество и контактные данные — мы ответим с ценой и сроками
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Другие инструменты</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/izmeritelnye-instrumenty/${p.slug}`}
                  className="group block bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-brand/30 transition-all"
                >
                  {p.images && p.images.length > 0 ? (
                    <div className="w-full aspect-square bg-gray-50 rounded-lg mb-4 overflow-hidden border border-gray-100">
                      <img
                        src={p.images[0]}
                        alt={p.shortName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <i className="ri-ruler-line text-gray-300 text-4xl" />
                    </div>
                  )}
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

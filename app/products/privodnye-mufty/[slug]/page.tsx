import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactFormBlock from '@/components/shared/ContactFormBlock';
import Gallery from '@/components/shared/Gallery';
import ProductOrderBlock from '@/components/products/ProductOrderBlock';
import ModelsTableWithCart from '@/components/products/ModelsTableWithCart';
import { driveCouplings, getProductBySlug, hasModelsWithPrices } from '../../data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return driveCouplings.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug('privodnye-mufty', slug);

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
  const product = getProductBySlug('privodnye-mufty', slug);

  if (!product) notFound();

  // Похожие товары (остальные в категории, кроме текущего)
  const related = driveCouplings.filter((p) => p.slug !== slug);

  // JSON-LD Schema.org
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
              { label: 'Муфты приводные', href: '/products/privodnye-mufty' },
              { label: product.shortName },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-10 mt-4 items-start">
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
                <i className="ri-settings-2-line text-gray-300 text-6xl" />
                <p className="text-xs text-gray-400">Изображение товара</p>
              </div>
            )}

            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>

              {product.note && (
                <p className="text-sm text-gray-600 italic border border-gray-200 rounded-lg px-4 py-3 mb-6 leading-relaxed">
                  *{product.note.split(/\*\*(.*?)\*\*/g).map((part, i) =>
                    i % 2 === 1
                      ? <strong key={i} className="font-bold not-italic text-gray-900">{part}</strong>
                      : part
                  )}
                </p>
              )}

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

      {/* Технические характеристики */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Технические характеристики</h2>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden mb-6">
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
                <div className="space-y-3">
                  {product.fullDescription.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-sm">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 leading-relaxed">{product.application}</p>
              )}

              <div className="mt-6 bg-brand/5 border border-brand/20 rounded-xl p-5">
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

      {/* Типоразмерный ряд */}
      {product.assortmentTable && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {product.assortmentTable.title}
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Прокрутите таблицу горизонтально, чтобы увидеть все параметры
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
              <table className="w-full text-xs min-w-[900px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    {product.assortmentTable.headers.map((header, i) => (
                      <th
                        key={i}
                        className={`px-3 py-3 font-semibold text-gray-700 whitespace-nowrap ${
                          i === 0 ? 'text-left' : 'text-center'
                        }`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.assortmentTable.rows.map((row, ri) => (
                    <tr
                      key={ri}
                      className={`border-b border-gray-50 ${
                        ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'
                      }`}
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-3 py-2.5 text-gray-600 align-top leading-relaxed ${
                            ci === 0
                              ? 'font-medium text-gray-800 whitespace-nowrap'
                              : ci === 2
                              ? 'text-center max-w-[160px]'
                              : 'text-center whitespace-nowrap'
                          }`}
                        >
                          {ci === 2 && cell !== '—'
                            ? cell.split('; ').map((v, j) => (
                                <span key={j} className="block">
                                  {v}
                                </span>
                              ))
                            : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * «—» означает, что параметр уточняется в зависимости от исполнения. Для подбора конкретного типоразмера обратитесь к менеджеру.
            </p>
          </div>
        </section>
      )}

      {/* Доступные модели */}
      {product.models && product.models.length > 0 && hasModelsWithPrices(product) && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Доступные модели</h2>
            <ModelsTableWithCart
              models={product.models}
              productSlug={product.slug}
              categorySlug={product.categorySlug}
              productName={product.shortName}
            />
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
                      <i className="ri-settings-2-line text-gray-300 text-4xl" />
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

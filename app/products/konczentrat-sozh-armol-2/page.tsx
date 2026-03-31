import type { Metadata } from 'next';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactFormBlock from '@/components/shared/ContactFormBlock';
import Gallery from '@/components/shared/Gallery';
import ProductOrderBlock from '@/components/products/ProductOrderBlock';
import type { ProductModel } from '@/app/products/data';

export const metadata: Metadata = {
  title: 'Смазочно-охлаждающая жидкость «Армол-2»',
  description:
    'СОЖ «Армол-2» для электроэрозионных проволочно-вырезных станков струйного типа серии DK. Объём 5 л, производство Россия. Поставка по России — Армада.',
  openGraph: {
    title: 'СОЖ «Армол-2» | Армада',
    description:
      'Смазочно-охлаждающая жидкость для ЭЭ проволочно-вырезных станков струйного типа. Объём 5 л, цена 2 300 р. без НДС.',
    type: 'website',
    locale: 'ru_RU',
  },
};

const model: ProductModel = {
  name: 'Армол-2, 5 л',
  sku: 'ARMOL-2-5L',
  division: '5 л',
  price: 230000, // 2 300 р. в копейках
};

const images = [
  { src: '/images/sozh/armol-2/armol-2.webp', alt: 'СОЖ «Армол-2» — канистра 5 л' },
  { src: '/images/sozh/armol-2/armol-2-1.webp', alt: 'СОЖ «Армол-2» — этикетка и состав' },
];

const specs = [
  { label: 'Объём', value: '5 л' },
  { label: 'Производство', value: 'Россия' },
  { label: 'Вес нетто', value: '4,5 кг' },
  { label: 'Охлаждает до', value: '30°' },
  { label: 'Стандарт', value: 'ТУ' },
];

const advantages = [
  'Создаёт оптимальные условия электроэрозионной обработки',
  'Увеличивает срок службы проволоки',
  'Интервал замены СОЖ увеличивается в 1,5 раза',
  'Легко мыть оборудование и очищать детали',
];

const comparison = [
  {
    label: 'Качество состава',
    text: 'Качественный состав. Соответствует всем требованиям к СОЖ. Продукт сертифицирован, выдана Декларация соответствия ЕАЭС.',
  },
  {
    label: 'Антикоррозийные характеристики',
    text: 'Высокая антикоррозийная защита оборудования и обрабатываемого материала.',
  },
  {
    label: 'Влияние на производительность',
    text: 'Обеспечивает максимальную производительность и стабильность процесса обработки даже на заготовках толщиной более 400 мм. За счёт лучших электрофизических качеств станок реже «встаёт на КЗ».',
  },
  {
    label: 'Влияние на качество работы',
    text: 'Отлично справляется со своей задачей, без негативного влияния на качество.',
  },
  {
    label: 'Срок службы',
    text: 'Длительный срок службы за счёт быстрого оседания продуктов эрозии и технологической пыли. Интервал замены увеличивается на 30–40%.',
  },
  {
    label: 'Устойчивость к биопоражению и окислению',
    text: 'Высокая устойчивость к окислению, биопоражению грибками и бактериями за счёт добавления в состав бактерицидных добавок и антиоксидантов.',
  },
  {
    label: 'Растворяемость',
    text: 'Для использования необходимо лишь вылить концентрат в бак, включить на минуту циркуляционный насос — и концентрат растворится в воде сам.',
  },
  {
    label: 'Электропроводность',
    text: 'Оптимальная электропроводность, практически не меняющая своих значений весь срок службы.',
  },
  {
    label: 'Экологичность',
    text: 'В воздушной среде не образует токсичных соединений, не содержит хлора, нитрита натрия, бария, фенолов и других вредных компонентов.',
  },
  {
    label: 'Очищающие свойства',
    text: 'Детали и оборудование в меньшей степени загрязняются продуктами эрозии и лучше моются.',
  },
  {
    label: 'Цена',
    text: 'Обладает уникальными эксплуатационными свойствами при стоимости ниже, чем у китайского аналога. Цена более стабильна, так как большинство компонентов, используемых при его изготовлении, производятся в России.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Смазочно-охлаждающая жидкость «Армол-2»',
  description:
    'СОЖ для электроэрозионных проволочно-вырезных станков струйного типа серии DK. Объём 5 л.',
  image: 'https://armada-cnc.ru/images/sozh/armol-2/armol-2.webp',
  brand: { '@type': 'Brand', name: 'Армада' },
  manufacturer: { '@type': 'Organization', name: 'Армада' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'RUB',
    price: '2300',
    availability: 'https://schema.org/InStock',
  },
};

export default function CoolantConcentratePage() {
  return (
    <>
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
              { label: 'Концентрат СОЖ «Армол-2»', href: '/products/konczentrat-sozh-armol-2' },
              { label: 'Смазочно-охлаждающая жидкость «Армол-2»' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-10 mt-6 items-start">
            <Gallery images={images} layout="product" />

            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Смазочно-охлаждающая жидкость «Армол-2»
              </h1>
              <p className="text-gray-600 leading-relaxed mb-6">
                Смазочно-охлаждающая жидкость (СОЖ) для электроэрозионных проволочно-вырезных
                станков струйного типа.
              </p>

              {/* Краткие характеристики */}
              <div className="space-y-1.5 mb-6">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex gap-2 text-sm">
                    <span className="text-gray-500 shrink-0">{spec.label}:</span>
                    <span className="font-medium text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>

              <ProductOrderBlock
                productSlug="armol-2"
                categorySlug="konczentrat-sozh-armol-2"
                productName="Смазочно-охлаждающая жидкость «Армол-2»"
                models={[model]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Описание */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Для каких станков */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Для каких станков подходит СОЖ «Армол-2»
            </h2>
            <p className="text-gray-600">
              Электроэрозионные проволочно-вырезные станки струйного типа серии DK или аналоги.
            </p>
          </div>

          {/* Преимущества */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Преимущества СОЖ «Армол-2»</h2>
            <ul className="space-y-2">
              {advantages.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <i className="ri-check-line text-brand text-lg shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Сравнение с аналогами */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Лучше, чем китайские аналоги
            </h2>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {comparison.map((item, index) => (
                    <tr
                      key={item.label}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-4 py-3 font-semibold text-gray-800 border-b border-gray-100 align-top w-56 shrink-0">
                        {item.label}
                      </td>
                      <td className="px-4 py-3 text-gray-600 border-b border-gray-100 leading-relaxed">
                        {item.text}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'ri-temp-cold-line',
                title: 'Эффективное охлаждение',
                desc: 'Снижает температуру в зоне резания, продлевает ресурс режущего инструмента.',
              },
              {
                icon: 'ri-oil-line',
                title: 'Смазывающее действие',
                desc: 'Уменьшает силы резания и трение, улучшает качество обрабатываемой поверхности.',
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Защита от коррозии',
                desc: 'Образует защитную плёнку на деталях и оборудовании, предотвращая ржавление.',
              },
              {
                icon: 'ri-leaf-line',
                title: 'Стабильность раствора',
                desc: 'Не расслаивается при хранении, сохраняет свойства в течение длительного времени.',
              },
              {
                icon: 'ri-flask-line',
                title: 'Широкий диапазон применения',
                desc: 'Подходит для токарных, фрезерных, сверлильных и шлифовальных операций.',
              },
              {
                icon: 'ri-user-heart-line',
                title: 'Безопасность',
                desc: 'Не содержит вредных компонентов, разрешён для применения в рабочих условиях.',
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

      {/* Форма заявки */}
      <section id="order" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Запросить цену и наличие
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Укажите необходимый объём и контактные данные — ответим с ценой и сроками
                поставки в течение рабочего дня.
              </p>
              <div className="space-y-3">
                {[
                  'Ответим в течение рабочего дня',
                  'Предоставим технический паспорт',
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
                formId="coolant-order"
                heading="Оставить заявку"
                subheading="Запрос по: СОЖ «Армол-2»"
                fields={['name', 'phone', 'email', 'quantity', 'message']}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

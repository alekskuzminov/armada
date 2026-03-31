import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactFormBlock from '@/components/shared/ContactFormBlock';

export const metadata: Metadata = {
  title: 'Концентрат СОЖ «Армол-2»',
  description:
    'Концентрат смазочно-охлаждающей жидкости «Армол-2» для металлообработки. Применяется при токарных, фрезерных, шлифовальных операциях. Поставка по России.',
  openGraph: {
    title: 'Концентрат СОЖ «Армол-2» | Армада',
    description:
      'СОЖ «Армол-2» для металлообработки — токарные, фрезерные, шлифовальные операции. Поставка по России.',
    type: 'website',
    locale: 'ru_RU',
  },
};

const specs = [
  { label: 'Наименование', value: 'Концентрат СОЖ «Армол-2»' },
  { label: 'Тип', value: 'Водосмешиваемый концентрат' },
  { label: 'Рабочая концентрация', value: 'Уточнить у менеджера' },
  { label: 'pH рабочего раствора', value: 'Уточнить у менеджера' },
  { label: 'Применяемые операции', value: 'Токарные, фрезерные, сверлильные, шлифовальные' },
  { label: 'Обрабатываемые материалы', value: 'Сталь, чугун, цветные металлы и сплавы' },
  { label: 'Тара', value: 'Канистры / бочки (уточнить у менеджера)' },
  { label: 'Стандарт', value: 'ТУ' },
];

const advantages = [
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
];

export default function CoolantConcentratePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Каталог продукции', href: '/products' },
              { label: 'Концентрат СОЖ «Армол-2»' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-10 mt-4 items-start">
            {/* Заглушка изображения — заменить на реальное */}
            <div className="w-full aspect-square bg-gray-100 rounded-xl flex flex-col items-center justify-center gap-3">
              <i className="ri-drop-line text-gray-300 text-6xl" />
              <p className="text-xs text-gray-400">Изображение товара</p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-2">ТУ</p>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Концентрат СОЖ «Армол-2»
              </h1>
              <p className="text-gray-600 leading-relaxed mb-8">
                Водосмешиваемый концентрат смазочно-охлаждающей жидкости «Армол-2» для применения
                при механической обработке металлов. Обеспечивает охлаждение, смазку и защиту от
                коррозии в широком диапазоне металлообрабатывающих операций.
              </p>

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

      {/* Характеристики + преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Технические характеристики</h2>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {specs.map((spec, index) => (
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
              <p className="text-gray-600 leading-relaxed mb-6">
                СОЖ «Армол-2» применяется при механической обработке чёрных и цветных металлов
                на металлорежущих станках: токарных, фрезерных, сверлильных, расточных и
                шлифовальных. Рекомендуется для использования в автоматизированных системах
                подачи СОЖ.
              </p>

              <div className="bg-brand/5 border border-brand/20 rounded-xl p-5">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Нужны точные характеристики?
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Предоставим технический паспорт и актуальные цены по запросу.
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

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item) => (
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
                subheading="Запрос по: Концентрат СОЖ «Армол-2»"
                fields={['name', 'phone', 'email', 'quantity', 'message']}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

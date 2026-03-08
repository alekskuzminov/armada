import type { Metadata } from 'next';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactFormBlock from '@/components/shared/ContactFormBlock';
import EdmGallery from './EdmGallery';

export const metadata: Metadata = {
  title: 'Электроэрозионная обработка',
  description:
    'Проволочная электроэрозионная обработка металлов на станках ЧПУ. Вырезание сложных контуров, штампов, пресс-форм. Точность ±0.005 мм. Расчёт за 2 часа.',
  openGraph: {
    title: 'Электроэрозионная обработка | Армада',
    description:
      'Проволочная электроэрозия для изготовления штампов, пресс-форм и деталей из закалённых сталей.',
    type: 'website',
    locale: 'ru_RU',
  },
};

const machines = [
  {
    name: 'DK7732',
    specs: [
      { label: 'Макс. размер заготовки', value: '700×500×350 мм' },
      { label: 'Ход X / Y', value: '320×400 мм' },
      { label: 'Диаметр проволоки', value: '0.18–0.25 мм' },
      { label: 'Точность', value: '±0.01 мм' },
      { label: 'Шероховатость', value: 'Ra 1.0' },
    ],
  },
  {
    name: 'DK7745',
    specs: [
      { label: 'Макс. размер заготовки', value: '900×600×400 мм' },
      { label: 'Ход X / Y', value: '450×550 мм' },
      { label: 'Диаметр проволоки', value: '0.18–0.25 мм' },
      { label: 'Точность', value: '±0.008 мм' },
      { label: 'Шероховатость', value: 'Ra 0.8' },
    ],
  },
  {
    name: 'CK7725',
    specs: [
      { label: 'Макс. размер заготовки', value: '500×400×300 мм' },
      { label: 'Ход X / Y', value: '250×320 мм' },
      { label: 'Диаметр проволоки', value: '0.10–0.25 мм' },
      { label: 'Точность', value: '±0.005 мм' },
      { label: 'Шероховатость', value: 'Ra 0.6' },
    ],
  },
];

export default function EdmPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Услуги', href: '/services' },
              { label: 'Электроэрозионная обработка' },
            ]}
          />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand/10 rounded-full text-brand text-sm font-medium mb-6">
                <i className="ri-flashlight-line" />
                Проволочная электроэрозия
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Электроэрозионная обработка
              </h1>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Электроэрозионная обработка — технология резки токопроводящих материалов тонкой
                проволокой с помощью электрических разрядов. Позволяет вырезать сложные контуры из
                закалённых сталей, твёрдых сплавов и других материалов, которые не поддаются
                традиционной механической обработке.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Метод обеспечивает высокую точность реза (до ±0.005 мм) и низкую шероховатость
                поверхности (до Ra 0.6) без механического воздействия на заготовку — деталь
                не деформируется и не нагревается.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Применяется для изготовления штампов, пресс-форм, вырубных матриц, шаблонов,
                зубчатых колёс и других деталей со сложным профилем из любых токопроводящих
                материалов.
              </p>
              <a
                href="#form"
                className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-brand-dark transition-colors"
              >
                Рассчитать стоимость
                <i className="ri-arrow-right-line" />
              </a>
            </div>
            <div className="rounded-xl overflow-hidden h-[480px] lg:h-[560px] bg-gray-100">
              <img
                src="https://readdy.ai/api/search-image?query=wire-edm-electrical-discharge-machine-cutting-hardened-steel-die-sparks-and-water-close-up-professional-industrial-photography-dark-dramatic-lighting&width=800&height=1000&seq=edm-hero-001&orientation=portrait"
                alt="Электроэрозионная обработка"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Оборудование</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Три электроэрозионных проволочно-вырезных станка с ЧПУ для обработки деталей различных
            габаритов и требований к точности.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {machines.map((machine) => (
              <div
                key={machine.name}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                    <i className="ri-flashlight-line text-brand text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{machine.name}</h3>
                </div>
                <ul className="space-y-3">
                  {machine.specs.map((spec) => (
                    <li key={spec.label} className="flex justify-between text-sm">
                      <span className="text-gray-500">{spec.label}</span>
                      <span className="text-gray-900 font-medium">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-dark-brand rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-brand/20 flex items-center justify-center flex-shrink-0">
              <i className="ri-ruler-line text-brand text-2xl" />
            </div>
            <div>
              <p className="text-white font-semibold text-lg">
                Максимальные габариты заготовки: 900×600×400 мм
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Обрабатываем детали в пределах рабочей зоны станка DK7745
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Примеры работ</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Детали, изготовленные методом электроэрозионной обработки на нашем производстве.
          </p>
          <EdmGallery />
        </div>
      </section>

      {/* Form */}
      <section id="form" className="py-16 bg-dark-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Рассчитайте стоимость электроэрозионной обработки
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Отправьте чертёж или опишите деталь — мы подготовим коммерческое предложение
                с ценой и сроками в течение 2 часов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <i className="ri-check-line text-brand text-lg" />
                  Расчёт стоимости за 2 часа
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <i className="ri-check-line text-brand text-lg" />
                  Точность до ±0.005 мм
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <i className="ri-check-line text-brand text-lg" />
                  Обработка закалённых сталей до 65 HRC
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <i className="ri-check-line text-brand text-lg" />
                  Доставка по всей России
                </div>
              </div>

              <div className="mt-8 p-5 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-white font-semibold mb-3">Что нужно для расчёта</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <i className="ri-file-3-line text-brand mt-0.5" />
                    Чертёж детали (PDF, DWG, DXF)
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-shape-line text-brand mt-0.5" />
                    Марка и толщина материала
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-stack-line text-brand mt-0.5" />
                    Количество деталей в партии
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-calendar-line text-brand mt-0.5" />
                    Желаемые сроки изготовления
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8">
              <ContactFormBlock
                formId="edm-order"
                heading="Отправить заявку"
                subheading="Опишите задачу — мы свяжемся с вами в ближайшее время"
                variant="dark"
                fields={['name', 'phone', 'email', 'message']}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

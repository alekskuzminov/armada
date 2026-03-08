import type { Metadata } from 'next';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactFormBlock from '@/components/shared/ContactFormBlock';
import MillingEquipment from './MillingEquipment';
import MillingGallery from './MillingGallery';

export const metadata: Metadata = {
  title: 'Фрезерная обработка с ЧПУ',
  description:
    'Фрезерная обработка деталей на вертикальных обрабатывающих центрах с ЧПУ. Рабочая зона до 1000×620×600 мм. Точность ±0.01 мм. Расчёт за 2 часа.',
  openGraph: {
    title: 'Фрезерная обработка с ЧПУ | Армада',
    description:
      'Фрезерование корпусных деталей и сложных поверхностей на станках ЧПУ с точностью ±0.01 мм.',
    type: 'website',
    locale: 'ru_RU',
  },
};

const capabilities = [
  {
    icon: 'ri-box-3-line',
    title: '3-осевая обработка',
    desc: 'Фрезерование плоскостей, пазов, карманов и контуров на вертикальных обрабатывающих центрах.',
  },
  {
    icon: 'ri-shape-2-line',
    title: 'Обработка корпусных деталей',
    desc: 'Изготовление корпусов, крышек, кронштейнов и плит с точным выдерживанием геометрии.',
  },
  {
    icon: 'ri-ruler-2-line',
    title: 'Фрезерование пазов и карманов',
    desc: 'Глухие и сквозные пазы, карманы произвольной формы, выборки под уплотнения и посадки.',
  },
  {
    icon: 'ri-drill-line',
    title: 'Сверление и растачивание',
    desc: 'Точное сверление, зенкование, развёртывание и нарезка резьбы за один установ.',
  },
  {
    icon: 'ri-stack-line',
    title: 'Серийное производство',
    desc: 'Партии от 50 до 10 000 деталей со стабильным качеством. Оснастка и приспособления под серию.',
  },
  {
    icon: 'ri-timer-flash-line',
    title: 'Быстрые сроки',
    desc: 'Единичные детали — от 3 часов. Серийные заказы — от 5 рабочих дней в зависимости от сложности.',
  },
];

const materials = [
  {
    icon: 'ri-shield-line',
    title: 'Сталь',
    grades: 'Ст20, Ст45, 40Х, 40ХН, 30ХГСА',
    desc: 'Конструкционные и легированные стали для корпусов, плит, кронштейнов и направляющих.',
  },
  {
    icon: 'ri-sparkling-2-line',
    title: 'Нержавейка',
    grades: 'AISI 304, 316, 321, 12Х18Н10Т',
    desc: 'Коррозионностойкие стали для пищевого, медицинского и химического оборудования.',
  },
  {
    icon: 'ri-leaf-line',
    title: 'Алюминий',
    grades: 'Д16Т, АМг5, АД31, В95',
    desc: 'Лёгкие сплавы для корпусов приборов, радиаторов, элементов авиационных конструкций.',
  },
  {
    icon: 'ri-copper-coin-line',
    title: 'Латунь',
    grades: 'ЛС59-1, Л63, ЛО62-1',
    desc: 'Латунные сплавы для коллекторов, арматуры, электротехнических и декоративных деталей.',
  },
  {
    icon: 'ri-fire-line',
    title: 'Титан',
    grades: 'ВТ1-0, ВТ6, ВТ14',
    desc: 'Титановые сплавы для аэрокосмической, медицинской и оборонной промышленности.',
  },
  {
    icon: 'ri-shape-line',
    title: 'Пластики',
    grades: 'Капролон, фторопласт, текстолит, полиацеталь',
    desc: 'Конструкционные пластики для направляющих, изоляторов и корпусных элементов.',
  },
];

const accuracyFeatures = [
  {
    icon: 'ri-focus-3-line',
    value: '±0.01 мм',
    title: 'Точность обработки',
    desc: 'Высокая точность позиционирования и повторяемость на всём тираже деталей.',
  },
  {
    icon: 'ri-landscape-line',
    value: 'Ra 0.8',
    title: 'Шероховатость поверхности',
    desc: 'Чистовое фрезерование до Ra 0.8. Шлифовка и полировка по запросу.',
  },
  {
    icon: 'ri-checkbox-circle-line',
    value: '100%',
    title: 'Контроль качества',
    desc: 'Каждая деталь проходит проверку размеров. Протокол измерений прилагается к партии.',
  },
  {
    icon: 'ri-microscope-line',
    value: 'ISO',
    title: 'Метрологическая лаборатория',
    desc: 'Координатно-измерительная машина для контроля сложных 3D-поверхностей и корпусных деталей.',
  },
];

const timeline = [
  {
    step: '01',
    title: 'Заявка',
    desc: 'Отправьте чертёж или 3D-модель. Мы оценим сложность и уточним детали.',
  },
  {
    step: '02',
    title: 'Расчёт за 2 часа',
    desc: 'Подготовим коммерческое предложение с ценой и сроками изготовления.',
  },
  {
    step: '03',
    title: 'Производство',
    desc: 'Изготовим детали на обрабатывающих центрах ЧПУ с контролем на каждом этапе.',
  },
  {
    step: '04',
    title: 'Доставка по России',
    desc: 'Отправим транспортной компанией или курьерской службой в любой город.',
  },
];

export default function MillingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Услуги', href: '/services' },
              { label: 'Фрезерная обработка с ЧПУ' },
            ]}
          />
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-8">
            Фрезерная обработка с ЧПУ
          </h1>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <img
              src="https://readdy.ai/api/search-image?query=modern-cnc-vertical-milling-machine-in-industrial-workshop-high-speed-end-mill-cutting-aluminum-block-coolant-spray-precision-metalworking-clean-environment-professional-manufacturing&width=800&height=600&seq=milling-hero-001&orientation=landscape"
              alt="Фрезерная обработка на станке ЧПУ"
              className="w-full rounded-lg object-cover aspect-[4/3]"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Максимальный габарит обработки
              </p>
              <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-none">
                1000×620×600
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Фрезеруем корпусные детали, пластины, кронштейны и сложные 3D-поверхности на вертикальных
                обрабатывающих центрах с ЧПУ. Точность обработки ±0.01 мм. Если вы не знаете, как
                сделать деталь, мы поможем с разработкой конструкторской документации.
              </p>
              <a
                href="#form"
                className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-brand-dark transition-colors uppercase tracking-wide"
              >
                Заказать услугу
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <MillingEquipment />

      {/* Capabilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Наши возможности</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Полный цикл фрезерной обработки — от простых плоскостей до сложных корпусных деталей.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                  <i className={`${item.icon} text-brand text-2xl`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Примеры работ</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Фрезерованные детали, изготовленные на нашем производстве.
          </p>
          <MillingGallery />
        </div>
      </section>

      {/* Materials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Обрабатываемые материалы</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Фрезеруем все конструкционные металлы и пластики. Поможем подобрать материал под задачу.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((mat) => (
              <div
                key={mat.title}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                  <i className={`${mat.icon} text-brand text-2xl`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{mat.title}</h3>
                <p className="text-xs text-brand font-medium mb-3">{mat.grades}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{mat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-brand/5 border border-brand/20 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
              <i className="ri-question-line text-brand text-2xl" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900 font-semibold">Не нашли нужный материал?</p>
              <p className="text-gray-600 text-sm mt-1">
                Свяжитесь с нами — подберём поставщика и рассчитаем стоимость фрезерной обработки.
              </p>
            </div>
            <a
              href="#form"
              className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-brand-dark transition-colors whitespace-nowrap"
            >
              Уточнить
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </section>

      {/* Accuracy & Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Точность и контроль качества</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Гарантируем соответствие чертежу — от программирования станка до финальной приёмки.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {accuracyFeatures.map((feat) => (
              <div key={feat.title} className="bg-white border border-gray-100 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                  <i className={`${feat.icon} text-brand text-2xl`} />
                </div>
                <p className="text-2xl font-bold text-brand mb-1">{feat.value}</p>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Как мы работаем</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item) => (
              <div key={item.step} className="bg-dark-brand rounded-xl p-6">
                <span className="text-3xl font-bold text-brand/30 mb-3 block">{item.step}</span>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Рассчитайте стоимость фрезерных работ</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Отправьте заявку — мы подготовим коммерческое предложение с точной ценой и сроками
                в течение 2 часов. Приложите чертёж или 3D-модель.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <i className="ri-check-line text-brand text-lg" />
                  Расчёт стоимости за 2 часа
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <i className="ri-check-line text-brand text-lg" />
                  Единичные детали от 3 часов
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <i className="ri-check-line text-brand text-lg" />
                  Серийное производство от 50 деталей
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <i className="ri-check-line text-brand text-lg" />
                  Доставка по всей России
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-sm">
              <ContactFormBlock
                formId="milling-order"
                heading="Отправить заявку на расчёт"
                subheading="Заполните форму и мы свяжемся с вами в ближайшее время"
                fields={['name', 'phone', 'email', 'material', 'quantity', 'message']}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactFormBlock from '@/components/shared/ContactFormBlock';
import TurningEquipment from './TurningEquipment';
import TurningGallery from './TurningGallery';

export const metadata: Metadata = {
  title: 'Токарные работы с ЧПУ',
  description:
    'Токарная обработка деталей на станках с ЧПУ. Максимальные размеры L560 Ø380. Точность ±0.01 мм. Серийное и единичное производство. Расчёт за 2 часа.',
  openGraph: {
    title: 'Токарные работы с ЧПУ | Армада',
    description:
      'Токарная обработка металла на станках ЧПУ с точностью ±0.01 мм. Серийное производство от 50 деталей.',
    type: 'website',
    locale: 'ru_RU',
  },
};

const capabilities = [
  {
    icon: 'ri-cpu-line',
    title: 'Станки ЧПУ',
    desc: 'Современные токарные центры с числовым программным управлением для стабильного качества каждой детали в серии.',
  },
  {
    icon: 'ri-tools-line',
    title: 'Приводной инструмент',
    desc: 'Фрезерование, сверление и нарезка резьбы за один установ — сокращаем время и повышаем точность.',
  },
  {
    icon: 'ri-settings-3-line',
    title: 'Универсальные станки',
    desc: 'Для прототипов и нестандартных задач используем универсальное оборудование с ручным управлением.',
  },
  {
    icon: 'ri-file-search-line',
    title: 'Работа без чертежей',
    desc: 'Изготовим деталь по образцу, эскизу или 3D-модели. Поможем оформить чертёж при необходимости.',
  },
  {
    icon: 'ri-stack-line',
    title: 'Серийное производство',
    desc: 'Партии от 50 до 10 000 деталей с контролем качества каждой единицы. Стабильные сроки и цены.',
  },
  {
    icon: 'ri-timer-flash-line',
    title: 'Быстрые сроки',
    desc: 'Единичные детали — от 1 рабочего дня. Серийные заказы — от 5 рабочих дней в зависимости от сложности.',
  },
];

const materials = [
  {
    icon: 'ri-shield-line',
    title: 'Сталь',
    grades: 'Ст20, Ст45, 40Х, 40ХН, 30ХГСА',
    desc: 'Конструкционные и легированные стали для валов, осей, втулок и шестерён.',
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
    desc: 'Лёгкие сплавы для авиационной, приборостроительной и электротехнической отрасли.',
  },
  {
    icon: 'ri-copper-coin-line',
    title: 'Латунь',
    grades: 'ЛС59-1, Л63, ЛО62-1',
    desc: 'Латунные сплавы для арматуры, штуцеров, электроконтактов и декоративных элементов.',
  },
  {
    icon: 'ri-fire-line',
    title: 'Титан',
    grades: 'ВТ1-0, ВТ6, ВТ14',
    desc: 'Титановые сплавы для аэрокосмической отрасли, медицины и ответственных конструкций.',
  },
  {
    icon: 'ri-shape-line',
    title: 'Пластики',
    grades: 'Капролон, фторопласт, текстолит, полиацеталь',
    desc: 'Конструкционные пластики для направляющих, втулок, шестерён и изоляционных деталей.',
  },
];

const accuracyFeatures = [
  {
    icon: 'ri-focus-3-line',
    value: '±0.01 мм',
    title: 'Точность обработки',
    desc: 'Стабильная точность на всём тираже благодаря станкам с ЧПУ и калиброванному инструменту.',
  },
  {
    icon: 'ri-landscape-line',
    value: 'Ra 0.8',
    title: 'Шероховатость поверхности',
    desc: 'Чистовая обработка до Ra 0.8 без дополнительной шлифовки. Зеркальная полировка по запросу.',
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
    desc: 'Собственная лаборатория с координатно-измерительной машиной для сложных деталей.',
  },
];

const timeline = [
  {
    step: '01',
    title: 'Заявка',
    desc: 'Отправьте чертёж, эскиз или образец. Мы оценим сложность и уточним детали.',
  },
  {
    step: '02',
    title: 'Расчёт за 2 часа',
    desc: 'Подготовим коммерческое предложение с ценой и сроками изготовления.',
  },
  {
    step: '03',
    title: 'Производство',
    desc: 'Изготовим детали на станках ЧПУ с контролем качества на каждом этапе.',
  },
  {
    step: '04',
    title: 'Доставка по России',
    desc: 'Отправим транспортной компанией или курьерской службой в любой город.',
  },
];

export default function TurningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern-cnc-lathe-machine-in-industrial-workshop-with-metal-chips-flying-during-precision-turning-operation-close-up-view-of-rotating-workpiece-and-cutting-tool-professional-metalworking-environment-with-clean-background-high-tech-manufacturing-scene&width=1920&height=600&seq=turning-hero-001&orientation=landscape"
            alt="Токарная обработка на станке ЧПУ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-brand via-dark-brand/90 to-dark-brand/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <Breadcrumbs
            items={[
              { label: 'Услуги', href: '/services' },
              { label: 'Токарные работы с ЧПУ' },
            ]}
          />
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand/20 rounded-full text-brand text-sm font-medium mb-6">
              <i className="ri-settings-3-line" />
              L560 Ø380
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Токарные работы с ЧПУ
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Изготавливаем детали вращения любой сложности на токарных станках с ЧПУ. Валы, втулки,
              фланцы, шестерни — от единичных образцов до серий в тысячи штук. Точность обработки
              ±0.01 мм, шероховатость до Ra 0.8.
            </p>
            <a
              href="#form"
              className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-brand-dark transition-colors"
            >
              Рассчитать стоимость
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <TurningEquipment />

      {/* Capabilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Наши возможности</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Полный цикл токарной обработки — от простых деталей до сложных изделий с приводным инструментом.
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
            Токарные детали, изготовленные на нашем производстве.
          </p>
          <TurningGallery />
        </div>
      </section>

      {/* Materials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Обрабатываемые материалы</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Работаем со всеми конструкционными металлами и пластиками. Подберём оптимальный материал
            под вашу задачу.
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
                Свяжитесь с нами — подберём поставщика и рассчитаем стоимость обработки вашего материала.
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
            Гарантируем соответствие чертежу на каждом этапе — от наладки станка до финального контроля.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Рассчитайте стоимость токарных работ</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Отправьте заявку — мы подготовим коммерческое предложение с точной ценой и сроками
                в течение 2 часов. Приложите чертёж или опишите деталь.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <i className="ri-check-line text-brand text-lg" />
                  Расчёт стоимости за 2 часа
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <i className="ri-check-line text-brand text-lg" />
                  Единичные детали от 1 рабочего дня
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
                formId="turning-order"
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

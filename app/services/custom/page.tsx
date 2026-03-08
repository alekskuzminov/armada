import type { Metadata } from 'next';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import CustomHeroSection from './CustomHeroSection';

export const metadata: Metadata = {
  title: 'Изготовление деталей на заказ',
  description:
    'Изготовление деталей на заказ: единичные, средние и серийные партии. Токарная и фрезерная обработка на ЧПУ. Расчёт стоимости за 2 часа.',
  openGraph: {
    title: 'Изготовление деталей на заказ | Армада',
    description:
      'Производство деталей от 1 до 1000+ штук. ЧПУ обработка, точность ±0.01 мм.',
  },
};

const orderTypes = [
  {
    title: 'Единичные',
    range: '1-10 шт',
    icon: 'ri-tools-line',
    image:
      'https://readdy.ai/api/search-image?query=single%20precision%20CNC%20machined%20metal%20part%20custom%20manufactured%20component%20on%20white%20background%20professional%20product%20photography&width=600&height=400&seq=custom-single-001&orientation=landscape',
    features: [
      'Прототипирование',
      'Запасные части',
      'Нестандартные решения',
      'Без минимального заказа',
    ],
  },
  {
    title: 'Средние серии',
    range: '50-500 шт',
    icon: 'ri-stack-line',
    image:
      'https://readdy.ai/api/search-image?query=batch%20of%20identical%20CNC%20machined%20metal%20parts%20medium%20production%20run%20organized%20on%20workbench%20professional%20industrial%20photography&width=600&height=400&seq=custom-medium-001&orientation=landscape',
    features: [
      'Оптимальная цена за единицу',
      'Стабильное качество серии',
      'Отработанная технология',
      'Сроки от 5 рабочих дней',
    ],
  },
  {
    title: 'Серийное производство',
    range: '1000+ шт',
    icon: 'ri-building-2-line',
    image:
      'https://readdy.ai/api/search-image?query=large%20batch%20serial%20production%20CNC%20machined%20metal%20parts%20organized%20in%20rows%20industrial%20manufacturing%20floor%20professional%20photography&width=600&height=400&seq=custom-serial-001&orientation=landscape',
    features: [
      'Максимальная экономия',
      'Выделенная линия',
      'Контракт на регулярные поставки',
      'SPC контроль качества',
    ],
  },
];

const noDrawingsSteps = [
  {
    num: '01',
    title: 'Присылаете образец',
    desc: 'Передаёте деталь лично или курьером',
    icon: 'ri-send-plane-line',
  },
  {
    num: '02',
    title: 'Обмеряем и моделируем',
    desc: 'Создаём 3D-модель и чертёж по образцу',
    icon: 'ri-ruler-line',
  },
  {
    num: '03',
    title: 'Согласуем',
    desc: 'Утверждаете чертёж и параметры',
    icon: 'ri-check-double-line',
  },
  {
    num: '04',
    title: 'Изготавливаем',
    desc: 'Производим партию по утверждённой документации',
    icon: 'ri-settings-3-line',
  },
];

const noDrawingsInfo = [
  { icon: 'ri-time-line', text: 'Обмер и моделирование за 1-2 дня' },
  { icon: 'ri-money-dollar-circle-line', text: 'Стоимость моделирования включена в заказ' },
  { icon: 'ri-file-text-line', text: 'Передаём чертёж и 3D-модель клиенту' },
];

const processSteps = [
  { num: '01', title: 'Заявка', desc: 'Получаем чертёж или образец', icon: 'ri-file-list-line' },
  { num: '02', title: 'Расчёт', desc: 'Рассчитываем стоимость за 2 часа', icon: 'ri-calculator-line' },
  { num: '03', title: 'Согласование', desc: 'Утверждаем ТЗ и сроки', icon: 'ri-handshake-line' },
  { num: '04', title: 'Производство', desc: 'Изготавливаем на станках ЧПУ', icon: 'ri-cpu-line' },
  { num: '05', title: 'Контроль', desc: 'Проверяем каждую деталь', icon: 'ri-shield-check-line' },
  { num: '06', title: 'Отгрузка', desc: 'Доставляем по всей России', icon: 'ri-truck-line' },
];

const processStats = [
  { value: '±0.01', unit: 'мм', label: 'точность обработки' },
  { value: '2', unit: 'часа', label: 'на расчёт стоимости' },
  { value: '50+', unit: 'станков', label: 'с ЧПУ' },
  { value: '15', unit: 'лет', label: 'на рынке' },
];

const qualityStages = [
  {
    title: 'Входной контроль',
    desc: 'Проверяем сертификаты на материал, измеряем заготовки перед запуском в производство.',
    icon: 'ri-search-line',
  },
  {
    title: 'Операционный контроль',
    desc: 'Контроль размеров после каждой операции. Статистическое управление процессом (SPC) на серийных партиях.',
    icon: 'ri-settings-3-line',
  },
  {
    title: 'Выходной контроль',
    desc: 'Финальная проверка 100% деталей. Оформление протоколов измерений и сертификатов качества.',
    icon: 'ri-shield-check-line',
  },
];

const equipment = [
  { name: 'КИМ Hexagon', desc: 'Координатно-измерительная машина', icon: 'ri-crosshair-2-line' },
  { name: 'Профилометр', desc: 'Контроль шероховатости Ra', icon: 'ri-line-chart-line' },
  { name: 'Твердомер', desc: 'Измерение HRC, HB, HV', icon: 'ri-hammer-line' },
  { name: 'Микрометры', desc: 'Цифровые, класс точности 1', icon: 'ri-ruler-2-line' },
];

export default function CustomPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Услуги', href: '/services' },
            { label: 'Изготовление деталей на заказ' },
          ]}
        />
      </section>

      {/* Hero */}
      <CustomHeroSection />

      {/* Order Types */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
          Типы заказов
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Работаем с любыми объёмами — от единичного прототипа до серийного контракта
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {orderTypes.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
                    <i className={`${t.icon} text-brand text-xl`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{t.title}</h3>
                    <span className="text-sm text-brand font-semibold">{t.range}</span>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <i className="ri-check-line text-brand text-base flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* No Drawings */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://readdy.ai/api/search-image?query=engineer%20measuring%20metal%20part%20with%20caliper%20dark%20workshop%20background%20industrial%20quality%20control%20professional%20photography&width=1920&height=800&seq=custom-nodrawings-bg-001&orientation=landscape')",
          }}
        />
        <div className="absolute inset-0 bg-dark-brand/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-3 text-center">
            Работаем без чертежей
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Нет документации? Не проблема — обмерим образец, создадим чертёж и
            изготовим партию
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {noDrawingsSteps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 mx-auto bg-brand/20 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${s.icon} text-brand text-2xl`} />
                </div>
                <div className="text-xs text-brand font-semibold mb-1">Шаг {s.num}</div>
                <h3 className="text-white font-bold mb-1">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {noDrawingsInfo.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
              >
                <i className={`${item.icon} text-brand text-xl flex-shrink-0`} />
                <span className="text-gray-300 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
          Как мы работаем
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Прозрачный процесс от заявки до отгрузки готовых деталей
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {processSteps.map((s, i) => (
            <div key={s.num} className="relative text-center">
              <div className="w-12 h-12 mx-auto bg-brand/10 rounded-xl flex items-center justify-center mb-3">
                <i className={`${s.icon} text-brand text-xl`} />
              </div>
              <div className="text-xs text-brand font-semibold mb-1">{s.num}</div>
              <h3 className="text-gray-900 font-bold text-sm mb-1">{s.title}</h3>
              <p className="text-gray-500 text-xs">{s.desc}</p>
              {i < processSteps.length - 1 && (
                <i className="ri-arrow-right-line text-gray-300 absolute top-5 -right-3 hidden lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-dark-brand to-dark-brand-dark rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {processStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-white">
                {s.value}
                <span className="text-brand text-lg ml-1">{s.unit}</span>
              </div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Control */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Контроль качества
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Трёхступенчатая система контроля гарантирует соответствие каждой детали
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {qualityStages.map((stage) => (
              <div
                key={stage.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${stage.icon} text-brand text-xl`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{stage.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Измерительное оборудование
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {equipment.map((e) => (
              <div
                key={e.name}
                className="bg-white rounded-xl p-5 text-center shadow-sm"
              >
                <i className={`${e.icon} text-brand text-2xl mb-2 block`} />
                <div className="font-semibold text-gray-900 text-sm">{e.name}</div>
                <div className="text-gray-500 text-xs mt-1">{e.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-brand rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <i className="ri-shield-check-line text-white text-3xl" />
              <h3 className="text-2xl font-bold text-white">
                Гарантия на все изделия
              </h3>
            </div>
            <p className="text-white/90 max-w-xl mx-auto mb-6">
              Каждая партия сопровождается протоколом измерений. При обнаружении
              несоответствия — бесплатная переделка в приоритетном порядке.
            </p>
            <a
              href="#custom-hero-form"
              className="inline-flex items-center gap-2 bg-white text-brand px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Отправить заявку
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

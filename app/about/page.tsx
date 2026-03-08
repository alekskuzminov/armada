import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'О компании',
  description:
    'Армада — производственная компания, специализирующаяся на изготовлении деталей на станках с ЧПУ. Точность обработки ±0.005 мм, более 15 материалов, доставка по всей России.',
  openGraph: {
    title: 'О компании Армада',
    description:
      'Изготовление деталей на ЧПУ с точностью ±0.005 мм. Более 15 материалов, доставка по всей России.',
  },
};

const equipment = [
  {
    model: 'ML480',
    name: 'Токарный ЧПУ станок',
    desc: 'Обработка деталей диаметром до 480 мм. Высокая точность и стабильность при серийном производстве.',
    img: 'https://readdy.ai/api/search-image?query=CNC+lathe+machine+industrial+workshop&width=800&height=600&seq=1&orientation=landscape',
  },
  {
    model: 'ML-560S',
    name: 'Токарный ЧПУ станок',
    desc: 'Обработка деталей диаметром до 560 мм. Система ЧПУ Siemens, автоматическая подача.',
    img: 'https://readdy.ai/api/search-image?query=CNC+turning+machine+modern+factory&width=800&height=600&seq=2&orientation=landscape',
  },
  {
    model: 'SKM NL2000M',
    name: 'Фрезерный ЧПУ центр',
    desc: 'Трёхосевая фрезерная обработка. Рабочая зона 2000×800×600 мм.',
    img: 'https://readdy.ai/api/search-image?query=CNC+milling+center+3+axis+industrial&width=800&height=600&seq=3&orientation=landscape',
  },
  {
    model: 'SVM55',
    name: 'Вертикальный фрезерный центр',
    desc: 'Вертикальная фрезерная обработка с высокой скоростью шпинделя. Точность позиционирования ±0.005 мм.',
    img: 'https://readdy.ai/api/search-image?query=vertical+CNC+milling+machine+workshop&width=800&height=600&seq=4&orientation=landscape',
  },
  {
    model: 'SVL-1166',
    name: 'Токарный ЧПУ центр',
    desc: 'Обработка крупногабаритных деталей длиной до 1166 мм. Мощный привод главного шпинделя.',
    img: 'https://readdy.ai/api/search-image?query=large+CNC+lathe+heavy+duty+industrial&width=800&height=600&seq=5&orientation=landscape',
  },
  {
    model: 'Universal',
    name: 'Универсальный станок',
    desc: 'Гибкая настройка под разные типы операций. Подходит для единичного и мелкосерийного производства.',
    img: 'https://readdy.ai/api/search-image?query=universal+CNC+machine+tool+metalworking&width=800&height=600&seq=6&orientation=landscape',
  },
];

const advantages = [
  {
    icon: 'ri-settings-3-line',
    title: 'Высокоточное оборудование',
    desc: 'Современные станки с ЧПУ обеспечивают точность обработки до ±0.005 мм.',
  },
  {
    icon: 'ri-loop-left-line',
    title: 'Полный цикл производства',
    desc: 'От чертежа до готовой детали — все этапы под нашим контролем.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Контроль качества',
    desc: '100% контроль каждой партии. Измерительное оборудование Mitutoyo.',
  },
  {
    icon: 'ri-team-line',
    title: 'Опытные инженеры',
    desc: 'Команда с опытом более 10 лет в металлообработке и ЧПУ-программировании.',
  },
  {
    icon: 'ri-stack-line',
    title: 'Гибкие объёмы',
    desc: 'От прототипа до серии в 10 000+ деталей. Масштабируем производство под задачу.',
  },
  {
    icon: 'ri-archive-line',
    title: 'Материалы в наличии',
    desc: 'Более 15 видов металлов и пластиков на складе. Не нужно ждать поставку.',
  },
];

const stats = [
  { value: '±0.005 мм', label: 'Точность обработки' },
  { value: '2 часа', label: 'Расчёт стоимости' },
  { value: '15+', label: 'Материалов в наличии' },
  { value: '100%', label: 'Производство в России' },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[420px] flex items-center overflow-hidden bg-gradient-to-br from-dark-brand via-dark-brand-dark to-dark-brand">
        <img
          src="https://readdy.ai/api/search-image?query=modern+CNC+machining+factory+interior+with+machines&width=1920&height=1080&seq=1&orientation=landscape"
          alt="Производство Армада"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-brand/90 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            О компании <span className="text-brand">Армада</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Производственная компания, специализирующаяся на изготовлении
            деталей на станках с числовым программным управлением
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Надёжный партнёр в металлообработке
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Компания «Армада» — это современное производство, оснащённое
                станками с ЧПУ ведущих мировых производителей. Мы
                специализируемся на токарной и фрезерной обработке металлов и
                пластиков с точностью до ±0.005 мм.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Наша миссия — обеспечить российские предприятия качественными
                комплектующими в кратчайшие сроки. Мы работаем с заказчиками
                из машиностроения, приборостроения, нефтегазовой отрасли,
                энергетики и других направлений.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Собственный склад материалов, опытная команда инженеров и
                отлаженные процессы позволяют нам выполнять заказы любой
                сложности — от единичных прототипов до крупных серий.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=CNC+machine+operator+working+in+modern+factory&width=800&height=600&seq=7&orientation=landscape"
                  alt="Производственный цех Армада"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand text-white rounded-2xl p-6 shadow-xl">
                <span className="text-4xl font-bold block">10+</span>
                <span className="text-sm">лет на рынке</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наше оборудование
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Станочный парк включает современные токарные и фрезерные центры
              с ЧПУ, позволяющие выполнять обработку любой сложности
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item) => (
              <div
                key={item.model}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={`${item.model} — ${item.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-brand uppercase tracking-wide">
                    {item.model}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши преимущества
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Почему клиенты выбирают Армаду для производства деталей
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:bg-brand hover:border-brand transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <i
                    className={`${item.icon} text-2xl text-brand group-hover:text-white transition-colors`}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white/80 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-dark-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <span className="text-3xl md:text-4xl font-bold text-brand block mb-2">
                  {s.value}
                </span>
                <span className="text-sm text-gray-400">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-brand-dark transition-colors"
            >
              Связаться с нами
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

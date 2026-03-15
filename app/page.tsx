import Link from 'next/link';
import HeroSection from './(home)/HeroSection';
import ContactFormBlock from '@/components/shared/ContactFormBlock';

const advantages = [
  {
    icon: 'ri-time-line',
    title: 'Расчёт за 2 часа',
    desc: 'Оперативный расчёт стоимости и сроков по вашему чертежу или 3D-модели.',
  },
  {
    icon: 'ri-focus-3-line',
    title: 'Точность ±0.01 мм',
    desc: 'Высокоточная обработка на современных станках с числовым программным управлением.',
  },
  {
    icon: 'ri-stack-line',
    title: 'Серийное производство',
    desc: 'Выпуск партий от 1 до 10 000 деталей с полной повторяемостью параметров.',
  },
  {
    icon: 'ri-settings-3-line',
    title: 'Собственный парк ЧПУ',
    desc: '6 станков токарной и фрезерной группы. Полный цикл обработки на одной площадке.',
  },
  {
    icon: 'ri-file-text-line',
    title: 'Помощь с КД',
    desc: 'Поможем доработать конструкторскую документацию и подготовить чертежи к производству.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Гарантия сроков',
    desc: 'Фиксируем сроки в договоре. 98% заказов сдаём вовремя или раньше.',
  },
];

const services = [
  {
    title: 'Токарная обработка ЧПУ',
    desc: 'Изготовление тел вращения: валы, втулки, фланцы, оси, штуцеры. Обработка наружных и внутренних поверхностей, нарезка резьб, расточка отверстий.',
    icon: 'ri-clockwise-2-line',
    href: '/services/turning',
    image: 'https://buelifmopuduegur.begetcdn.cloud/images/home/turning-operations-preview.webp',
  },
  {
    title: 'Фрезерная обработка ЧПУ',
    desc: 'Обработка корпусных деталей, пластин, кронштейнов, крышек. 3-осевое фрезерование, обработка плоскостей, пазов, карманов и сложных контуров.',
    icon: 'ri-tools-line',
    href: '/services/milling',
    image: 'https://buelifmopuduegur.begetcdn.cloud/images/home/milling-preview.webp',
  },
  {
    title: 'Серийное производство',
    desc: 'Выпуск партий от 50 до 10 000 деталей. Стабильное качество, повторяемость размеров, оптимизация себестоимости за счёт серийной технологии.',
    icon: 'ri-stack-line',
    href: '/services/custom',
    image: 'https://buelifmopuduegur.begetcdn.cloud/images/home/сustom-made-parts.webp',
  },
];

const materials = [
  { name: 'Сталь', icon: 'ri-shield-line' },
  { name: 'Нержавеющая сталь', icon: 'ri-shield-star-line' },
  { name: 'Алюминий', icon: 'ri-box-3-line' },
  { name: 'Латунь', icon: 'ri-copper-coin-line' },
  { name: 'Титан', icon: 'ri-cpu-line' },
  { name: 'Пластик', icon: 'ri-shape-line' },
];

const equipment = [
  {
    name: 'ML480',
    type: 'Токарный станок с ЧПУ',
    specs: 'Макс. диаметр обработки 480 мм, длина 1000 мм',
    image: 'https://buelifmopuduegur.begetcdn.cloud/images/home/ML-480.webp',
  },
  {
    name: 'ML-560S',
    type: 'Токарный станок с ЧПУ',
    specs: 'Макс. диаметр обработки 560 мм, наклонная станина',
    image: 'https://buelifmopuduegur.begetcdn.cloud/images/home/ML-560S.webp',
  },
  {
    name: 'SKM NL2000M',
    type: 'Токарно-фрезерный центр',
    specs: 'Комплексная обработка, приводной инструмент, ось C',
    image: 'https://buelifmopuduegur.begetcdn.cloud/images/home/SKMC_SL2000M.webp',
  },
  {
    name: 'RT-210',
    type: 'Токарный обрабатывающий центр',
    specs: 'Макс. размер детали L450 Ø350 мм, шпиндель 4500 об/мин',
    image: 'https://buelifmopuduegur.begetcdn.cloud/images/home/RT-210.jpg',
  },
  {
    name: 'SVM55',
    type: 'Вертикальный фрезерный центр',
    specs: 'Рабочий стол 550×350 мм, 3 оси, шпиндель 8000 об/мин',
    image: 'https://buelifmopuduegur.begetcdn.cloud/images/home/SVM-55.jpg',
  },
  {
    name: 'SVL-1166',
    type: 'Вертикальный обрабатывающий центр',
    specs: 'Рабочий стол 1100×600 мм, высокая жёсткость, тяжёлые заготовки',
    image: 'https://buelifmopuduegur.begetcdn.cloud/images/home/SVL-1160.jpg',
  },
];

const exampleParts = [
  {
    src: 'https://readdy.ai/api/search-image?query=precision%20CNC%20machined%20aluminum%20housing%20component%20industrial%20part&width=300&height=300&seq=part001&orientation=square',
    alt: 'Корпус из алюминия',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=CNC%20turned%20steel%20shaft%20precision%20metal%20component%20polished&width=300&height=300&seq=part002&orientation=square',
    alt: 'Вал из стали',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=CNC%20milled%20titanium%20bracket%20precision%20machined%20part%20aerospace&width=300&height=300&seq=part003&orientation=square',
    alt: 'Кронштейн из титана',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=CNC%20machined%20brass%20fitting%20precision%20metal%20component%20threaded&width=300&height=300&seq=part004&orientation=square',
    alt: 'Штуцер из латуни',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Заявка и КД',
    desc: 'Вы отправляете чертёж, 3D-модель или эскиз. Принимаем любой формат: PDF, DWG, STEP, STP.',
  },
  {
    num: '02',
    title: 'Анализ и расчёт',
    desc: 'Технолог анализирует деталь, подбирает материал, оснастку и рассчитывает стоимость за 2 часа.',
  },
  {
    num: '03',
    title: 'Согласование',
    desc: 'Утверждаем ТЗ, сроки, стоимость. При необходимости помогаем доработать конструкторскую документацию.',
  },
  {
    num: '04',
    title: 'Производство',
    desc: 'Изготавливаем детали на станках с ЧПУ. Контролируем каждый этап обработки.',
  },
  {
    num: '05',
    title: 'Контроль качества',
    desc: 'Проверяем каждую деталь на измерительном оборудовании. Составляем протокол измерений.',
  },
  {
    num: '06',
    title: 'Доставка',
    desc: 'Упаковываем и отправляем транспортной компанией по всей России. Или самовывоз из Кирова.',
  },
];

const processStats = [
  { value: '500+', label: 'деталей в месяц' },
  { value: '150+', label: 'постоянных клиентов' },
  { value: '98%', label: 'заказов в срок' },
  { value: '100%', label: 'входной контроль' },
];

const finalBenefits = [
  'Расчёт стоимости за 2 часа',
  'Помощь с конструкторской документацией',
  'Производство от 1 детали',
  'Доставка по всей России',
  'Гарантия качества и сроков',
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы объединяем современное оборудование, опытную команду и чёткие процессы,
              чтобы вы получали детали точно в срок.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mb-5">
                  <i className={`${item.icon} text-2xl text-brand`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный цикл механической обработки металлов на станках с ЧПУ — от единичных
              деталей до серийного производства.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
                      <i className={`${svc.icon} text-xl text-brand`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{svc.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <span className="text-brand font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Подробнее
                    <i className="ri-arrow-right-line" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-dark-brand rounded-2xl p-8 lg:p-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Работаем с любыми материалами
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {materials.map((mat) => (
                <div
                  key={mat.name}
                  className="flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-xl py-5 px-3 hover:bg-white/10 transition-colors"
                >
                  <i className={`${mat.icon} text-2xl text-brand`} />
                  <span className="text-white text-sm font-medium text-center">{mat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Оборудование
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Собственный парк из 6 станков с ЧПУ, позволяющий выполнять токарные и
              фрезерные операции любой сложности.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {equipment.map((eq) => (
              <div
                key={eq.name}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={eq.image}
                    alt={eq.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{eq.name}</h3>
                  <p className="text-brand text-sm font-medium mb-2">{eq.type}</p>
                  <p className="text-gray-600 text-sm">{eq.specs}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Примеры изготовленных деталей
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {exampleParts.map((part) => (
                <div
                  key={part.alt}
                  className="rounded-xl overflow-hidden shadow-sm border border-gray-100 group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={part.src}
                      alt={part.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-sm font-medium text-gray-900">{part.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Как мы работаем
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Понятный и отлаженный процесс — от заявки до получения готовых деталей.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {processSteps.map((step) => (
              <div key={step.num} className="relative">
                <div className="text-6xl font-bold text-brand/10 absolute -top-2 -left-1 select-none">
                  {step.num}
                </div>
                <div className="relative pt-8 pl-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-dark-brand rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {processStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-brand mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Form */}
      <section id="final-form" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Получите расчёт стоимости
              </h2>
              <p className="text-gray-600 mb-8">
                Отправьте чертёж или опишите задачу — рассчитаем стоимость и сроки за 2 часа.
                Работаем с юридическими и физическими лицами.
              </p>

              <ul className="space-y-4 mb-10">
                {finalBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-brand/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-check-line text-brand text-sm" />
                    </div>
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Контактная информация</h3>
                <div className="flex items-center gap-3">
                  <i className="ri-phone-line text-brand text-lg" />
                  <div>
                    <a
                      href="tel:+74957890054"
                      className="text-gray-900 font-medium hover:text-brand transition-colors"
                    >
                      +7 (495) 789-00-54
                    </a>
                    <p className="text-gray-500 text-sm">Пн-Пт с 9 до 20</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-mail-line text-brand text-lg" />
                  <a
                    href="mailto:armadaprom@mail.ru"
                    className="text-gray-900 hover:text-brand transition-colors"
                  >
                    armadaprom@mail.ru
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-map-pin-line text-brand text-lg" />
                  <span className="text-gray-700">г. Киров, пер. Химический, д.1</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ContactFormBlock
                formId="final-form-main"
                heading="Отправить заявку на расчёт"
                subheading="Заполните форму — мы свяжемся в течение 2 часов"
                fields={[
                  'name',
                  'phone',
                  'email',
                  'company',
                  'quantity',
                  'material',
                  'deadline',
                  'message',
                  'file',
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

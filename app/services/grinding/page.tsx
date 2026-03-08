import type { Metadata } from 'next';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import Gallery, { type GalleryImage } from '@/components/shared/Gallery';
import ContactFormBlock from '@/components/shared/ContactFormBlock';

export const metadata: Metadata = {
  title: 'Шлифовальные работы',
  description:
    'Шлифование деталей: круглое, плоское, внутреннее, профильное. Точность Ra 0,2. Армада — профессиональные шлифовальные работы по металлу.',
  openGraph: {
    title: 'Шлифовальные работы | Армада',
    description:
      'Круглое, плоское, внутреннее, профильное шлифование. Точность до Ra 0,2.',
  },
};

const galleryImages: GalleryImage[] = [
  {
    src: 'https://readdy.ai/api/search-image?query=cylindrical%20grinding%20steel%20shaft%20precision%20machining%20industrial%20component%20close-up%20dark%20background%20professional%20photography&width=800&height=600&seq=grinding-gallery-001&orientation=landscape',
    alt: 'Шлифовка цилиндрического вала',
    title: 'Шлифовка цилиндрического вала',
    desc: 'Круглое шлифование, Ra 0,4, допуск h6. Обработка посадочных поверхностей под подшипники.',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=surface%20grinding%20flat%20metal%20workpiece%20precision%20machining%20industrial%20close-up%20dark%20background%20professional%20photography&width=800&height=600&seq=grinding-gallery-002&orientation=landscape',
    alt: 'Плоскошлифовальная обработка',
    title: 'Плоскошлифовальная обработка',
    desc: 'Плоское шлифование, отклонение от плоскостности 0,01 мм. Финишная обработка базовых поверхностей.',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=internal%20bore%20grinding%20precision%20hole%20metal%20part%20industrial%20close-up%20dark%20background%20professional%20photography&width=800&height=600&seq=grinding-gallery-003&orientation=landscape',
    alt: 'Шлифовка внутреннего отверстия',
    title: 'Шлифовка внутреннего отверстия',
    desc: 'Внутреннее шлифование, Ra 0,8, допуск H7. Обработка отверстий от 20 мм.',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=profile%20grinding%20gear%20tooth%20precision%20machining%20industrial%20component%20close-up%20dark%20background%20professional%20photography&width=800&height=600&seq=grinding-gallery-004&orientation=landscape',
    alt: 'Профильное шлифование шестерни',
    title: 'Профильное шлифование шестерни',
    desc: 'Фасонное шлифование, класс точности 6. Шлифование профиля зубьев по ГОСТ.',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=grinding%20hardened%20steel%20punch%20die%20tool%20precision%20machining%20industrial%20close-up%20dark%20background%20professional%20photography&width=800&height=600&seq=grinding-gallery-005&orientation=landscape',
    alt: 'Шлифовка пуансона после закалки',
    title: 'Шлифовка пуансона после закалки',
    desc: 'Шлифование закалённой стали HRC 58-62, Ra 0,2. Обработка инструментальной оснастки.',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=face%20grinding%20flange%20end%20surface%20precision%20machining%20industrial%20close-up%20dark%20background%20professional%20photography&width=800&height=600&seq=grinding-gallery-006&orientation=landscape',
    alt: 'Торцевое шлифование фланца',
    title: 'Торцевое шлифование фланца',
    desc: 'Торцевое шлифование, перпендикулярность 0,005 мм. Обработка привалочных поверхностей.',
  },
];

export default function GrindingPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Услуги', href: '/services' },
            { label: 'Шлифовальные работы' },
          ]}
        />
      </section>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Шлифовальные работы
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              Выполняем все виды шлифовальных работ: круглое наружное и внутреннее
              шлифование, плоское шлифование, профильное и бесцентровое. Современные
              станки с ЧПУ обеспечивают стабильную точность при серийной обработке.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Работаем с закалёнными сталями до HRC 65, нержавеющими сталями,
              цветными металлами. Шероховатость поверхности от Ra 0,2.
              Контроль размеров на каждой партии.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Круглое шлифование — допуск h6',
                'Плоское шлифование — отклонение 0,01 мм',
                'Внутреннее шлифование — допуск H7',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <i className="ri-check-line text-brand text-lg" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#grinding-form"
              className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-brand-dark transition-colors"
            >
              Оставить заявку
              <i className="ri-arrow-right-line" />
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://readdy.ai/api/search-image?query=industrial%20surface%20grinding%20machine%20sparks%20flying%20metal%20workpiece%20precision%20grinding%20wheel%20close-up%20manufacturing%20plant%20professional%20industrial%20photography%20bright%20orange%20sparks%20dark%20background%20steel%20processing&width=800&height=760&seq=grinding-hero-001&orientation=landscape"
              alt="Шлифовальные работы на станке с ЧПУ"
              className="w-full h-auto object-cover"
              width={800}
              height={760}
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Примеры выполненных работ
        </h2>
        <Gallery images={galleryImages} layout="sidebyside" />
      </section>

      {/* Form */}
      <section id="grinding-form" className="bg-dark-brand">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <ContactFormBlock
            formId="grinding-form"
            heading="Заказать шлифовальные работы"
            subheading="Укажите параметры деталей — мы подберём оптимальный метод шлифования"
            variant="dark"
            fields={['name', 'phone', 'message']}
          />
        </div>
      </section>
    </>
  );
}

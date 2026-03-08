import type { Metadata } from 'next';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import Gallery, { type GalleryImage } from '@/components/shared/Gallery';
import ContactFormBlock from '@/components/shared/ContactFormBlock';

export const metadata: Metadata = {
  title: 'Термообработка',
  description:
    'Термическая обработка деталей: закалка, отжиг, нормализация, цементация. Максимальный размер 400×500×500 мм. Армада — профессиональная термообработка металла.',
  openGraph: {
    title: 'Термообработка | Армада',
    description:
      'Закалка, отжиг, нормализация, цементация деталей. Размер до 400×500×500 мм.',
  },
};

const galleryImages: GalleryImage[] = [
  {
    src: 'https://readdy.ai/api/search-image?query=rectangular%20metal%20part%20after%20heat%20treatment%20industrial%20steel%20component%20close-up%20professional%20metallurgy%20photography%20dark%20background&width=800&height=600&seq=heat-gallery-001&orientation=landscape',
    alt: 'Деталь прямоугольного профиля',
    title: 'Деталь прямоугольного профиля',
    desc: 'Сталь 40Х после ГОСТ 8479-70. Закалка с последующим высоким отпуском, твёрдость HRC 28-32. Контроль твёрдости по всей поверхности.',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=oval%20shaped%20metal%20part%20after%20surface%20heat%20treatment%20industrial%20precision%20component%20dark%20background%20professional%20photography&width=800&height=600&seq=heat-gallery-002&orientation=landscape',
    alt: 'Деталь овального профиля',
    title: 'Деталь овального профиля',
    desc: 'Термическая обработка поверхности. Поверхностная закалка ТВЧ на глубину 1,5–2 мм. Сердцевина сохраняет вязкость.',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=hardened%20steel%20gear%20after%20quenching%20heat%20treatment%20industrial%20metal%20component%20close-up%20dark%20background%20professional%20photography&width=800&height=600&seq=heat-gallery-003&orientation=landscape',
    alt: 'Шестерня после закалки',
    title: 'Шестерня после закалки',
    desc: 'Закалка ТВЧ, твёрдость HRC 52-56. Равномерная закалка зубьев с сохранением геометрии.',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=steel%20shaft%20after%20annealing%20heat%20treatment%20industrial%20metal%20precision%20component%20close-up%20dark%20background%20professional%20photography&width=800&height=600&seq=heat-gallery-004&orientation=landscape',
    alt: 'Вал после отжига',
    title: 'Вал после отжига',
    desc: 'Нормализация, снятие внутренних напряжений. Равномерная структура по всему сечению вала.',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=steel%20flange%20after%20carburizing%20cementation%20heat%20treatment%20industrial%20component%20close-up%20dark%20background%20professional%20photography&width=800&height=600&seq=heat-gallery-005&orientation=landscape',
    alt: 'Фланец после цементации',
    title: 'Фланец после цементации',
    desc: 'Цементация, глубина слоя 0,8–1,2 мм. Поверхностная твёрдость HRC 58-62 при вязкой сердцевине.',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=steel%20bushing%20sleeve%20after%20tempering%20heat%20treatment%20industrial%20component%20close-up%20dark%20background%20professional%20photography&width=800&height=600&seq=heat-gallery-006&orientation=landscape',
    alt: 'Втулка после отпуска',
    title: 'Втулка после отпуска',
    desc: 'Высокий отпуск, улучшение вязкости. Оптимальное сочетание прочности и пластичности.',
  },
];

export default function HeatTreatmentPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Услуги', href: '/services' },
            { label: 'Термообработка' },
          ]}
        />
      </section>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Термообработка
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              Выполняем полный спектр термической обработки деталей: закалку, отпуск,
              отжиг, нормализацию и цементацию. Собственные камерные и шахтные печи
              с программируемым контролем температуры обеспечивают точное соблюдение
              режимов обработки для каждой марки стали.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Работаем со всеми конструкционными и инструментальными сталями.
              Контроль твёрдости на каждом этапе — от входного до финального.
            </p>
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-5 py-3 mb-6 w-fit">
              <i className="ri-expand-diagonal-line text-brand text-xl" />
              <span className="text-gray-800 font-medium">
                Максимальный размер деталей:{' '}
                <span className="text-brand font-bold">400×500×500 мм</span>
              </span>
            </div>
            <a
              href="#heat-form"
              className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-brand-dark transition-colors"
            >
              Оставить заявку
              <i className="ri-arrow-right-line" />
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://readdy.ai/api/search-image?query=industrial%20heat%20treatment%20furnace%20glowing%20orange%20red%20hot%20metal%20parts%20inside%20high%20temperature%20oven%20steel%20components%20thermal%20processing%20manufacturing%20plant%20dramatic%20fire%20glow%20professional%20industrial%20photography&width=800&height=760&seq=heat-hero-001&orientation=landscape"
              alt="Промышленная термообработка деталей"
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
      <section id="heat-form" className="bg-dark-brand">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <ContactFormBlock
            formId="heat-treatment-form"
            heading="Заказать термообработку"
            subheading="Опишите детали и требования — мы подберём оптимальный режим обработки"
            variant="dark"
            fields={['name', 'phone', 'message']}
          />
        </div>
      </section>
    </>
  );
}

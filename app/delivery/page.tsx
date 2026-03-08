import type { Metadata } from 'next';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactFormBlock from '@/components/shared/ContactFormBlock';

export const metadata: Metadata = {
  title: 'Доставка и оплата',
  description:
    'Доставка деталей по всей России транспортными компаниями СДЭК, ПЭК, Деловые линии и другими. Оплата картой, безналичным расчётом или наличными.',
  openGraph: {
    title: 'Доставка и оплата — Армада',
    description:
      'Доставка по всей России. Оплата картой, безналичным расчётом, наличными.',
  },
};

const carriers = [
  { name: 'СДЭК', icon: 'ri-truck-line', accent: 'bg-green-600' },
  { name: 'Почта России', icon: 'ri-mail-send-line', accent: 'bg-blue-700' },
  { name: 'ПЭК', icon: 'ri-truck-line', accent: 'bg-orange-600' },
  { name: 'Деловые линии', icon: 'ri-truck-line', accent: 'bg-yellow-600' },
  { name: 'DHL', icon: 'ri-global-line', accent: 'bg-red-600' },
  { name: 'FedEx', icon: 'ri-global-line', accent: 'bg-purple-700' },
];

const paymentMethods = [
  {
    icon: 'ri-bank-card-line',
    title: 'Банковская карта',
    desc: 'Оплата картой Visa, MasterCard, МИР через защищённый платёжный шлюз.',
  },
  {
    icon: 'ri-file-text-line',
    title: 'Безналичный расчёт',
    desc: 'Оплата по счёту для юридических лиц. НДС включён. Закрывающие документы.',
  },
  {
    icon: 'ri-money-ruble-circle-line',
    title: 'Наличные',
    desc: 'Оплата наличными при получении заказа на нашем производстве в Кирове.',
  },
  {
    icon: 'ri-bill-line',
    title: 'Счёт на оплату',
    desc: 'Выставим счёт в течение часа. Предоплата 50% или 100% — по договорённости.',
  },
];

export default function DeliveryPage() {
  return (
    <>
      <section className="bg-white pt-8 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Доставка и оплата' }]} />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Доставка и оплата
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Отправляем готовые детали по всей России транспортными
                компаниями. Подберём оптимальный способ доставки и согласуем
                удобные условия оплаты.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://readdy.ai/api/search-image?query=package+delivery+logistics+warehouse+shipping&width=800&height=500&seq=9&orientation=landscape"
                alt="Доставка деталей"
                className="w-full h-[340px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Доставка по России
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Сотрудничаем с ведущими транспортными компаниями России и
                  мира. Стоимость и сроки доставки зависят от габаритов, веса
                  и удалённости пункта назначения.
                </p>
                <p>
                  Для крупногабаритных заказов организуем доставку на
                  специализированном транспорте с надёжной упаковкой и
                  страхованием груза.
                </p>
                <p>
                  Самовывоз с нашего производства в Кирове — бесплатно.
                  Поможем с погрузкой.
                </p>
              </div>
              <div className="mt-8 p-4 bg-brand/5 border border-brand/20 rounded-xl">
                <div className="flex gap-3 items-start">
                  <i className="ri-information-line text-brand text-xl mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Точную стоимость доставки рассчитаем после оформления
                    заказа. Для срочных отправок доступна экспресс-доставка.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Транспортные компании
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {carriers.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                  >
                    <div
                      className={`w-10 h-10 ${c.accent} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <i className={`${c.icon} text-white text-lg`} />
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Способы оплаты
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Предлагаем удобные варианты оплаты для физических и юридических
              лиц
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((m) => (
              <div
                key={m.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${m.icon} text-2xl text-brand`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {m.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-dark-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Нужна консультация?
              </h2>
              <p className="text-gray-400">
                Оставьте заявку — менеджер свяжется с вами и поможет выбрать
                оптимальный способ доставки и оплаты
              </p>
            </div>
            <ContactFormBlock
              formId="delivery-consultation"
              heading=""
              variant="dark"
              fields={['name', 'phone', 'message']}
            />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import ContactFormBlock from '@/components/shared/ContactFormBlock';

export const metadata: Metadata = {
  title: 'Контакты',
  description:
    'Свяжитесь с компанией Армада: телефон, email, адрес производства в Кирове. Отправьте заявку на расчёт стоимости изготовления деталей.',
  openGraph: {
    title: 'Контакты — Армада',
    description:
      'Телефон, email, адрес производства в Кирове. Заявка на расчёт стоимости.',
  },
};

const contactCards = [
  {
    icon: 'ri-phone-line',
    title: 'Телефон',
    lines: [
      { text: '+7 (8332) 45-67-89', href: 'tel:+78332456789' },
      { text: '+7 (912) 345-67-89', href: 'tel:+79123456789' },
    ],
    note: 'Пн–Пт: 08:00–18:00',
  },
  {
    icon: 'ri-mail-line',
    title: 'Email',
    lines: [
      { text: 'info@armada-cnc.ru', href: 'mailto:info@armada-cnc.ru' },
      { text: 'zakaz@armada-cnc.ru', href: 'mailto:zakaz@armada-cnc.ru' },
    ],
    note: 'Ответим в течение 2 часов',
  },
  {
    icon: 'ri-map-pin-line',
    title: 'Адрес',
    lines: [
      { text: 'г. Киров, ул. Производственная, 15', href: undefined },
      { text: 'Производственный корпус №2', href: undefined },
    ],
    note: 'Есть парковка для клиентов',
  },
  {
    icon: 'ri-message-3-line',
    title: 'Мессенджеры',
    lines: [
      { text: 'WhatsApp', href: 'https://wa.me/79123456789' },
      { text: 'Telegram', href: 'https://t.me/armada_cnc' },
    ],
    note: 'Быстрый ответ в рабочее время',
  },
];

const mapInfoCards = [
  {
    icon: 'ri-parking-box-line',
    title: 'Парковка',
    text: 'Бесплатная парковка для клиентов перед главным входом.',
  },
  {
    icon: 'ri-bus-line',
    title: 'Общественный транспорт',
    text: 'Автобусы №12, №25 — остановка «Производственная». 5 минут пешком.',
  },
  {
    icon: 'ri-time-line',
    title: 'График работы',
    text: 'Пн–Пт: 08:00–18:00. Сб: 09:00–14:00. Вс: выходной.',
  },
];

export default function ContactsPage() {
  return (
    <>
      <section className="relative min-h-[360px] flex items-center overflow-hidden bg-gradient-to-br from-dark-brand via-dark-brand-dark to-dark-brand">
        <img
          src="https://readdy.ai/api/search-image?query=industrial+factory+office+building+exterior&width=1920&height=800&seq=8&orientation=landscape"
          alt="Офис Армада"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-brand/90 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Контакты
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Свяжитесь с нами удобным способом или посетите наше производство
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${card.icon} text-2xl text-brand`} />
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  {card.title}
                </h2>
                <div className="space-y-1 mb-3">
                  {card.lines.map((line) =>
                    line.href ? (
                      <a
                        key={line.text}
                        href={line.href}
                        className="block text-sm text-gray-700 hover:text-brand transition-colors"
                      >
                        {line.text}
                      </a>
                    ) : (
                      <p key={line.text} className="text-sm text-gray-700">
                        {line.text}
                      </p>
                    )
                  )}
                </div>
                <p className="text-xs text-gray-500">{card.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Как нас найти
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115726.97562028805!2d49.5683!3d58.5966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43d92f4979c4b64f%3A0x42c3e39a797bc89a!2z0JrQuNGA0L7Qsg!5e0!3m2!1sru!2sru!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Армада на карте"
              className="w-full"
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {mapInfoCards.map((card) => (
              <div
                key={card.title}
                className="flex gap-4 items-start bg-white rounded-xl p-5 border border-gray-100"
              >
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className={`${card.icon} text-xl text-brand`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Напишите нам
              </h2>
              <p className="text-gray-600">
                Оставьте заявку и мы свяжемся с вами в течение 2 рабочих часов
              </p>
            </div>
            <ContactFormBlock
              formId="contacts-form"
              heading=""
              fields={['name', 'phone', 'email', 'message']}
            />
          </div>
        </div>
      </section>
    </>
  );
}

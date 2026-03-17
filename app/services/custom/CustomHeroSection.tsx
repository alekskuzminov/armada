'use client';

import ContactFormBlock from '@/components/shared/ContactFormBlock';

const stats = [
  { value: '1-10', label: 'единичные', icon: 'ri-tools-line' },
  { value: '50-500', label: 'средние серии', icon: 'ri-stack-line' },
  { value: '1000+', label: 'серийные', icon: 'ri-building-2-line' },
];

const checks = [
  'Расчёт стоимости за 24 часа',
  'Точность обработки ±0.01 мм',
  'Любые марки стали и цветных металлов',
];

export default function CustomHeroSection() {
  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=modern%20industrial%20CNC%20manufacturing%20facility%20with%20multiple%20precision%20machines%20working%20on%20metal%20parts%20in%20a%20clean%20organized%20production%20floor%20with%20bright%20lighting%20and%20professional%20atmosphere%20showing%20serial%20production%20capabilities%20industrial%20photography%20style&width=1920&height=1080&seq=custom-hero-bg-001&orientation=landscape')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-brand/95 via-dark-brand/85 to-dark-brand/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Изготовление деталей
              <br />
              на заказ
            </h1>

            <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
              Производим детали любой сложности по чертежам или образцам.
              От единичных экземпляров до серий свыше 1000 штук.
              Токарная и фрезерная обработка на станках с ЧПУ.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
                >
                  <i className={`${s.icon} text-brand text-2xl mb-2 block`} />
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <ul className="space-y-3">
              {checks.map((text) => (
                <li key={text} className="flex items-center gap-3 text-gray-200">
                  <i className="ri-check-line text-brand text-lg flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-dark-brand/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8">
            <ContactFormBlock
              formId="custom-hero-form"
              heading="Рассчитать стоимость"
              subheading="Заполните форму — ответим в течение 24 часов"
              variant="dark"
              fields={['name', 'phone', 'email', 'quantity', 'material', 'message']}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

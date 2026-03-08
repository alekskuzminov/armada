'use client';

import { useState } from 'react';

const machines = [
  {
    name: 'ML480',
    image:
      'https://readdy.ai/api/search-image?query=industrial-cnc-lathe-machine-ML480-metalworking-equipment-in-clean-factory-setting-professional-photography&width=600&height=400&seq=turning-eq-001&orientation=landscape',
    specs: [
      { label: 'Макс. диаметр обработки', value: '480 мм' },
      { label: 'Макс. длина обработки', value: '1000 мм' },
      { label: 'Частота вращения шпинделя', value: '50–3000 об/мин' },
      { label: 'Мощность главного привода', value: '11 кВт' },
      { label: 'Точность позиционирования', value: '±0.005 мм' },
    ],
  },
  {
    name: 'ML-560S',
    image:
      'https://readdy.ai/api/search-image?query=heavy-duty-cnc-lathe-ML560S-industrial-metalworking-machine-professional-workshop&width=600&height=400&seq=turning-eq-002&orientation=landscape',
    specs: [
      { label: 'Макс. диаметр обработки', value: '560 мм' },
      { label: 'Макс. длина обработки', value: '1500 мм' },
      { label: 'Частота вращения шпинделя', value: '35–2500 об/мин' },
      { label: 'Мощность главного привода', value: '15 кВт' },
      { label: 'Точность позиционирования', value: '±0.005 мм' },
    ],
  },
  {
    name: 'SKM NL2000M',
    image:
      'https://readdy.ai/api/search-image?query=modern-cnc-turning-center-NL2000M-with-live-tooling-industrial-equipment-professional-photo&width=600&height=400&seq=turning-eq-003&orientation=landscape',
    specs: [
      { label: 'Макс. диаметр обработки', value: '380 мм' },
      { label: 'Макс. длина обработки', value: '560 мм' },
      { label: 'Частота вращения шпинделя', value: '50–4000 об/мин' },
      { label: 'Мощность главного привода', value: '18.5 кВт' },
      { label: 'Приводной инструмент', value: 'да' },
      { label: 'Точность позиционирования', value: '±0.003 мм' },
    ],
  },
];

export default function TurningEquipment() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Наше оборудование</h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Станочный парк укомплектован современными токарными станками с ЧПУ, позволяющими выполнять
          обработку деталей любой сложности.
        </p>

        <div className="space-y-4">
          {machines.map((machine, idx) => (
            <div key={machine.name} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <i className="ri-settings-3-line text-brand text-xl" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{machine.name}</span>
                </div>
                <i
                  className={`ri-arrow-down-s-line text-2xl text-gray-400 transition-transform duration-300 ${
                    expanded === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  expanded === idx ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-lg overflow-hidden h-56 bg-gray-100">
                      <img
                        src={machine.image}
                        alt={machine.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <table className="w-full text-sm">
                        <tbody>
                          {machine.specs.map((spec) => (
                            <tr key={spec.label} className="border-b border-gray-100 last:border-0">
                              <td className="py-2.5 text-gray-500 pr-4">{spec.label}</td>
                              <td className="py-2.5 text-gray-900 font-medium text-right">{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-dark-brand rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-brand/20 flex items-center justify-center flex-shrink-0">
            <i className="ri-ruler-line text-brand text-2xl" />
          </div>
          <div>
            <p className="text-white font-semibold text-lg">
              Максимальные габариты: 560мм длина, Ø380мм диаметр
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Обрабатываем заготовки в пределах указанных размеров с высокой точностью
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

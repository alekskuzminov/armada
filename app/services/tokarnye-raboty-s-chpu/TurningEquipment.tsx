'use client';

import { useState } from 'react';

const machines = [
  {
    name: 'ML480',
    fullName: 'Токарный обрабатывающий центр, модель ML480',
    image: 'https://buelifmopuduegur.begetcdn.cloud/images/home/ML-480.webp',
    specs: [
      { label: 'Макс. размер обрабатываемой детали', value: 'L480 Ø300' },
      { label: 'Макс. диаметр прутка, мм', value: '51' },
      { label: 'Мощность привода шпинделя', value: '11 кВт' },
      { label: 'Скорость вращения шпинделя', value: '4500 об/мин' },
      { label: 'Кол-во осей обработки ЧПУ', value: '2' },
    ],
  },
  {
    name: 'ML-560S',
    fullName: 'Токарный обрабатывающий центр, модель ML-560S',
    image: 'https://buelifmopuduegur.begetcdn.cloud/images/home/ML-560S.webp',
    specs: [
      { label: 'Макс. размер обрабатываемой детали', value: 'L560 Ø320' },
      { label: 'Макс. диаметр прутка, мм', value: '52' },
      { label: 'Мощность привода шпинделя', value: '11 кВт' },
      { label: 'Скорость вращения шпинделя', value: '4500 об/мин' },
      { label: 'Кол-во осей обработки ЧПУ', value: '2' },
    ],
  },
  {
    name: 'SKM NL2000M',
    fullName: 'Токарный обрабатывающий центр с приводным инструментом, модель SKM NL2000M',
    image: 'https://buelifmopuduegur.begetcdn.cloud/images/home/SKMC_SL2000M.webp',
    specs: [
      { label: 'Макс. размер обрабатываемой детали', value: 'L540 Ø381' },
      { label: 'Макс. диаметр прутка, мм', value: '67' },
      { label: 'Мощность привода шпинделя', value: '18,5 кВт' },
      { label: 'Скорость вращения шпинделя', value: '4500 об/мин' },
      { label: 'Кол-во осей обработки ЧПУ', value: '4' },
    ],
  },
  {
    name: 'RT-210',
    fullName: 'Токарный обрабатывающий центр, модель RT210',
    image: 'https://buelifmopuduegur.begetcdn.cloud/images/home/RT-210.jpg',
    specs: [
      { label: 'Макс. размер обрабатываемой детали', value: 'L450 Ø350' },
      { label: 'Макс. диаметр прутка, мм', value: '51' },
      { label: 'Мощность привода шпинделя', value: '11 кВт' },
      { label: 'Скорость вращения шпинделя', value: '4500 об/мин' },
      { label: 'Кол-во осей обработки ЧПУ', value: '2' },
    ],
  },
];

const VISIBLE = 3;
const MAX_INDEX = machines.length - VISIBLE;

export default function TurningEquipment() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, MAX_INDEX));

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Наше оборудование</h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Станочный парк укомплектован современными токарными станками с ЧПУ, позволяющими выполнять
          обработку деталей любой сложности.
        </p>

        <div className="relative">
          {/* Prev */}
          <button
            onClick={prev}
            disabled={index === 0}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <i className="ri-arrow-left-s-line text-xl" />
          </button>

          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-6"
              style={{ transform: `translateX(calc(-${index} * (100% / ${VISIBLE} + ${(index * 24) / VISIBLE}px)))` }}
            >
              {machines.map((machine) => (
                <div
                  key={machine.name}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm flex-shrink-0 flex flex-col"
                  style={{ width: `calc((100% - ${(VISIBLE - 1) * 24}px) / ${VISIBLE})` }}
                >
                  <div className="h-52 flex items-center justify-center p-4">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="px-5 pb-6 pt-4 flex flex-col flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-4 leading-snug">
                      {machine.fullName}
                    </h3>
                    <table className="w-full text-sm flex-1">
                      <tbody>
                        {machine.specs.map((spec) => (
                          <tr key={spec.label} className="border-b border-gray-100 last:border-0">
                            <td className="py-2 text-gray-500 pr-3 leading-tight">{spec.label}</td>
                            <td className="py-2 text-gray-900 font-medium text-right whitespace-nowrap">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <button className="mt-5 w-full bg-brand hover:bg-brand/90 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
                      Оставить заявку
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={index === MAX_INDEX}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <i className="ri-arrow-right-s-line text-xl" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: MAX_INDEX + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-brand' : 'bg-gray-300'}`}
            />
          ))}
        </div>

        <div className="mt-8 bg-dark-brand rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-brand/20 flex items-center justify-center flex-shrink-0">
            <i className="ri-ruler-line text-brand text-2xl" />
          </div>
          <div>
            <p className="text-white font-semibold text-lg">
              Максимальные габариты: 560мм длина, Ø381мм диаметр
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

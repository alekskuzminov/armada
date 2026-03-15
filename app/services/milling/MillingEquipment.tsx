const machines = [
  {
    name: 'SVM55',
    fullName: 'Вертикально-фрезерный обрабатывающий центр, модель SVM55',
    image: 'https://buelifmopuduegur.begetcdn.cloud/images/home/SVM-55.jpg',
    specs: [
      { label: 'Макс. размер обрабатываемой детали, мм', value: '550×410×460' },
      { label: 'Мощность привода шпинделя', value: '7,5 кВт' },
      { label: 'Скорость вращения шпинделя', value: '8000 об/мин' },
      { label: 'Кол-во осей обработки ЧПУ', value: '3' },
    ],
  },
  {
    name: 'SVL-1166',
    fullName: 'Вертикально-фрезерный обрабатывающий центр, модель SVL-1166',
    image: 'https://buelifmopuduegur.begetcdn.cloud/images/home/SVL-1160.jpg',
    specs: [
      { label: 'Макс. размер обрабатываемой детали, мм', value: '1000×620×600' },
      { label: 'Мощность привода шпинделя', value: '11 кВт' },
      { label: 'Скорость вращения шпинделя', value: '11000 об/мин' },
      { label: 'Кол-во осей обработки ЧПУ', value: '4' },
    ],
  },
];

export default function MillingEquipment() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Наше оборудование</h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Фрезерный парк оснащён вертикальными обрабатывающими центрами с ЧПУ для обработки корпусных
          деталей и сложных поверхностей.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {machines.map((machine) => (
            <div key={machine.name} className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col">
              <div className="h-56 flex items-center justify-center p-4">
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

        <div className="mt-8 bg-dark-brand rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-brand/20 flex items-center justify-center flex-shrink-0">
            <i className="ri-ruler-line text-brand text-2xl" />
          </div>
          <div>
            <p className="text-white font-semibold text-lg">
              Максимальные габариты обработки: 1000×620×600 мм
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Фрезерование корпусных деталей и плоскостей в пределах рабочей зоны станков
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

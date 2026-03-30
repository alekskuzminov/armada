'use client';

import { useState } from 'react';
import { useCart } from '@/components/shared/CartContext';
import { formatPrice, type ProductModel } from '@/app/products/data';

interface ModelsTableWithCartProps {
  models: ProductModel[];
  productSlug: string;
  categorySlug: string;
  productName: string;
}

export default function ModelsTableWithCart({
  models,
  productSlug,
  categorySlug,
  productName,
}: ModelsTableWithCartProps) {
  const { addItem } = useCart();
  const [addedSku, setAddedSku] = useState<string | null>(null);

  const handleAdd = (model: ProductModel) => {
    addItem({
      productSlug,
      categorySlug,
      productName,
      modelName: model.name,
      sku: model.sku,
      price: model.price,
    });
    setAddedSku(model.sku);
    setTimeout(() => setAddedSku(null), 2000);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Наименование</th>
            <th className="px-4 py-3 text-right font-semibold text-gray-700 w-32">Цена деления</th>
            <th className="px-4 py-3 text-right font-semibold text-gray-700 w-36">Цена</th>
            <th className="px-4 py-3 text-right font-semibold text-gray-700 w-36"></th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, index) => (
            <tr
              key={model.sku || model.name}
              className={`border-b border-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
            >
              <td className="px-4 py-3 text-gray-700">{model.name}</td>
              <td className="px-4 py-3 text-gray-600 text-right">{model.division}</td>
              <td className="px-4 py-3 text-gray-900 font-semibold text-right">
                {model.price > 0 ? formatPrice(model.price) : 'По запросу'}
              </td>
              <td className="px-4 py-3 text-right">
                {model.price > 0 && (
                  <button
                    onClick={() => handleAdd(model)}
                    disabled={addedSku === model.sku}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                      addedSku === model.sku
                        ? 'bg-brand/10 text-brand cursor-default'
                        : 'bg-brand text-white hover:bg-brand-dark'
                    }`}
                  >
                    {addedSku === model.sku ? (
                      <>
                        <i className="ri-check-line" />
                        Добавлено
                      </>
                    ) : (
                      <>
                        <i className="ri-shopping-cart-line" />
                        В корзину
                      </>
                    )}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

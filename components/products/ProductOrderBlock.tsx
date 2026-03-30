'use client';

import { useState } from 'react';
import { useCart } from '@/components/shared/CartContext';
import { formatPrice, type ProductModel } from '@/app/products/data';

interface ProductOrderBlockProps {
  productSlug: string;
  categorySlug: string;
  productName: string;
  models: ProductModel[];
  standard?: string;
}

export default function ProductOrderBlock({
  productSlug,
  categorySlug,
  productName,
  models,
  standard,
}: ProductOrderBlockProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem, openDrawer } = useCart();

  const selected = models[selectedIndex];

  const handleAddToCart = () => {
    addItem({
      productSlug,
      categorySlug,
      productName,
      modelName: selected.name,
      sku: selected.sku,
      price: selected.price,
    });
    setAdded(true);
    openDrawer();
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-5">
      {/* Выбор модели */}
      {models.length > 1 && (
        <div>
          <label htmlFor="model-select" className="block text-sm text-gray-500 mb-1.5">
            Тип
          </label>
          <select
            id="model-select"
            value={selectedIndex}
            onChange={(e) => setSelectedIndex(Number(e.target.value))}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all cursor-pointer"
          >
            {models.map((model, i) => (
              <option key={model.sku} value={i}>
                {model.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Цена */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-gray-900">
          {formatPrice(selected.price)}
        </span>
        <span className="text-sm text-gray-500">(б/НДС)</span>
      </div>

      {/* Бейдж ГОСТ */}
      {standard?.startsWith('ГОСТ') && (
        <div className="flex items-center gap-2 text-sm text-brand">
          <i className="ri-shield-check-line text-lg" />
          <span>Соответствует точностным характеристикам согласно {standard}</span>
        </div>
      )}

      {/* Кнопка "В корзину" */}
      <button
        onClick={handleAddToCart}
        disabled={added}
        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-white transition-all ${
          added
            ? 'bg-brand/80 cursor-default'
            : 'bg-brand hover:bg-brand-dark'
        }`}
      >
        {added ? (
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
    </div>
  );
}

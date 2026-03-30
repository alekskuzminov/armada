'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';
import { formatPrice } from '@/app/products/data';

export default function CartDrawer() {
  const {
    items,
    totalItems,
    totalPrice,
    removeItem,
    updateQuantity,
    isDrawerOpen,
    closeDrawer,
  } = useCart();
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDrawerOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDrawer();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen, closeDrawer]);

  if (!isDrawerOpen) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[90] flex justify-end"
      onClick={(e) => { if (e.target === backdropRef.current) closeDrawer(); }}
    >
      {/* Затемнение */}
      <div className="absolute inset-0 bg-dark-brand/60 backdrop-blur-sm" aria-hidden="true" />

      {/* Панель */}
      <div className="relative w-full max-w-md bg-white shadow-2xl flex flex-col h-full animate-slide-in-right">
        {/* Шапка */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">
            Корзина
            {totalItems > 0 && (
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({totalItems})
              </span>
            )}
          </h2>
          <button
            onClick={closeDrawer}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Закрыть корзину"
          >
            <i className="ri-close-line text-2xl" />
          </button>
        </div>

        {/* Содержимое */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <i className="ri-shopping-cart-line text-3xl text-gray-300" />
            </div>
            <p className="text-gray-500 text-sm">Корзина пуста</p>
            <Link
              href="/products"
              onClick={closeDrawer}
              className="text-sm font-medium text-brand hover:underline"
            >
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <>
            {/* Список товаров */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.sku}
                  className="flex gap-4 pb-4 border-b border-gray-100 last:border-0"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 leading-snug truncate">
                      {item.productName}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 truncate">
                      {item.modelName}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 mt-2">
                      {formatPrice(item.price)}
                    </p>

                    {/* Количество */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.sku, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="w-7 h-7 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand hover:text-brand transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <i className="ri-subtract-line text-sm" />
                      </button>
                      <span className="text-sm font-medium text-gray-900 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.sku, item.quantity + 1)}
                        className="w-7 h-7 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand hover:text-brand transition-colors"
                      >
                        <i className="ri-add-line text-sm" />
                      </button>
                    </div>
                  </div>

                  {/* Удалить */}
                  <button
                    onClick={() => removeItem(item.sku)}
                    className="shrink-0 text-gray-300 hover:text-red-500 transition-colors self-start mt-1"
                    aria-label="Удалить товар"
                  >
                    <i className="ri-delete-bin-line text-lg" />
                  </button>
                </div>
              ))}
            </div>

            {/* Итого + кнопки */}
            <div className="border-t border-gray-100 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Итого</span>
                <span className="text-xl font-bold text-gray-900">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <Link
                href="/cart"
                onClick={closeDrawer}
                className="block w-full text-center bg-brand text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
              >
                Оформить заказ
              </Link>

              <button
                onClick={closeDrawer}
                className="block w-full text-center text-sm text-gray-500 hover:text-brand transition-colors"
              >
                Продолжить покупки
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

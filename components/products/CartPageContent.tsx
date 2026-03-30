'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { useCart } from '@/components/shared/CartContext';
import { formatPrice } from '@/app/products/data';
import { submitOrder, type FormState } from '@/app/actions';

const initialState: FormState = { success: false, message: '' };

export default function CartPageContent() {
  const {
    items,
    totalItems,
    totalPrice,
    removeItem,
    updateQuantity,
    clearCart,
  } = useCart();

  const [state, formAction, isPending] = useActionState(submitOrder, initialState);

  // После успешной отправки очищаем корзину
  if (state.success && items.length > 0) {
    clearCart();
  }

  if (state.success) {
    return (
      <div className="flex flex-col items-center text-center py-16 gap-4">
        <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center">
          <i className="ri-check-line text-3xl text-brand" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Заказ оформлен</h2>
        <p className="text-gray-500 text-sm max-w-md">{state.message}</p>
        <Link
          href="/products"
          className="mt-4 bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
        >
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center text-center py-16 gap-4">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
          <i className="ri-shopping-cart-line text-4xl text-gray-300" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Корзина пуста</h2>
        <p className="text-gray-500 text-sm">Добавьте товары из каталога продукции</p>
        <Link
          href="/products"
          className="mt-2 bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
        >
          Перейти в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Таблица товаров */}
      <div className="lg:col-span-2">
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          {/* Desktop-таблица */}
          <table className="w-full text-sm hidden md:table">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Товар</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700 w-32">Цена</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 w-32">Кол-во</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700 w-32">Сумма</th>
                <th className="px-4 py-3 w-12"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.sku} className="border-b border-gray-50">
                  <td className="px-4 py-4">
                    <Link
                      href={`/products/${item.categorySlug}/${item.productSlug}`}
                      className="font-medium text-gray-900 hover:text-brand transition-colors"
                    >
                      {item.productName}
                    </Link>
                    <p className="text-xs text-gray-500 mt-0.5">{item.modelName}</p>
                  </td>
                  <td className="px-4 py-4 text-right text-gray-700">
                    {formatPrice(item.price)}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.sku, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand hover:text-brand transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <i className="ri-subtract-line text-sm" />
                      </button>
                      <span className="text-sm font-medium text-gray-900 w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.sku, item.quantity + 1)}
                        className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand hover:text-brand transition-colors"
                      >
                        <i className="ri-add-line text-sm" />
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right font-semibold text-gray-900">
                    {formatPrice(item.price * item.quantity)}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => removeItem(item.sku)}
                      className="text-gray-300 hover:text-red-500 transition-colors"
                      aria-label="Удалить товар"
                    >
                      <i className="ri-delete-bin-line text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile-карточки */}
          <div className="md:hidden divide-y divide-gray-100">
            {items.map((item) => (
              <div key={item.sku} className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <Link
                      href={`/products/${item.categorySlug}/${item.productSlug}`}
                      className="text-sm font-medium text-gray-900 hover:text-brand transition-colors"
                    >
                      {item.productName}
                    </Link>
                    <p className="text-xs text-gray-500 mt-0.5 truncate">{item.modelName}</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.sku)}
                    className="text-gray-300 hover:text-red-500 transition-colors shrink-0"
                    aria-label="Удалить товар"
                  >
                    <i className="ri-delete-bin-line text-lg" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.sku, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand hover:text-brand transition-colors disabled:opacity-30"
                    >
                      <i className="ri-subtract-line text-sm" />
                    </button>
                    <span className="text-sm font-medium text-gray-900 w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.sku, item.quantity + 1)}
                      className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand hover:text-brand transition-colors"
                    >
                      <i className="ri-add-line text-sm" />
                    </button>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Форма оформления */}
      <div className="lg:col-span-1">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-32">
          {/* Итого */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">
                {totalItems} {getItemWord(totalItems)}
              </span>
              <span className="text-xl font-bold text-gray-900">
                {formatPrice(totalPrice)}
              </span>
            </div>
          </div>

          {/* Форма заказа */}
          <h3 className="text-lg font-bold text-gray-900 mb-4">Оформить заказ</h3>
          <p className="text-sm text-gray-500 mb-6">
            Заполните данные — мы свяжемся для подтверждения заказа
          </p>

          <form action={formAction} className="space-y-4">
            <input type="hidden" name="formId" value="cart-order" />
            <input
              type="hidden"
              name="cartItems"
              value={JSON.stringify(
                items.map((i) => ({
                  name: i.modelName,
                  sku: i.sku,
                  price: i.price,
                  quantity: i.quantity,
                }))
              )}
            />
            <input type="hidden" name="cartTotal" value={totalPrice} />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Ваше имя *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Иван Петров"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Телефон *</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+7 (___) ___-__-__"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
              />
            </div>

            {!state.success && state.message && (
              <div className="px-4 py-3 rounded-lg text-sm bg-red-50 border border-red-200 text-red-600">
                {state.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-brand text-white px-6 py-4 rounded-lg text-base font-semibold hover:bg-brand-dark transition-colors disabled:opacity-50"
            >
              {isPending ? 'Оформление...' : 'Оформить заказ'}
            </button>

            <p className="text-xs text-center text-gray-400">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

// Склонение слова "товар"
function getItemWord(count: number): string {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod100 >= 11 && mod100 <= 19) return 'товаров';
  if (mod10 === 1) return 'товар';
  if (mod10 >= 2 && mod10 <= 4) return 'товара';
  return 'товаров';
}

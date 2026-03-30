import type { Metadata } from 'next';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import CartPageContent from '@/components/products/CartPageContent';

export const metadata: Metadata = {
  title: 'Корзина | Армада',
  description: 'Оформление заказа на продукцию компании Армада.',
  robots: { index: false, follow: true },
};

export default function CartPage() {
  return (
    <section className="py-10 lg:py-14 bg-white min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Каталог продукции', href: '/products' },
            { label: 'Корзина' },
          ]}
        />

        <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-8">Корзина</h1>

        <CartPageContent />
      </div>
    </section>
  );
}

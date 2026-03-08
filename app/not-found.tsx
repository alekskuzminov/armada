import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <span className="text-8xl font-bold text-brand block mb-4">404</span>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Страница не найдена
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Запрашиваемая страница не существует или была перемещена.
          Вернитесь на главную, чтобы продолжить работу.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
        >
          <i className="ri-arrow-left-line" />
          На главную
        </Link>
      </div>
    </section>
  );
}

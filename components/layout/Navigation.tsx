'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useModal } from '@/components/shared/ModalContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [closeTimeout, setCloseTimeoutState] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const pathname = usePathname();
  const { open } = useModal();
  const headerRef = useRef<HTMLElement | null>(null);

  // Только маршруты, где hero имеет тёмный фон (фоновое изображение с оверлеем).
  // Страницы с белым hero НЕ включать — хедер на них сразу должен быть в «скролл»-состоянии.
  const transparentHeaderRoutes = ['/', '/about', '/contacts'];
  const supportsTransparentHeader = pathname ? transparentHeaderRoutes.includes(pathname) : false;
  const isSolidHeader = isScrolled || isMobileOpen || !supportsTransparentHeader;
  const textClass = isSolidHeader ? 'text-neutral-900' : 'text-white';
  const mutedTextClass = isSolidHeader ? 'text-neutral-600' : 'text-white/75';
  const iconMutedTextClass = isSolidHeader ? 'text-neutral-500' : 'text-white/75';
  const topDividerClass = isSolidHeader ? 'border-neutral-200' : 'border-white/15';
  const bottomDividerClass = isSolidHeader ? 'border-neutral-200' : 'border-transparent';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;

    const updateHeaderHeight = () => {
      setHeaderHeight(headerRef.current?.offsetHeight ?? 0);
    };

    updateHeaderHeight();

    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(headerRef.current);
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, [isMobileOpen, isServicesOpen, pathname]);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [closeTimeout]);

  const handleConsultation = () => open();

  const handleServicesEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    const timeout = setTimeout(() => setIsServicesOpen(false), 150);
    setCloseTimeoutState(timeout);
  };

  const services = [
    { href: '/services/turning', label: 'Токарные работы с ЧПУ' },
    { href: '/services/milling', label: 'Фрезерная обработка с ЧПУ' },
    { href: '/services/edm', label: 'Электроэрозионная обработка' },
    { href: '/services/heat-treatment', label: 'Термообработка' },
    { href: '/services/grinding', label: 'Шлифовальные работы' },
    { href: '/services/custom', label: 'Изготовление деталей на заказ' },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isSolidHeader ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className={`border-b px-4 py-2 text-sm transition-colors duration-300 ${topDividerClass}`}>
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <a
                href="tel:+74957890054"
                className={`flex items-center gap-2 transition-colors hover:text-brand ${textClass}`}
              >
                <i className="ri-phone-line" />
                <span>+7 (495) 789-00-54</span>
              </a>
              <span className={`hidden sm:inline transition-colors ${mutedTextClass}`}>Пн-Пт с 9 до 20</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="mailto:armadaprom@mail.ru"
                className={`flex items-center gap-2 transition-colors hover:text-brand ${textClass}`}
              >
                <i className="ri-mail-line" />
                <span>armadaprom@mail.ru</span>
              </a>
              <div className={`flex items-center gap-2 transition-colors ${iconMutedTextClass}`}>
                <i className="ri-map-pin-line" />
                <span>г. Киров, пер. Химический, д.1</span>
              </div>
            </div>
          </div>
        </div>

        <nav className={`border-b px-4 transition-colors duration-300 ${bottomDividerClass}`}>
          <div className="max-w-7xl mx-auto py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <div className={`text-3xl font-bold transition-colors ${textClass}`}>АРМАДА</div>
                <div className={`hidden max-w-[140px] text-xs leading-tight transition-colors sm:block ${mutedTextClass}`}>
                  Металлообрабатывающая
                  <br />
                  компания
                </div>
              </Link>

              {/* Desktop */}
              <div className="hidden lg:flex items-center gap-8">
                <div
                  className="relative"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <button
                    className={`flex items-center gap-1 whitespace-nowrap font-medium transition-colors hover:text-brand ${textClass}`}
                  >
                    Услуги
                    <i
                      className={`ri-arrow-down-s-line transition-transform ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isServicesOpen && (
                    <div className="absolute top-full left-0 min-w-[280px] pt-2">
                      <div className="rounded-lg border border-neutral-100 bg-white py-2 shadow-xl">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block px-4 py-3 text-neutral-700 transition-colors hover:bg-green-50 hover:text-brand"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/delivery"
                  className={`whitespace-nowrap font-medium transition-colors hover:text-brand ${textClass}`}
                >
                  Доставка и оплата
                </Link>
                <Link
                  href="/about"
                  className={`whitespace-nowrap font-medium transition-colors hover:text-brand ${textClass}`}
                >
                  О компании
                </Link>
                <Link
                  href="/contacts"
                  className={`whitespace-nowrap font-medium transition-colors hover:text-brand ${textClass}`}
                >
                  Контакты
                </Link>

                <button
                  onClick={handleConsultation}
                  className="whitespace-nowrap rounded-lg bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-dark"
                >
                  Обсудить заказ
                </button>
              </div>

              {/* Mobile burger */}
              <button
                className={`p-2 transition-colors lg:hidden ${textClass}`}
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Открыть меню"
              >
                <i className={`text-2xl ${isMobileOpen ? 'ri-close-line' : 'ri-menu-line'}`} />
              </button>
            </div>

            {/* Mobile menu */}
            {isMobileOpen && (
              <div className="mt-4 space-y-3 border-t border-neutral-200 pb-4 pt-4 lg:hidden">
                <div className="text-sm font-medium text-neutral-500">Услуги</div>
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block py-2 pl-4 text-neutral-700 transition-colors hover:text-brand"
                  >
                    {s.label}
                  </Link>
                ))}
                <div className="space-y-3 border-t border-neutral-200 pt-3">
                  <Link href="/delivery" className="block py-2 font-medium text-neutral-700 hover:text-brand">
                    Доставка и оплата
                  </Link>
                  <Link href="/about" className="block py-2 font-medium text-neutral-700 hover:text-brand">
                    О компании
                  </Link>
                  <Link href="/contacts" className="block py-2 font-medium text-neutral-700 hover:text-brand">
                    Контакты
                  </Link>
                </div>
                <button
                  onClick={handleConsultation}
                  className="w-full rounded-lg bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-dark"
                >
                  Обсудить заказ
                </button>
              </div>
            )}
          </div>
        </nav>
      </header>

      <div style={{ height: supportsTransparentHeader ? 0 : headerHeight }} aria-hidden="true" />
    </>
  );
}

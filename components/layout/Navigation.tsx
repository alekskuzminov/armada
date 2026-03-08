'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useModal } from '@/components/shared/ModalContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [closeTimeout, setCloseTimeoutState] = useState<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const { open } = useModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

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
      <div className="bg-neutral-950 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href="tel:+74957890054"
              className="flex items-center gap-2 hover:text-brand transition-colors"
            >
              <i className="ri-phone-line" />
              <span>+7 (495) 789-00-54</span>
            </a>
            <span className="text-neutral-500 hidden sm:inline">Пн-Пт с 9 до 20</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="mailto:armadaprom@mail.ru"
              className="flex items-center gap-2 hover:text-brand transition-colors"
            >
              <i className="ri-mail-line" />
              <span>armadaprom@mail.ru</span>
            </a>
            <div className="flex items-center gap-2 text-neutral-400">
              <i className="ri-map-pin-line" />
              <span>г. Киров, пер. Химический, д.1</span>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="text-3xl font-bold text-neutral-900">АРМАДА</div>
              <div className="text-xs text-neutral-600 leading-tight max-w-[140px] hidden sm:block">
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
                <button className="text-neutral-700 hover:text-brand transition-colors font-medium flex items-center gap-1 whitespace-nowrap">
                  Услуги
                  <i
                    className={`ri-arrow-down-s-line transition-transform ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 pt-2 min-w-[280px]">
                    <div className="bg-white shadow-xl rounded-lg py-2 border border-neutral-100">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-3 text-neutral-700 hover:bg-green-50 hover:text-brand transition-colors"
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
                className="text-neutral-700 hover:text-brand transition-colors font-medium whitespace-nowrap"
              >
                Доставка и оплата
              </Link>
              <Link
                href="/about"
                className="text-neutral-700 hover:text-brand transition-colors font-medium whitespace-nowrap"
              >
                О компании
              </Link>
              <Link
                href="/contacts"
                className="text-neutral-700 hover:text-brand transition-colors font-medium whitespace-nowrap"
              >
                Контакты
              </Link>

              <button
                onClick={handleConsultation}
                className="bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors font-medium whitespace-nowrap"
              >
                Обсудить заказ
              </button>
            </div>

            {/* Mobile burger */}
            <button
              className="lg:hidden text-neutral-700 p-2"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Открыть меню"
            >
              <i className={`text-2xl ${isMobileOpen ? 'ri-close-line' : 'ri-menu-line'}`} />
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-neutral-100 pt-4 space-y-3">
              <div className="font-medium text-neutral-500 text-sm">Услуги</div>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block pl-4 py-2 text-neutral-700 hover:text-brand transition-colors"
                >
                  {s.label}
                </Link>
              ))}
              <div className="border-t border-neutral-100 pt-3 space-y-3">
                <Link href="/delivery" className="block py-2 text-neutral-700 hover:text-brand font-medium">
                  Доставка и оплата
                </Link>
                <Link href="/about" className="block py-2 text-neutral-700 hover:text-brand font-medium">
                  О компании
                </Link>
                <Link href="/contacts" className="block py-2 text-neutral-700 hover:text-brand font-medium">
                  Контакты
                </Link>
              </div>
              <button
                onClick={handleConsultation}
                className="w-full bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors font-medium"
              >
                Обсудить заказ
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

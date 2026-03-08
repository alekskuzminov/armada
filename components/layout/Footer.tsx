import Link from 'next/link';

const serviceLinks = [
  { href: '/services/turning', label: 'Токарные работы с ЧПУ' },
  { href: '/services/milling', label: 'Фрезерная обработка с ЧПУ' },
  { href: '/services/edm', label: 'Электроэрозионная обработка' },
  { href: '/services/heat-treatment', label: 'Термообработка' },
  { href: '/services/grinding', label: 'Шлифовальные работы' },
  { href: '/services/custom', label: 'Изготовление деталей на заказ' },
];

const companyLinks = [
  { href: '/about', label: 'О компании' },
  { href: '/delivery', label: 'Доставка и оплата' },
  { href: '/contacts', label: 'Контакты' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-brand text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">АРМАДА</div>
            <p className="text-neutral-400 text-sm mb-4">Металлообрабатывающая компания</p>
            <p className="text-neutral-400 text-sm">
              Токарная и фрезерная обработка на станках ЧПУ. Высокая точность, быстрые сроки.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-brand transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Компания</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-brand transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <i className="ri-phone-line mt-1 text-brand" />
                <div>
                  <a
                    href="tel:+74957890054"
                    className="text-neutral-400 hover:text-brand transition-colors text-sm"
                  >
                    +7 (495) 789-00-54
                  </a>
                  <div className="text-neutral-500 text-xs mt-1">Пн-Пт с 9 до 20</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-mail-line mt-1 text-brand" />
                <a
                  href="mailto:armadaprom@mail.ru"
                  className="text-neutral-400 hover:text-brand transition-colors text-sm"
                >
                  armadaprom@mail.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line mt-1 text-brand" />
                <span className="text-neutral-400 text-sm">г. Киров, пер. Химический, д.1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} АРМАДА. Все права защищены.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-brand transition-colors"
              >
                <i className="ri-telegram-line text-lg" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-brand transition-colors"
              >
                <i className="ri-whatsapp-line text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6" aria-label="Хлебные крошки">
      <Link href="/" className="hover:text-neutral-700 transition-colors">
        Главная
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          <i className="ri-arrow-right-s-line" />
          {item.href ? (
            <Link href={item.href} className="hover:text-neutral-700 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-800 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

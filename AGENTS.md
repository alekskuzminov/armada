# Армада — Корпоративный сайт металлообрабатывающей компании

## Статус проекта

Миграция с React+Vite SPA на Next.js App Router **завершена**. Сборка проходит без ошибок. Визуальная проверка и деплой ещё не выполнены.

Git: инициализирован локально, 1 коммит (backup исходного Vite-проекта). GitHub-репозиторий ещё не подключён.

## Стек

- **Next.js 16** (App Router, output: standalone для VPS)
- **React 19**
- **TypeScript 5.9**
- **Tailwind CSS 4** (через @tailwindcss/postcss)
- **Lucide React** — подключен, но пока иконки идут через Remix Icon CDN
- Шрифт **Inter** — через next/font/google

## Дизайн-токены (tailwind.config.ts)

| Токен | Значение | Использование |
|---|---|---|
| brand | #00c853 | Основной зелёный — CTA, акценты, иконки |
| brand-dark | #00a844 | Hover на CTA |
| brand-light | #33d36e | Редко |
| dark-brand | #1a2420 | Тёмные секции, футер |
| dark-brand-light | #243028 | Градиенты в тёмных секциях |

Иконки: **Remix Icon 4.0** подключён через CDN в app/layout.tsx. Классы ri-*.

## Структура файлов

`
app/
+-- layout.tsx              Root layout (Navigation + Footer + metadata + Remix Icon CDN)
+-- globals.css             Tailwind imports
+-- actions.ts              Server Action submitForm (ЗАГЛУШКА, логирует в консоль)
+-- robots.ts               robots.txt
+-- sitemap.ts              sitemap.xml (10 маршрутов)
+-- page.tsx                Главная (Server Component, секции inline)
+-- not-found.tsx           404
+-- (home)/
|   +-- HeroSection.tsx     Client: hero-форма с useActionState
+-- about/page.tsx          О компании
+-- contacts/page.tsx       Контакты (с Google Maps iframe)
+-- delivery/page.tsx       Доставка и оплата
+-- services/
    +-- turning/
    |   +-- page.tsx                Токарные работы (Server Component)
    |   +-- TurningEquipment.tsx    Client: expand/collapse оборудования
    |   +-- TurningGallery.tsx      Client: обёртка Gallery
    +-- milling/
    |   +-- page.tsx
    |   +-- MillingEquipment.tsx
    |   +-- MillingGallery.tsx
    +-- edm/
    |   +-- page.tsx                Электроэрозия
    |   +-- EdmGallery.tsx
    +-- heat-treatment/
    |   +-- page.tsx                Термообработка
    +-- grinding/
    |   +-- page.tsx                Шлифовка
    +-- custom/
        +-- page.tsx                Изготовление на заказ
        +-- CustomHeroSection.tsx   Client: hero с формой

components/
+-- layout/
|   +-- Navigation.tsx      Client: sticky nav, dropdown услуг, мобильное меню
|   +-- Footer.tsx          Server Component
+-- shared/
    +-- Breadcrumbs.tsx     Server Component, принимает items: BreadcrumbItem[]
    +-- ContactFormBlock.tsx Client: универсальная форма (useActionState + submitForm)
    |                       Props: formId, heading, subheading, variant (light|dark), fields[]
    +-- Gallery.tsx         Client: слайдер изображений
                            Props: images: GalleryImage[], layout (fullwidth|sidebyside)
`

## Маршруты

| Путь | Страница | Тип |
|---|---|---|
| / | Главная | Static |
| /about | О компании | Static |
| /contacts | Контакты | Static |
| /delivery | Доставка и оплата | Static |
| /services/turning | Токарные работы с ЧПУ | Static |
| /services/milling | Фрезерная обработка с ЧПУ | Static |
| /services/edm | Электроэрозионная обработка | Static |
| /services/heat-treatment | Термообработка | Static |
| /services/grinding | Шлифовальные работы | Static |
| /services/custom | Изготовление деталей на заказ | Static |

## Архитектурные решения

- **Server Components по умолчанию**. use client только для: Navigation (scroll, dropdown), форм (useActionState), галерей (useState для слайдера), Equipment (expand/collapse).
- **Формы**: единый submitForm Server Action в app/actions.ts. Сейчас заглушка — логирует в консоль, возвращает success. Готов к замене на nodemailer/resend.
- **ContactFormBlock** — универсальный компонент формы. Принимает список полей через fields prop, поддерживает светлую и тёмную тему.
- **Gallery** — два layout: fullwidth (слайдер с миниатюрами снизу) и sidebyside (изображение + описание рядом).
- **Изображения**: внешние URL с readdy.ai — img теги, не next/image. В next.config.ts настроен remotePatterns на случай миграции.
- **Навигация**: включает мобильное бургер-меню (не было в оригинале).
- **SEO**: metadata через Next.js Metadata API на каждой странице, robots.ts, sitemap.ts.

## Что НЕ сделано / TODO

1. **Визуальная проверка** — npm run dev ещё не запускался для ручной проверки страниц.
2. **GitHub** — репозиторий не создан, remote не подключён, миграция не закоммичена.
3. **Email-отправка** — app/actions.ts содержит заглушку. Нужно подключить nodemailer или resend.
4. **Изображения** — все ссылаются на readdy.ai API. Нужно заменить на локальные/собственные.
5. **Favicon** — нет своего favicon.
6. **Адаптив** — Navigation имеет мобильное меню, но остальные секции не проверены на mobile.
7. **Remix Icon -> Lucide** — иконки через CDN. Можно мигрировать на lucide-react (уже в зависимостях).
8. **Политика конфиденциальности** — ссылки в формах ведут в никуда (#).
9. **Google Maps** — iframe на странице контактов использует приблизительные координаты.
10. **Тексты** — часть текстов (доставка, термообработка) содержит неотредактированные фрагменты из оригинала.

## Команды

`
npm run dev          # Запуск dev-сервера
npm run build        # Production-сборка (standalone)
npm run start        # Запуск production-сервера
npm run type-check   # Проверка типов TypeScript
npm run lint         # ESLint
`

## История миграции

Исходный проект (React 19 + Vite 7 SPA) сохранён в git-коммите 2433bb0. При необходимости можно сравнить с текущим состоянием через git diff 2433bb0.
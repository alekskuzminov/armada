# Армада — Корпоративный сайт металлообрабатывающей компании

## Статус проекта

Миграция с React+Vite SPA на Next.js App Router **завершена**. Сборка проходит без ошибок. Визуальная проверка и деплой ещё не выполнены.

Git: инициализирован локально. GitHub-репозиторий подключён: https://github.com/alekskuzminov/armada.git

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
|   +-- HeroSection.tsx     Client: hero с параллаксом, формой (useActionState), pt-36/pt-40 под fixed header
+-- about/page.tsx          О компании
+-- contacts/page.tsx       Контакты (с Google Maps iframe)
+-- delivery/page.tsx       Доставка и оплата
+-- services/
    +-- turning/
    |   +-- page.tsx                Токарные работы — белый hero (grid 2 col: фото | текст + CTA)
    |   +-- TurningEquipment.tsx    Client: expand/collapse оборудования
    |   +-- TurningGallery.tsx      Client: обёртка Gallery
    +-- milling/
    |   +-- page.tsx                Фрезерная обработка — белый hero (grid 2 col: фото | текст + CTA)
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
|   +-- Navigation.tsx      Client: fixed header с прозрачным режимом, dropdown услуг, мобильное меню,
|   |                       ResizeObserver для отслеживания высоты, spacer div для страниц без прозрачного хедера
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
- **Навигация**: `fixed inset-x-0 top-0` (не sticky). Включает мобильное бургер-меню. Высота хедера отслеживается через `ResizeObserver` и передаётся через `headerHeight` state. Для страниц без прозрачного хедера рендерится `<div style={{ height: headerHeight }}>` — spacer, компенсирующий fixed-позиционирование.
- **Прозрачный хедер**: список маршрутов `transparentHeaderRoutes = ['/', '/about', '/contacts']` в `Navigation.tsx` определяет, где хедер стартует прозрачным (белый текст на тёмном hero). Правило: маршрут включается в список **только если hero страницы имеет тёмный фон с фоновым изображением**. Страницы с белым hero (нет оверлея/фонового изображения) — НЕ включать: хедер на них должен сразу быть в «скролл»-состоянии (белый фон, тёмный шрифт).
- **Hero страниц услуг**: turning и milling имеют белый hero-layout — `grid lg:grid-cols-2` (фото слева, заголовок + габарит + описание + CTA справа). Остальные страницы услуг используют `pt-10` на первой секции для отступа под fixed header. НИ ОДНА страница услуг не включена в `transparentHeaderRoutes`.
- **SEO**: metadata через Next.js Metadata API на каждой странице, robots.ts, sitemap.ts.

## Что НЕ сделано / TODO

1. **Визуальная проверка** — npm run dev ещё не запускался для ручной проверки страниц.
2. **Email-отправка** — app/actions.ts содержит заглушку. Нужно подключить nodemailer или resend.
3. **Изображения** — все ссылаются на readdy.ai API. Нужно заменить на локальные/собственные.
4. **Favicon** — нет своего favicon.
5. **Адаптив** — Navigation имеет мобильное меню, но остальные секции не проверены на mobile.
6. **Remix Icon -> Lucide** — иконки через CDN. Можно мигрировать на lucide-react (уже в зависимостях).
7. **Политика конфиденциальности** — ссылки в формах ведут в никуда (#).
8. **Google Maps** — iframe на странице контактов использует приблизительные координаты.
9. **Тексты** — часть текстов (доставка, термообработка) содержит неотредактированные фрагменты из оригинала.
10. **Hero страниц услуг** — edm, heat-treatment, grinding, custom используют простой белый hero без изображения. Требуют доработки по образцу turning/milling.

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
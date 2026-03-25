# Армада — CLAUDE.md

## О проекте

**Армада** — корпоративный сайт металлообрабатывающей компании (токарные, фрезерные, электроэрозионные работы, термообработка, шлифовка, изготовление деталей на заказ).

**Стек:** Next.js 16 (App Router, standalone), React 19, TypeScript 5, Tailwind CSS 4.

**GitHub:** https://github.com/alekskuzminov/armada.git

---

## Технический стек

| Слой | Технология |
|------|-----------|
| Framework | Next.js 16 (App Router, output: standalone) |
| UI | React 19 |
| Язык | TypeScript 5 |
| Стили | Tailwind CSS 4 (`@tailwindcss/postcss`) |
| Иконки | Remix Icon 4.0 (CDN) + Lucide React (в зависимостях, пока не используется) |
| Шрифт | Inter через next/font/google |

---

## Скрипты

```bash
npm run dev          # Локальный сервер разработки
npm run build        # Production-сборка (standalone)
npm run start        # Запуск production-сервера
npm run type-check   # Проверка типов TypeScript
npm run lint         # ESLint
```

---

## Структура файлов

```
app/
├── layout.tsx              Root layout (Navigation + Footer + metadata + Remix Icon CDN)
├── globals.css             Tailwind imports
├── actions.ts              Server Action submitForm (заглушка, логирует в консоль)
├── robots.ts               robots.txt
├── sitemap.ts              sitemap.xml (10 маршрутов)
├── page.tsx                Главная (Server Component, секции inline)
├── not-found.tsx           404
├── (home)/
│   └── HeroSection.tsx     Client: hero с параллаксом, формой (useActionState), pt-36/pt-40
├── about/page.tsx          О компании
├── contacts/page.tsx       Контакты (с Google Maps iframe)
├── delivery/page.tsx       Доставка и оплата
└── services/
    ├── turning/
    │   ├── page.tsx                Токарные работы — белый hero (grid 2 col)
    │   ├── TurningEquipment.tsx    Client: expand/collapse оборудования
    │   └── TurningGallery.tsx      Client: обёртка Gallery
    ├── milling/
    │   ├── page.tsx                Фрезерная обработка — белый hero (grid 2 col)
    │   ├── MillingEquipment.tsx
    │   └── MillingGallery.tsx
    ├── edm/
    │   ├── page.tsx                Электроэрозия
    │   └── EdmGallery.tsx
    ├── heat-treatment/
    │   └── page.tsx                Термообработка
    ├── grinding/
    │   └── page.tsx                Шлифовка
    └── custom/
        ├── page.tsx                Изготовление на заказ
        └── CustomHeroSection.tsx   Client: hero с формой

components/
├── layout/
│   ├── Navigation.tsx      Client: fixed header, dropdown услуг, мобильное меню, ResizeObserver
│   └── Footer.tsx          Server Component
└── shared/
    ├── Breadcrumbs.tsx     Server Component, принимает items: BreadcrumbItem[]
    ├── ContactFormBlock.tsx Client: универсальная форма (useActionState + submitForm)
    │                        Props: formId, heading, subheading, variant (light|dark), fields[]
    └── Gallery.tsx         Client: слайдер изображений
                             Props: images: GalleryImage[], layout (fullwidth|sidebyside)
```

---

## Маршруты

| Путь | Страница | Тип |
|------|---------|-----|
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

---

## Архитектурные решения

- **Server Components по умолчанию.** `'use client'` только для: Navigation (scroll, dropdown), форм (useActionState), галерей (useState), Equipment (expand/collapse).
- **Формы:** единый `submitForm` Server Action в `app/actions.ts`. Сейчас заглушка — готов к замене на nodemailer/resend.
- **ContactFormBlock** — универсальный компонент. Принимает список полей через `fields` prop, поддерживает светлую и тёмную тему.
- **Gallery** — два layout: `fullwidth` (слайдер с миниатюрами снизу) и `sidebyside` (изображение + описание рядом).
- **Изображения:** внешние URL с readdy.ai — `<img>` теги, не `next/image`. В `next.config.ts` настроен `remotePatterns` на случай миграции.
- **Навигация:** `fixed inset-x-0 top-0`. Высота хедера отслеживается через `ResizeObserver` и передаётся через `headerHeight` state. Для страниц без прозрачного хедера рендерится `<div style={{ height: headerHeight }}>` — spacer.
- **Прозрачный хедер:** `transparentHeaderRoutes = ['/', '/about', '/contacts']` в `Navigation.tsx`. Маршрут включается только если hero страницы имеет **тёмный фон с фоновым изображением**. Страницы с белым hero — НЕ включать.
- **Hero страниц услуг:** turning и milling имеют белый hero-layout (`grid lg:grid-cols-2`). Остальные страницы услуг используют `pt-10` на первой секции. НИ ОДНА страница услуг не включена в `transparentHeaderRoutes`.
- **SEO:** metadata через Next.js Metadata API на каждой странице, `robots.ts`, `sitemap.ts`.

---

## Ключевые файлы

| Файл | Назначение |
|------|-----------|
| `app/actions.ts` | Server Action `submitForm` — заглушка, готова к замене на email-интеграцию |
| `app/layout.tsx` | Root layout: Navigation, Footer, шрифты, Remix Icon CDN |
| `app/sitemap.ts` | Генерация sitemap.xml (10 маршрутов) |
| `components/shared/ContactFormBlock.tsx` | Универсальная форма заявки (light/dark, гибкие поля) |
| `components/shared/Gallery.tsx` | Слайдер изображений (fullwidth/sidebyside) |
| `components/layout/Navigation.tsx` | Fixed header с прозрачным режимом и мобильным меню |
| `tailwind.config.ts` | Дизайн-токены: brand (#00c853), brand-dark, dark-brand |
| `next.config.ts` | Next.js конфиг: remotePatterns для CDN |

---

## Дизайн-токены (tailwind.config.ts)

| Токен | Значение | Использование |
|-------|---------|---------------|
| `brand` | #00c853 | Основной зелёный — CTA, акценты, иконки |
| `brand-dark` | #00a844 | Hover на CTA |
| `brand-light` | #33d36e | Редко |
| `dark-brand` | #1a2420 | Тёмные секции, футер |
| `dark-brand-light` | #243028 | Градиенты в тёмных секциях |

---

## TODO / Что не сделано

1. **Визуальная проверка** — dev-сервер ещё не запускался для ручного просмотра страниц
2. **Email-отправка** — `app/actions.ts` содержит заглушку. Нужно подключить nodemailer или resend
3. **Изображения** — все ссылаются на readdy.ai API. Нужно заменить на локальные/собственные
4. **Favicon** — нет своего favicon
5. **Адаптив** — Navigation имеет мобильное меню, но остальные секции не проверены на mobile
6. **Remix Icon → Lucide** — иконки через CDN. Можно мигрировать на lucide-react (уже в зависимостях)
7. **Политика конфиденциальности** — ссылки в формах ведут в никуда (`#`)
8. **Google Maps** — iframe на странице контактов использует приблизительные координаты
9. **Тексты** — часть текстов (доставка, термообработка) содержит неотредактированные фрагменты
10. **Hero страниц услуг** — edm, heat-treatment, grinding, custom используют простой белый hero без изображения. Требуют доработки по образцу turning/milling

---

## Деплой

- **Сервер:** VPS, PM2 (процесс `armada`), standalone-сборка
- **Скрипт:** `deploy/setup.sh`
- **ecosystem.config.js:** `script: server.js`, `cwd: /var/www/armada/.next/standalone`, `PORT: 3000`

```bash
npm run build
# Скопировать public/ в .next/standalone/public/ и .next/static/ в .next/standalone/.next/static/
pm2 restart armada
```

---

---

## Поведенческие правила

### Язык и стиль ответов

- Все ответы — на **русском языке**.
- Код, названия библиотек, API, пропсы, типы и команды — не переводить.
- Комментарии в коде писать на русском.
- Сначала краткий вывод, затем детали.
- Не писать длинные абстрактные рассуждения без практического вывода.

### Git workflow

- Коммит делается **только по явной команде** ("закоммить", "сохранить", "коммит").
- По завершении логического блока работ (новая страница, новый компонент) — предложить коммит короткой фразой в конце ответа. Без навязывания.
- Сообщение коммита — на английском, conventional commits, отражает суть изменений.
- Пуш делается **только по явной команде**. Не предлагать пуш самостоятельно.
- Работаем в `main`. При переходе в прод заводим `dev` ветку.

### Рабочий процесс

- Сначала анализировать задачу, потом менять код.
- Перед правками перечислять затрагиваемые файлы.
- Для одной задачи — минимально достаточные изменения.
- После серии изменений проверять типы, линт и сборку.
- Если в рамках задачи были изменения в коде, не считать работу завершённой без проверки типов/линта/сборки. Если проверка не запускалась — явно сказать об этом.

### Архитектура Next.js

- Использовать App Router.
- По умолчанию предпочитать Server Components.
- `'use client'` только там, где действительно нужен интерактив.
- Структуру страницы собирать из секций и переиспользуемых компонентов.
- Метаданные страницы продумывать вместе со страницей.
- Новые компоненты создавать только при явной переиспользуемости или для снижения сложности.
- Не смешивать бизнес-смысл страницы и низкоуровневую UI-логику в одном файле.
- Формы и интеграции делать в соответствии с текущим паттерном проекта.

### Безопасность и рефакторинг

- Не удалять крупные фрагменты кода без объяснения причины.
- Не проводить большие рефакторинги без явной необходимости.
- При рефакторинге сохранять поведение прежним.
- Перед переносом логики проверять, нет ли уже аналогичного решения в проекте.
- Новые зависимости добавлять только если без них нельзя обойтись.
- Если информации не хватает — не выдумывать структуру проекта и существующие сущности.

### SEO и контент

- Каждая индексируемая страница должна иметь понятную цель и один основной интент.
- Продумывать: title, description, H1, иерархию H2/H3, canonical (при необходимости), Open Graph.
- Контент страницы соответствует типу: главная / услуга / о компании / контакты.
- В текстах избегать keyword stuffing.
- Заголовки должны быть полезными, а не рекламно-пустыми.
- FAQ и блоки доверия добавлять там, где они реально помогают конверсии и SEO.

### UI и стилизация

- Приоритет: ясность, иерархия, спокойный корпоративный стиль.
- Любой новый блок должен корректно работать на desktop, tablet и mobile.
- Соблюдать единые spacing, radius, typography scale, container widths, button styles.
- Не добавлять визуальный шум: лишние тени, случайные градиенты, декоративные элементы без функции.
- При реализации секции учитывать: заголовок, supporting text, primary CTA, optional secondary CTA, proof/trust content.
- Семантические теги использовать осмысленно.

### Копирайтинг

- Писать по-русски, деловым и понятным языком.
- Не использовать банальные маркетинговые клише.
- Не обещать то, что невозможно подтвердить.
- Каждый блок текста должен отвечать: что это, кому подходит, чем полезно, почему доверять, что делать дальше.
- Для CTA использовать понятные формулировки действия.
- Если в проекте существует `.claude/company-context.md` — читать его при любой копирайтинг-задаче.

### Чеклист перед завершением задачи

Проверить: типы, линт, сборку, адаптив, доступность (базово), семантику заголовков, metadata, ссылки и CTA, пустые состояния, консистентность текста и UI.

Если задача затрагивает страницу: первый экран, структура секций, блок доверия, завершающий CTA.

Если задача затрагивает форму: success/error states, валидация, отправка данных, текст согласия / privacy wording.

### Оркестрация — когда какой skill использовать

Используй skills через `/название`:

| Задача | Skill |
|--------|-------|
| Новая страница по брифу (структура) | `/page-from-brief` |
| Страница услуги с текстами и SEO | `/service-page-generator` |
| Scaffold компонента или секции | `/component-scaffold` |
| Перенос макета/Figma/референса в код | `/design-to-code` |
| Форма и submit flow | `/form-integration` |
| Пакет текстов (H1, тезисы, CTA) | `/copy-pack` |
| SEO-аудит страницы | `/seo-page-audit` |
| Финальная проверка перед релизом | `/release-check` |

Граница: сначала выбирай skill по уровню задачи; не делегируй, если задача мелкая или прямое выполнение быстрее.

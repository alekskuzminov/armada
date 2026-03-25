Создать страницу услуги по названию или slug из аргумента.

## Аргумент
Название или slug услуги. Пример: `/service-page laser-cutting` или `/service-page "Лазерная резка"`.

## Алгоритм выполнения

1. **Прочитай контекст проекта:**
   - `.claude/company-context.md` — контекст компании, аудитория, CTA, голос бренда
   - `app/services/turning/page.tsx` — канонический образец страницы услуги (белый hero, grid 2 col)
   - `app/services/milling/page.tsx` — второй образец для сравнения

2. **Применить skill `service-page-generator`:**
   - Определить тип услуги, ЦА, болевую точку, основной CTA
   - Построить структуру страницы в логике B2B corporate service page
   - Подготовить черновой copy: H1, H2, тезисы, CTA
   - Дать SEO-пакет: title, description, Open Graph

3. **Дать компонентный план для Next.js:**
   - Какие файлы создать (`app/services/<slug>/page.tsx` и локальные компоненты)
   - Что переиспользовать из существующих компонентов (ContactFormBlock, Gallery, Breadcrumbs)
   - Нужен ли Equipment-компонент с expand/collapse
   - Server или Client Components для каждого блока

4. **Сообщи итог:**
   - Список файлов для создания
   - Нужно ли добавить маршрут в `transparentHeaderRoutes` (нет — если hero белый)
   - Нужно ли добавить маршрут в `app/sitemap.ts`
   - Что нужно уточнить для финальной реализации

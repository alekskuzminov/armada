#!/bin/bash

# Выход при любой ошибке
set -e

echo "🚀 Начинаем деплой Armada..."

# 1. Заходим в директорию проекта
cd /var/www/armada

# Если нужно автоматически подтягивать изменения из git, раскомментируйте строку ниже:
# echo "📥 Получение обновлений..."
# git pull

# 2. Установка зависимостей (чистая, по package-lock.json)
echo "📦 Установка пакетов (npm ci)..."
npm ci

# 3. Удаление старой сборки (решает проблему с локами .next/lock и кешами)
echo "🧹 Очистка предыдущей сборки..."
rm -rf .next

# 4. Сборка проекта
echo "🏗 Сборка Next.js (production)..."
npm run build

# 5. Копирование статики для режима standalone
echo "📂 Подготовка файлов для standalone-сервера..."
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static

# 6. Перезапуск PM2
echo "🔄 Перезапуск процесса pm2..."
pm2 restart armada

echo "✅ Деплой успешно завершён!"

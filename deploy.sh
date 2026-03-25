#!/bin/bash
# Деплой на VPS после git push
# Использование: ./deploy.sh

set -e

SERVER="root@155.212.141.88"
SSH_KEY="$HOME/.ssh/id_armada"
APP_DIR="/var/www/armada"

echo "=== Pushing to remote ==="
git push

echo "=== Deploying to server ==="
ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no "$SERVER" "
  cd $APP_DIR &&
  git pull &&
  npm ci &&
  npm run build &&
  cp -r public .next/standalone/public &&
  cp -r .next/static .next/standalone/.next/static &&
  pm2 restart armada
"

echo "=== Done ==="

#!/bin/bash
# VPS initial setup script for Ubuntu
# Run as root: bash setup.sh

set -e

echo "=== 1. System update ==="
apt update && apt upgrade -y

echo "=== 2. Install Node.js 20 ==="
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

echo "=== 3. Install PM2 ==="
npm install -g pm2

echo "=== 4. Install Nginx ==="
apt install -y nginx

echo "=== 5. Install Certbot ==="
apt install -y certbot python3-certbot-nginx

echo "=== 6. Install Git ==="
apt install -y git

echo "=== 7. Create app directory ==="
mkdir -p /var/www/armada
cd /var/www/armada

echo "=== 8. Clone repository ==="
git clone https://github.com/alekskuzminov/armada.git .

echo "=== 9. Install dependencies and build ==="
npm ci
npm run build

echo "=== 10. Copy public assets to standalone ==="
cp -r public .next/standalone/public

echo "=== 11. Start app with PM2 ==="
pm2 start ecosystem.config.js
pm2 save
pm2 startup

echo "=== 12. Configure Nginx ==="
cp deploy/nginx.conf /etc/nginx/sites-available/armada
ln -sf /etc/nginx/sites-available/armada /etc/nginx/sites-enabled/armada
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

echo ""
echo "=== Setup complete! ==="
echo "Site is running at http://armadasite.ru"
echo ""
echo "Next steps:"
echo "  1. Point armadasite.ru DNS A-record to this server IP"
echo "  2. Run: certbot --nginx -d armadasite.ru -d www.armadasite.ru"
echo "  3. Uncomment HTTPS block in deploy/nginx.conf"

module.exports = {
  apps: [
    {
      name: 'armada',
      script: 'server.js',
      cwd: '/var/www/armada/.next/standalone',
      instances: 1,
      autorestart: true,
      watch: false,
      // Временный домен (armadasite.ru) — индексация закрыта
      // Перед переездом на armadaprom.ru удалить ROBOTS_NOINDEX или выставить в 'false'
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOSTNAME: '0.0.0.0',
        ROBOTS_NOINDEX: 'true',
      },
    },
  ],
};

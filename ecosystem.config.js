module.exports = {
  apps: [
    {
      name: 'armada',
      script: 'server.js',
      cwd: '/var/www/armada/.next/standalone',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOSTNAME: '0.0.0.0',
      },
    },
  ],
};

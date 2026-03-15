module.exports = {
  apps: [
    {
      name: 'armada',
      script: 'node',
      args: '.next/standalone/server.js',
      cwd: '/var/www/armada',
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

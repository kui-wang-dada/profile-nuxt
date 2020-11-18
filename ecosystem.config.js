module.exports = {
  apps: [
    {
      name: 'profile-nuxt',
      script: './node_modules/nuxt/bin/nuxt.js',

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      args: 'start',
      exec_mode: 'cluster',
      instances: 'max',
      autorestart: true,
      watch: false,

      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: '47.105.223.108',
      ref: 'origin/main',
      repo: 'git@github.com:wangkui1991/profile-nuxt.git',
      ssh_options: 'StrictHostKeyChecking=no',
      path: '/home/nuxt/profile-nuxt/production',
      'post-deploy':
        'yarn && npm run build &&  pm2 reload ecosystem.config.js --env production',
    },
  },
}

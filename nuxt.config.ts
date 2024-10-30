import { defineNuxtConfig } from 'nuxt/config';
import logger from './server/middleware/logger';

export default defineNuxtConfig({   
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  hooks: {
    'dev:setup': (nuxt) => {
      nuxt.server.use(logger);
    },
  },
});

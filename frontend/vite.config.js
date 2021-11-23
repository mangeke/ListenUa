import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import loadCsv from 'rollup-plugin-csv';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), loadCsv()],
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
})

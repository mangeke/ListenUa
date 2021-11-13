import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    localeDir: 'locales',
    enableInSFC: true
  })

const app = createApp(App);
app.use(i18n)
app.mount('#app')

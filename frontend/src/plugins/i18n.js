import { createI18n } from 'vue-i18n'

function loadLocalMessages() {
  const locales = import.meta.globEager('../locales/*.json');
  const messages = {}

  for (const key in locales) {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales[key].default;
    }
  }

  return messages;
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: loadLocalMessages()
});

export default i18n;
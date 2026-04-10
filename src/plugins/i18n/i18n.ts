import { createI18n, type I18n } from 'vue-i18n'

import mainRu from '@/lang/ru/mainRu.json'
import mainEn from '@/lang/en/mainEn.json'

const messages = {
  ru: mainRu,
  en: mainEn,
}

export const i18n: I18n = createI18n({
  legacy: false,
  warnHtmlMessage: false,
  locale: 'ru',
  messages,
})

export default i18n

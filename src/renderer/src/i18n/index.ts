import en from './en'
import zh from './zh'
import { createI18n } from 'vue-i18n'
const locale = localStorage.getItem('locale') || 'zh'
export const i18n = createI18n({
  locale,
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  }
})

import en from './locales/languages/en.json'
import zh_CN from './locales/languages/zh-CN.json'
import zh_TW from './locales/languages/zh-TW.json'
export default defineI18nConfig(() => ({
  legacy: false, // 是否兼容之前
  fallbackLocale: 'en', // 区配不到的语言就用en
  locale: 'en', // 默认语言
  messages: {
    en: en,
    zh_CN: zh_CN,
    zh_TW: zh_TW
  }
}))

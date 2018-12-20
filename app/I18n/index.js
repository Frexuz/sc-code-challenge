import I18n, { getLanguages } from 'react-native-i18n'

const enGB = require('./locales/en-gb.json')
const zhHK = require('./locales/zh-hk.json')

// Missing translation will fallback to `en-gb`
// I18n.fallbacks = true
I18n.defaultLocale = 'en-gb'

// default locale and wait for Rehydration
I18n.locale = 'en-gb'

I18n.translations = {
  'en-gb': enGB,
  'zh-hk': zhHK
}

export const getDeviceLanguage = new Promise((resolve, reject) => {
  getLanguages().then(language => {
    switch (language) {
      case 'zh-hk':
        resolve(language)
        break
      default: // default is en-gb
        resolve(I18n.defaultLocale)
        break
    }
  })
})

export default I18n

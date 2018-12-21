import { SET_APP_LANGUAGE } from '@actions/LanguageActions'
import I18n from '@I18n'

const INITIAL_STATE = {
  key: I18n.locale
}

function languageReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_APP_LANGUAGE:
      const locale = action.payload.key
      I18n.locale = locale

      return { key: locale }
    default:
      return state
  }
}

export default languageReducer

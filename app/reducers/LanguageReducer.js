import { SET_APP_LANGUAGE } from '@actions/LanguageActions'
import I18n from '@I18n'

const INITIAL_STATE = {
  appLanguage: {}
}

function languageReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_APP_LANGUAGE:
      let key = action.payload.appLanguage.key
      I18n.locale = key
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default languageReducer

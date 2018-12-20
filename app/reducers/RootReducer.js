import { combineReducers } from 'redux'
import SetupReducer from './SetupReducer'
import LanguageReducer from './LanguageReducer'
import LocalReducer from './LocalReducer'

const combinedReducers = combineReducers({
  setup: SetupReducer,
  language: LanguageReducer,
  local: LocalReducer
})

export default combinedReducers

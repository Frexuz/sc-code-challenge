import { combineReducers } from 'redux'
import SetupReducer from './SetupReducer'
import LanguageReducer from './LanguageReducer'
import LocalReducer from './LocalReducer'
import UserReducer from './UserReducer'
import UserPostReducer from './UserPostReducer'

const combinedReducers = combineReducers({
  setup: SetupReducer,
  language: LanguageReducer,
  local: LocalReducer,
  users: UserReducer,
  userPosts: UserPostReducer,
})

export default combinedReducers

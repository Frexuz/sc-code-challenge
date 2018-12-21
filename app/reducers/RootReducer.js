import { combineReducers } from 'redux'
import LanguageReducer from './LanguageReducer'
import UserReducer from './UserReducer'
import UserPostReducer from './UserPostReducer'

const combinedReducers = combineReducers({
  language: LanguageReducer,
  users: UserReducer,
  userPosts: UserPostReducer,
})

export default combinedReducers

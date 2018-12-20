import configureStore from './CreateStore'
import { RootReducer } from '@reducers'

export default () => {
  // Assemble the reducers
  return configureStore(RootReducer)
}

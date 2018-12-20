import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'

// Creates the store
export default (rootReducer) => {
  const loggerMiddleware = createLogger()
  const middleware = [thunkMiddleware]
  if (__DEV__) {
    middleware.push(loggerMiddleware)
  }
  const enhancers = []

  // Assemble middleware
  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(rootReducer, compose(...enhancers))

  return store
}

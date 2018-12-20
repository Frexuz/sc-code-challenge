import React, { Component } from 'react'
import { Provider } from 'react-redux'

import createStore from '@redux'
import { setupGlobalProps } from '@design'

import AppRouter from '@screens'

// Create our store
export const store = createStore()

// Global styles
setupGlobalProps()

if (__DEV__) {
  console.disableYellowBox = true
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}

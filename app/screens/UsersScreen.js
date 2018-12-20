import React, { Component } from 'react'
import _ from 'lodash'
import { View } from 'react-native'

import { UsersContainer } from '@containers'
import { scopedI18n } from '@utils'

const t = scopedI18n('screens.home')

class UsersScreen extends Component {
  render () {
    return (
      <UsersContainer />
    )
  }
}

export default UsersScreen

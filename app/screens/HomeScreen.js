import React, { Component } from 'react'
import _ from 'lodash'
import { View } from 'react-native'

import { scopedI18n } from '@utils'

const t = scopedI18n('screens.home')

class HomeScreen extends Component {
  componentWillReceiveProps (nextprops) {
    if (_.get(this.props, 'appLanguage.key', null) !== _.get(nextprops, 'appLanguage.key', null)) {
      nextprops.setAppLanguage({ appLanguage: nextprops.appLanguage })
    }
  }

  render () {
    return (
      <View />
    )
  }
}

export default HomeScreen

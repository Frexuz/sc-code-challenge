import React, { PureComponent } from 'react'
import { View } from 'react-native'

const DEFAULT_PADDING = 20

class Content extends PureComponent {

  render () {
    const { style, pad } = this.props

    let contentPadding = pad || DEFAULT_PADDING
    return (
      <View style={[{ padding: contentPadding }, style]}>{this.props.children}</View>
    )
  }
}

export default Content

import React, { Component } from 'react'
import { View } from 'react-native'

class Row extends Component {
  render () {
    const { containerStyle, children, alignCenter, justifyCenter, wrap, flex } = this.props
    let rowStyle = [{ flexDirection: 'row' }, containerStyle]

    // Apply styles based on props
    if (alignCenter) {
      rowStyle.push({ alignItems: 'center' })
    }
    if (justifyCenter) {
      rowStyle.push({ justifyContent: 'center' })
    }
    if (wrap) {
      rowStyle.push({ flexWrap: 'wrap' })
    }
    if (flex) {
      rowStyle.push({ flex: 1 })
    }

    return (
      <View style={rowStyle}>
        {children}
      </View>
    )
  }
}

export default Row

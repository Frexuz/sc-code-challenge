import React, { Component } from 'react'
import { View } from 'react-native'

class FlexView extends Component {
  render () {
    const defaultStyles = { flex: 1 }
    const styles = this.props.style ? [defaultStyles, this.props.style] : defaultStyles
    return (
      <View style={styles}>
        {this.props.children}
      </View>
    )
  }
}

export default FlexView

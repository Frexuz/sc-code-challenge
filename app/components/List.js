import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Colors } from '@design'

class List extends Component {
  renderTitle = () => {
    return <View>
      <Text style={{ marginTop: 20, marginHorizontal: 20, color: '#000' }}>{this.props.title.toUpperCase()}</Text>
    </View>
  }

  renderChild = (child, index) => {
    if (!child) {
      return null
    }
    return React.cloneElement(child, {
      index: index,
      first: index === 0
    })
  }

  render () {
    const defaultStyles = this.props.borderless ? null : { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.grey.lightest }
    const styles = this.props.containerStyle ? [defaultStyles, this.props.containerStyle] : defaultStyles

    return (
      <View style={styles}>
        {this.props.title ? this.renderTitle() : null}
        {React.Children.map(this.props.children, this.renderChild)}
      </View>
    )
  }
}

export default List

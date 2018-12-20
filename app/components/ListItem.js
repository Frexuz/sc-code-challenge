import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { Colors } from '@design'
import { Row, Icon } from '@components'

class ListItem extends Component {
  renderText = () => {
    const { text, textStyle } = this.props

    return <Text style={[{ color: Colors.text.base }, textStyle]}>{text}</Text>
  }

  renderRight = () => {
    const { right, index, rightArrow, rightTextStyle, onPress } = this.props
    const rightComponent = right
    const rightText = rightComponent ? null : <Text key={`text-${index}`} style={rightTextStyle || { color: Colors.text.base }}>{this.props.rightText}</Text>
    const chevron = onPress || rightArrow ? <Icon key={`icon-${index}`} name='chevron-right' size={24} color={Colors.black} style={{ marginLeft: 5 }} /> : null

    return [rightComponent, rightText, chevron]
  }

  rowStyle = () => {
    let defaultStyle = { flexDirection: 'row', alignItems: 'center', height: 60, marginHorizontal: 20 }
    let borderStyle = this.props.first ? null : this.props.borderless ? null : { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: Colors.tint.black25 }

    return {
      ...defaultStyle,
      ...borderStyle
    }
  }

  render () {
    const { text, children, onPress, renderLeftIcon, index } = this.props
    const Component = onPress ? TouchableHighlight : View

    return (
      <Component onPress={onPress} key={`ListItem${index}`}>
        <View style={this.rowStyle()}>
          { renderLeftIcon
            ? renderLeftIcon()
            : (
              this.props.icon
              ? <View style={styles.iconContainer}>
                <Icon name={this.props.icon} size={20} color={Colors.grey.light} style={this.props.iconStyle} />
              </View>
              : null
            )
          }
          {text ? <View style={{ flex: 1 }}>{this.renderText()}</View> : children}

          <Row containerStyle={{ alignItems: 'center' }}>
            {this.renderRight()}
          </Row>
        </View>
      </Component>
    )
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 10
  }
})

export default ListItem

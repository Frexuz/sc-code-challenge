import styled from 'styled-components/native'
import React, { Component } from 'react'
import { Colors } from '@design'
import { Icon } from '@components'

const LinkContainer = styled.TouchableHighlight`
  backgroundColor: transparent;
  padding: 5px;
  borderRadius: 5px;
`

const LinkInnerContainer = styled.View`
  flexDirection: row;
  alignItems: center;
`

const LinkText = styled.Text`
  color: ${props => props.color ? props.color : (props.secondary ? Colors.grey.light : Colors.link)};
`

class Link extends Component {
  render () {
    const { onPress, text, style, secondary, disabled, children, color } = this.props

    // TouchableHighlight only allows 1 child
    // Nested `Icon` in a `Text` could not be positioned with `margin`, so each needs its own `LinkText`
    return (
      <LinkContainer onPress={disabled ? null : onPress} style={style}>
        <LinkInnerContainer>
          {this.props.leftArrow && <LinkText style={{ marginTop: 3, marginRight: -2, marginLeft: -5 }} color={color} secondary={secondary}><Icon name='chevron-left' size={20} /></LinkText>}
          {children || <LinkText color={color} secondary={secondary}>{text}</LinkText>}
          {this.props.rightArrow && <LinkText style={{ marginTop: 3, marginLeft: -2, marginRight: -5 }} color={color} secondary={secondary}><Icon name='chevron-right' size={20} /></LinkText>}
        </LinkInnerContainer>
      </LinkContainer>
    )
  }
}

export default Link

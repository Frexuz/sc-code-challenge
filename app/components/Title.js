import styled from 'styled-components/native'
import React, { Component } from 'react'
import I18n from '@I18n'

const TitleText = styled.Text`
  color: ${props => props.white ? '#fff' : '#000'};
  font-size: ${props => props.huge ? 32 : 24}px;
`

class Title extends Component {
  getText = () => this.props.text ? this.props.text : I18n.t(this.props.t)

  render () {
    const { center, textStyle, white, huge, ...others } = this.props
    return (
      <TitleText
        style={[textStyle, center ? { textAlign: 'center' } : {}]}
        white={white ? 1 : 0}
        huge={huge ? 1 : 0}
        {...others}
      >
        {this.props.children || this.getText()}
      </TitleText>
    )
  }
}

export default Title

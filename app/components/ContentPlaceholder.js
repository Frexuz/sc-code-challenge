import React, { Component } from 'react'
import { View } from 'react-native'
import { Colors } from '@design'
import Placeholder from 'rn-placeholder'

const lineWidths = ['30%', '60%', '40%']

export default class ContentPlaceholder extends Component {
  renderPlaceholderItem = (item, index) => {
    const Component = this.component
    return <View key={`placeholder-${index}`} style={{ marginBottom: 20 }}>
      <Component
        size={100}
        animate='fade'
        lineNumber={5}
        lineSpacing={5}
        color={Colors.grey.lighter}
        lastLineWidth={lineWidths[index % lineWidths.length]}
      />
    </View>
  }

  render () {
    const { max = 3, paragraph } = this.props
    this.component = paragraph ? Placeholder.Paragraph : Placeholder.ImageContent

    return <View style={[{ margin: 20 }, this.props.style]}>
      {React.Children.map(new Array(max), this.renderPlaceholderItem)}
    </View>
  }
}

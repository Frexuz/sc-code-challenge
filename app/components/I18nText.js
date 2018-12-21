import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

import I18n from '@I18n'

class I18nText extends Component {
  render () {
    const { t, interpolations, formatter, style, languageKey } = this.props
    let translatedText = I18n.t(t, Object.assign({ locale: languageKey }, interpolations))
    let formattedText = (typeof formatter === 'function') ? formatter(translatedText) : translatedText

    return <Text style={style}>{formattedText}</Text>
  }
}

const mapStateToProps = (state) => ({
  languageKey: state.language.key
})

export default connect(mapStateToProps)(I18nText)

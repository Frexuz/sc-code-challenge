import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Text } from 'react-native'
import I18n from 'react-native-i18n'

class I18nText extends Component {
  render () {
    const { t, interpolations, formatter, style, appLanguage } = this.props
    let translatedText = I18n.t(t, Object.assign({ locale: _.get(appLanguage, 'key', 'en-gb') }, interpolations))
    let formattedText = (typeof formatter === 'function') ? formatter(translatedText) : translatedText

    return <Text style={style}>{formattedText}</Text>
  }
}

const mapStateToProps = (state) => ({
  appLanguage: state.language.appLanguage
})

export default connect(mapStateToProps)(I18nText)

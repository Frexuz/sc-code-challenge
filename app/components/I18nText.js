import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Text } from 'react-native'

import I18n from '@I18n'
import { DEFAULT_LANGUAGE } from '@data/languages'

class I18nText extends Component {
  render () {
    const { t, interpolations, formatter, style, appLanguage } = this.props
    let translatedText = I18n.t(t, Object.assign({ locale: _.get(appLanguage, 'key', DEFAULT_LANGUAGE.key) }, interpolations))
    let formattedText = (typeof formatter === 'function') ? formatter(translatedText) : translatedText

    return <Text style={style}>{formattedText}</Text>
  }
}

const mapStateToProps = (state) => ({
  appLanguage: state.language.appLanguage
})

export default connect(mapStateToProps)(I18nText)

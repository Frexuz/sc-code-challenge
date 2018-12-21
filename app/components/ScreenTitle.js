import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import I18n from '@I18n'
import { Row } from '@components'
import { Colors } from '@design'

const ScreenTitle = (props) => {
  return (
    <Row alignCenter>
      <View>
        <Text style={styles.title}>{props.text ? props.text.toUpperCase() : I18n.t(props.t).toUpperCase()}</Text>
      </View>
    </Row>
  )
}

ScreenTitle.propTypes = {
  text: PropTypes.string,
  t: PropTypes.string
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: 'bold',
  }
})

const mapStateToProps = (state) => ({
  languageKey: state.language.key
})

export default connect(mapStateToProps)(ScreenTitle)

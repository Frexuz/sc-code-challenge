import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import I18n from '@I18n'
import { Row } from './'

const mapStateToProps = (state) => ({
  appLanguage: state.language.appLanguage
})

const ScreenTitle = (props) => {
  return (
    <Row alignCenter containerStyle={styles.container}>
      {props.leftContent && <View style={styles.leftContent}>{props.leftContent}</View>}
      <View>
        <Text style={styles.title}>{props.text ? props.text.toUpperCase() : I18n.t(props.t).toUpperCase()}</Text>
        {props.subContent && <View>{props.subContent}</View>}
      </View>
    </Row>
  )
}

ScreenTitle.propTypes = {
  text: PropTypes.string,
  t: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        paddingHorizontal: 20
      }
    })
  },
  leftContent: {
    marginRight: 10
  },
  title: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  }
})

export default connect(mapStateToProps)(ScreenTitle)

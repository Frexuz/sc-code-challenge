import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon } from '@components'
import { connect } from 'react-redux'
import { Colors } from '@design'
import I18nText from './I18nText'
import _ from 'lodash'

const icon = (props, color) => {
  const iconMap = {
    'Users': <Icon name='account-multiple' size={24} color={color} />,
    'Settings': <Icon name='settings' size={24} color={color} />,
  }
  return iconMap[props.iconType]
}

const text = (props, color) => {
  return <I18nText style={[styles.title, {color: color}]} t={props.title} />
}

class TabIcon extends Component {
  render () {
    const { focused } = this.props
    const color = focused ? Colors.blue.base : Colors.black

    return (
      <View style={styles.container}>
        <View style={styles.iconWrapper}>{icon(this.props, color)}</View>
        {text(this.props, color)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconWrapper: {
    width: 32,
    height: 28,
    alignItems: 'center'
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
  }
})

const mapStateToProps = (state) => ({
  languageKey: state.language.key
})

export default connect(mapStateToProps)(TabIcon)

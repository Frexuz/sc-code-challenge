import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Icon } from '@components'
import { Colors } from '@design'
import _ from 'lodash'
import { Actions } from 'react-native-router-flux'
import { scopedI18n } from '@utils'

const t = scopedI18n('emptyStates')

const emptyStates = {
  users: {
    icon: 'account-multiple',
    text: '.users.text',
  },
  userPosts: {
    icon: 'text-subject',
    text: '.userPosts.text',
  },
}

class EmptyState extends Component {
  render () {
    const { icon, text } = emptyStates[this.props.type]

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.iconWrapper}>
            <Icon name={icon} size={80} color={Colors.grey.lighter} />
          </View>
          <Text style={styles.text}>{t(text)}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconWrapper: {
    backgroundColor: '#fff',
    borderRadius: 100,
    height: 175,
    width: 175,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: Colors.grey.lighter
  },
  text: {
    marginTop: 40,
    fontSize: 20,
    color: '#000'
  },
  textLandscape: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.grey.lighter,
    paddingHorizontal: 40,
    marginVertical: 40
  },
  footerText: {
    color: '#888',
    textAlign: 'center',
    height: 40
  },
  buttonRow: {
    marginTop: 20
  }
})

export default EmptyState

import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import _ from 'lodash'

import { Colors } from '@design'
import { Icon } from '@components'
import { scopedI18n } from '@utils'

const t = scopedI18n('emptyStates')

const emptyStates = {
  users: {
    icon: 'close',
    text: '.users.text',
  },
  userPosts: {
    icon: 'close',
    text: '.userPosts.text',
  },
  postComments: {
    icon: 'close',
    text: '.postComments.text'
  },
  userTodos: {
    icon: 'close',
    text: '.userTodos.text'
  },
  userAlbums: {
    icon: 'close',
    text: '.userAlbums.text'
  },
  userAlbum: {
    icon: 'close',
    text: '.userAlbum.text'
  },
}

class EmptyState extends Component {
  render () {
    const { icon, text } = emptyStates[this.props.type]

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.iconWrapper}>
            <Icon name={icon} size={100} color={Colors.grey.lighter} />
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
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    backgroundColor: Colors.white,
    borderRadius: 100,
    height: 175,
    width: 175,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: Colors.grey.lighter,
  },
  text: {
    marginTop: 40,
    fontSize: 20,
    color: Colors.text.base,
  },
})

export default EmptyState

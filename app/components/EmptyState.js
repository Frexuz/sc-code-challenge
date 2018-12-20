import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import _ from 'lodash'

import { Colors } from '@design'
import { Icon } from '@components'
import { scopedI18n } from '@utils'

const t = scopedI18n('emptyStates')

const emptyStates = {
  users: {
    icon: 'close-circle-outline',
    text: '.users.text',
  },
  userPosts: {
    icon: 'close-circle-outline',
    text: '.userPosts.text',
  },
  postComments: {
    icon: 'close-circle-outline',
    text: '.postComments.text'
  },
  userTodos: {
    icon: 'close-circle-outline',
    text: '.userTodos.text'
  },
  userAlbums: {
    icon: 'close-circle-outline',
    text: '.userAlbums.text'
  },
  userAlbum: {
    icon: 'close-circle-outline',
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
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderColor: Colors.grey.lighter,
  },
  text: {
    marginTop: 40,
    fontSize: 20,
    color: '#000',
  },
})

export default EmptyState

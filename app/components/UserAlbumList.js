import React, { Component } from 'react'
import { FlatList, View } from 'react-native'

import { UserAlbum, UserCard } from '@components'

class UserAlbumList extends Component {
  renderItem = ({ item, index }) => {
    return <UserAlbum album={item} index={index} onPress={() => Navigate.to('UserAlbum', { album: item })} />
  }

  render () {
    const { albums, user } = this.props

    return (
      <View>
        <UserCard user={user} containerStyle={{ margin: 0, borderRadius: 0 }} minimal />
        <FlatList data={albums} renderItem={this.renderItem} />
      </View>
    )
  }
}

export default UserAlbumList

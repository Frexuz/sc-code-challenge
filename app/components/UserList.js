import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { Navigate } from '@screens'

import { UserCard } from '@components'

class UserList extends Component {
  onPress = (user) => {
    Navigate.to('UserProfile', { user: user })
  }

  renderItem = ({ item }) => {
    return <UserCard user={item} onPress={() => this.onPress(item)} />
  }

  render () {
    const { users } = this.props

    return (
      <FlatList data={users} renderItem={this.renderItem} style={{ padding: 10 }} />
    )
  }
}

export default UserList

import React, { Component } from 'react'
import { Navigate } from '@screens'

import { List, UserCard } from '@components'

class UserList extends Component {
  onPress = (user) => {
    Navigate.to('UserProfile', { user: user })
  }

  render () {
    const { users } = this.props

    return (
      <List containerStyle={{ padding: 10 }}>
        {users.map(user => <UserCard user={user} onPress={() => this.onPress(user)} />)}
      </List>
    )
  }
}

export default UserList

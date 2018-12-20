import React, { Component } from 'react'

import { List, UserCard } from '@components'

class UserList extends Component {
  render () {
    const { users } = this.props

    return (
      <List containerStyle={{ padding: 10 }}>
        {users.map(user => <UserCard user={user} />)}
      </List>
    )
  }
}

export default UserList

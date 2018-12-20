import React, { Component } from 'react'

import { UserTodosContainer } from '@containers'

class UserTodosScreen extends Component {
  render () {
    const { user } = this.props

    return (
      <UserTodosContainer user={user} />
    )
  }
}

export default UserTodosScreen

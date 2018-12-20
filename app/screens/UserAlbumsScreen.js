import React, { Component } from 'react'

import { UserAlbumsContainer } from '@containers'

class UserAlbumsScreen extends Component {
  render () {
    const { user } = this.props

    return (
      <UserAlbumsContainer user={user} />
    )
  }
}

export default UserAlbumsScreen

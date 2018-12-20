import React, { Component } from 'react'

import { UserAlbumContainer } from '@containers'

class UserAlbumScreen extends Component {
  render () {
    const { album } = this.props

    return (
      <UserAlbumContainer album={album} />
    )
  }
}

export default UserAlbumScreen

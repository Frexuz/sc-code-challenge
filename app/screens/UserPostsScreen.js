import React, { Component } from 'react'
import _ from 'lodash'

import { UserPostsContainer } from '@containers'

class UserPostsScreen extends Component {
  render () {
    const { user } = this.props

    return (
      <UserPostsContainer user={user} />
    )
  }
}

export default UserPostsScreen

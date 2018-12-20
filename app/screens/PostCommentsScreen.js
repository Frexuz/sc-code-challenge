import React, { Component } from 'react'

import { PostCommentsContainer } from '@containers'

class PostCommentsScreen extends Component {
  render () {
    const { post } = this.props

    return (
      <PostCommentsContainer post={post} />
    )
  }
}

export default PostCommentsScreen

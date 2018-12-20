import React, { Component } from 'react'

import { PostCommentList, ContentPlaceholder, EmptyState, RefreshableScrollView } from '@components'
import { getPostComments } from '@actions/PostCommentActions'

class PostCommentsContainer extends Component {
  state = {
    comments: [],
    isFetching: false,
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = async() => {
    this.setState({ comments: [], isFetching: true })
    getPostComments(this.props.post.id).then(response => {
      this.setState({ comments: response.data, isFetching: false })
    }).catch(() => {
      this.setState({ isFetching: false })
    })
  }

  render() {
    const { post } = this.props
    const { comments, isFetching } = this.state

    if (isFetching) {
      return (
        <ContentPlaceholder style={{ margin: 20 }} />
      )
    }

    if (comments.length === 0) {
      return (
        <EmptyState type='postComments' />
      )
    }
    return (
      <RefreshableScrollView fetchData={this.fetchData}>
        <PostCommentList comments={comments} post={post} />
      </RefreshableScrollView>
    )
  }
}

export default PostCommentsContainer

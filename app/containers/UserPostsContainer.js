import React, { Component } from 'react'
import { connect } from 'react-redux'

import { UserPostList, ContentPlaceholder, EmptyState, RefreshableScrollView } from '@components'
import { getUserPosts } from '@actions/UserPostActions'

class UserPostsContainer extends Component {
  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = async() => {
    this.props.dispatch(getUserPosts(this.props.user.id))
  }

  render() {
    const { isFetching, postsByUserId, user } = this.props

    if (isFetching) {
      return (
        <ContentPlaceholder style={{ margin: 20 }} />
      )
    }

    const posts = postsByUserId[user.id]
    if (!posts || posts.length === 0) {
      return (
        <EmptyState type='userPosts' />
      )
    }
    
    return (
      <RefreshableScrollView fetchData={this.fetchData}>
        <UserPostList posts={posts} user={user} />
      </RefreshableScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.userPosts.isFetching,
  postsByUserId: state.userPosts.byUserId,
})

export default connect(mapStateToProps)(UserPostsContainer)

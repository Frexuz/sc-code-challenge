import React, { Component } from 'react'
import { FlatList, View } from 'react-native'

import { UserPost, Title, Content } from '@components'

class UserPostList extends Component {
  renderItem = ({ item }) => {
    return <UserPost post={item} />
  }

  render () {
    const { posts, user } = this.props

    return (
      <Content containerStyle={{ padding: 10 }}>
        <Title text={`Posts by ${user.username}`} textStyle={{ margin: 10 }} />
        <FlatList data={posts} renderItem={this.renderItem} />
      </Content>
    )
  }
}

export default UserPostList

import React, { Component } from 'react'
import { FlatList } from 'react-native'

import { UserPost, Title, Content } from '@components'
import { scopedI18n } from '@utils'

const t = scopedI18n('components.userPostList')

class UserPostList extends Component {
  renderItem = ({ item }) => {
    return <UserPost post={item} />
  }

  render () {
    const { posts, user } = this.props

    return (
      <Content containerStyle={{ padding: 10 }}>
        <Title text={t('.postsBy', { username: user.username })} textStyle={{ margin: 10 }} />
        <FlatList data={posts} renderItem={this.renderItem} />
      </Content>
    )
  }
}

export default UserPostList

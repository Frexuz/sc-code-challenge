import React, { Component } from 'react'
import { FlatList, View } from 'react-native'

import { PostComment, UserPost, Content, Header } from '@components'

class PostCommentList extends Component {
  renderItem = ({ item }) => {
    return <PostComment comment={item} />
  }

  render () {
    const { comments, post } = this.props

    return (
      <View>
        <UserPost post={post} commentsLink={false} containerStyle={{ margin: 0, borderRadius: 0 }} />
        <Content containerStyle={{ padding: 10 }}>
          <FlatList data={comments} renderItem={this.renderItem} />
        </Content>
      </View>
    )
  }
}

export default PostCommentList

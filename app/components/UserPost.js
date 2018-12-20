import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Colors } from '@design'
import { Card, Link, Content, Icon, Row } from '@components'

class UserPost extends PureComponent {
  render = () => {
    const { post } = this.props

    return (
      <Card containerStyle={{ margin: 10, padding: 0 }}>
        <Content containerStyle={{ padding: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>{post.title}</Text>
          <Text style={{ marginTop: 10, color: Colors.grey.base }}>{post.body}</Text>
        </Content>
        <View style={{ padding: 5, paddingHorizontal: 15, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: Colors.tint.black25 }}>
          <Link rightArrow onPress={() => {}}>
            <Icon name='comment-multiple-outline' color={Colors.link} size={16}  />
            <Text style={{ marginLeft: 5, color: Colors.link}}>View comments</Text>
          </Link>
        </View>
      </Card>
    )
  }
}

export default UserPost

import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Colors } from '@design'
import { Navigate } from '@screens'
import { Card, Link, Content, Icon, Row } from '@components'
import { scopedI18n } from '@utils'

const t = scopedI18n('components.userPost')

class UserPost extends PureComponent {
  render = () => {
    const { post, commentsLink, containerStyle } = this.props

    return (
      <Card containerStyle={[{ margin: 10, padding: 0 }, containerStyle]}>
        <Content containerStyle={{ padding: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>{post.title}</Text>
          <Text style={{ marginTop: 10, color: Colors.grey.base }}>{post.body}</Text>
        </Content>
        {commentsLink !== false && (
          <View style={{ padding: 5, paddingHorizontal: 15, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: Colors.tint.black25 }}>
            <Link rightArrow onPress={() => Navigate.to('PostComments', { post: post })}>
              <Icon name='comment-multiple-outline' color={Colors.link} size={16}  />
              <Text style={{ marginLeft: 5, color: Colors.link}}>{t('.viewComments')}</Text>
            </Link>
          </View>
        )}
      </Card>
    )
  }
}

export default UserPost

import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

import { Colors } from '@design'
import { Card } from '@components'
import { scopedI18n } from '@utils'

const t = scopedI18n('components.postComment')

class PostComment extends PureComponent {
  render = () => {
    const { comment } = this.props

    return (
      <View style={{ margin: 10 }}>
        <Text style={{ marginBottom: 5, fontSize: 12, color: Colors.text.dark }}>{t('.commentBy', { email: comment.email })}</Text>
        <Card containerStyle={{ padding: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>{comment.name}</Text>
          <Text style={{ marginTop: 10, color: Colors.grey.base }}>{comment.body}</Text>
        </Card>
      </View>
    )
  }
}

export default PostComment

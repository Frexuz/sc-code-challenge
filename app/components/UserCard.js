import React, { PureComponent } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { Colors } from '@design'
import { Card, Icon, Row, FlexView, Avatar } from '@components'

class UserCard extends PureComponent {
  render = () => {
    const { user, onPress } = this.props

    return (
      <TouchableOpacity onPress={onPress}>
        <Card containerStyle={{ margin: 10, padding: 20 }}>
          <Row alignCenter>
            <FlexView>
              <Row>
                <Avatar user={user} size={40} />
                <View style={{ marginLeft: 20 }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{user.username}</Text>
                  <Text style={{ marginBottom: 10 }}>{user.name}</Text>
                  <Row alignCenter>
                    <Icon name='briefcase' size={16} color={Colors.grey.light} />
                    <Text style={{ marginLeft: 5, color: Colors.grey.base }}>{user.company.name}</Text>
                  </Row>
                </View>
              </Row>
            </FlexView>
            <Icon name='chevron-right' size={24} />
          </Row>
        </Card>
      </TouchableOpacity>
    )
  }
}

export default UserCard

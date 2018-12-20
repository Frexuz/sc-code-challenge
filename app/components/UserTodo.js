import React, { PureComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { Colors } from '@design'
import { Card, Content, Icon, Row } from '@components'

class UserTodo extends PureComponent {
  render = () => {
    const { todo, onPress } = this.props

    return (
      <TouchableOpacity onPress={onPress}>
        <Card containerStyle={{ margin: 10, padding: 0 }}>
          <Content containerStyle={{ padding: 20 }}>
            <Row alignCenter>
              <Icon name={todo.completed ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'} color={todo.completed ? Colors.success : Colors.grey.light} size={24} />
              <Text style={{ flex: 1, fontWeight: 'bold', marginLeft: 10, color: todo.completed ? Colors.success : Colors.text.base }}>{todo.title}</Text>
            </Row>
          </Content>
        </Card>
      </TouchableOpacity>
    )
  }
}

export default UserTodo

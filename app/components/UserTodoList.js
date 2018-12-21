import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'

import { Colors } from '@design'
import { UserTodo, UserCard, Content } from '@components'
import { scopedI18n } from '@utils'

const t = scopedI18n('components.userTodoList')

class UserTodoList extends Component {
  renderItem = ({ item }) => {
    return <UserTodo todo={item} onPress={() => this.props.onPress(item.id)} />
  }

  renderList = ({ list, title, emptyText }) => {
    return (
      <View>
        <Text style={{ marginTop: 20, marginLeft: 10, fontWeight: 'bold', color: Colors.text.dark }}>{`${title} (${list.length})`}</Text>
        {
          list.length === 0
          ? <Text style={{ marginTop: 10, marginLeft: 10, color: Colors.text.dark }}>{emptyText}</Text>
          : <FlatList data={list} renderItem={this.renderItem} />
        }
      </View>
    )
  }

  render () {
    const { todos, user } = this.props

    const incompletedItems = todos.filter(item => !item.completed)
    const completedItems = todos.filter(item => item.completed)

    return (
      <View>
        <UserCard user={user} containerStyle={{ margin: 0, borderRadius: 0 }} minimal />
        <Content containerStyle={{ padding: 10, paddingTop: 0 }}>
          {this.renderList({
            list: incompletedItems,
            title: t('.incompleted.title'),
            emptyText: t('.incompleted.emptyText')
          })}
          {this.renderList({
            list: completedItems,
            title: t('.completed.title'),
            emptyText: t('.completed.emptyText')
          })}
        </Content>
      </View>
    )
  }
}

export default UserTodoList

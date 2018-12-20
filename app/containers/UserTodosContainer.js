import React, { Component } from 'react'
import _ from 'lodash'

import { UserTodoList, ContentPlaceholder, EmptyState, RefreshableScrollView } from '@components'
import { getUserTodos } from '@actions/UserTodoActions'

class UserTodosContainer extends Component {
  state = {
    todos: [],
    isFetching: false,
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = async() => {
    this.setState({ todos: [], isFetching: true })
    getUserTodos(this.props.user.id).then(response => {
      this.setState({ todos: response.data, isFetching: false })
    }).catch(() => {
      this.setState({ isFetching: false })
    })
  }

  toggleTodoCompletion = (todoId) => {
    const { todos } = this.state
    todos.forEach(item => {
      if (item.id === todoId) {
        item.completed = !item.completed
      }
    })
    this.setState({ todos })
  }

  render() {
    const { user } = this.props
    const { todos, isFetching } = this.state

    if (isFetching) {
      return (
        <ContentPlaceholder style={{ margin: 20 }} />
      )
    }

    if (todos.length === 0) {
      return (
        <EmptyState type='userTodos' />
      )
    }
    
    return (
      <RefreshableScrollView fetchData={this.fetchData}>
        <UserTodoList todos={todos} user={user} onPress={this.toggleTodoCompletion} />
      </RefreshableScrollView>
    )
  }
}

export default UserTodosContainer

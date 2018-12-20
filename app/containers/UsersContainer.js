import React, { Component } from 'react'
import { connect } from 'react-redux'

import { hashToFlatArray } from '@utils'
import { UserList, ContentPlaceholder, EmptyState, RefreshableScrollView } from '@components'
import { getUsers } from '@actions/UserActions'

class UsersContainer extends Component {
  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = async() => {
    this.props.dispatch(getUsers())
  }

  render() {
    const { isFetching, usersById } = this.props

    if (isFetching) {
      return (
        <ContentPlaceholder style={{ margin: 20 }} />
      )
    }

    const users = hashToFlatArray(usersById)
    if (users.length === 0) {
      return (
        <EmptyState type='users' />
      )
    }

    return (
      <RefreshableScrollView fetchData={this.fetchData}>
        <UserList users={users} />
      </RefreshableScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.users.isFetching,
  usersById: state.users.byId,
})

export default connect(mapStateToProps)(UsersContainer)

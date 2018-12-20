import React, { Component } from 'react'
import _ from 'lodash'

import { UserAlbumList, ContentPlaceholder, EmptyState, RefreshableScrollView } from '@components'
import { getUserAlbums } from '@actions/UserAlbumActions'

class UserAlbumsContainer extends Component {
  state = {
    albums: [],
    isFetching: false,
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = async() => {
    this.setState({ albums: [], isFetching: true })
    getUserAlbums(this.props.user.id).then(response => {
      this.setState({ albums: response.data, isFetching: false })
    }).catch(() => {
      this.setState({ isFetching: false })
    })
  }

  render() {
    const { user } = this.props
    const { albums, isFetching } = this.state

    if (isFetching) {
      return (
        <ContentPlaceholder style={{ margin: 20 }} />
      )
    }

    if (albums.length === 0) {
      return (
        <EmptyState type='userAlbums' />
      )
    }

    return (
      <RefreshableScrollView fetchData={this.fetchData}>
        <UserAlbumList albums={albums} user={user} />
      </RefreshableScrollView>
    )
  }
}

export default UserAlbumsContainer

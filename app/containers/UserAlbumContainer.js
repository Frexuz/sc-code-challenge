import React, { Component } from 'react'
import _ from 'lodash'

import { UserAlbumPhotoList, ContentPlaceholder, EmptyState, RefreshableScrollView } from '@components'
import { getUserAlbumPhotos } from '@actions/UserAlbumActions'

class UserAlbumContainer extends Component {
  state = {
    photos: [],
    isFetching: false,
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = async() => {
    this.setState({ photos: [], isFetching: true })
    getUserAlbumPhotos(this.props.album.id).then(response => {
      this.setState({ photos: response.data, isFetching: false })
    }).catch(() => {
      this.setState({ isFetching: false })
    })
  }

  render() {
    const { album } = this.props
    const { photos, isFetching } = this.state

    if (isFetching) {
      return (
        <ContentPlaceholder style={{ margin: 20 }} />
      )
    }

    if (photos.length === 0) {
      return (
        <EmptyState type='userAlbum' />
      )
    }

    return (
      <RefreshableScrollView fetchData={this.fetchData}>
        <UserAlbumPhotoList photos={photos} />
      </RefreshableScrollView>
    )
  }
}

export default UserAlbumContainer

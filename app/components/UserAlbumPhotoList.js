import React, { Component } from 'react'
import { View, Image, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

class UserAlbumPhotoList extends Component {
  renderItem = ({ photo }) => {
    return <Image source={{ url: photo.thumbnailUrl }} style={{ width: width / 3, height: width / 3 }} />
  }

  render () {
    const { photos } = this.props

    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {photos.map(photo => this.renderItem({ photo }))}
      </View>
    )
  }
}

export default UserAlbumPhotoList

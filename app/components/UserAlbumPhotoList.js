import React, { Component } from 'react'
import { View, Image, Dimensions, TouchableOpacity, Modal } from 'react-native'

import { Colors } from '@design'

const { width } = Dimensions.get('window')

class UserAlbumPhotoList extends Component {
  state = {
    selectedPhotoUrl: null
  }

  renderItem = ({ photo }) => {
    return (
      <TouchableOpacity onPress={() => this.setState({ selectedPhotoUrl: photo.url })}>
        <Image source={{ url: photo.thumbnailUrl }} style={{ width: width / 3, height: width / 3 }} />
      </TouchableOpacity>
    )
  }

  closeModal = () => {
    this.setState({ selectedPhotoUrl: null })
  }

  render () {
    const { photos } = this.props
    const { selectedPhotoUrl } = this.state

    return (
      <View>
        <Modal
          animationType='slide'
          transparent={false}
          visible={selectedPhotoUrl !== null}
          onRequestClose={this.closeModal}
        >
          <TouchableOpacity onPress={this.closeModal} style={{ flex: 1, backgroundColor: Colors.black, justifyContent: 'center' }}>
            <View style={{ backgroundColor: Colors.grey.darkest, width: width, height: width }}>
              <Image source={{ uri: selectedPhotoUrl }} style={{ width: width, height: width }} />
            </View>
          </TouchableOpacity>
        </Modal>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {photos.map(photo => this.renderItem({ photo }))}
        </View>
      </View>
    )
  }
}

export default UserAlbumPhotoList

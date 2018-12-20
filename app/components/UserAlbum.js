import React, { PureComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { ListItem } from '@components'
import { Navigate } from '@screens'

class UserAlbum extends PureComponent {
  render = () => {
    const { album, index } = this.props

    return (
      <TouchableOpacity>
        <ListItem
          icon='image-filter'
          text={album.title}
          rightArrow
          onPress={() => Navigate.to('UserAlbum', { album: album })}
          borderless={index === 0}
        />
      </TouchableOpacity>
    )
  }
}

export default UserAlbum

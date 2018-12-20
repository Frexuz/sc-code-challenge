import React, { PureComponent } from 'react'
import { Image, View } from 'react-native'

import { Colors } from '@design'

class Avatar extends PureComponent {
  render = () => {
    const { user, size } = this.props
    const imageSize = size || 64

    return (
      <View style={{ backgroundColor: Colors.grey.lightest, borderRadius: imageSize / 2, overflow: 'hidden', width: imageSize, height: imageSize }}>
        <Image source={{ uri: `https://api.adorable.io/avatars/${imageSize}/${user.email}.png` }} style={{ width: imageSize, height: imageSize }} />
      </View>
    )
  }
}

export default Avatar

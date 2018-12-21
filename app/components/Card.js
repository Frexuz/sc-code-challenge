import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Colors } from '@design'

const Card = ({ containerStyle, children }) => (
  <View style={[styles.card, containerStyle]}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    padding: 10,
    elevation: 3,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 5
  }
})

export default Card

import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = ({ containerStyle, children }) => (
  <View style={[styles.card, containerStyle]}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 5
  }
})

export default Card

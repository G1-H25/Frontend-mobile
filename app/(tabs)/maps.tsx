import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Background from '../components/Background'
import { colors } from '../theme/colors'

const maps = () => {
  return (
    <Background>
      <Text style={styles.text}>maps</Text>
    </Background>
  )
}

export default maps

const styles = StyleSheet.create({
    text: {
        color: colors.white,
    }
})
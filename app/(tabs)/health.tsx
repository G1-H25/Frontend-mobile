import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Background from '../components/Background'
import { colors } from '../theme/colors'

const health = () => {
  return (
    <Background>
      <Text style={styles.text}>health overview</Text>
    </Background>
  )
}

export default health

const styles = StyleSheet.create({
  text: {
    color: colors.white
  }
})
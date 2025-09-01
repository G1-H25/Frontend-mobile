import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Background from '../components/Background'
import { colors } from '../theme/colors'

const scan = () => {
  return (
    <Background>
      <Text style={styles.text}>scan</Text>
    </Background>
  )
}

export default scan

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  }
})
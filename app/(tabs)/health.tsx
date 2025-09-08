import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Background from '../components/Background'
import { colors } from '../theme/colors'
import fonts from '../theme/fonts'

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
    color: colors.white,
    alignSelf: 'center',
    fontSize: 24,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginTop: 20,
    fontFamily: fonts.FigtreeRegular,
    fontWeight: "600",
  },
})
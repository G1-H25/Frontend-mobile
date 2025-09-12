import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Background from '../components/Background'
import { colors } from '../theme/colors'

const health = () => {
  return (
        <View style={styles.container}>
    <Background>
      <Text style={styles.text}>health overview</Text>
    </Background>
    </View>
  )
}

export default health

const styles = StyleSheet.create({
    container: { 
    flex: 1, 
    paddingTop: 30,
  },
text: {
    color: colors.bright,
    alignSelf: 'center',
    fontSize: 20,
    letterSpacing: 0.25,
    textTransform: "uppercase",
    marginTop: 40,
    fontFamily: 'Figtree-Bold',
  },
})
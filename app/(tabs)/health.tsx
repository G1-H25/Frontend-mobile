import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BackgroundAlt from "../components/BackgroundAlt";
import { colors } from '../theme/colors'

const health = () => {
  return (
        <View style={styles.container}>
    <BackgroundAlt>
      <Text style={styles.text}>health overview</Text>
    </BackgroundAlt>
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
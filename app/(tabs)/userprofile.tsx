import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Background from '../components/Background'
import BackgroundLight from '../components/BackgroundLight'
import BigButton from '../components/BigButton'
import { colors } from '../theme/colors'

const userprofile = () => {
  return (
    <Background>
        <Text style={styles.header}>Userprofile</Text>
        <BackgroundLight>
      <Text style={styles.text}>userprofile</Text><BigButton title="button"/></BackgroundLight>
      
    </Background>
  )
}

export default userprofile

const styles = StyleSheet.create({
    text: {
        color: colors.white,
    },
    header: {
        color: colors.white,
        alignSelf: 'center',
        marginTop: 20,
    }
})
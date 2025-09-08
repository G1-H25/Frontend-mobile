import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Background from '../components/Background'
import BackgroundLight from '../components/BackgroundLight'
import BigButton from '../components/BigButton'
import { colors } from '../theme/colors'
import fonts from '../theme/fonts'
import { TextInput } from 'react-native-gesture-handler'

const userprofile = () => {
  return (
    <Background>
        <Text style={styles.header}>Userprofile</Text>
        <BackgroundLight>
          <View style={styles.card}>
      <Text style={styles.text}>userprofile</Text>
      <TextInput placeholder='Username' style={styles.input}/>
      <TextInput placeholder='Password' secureTextEntry={true} style={styles.input}/>
      <TextInput placeholder='Confirm Password' secureTextEntry={true} style={styles.input}/>
      <BigButton title="SIGN UP"/>
      <Text style={{marginTop: 40, color: colors.white, fontWeight: "600",}}>Already have an account?</Text>
      <BigButton title="LOGIN"/>
          </View>
      </BackgroundLight>
    </Background>
  )
}

export default userprofile

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.darkblue,
    width: "95%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    fontFamily: fonts.FigtreeRegular,
    fontSize: 16,
    width: 260,
    color: colors.white,
  },
    text: {
    color: colors.lightblue,
    alignSelf: 'center',
    fontSize: 18,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginVertical: 20,
    fontFamily: fonts.FigtreeRegular,
    fontWeight: "400",
    },
    header: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 24,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginTop: 30,
    fontFamily: fonts.FigtreeRegular,
    fontWeight: "600",
    }
})
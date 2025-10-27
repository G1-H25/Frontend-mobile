import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import BackgroundLong from '../components/BackgroundLong'
import { colors } from '../theme/colors'
import HomeLogin from '../components/HomeLogin'

const home = () => {
  return (
        <View style={styles.container}>
    <BackgroundLong>
      <Text style={styles.text}>Start</Text>
      <View style={styles.homeBox}>
        <HomeLogin/>
        <Image source={require('../../assets/logos/logo-trackpack-2.png')} style={styles.logo} />
      </View>
    </BackgroundLong>
    </View>
  )
}

export default home;

const styles = StyleSheet.create({
    container: { 
    flex: 1, 
    paddingTop: 30,
  },
  homeBox: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: colors.bright,
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
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
})
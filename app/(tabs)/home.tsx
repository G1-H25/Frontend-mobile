import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import BackgroundLong from '../components/BackgroundLong'
import { colors } from '../theme/colors'
import HomeComponent from '../components/HomeComponent'

const home = () => {
  return (
        <View style={styles.container}>
    <BackgroundLong>
      <HomeComponent/>
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
    marginTop: 20,
    marginHorizontal: 20,
    marginVertical: 40,
    borderRadius: 10,
    backgroundColor: colors.lightblue,
    position: 'relative',
    zIndex: 1,
    top: 100,
  },
title: {
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
    marginBottom: -70,
    position: 'absolute',
    zIndex: 2,
    top: 100,
  },
  text: {
    color: colors.darkblue,
    fontSize: 17,
    padding: 20,
    marginTop: 90,
    fontFamily: 'Figtree-Regular',
    textAlign: 'center',
  },
})
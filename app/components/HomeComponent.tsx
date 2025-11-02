import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import BackgroundLong from '../components/BackgroundLong'
import { colors } from '../theme/colors'

const HomeComponent = () => {
  return (
        <View style={styles.container}>
    <BackgroundLong>
      <Text style={styles.title}>Start</Text>
      <Image source={require('../../assets/logos/logo-trackpack-2.png')} style={styles.logo} />
      <View style={styles.homeBox}>
        
     <Text style={styles.text}>Välkommen till TrackPack!{"\n"}{"\n"}
Här kan du som användare enkelt hålla koll på dina paket och leveranser.{"\n"}{"\n"}
Med vår app får du realtidsuppdateringar, aviseringar och en smidig översikt över alla dina försändelser.{"\n"}{"\n"}
Börja med att lägga till dina paket och upplev en ny nivå av bekvämlighet i din vardag!
     </Text>
        </View>
    </BackgroundLong>
    </View>
  )
}

export default HomeComponent;

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
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import  LoginComponent from "../components/LoginComponent";
import BackgroundAlt from "../components/BackgroundAlt";
import { colors } from '../theme/colors';

const login = () => {
  return (
        <View style={styles.container}>
    <BackgroundAlt>
            <Text style={styles.text}>Start</Text>
      <View style={styles.loginBox}>
      <LoginComponent />
      </View>
    </BackgroundAlt>
    </View>
  )
}

export default login;

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    paddingTop: 30,
},
loginBox: {
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
});

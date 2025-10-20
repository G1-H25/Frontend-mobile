import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LoginComponent } from "../components/LoginComponent";
import Background from '../components/Background';
import { colors } from '../theme/colors';

const home = () => {
  return (
        <View style={styles.container}>
    <Background>
      <Text style={styles.text}>Start</Text>
      <LoginComponent />
    </Background>
    </View>
  )
}

export default home;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
},
  title: { 
    fontSize: 24, 
    marginBottom: 20,
    color: colors.bright,
},
});

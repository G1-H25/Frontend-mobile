import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import AnimatedLogo from "./components/AnimatedLogo";
import { colors } from "./theme/colors";
import Background from "./components/Background";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Navigera till home efter 4 sekunder
    const timer = setTimeout(() => {
      router.replace("/home"); 
    }, 4000);

    return () => clearTimeout(timer); 
  }, [router]);

  return (
        <GestureHandlerRootView style={{ flex: 1, paddingTop: 30, }}>
    <Background>
    <View style={styles.container}>

      <View style={styles.circle}>
                <AnimatedLogo />
</View>
      <Text style={styles.text}>Welcome to TrackApp</Text>
      <Text style={styles.smalltext}>2025 Copyright &copy; by Team One</Text>
    </View>
    </Background>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    marginTop: 160,
  },
    circle: {
    marginTop: 40,
    flex: 0,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.bright,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
    logo: {     
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  text: { 
    fontSize: 18, 
    marginTop: 20,
    fontWeight: "500",
    letterSpacing: 4,
    color: colors.bright,
    fontFamily: "Figtree",
    textTransform: "uppercase",
  },
    smalltext: {
    fontSize: 13.5, 
    textAlign: "center",
    marginTop: 260,
    marginBottom: 20,
    color: colors.bright,
    fontFamily: "Figtree-Medium",
  },    
});
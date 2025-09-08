import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import AnimatedLogo from "./components/AnimatedLogo";
import fonts from "./theme/fonts";
import { colors } from "./theme/colors";
import Background2 from "./components/Background";


export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Navigera till home efter 4 sekunder
    const timer = setTimeout(() => {
      router.replace("/home"); // "replace" tar bort splash-skärmen från historiken
    }, 6000);

    return () => clearTimeout(timer); // Rensa timeout om komponenten avmonteras
  }, [router]);

  return (
    <Background2>
    <View style={styles.container}>

      <View style={styles.circle}>
                <AnimatedLogo />
{/* <Image source={require("../assets/logos/logo-trackpack-1.png")} style={styles.logo} /> */}
</View>
      <Text style={styles.text}>Welcome</Text>
    </View>
    </Background2>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: colors.darkblue,
  },
    circle: {
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
    color: "#D9F2FF",
    fontFamily: fonts.figtreeItalic,
    textTransform: "uppercase",
  },
});
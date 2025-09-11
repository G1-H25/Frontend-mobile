import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Background from "../components/Background";
import { colors } from "../theme/colors";
import MapComponent from "../components/MapComponent";

const maps = () => {
  return (
    <View style={styles.container}>
    <Background>
      <Text style={styles.text}>Map View</Text>
    <View style={{ flex: 1 }}>
      <MapComponent />
    </View>
</Background>
    </View>
  );
};

export default maps;

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
});

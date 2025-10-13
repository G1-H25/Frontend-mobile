import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackgroundAlt from "../components/BackgroundAlt";
import BackgroundLight from "../components/BackgroundLight";
import ClearStorageButton from "../components/ClearStorageButton";
import { colors } from "../theme/colors";

const Packages = () => {
  

  return (
    <View style={styles.container}>
      <BackgroundAlt>
        <Text style={styles.text}>Packages</Text>
        <BackgroundLight>         
            <ClearStorageButton />
        </BackgroundLight>
      </BackgroundAlt>
    </View>
  );
};

export default Packages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  text: {
    color: colors.bright,
    alignSelf: "center",
    fontSize: 20,
    letterSpacing: 0.25,
    textTransform: "uppercase",
    marginTop: 40,
    fontFamily: "Figtree-Bold",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  }
});

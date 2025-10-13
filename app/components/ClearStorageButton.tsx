import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Alert, Pressable, StyleSheet, Text } from "react-native";
import colors from "../theme/colors";

const ClearStorageButton = () => {
  const handleClear = async () => {
    try {
      await AsyncStorage.removeItem("scannedData");
      Alert.alert("Success", "All scanned packages have been cleared.");
      console.log("AsyncStorage cleared");
    } catch (error) {
      console.error("Error clearing AsyncStorage", error);
      Alert.alert("Error", "Could not clear storage.");
    }
  };

  return (
    <Pressable style={styles.button} onPress={handleClear}><Text style={styles.buttonText}>Clear AsyncStorage</Text></Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.clearblue,
    padding: 4,
    borderRadius: 40,
    alignSelf: "center",
    paddingHorizontal: 12,
  },
  buttonText: {
    color: colors.lightblue,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
})

export default ClearStorageButton;

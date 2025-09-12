import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Alert, Button } from "react-native";

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
    <Button title="Clear all packages" color="#fff" onPress={handleClear}/>
  );
};

export default ClearStorageButton;

import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../theme/colors";

export default function Scan() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, [permission]);

  const handleBarCodeScanned = async (result: BarcodeScanningResult) => {
    if (!scanned) {
      setScanned(true);
      alert(`Scanned: ${result.data}`);
      setData(result.data);

      try {
        const parsed = JSON.parse(result.data);

        const stored = await AsyncStorage.getItem("scannedData");
        let packages = [];

        if (stored) {
          const parsedStored = JSON.parse(stored);
          packages = Array.isArray(parsedStored) ? parsedStored : [];
        }

        const updated = [...packages, parsed];

        await AsyncStorage.setItem("scannedData", JSON.stringify(updated));

      } catch (error) {
        console.error("Error saving data", error);
      }
    }
  };

  if (!permission) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text>No access to camera</Text>
        <Button title="Allow Camera" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Camera feed */}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      />

      {/* Overlay */}
      <View style={styles.overlay}>
        {/* Square guide */}
        <View style={styles.square} />

        {/* Round button */}
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => setScanned(false)} // reset scanning
        >
          <Ionicons name="scan-outline" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },

  square: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: colors.greenok,
    borderRadius: 10,
    backgroundColor: "transparent",
  },

  roundButton: {
    position: "absolute",
    bottom: 20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#1E90FF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },

  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});

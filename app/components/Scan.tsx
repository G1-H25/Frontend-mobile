import updatePackageStatus from "@/utils/updatePackageStatus";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { usePackages } from "../context/PackagesProvider";
import { colors } from "../theme/colors";
import { Package } from "../types/types";

export default function Scan() {
  const { packages, loading, error } = usePackages();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState<string | null>(null);
  const [currentPkg, setCurrentPkg] = useState<Package | null>(null);

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, [permission]);

  const handleBarCodeScanned = async (result: BarcodeScanningResult) => {
    if (!scanned) {
      setScanned(true);
      setData(result.data);
      // console.log(result.raw); //loggar endast QR-kodens resultat i form av ett specifikt id-nummer
      const scannedId = Number(result.data);
      const found = packages.find((pkg) => pkg.sändningsnr === scannedId);

      if (found) {
        setCurrentPkg(found);
        try {
          const stored = await AsyncStorage.getItem("scannedData");
          const savedPackages: Package[] = stored ? JSON.parse(stored) : [];

          const alreadyExists = savedPackages.some(
            (pkg) => pkg.sändningsnr === found.sändningsnr
          );

          if (alreadyExists) {
            Alert.alert(
              "Confirm checkout",
              `Check out package with id ${scannedId}`,
              [
                {
                  text: "Cancel",
                  style: "cancel",
                  onPress: async () => {
                    console.log("Cancelled");
                    setScanned(true);
                  },
                },
                { text: "OK", 
                  onPress: async () => {
                  const updated = savedPackages.filter(
                    (pkg) => pkg.sändningsnr !== found.sändningsnr
                  );

                  await AsyncStorage.setItem("scannedData", JSON.stringify(updated));
                  await updatePackageStatus(scannedId);
                setScanned(true);
                }  
              },
              ]
            );

            // alert(`Package checked out: ${found.sändningsnr}`);
          } else {
            const updated = [...savedPackages, found];
            await AsyncStorage.setItem("scannedData", JSON.stringify(updated));
            await updatePackageStatus(scannedId);
            alert(`Package checked in: ${found.sändningsnr}`);
          }
        } catch (error) {
          console.log("Error");
          alert("Error");
        }
      } else {
        console.log(`No package with ID: ${scannedId} found`);
        alert(`No package with ID ${result.raw} found`);
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

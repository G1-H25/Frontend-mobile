import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import BackgroundAlt from "../components/BackgroundAlt";
import BackgroundLight from "../components/BackgroundLight";
import ClearStorageButton from "../components/ClearStorageButton";
import PackageObject from "../components/PackageObject";
import UpdateScreen from "../components/UpdateScreen";
import { colors } from "../theme/colors";

const Packages = () => {
  const [packageData, setPackageData] = useState<
    {
      id: string;
      name: string;
      weight: number;
      from: string;
      destination: string;
    }[]
  >([]);

  // 1 Define fetchData in component scope
  const fetchData = async () => {
    const data = await AsyncStorage.getItem("scannedData");
    if (data) {
      setPackageData(JSON.parse(data));
    } else {
      setPackageData([]);
    }
  };

  // 2 Call fetchData when component mounts
  useEffect(() => {
    fetchData();
  }, []);

return (
    <View style={styles.container}>
    <BackgroundAlt>
              <Text style={styles.text}>Packages</Text>
      <BackgroundLight>
        {/* UpdateScreen calls fetchData whenever screen is focused */}
        <UpdateScreen callback={fetchData} />
{packageData.length > 0 ? (
  packageData.map((pkg, idx) => (
    <PackageObject key={pkg.id || idx} index={idx + 1} {...pkg} />
  ))
) : (
  <Text style={{textAlign: "center", marginVertical: 60, color: colors.darkblue, fontSize: 20, fontFamily: 'Figtree-Medium',}}>
    No package data yet.</Text>
)}
          <Pressable style={styles.button}>
        <ClearStorageButton/> 
          </Pressable>
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
    alignSelf: 'center',
    fontSize: 20,
    letterSpacing: 0.25,
    textTransform: "uppercase",
    marginTop: 40,
    fontFamily: 'Figtree-Bold',
  },
    overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: colors.clearblue,
    padding: 4,
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: 10,
    width: "60%",
  },
  buttonText: {
    color: colors.darkblue,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});

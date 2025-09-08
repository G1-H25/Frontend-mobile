import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BackgroundAlt from "../components/BackgroundAlt";
import BackgroundLight from "../components/BackgroundLight";
import ClearStorageButton from "../components/ClearStorageButton";
import PackageObject from "../components/PackageObject";
import UpdateScreen from "../components/UpdateScreen";
import { colors } from "../theme/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import fonts from "../theme/fonts";

const Home = () => {
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
              <Text style={styles.text}>Checked in items</Text>
      <BackgroundLight>
        {/* UpdateScreen calls fetchData whenever screen is focused */}
        <UpdateScreen callback={fetchData} />
{packageData.length > 0 ? (
  packageData.map((pkg, idx) => (
    <PackageObject key={pkg.id || idx} index={idx + 1} {...pkg} />
  ))
) : (
  <Text style={{textAlign: "center", marginVertical: 10}}>No package data yet</Text>
)}

        <ClearStorageButton>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Clear all packages</Text>
          </TouchableOpacity>
          </ClearStorageButton> 
      </BackgroundLight>
    </BackgroundAlt>
</View>
);
};

export default Home;

const styles = StyleSheet.create({
    container: { 
    flex: 1, 
    paddingTop: 20,
  },
  text: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 24,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginTop: 20,
    fontFamily: fonts.FigtreeRegular,
    fontWeight: "600",
  },
    overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.darkblue,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});

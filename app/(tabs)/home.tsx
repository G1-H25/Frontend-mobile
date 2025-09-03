import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import Background from "../components/Background";
import BackgroundLight from "../components/BackgroundLight";
import ClearStorageButton from "../components/ClearStorageButton";
import PackageObject from "../components/PackageObject";
import UpdateScreen from "../components/UpdateScreen";
import { colors } from "../theme/colors";

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

  // 1️⃣ Define fetchData in component scope
  const fetchData = async () => {
    const data = await AsyncStorage.getItem("scannedData");
    if (data) {
      setPackageData(JSON.parse(data));
    } else {
      setPackageData([]);
    }
  };

  // 2️⃣ Run once on mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Background>
      <BackgroundLight>
        <Text style={styles.text}>home</Text>

        {/* UpdateScreen calls fetchData whenever screen is focused */}
        <UpdateScreen callback={fetchData} />

        {packageData.length > 0 ? (
          packageData.map((pkg, idx) => (
            <PackageObject key={pkg.id || idx} {...pkg} />
          ))
        ) : (
          <Text>No package data found</Text>
        )}

        <ClearStorageButton />
      </BackgroundLight>
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
});

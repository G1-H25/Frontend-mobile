import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useAuth } from "../context/AuthContext";
import colors from "../theme/colors";
import OutOfRangeTimer from "./OutOfRangeTimer";

type SensorTemperature = {
  sensorId: number;
  gatewayId: number;
  polledAt: string;
  temperatureCel: number;
};

type SensorHumidity = {
  sensorId: number;
  gatewayId: number;
  polledAt: string;
  humidityPct: number;
};

const TruckTempHumidity = () => {
  const API_URL = process.env.EXPO_PUBLIC_AZURE_API_URL;
  const { token } = useAuth();
  const [temp, setTemp] = useState<number | null>(null);
  const [humid, setHumid] = useState<number | null>(null);

  useEffect(() => {
    if (!token) return;

    const fetchTemperature = async () => {
      try {
        const response = await fetch(`${API_URL}Sensor/sensor-temperature`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error("Failed to fetch temperature");
        const data: SensorTemperature[] = await response.json();
        if (data.length > 0) setTemp(data[0].temperatureCel);
      } catch (error) {
        console.error("Error fetching temperature:", error);
      }
    };

    const fetchHumidity = async () => {
      try {
        const response = await fetch(`${API_URL}Sensor/sensor-humidity`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error("Failed to fetch humidity");
        const data: SensorHumidity[] = await response.json();
        if (data.length > 0) setHumid(data[0].humidityPct);
      } catch (error) {
        console.error("Error fetching humidity:", error);
      }
      
    };

    fetchTemperature();
    fetchHumidity();
  }, [token]);

  const expectedTemp = { min: 2, max: 8 };
  const expectedHumidity = { min: 30, max: 70 };

  const isTempInRange =
    temp !== null && temp >= expectedTemp.min && temp <= expectedTemp.max;
  const isHumidInRange =
    humid !== null && humid >= expectedHumidity.min && humid <= expectedHumidity.max;

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>Kyl 1</Text>

      <View style={styles.row}>
        <Text style={styles.text}><Ionicons name="water-outline" size={30} color="red" />
          {humid !== null
            ?  `${humid}%`
            : <ActivityIndicator/>}
        </Text>
        {humid !== null && (
          <Ionicons
            name={isHumidInRange ? "checkmark-circle" : "warning"}
            size={35}
            color={isHumidInRange ? "green" : "red"}
            style={styles.icon}
          />
        )}
      </View>

      <View style={styles.row}>
        <Text style={styles.text}><Ionicons name="thermometer-outline" size={30} color="red" />
          {temp !== null ? `${temp}°C` : <ActivityIndicator/>}
        </Text>
        {temp !== null && (
          <Ionicons
            name={isTempInRange ? "checkmark-circle" : "warning"}
            size={35}
            color={isTempInRange ? "green" : "red"}
            style={styles.icon}
          />
        )}
      </View>
      
      
      
    </View>
    <OutOfRangeTimer active={!isTempInRange || !isHumidInRange} /></>
  );
};

export default TruckTempHumidity;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    zIndex: 100,
    backgroundColor: colors.brightopacity,
    elevation: 20,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  header: {
    color: colors.darkblue,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    fontFamily: 'Figtree-Bold',
  },
  text: {
    color: colors.darkblue,
    fontSize: 24,
    fontFamily: 'Figtree-Bold',
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  icon: {
    marginLeft: 6,
  },
});

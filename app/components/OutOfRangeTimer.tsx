import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../theme/colors";
import WarningModal from "./WarningModal";

type OutOfRangeTimerProps = {
  active: boolean; // start timer when true
};

const OutOfRangeTimer: React.FC<OutOfRangeTimerProps> = ({ active }) => {
  const [seconds, setSeconds] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    let interval: number | undefined;

    if (active) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setSeconds(0);
      setIsModalVisible(false); // hide modal if values return to range
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [active]);

  useEffect(() => {
    //TIME BEFORE THE BIG RED ALERT SHOWS
    if (seconds >= 10) {
      setIsModalVisible(true);
    }
  }, [seconds]);

  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  if (!active) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>⚠️ Tid utanför intervall {minutes}:{secs}</Text>
      {isModalVisible && (
        <WarningModal
  visible={isModalVisible}
  onClose={() => setIsModalVisible(false)}
/>

      )}
    </View>
  );
};

export default OutOfRangeTimer;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 8,
    backgroundColor: colors.bright,
    borderRadius: 6,
  },
  text: {
    color: colors.redalert,
    fontWeight: "bold",
    fontSize: 16,
  },
});

import { StyleSheet, View, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../theme/colors";
import PackageObject from "../components/PackageObject";
import Scan from "../components/Scan";
import fonts from "../theme/fonts.ts";
import Background from "../components/Background";

export default function scan() {
  const handleNothing = () => {
    Alert.alert("This does nothing yet");
  };

  return (
    <View style={styles.container}>
            <Scan style={styles.overlay} />
      <Background style={styles.listContainer}>
      <Text style={styles.title}>Your scanned item</Text>
      <View style={styles.listArea}>
        <PackageObject />
        {/* Button to confirm receipt */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleNothing}
        >
          <Text style={styles.textButton}>Sign as received</Text>
        </TouchableOpacity>
      </View>
    </Background>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: colors.darkblue,
  },
  listArea: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.bright,
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 50,
  },
  title: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 24,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginTop: 20,
    fontFamily: fonts.FigtreeRegular,
    fontWeight: "600",
  },
  button: {
    backgroundColor: colors.greenok,
    padding: 12,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10,
  },
  textButton: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});

import { StyleSheet, View, Text, Alert, Pressable } from "react-native";
import { colors } from "../theme/colors";
import PackageObject from "../components/PackageObject";
import Scan from "../components/Scan";
import Background from "../components/Background";

export default function scan() {
  const handleNothing = () => {
    Alert.alert("This does nothing yet");
  };

  return (
    <View style={styles.container}>
      <Scan style={styles.overlay} />
      <Background style={styles.listContainer}>
        <View style={styles.listArea}>
                  <Text style={styles.title}>Your scanned packages</Text>
          <PackageObject/>
          {/* Button to confirm receipt */}
          <Pressable style={styles.button} onPress={handleNothing}>
            <Text style={styles.textButton}>Sign as received</Text>
          </Pressable>
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
  },
  listArea: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.brightopacity,
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 20,
  },
  title: {
    color: colors.darkblue,
    alignSelf: "center",
    fontSize: 20,
    letterSpacing: 0.25,
    textTransform: "uppercase",
    fontFamily: "Figtree-Bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.greenok,
    padding: 12,
    borderRadius: 21,
    alignSelf: "center",
    marginVertical: 30,
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

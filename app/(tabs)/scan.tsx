import { StyleSheet, View, Text, Pressable} from "react-native";
import { colors } from "../theme/colors";
import ScannedItem from "../components/ScannedItem";
import Scan from "../components/Scan";
import Background from "../components/Background";
import NavigationButton from "../components/NavigationButton";


export default function scan() {


  return (
    <View style={styles.container}>
      <Scan style={styles.overlay} />
      <Background style={styles.listContainer}>
        <Text style={styles.title}>Your latest scan</Text>
        <View style={styles.listArea}>
          <ScannedItem/>
          <Pressable style={styles.button} >
          <NavigationButton/>
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
  },
  listArea: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.brightopacity,
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    paddingTop: 60,
  },
  title: {
    color: colors.clearblue,
    alignSelf: "center",
    fontSize: 20,
    letterSpacing: 0.25,
    textTransform: "uppercase",
    fontFamily: "Figtree-Bold",
    marginVertical: 20,
  },
  button: {
    backgroundColor: colors.bright,
    paddingVertical: 3,
    borderRadius: 21,
    alignSelf: "center",
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  textButton: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 15,
    fontFamily: "Figtree-Bold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});

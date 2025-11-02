import { Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../theme/colors.ts";

const NavigationButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="See all Packages"
        onPress={() => navigation.navigate("packages")}
      style={styles.button}
    />
  );
};

export default NavigationButton;


const styles = StyleSheet.create({
  button: {
    color: colors.white,
    padding: 4,
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: 10,
    width: "60%",
  },
});

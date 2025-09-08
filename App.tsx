import "expo-router/entry";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import fonts from "./app/theme/fonts";
import { ExpoRouter } from "expo-router";

export default function App() {
  const [fontsLoaded] = useFonts({
    [fonts.figtree300]: require("./assets/fonts/Figtree-Light.ttf"),
    [fonts.figtree400]: require("./assets/fonts/Figtree-Regular.ttf"),
    [fonts.figtree400Italic]: require("./assets/fonts/Figtree-Italic.ttf"),
    [fonts.figtree500]: require("./assets/fonts/Figtree-Medium.ttf"),
    [fonts.figtree600]: require("./assets/fonts/Figtree-SemiBold.ttf"),
    [fonts.figtree700]: require("./assets/fonts/Figtree-Bold.ttf"),
    [fonts.figtree700Italic]: require("./assets/fonts/Figtree-BoldItalic.ttf"),
    [fonts.figtree800]: require("./assets/fonts/Figtree-ExtraBold.ttf"),
    [fonts.figtree900]: require("./assets/fonts/Figtree-Black.ttf"),
    [fonts.instruction400]: require("./assets/fonts/Instruction.otf"),
    [fonts.instruction400Italic]: require("./assets/fonts/Instruction-Italic.otf"),
    [fonts.instruction700]: require("./assets/fonts/Instruction-Bold.otf"),
    [fonts.instruction700Italic]: require("./assets/fonts/Instruction-Bold-Italic.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <ExpoRouter />; // Eller  om du använder expo-router
}
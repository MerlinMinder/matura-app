import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { Homepage } from "./pages/Homepage";
import { Workoutpage } from "./pages/Workoutpage";
import { Exercisepage } from "./pages/Exercisepage";
import { Trainpage } from "./pages/Trainpage";
import { Graphpage } from "./pages/Graphpage";
import styles from "./Styles";

export default function App() {
  const SCALE = 375 / Dimensions.get("screen").width;

  const BG2 = "#454545";

  // load the WorkSans fonts
  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("./assets/fonts/WorkSans-Regular.ttf"),
    "WorkSans-SemiBold": require("./assets/fonts/WorkSans-SemiBold.ttf"),
    "WorkSans-Bold": require("./assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-Light": require("./assets/fonts/WorkSans-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar backgroundColor={"transparent"} />
      {/* <Homepage scale={SCALE} bg2={BG2} /> */}
      {/* <Workoutpage scale={SCALE} bg2={BG2} /> */}
      {/* <Exercisepage scale={SCALE} bg2={BG2} /> */}
      <Trainpage scale={SCALE} bg2={BG2} />
      {/* <Graphpage scale={SCALE} bg2={BG2} /> */}
    </SafeAreaView>
  );
}

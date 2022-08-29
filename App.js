import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Dimensions } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import Constants from "expo-constants";
import { Homepage } from "./pages/Homepage";
import { Workoutpage } from "./pages/Workoutpage";
import { Exercisepage } from "./pages/Exercisepage";
import { Trainpage } from "./pages/Trainpage";

const BG1 = "#3C3C3C";
const BG2 = "#464646";

let SCALE = 1.0416666666666667;

export default function App() {
  // setting scale from design to phone size
  SCALE = 375 / Dimensions.get("screen").width;
  console.log(SCALE);

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
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"transparent"} />
      {/* <Homepage scale={SCALE} bg2={BG2} /> */}
      {/* <Workoutpage scale={SCALE} bg2={BG2} /> */}
      {/* <Exercisepage scale={SCALE} bg2={BG2} /> */}
      <Trainpage scale={SCALE} bg2={BG2} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: BG1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});

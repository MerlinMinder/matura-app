import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { SafeAreaView, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { Homepage } from "./pages/Homepage";
import { Workoutpage } from "./pages/Workoutpage";
import { Exercisepage } from "./pages/Exercisepage";
import { Trainpage } from "./pages/Trainpage";
import { Graphpage } from "./pages/Graphpage";
import { Save } from "./Store";

let a = Constants;

export default function App() {
  // setting scale from design to phone size
  const SCALE = 375 / Dimensions.get("screen").width;
  const BG2 = "#454545";

  // Saving scale in storage
  // Save("SCALE", SCALE);

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
      <Homepage scale={SCALE} bg2={BG2} />
      {/* <Workoutpage scale={SCALE} bg2={BG2} /> */}
      {/* <Exercisepage scale={SCALE} bg2={BG2} /> */}
      {/* <Trainpage scale={SCALE} bg2={BG2} /> */}
      {/* <Graphpage scale={SCALE} bg2={BG2} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3C3C3C",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});

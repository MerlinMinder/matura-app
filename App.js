import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { Calendar } from "./components/Calendar";
import { useFonts } from "expo-font";
import Constants from "expo-constants";
import { Title } from "./components/Title";
import GradientText from "./GradientText";
import { Workouts } from "./components/Workouts";
import { Physique } from "./components/Physique";

const BG1 = "#3C3C3C";
const BG2 = "#464646";

let SCALE = 0.954861111111111;

export default function App() {
  // setting scale from design to phone size
  SCALE = 375 / Dimensions.get("screen").width;

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
      <ScrollView
        contentContainerStyle={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: 25 / SCALE,
        }}
      >
        {/* Title */}
        <Title scale={SCALE} />

        {/* Calendar */}
        <View style={{ marginTop: 20 / SCALE }}>
          <Calendar scale={SCALE} bg2={BG2} />
        </View>

        {/* Workouts */}
        <View style={{ left: -100 / SCALE, marginTop: 10 / SCALE }}>
          <GradientText text="Workouts" style={styles.titles} />
        </View>

        <View style={{ marginTop: 10 / SCALE }}>
          <Workouts scale={SCALE} bg2={BG2} />
        </View>

        {/* Physique */}
        <View style={{ left: -100 / SCALE, marginTop: 20 / SCALE }}>
          <GradientText text="Physique" style={styles.titles} />
        </View>

        <View>
          <Physique scale={SCALE} bg2={BG2} />
        </View>
      </ScrollView>
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
  titles: {
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24 / SCALE,
    lineHeight: 28 / SCALE,
  },
});

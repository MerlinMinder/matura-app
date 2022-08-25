import { Title } from "../components/Title";
import GradientText from "../GradientText";
import { Workouts } from "../components/home/Workouts";
import { Physique } from "../components/home/Physique";
import { Calendar } from "../components/home/Calendar";
import { View, ScrollView, StyleSheet } from "react-native";

let SCALE = 1.0416666666666667;

export const Homepage = (props) => {
  SCALE = props.scale;
  let BG2 = props.bg2;
  return (
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
  );
};

const styles = StyleSheet.create({
  titles: {
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24 / SCALE,
    lineHeight: 28 / SCALE,
  },
});

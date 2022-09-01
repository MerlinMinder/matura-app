import GradientText from "../GradientText";
import { StyleSheet, View } from "react-native";

let SCALE = 1.0416666666666667;

export const Title = (props) => {
  SCALE = props.scale;

  return (
    <View style={styles.title}>
      <View style={styles.progresspos}>
        <GradientText style={styles.progress} text="PROGRESS" />
      </View>
      <View style={styles.progresspos}>
        {/* Added copy for second shadow */}
        <GradientText style={styles.progressShadow} text="PROGRESS" />
      </View>
      <View style={styles.fitpos}>
        <GradientText style={styles.fit} text="FIT" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    height: 40 / SCALE,
    width: 375 / SCALE,
    left: 15 / SCALE,
    top: 5 / SCALE,
  },
  progresspos: {
    position: "absolute",
    width: 182 / SCALE,
    height: 40 / SCALE,
  },
  fitpos: {
    position: "absolute",
    left: 180 / SCALE,
    width: 60 / SCALE,
    height: 40 / SCALE,
  },
  progress: {
    fontFamily: "WorkSans-Regular",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 34 / SCALE,
    lineHeight: 40 / SCALE,
    textShadowColor: "rgba(66, 255, 255, 0.4)",
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 4,
  },
  progressShadow: {
    fontFamily: "WorkSans-Regular",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 34 / SCALE,
    lineHeight: 40 / SCALE,
    textShadowColor: "rgba(255, 192, 66, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  fit: {
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    width: 60 / SCALE,
    fontSize: 34 / SCALE,
    lineHeight: 40 / SCALE,
  },
});

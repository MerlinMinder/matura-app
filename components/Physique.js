import { StyleSheet, View } from "react-native";
import GradientText from "../GradientText";
import { Neomorphism } from "../Neomorphism";
import { Measure } from "./parts/Measure";

let SCALE = 0.954861111111111;
let BG2 = "#464646";

export const Physique = (props) => {
  SCALE = props.scale;
  BG2 = props.bg2;

  return (
    <View>
      <Neomorphism
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        width={300 / SCALE}
        height={800 / SCALE}
        x={8 / SCALE}
        y={8 / SCALE}
        r={15 / SCALE}
        b={7 / SCALE}
        colorB={BG2}
        colorS1="rgba(0, 0, 0, 0.7)"
        colorS2="rgba(153, 153, 153, 0.6)"
      >
        <View
          style={{
            position: "absolute",
            width: 38 / SCALE,
            height: 23 / SCALE,
            left: 15 / SCALE,
            top: 15 / SCALE,
          }}
        >
          <GradientText text="BMI" style={styles.titles} />
        </View>
        <Measure
          style={{ marginTop: 48 / SCALE }}
          scale={SCALE}
          bg2={BG2}
          word="Height"
          mes="184 cm"
        />
        <Measure
          style={{ marginTop: 10 / SCALE }}
          scale={SCALE}
          bg2={BG2}
          word="Weight"
          mes="84 kg"
        />
      </Neomorphism>
    </View>
  );
};

const styles = StyleSheet.create({
  titles: {
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20 / SCALE,
    lineHeight: 23 / SCALE,
  },
});

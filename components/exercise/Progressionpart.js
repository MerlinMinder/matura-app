import { StyleSheet, Text, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";

let SCALE = 0.954861111111111;
export const Progressionpart = (props) => {
  SCALE = props.scale;
  let BG2 = props.bg2;
  return (
    <Neomorphism
      style={{ display: "flex", alignItems: "center", flexDirection: "row" }}
      width={250 / SCALE}
      height={40 / SCALE}
      x={4 / SCALE}
      y={4 / SCALE}
      r={10 / SCALE}
      b={4 / SCALE}
      colorB={BG2}
      colorS1="rgba(0, 0, 0, 0.6)"
      colorS2="rgba(153, 153, 153, 0.6)"
      pady={13 / SCALE}
    >
      <Text
        style={{
          position: "absolute",
          width: 31 / SCALE,
          height: 16 / SCALE,
          left: 13 / SCALE,
          fontFamily: "WorkSans-SemiBold",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: 14 / SCALE,
          lineHeight: 16 / SCALE,
          color: "white",
        }}
      >
        reps
      </Text>
      <View style={{ position: "absolute", left: 55 / SCALE }}>
        <Neomorphism
          width={60 / SCALE}
          height={30 / SCALE}
          x={2 / SCALE}
          y={2 / SCALE}
          r={5 / SCALE}
          b={1.5 / SCALE}
          colorB={BG2}
          colorS1="rgba(0, 0, 0, 0.6)"
          colorS2="rgba(153, 153, 153, 0.6)"
          inset={true}
        >
          <Text style={styles.op}>-</Text>
          <Text style={styles.text}>+2</Text>
          <Text
            style={[
              styles.op,
              { color: "#FFC042", top: 2 / SCALE, left: 42 / SCALE },
            ]}
          >
            +
          </Text>
        </Neomorphism>
      </View>
      <Text
        style={{
          position: "absolute",
          width: 21 / SCALE,
          height: 16 / SCALE,
          left: 124 / SCALE,
          fontFamily: "WorkSans-SemiBold",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: 14 / SCALE,
          lineHeight: 16 / SCALE,
          textAlign: "center",
          color: "white",
        }}
      >
        kg
      </Text>
      <View style={{ position: "absolute", left: 153 / SCALE }}>
        <Neomorphism
          width={85 / SCALE}
          height={30 / SCALE}
          x={2 / SCALE}
          y={2 / SCALE}
          r={5 / SCALE}
          b={1.5 / SCALE}
          colorB={BG2}
          colorS1="rgba(0, 0, 0, 0.6)"
          colorS2="rgba(153, 153, 153, 0.6)"
          inset={true}
        >
          <Text style={styles.op}>-</Text>
          <Text style={[styles.text, { width: 42 / SCALE }]}>+3.75</Text>
          <Text
            style={[
              styles.op,
              { color: "#FFC042", top: 2 / SCALE, left: 66 / SCALE },
            ]}
          >
            +
          </Text>
        </Neomorphism>
      </View>
    </Neomorphism>
  );
};

const styles = StyleSheet.create({
  op: {
    position: "absolute",
    width: 12 / SCALE,
    height: 26 / SCALE,
    left: 5 / SCALE,
    top: 1 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 22 / SCALE,
    lineHeight: 26 / SCALE,
    color: "#42FFFF",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
  },
  text: {
    position: "absolute",
    width: 20 / SCALE,
    height: 19 / SCALE,
    left: 21 / SCALE,
    top: 6 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16 / SCALE,
    lineHeight: 19 / SCALE,
    color: "white",
  },
});

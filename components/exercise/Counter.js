import { StyleSheet, Text, View } from "react-native";
import GradientText from "../../GradientText";
import { Neomorphism } from "../../Neomorphism";

let SCALE = 0.954861111111111;

export const Counter = (props) => {
  SCALE = props.scale;
  let BG2 = props.bg2;
  return (
    <View
      style={[
        {
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          width: 280 / SCALE,
        },
        props.style,
      ]}
    >
      <GradientText
        text={props.text}
        style={{
          fontFamily: "WorkSans-SemiBold",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: 18 / SCALE,
          lineHeight: 21 / SCALE,
        }}
      />
      <View style={{ left: 30 / SCALE }}>
        <Neomorphism
          width={props.width / SCALE}
          height={35 / SCALE}
          x={2 / SCALE}
          y={2 / SCALE}
          r={5 / SCALE}
          b={1.5 / SCALE}
          colorB={BG2}
          colorS1="rgba(0, 0, 0, 0.6)"
          colorS2="rgba(153, 153, 153, 0.6)"
          inset={true}
        >
          <Text style={[styles.textbuttons, { left: 8 / SCALE }]}>-</Text>
          <Text style={[styles.number, { width: props.textwidth }]}>4</Text>
          <Text
            style={[styles.textbuttons, { right: 9 / SCALE, top: 3 / SCALE }]}
          >
            +
          </Text>
        </Neomorphism>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textbuttons: {
    position: "absolute",
    width: 13 / SCALE,
    height: 28 / SCALE,
    top: 2 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24 / SCALE,
    lineHeight: 28 / SCALE,
    color: "#FFFFFF",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
  },
  number: {
    position: "absolute",
    width: 22 / SCALE,
    height: 23 / SCALE,
    left: 30 / SCALE,
    top: 6 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20 / SCALE,
    lineHeight: 23 / SCALE,
    color: "white",
    textAlign: "center",
  },
});

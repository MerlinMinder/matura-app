import { StyleSheet, Text, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";
let SCALE = 0.95486111111111;
let BG2 = "#464646";
export const Day = (props) => {
  SCALE = props.scale;
  BG2 = props.bg2;
  return (
    <>
      {props.color ? (
        <Neomorphism
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          height={30 / SCALE}
          width={30 / SCALE}
          x={4 / SCALE}
          y={4 / SCALE}
          r={8 / SCALE}
          b={2 / SCALE}
          colorS1="rgba(255, 255, 255, 0.5)"
          colorS2="rgba(69, 69, 69, 0.5)"
          colorB={props.color}
          inset={true}
        >
          <Text style={styles.number}>{props.children}</Text>
        </Neomorphism>
      ) : (
        <View
          style={{
            width: 30 / SCALE,
            height: 30 / SCALE,
            borderRadius: 8 / SCALE,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={[styles.number, { color: "white" }]}>
            {props.children}
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  number: {
    fontFamily: "WorkSans-Bold",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 15 / SCALE,
    lineHeight: 20 / SCALE,
    width: 20 / SCALE,
    height: 20 / SCALE,
    textAlign: "center",
    color: BG2,
  },
});

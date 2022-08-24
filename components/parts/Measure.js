import { Text, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";

export const Measure = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;
  return (
    <View style={props.style}>
      <Neomorphism
        width={280 / SCALE}
        height={40 / SCALE}
        x={4 / SCALE}
        y={4 / SCALE}
        r={10 / SCALE}
        b={3 / SCALE}
        colorB={BG2}
        colorS1="rgba(0, 0, 0, 0.5)"
        colorS2="rgba(153, 153, 153, 0.5)"
        inset={true}
      >
        <Text
          style={{
            position: "absolute",
            height: 21 / SCALE,
            left: 15 / SCALE,
            top: 10 / SCALE,
            fontFamily: "WorkSans-SemiBold",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 18 / SCALE,
            lineHeight: 21 / SCALE,
            color: "white",
          }}
        >
          {props.word}
        </Text>
        <Text
          style={{
            position: "absolute",
            textAlign: "right",
            height: 21 / SCALE,
            right: 15 / SCALE,
            top: 10 / SCALE,
            fontFamily: "WorkSans-SemiBold",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 18 / SCALE,
            lineHeight: 21 / SCALE,
            color: "white",
          }}
        >
          {props.mes}
        </Text>
      </Neomorphism>
    </View>
  );
};

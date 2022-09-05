import { Text, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";

export const Start = (props) => {
  let SCALE = props.scale;
  let buffer = props.buffer || 0;
  return (
    <View style={{ position: "absolute", top: 132 / SCALE + buffer }}>
      <Neomorphism
        width={120 / SCALE}
        height={30 / SCALE}
        x={4 / SCALE}
        y={4 / SCALE}
        r={5 / SCALE}
        b={3 / SCALE}
        colorB={props.color}
        colorS1="rgba(0, 0, 0, 0.6)"
        colorS2="rgba(153, 153, 153, 0.6)"
      >
        <Neomorphism
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          width={120 / SCALE}
          height={30 / SCALE}
          x={4 / SCALE}
          y={4 / SCALE}
          r={5 / SCALE}
          b={3 / SCALE}
          colorB={props.color}
          colorS2="rgba(0, 0, 0, 0.6)"
          colorS1={props.shadow}
          inset={true}
        >
          <Text
            style={{
              fontFamily: "WorkSans-SemiBold",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: 24 / SCALE,
              lineHeight: 28 / SCALE,
              color: "#464646",
            }}
          >
            {props.text}
          </Text>
        </Neomorphism>
      </Neomorphism>
    </View>
  );
};

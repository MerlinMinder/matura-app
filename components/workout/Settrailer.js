import { Text } from "react-native";
import { Neomorphism } from "../../Neomorphism";

export const Settrailer = (props) => {
  let SCALE = props.scale;

  return (
    <Neomorphism
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      width={40 / SCALE}
      height={40 / SCALE}
      x={3 / SCALE}
      y={3 / SCALE}
      r={8 / SCALE}
      b={3 / SCALE}
      colorB="#595959"
      colorS2="rgba(0, 0, 0, 0.6)"
      colorS1="rgba(153, 153, 153, 0.6)"
      inset={true}
    >
      <Text
        style={{
          fontFamily: "WorkSans-SemiBold",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: 10,
          lineHeight: 12,
          color: "white",
          textAlign: "center",
        }}
      >
        {props.set.reps} x {props.set.weight}
        {props.set.mes}
      </Text>
    </Neomorphism>
  );
};

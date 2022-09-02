import { View } from "react-native";
import { Neomorphism } from "../../Neomorphism";

export const Timer = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;
  return (
    <View>
      <Neomorphism
        width={325 / SCALE}
        height={115 / SCALE}
        x={6 / SCALE}
        y={6 / SCALE}
        r={15 / SCALE}
        b={6 / SCALE}
        colorB={BG2}
        colorS1="rgba(0, 0, 0, 0.5)"
        colorS2="rgba(153, 153, 153, 0.5)"
      ></Neomorphism>
    </View>
  );
};

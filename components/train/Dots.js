import {
  Canvas,
  Fill,
  LinearGradient,
  RoundedRect,
  Shadow,
  vec,
} from "@shopify/react-native-skia";
import { Text, View, Dimensions } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";

export const Dots = (props) => {
  const SCALE = 375 / Dimensions.get("screen").width;
  const stepsize = 320 / props.amount;
  const dotamount = [];
  for (var i = 0; i <= props.amount; i++) {
    dotamount.push(i);
  }
  let doneexercises = 3;
  let colors = [
    "rgba(66, 255, 255, 1)",
    "rgba(160, 224, 160, 1)",
    "rgba(255, 192, 66, 1)",
    "rgba(69, 69, 69, 1)",
    "rgba(69, 69, 69, 1)",
  ];
  return (
    <View style={styles.dotscontainer}>
      <Canvas style={styles.dotscanvas}>
        <Fill color="transparent" />
        <RoundedRect
          x={0}
          y={0}
          width={320 / SCALE}
          height={10 / SCALE}
          r={5 / SCALE}
        >
          <LinearGradient
            start={vec(0, 5 / SCALE)}
            end={vec(320 / SCALE, 5 / SCALE)}
            positions={[0, 0.51, 0.52]}
            colors={["#42FFFF", "#FFC042", "#454545"]}
          />
          <Shadow
            dx={2 / SCALE}
            dy={2 / SCALE}
            blur={2 / SCALE}
            color="rgba(200, 200, 200, 0.8)"
            inner={true}
          />
          <Shadow
            dx={-2 / SCALE}
            dy={-2 / SCALE}
            blur={2 / SCALE}
            color="rgba(0, 0, 0, 0.6)"
            inner={true}
          />
        </RoundedRect>
      </Canvas>
      {dotamount.map((dot) => {
        return (
          <Dot
            key={dot}
            color={colors[dot]}
            number={dot}
            left={(dot * stepsize) / SCALE}
          />
        );
      })}
    </View>
  );
};

const Dot = (props) => {
  return (
    <View style={{ left: props.left, position: "absolute" }}>
      <Neomorphism
        inset
        settings={{ ...neostyles.dot, ...{ colorB: props.color } }}
      >
        <Text style={styles.dotnumber}>{props.number}</Text>
      </Neomorphism>
    </View>
  );
};

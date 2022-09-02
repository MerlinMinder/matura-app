import {
  Canvas,
  Fill,
  LinearGradient,
  RoundedRect,
  Shadow,
  vec,
} from "@shopify/react-native-skia";
import { Text, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";

export const Dots = (props) => {
  let SCALE = props.scale;
  const stepsize = 320 / (props.amount - 1);
  const dotamount = [];
  for (var i = 1; i <= props.amount; i++) {
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
    <View
      style={{
        marginVertical: 20 / SCALE,
        height: 20 / SCALE,
        width: 340 / SCALE,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Canvas
        style={{
          // adjust size to inset , dropshadow with padding
          width: 320 / SCALE,
          height: 10 / SCALE,
          marginHorizontal: 10 / SCALE,
        }}
      >
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
            scale={SCALE}
            color={colors[dot - 1]}
            number={dot}
            left={((dot - 1) * stepsize) / SCALE}
          />
        );
      })}
    </View>
  );
};

const Dot = (props) => {
  let SCALE = props.scale;
  return (
    <View style={{ left: props.left, position: "absolute" }}>
      <Neomorphism
        width={20 / SCALE}
        height={20 / SCALE}
        x={2 / SCALE}
        y={2 / SCALE}
        r={10 / SCALE}
        b={2 / SCALE}
        colorB={props.color}
        colorS2="rgba(0, 0, 0, 0.5)"
        colorS1="rgba(255, 255, 255, 0.5)"
        inset={true}
      >
        <Text
          style={{
            position: "absolute",
            width: 16 / SCALE,
            height: 18 / SCALE,
            left: 2 / SCALE,
            fontFamily: "WorkSans-SemiBold",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 15 / SCALE,
            lineHeight: 18 / SCALE,
            color: "white",
            textAlign: "center",
          }}
        >
          {props.number}
        </Text>
      </Neomorphism>
    </View>
  );
};

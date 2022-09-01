import {
  Canvas,
  Fill,
  LinearGradient,
  RoundedRect,
  Shadow,
  vec,
} from "@shopify/react-native-skia";
import { View, Text } from "react-native";

export const Progress = (props) => {
  let SCALE = props.scale;
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Canvas
        style={{
          // adjust size to inset , dropshadow with padding
          width: 110 / SCALE,
          height: 30 / SCALE,
        }}
      >
        <Fill color="transparent" />
        <RoundedRect
          x={0}
          y={0}
          width={110 / SCALE}
          height={30 / SCALE}
          r={15 / SCALE}
          color="red"
        >
          <LinearGradient
            start={vec(55 / SCALE, 0)}
            end={vec(55 / SCALE, 30 / SCALE)}
            colors={["#33FFFF", "#FFCC33"]}
          />
          <Shadow
            dx={4 / SCALE}
            dy={4 / SCALE}
            blur={2 / SCALE}
            color="rgba(230, 255, 255, 0.8)"
            inner={true}
          />
          <Shadow
            dx={-3 / SCALE}
            dy={-3 / SCALE}
            blur={2 / SCALE}
            color="rgba(51, 34, 0, 0.6)"
            inner={true}
          />
        </RoundedRect>
      </Canvas>
      <Text
        style={{
          position: "absolute",
          color: "white",
          fontFamily: "WorkSans-Bold",
          fontWeight: "700",
          fontSize: 16 / SCALE,
          textShadowColor: "rgba(0, 0, 0, 0.4)",
          textShadowOffset: { width: 2 / SCALE, height: 2 / SCALE },
          textShadowRadius: 6 / SCALE,
          height: 19 / SCALE,
          width: 87 / SCALE,
          lineHeight: 19 / SCALE,
          top: 5 / SCALE,
          paddingLeft: 1 / SCALE,
        }}
      >
        PROGRESS
      </Text>
      <Text
        style={{
          position: "absolute",
          color: "white",
          fontFamily: "WorkSans-Bold",
          fontWeight: "700",
          fontSize: 16 / SCALE,
          textShadowColor: "rgba(255, 255, 255, 0.4)",
          textShadowOffset: { width: -2 / SCALE, height: -2 / SCALE },
          textShadowRadius: 6 / SCALE,
          height: 19 / SCALE,
          width: 87 / SCALE,
          lineHeight: 19 / SCALE,
          top: 5 / SCALE,
          paddingLeft: 1 / SCALE,
        }}
      >
        PROGRESS
      </Text>
    </View>
  );
};

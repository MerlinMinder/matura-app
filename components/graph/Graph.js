import { Canvas, Fill, Path, Skia } from "@shopify/react-native-skia";
import { View } from "react-native";

export const Graph = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;

  const data = [[0, 60]];

  const path = Skia.Path.Make();
  path.moveTo(0, 220 - 34);
  path.lineTo(10, 36);
  path.lineTo(20, 42);
  path.lineTo(30, 38);
  path.lineTo(50, 45);
  path.lineTo(90, 50);

  return (
    <View style={{ top: 90 / SCALE, left: 50 / SCALE }}>
      <Canvas
        style={{
          height: 220 / SCALE,
          width: 220 / SCALE,
        }}
      >
        <Path
          path={path}
          color="#42FFFF"
          style="stroke"
          strokeWidth={3}
          strokeJoin="round"
        />
      </Canvas>
    </View>
  );
};

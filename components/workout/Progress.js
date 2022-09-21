import {
  Canvas,
  Fill,
  LinearGradient,
  RoundedRect,
  Shadow,
  vec,
} from "@shopify/react-native-skia";
import { View, Text, Dimensions } from "react-native";
import styles from "../../Styles";

export const Progress = () => {
  const SCALE = 375 / Dimensions.get("screen").width;

  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Canvas style={styles.progresscanvas}>
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
      <Text style={styles.progresstext}>PROGRESS</Text>
      <Text style={[styles.progresstext, styles.progresstext2]}>PROGRESS</Text>
    </View>
  );
};

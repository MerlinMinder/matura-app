import { Canvas, Fill, Path, Skia } from "@shopify/react-native-skia";
import { View } from "react-native";
import styles from "../../Styles";

export const Graph = (props) => {
  const data = [[0, 60]];

  const path = Skia.Path.Make();
  path.moveTo(0, 220 - 34);
  path.lineTo(10, 36);
  path.lineTo(20, 42);
  path.lineTo(30, 38);
  path.lineTo(50, 45);
  path.lineTo(90, 50);

  return (
    <View style={styles.t90l50}>
      <Canvas style={styles.graphcanvas}>
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

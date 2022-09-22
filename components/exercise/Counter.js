import { Text, View } from "react-native";
import GradientText from "../../GradientText";
import { Neomorphism } from "../../Neomorphism";
import styles from "../../Styles";

let SCALE = 0.954861111111111;

export const Counter = (props) => {
  SCALE = props.scale;
  let BG2 = props.bg2;
  return (
    <View style={[styles.counterwidth, props.style]}>
      <GradientText text={props.text} style={styles.font18} />
      <View style={styles.l30}>
        <Neomorphism
          width={props.width / SCALE}
          height={35 / SCALE}
          x={2 / SCALE}
          y={2 / SCALE}
          r={5 / SCALE}
          b={1.5 / SCALE}
          colorB={BG2}
          colorS1="rgba(0, 0, 0, 0.6)"
          colorS2="rgba(153, 153, 153, 0.6)"
          inset={true}
        >
          <Text style={[styles.countertextbuttons, styles.l8]}>-</Text>
          <Text style={[styles.counternumber, { width: props.textwidth }]}>
            4
          </Text>
          <Text style={[styles.countertextbuttons, styles.r9t3]}>+</Text>
        </Neomorphism>
      </View>
    </View>
  );
};

import { Text, View } from "react-native";
import GradientText from "../../GradientText";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";

export const Counter = (props) => {
  return (
    <View style={[styles.counterwidth, props.style]}>
      <GradientText text={props.text} style={styles.font18} />
      <View style={styles.l30}>
        <Neomorphism
          inset
          settings={{ ...neostyles.counter, ...{ width: props.width } }}
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

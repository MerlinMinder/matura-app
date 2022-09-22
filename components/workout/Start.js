import { Text, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";

export const Start = (props) => {
  return (
    <View style={[styles.top132, props.buffer]}>
      <Neomorphism settings={neostyles.startouter}>
        <Neomorphism
          center
          inset
          settings={{
            ...neostyles.startinner,
            ...{ colorS1: props.shadow, colorB: props.color },
          }}
        >
          <Text style={[styles.font24, { color: "#464646" }]}>
            {props.text}
          </Text>
        </Neomorphism>
      </Neomorphism>
    </View>
  );
};

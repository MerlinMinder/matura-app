import { Text } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";

export const Settrailer = (props) => {
  return (
    <Neomorphism center inset settings={neostyles.settrailer}>
      <Text
        style={[
          styles.font10,
          {
            color: "white",
            textAlign: "center",
          },
        ]}
      >
        {props.set.reps} x {props.set.weight}
        {props.set.mes}
      </Text>
    </Neomorphism>
  );
};

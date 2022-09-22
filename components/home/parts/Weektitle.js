import { View } from "react-native";
import { Neomorphism } from "../../../Neomorphism";
import GradientText from "../../../GradientText";
import styles from "../../../Styles";
import { neostyles } from "../../../NeoStyles";

export const Weektitle = () => {
  const weekshort = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <View style={styles.weektitlecontainer}>
      {weekshort.map((short) => {
        return (
          <Neomorphism
            center
            settings={neostyles.weektitleweekshort}
            key={short}
          >
            <GradientText text={short} style={styles.font13} />
          </Neomorphism>
        );
      })}
    </View>
  );
};

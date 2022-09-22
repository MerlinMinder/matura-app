import { View } from "react-native";
import { Neomorphism } from "../../../Neomorphism";
import { neostyles } from "../../../NeoStyles";
import styles from "../../../Styles";
import { Day } from "./Day";

export const Week = (props) => {
  return (
    <Neomorphism
      style={{
        flexDirection: "row",
      }}
      center
      inset
      settings={neostyles.week}
    >
      {props.days.map((day) => {
        return (
          <View key={day.number + Math.random()} style={styles.h3}>
            <Day color={day.color}>{day.number}</Day>
          </View>
        );
      })}
    </Neomorphism>
  );
};

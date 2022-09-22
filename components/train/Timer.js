import { Image, Text, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";

export const Timer = () => {
  return (
    <View style={styles.Top5}>
      <Neomorphism settings={neostyles.timercontainer}>
        <View style={styles.t32l13}>
          <Neomorphism inset center settings={neostyles.timerskip}>
            <Text style={[styles.font22, { color: "#42FFFF" }]}>Skip</Text>
          </Neomorphism>
        </View>
        <Text style={styles.timerexercisetext}>{"DO THE EXERCISE"}</Text>
        <Text style={styles.timerexercisetime}>{"01:23"}</Text>
        <View style={styles.t32r13}>
          <Neomorphism
            inset
            center
            settings={{ ...neostyles.timerskip, ...neostyles.timerdone }}
          >
            <Image source={require("../../assets/pngs/Checkmark.png")} />
          </Neomorphism>
        </View>
      </Neomorphism>
    </View>
  );
};

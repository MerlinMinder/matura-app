import { Image, Text, TouchableOpacity, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";

export const Timer = (props) => {
  const nextset = () => {
    if (props.currset < props.maxset) {
      props.onChangeCurrentset((prev) => prev + 1);
    } else if (props.currex < props.maxex - 1) {
      props.onChangeCurrentset(1);
      props.onChangeCurrentex((prev) => prev + 1);
    } else {
      props.onChangeCurrentset(1);
      props.onChangeCurrentex(0);
    }
  };

  return (
    <View style={styles.Top5}>
      <Neomorphism settings={neostyles.timercontainer}>
        <TouchableOpacity
          onPressIn={() => {
            console.log("resetin");
            props.onChangeCurrentset(1);
          }}
        >
          <View style={styles.t32l13}>
            <Neomorphism inset center settings={neostyles.timerskip}>
              <Text style={[styles.font22, { color: "#42FFFF" }]}>Skip</Text>
            </Neomorphism>
          </View>
        </TouchableOpacity>
        <Text style={styles.timerexercisetext}>{"DO THE EXERCISE"}</Text>
        <Text style={styles.timerexercisetime}>{"01:23"}</Text>

        <TouchableOpacity onPressIn={nextset}>
          <View style={styles.t32r13}>
            <Neomorphism
              inset
              center
              settings={{ ...neostyles.timerskip, ...neostyles.timerdone }}
            >
              <Image source={require("../../assets/pngs/Checkmark.png")} />
            </Neomorphism>
          </View>
        </TouchableOpacity>
      </Neomorphism>
    </View>
  );
};

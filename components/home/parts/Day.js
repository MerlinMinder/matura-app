import { Text, TouchableOpacity, View } from "react-native";
import { Neomorphism } from "../../../Neomorphism";
import { neostyles } from "../../../NeoStyles";
import styles from "../../../Styles";

export const Day = (props) => {
  return (
    <>
      {props.color ? (
        <TouchableOpacity
          onPress={() => {
            if (props.workout) {
              props.nav.navigate("train", {
                id: props.workout.id,
                workout: props.workout,
              });
            }
          }}
        >
          <Neomorphism
            center
            settings={{ ...neostyles.day, ...{ colorB: props.color } }}
            inset
          >
            <Text style={styles.daynumber}>{props.number}</Text>
          </Neomorphism>
        </TouchableOpacity>
      ) : (
        <View style={styles.daycontainer}>
          <Text style={[styles.daynumber, { color: "white" }]}>
            {props.number}
          </Text>
        </View>
      )}
    </>
  );
};

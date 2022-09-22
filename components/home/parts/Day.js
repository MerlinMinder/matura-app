import { Text, View } from "react-native";
import { Neomorphism } from "../../../Neomorphism";
import { neostyles } from "../../../NeoStyles";
import styles from "../../../Styles";

export const Day = (props) => {
  return (
    <>
      {props.color ? (
        <Neomorphism
          center
          settings={{ ...neostyles.day, ...{ colorB: props.color } }}
          inset
        >
          <Text style={styles.daynumber}>{props.children}</Text>
        </Neomorphism>
      ) : (
        <View style={styles.daycontainer}>
          <Text style={[styles.daynumber, { color: "white" }]}>
            {props.children}
          </Text>
        </View>
      )}
    </>
  );
};

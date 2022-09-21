import { StyleSheet, Text, View } from "react-native";
import { Neomorphism } from "../../../Neomorphism";
import styles from "../../../Styles";

let SCALE = 1;

export const Day = (props) => {
  SCALE = props.scale;
  BG2 = props.bg2;
  return (
    <>
      {props.color ? (
        <Neomorphism
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          height={30 / SCALE}
          width={30 / SCALE}
          x={4 / SCALE}
          y={4 / SCALE}
          r={8 / SCALE}
          b={2 / SCALE}
          colorS1="rgba(255, 255, 255, 0.5)"
          colorS2="rgba(69, 69, 69, 0.5)"
          colorB={props.color}
          inset={true}
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

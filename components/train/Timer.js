import { Image, Text, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import styles from "../../Styles";

export const Timer = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;
  return (
    <View style={styles.Top5}>
      <Neomorphism
        width={325 / SCALE}
        height={115 / SCALE}
        x={6 / SCALE}
        y={6 / SCALE}
        r={15 / SCALE}
        b={6 / SCALE}
        colorB={BG2}
        colorS1="rgba(0, 0, 0, 0.7)"
        colorS2="rgba(153, 153, 153, 0.7)"
      >
        <View style={styles.t32l13}>
          <Neomorphism
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            width={70 / SCALE}
            height={50 / SCALE}
            x={4 / SCALE}
            y={4 / SCALE}
            r={15 / SCALE}
            b={4 / SCALE}
            colorB={BG2}
            colorS1="rgba(0, 0, 0, 0.7)"
            colorS2="rgba(153, 153, 153, 0.7)"
            inset={true}
          >
            <Text style={[styles.font22, { color: "#42FFFF" }]}>Skip</Text>
          </Neomorphism>
        </View>
        <Text style={styles.timerexercisetext}>{"DO THE EXERCISE"}</Text>
        <Text style={styles.timerexercisetime}>{"01:23"}</Text>
        <View style={styles.t32r13}>
          <Neomorphism
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            width={70 / SCALE}
            height={50 / SCALE}
            x={5 / SCALE}
            y={5 / SCALE}
            r={15 / SCALE}
            b={4 / SCALE}
            colorB={BG2}
            colorS2="rgba(0, 0, 0, 0.7)"
            colorS1="rgba(153, 153, 153, 0.7)"
            inset={true}
          >
            <Image source={require("../../assets/pngs/Checkmark.png")} />
          </Neomorphism>
        </View>
      </Neomorphism>
    </View>
  );
};

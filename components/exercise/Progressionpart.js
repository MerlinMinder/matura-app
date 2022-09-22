import { Text, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import styles from "../../Styles";

export const Progressionpart = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;
  return (
    <Neomorphism
      style={{ display: "flex", alignItems: "center", flexDirection: "row" }}
      width={250 / SCALE}
      height={40 / SCALE}
      x={4 / SCALE}
      y={4 / SCALE}
      r={10 / SCALE}
      b={4 / SCALE}
      colorB={BG2}
      colorS1="rgba(0, 0, 0, 0.6)"
      colorS2="rgba(153, 153, 153, 0.6)"
      pady={13 / SCALE}
    >
      <Text style={styles.progressionpartrepstext}>reps</Text>
      <View style={styles.l55}>
        <Neomorphism
          width={60 / SCALE}
          height={30 / SCALE}
          x={2 / SCALE}
          y={2 / SCALE}
          r={5 / SCALE}
          b={1.5 / SCALE}
          colorB={BG2}
          colorS1="rgba(0, 0, 0, 0.6)"
          colorS2="rgba(153, 153, 153, 0.6)"
          inset={true}
        >
          <Text style={styles.progressionpartop}>-</Text>
          <Text style={styles.progressionparttext}>+2</Text>
          <Text
            style={[
              styles.progressionpartop,
              { color: "#FFC042" },
              styles.t2l42,
            ]}
          >
            +
          </Text>
        </Neomorphism>
      </View>
      <Text style={styles.progressionpartmestext}>kg</Text>
      <View style={styles.l153}>
        <Neomorphism
          width={85 / SCALE}
          height={30 / SCALE}
          x={2 / SCALE}
          y={2 / SCALE}
          r={5 / SCALE}
          b={1.5 / SCALE}
          colorB={BG2}
          colorS1="rgba(0, 0, 0, 0.6)"
          colorS2="rgba(153, 153, 153, 0.6)"
          inset={true}
        >
          <Text style={styles.progressionpartop}>-</Text>
          <Text style={[styles.progressionparttext, styles.width42]}>
            +3.75
          </Text>
          <Text
            style={[
              styles.progressionpartop,
              { color: "#FFC042" },
              styles.t2l66,
            ]}
          >
            +
          </Text>
        </Neomorphism>
      </View>
    </Neomorphism>
  );
};

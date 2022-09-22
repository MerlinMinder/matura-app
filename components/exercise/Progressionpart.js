import { Text, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";

export const Progressionpart = () => {
  return (
    <Neomorphism
      style={{ display: "flex", alignItems: "center", flexDirection: "row" }}
      settings={neostyles.progressionpartwrapper}
    >
      <Text style={styles.progressionpartrepstext}>reps</Text>
      <View style={styles.l55}>
        <Neomorphism inset settings={neostyles.progressionpartreps}>
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
          inset
          settings={{
            ...neostyles.progressionpartreps,
            ...neostyles.progressionpartmes,
          }}
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

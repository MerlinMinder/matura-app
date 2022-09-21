import { View } from "react-native";
import { Neomorphism } from "../../../Neomorphism";
import GradientText from "../../../GradientText";
import styles from "../../../Styles";

export const Weektitle = (props) => {
  const weekshort = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  let SCALE = props.scale;

  return (
    <View style={styles.weektitlecontainer}>
      {weekshort.map((short) => {
        return (
          <Neomorphism
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            height={30 / SCALE}
            width={30 / SCALE}
            x={2 / SCALE}
            y={2 / SCALE}
            r={8 / SCALE}
            b={2 / SCALE}
            colorS1="rgba(0, 0, 0, 0.5)"
            colorS2="rgba(150, 150, 150, 0.5)"
            colorB={props.bg2}
            padx={6.5 / SCALE}
            key={short}
          >
            <GradientText text={short} style={styles.font13} />
          </Neomorphism>
        );
      })}
    </View>
  );
};

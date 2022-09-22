import { Text, View, Dimensions } from "react-native";
import GradientText from "../../GradientText";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";
import { Progressionpart } from "./Progressionpart";

export const Progression = (props) => {
  const SCALE = 375 / Dimensions.get("screen").width;

  let progression = props.progression;
  return (
    <Neomorphism
      center
      settings={{
        ...neostyles.progressionouter,
        ...{ height: 127 / SCALE + (progression.length * 53) / SCALE },
      }}
    >
      <Neomorphism
        inset
        settings={{
          ...neostyles.progressionouter,
          ...neostyles.progressioninner,
          ...{ height: 121 / SCALE + (progression.length * 53) / SCALE },
        }}
      >
        <View style={styles.progressiontextpos}>
          <GradientText text="Progression" style={styles.font20} />
        </View>
        <View style={styles.l9t209}>
          <Neomorphism
            style={styles.progressionborder}
            inset
            settings={neostyles.progressionslide}
          >
            <View style={styles.r1t1}>
              <Neomorphism
                inset
                settings={{
                  ...neostyles.progressionslider,
                  ...{ colorB: "#61FF42", colorS1: "rgba(212, 255, 204, 0.8)" },
                }}
              ></Neomorphism>
            </View>
          </Neomorphism>
        </View>
        <View style={styles.Top15}>
          {progression.map((prog) => {
            return <Progressionpart key={prog} />;
          })}
        </View>
        <View style={styles.t40l61}>
          <Neomorphism inset center settings={neostyles.progressionstep}>
            <Text style={[styles.font16, { color: "white" }]}>add step</Text>
          </Neomorphism>
        </View>
      </Neomorphism>
    </Neomorphism>
  );
};

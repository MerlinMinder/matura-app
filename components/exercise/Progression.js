import { Text, View } from "react-native";
import GradientText from "../../GradientText";
import { Neomorphism } from "../../Neomorphism";
import styles from "../../Styles";
import { Progressionpart } from "./Progressionpart";

export const Progression = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;
  let progression = props.progression;
  return (
    <Neomorphism
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      width={280 / SCALE}
      height={127 / SCALE + (progression.length * 53) / SCALE}
      x={4 / SCALE}
      y={4 / SCALE}
      r={10 / SCALE}
      b={3 / SCALE}
      colorB={BG2}
      colorS1="rgba(0, 0, 0, 0.6)"
      colorS2="rgba(153, 153, 153, 0.6)"
    >
      <Neomorphism
        width={274 / SCALE}
        height={121 / SCALE + (progression.length * 53) / SCALE}
        x={4 / SCALE}
        y={4 / SCALE}
        r={10 / SCALE}
        b={3 / SCALE}
        colorB={BG2}
        colorS1="rgba(0, 0, 0, 0.5)"
        colorS2="rgba(153, 153, 153, 0.5)"
        inset={true}
      >
        <View style={styles.progressiontextpos}>
          <GradientText text="Progression" style={styles.font20} />
        </View>
        <View style={styles.l9t209}>
          <Neomorphism
            style={styles.progressionborder}
            width={54 / SCALE}
            height={24 / SCALE}
            x={2 / SCALE}
            y={2 / SCALE}
            r={12 / SCALE}
            b={1 / SCALE}
            colorB="rgba(98, 255, 66, 0.2)"
            colorS1="rgba(0, 0, 0, 0.7)"
            colorS2="rgba(213, 255, 204, 0.7)"
            inset={true}
          >
            <View style={styles.r1t1}>
              <Neomorphism
                width={18 / SCALE}
                height={18 / SCALE}
                x={2 / SCALE}
                y={2 / SCALE}
                r={9 / SCALE}
                b={1.5 / SCALE}
                colorB="#61FF42"
                colorS2="rgba(0, 0, 0, 0.7)"
                colorS1="rgba(212, 255, 204, 0.8)"
                inset={true}
              ></Neomorphism>
            </View>
          </Neomorphism>
        </View>
        <View style={styles.Top15}>
          {progression.map((prog) => {
            return <Progressionpart key={prog} scale={SCALE} bg2={BG2} />;
          })}
        </View>
        <View style={styles.t40l61}>
          <Neomorphism
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            width={150 / SCALE}
            height={35 / SCALE}
            x={3 / SCALE}
            y={3 / SCALE}
            r={10 / SCALE}
            b={2.5 / SCALE}
            colorB={BG2}
            colorS2="rgba(0, 0, 0, 0.6)"
            colorS1="rgba(153, 153, 153, 0.6)"
            inset={true}
          >
            <Text style={[styles.font16, { color: "white" }]}>add step</Text>
          </Neomorphism>
        </View>
      </Neomorphism>
    </Neomorphism>
  );
};

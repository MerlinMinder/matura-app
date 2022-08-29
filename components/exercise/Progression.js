import { Text, View } from "react-native";
import GradientText from "../../GradientText";
import { Neomorphism } from "../../Neomorphism";
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
        <View
          style={{
            position: "absolute",
            width: 120 / SCALE,
            height: 23 / SCALE,
            left: 11 / SCALE,
            top: 8 / SCALE,
          }}
        >
          <GradientText
            text="Progression"
            style={{
              fontFamily: "WorkSans-SemiBold",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: 20 / SCALE,
              lineHeight: 23 / SCALE,
            }}
          />
        </View>
        <View
          style={{
            top: 9 / SCALE,
            left: 209 / SCALE,
          }}
        >
          <Neomorphism
            style={{
              borderWidth: 2 / SCALE,
              borderColor: "rgba(98, 255, 66, 0.5)",
              borderStyle: "solid",
              borderRadius: 12 / SCALE,
            }}
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
            <View
              style={{ right: 1 / SCALE, position: "absolute", top: 1 / SCALE }}
            >
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
        <View style={{ top: 15 / SCALE }}>
          {progression.map((prog) => {
            return <Progressionpart key={prog} scale={SCALE} bg2={BG2} />;
          })}
        </View>
        <View style={{ top: 40 / SCALE, left: 61 / SCALE }}>
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
            <Text
              style={{
                fontFamily: "WorkSans-SemiBold",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: 16 / SCALE,
                lineHeight: 19 / SCALE,
                color: "white",
              }}
            >
              add step
            </Text>
          </Neomorphism>
        </View>
      </Neomorphism>
    </Neomorphism>
  );
};

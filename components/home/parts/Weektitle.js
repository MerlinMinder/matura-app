import { View } from "react-native";
import { Neomorphism } from "../../../Neomorphism";
import GradientText from "../../../GradientText";

export const Weektitle = (props) => {
  const weekshort = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  let SCALE = props.scale;

  return (
    <View
      style={{
        height: 38 / SCALE,
        width: 258 / SCALE,
        marginTop: 5 / SCALE,
        display: "flex",
        flexDirection: "row",
      }}
    >
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
            padx={6 / SCALE}
            key={short}
          >
            <GradientText
              text={short}
              style={{
                fontFamily: "WorkSans-SemiBold",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: 13 / SCALE,
                lineHeight: 15 / SCALE,
              }}
            />
          </Neomorphism>
        );
      })}
    </View>
  );
};

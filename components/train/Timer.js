import { Image, Text, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";

export const Timer = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;
  return (
    <View style={{ top: 5 / SCALE }}>
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
        <View
          style={{ position: "absolute", top: 32 / SCALE, left: 13 / SCALE }}
        >
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
            <Text
              style={{
                fontSize: 22 / SCALE,
                lineHeight: 26 / SCALE,
                fontFamily: "WorkSans-SemiBold",
                fontStyle: "normal",
                fontWeight: "600",
                color: "#42FFFF",
              }}
            >
              Skip
            </Text>
          </Neomorphism>
        </View>
        <Text
          style={{
            position: "absolute",
            width: 120 / SCALE,
            height: 56 / SCALE,
            left: 102 / SCALE,
            top: 16 / SCALE,
            fontFamily: "WorkSans-SemiBold",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 24 / SCALE,
            lineHeight: 28 / SCALE,
            color: "white",
            textAlign: "center",
          }}
        >
          {"DO THE EXERCISE"}
        </Text>
        <Text
          style={{
            position: "absolute",
            width: 51 / SCALE,
            height: 23 / SCALE,
            left: 136 / SCALE,
            top: 78 / SCALE,
            fontFamily: "WorkSans-SemiBold",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 20 / SCALE,
            lineHeight: 23 / SCALE,
            textAlign: "center",
            color: "#FFC042",
          }}
        >
          {"01:23"}
        </Text>
        <View
          style={{ position: "absolute", top: 32 / SCALE, right: 13 / SCALE }}
        >
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

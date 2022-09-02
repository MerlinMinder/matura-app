import { Text, View } from "react-native";
import GradientText from "../../GradientText";
import { Setmorph } from "./Setmorph";

export const Top = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        width: 350 / SCALE,
        height: 250 / SCALE,
        marginTop: 30 / SCALE,
      }}
    >
      <Text
        style={{
          position: "absolute",
          width: 250 / SCALE,
          height: 65 / SCALE,
          left: 48 / SCALE,
          top: -5 / SCALE,
          fontFamily: "WorkSans-SemiBold",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: 28 / SCALE,
          lineHeight: 33 / SCALE,
          color: "white",
          textAlign: "center",
          textShadowOffset: {
            width: 2,
            height: 2,
          },
          textShadowRadius: 2,
          textShadowColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        {props.title}
      </Text>
      <Setmorph
        bg2={BG2}
        width={50 / SCALE}
        height={50 / SCALE}
        r={10 / SCALE}
        s={3 / SCALE}
        b={4 / SCALE}
        style={{ top: 110 / SCALE, right: 22 / SCALE, position: "absolute" }}
        settext="12 x 150kg"
        fontsize={12 / SCALE}
      ></Setmorph>
      <Setmorph
        bg2={BG2}
        width={120 / SCALE}
        height={120 / SCALE}
        r={25 / SCALE}
        s={7 / SCALE}
        b={8 / SCALE}
        style={{ top: 60 / SCALE, position: "absolute" }}
        settext="12 x 150kg"
        fontsize={24 / SCALE}
      />
      <Setmorph
        bg2={BG2}
        width={50 / SCALE}
        height={50 / SCALE}
        r={10 / SCALE}
        s={3 / SCALE}
        b={4 / SCALE}
        style={{ top: 110 / SCALE, left: 22 / SCALE, position: "absolute" }}
        settext="12 x 150kg"
        fontsize={12 / SCALE}
      ></Setmorph>
      <View
        style={{ position: "absolute", bottom: 6 / SCALE, left: 27 / SCALE }}
      >
        <GradientText
          style={{
            fontFamily: "WorkSans-Regular",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 16 / SCALE,
            lineHeight: 19 / SCALE,
          }}
          text="unprogress"
        />
      </View>
      <Text
        style={{
          bottom: 3 / SCALE,
          position: "absolute",
          fontFamily: "WorkSans-SemiBold",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: 20 / SCALE,
          lineHeight: 23 / SCALE,
          color: "white",
        }}
      >
        3 / 6
      </Text>
      <View
        style={{ position: "absolute", bottom: 6 / SCALE, right: 44 / SCALE }}
      >
        <GradientText
          style={{
            fontFamily: "WorkSans-Bold",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 16 / SCALE,
            lineHeight: 19 / SCALE,
          }}
          text="progress"
        />
      </View>
    </View>
  );
};

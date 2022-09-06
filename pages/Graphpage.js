import { ScrollView, Text, View } from "react-native";
import { Graph } from "../components/graph/Graph";
import { Title } from "../components/Title";
import GradientText from "../GradientText";
import { Neomorphism } from "../Neomorphism";

export const Graphpage = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;
  return (
    <ScrollView
      contentContainerStyle={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: 25 / SCALE,
      }}
    >
      {/* Title */}
      <Title scale={SCALE} />

      <View style={{ marginTop: 30 / SCALE }}>
        <Neomorphism
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          width={320 / SCALE}
          height={40 / SCALE}
          x={5 / SCALE}
          y={5 / SCALE}
          r={10 / SCALE}
          b={5 / SCALE}
          colorB={BG2}
          colorS1="rgba(0, 0, 0, 0.7)"
          colorS2="rgba(128, 128, 128, 0.7)"
        >
          <Text
            style={{
              fontFamily: "WorkSans-Bold",
              fontSize: 16 / SCALE,
              fontWeight: "700",
              lineHeight: 19 / SCALE,
              color: "white",
              left: 20 / SCALE,
              position: "absolute",
            }}
          >
            Workouts
          </Text>
          <View>
            <GradientText
              style={{
                fontFamily: "WorkSans-Bold",
                fontSize: 16 / SCALE,
                fontWeight: "700",
                lineHeight: 19 / SCALE,
                textShadowColor: "rgba(0, 0, 0, 0.5)",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 2,
              }}
              text="Exercises"
            />
          </View>
          <Text
            style={{
              fontFamily: "WorkSans-Bold",
              fontSize: 16 / SCALE,
              fontWeight: "700",
              lineHeight: 19 / SCALE,
              color: "white",
              position: "absolute",
              right: 20 / SCALE,
            }}
          >
            Physique
          </Text>
        </Neomorphism>
      </View>

      <Graph scale={SCALE} bg2={BG2} />
    </ScrollView>
  );
};

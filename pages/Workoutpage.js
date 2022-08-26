import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, View } from "react-native";
import { Title } from "../components/Title";
import { ExerciseTrailer } from "../components/workout/Exercisetrailer";
import { Start } from "../components/workout/Start";
import { Top } from "../components/workout/Top";
import GradientText from "../GradientText";
import { Neomorphism } from "../Neomorphism";

let BG2 = "#464646";
let SCALE = 1.0416666666666667;

export const Workoutpage = (props) => {
  SCALE = props.scale;
  BG2 = props.bg2;

  let exercises = [
    { name: "Deadlift" },
    { name: "Seated Back Row" },
    { name: "Hyperextensions" },
    { name: "Straight Bar Bicep Curls" },
  ];

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

      {/* Body */}
      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: 375 / SCALE,
          marginTop: 20 / SCALE,
        }}
      >
        <Neomorphism
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          width={320 / SCALE}
          height={880 / SCALE}
          x={10 / SCALE}
          y={10 / SCALE}
          r={15 / SCALE}
          b={10 / SCALE}
          colorB={BG2}
          colorS1="rgba(0, 0, 0, 0.7)"
          colorS2="rgba(128, 128, 128, 0.7)"
        >
          <Top scale={SCALE} />
          <Start
            scale={SCALE}
            text="Start"
            color="#62FF42"
            shadow="rgba(213, 255, 204, 0.7)"
          />
          <View
            style={{ position: "absolute", top: 200 / SCALE, left: 20 / SCALE }}
          >
            <GradientText
              text="Exercises"
              style={{
                FontFamily: "WorkSans-SemiBold",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: 20 / SCALE,
                lineHeight: 23 / SCALE,
              }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              left: 195 / SCALE,
              top: 196 / SCALE,
            }}
          >
            <LinearGradient
              style={{
                width: 110 / SCALE,
                height: 30 / SCALE,
                borderRadius: 15 / SCALE,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              colors={["#42FFFF", "#FFC042"]}
            >
              <Text
                style={{
                  fontFamily: "WorkSans-Bold",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: 16 / SCALE,
                  lineHeight: 19 / SCALE,
                  color: "#FFFFFF",
                  textShadowOffset: {
                    width: 1,
                    height: 1,
                  },
                  textShadowRadius: 2,
                  textShadowColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                PROGRESS
              </Text>
            </LinearGradient>
          </View>
          <View
            style={{
              position: "absolute",
              top: 241 / SCALE,
            }}
          >
            {exercises.map((exercise) => {
              return (
                <View style={{ marginBottom: 15 / SCALE }} key={exercise.name}>
                  <ExerciseTrailer
                    scale={SCALE}
                    bg2={BG2}
                    name={exercise.name}
                  />
                </View>
              );
            })}
          </View>
        </Neomorphism>
      </View>
    </ScrollView>
  );
};

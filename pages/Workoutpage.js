import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, Text, View } from "react-native";
import { Title } from "../components/Title";
import { ExerciseTrailer } from "../components/workout/Exercisetrailer";
import { Progress } from "../components/workout/Progress";
import { Start } from "../components/workout/Start";
import { Name } from "../components/workout/Name";
import GradientText from "../GradientText";
import { Neomorphism } from "../Neomorphism";

let BG2 = "#464646";
let SCALE = 1.0416666666666667;

export const Workoutpage = (props) => {
  SCALE = props.scale;
  BG2 = props.bg2;

  let exercises = [
    {
      name: "Deadlift",
      sets: [
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
      ],
    },
    {
      name: "Seated Back Row",
      sets: [
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
      ],
    },
    {
      name: "Hyperextensions",
      sets: [
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
      ],
    },
    {
      name: "Straight Bar Bicep Curls",
      sets: [
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
        { reps: 12, weight: 150, mes: "kg" },
      ],
    },
  ];

  let extraHeight = exercises
    .map((exercise) => (exercise.length < 7 ? 95 : 139))
    .reduce((a, b) => a + b, 0);

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
          height={315 / SCALE + extraHeight / SCALE}
          x={10 / SCALE}
          y={10 / SCALE}
          r={15 / SCALE}
          b={10 / SCALE}
          colorB={BG2}
          colorS1="rgba(0, 0, 0, 0.7)"
          colorS2="rgba(128, 128, 128, 0.7)"
        >
          <Name scale={SCALE} />
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
              left: 192 / SCALE,
              top: 196 / SCALE,
            }}
          >
            <Progress scale={SCALE} />
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
                    sets={exercise.sets}
                  />
                </View>
              );
            })}
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 13 / SCALE,
            }}
          >
            <Neomorphism
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              width={60 / SCALE}
              height={60 / SCALE}
              x={4 / SCALE}
              y={4 / SCALE}
              r={30 / SCALE}
              b={4 / SCALE}
              colorB={BG2}
              colorS2="rgba(0, 0, 0, 0.7)"
              colorS1="rgba(128, 128, 128, 0.7)"
              inset={true}
            >
              <Image
                style={{
                  width: 45 / SCALE,
                  height: 45 / SCALE,
                  resizeMode: "cover",
                }}
                source={require("../assets/pngs/Plus.png")}
              />
            </Neomorphism>
          </View>
        </Neomorphism>
      </View>
    </ScrollView>
  );
};

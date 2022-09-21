import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, Text, View } from "react-native";
import { Title } from "../components/Title";
import { ExerciseTrailer } from "../components/workout/Exercisetrailer";
import { Progress } from "../components/workout/Progress";
import { Start } from "../components/workout/Start";
import { Name } from "../components/workout/Name";
import GradientText from "../GradientText";
import { Neomorphism } from "../Neomorphism";
import styles from "../Styles";

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
      ],
    },
  ];

  let extraHeight = exercises.length * 95;
  // .map((exercise) => (exercise.length < 7 ? 95 : 139))
  // .reduce((a, b) => a + b, 0);

  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      {/* Title */}
      <Title />

      {/* Body */}
      <View style={styles.workoutpagebody}>
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
          <View style={styles.t200l20}>
            <GradientText text="Exercises" style={styles.font20} />
          </View>
          <View style={styles.workoutpageprogress}>
            <Progress />
          </View>
          <View style={styles.workoutpageexercise}>
            {exercises.map((exercise) => {
              return (
                <View style={styles.bottom15} key={exercise.name}>
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
          <View style={styles.workoutpageplusc}>
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
                style={styles.workoutpageplus}
                source={require("../assets/pngs/Plus.png")}
              />
            </Neomorphism>
          </View>
        </Neomorphism>
      </View>
    </ScrollView>
  );
};

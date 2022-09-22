import { Image, ScrollView, Dimensions, View } from "react-native";
import { Title } from "../components/Title";
import { ExerciseTrailer } from "../components/workout/Exercisetrailer";
import { Progress } from "../components/workout/Progress";
import { Start } from "../components/workout/Start";
import { Name } from "../components/workout/Name";
import GradientText from "../GradientText";
import { Neomorphism } from "../Neomorphism";
import styles from "../Styles";
import { neostyles } from "../NeoStyles";

export const Workoutpage = () => {
  const SCALE = 375 / Dimensions.get("screen").width;

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
          settings={{
            ...neostyles.workoutpagecontainer,
            ...{ height: 315 / SCALE + extraHeight / SCALE },
          }}
        >
          <Name />
          <Start
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
                  <ExerciseTrailer name={exercise.name} sets={exercise.sets} />
                </View>
              );
            })}
          </View>
          <View style={styles.workoutpageplusc}>
            <Neomorphism center inset settings={neostyles.workoutpageplus}>
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

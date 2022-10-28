import {
  Image,
  ScrollView,
  Dimensions,
  View,
  SafeAreaView,
} from "react-native";
import { Title } from "../components/Title";
import { ExerciseTrailer } from "../components/workout/Exercisetrailer";
import { Progress } from "../components/workout/Progress";
import { Start } from "../components/workout/Start";
import { Name } from "../components/workout/Name";
import GradientText from "../GradientText";
import { Neomorphism } from "../Neomorphism";
import styles from "../Styles";
import { neostyles } from "../NeoStyles";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { useSharedValueEffect, useValue } from "@shopify/react-native-skia";
import { useEffect, useState } from "react";
import { Get, Merge } from "../Store";

export const Workoutpage = ({ route, navigation }) => {
  const { id } = route.params;
  const SCALE = 375 / Dimensions.get("screen").width;
  const colorS1 = useValue("rgba(130, 130, 130, 0.7)");
  const colorS2 = useValue("rgba(0, 0, 0, 0.7)");
  const [plus, onChangePlus] = useState(require("../assets/pngs/Plus.png"));
  const [data, setData] = useState(null);
  const pressed = useSharedValue(false);

  useEffect(() => {
    const listener = navigation.addListener("focus", () => {
      Get("workouts", setData);
    });
    return listener;
  }, [navigation]);

  useSharedValueEffect(() => {
    colorS1.current = pressed.value
      ? "rgba(90, 90, 90, 0.7)"
      : "rgba(130, 130, 130, 0.7)";

    colorS2.current = pressed.value
      ? "rgba(50, 50, 50, 0.7)"
      : "rgba(0, 0, 0, 0.7)";

    pressed.value
      ? onChangePlus(require("../assets/pngs/Plus2.png"))
      : onChangePlus(require("../assets/pngs/Plus.png"));

    if (pressed.value) {
      const timeid = Date.now();
      const datasend = new Object();
      const exercisesend = new Object();
      exercisesend[timeid] = {
        name: "",
        sets: [],
        rest: "",
        progression: [],
        id: timeid,
      };
      datasend[id] = { exercises: exercisesend };

      Merge("workouts", datasend);

      Get("workouts", setData).then(() => {
        pressed.value = false;
        navigation.navigate("exercise", { workid: id, exid: timeid, name: "" });
      });
    }
  }, pressed);

  const gesture = Gesture.Tap()
    .maxDeltaY(10)
    .onStart(() => {
      pressed.value = true;
    });

  if (!data) {
    return null;
  }

  const extraHeight = Object.values(data[id].exercises).length * 95;

  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        {/* Title */}
        <Title nav={navigation} />

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
            <Name
              id={id}
              exlength={Object.values(data[id].exercises).length}
              recent={data[id].time}
              title={data[id].title}
            />
            <Start
              text="Start"
              color="#62FF42"
              shadow="rgba(213, 255, 204, 0.7)"
              nav={navigation}
              id={id}
            />
            <View style={styles.t200l20}>
              <GradientText text="Exercises" style={styles.font20} />
            </View>
            <View style={styles.workoutpageprogress}>
              <Progress />
            </View>
            <View style={styles.workoutpageexercise}>
              {Object.values(data[id].exercises).map((exercise) => {
                return (
                  <View style={styles.bottom15} key={exercise.id}>
                    <ExerciseTrailer
                      name={exercise.name}
                      sets={exercise.sets}
                    />
                  </View>
                );
              })}
            </View>
            <GestureDetector gesture={gesture}>
              <View style={styles.workoutpageplusc}>
                <Neomorphism
                  center
                  inset
                  settings={{
                    ...neostyles.workoutpageplus,
                    ...{ colorS1: colorS1, colorS2: colorS2 },
                  }}
                >
                  <Image style={styles.workoutpageplus} source={plus} />
                </Neomorphism>
              </View>
            </GestureDetector>
          </Neomorphism>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

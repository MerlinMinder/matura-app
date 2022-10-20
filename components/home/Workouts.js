import { Image, View, Text } from "react-native";
import { WorkoutTrailer } from "./parts/WorkoutTrailer";
import { Neomorphism } from "../../Neomorphism";
import styles from "../../Styles";
import { neostyles } from "../../NeoStyles";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValueEffect, useValue } from "@shopify/react-native-skia";
import { useSharedValue } from "react-native-reanimated";
import { useEffect, useState } from "react";
import { Get, Merge, Save } from "../../Store";

export const Workouts = (props) => {
  // let workouts = [
  //   {
  //     title: "Push Workout",
  //     color: "#42FFFF",
  //     exercises: "7",
  //     time: "48m 23s",
  //   },
  //   {
  //     title: "Push Workout",
  //     color: "#42FF62",
  //     exercises: "6",
  //     time: "67m 02s",
  //   },
  //   {
  //     title: "Push Workout",
  //     color: "#FFFF42",
  //     exercises: "4",
  //     time: "5m 58s",
  //   },
  //   {
  //     title: "Push Workout",
  //     color: "#FFC042",
  //     exercises: "12",
  //     time: "128m 43s",
  //   },
  // ];
  const [data, setData] = useState({ workouts: [] });
  const colorS1 = useValue("rgba(130, 130, 130, 0.7)");
  const colorS2 = useValue("rgba(0, 0, 0, 0.5)");
  const pressed = useSharedValue(false);
  const [plus, onChangePlus] = useState(require("../../assets/pngs/Plus.png"));

  useEffect(() => {
    Get("workouts", setData);
  }, []);

  useSharedValueEffect(() => {
    colorS1.current = pressed.value
      ? "rgba(90, 90, 90, 0.7)"
      : "rgba(130, 130, 130, 0.7)";

    colorS2.current = pressed.value
      ? "rgba(50, 50, 50, 0.5)"
      : "rgba(0, 0, 0, 0.5)";

    pressed.value
      ? onChangePlus(require("../../assets/pngs/Plus2.png"))
      : onChangePlus(require("../../assets/pngs/Plus.png"));

    if (pressed.value) {
      const datasend = new Object();
      datasend[Date.now()] = {
        title: "",
        color: "",
        exercises: "",
        time: "",
        key: Date.now(),
      };

      Merge("workouts", datasend);

      Get("workouts", setData).then(() => {
        pressed.value = false;
        props.nav.navigate("workout");
      });
    }

    // testing
    if (pressed.value == "reset") {
      Save("workouts", {})
        .then(() => {
          pressed.value = false;
        })
        .then(() => {
          Get("workouts", setData);
        });
    }
  }, pressed);

  const gesture = Gesture.Tap().onBegin(() => {
    pressed.value = true;
  });

  // testing
  const reset = Gesture.Tap().onBegin(() => {
    pressed.value = "reset";
  });

  return (
    <View>
      {Object.values(data).map((workout) => {
        return <WorkoutTrailer key={workout.key} workout={workout} />;
      })}
      <GestureDetector gesture={gesture}>
        <View style={styles.workoutspluscontainer}>
          <Neomorphism
            center
            settings={{
              ...neostyles.workouts,
              ...{ colorS1: colorS1, colorS2: colorS2 },
            }}
            inset
          >
            <Image style={styles.workoutsplus} source={plus} />
          </Neomorphism>
        </View>
      </GestureDetector>
      {/* testing */}
      <GestureDetector gesture={reset}>
        <Text>Reset</Text>
      </GestureDetector>
    </View>
  );
};

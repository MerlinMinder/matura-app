import { Image, View } from "react-native";
import { WorkoutTrailer } from "./parts/WorkoutTrailer";
import { Neomorphism } from "../../Neomorphism";
import styles from "../../Styles";
import { neostyles } from "../../NeoStyles";

export const Workouts = (props) => {
  let workouts = [
    {
      title: "Push Workout",
      color: "#42FFFF",
      exercises: "7",
      time: "48m 23s",
    },
    {
      title: "Push Workout",
      color: "#42FF62",
      exercises: "6",
      time: "67m 02s",
    },
    {
      title: "Push Workout",
      color: "#FFFF42",
      exercises: "4",
      time: "5m 58s",
    },
    {
      title: "Push Workout",
      color: "#FFC042",
      exercises: "12",
      time: "128m 43s",
    },
  ];
  let SCALE = props.scale;
  let BG2 = props.bg2;

  return (
    <View>
      {workouts.map((workout) => {
        return (
          <WorkoutTrailer
            key={workout.color}
            scale={SCALE}
            bg2={BG2}
            workout={workout}
          />
        );
      })}
      <View style={styles.workoutspluscontainer}>
        <Neomorphism center settings={neostyles.workouts} inset>
          <Image
            style={styles.workoutsplus}
            source={require("../../assets/pngs/Plus.png")}
          />
        </Neomorphism>
      </View>
    </View>
  );
};

import { Image, View } from "react-native";
import { WorkoutTrailer } from "./parts/WorkoutTrailer";
import { Neomorphism } from "../../Neomorphism";

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
      <View
        style={{
          display: "flex",
          alignItems: "center",
          paddingVertical: 12 / SCALE,
        }}
      >
        <Neomorphism
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          width={275 / SCALE}
          height={70 / SCALE}
          x={10 / SCALE}
          y={10 / SCALE}
          r={10 / SCALE}
          b={10 / SCALE}
          colorB={BG2}
          colorS2="rgba(0, 0, 0, 0.5)"
          colorS1="rgba(130, 130, 130, 0.7)"
          inset={true}
        >
          <Image
            style={{
              width: 50 / SCALE,
              height: 50 / SCALE,
              resizeMode: "cover",
            }}
            source={require("../../assets/pngs/Plus.png")}
          />
        </Neomorphism>
      </View>
    </View>
  );
};

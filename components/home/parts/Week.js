import { View } from "react-native";
import { Neomorphism } from "../../../Neomorphism";
import { neostyles } from "../../../NeoStyles";
import { Day } from "./Day";

let SCALE = 1.0416666666666667;

export const Week = (props) => {
  SCALE = props.scale;
  let days = props.days;

  return (
    <Neomorphism
      style={{
        flexDirection: "row",
      }}
      center
      inset
      settings={neostyles.week}
    >
      {days.map((day) => {
        return (
          <View
            key={day.number + Math.random()}
            style={{ marginHorizontal: 3 / SCALE }}
          >
            <Day scale={SCALE} bg2={props.bg2} color={day.color}>
              {day.number}
            </Day>
          </View>
        );
      })}
    </Neomorphism>
  );
};

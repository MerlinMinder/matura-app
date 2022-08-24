import { View } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import { Day } from "./Day";

let SCALE = 1;
console.log(Math.random());

export const Week = (props) => {
  SCALE = props.scale;
  let days = props.days;

  return (
    <Neomorphism
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 4 / SCALE,
      }}
      height={38 / SCALE}
      width={265 / SCALE}
      x={4 / SCALE}
      y={4 / SCALE}
      r={10 / SCALE}
      b={4 / SCALE}
      colorS1="rgba(0, 0, 0, 0.5)"
      colorS2="rgba(153, 153, 153, 0.5)"
      colorB={props.bg2}
      inset={true}
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

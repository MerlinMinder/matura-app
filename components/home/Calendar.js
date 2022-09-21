import { StyleSheet, Text, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import Svg, { Path } from "react-native-svg";
import { Week } from "./parts/Week";
import { Weektitle } from "./parts/Weektitle";
import styles from "../../Styles";

let SCALE = 1.0416666666666667;

export const Calendar = (props) => {
  const BG2 = props.bg2;
  SCALE = props.scale;

  let month1 = [
    [
      { number: "28", color: "" },
      { number: "29", color: "" },
      { number: "30", color: "#42FFFF" },
      { number: "1", color: "" },
      { number: "2", color: "#42FF62" },
      { number: "3", color: "#FFFF42" },
      { number: "4", color: "" },
    ],
    [
      { number: "5", color: "#FFC042" },
      { number: "6", color: "" },
      { number: "7", color: "" },
      { number: "8", color: "#42FFFF" },
      { number: "9", color: "" },
      { number: "10", color: "" },
      { number: "11", color: "#FFFF42" },
    ],
    [
      { number: "12", color: "" },
      { number: "13", color: "#42FF62" },
      { number: "14", color: "#FFC042" },
      { number: "15", color: "#42FFFF" },
      { number: "16", color: "#FFFF42" },
      { number: "17", color: "#42FF62" },
      { number: "18", color: "#FFC042" },
    ],
    [
      { number: "19", color: "" },
      { number: "20", color: "#42FFFF" },
      { number: "21", color: "" },
      { number: "22", color: "" },
      { number: "23", color: "" },
      { number: "24", color: "" },
      { number: "25", color: "" },
    ],
    [
      { number: "26", color: "#FFFF42" },
      { number: "27", color: "" },
      { number: "28", color: "" },
      { number: "29", color: "#42FF62" },
      { number: "30", color: "#FFC042" },
      { number: "31", color: "" },
      { number: "1", color: "" },
    ],
  ];

  return (
    <Neomorphism
      style={styles.calendarcontainer}
      height={330 / SCALE}
      width={300 / SCALE}
      x={10 / SCALE}
      y={10 / SCALE}
      r={15 / SCALE}
      b={10 / SCALE}
      colorS1="rgba(0, 0, 0, 0.7)"
      colorS2="rgba(128, 128, 128, 0.7)"
      colorB={BG2}
    >
      {/* title / month selector */}
      <View style={styles.calendartitle}>
        <View style={styles.calendararrow}>
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M16.88 18.12L10.7733 12L16.88 5.88L15 4L7 12L15 20L16.88 18.12Z"
              fill="white"
            />
          </Svg>
        </View>
        <Text style={styles.calendarmonth}>July 2022</Text>
        <View style={styles.calendararrow}>
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M7 18.12L13.1067 12L7 5.88L8.88 4L16.88 12L8.88 20L7 18.12Z"
              fill="white"
            />
          </Svg>
        </View>
      </View>

      {/* weektitles */}
      <Weektitle scale={SCALE} bg2={BG2} />

      {/* Weeks mapped out containing days */}
      {month1.map((week) => {
        return (
          <View key={Math.random()} style={{ marginTop: 5 / SCALE }}>
            <Week scale={SCALE} bg2={BG2} days={week}></Week>
          </View>
        );
      })}
    </Neomorphism>
  );
};

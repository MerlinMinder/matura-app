import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import Svg, { Path } from "react-native-svg";
import { Week } from "./parts/Week";
import { Weektitle } from "./parts/Weektitle";
import styles from "../../Styles";
import { neostyles } from "../../NeoStyles";
import { useEffect, useState } from "react";
import { Get } from "../../Store";

export const Calendar = (props) => {
  const SCALE = 375 / Dimensions.get("screen").width;
  const [yearmonth, onChangeYearmonth] = useState("");
  const [displaymonth, onChangeDisplaymonth] = useState([]);
  const [today, onChangeToday] = useState(new Date());
  const [calendar, setCalendar] = useState(0);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const calendarMonth = (year, month) => {
    const returnmonth = [[]];
    const currday = new Date(Date.now());
    currday.setUTCHours(0, 0, 0, 0);

    let day = new Date();
    day.setFullYear(year, month, 1);
    day.setUTCHours(0, 0, 0, 0);

    while (day.getMonth() == month) {
      if (calendar[day.getTime()]) {
        if (calendar[day.getTime()].workout) {
          returnmonth[returnmonth.length - 1].push({
            number: day.getDate(),
            color: calendar[day.getTime()].workout.color,
            workout: calendar[day.getTime()].workout,
          });
        }
      } else if (day.getTime() === currday.getTime()) {
        returnmonth[returnmonth.length - 1].push({
          number: day.getDate(),
          color: "white",
          workout: "",
        });
      } else {
        returnmonth[returnmonth.length - 1].push({
          number: day.getDate(),
          color: "",
        });
      }
      if (day.getDay() == 6) returnmonth.push([]);
      day.setDate(day.getDate() + 1);
    }
    while (returnmonth[0].length < 7) {
      returnmonth[0].unshift({ number: "", color: "" });
    }
    if (returnmonth[returnmonth.length - 1].length == 0) {
      returnmonth.pop();
    }
    while (returnmonth[returnmonth.length - 1].length < 7) {
      returnmonth[returnmonth.length - 1].push({ number: "", color: "" });
    }
    return returnmonth;
  };

  useEffect(() => {
    Get("calendar", setCalendar);
  }, []);

  useEffect(() => {
    onChangeYearmonth(`${months[today.getMonth()]} ${today.getFullYear()}`);
    onChangeDisplaymonth(calendarMonth(today.getFullYear(), today.getMonth()));
  }, [today]);

  if (!calendar) {
    return null;
  }

  let extraheight = (displaymonth.length == 6 ? 372 : 330) / SCALE;

  return (
    <Neomorphism
      style={styles.calendarcontainer}
      settings={{
        ...neostyles.calendarcontainer,
        ...{ height: extraheight },
      }}
    >
      {/* title / month selector */}
      <View style={styles.calendartitle}>
        <TouchableOpacity
          onPress={() => {
            console.log("pressed");
            const newdate = new Date(today);
            newdate.setMonth(today.getMonth() - 1);
            onChangeToday(newdate);
          }}
        >
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
        </TouchableOpacity>
        <Text style={styles.calendarmonth}>{yearmonth}</Text>
        <TouchableOpacity
          onPress={() => {
            const newdate = new Date(today);
            newdate.setMonth(today.getMonth() + 1);
            onChangeToday(newdate);
          }}
        >
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
        </TouchableOpacity>
      </View>

      {/* weektitles */}
      <Weektitle />

      {/* Weeks mapped out containing days */}
      {displaymonth.map((week) => {
        return (
          <View key={Math.random()} style={styles.top5}>
            <Week days={week} nav={props.nav}></Week>
          </View>
        );
      })}
    </Neomorphism>
  );
};

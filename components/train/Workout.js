import { Text, View, Dimensions } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import Svg, { Path } from "react-native-svg";
import { Start } from "../workout/Start";
import { ExerciseTrailer } from "../workout/Exercisetrailer";
import styles from "../../Styles";
import { neostyles } from "../../NeoStyles";
import { useEffect, useState } from "react";

export const Workout = (props) => {
  const [totaltime, onChangetotaltime] = useState("");

  useEffect(() => {
    onChangetotaltime(
      `${Math.floor(props.time / 60)}m ${Math.floor(props.time % 60)}s`
    );
  }, [props.time]);

  const SCALE = 375 / Dimensions.get("screen").width;

  const exercises = props.ex;

  const extraHeight = exercises.length * 95;

  return (
    <View>
      <Neomorphism
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        settings={{
          ...neostyles.workoutpagecontainer,
          ...{ height: 280 / SCALE + extraHeight / SCALE },
        }}
      >
        <View style={styles.Top5}>
          <Svg
            width="45"
            height="30"
            viewBox="0 0 45 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M4.60129 20.0756C5.12872 20.4271 5.84396 20.6246 6.58973 20.6246C7.33551 20.6246 8.05075 20.4271 8.57817 20.0756L22.5 10.7944L36.4219 20.0756C36.9524 20.4172 37.6628 20.6062 38.4002 20.6019C39.1377 20.5976 39.8431 20.4004 40.3645 20.0528C40.886 19.7051 41.1818 19.2349 41.1882 18.7432C41.1946 18.2516 40.9111 17.778 40.3988 17.4244L24.4885 6.8175C23.9611 6.46599 23.2458 6.26852 22.5 6.26852C21.7543 6.26852 21.039 6.46599 20.5116 6.8175L4.60129 17.4244C4.07403 17.776 3.77783 18.2528 3.77783 18.75C3.77783 19.2472 4.07403 19.724 4.60129 20.0756Z"
              fill="#B3B3B3"
            />
          </Svg>
        </View>
        <Text style={styles.workouttitle}>{props.title}</Text>

        <View style={styles.Top25}>
          <Neomorphism
            inset
            settings={{ ...neostyles.nameline, ...{ colorB: "#42FFFF" } }}
          ></Neomorphism>
        </View>
        <View style={styles.workoutdumbbell}>
          <Svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M4 0V14H7V8H13V14H16V0H13V6H7V0H4ZM1 10C1 10.2652 1.10536 10.5196 1.29289 10.7071C1.48043 10.8946 1.73478 11 2 11H3V3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V6H0V8H1V10ZM19 4C19 3.73478 18.8946 3.48043 18.7071 3.29289C18.5196 3.10536 18.2652 3 18 3H17V11H18C18.2652 11 18.5196 10.8946 18.7071 10.7071C18.8946 10.5196 19 10.2652 19 10V8H20V6H19V4Z"
              fill="white"
            />
          </Svg>
          <Text style={styles.workoutexercisetext}>
            {props.ex.length} exercises
          </Text>
          <Text style={styles.workoutdurationtext}>duration</Text>
          <View style={styles.workouttimer}>
            <Svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M4.97 0C4.89574 0 4.82452 0.0294999 4.77201 0.0820101C4.7195 0.13452 4.69 0.205739 4.69 0.28V0.84C4.69 0.914261 4.7195 0.98548 4.77201 1.03799C4.82452 1.0905 4.89574 1.12 4.97 1.12H5.39V1.8613C2.36096 2.2099 0 4.78926 0 7.91C0 11.2676 2.73238 14 6.09 14C9.44762 14 12.18 11.2676 12.18 7.91C12.181 6.76078 11.8546 5.63505 11.2392 4.66452L11.8325 4.18418L12.0968 4.51066C12.12 4.53925 12.1485 4.56301 12.1808 4.58057C12.2131 4.59813 12.2486 4.60916 12.2851 4.61302C12.3217 4.61688 12.3587 4.6135 12.3939 4.60307C12.4292 4.59264 12.4621 4.57537 12.4907 4.55224L12.9261 4.19972C12.9837 4.15296 13.0204 4.08522 13.0281 4.0114C13.0358 3.93758 13.0139 3.86371 12.9672 3.80604L11.5577 2.065C11.5346 2.03641 11.506 2.01265 11.4737 1.99509C11.4414 1.97753 11.406 1.9665 11.3694 1.96264C11.3328 1.95878 11.2959 1.96216 11.2606 1.97259C11.2253 1.98302 11.1925 2.00029 11.1639 2.02342L10.7285 2.37594C10.6708 2.4227 10.6341 2.49044 10.6264 2.56426C10.6187 2.63808 10.6406 2.71195 10.6873 2.76962L10.9518 3.0961L10.361 3.57406C9.4178 2.64474 8.17362 2.0209 6.79 1.86158V1.12H7.21C7.28426 1.12 7.35548 1.0905 7.40799 1.03799C7.4605 0.98548 7.49 0.914261 7.49 0.84V0.28C7.49 0.205739 7.4605 0.13452 7.40799 0.0820101C7.35548 0.0294999 7.28426 0 7.21 0L4.97 0ZM6.09 2.8C8.918 2.8 11.2 5.082 11.2 7.91C11.2 10.738 8.918 13.02 6.09 13.02C3.262 13.02 0.98 10.738 0.98 7.91C0.98 5.082 3.262 2.8 6.09 2.8ZM6.09028 3.84202L6.09 7.91L9.34276 10.3526C9.79649 9.74834 10.0729 9.02967 10.1411 8.27713C10.2093 7.52459 10.0666 6.76792 9.72888 6.09196C9.39118 5.41602 8.87188 4.8475 8.22921 4.45012C7.58653 4.05275 6.84588 3.84223 6.09028 3.84216V3.84202Z"
                fill="#42FFFF"
              />
            </Svg>
          </View>
          <Text style={styles.workouttime}>{totaltime}</Text>
        </View>

        <Start
          text="Finish"
          color="#FF4242"
          shadow="rgba(255, 204, 204, 0.7)"
          buffer={styles.Top162}
          nav={props.nav}
        />

        <View style={styles.t225l20}>
          <GradientText text="Exercises" style={styles.font20} />
        </View>
        <View style={styles.Top265}>
          {exercises.map((exercise) => {
            return (
              <View style={styles.bottom15} key={exercise.id}>
                <ExerciseTrailer name={exercise.name} sets={exercise.sets} />
              </View>
            );
          })}
        </View>
      </Neomorphism>
    </View>
  );
};

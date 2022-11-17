import { Text, TouchableWithoutFeedback, View } from "react-native";
import { Neomorphism } from "../../../Neomorphism";
import Svg, { Path } from "react-native-svg";
import styles from "../../../Styles";
import { neostyles } from "../../../NeoStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { Get, Merge } from "../../../Store";

export const WorkoutTrailer = (props) => {
  const [deleteshow, onChangeDeleteshow] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(props.workout);
        props.nav.navigate("workout", { id: props.workout.id });
      }}
    >
      <Neomorphism settings={neostyles.workouttrailer}>
        <Text style={styles.workouttrailertitle}>{props.workout.title}</Text>
        <View style={styles.workouttrailercolor}>
          <Neomorphism
            inset
            settings={{
              ...neostyles.workouttrailercolor,
              ...{ backgroundColor: props.workout.color },
            }}
          ></Neomorphism>
        </View>

        <View style={styles.workouttrailerdots}>
          <TouchableOpacity
            onPress={() => {
              onChangeDeleteshow(true);
            }}
          >
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M4.5 14.25C3.90326 14.25 3.33097 14.0129 2.90901 13.591C2.48705 13.169 2.25 12.5967 2.25 12C2.25 11.4033 2.48705 10.831 2.90901 10.409C3.33097 9.98705 3.90326 9.75 4.5 9.75C5.09674 9.75 5.66903 9.98705 6.09099 10.409C6.51295 10.831 6.75 11.4033 6.75 12C6.75 12.5967 6.51295 13.169 6.09099 13.591C5.66903 14.0129 5.09674 14.25 4.5 14.25ZM12 14.25C11.4033 14.25 10.831 14.0129 10.409 13.591C9.98705 13.169 9.75 12.5967 9.75 12C9.75 11.4033 9.98705 10.831 10.409 10.409C10.831 9.98705 11.4033 9.75 12 9.75C12.5967 9.75 13.169 9.98705 13.591 10.409C14.0129 10.831 14.25 11.4033 14.25 12C14.25 12.5967 14.0129 13.169 13.591 13.591C13.169 14.0129 12.5967 14.25 12 14.25ZM19.5 14.25C18.9033 14.25 18.331 14.0129 17.909 13.591C17.4871 13.169 17.25 12.5967 17.25 12C17.25 11.4033 17.4871 10.831 17.909 10.409C18.331 9.98705 18.9033 9.75 19.5 9.75C20.0967 9.75 20.669 9.98705 21.091 10.409C21.5129 10.831 21.75 11.4033 21.75 12C21.75 12.5967 21.5129 13.169 21.091 13.591C20.669 14.0129 20.0967 14.25 19.5 14.25Z"
                fill="white"
              />
            </Svg>
          </TouchableOpacity>
        </View>

        <View style={styles.workouttrailerdumbbell}>
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
        </View>
        <Text style={styles.workouttrailerexercises}>
          {
            Object.values(props.workout.exercises).filter((ex) => ex != "del")
              .length
          }{" "}
          Exercises
        </Text>
        <Text style={styles.workouttrailerrecent}>recent</Text>
        <View style={styles.workouttrailertimer}>
          <Svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M4.97 0C4.89574 0 4.82452 0.0294999 4.77201 0.0820101C4.7195 0.13452 4.69 0.205739 4.69 0.28V0.84C4.69 0.914261 4.7195 0.98548 4.77201 1.03799C4.82452 1.0905 4.89574 1.12 4.97 1.12H5.39V1.8613C2.36096 2.2099 0 4.78926 0 7.91C0 11.2676 2.73238 14 6.09 14C9.44762 14 12.18 11.2676 12.18 7.91C12.181 6.76078 11.8546 5.63505 11.2392 4.66452L11.8325 4.18418L12.0968 4.51066C12.12 4.53925 12.1485 4.56301 12.1808 4.58057C12.2131 4.59813 12.2486 4.60916 12.2851 4.61302C12.3217 4.61688 12.3587 4.6135 12.3939 4.60307C12.4292 4.59264 12.4621 4.57537 12.4907 4.55224L12.9261 4.19972C12.9837 4.15296 13.0204 4.08522 13.0281 4.0114C13.0358 3.93758 13.0139 3.86371 12.9672 3.80604L11.5577 2.065C11.5346 2.03641 11.506 2.01265 11.4737 1.99509C11.4414 1.97753 11.406 1.9665 11.3694 1.96264C11.3328 1.95878 11.2959 1.96216 11.2606 1.97259C11.2253 1.98302 11.1925 2.00029 11.1639 2.02342L10.7285 2.37594C10.6708 2.4227 10.6341 2.49044 10.6264 2.56426C10.6187 2.63808 10.6406 2.71195 10.6873 2.76962L10.9518 3.0961L10.361 3.57406C9.4178 2.64474 8.17362 2.0209 6.79 1.86158V1.12H7.21C7.28426 1.12 7.35548 1.0905 7.40799 1.03799C7.4605 0.98548 7.49 0.914261 7.49 0.84V0.28C7.49 0.205739 7.4605 0.13452 7.40799 0.0820101C7.35548 0.0294999 7.28426 0 7.21 0L4.97 0ZM6.09 2.8C8.918 2.8 11.2 5.082 11.2 7.91C11.2 10.738 8.918 13.02 6.09 13.02C3.262 13.02 0.98 10.738 0.98 7.91C0.98 5.082 3.262 2.8 6.09 2.8ZM6.09028 3.84202L6.09 7.91L9.34276 10.3526C9.79649 9.74834 10.0729 9.02967 10.1411 8.27713C10.2093 7.52459 10.0666 6.76792 9.72888 6.09196C9.39118 5.41602 8.87188 4.8475 8.22921 4.45012C7.58653 4.05275 6.84588 3.84223 6.09028 3.84216V3.84202Z"
              fill="white"
            />
          </Svg>
        </View>
        <Text style={styles.workouttrailertime}>{props.workout.time}</Text>
        {deleteshow ? (
          <View style={styles.workouttrailerdeletecont}>
            <TouchableOpacity
              style={styles.workouttrailerdeletetextcont}
              onPress={() => {
                if (deleteshow) {
                  Merge("workouts", { [props.workout.id]: "del" });
                  Get("workouts", props.setData);
                }
              }}
            >
              <Text style={styles.workouttrailerdeletetext}>Delete</Text>
            </TouchableOpacity>
            <View style={styles.workouttrailerdeletedots}>
              <TouchableOpacity
                onPress={() => {
                  onChangeDeleteshow(false);
                }}
              >
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M4.5 14.25C3.90326 14.25 3.33097 14.0129 2.90901 13.591C2.48705 13.169 2.25 12.5967 2.25 12C2.25 11.4033 2.48705 10.831 2.90901 10.409C3.33097 9.98705 3.90326 9.75 4.5 9.75C5.09674 9.75 5.66903 9.98705 6.09099 10.409C6.51295 10.831 6.75 11.4033 6.75 12C6.75 12.5967 6.51295 13.169 6.09099 13.591C5.66903 14.0129 5.09674 14.25 4.5 14.25ZM12 14.25C11.4033 14.25 10.831 14.0129 10.409 13.591C9.98705 13.169 9.75 12.5967 9.75 12C9.75 11.4033 9.98705 10.831 10.409 10.409C10.831 9.98705 11.4033 9.75 12 9.75C12.5967 9.75 13.169 9.98705 13.591 10.409C14.0129 10.831 14.25 11.4033 14.25 12C14.25 12.5967 14.0129 13.169 13.591 13.591C13.169 14.0129 12.5967 14.25 12 14.25ZM19.5 14.25C18.9033 14.25 18.331 14.0129 17.909 13.591C17.4871 13.169 17.25 12.5967 17.25 12C17.25 11.4033 17.4871 10.831 17.909 10.409C18.331 9.98705 18.9033 9.75 19.5 9.75C20.0967 9.75 20.669 9.98705 21.091 10.409C21.5129 10.831 21.75 11.4033 21.75 12C21.75 12.5967 21.5129 13.169 21.091 13.591C20.669 14.0129 20.0967 14.25 19.5 14.25Z"
                    fill="white"
                  />
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <></>
        )}
      </Neomorphism>
    </TouchableOpacity>
  );
};

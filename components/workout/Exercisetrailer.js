import { Text, TouchableOpacity, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import Svg, { Path } from "react-native-svg";
import { Settrailer } from "./Settrailer";
import styles from "../../Styles";
import { neostyles } from "../../NeoStyles";
import { useState } from "react";
import { Get, Merge } from "../../Store";

export const ExerciseTrailer = (props) => {
  const [deleteshow, onChangeDeleteshow] = useState(false);
  let sets = props.sets;
  const checkDelete = () => {
    if (!props.deletable) return;
    onChangeDeleteshow(true);
  };
  return (
    <Neomorphism inset settings={neostyles.exercisetrailer}>
      <Text style={styles.exercisetrailername}>{props.name}</Text>
      <View style={styles.exercisetrailerdots}>
        <TouchableOpacity onPress={checkDelete}>
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
      <View style={styles.exercisetrailersets}>
        {sets.map((set) => {
          return (
            <View key={set.num} style={styles.m2}>
              <Settrailer set={set} />
            </View>
          );
        })}
      </View>
      {deleteshow ? (
        <View style={styles.exercisetrailerdeletecont}>
          <TouchableOpacity
            style={styles.workouttrailerdeletetextcont}
            onPress={() => {
              if (deleteshow) {
                Merge("workouts", {
                  [props.ids.workid]: {
                    exercises: { [props.ids.exid]: "del" },
                  },
                });
                Get("workouts", props.setData);
              }
            }}
          >
            <Text style={styles.workouttrailerdeletetext}>Delete</Text>
          </TouchableOpacity>
          <View
            style={[
              styles.workouttrailerdeletedots,
              { transform: [], top: 0, right: 4 },
            ]}
          >
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
  );
};

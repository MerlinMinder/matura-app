import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";

export const Progressionpart = (props) => {
  const [deleteshow, onChangeDeleteshow] = useState(false);

  console.log(props.progression.value);

  const [repcount, onChangeRepcount] = useState(
    props.progression.value.filter((prog) => prog.key === props.id)[0].reps
      ? props.progression.value.filter((prog) => prog.key === props.id)[0].reps
      : 0
  );
  const [weightcount, onChangeWeightcount] = useState(
    props.progression.value.filter((prog) => prog.key === props.id)[0].weight
      ? props.progression.value.filter((prog) => prog.key === props.id)[0]
          .weight
      : 0
  );

  const runcheck = (rep, weight) => {
    const sendarr = [...props.progression.value];
    props.progression.value = sendarr.map((prog) => {
      if (prog.key == props.id) {
        return { key: props.id, reps: rep, weight: weight };
      } else return prog;
    });
  };

  return (
    <Neomorphism
      style={{ display: "flex", alignItems: "center", flexDirection: "row" }}
      settings={neostyles.progressionpartwrapper}
    >
      <Text style={styles.progressionpartrepstext}>reps</Text>
      <View style={styles.l50}>
        <Neomorphism inset settings={neostyles.progressionpartreps}>
          <TouchableWithoutFeedback
            onPress={() => {
              onChangeRepcount((prev) => prev - 1);
              runcheck(repcount - 1, weightcount);
            }}
          >
            <Text style={styles.progressionpartop}>-</Text>
          </TouchableWithoutFeedback>
          <Text style={styles.progressionparttext}>
            {repcount < 0 ? repcount : "+" + repcount}
          </Text>
          <TouchableWithoutFeedback
            onPress={() => {
              onChangeRepcount((prev) => prev + 1);
              runcheck(repcount + 1, weightcount);
            }}
          >
            <Text
              style={[
                styles.progressionpartop,
                { color: "#FFC042" },
                styles.t2l39,
              ]}
            >
              +
            </Text>
          </TouchableWithoutFeedback>
        </Neomorphism>
      </View>
      <Text style={styles.progressionpartmestext}>kg</Text>
      <View style={styles.l148}>
        <Neomorphism
          inset
          settings={{
            ...neostyles.progressionpartreps,
            ...neostyles.progressionpartmes,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              onChangeWeightcount((prev) => prev - 0.5);
              runcheck(repcount, weightcount - 0.5);
            }}
          >
            <Text style={styles.progressionpartop}>-</Text>
          </TouchableWithoutFeedback>
          <Text style={[styles.progressionparttext, styles.width46]}>
            {weightcount < 0 ? weightcount : "+" + weightcount}
          </Text>
          <TouchableWithoutFeedback
            onPress={() => {
              onChangeWeightcount((prev) => prev + 0.5);
              runcheck(repcount, weightcount + 0.5);
            }}
          >
            <Text
              style={[
                styles.progressionpartop,
                { color: "#FFC042" },
                styles.t2l62,
              ]}
            >
              +
            </Text>
          </TouchableWithoutFeedback>
        </Neomorphism>
      </View>
      <View style={styles.progressionpartdots}>
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
      {deleteshow ? (
        <View style={styles.progressionpartdeletecont}>
          <TouchableOpacity
            style={styles.workouttrailerdeletetextcont}
            onPress={() => {
              if (deleteshow) {
                const spliced = [...props.progression.value];
                props.progression.value = spliced.filter(
                  (prog) => prog.key != props.id
                );
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
  );
};

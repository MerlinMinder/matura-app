import { useState } from "react";
import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";

export const Setmorph = (props) => {
  const [editing, onChangeEditing] = useState(false);
  const [reps, onChangeReps] = useState(props.set.reps);
  const [weight, onChangeWeight] = useState(props.set.weight);
  const SCALE = 375 / Dimensions.get("screen").width;
  const main = props.set.num === props.currset;
  let settings = {
    width: main ? 120 / SCALE : 50 / SCALE,
    height: main ? 120 / SCALE : 50 / SCALE,
    x: main ? 7 / SCALE : 3 / SCALE,
    y: main ? 7 / SCALE : 3 / SCALE,
    r: main ? 25 / SCALE : 10 / SCALE,
    b: main ? 8 / SCALE : 4 / SCALE,
    colorB: "#464646",
    colorS1: "rgba(0, 0, 0, 0.7)",
    colorS2: "rgba(153, 153, 153, 0.7)",
  };

  const savechange = (reps, weight) => {
    const sendarr = [...props.ex.value];
    console.log(sendarr[props.currex].sets[props.currset - 1]);

    sendarr[props.currex].sets[props.currset - 1] = {
      weight: weight,
      reps: reps,
      num: sendarr[props.currex].sets[props.currset - 1].num,
      mes: "kg",
    };
    console.log(sendarr[props.currex].sets[props.currset - 1]);
    props.ex.value = sendarr;
  };

  const uasfont = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(
        props.set.num === props.currset ? 24 / SCALE : 12 / SCALE,
        { duration: 500 }
      ),
    };
  });
  const uastop = useAnimatedStyle(() => {
    return {
      top: withTiming(
        props.set.num === props.currset ? 60 / SCALE : 110 / SCALE,
        { duration: 500 }
      ),
    };
  });
  const uaspos = useAnimatedStyle(() => {
    if (props.set.num === props.currset) {
      return { left: withTiming(92.5 / SCALE, { duration: 500 }) };
    } else if (props.set.num === props.currset - 1) {
      return {
        left: withTiming(22 / SCALE, { duration: 500 }),
      };
    } else if (props.set.num === props.currset + 1) {
      return {
        left: withTiming(257 / SCALE, { duration: 500 }),
      };
    } else if (props.set.num > props.currset) {
      return {
        left: withTiming(360 / SCALE, { duration: 500 }),
      };
    } else {
      return {
        left: withTiming(-100 / SCALE, { duration: 500 }),
      };
    }
  });
  return (
    <>
      <Animated.View style={[{ position: "absolute" }, uastop, uaspos]}>
        <TouchableOpacity
          onPress={() => {
            main && onChangeEditing(true);
          }}
        >
          <Neomorphism settings={settings}>
            <Neomorphism
              center
              inset
              settings={{
                ...settings,
                ...{
                  colorS2: "rgba(0, 0, 0, 0.7)",
                  colorS1: "rgba(153, 153, 153, 0.7)",
                },
              }}
            >
              <Animated.Text
                style={[
                  {
                    width: main ? 108 / SCALE : 45 / SCALE,
                    fontFamily: "WorkSans-SemiBold",
                    fontWeight: "600",
                    color: "white",
                    textAlign: "center",
                  },
                  uasfont,
                ]}
              >
                {`${props.set.reps} x ${props.set.weight}${props.set.mes}`}
              </Animated.Text>
            </Neomorphism>
          </Neomorphism>
        </TouchableOpacity>
      </Animated.View>
      {editing && (
        <TouchableOpacity
          onPress={() => {
            onChangeEditing(false);
          }}
        >
          <View
            style={{
              width: 100 / SCALE,
              height: 100 / SCALE,
              backgroundColor: "#666666",
              borderRadius: 10 / SCALE,
              top: 92 / SCALE,
            }}
          >
            <Text
              style={[
                styles.font16,
                {
                  color: "white",
                  left: 5 / SCALE,
                  top: 17 / SCALE,
                  position: "absolute",
                },
              ]}
            >
              reps
            </Text>
            <View
              style={{
                top: 6 / SCALE,
                right: 6 / SCALE,
                position: "absolute",
              }}
            >
              <Neomorphism inset settings={neostyles.trainsetpopuptop}>
                <TextInput
                  style={styles.setrepsinput}
                  onChangeText={onChangeReps}
                  placeholder="0"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  value={reps}
                  selectTextOnFocus={true}
                  keyboardType="number-pad"
                  onEndEditing={() => {
                    savechange(reps, weight);
                  }}
                  maxLength={2}
                ></TextInput>
              </Neomorphism>
            </View>
            <View
              style={{
                top: 54 / SCALE,
                right: 6 / SCALE,
                position: "absolute",
              }}
            >
              <Neomorphism inset settings={neostyles.trainsetpopupbottom}>
                <TextInput
                  style={[styles.setrepsinput, styles.setmesinput]}
                  onChangeText={onChangeWeight}
                  placeholder="0"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  value={weight}
                  selectTextOnFocus={true}
                  keyboardType="number-pad"
                  onEndEditing={() => {
                    savechange(reps, weight);
                  }}
                  maxLength={5}
                ></TextInput>
              </Neomorphism>
            </View>
            <Text
              style={[
                styles.font16,
                {
                  color: "white",
                  left: 8 / SCALE,
                  top: 65 / SCALE,
                  position: "absolute",
                },
              ]}
            >
              kg
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

//

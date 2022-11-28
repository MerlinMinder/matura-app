import {
  Canvas,
  Fill,
  LinearGradient,
  RoundedRect,
  Shadow,
  useSharedValueEffect,
  vec,
} from "@shopify/react-native-skia";
import { useEffect, useState } from "react";
import { View, Text, Dimensions, Alert } from "react-native";
import {
  Gesture,
  GestureDetector,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { Get, Merge } from "../../Store";
import styles from "../../Styles";

export const Progress = (props) => {
  const SCALE = 375 / Dimensions.get("screen").width;
  const [progress, onChangeProgress] = useState(false);
  const gestureprogress = useSharedValue(false);
  const progdir = useSharedValue(null);

  useEffect(() => {
    gestureprogress.value = null;
  }, [props.data]);

  const doProgression = (direction) => {
    if (!direction) return;
    Object.values(props.data[props.id].exercises).map((ex) => {
      if (ex.on) {
        const changereps = ex.progression[ex.progressionstep].reps;
        const changeweight = ex.progression[ex.progressionstep].weight;
        const progsets = ex.sets.map((set) => {
          set["reps"] = String(parseFloat(set.reps) + direction * changereps);
          set["weight"] = String(
            parseFloat(set.weight) + direction * changeweight
          );
          return set;
        });
        const incprogstep =
          direction === 1
            ? ex.progression.length - 1 > ex.progressionstep
              ? ex.progressionstep + 1
              : 0
            : ex.progressionstep > 0
            ? ex.progressionstep - 1
            : 0;
        Merge("workouts", {
          [props.id]: {
            exercises: {
              [ex.id]: { sets: progsets, progressionstep: incprogstep },
            },
          },
        });
        Get("workouts", props.setData);
      }
    });
    if (gestureprogress.value) {
      Alert.alert(
        "No progression",
        "You have not added any progression steps to your exercises"
      );
      gestureprogress.value = null;
    }
  };

  useSharedValueEffect(() => {
    onChangeProgress(gestureprogress.value);
    progdir.value = null;
  }, gestureprogress);

  useSharedValueEffect(() => {
    doProgression(progdir.value);
    progdir.value = null;
  }, progdir);

  const quit = Gesture.Tap().onStart(() => {
    gestureprogress.value = false;
  });

  const gprogress = Gesture.Tap().onStart(() => {
    progdir.value = 1;
  });

  const unprogress = Gesture.Tap().onStart(() => {
    progdir.value = -1;
  });

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          gestureprogress.value = true;
        }}
      >
        <View style={{ display: "flex", alignItems: "center" }}>
          <Canvas style={styles.progresscanvas}>
            <Fill color="transparent" />
            <RoundedRect
              x={0}
              y={0}
              width={110 / SCALE}
              height={30 / SCALE}
              r={15 / SCALE}
              color="red"
            >
              <LinearGradient
                start={vec(55 / SCALE, 0)}
                end={vec(55 / SCALE, 30 / SCALE)}
                colors={["#33FFFF", "#FFCC33"]}
              />
              <Shadow
                dx={4 / SCALE}
                dy={4 / SCALE}
                blur={2 / SCALE}
                color="rgba(230, 255, 255, 0.8)"
                inner={true}
              />
              <Shadow
                dx={-3 / SCALE}
                dy={-3 / SCALE}
                blur={2 / SCALE}
                color="rgba(51, 34, 0, 0.6)"
                inner={true}
              />
            </RoundedRect>
          </Canvas>
          <Text style={styles.progresstext}>PROGRESS</Text>
          <Text style={[styles.progresstext, styles.progresstext2]}>
            PROGRESS
          </Text>
        </View>
      </TouchableOpacity>
      {progress ? (
        <View style={styles.progresspopup}>
          <Canvas style={{ width: 290 / SCALE, height: 140 / SCALE }}>
            <Fill color="#464646" />
            <RoundedRect
              x={15 / SCALE}
              y={10 / SCALE}
              width={260 / SCALE}
              height={120 / SCALE}
              r={40 / SCALE}
              color="red"
            >
              <LinearGradient
                start={vec(130 / SCALE, 0)}
                end={vec(130 / SCALE, 120 / SCALE)}
                colors={["#42FFFF", "#FFC042"]}
              />
            </RoundedRect>
            <RoundedRect
              x={65 / SCALE}
              y={27 / SCALE}
              width={160 / SCALE}
              height={50 / SCALE}
              r={20 / SCALE}
              color="green"
            >
              <LinearGradient
                start={vec(0, 25 / SCALE)}
                end={vec(225 / SCALE, 25 / SCALE)}
                colors={["#42FFFF", "#FFC042"]}
              />
              <Shadow
                dx={6 / SCALE}
                dy={6 / SCALE}
                blur={8 / SCALE}
                color="rgba(51, 34, 0, 0.5)"
              />
              <Shadow
                dx={-6 / SCALE}
                dy={-6 / SCALE}
                blur={5 / SCALE}
                color="rgba(230, 255, 255, 0.5)"
              />
              <Shadow
                dx={-5 / SCALE}
                dy={-5 / SCALE}
                blur={3 / SCALE}
                color="rgba(0, 0, 0, 0.6)"
                inner={true}
              />
            </RoundedRect>
            <RoundedRect
              x={45 / SCALE}
              y={96 / SCALE}
              width={70 / SCALE}
              height={20 / SCALE}
              r={10 / SCALE}
              color="rgba(192, 66, 255, 0.8)"
            >
              <Shadow
                dx={4 / SCALE}
                dy={4 / SCALE}
                blur={4 / SCALE}
                color="rgba(0, 0, 0, 0.7)"
                inner
              />
              <Shadow
                dx={-3 / SCALE}
                dy={-3 / SCALE}
                blur={2 / SCALE}
                color="rgba(255, 204, 204, 0.7)"
                inner
              />
            </RoundedRect>
            <RoundedRect
              x={175 / SCALE}
              y={96 / SCALE}
              width={70 / SCALE}
              height={20 / SCALE}
              r={10 / SCALE}
              color="rgba(255, 66, 66, 0.8)"
            >
              <Shadow
                dx={4 / SCALE}
                dy={4 / SCALE}
                blur={4 / SCALE}
                color="rgba(0, 0, 0, 0.7)"
                inner
              />
              <Shadow
                dx={-3 / SCALE}
                dy={-3 / SCALE}
                blur={2 / SCALE}
                color="rgba(255, 204, 204, 0.7)"
                inner
              />
            </RoundedRect>
          </Canvas>
          <GestureDetector gesture={gprogress}>
            <Text style={styles.progresspopupprogress}>PROGRESS</Text>
          </GestureDetector>
          <GestureDetector gesture={unprogress}>
            <Text style={styles.progresspopupsmall}>reverse</Text>
          </GestureDetector>
          <GestureDetector gesture={quit}>
            <Text style={[styles.progresspopupsmall, { left: 187 / SCALE }]}>
              cancel
            </Text>
          </GestureDetector>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

import {
  Canvas,
  Fill,
  LinearGradient,
  RoundedRect,
  Shadow,
  useFont,
  useSharedValueEffect,
  vec,
} from "@shopify/react-native-skia";
import { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import {
  Gesture,
  GestureDetector,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import styles from "../../Styles";

export const Progress = (props) => {
  const SCALE = 375 / Dimensions.get("screen").width;
  const [progress, onChangeProgress] = useState(false);
  const gestureprogress = useSharedValue(false);
  const progdir = useSharedValue(null);

  const doProgression = (direction) => {
    if (!direction) return;
    console.log(direction);
  };

  useSharedValueEffect(() => {
    onChangeProgress(gestureprogress.value);
  }, gestureprogress);

  useSharedValueEffect(() => {
    doProgression(progdir.value);
  }, progdir);

  const quit = Gesture.Tap().onStart(() => {
    gestureprogress.value = false;
  });

  const gprogress = Gesture.Tap().onStart(() => {
    progdir.value = "up";
  });

  const unprogress = Gesture.Tap().onStart(() => {
    progdir.value = "down";
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

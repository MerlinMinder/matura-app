import { useSharedValueEffect, useValue } from "@shopify/react-native-skia";
import { useState } from "react";
import { Text, View, Dimensions, Alert } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import GradientText from "../../GradientText";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";
import { Progressionpart } from "./Progressionpart";

export const Progression = (props) => {
  const SCALE = 375 / Dimensions.get("screen").width;
  const [progshow, onChangeProgshow] = useState(false);
  const colorB1 = useValue("rgba(98, 255, 66, 1)");
  const colorS1 = useValue("rgba(212, 255, 204, 0.8)");

  const prog = useSharedValue(false);
  const addcolorS1 = useValue("rgba(153, 153, 153, 0.6)");
  const addcolorS2 = useValue("rgba(0, 0, 0, 0.6)");

  useSharedValueEffect(() => {
    colorB1.current = props.on.value
      ? "rgba(98, 255, 66, 1)"
      : "rgba(69, 69, 69, 1)";
    colorS1.current = props.on.value
      ? "rgba(212, 255, 204, 0.8)"
      : "rgba(173, 173, 173, 0.8)";
    props.on.value ? onChangeProgshow(true) : onChangeProgshow(false);
  }, props.on);

  const slideuas = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        props.on.value ? "rgba(98, 255, 66, 0.2)" : "rgba(40, 40, 40, 0.2)"
      ),
      borderColor: withTiming(
        props.on.value ? "rgba(98, 255, 66, 0.5)" : "rgba(40, 40, 40, 0.8)"
      ),
    };
  });

  const slideruas = useAnimatedStyle(() => {
    return {
      left: withTiming(props.on.value ? 31 / SCALE : 1 / SCALE),
    };
  });

  const slide = Gesture.Tap().onBegin(() => {
    props.on.value = !props.on.value;
  });

  useSharedValueEffect(() => {
    addcolorS1.current = prog.value
      ? "rgba(90, 90, 90, 0.6)"
      : "rgba(153, 153, 153, 0.6)";
    addcolorS2.current = prog.value
      ? "rgba(50, 50, 50, 0.6)"
      : "rgba(0, 0, 0, 0.6)";
    if (prog.value) {
      const sendarr = [...props.progression.value];
      if (sendarr.length < 4) {
        sendarr.push({ key: sendarr.length, reps: 0, weight: 0 });
        props.progression.value = sendarr;
      } else {
        props.progression.value = [];
        prog.value = 0;
        Alert.alert(
          "Max Steps",
          "You can have a maximum of 4 steps per progression!"
        );
      }
    }
  }, prog);

  const add = Gesture.Tap()
    .onBegin(() => {
      prog.value = true;
    })
    .onFinalize(() => {
      prog.value = false;
    });

  return (
    <Neomorphism
      center
      settings={{
        ...neostyles.progressionouter,
        ...{ height: 127 / SCALE + (props.data.length * 53) / SCALE },
      }}
    >
      <Neomorphism
        inset
        settings={{
          ...neostyles.progressionouter,
          ...neostyles.progressioninner,
          ...{ height: 121 / SCALE + (props.data.length * 53) / SCALE },
        }}
      >
        <View style={styles.progressiontextpos}>
          <GradientText text="Progression" style={styles.font20} />
        </View>
        <GestureDetector gesture={slide}>
          <View style={styles.l9t209}>
            <Animated.View style={[styles.progressionslide, slideuas]}>
              <Animated.View style={[styles.r1t1, slideruas]}>
                <Neomorphism
                  inset
                  settings={{
                    ...neostyles.progressionslider,
                    ...{
                      colorB: colorB1,
                      colorS1: colorS1,
                    },
                  }}
                ></Neomorphism>
              </Animated.View>
            </Animated.View>
          </View>
        </GestureDetector>
        {progshow ? (
          <>
            <View style={styles.Top15}>
              {props.data.map((prog) => {
                return (
                  <Progressionpart
                    key={prog.key}
                    progression={props.progression}
                    id={prog.key}
                  />
                );
              })}
            </View>
            <GestureDetector gesture={add}>
              <View style={styles.t40l61}>
                <Neomorphism
                  inset
                  center
                  settings={{
                    ...neostyles.progressionstep,
                    ...{ colorS1: addcolorS1, colorS2: addcolorS2 },
                  }}
                >
                  <Text style={[styles.font16, { color: "white" }]}>
                    add step
                  </Text>
                </Neomorphism>
              </View>
            </GestureDetector>
          </>
        ) : (
          <></>
        )}
      </Neomorphism>
    </Neomorphism>
  );
};

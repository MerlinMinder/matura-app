import { useSharedValueEffect, useValue } from "@shopify/react-native-skia";
import { useState } from "react";
import { Text, View, Dimensions } from "react-native";
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
  const on = useSharedValue(false);
  const [progshow, onChangeProgshow] = useState(false);
  const colorB1 = useValue("rgba(98, 255, 66, 1)");
  const colorS1 = useValue("rgba(212, 255, 204, 0.8)");

  useSharedValueEffect(() => {
    colorB1.current = on.value ? "rgba(98, 255, 66, 1)" : "rgba(69, 69, 69, 1)";
    colorS1.current = on.value
      ? "rgba(212, 255, 204, 0.8)"
      : "rgba(173, 173, 173, 0.8)";
    on.value ? onChangeProgshow(true) : onChangeProgshow(false);
  }, on);

  const slideuas = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        on.value ? "rgba(98, 255, 66, 0.2)" : "rgba(40, 40, 40, 0.2)"
      ),
      borderColor: withTiming(
        on.value ? "rgba(98, 255, 66, 0.5)" : "rgba(40, 40, 40, 0.8)"
      ),
    };
  });

  const slideruas = useAnimatedStyle(() => {
    return {
      left: withTiming(on.value ? 31 / SCALE : 1 / SCALE),
    };
  });

  const gesture = Gesture.Tap().onBegin(() => {
    on.value = !on.value;
  });

  let progression = props.progression;

  return (
    <Neomorphism
      center
      settings={{
        ...neostyles.progressionouter,
        ...{ height: 127 / SCALE + (progression.length * 53) / SCALE },
      }}
    >
      <Neomorphism
        inset
        settings={{
          ...neostyles.progressionouter,
          ...neostyles.progressioninner,
          ...{ height: 121 / SCALE + (progression.length * 53) / SCALE },
        }}
      >
        <View style={styles.progressiontextpos}>
          <GradientText text="Progression" style={styles.font20} />
        </View>
        <GestureDetector gesture={gesture}>
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
              {progression.map((prog) => {
                return <Progressionpart key={prog} />;
              })}
            </View>
            <View style={styles.t40l61}>
              <Neomorphism inset center settings={neostyles.progressionstep}>
                <Text style={[styles.font16, { color: "white" }]}>
                  add step
                </Text>
              </Neomorphism>
            </View>
          </>
        ) : (
          <></>
        )}
      </Neomorphism>
    </Neomorphism>
  );
};

import { useSharedValueEffect } from "@shopify/react-native-skia";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import GradientText from "../../GradientText";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import { Merge } from "../../Store";
import styles from "../../Styles";

export const Counter = (props) => {
  const restcount = useSharedValue(0);
  const setcount = useSharedValue(0);
  const plusset = useSharedValue(false);
  const [counttext, onChangeCounttext] = useState("");

  useSharedValueEffect(() => {
    if (props.text == "Rest") {
      onChangeCounttext(String(restcount.value));
    }
    if (props.text == "Sets") {
      onChangeCounttext(String(setcount.value));
    }
  }, [restcount, setcount]);

  const minus = Gesture.Tap().onBegin(() => {
    if (restcount.value) {
      restcount.value -= 5;
    }
    if (setcount.value) {
      setcount.value -= 1;
    }
  });
  const plus = Gesture.Tap().onBegin(() => {
    restcount.value += 5;
    setcount.value += 1;
    plusset.value = true;
  });

  return (
    <View style={[styles.counterwidth, props.style]}>
      <GradientText text={props.text} style={styles.font18} />
      <View style={styles.l30}>
        <Neomorphism
          inset
          settings={{ ...neostyles.counter, ...{ width: props.width } }}
        >
          <GestureDetector gesture={minus}>
            <Text style={[styles.countertextbuttons, styles.lm1]}>-</Text>
          </GestureDetector>
          <Text style={[styles.counternumber, { width: props.textwidth }]} tex>
            {counttext}
          </Text>
          <GestureDetector gesture={plus}>
            <Text style={[styles.countertextbuttons, styles.rm2t1]}>+</Text>
          </GestureDetector>
        </Neomorphism>
      </View>
    </View>
  );
};

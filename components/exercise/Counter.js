import { useSharedValueEffect } from "@shopify/react-native-skia";
import { useState } from "react";
import { Alert, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import GradientText from "../../GradientText";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";

export const Counter = (props) => {
  const restcount = useSharedValue(0);
  const setcount = useSharedValue(0);
  const plusset = useSharedValue(false);
  const minusset = useSharedValue(false);
  const [counttext, onChangeCounttext] = useState("");

  useSharedValueEffect(() => {
    if (props.text == "Rest") {
      onChangeCounttext(String(restcount.value) + "s");
      props.rest.value = restcount.value;
    }
    if (props.text == "Sets") {
      onChangeCounttext(String(setcount.value));
      if (plusset.value) {
        const sendarr = [...props.sets.value];
        if (sendarr.length < 6) {
          let num = sendarr.length + 1;
          sendarr.push({ num: num, mes: "kg", reps: 0, weight: 0 });
          props.sets.value = sendarr;
        } else {
          Alert.alert(
            "Max Sets",
            "You can have a maximum of 6 sets per exercise!"
          );
          setcount.value = 6;
        }
        plusset.value = false;
      }
      if (minusset.value) {
        const sendarr = [...props.sets.value];
        if (sendarr.length) {
          sendarr.pop();
          props.sets.value = sendarr;
        }
        minusset.value = false;
      }
    }
  }, [restcount, setcount]);

  const minus = Gesture.Tap().onBegin(() => {
    if (restcount.value) {
      restcount.value -= 10;
    }
    if (setcount.value) {
      setcount.value -= 1;
      minusset.value = true;
    }
  });
  const plus = Gesture.Tap().onBegin(() => {
    restcount.value += 10;
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

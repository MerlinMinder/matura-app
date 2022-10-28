import { useSharedValueEffect, useValue } from "@shopify/react-native-skia";
import { Text, TouchableOpacity, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";

export const Start = (props) => {
  return (
    <View style={[styles.top132, props.buffer]}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          props.nav.navigate("train", { id: props.id });
        }}
      >
        <Neomorphism settings={neostyles.startouter}>
          <Neomorphism
            center
            inset
            settings={{
              ...neostyles.startinner,
              ...{ colorS1: props.shadow, colorB: props.color },
            }}
          >
            <Text style={[styles.font24, { color: "#464646" }]}>
              {props.text}
            </Text>
          </Neomorphism>
        </Neomorphism>
      </TouchableOpacity>
    </View>
  );
};

import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

// Inspiration came from:
// https://stackoverflow.com/questions/51248255/how-to-create-a-gradient-text-in-react-native

export default GradientText = (props) => {
  return (
    // part to mask the gradient below to only show the text with the gradient
    <MaskedView
      maskElement={
        <Text style={[props.style, { backgroundColor: "transparent" }]}>
          {props.text}
        </Text>
      }
    >
      {/* the gradient with hardcoded colors since these are the only ones needed */}
      <LinearGradient
        colors={["#42FFFF", "#FFC042"]}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.9]}
      >
        {/* The text that recieves the gradient */}
        <Text style={[props.style, { opacity: 0 }]}>{props.text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

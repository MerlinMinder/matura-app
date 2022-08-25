import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";

export const Measure = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;

  const [text, onChangeText] = useState(props.word ? props.word : "");
  const [number, onChangeNumber] = useState(0);
  const variable = props.word ? true : true;

  return (
    <View style={props.style}>
      <Neomorphism
        width={280 / SCALE}
        height={40 / SCALE}
        x={4 / SCALE}
        y={4 / SCALE}
        r={10 / SCALE}
        b={3 / SCALE}
        colorB={BG2}
        colorS1="rgba(0, 0, 0, 0.5)"
        colorS2="rgba(153, 153, 153, 0.5)"
        inset={true}
      >
        <TextInput
          style={{
            position: "absolute",
            height: 40 / SCALE,
            left: 15 / SCALE,
            width: 130 / SCALE,
            fontFamily: "WorkSans-SemiBold",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 18 / SCALE,
            lineHeight: 21 / SCALE,
            color: "white",
          }}
          placeholder="Height"
          placeholderTextColor="white"
          value={text}
          onChangeText={onChangeText}
          selectTextOnFocus={true}
          editable={variable}
        ></TextInput>
        <TextInput
          style={{
            position: "absolute",
            textAlign: "right",
            height: 40 / SCALE,
            right: 50 / SCALE,
            width: 80 / SCALE,
            fontFamily: "WorkSans-SemiBold",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 18 / SCALE,
            lineHeight: 21 / SCALE,
            color: "white",
          }}
          onChangeText={onChangeNumber}
          placeholder="?"
          placeholderTextColor="white"
          value={number}
          keyboardType="number-pad"
          selectTextOnFocus={true}
        ></TextInput>
        <Text
          style={{
            position: "absolute",
            height: 21 / SCALE,
            right: 15 / SCALE,
            width: 30 / SCALE,
            top: 10 / SCALE,
            fontFamily: "WorkSans-SemiBold",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 18 / SCALE,
            lineHeight: 21 / SCALE,
            color: "white",
            textAlign: "center",
          }}
        >
          {props.mes}
        </Text>
      </Neomorphism>
    </View>
  );
};

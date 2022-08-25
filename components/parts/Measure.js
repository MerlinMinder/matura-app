import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";

export const Measure = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;

  const [number, onChangeNumber] = useState(0);

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
        <Text
          style={{
            position: "absolute",
            height: 21 / SCALE,
            top: 10 / SCALE,
            left: 15 / SCALE,
            width: 130 / SCALE,
            fontFamily: "WorkSans-SemiBold",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 18 / SCALE,
            lineHeight: 21 / SCALE,
            color: "white",
          }}
        >
          {props.word}
        </Text>
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
          multiline={true}
          numberOfLines={1}
          onChangeText={onChangeNumber}
          placeholder="?"
          placeholderTextColor="white"
          value={number}
          keyboardType="number-pad"
          selectTextOnFocus={true}
          editable={props.edit}
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

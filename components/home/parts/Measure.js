import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Neomorphism } from "../../../Neomorphism";
import styles from "../../../Styles";

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
        <Text style={styles.measureword}>{props.word}</Text>
        <TextInput
          style={styles.measureinput}
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
        <Text style={styles.measuremes}>{props.mes}</Text>
      </Neomorphism>
    </View>
  );
};

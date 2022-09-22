import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Neomorphism } from "../../../Neomorphism";
import { neostyles } from "../../../NeoStyles";
import styles from "../../../Styles";

export const Measure = (props) => {
  const [number, onChangeNumber] = useState(0);
  return (
    <View style={props.style}>
      <Neomorphism inset settings={neostyles.measure}>
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

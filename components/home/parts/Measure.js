import { useState, useEffect } from "react";
import { Text, TextInput, View } from "react-native";
import { Neomorphism } from "../../../Neomorphism";
import { neostyles } from "../../../NeoStyles";
import styles from "../../../Styles";

export const Measure = (props) => {
  const [number, onChangeNumber] = useState(props.measures[props.word]);
  const [editable, onChangeEditable] = useState(false);
  useEffect(() => {
    onChangeEditable(props.edit === "Edit" ? false : true);
  }, [props.edit]);
  return (
    <View style={props.style}>
      <Neomorphism inset settings={neostyles.measure}>
        <Text style={styles.measureword}>{props.word}</Text>
        <TextInput
          style={[styles.measureinput, { color: editable ? "red" : "white" }]}
          multiline={true}
          numberOfLines={1}
          onChangeText={onChangeNumber}
          placeholder="?"
          placeholderTextColor="white"
          value={number}
          onEndEditing={() => {
            const statecopy = { ...props.measures };
            statecopy[props.word] = number;
            props.onChangeMeasures(statecopy);
          }}
          keyboardType="number-pad"
          selectTextOnFocus={true}
          editable={editable}
        ></TextInput>
        <Text style={styles.measuremes}>{props.mes}</Text>
      </Neomorphism>
    </View>
  );
};

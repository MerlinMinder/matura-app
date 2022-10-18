import { useSharedValueEffect } from "@shopify/react-native-skia";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Neomorphism } from "../../../Neomorphism";
import { neostyles } from "../../../NeoStyles";
import styles from "../../../Styles";

export const Measure = (props) => {
  const [number, onChangeNumber] = useState(0);
  const [editable, onChangeEditable] = useState(false);
  useSharedValueEffect(() => {
    onChangeEditable(props.edit.value === "Edit" ? false : true);
  }, props.edit);
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
          keyboardType="number-pad"
          selectTextOnFocus={true}
          editable={editable}
        ></TextInput>
        <Text style={styles.measuremes}>{props.mes}</Text>
      </Neomorphism>
    </View>
  );
};

import * as React from "react";
import { TextInput, StyleSheet } from "react-native";

function Input(props) {
  return (
    <TextInput
      onChangeText={props.onChange}
      value={props.value}
      style={styles.container}
    />
  );
}

let styles = StyleSheet.create({
  container: {
    fontFamily: "Charmonman",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    outline: "none"
  }
});

export default Input;

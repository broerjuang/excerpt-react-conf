import * as React from "react";
import { Text as TextPrimitive, StyleSheet } from "react-native";

function Text(props) {
  return (
    <TextPrimitive style={styles.container}>{props.children}</TextPrimitive>
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

export default Text;

import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

function Row(props) {
  return (
    <View style={styles.container}>
      <View style={styles.labelWrapper}>
        <View style={styles.strightLine} />
        <Text style={styles.label}>{props.label}</Text>
        <View style={styles.strightLine} />
      </View>
      <View style={styles.children}>{props.children}</View>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  labelWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginBottom: 10
  },
  strightLine: {
    flex: 1,
    backgroundColor: "#eee",
    height: 1
  },
  label: {
    margin: 5,
    fontFamily: "Nova Round",
    color: "#eee"
  },
  children: {
    alignItems: "center"
  }
});

export default Row;

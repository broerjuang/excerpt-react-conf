import * as React from "react";
import { View, StyleSheet } from "react-native";

function Card(props) {
  return (
    <View style={[styles.container, { backgroundColor: props.theme }]}>
      {props.children}
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    minWidth: 300,
    padding: 20,
    boxShadow: "10px 3px 6px rgba(0,0,0,0.16)"
  }
});

export default Card;

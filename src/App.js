import * as React from "react";
import { View, StyleSheet } from "react-native";
import GreetingHooks from "./GreetingHooks";
import GreetingClass from "./GreetingClass";

const SHARK = "#1F232A";

function App(props) {
  return (
    <View style={styles.container}>
      <GreetingHooks />
      <GreetingClass />
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: SHARK
  }
});

export default App;

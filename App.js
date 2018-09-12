import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RootStack from "./src/components/root-stack.js";

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

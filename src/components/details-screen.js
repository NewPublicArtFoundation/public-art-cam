import React from "react";
import { Button, View, Text } from "react-native";

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Details page",
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

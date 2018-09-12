import React from "react";
import { bootstrap } from "./src/config/bootstrap";
import RootStack from "./src/root-stack";
import { data } from "./src/data";
import { AppLoading, Font } from "expo";
import { SafeAreaView } from "react-native";

export default class App extends React.Component {
  state = {
    loaded: false,
  };

  componentWillMount() {
    this._loadAssets();
  }

  _loadAssets = async () => {
    await Font.loadAsync({
      fontawesome: require("./src/assets/fonts/fontawesome.ttf"),
      icomoon: require("./src/assets/fonts/icomoon.ttf"),
      "Righteous-Regular": require("./src/assets/fonts/Righteous-Regular.ttf"),
      "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
      "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Light": require("./src/assets/fonts/Roboto-Light.ttf"),
    });
    this.setState({ loaded: true });
  };

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
        <RootStack />
      </SafeAreaView>
    );
  }
}

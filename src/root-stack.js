import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import MapScreen from "./components/map-screen.js";
import CameraScreen from "./components/camera-screen.js";
import AppBase from "./app-base.js";
import AppSetting from "./screens/other/settings.js";

const RootStack = createBottomTabNavigator(
  {
    Home: AppBase,
    Map: MapScreen,
    Camera: CameraScreen,
    Settings: AppSetting,
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  },
);

export default RootStack;

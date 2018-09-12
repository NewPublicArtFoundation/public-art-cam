import { createBottomTabNavigator } from "react-navigation";
import CameraScreen from "./camera-screen.js";
import DetailsScreen from "./details-screen.js";
import HomeNavStack from "./home-nav-stack.js";
import SettingsScreen from "./settings-screen.js";

const RootStack = createBottomTabNavigator(
  {
    Home: HomeNavStack,
    Camera: CameraScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: "Camera",
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

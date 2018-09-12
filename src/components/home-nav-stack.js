import { createStackNavigator } from "react-navigation";
import DetailsScreen from "./details-screen.js";
import HomeScreen from "./home-screen.js";

const HomeNavStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
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

export default HomeNavStack;

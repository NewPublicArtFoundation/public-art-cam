import React from "react";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import { withRkTheme } from "react-native-ui-kitten";
import { AppRoutes } from "./src/config/navigation/routesBuilder";
import * as Screens from "./src/screens";
import { bootstrap } from "./src/config/bootstrap";
import track from "./src/config/analytics";
import { data } from "./src/data";
import { AppLoading, Font } from "expo";
import { View, SafeAreaView } from "react-native";

bootstrap();
data.populateData();

function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

let SideMenu = withRkTheme(Screens.SideMenu);
const KittenApp = createStackNavigator(
  {
    First: {
      screen: Screens.SplashScreen,
    },
    Home: {
      screen: createDrawerNavigator(
        {
          ...AppRoutes,
        },
        {
          drawerOpenRoute: "DrawerOpen",
          drawerCloseRoute: "DrawerClose",
          drawerToggleRoute: "DrawerToggle",
          contentComponent: props => <SideMenu {...props} />,
        },
      ),
    },
  },
  {
    headerMode: "none",
    cardStyle: { shadowColor: "transparent" },
  },
);

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
        <KittenApp
          onNavigationStateChange={(prevState, currentState) => {
            const currentScreen = getCurrentRouteName(currentState);
            const prevScreen = getCurrentRouteName(prevState);

            if (prevScreen !== currentScreen) {
              track(currentScreen);
            }
          }}
        />
      </SafeAreaView>
    );
  }
}

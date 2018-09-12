import React from "react";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import { withRkTheme } from "react-native-ui-kitten";
import { AppRoutes } from "./config/navigation/routesBuilder";
import * as Screens from "./screens";
import { bootstrap } from "./config/bootstrap";
import track from "./config/analytics";
import { data } from "./data";
import { SafeAreaView } from "react-native";

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

export default class AppBase extends React.Component {
  render() {
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

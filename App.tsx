import React from "react";
import "react-native-gesture-handler";
import LayoutReduxProvider from "./ui/providers/LayoutReduxProvider";
import LayoutThemeProvider from "./ui/providers/LayoutThemeProvider";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";

export default function App() {
  const { Screen, Navigator } = createStackNavigator();
  return (
    <LayoutReduxProvider>
      <LayoutThemeProvider>
        <NavigationContainer>
          <Navigator initialRouteName={routes.gaming.name} screenOptions={{
            header : () => null
          }}>
            <Screen {...routes.auth} />
            <Screen {...routes.gaming} />
            <Screen {...routes.gamingStatus} />
          </Navigator>
        </NavigationContainer>
      </LayoutThemeProvider>
    </LayoutReduxProvider>
  );
}

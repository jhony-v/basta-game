import React from "react";
import "react-native-gesture-handler";
import LayoutReduxProvider from "./ui/providers/LayoutReduxProvider";
import LayoutThemeProvider from "./ui/providers/LayoutThemeProvider";
import { NavigationContainer } from "@react-navigation/native";
import MainRouter from "./routes/MainRouter";

export default function App() {
  return (
    <LayoutReduxProvider>
      <LayoutThemeProvider>
        <NavigationContainer>
          <MainRouter/>
        </NavigationContainer>
      </LayoutThemeProvider>
    </LayoutReduxProvider>
  );
}

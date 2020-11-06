import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import routes from ".";

const AuthGameRouter = () => {
  const { Screen, Navigator } = createStackNavigator();
  return (
    <Navigator initialRouteName={routes.showLetter.name} headerMode="none">
      <Screen {...routes.gaming} />
      <Screen {...routes.gamingStatus} />
      <Screen {...routes.showLetter} />
      <Screen {...routes.createNewGame} />
    </Navigator>
  );
};

export default AuthGameRouter;

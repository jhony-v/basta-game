import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import routes from "..";

const NoAuthGameRouter = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator initialRouteName={routes.auth.name} headerMode="none">
      <Screen {...routes.auth} />
    </Navigator>
  );
};

export default NoAuthGameRouter;

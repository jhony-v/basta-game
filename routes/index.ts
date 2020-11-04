import AuthScreen from "../screens/AuthScreen";
import GamingScreen from "../screens/GamingScreen";
import GamingStatusScreen from "../screens/GamingStatusScreen";

const routes = {
  auth: {
    name: "auth",
    component : AuthScreen
  },
  gaming: {
    name: "gaming",
    component : GamingScreen
  },
  gamingStatus: {
    name: "gamingStatus",
    component : GamingStatusScreen
  },
};

export default routes;

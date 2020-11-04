import AuthScreen from "../ui/screens/AuthScreen";
import GamingScreen from "../ui/screens/GamingScreen";
import GamingStatusScreen from "../ui/screens/GamingStatusScreen";

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

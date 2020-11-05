import AuthScreen from "../ui/screens/AuthScreen";
import GamingScreen from "../ui/screens/GamingScreen";
import GamingStatusScreen from "../ui/screens/GamingStatusScreen";
import ShowLetterScreen from "../ui/screens/ShowLetterScreen";

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
  showLetter : {
    name : "showLetter",
    component : ShowLetterScreen
  }
};

export default routes;

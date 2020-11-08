import AuthScreen from "../ui/screens/AuthScreen";
import CreateNewGameScreen from "../ui/screens/CreateNewGameScreen";
import GamingScreen from "../ui/screens/GamingScreen";
import GamingStatusScreen from "../ui/screens/GamingStatusScreen";
import ShowLetterScreen from "../ui/screens/ShowLetterScreen";
import names from "./names";

const routes = {
  auth: {
    name: names.auth,
    component: AuthScreen,
  },
  gaming: {
    name: names.gaming,
    component: GamingScreen,
  },
  gamingStatus: {
    name: names.gamingStatus,
    component: GamingStatusScreen,
  },
  showLetter: {
    name: names.showLetter,
    component: ShowLetterScreen,
  },
  createNewGame: {
    name: names.createNewGame,
    component: CreateNewGameScreen,
  },
};

export default routes;

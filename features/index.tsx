import { authReducer } from "./authentication";
import { gamingReducer } from "./gaming";
import { manageThemeReducer } from "./manageTheme";
import { modalsControllerReducer } from "./modalsController";
import { resultStatusGameReducer } from "./resultStatusGame";
import { roomChatReducer } from "./roomChat";

export const rootReducer = {
  manageTheme: manageThemeReducer,
  roomChat: roomChatReducer,
  gaming: gamingReducer,
  auth: authReducer,
  resultStatusGame: resultStatusGameReducer,
  modalsController : modalsControllerReducer
};
export default rootReducer;

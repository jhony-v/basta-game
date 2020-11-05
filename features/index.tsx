import { authReducer } from "./authentication";
import { gamingReducer } from "./gaming";
import { manageThemeReducer } from "./manageTheme";
import { roomChatReducer } from "./roomChat";

export const rootReducer = {
    manageTheme: manageThemeReducer,
    roomChat: roomChatReducer,
    gaming : gamingReducer,
    auth : authReducer
}
export default rootReducer;
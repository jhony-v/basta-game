import { manageThemeReducer } from "./manageTheme";
import { roomChatReducer } from "./roomChat";

export const rootReducer = {
    manageTheme: manageThemeReducer,
    roomChat: roomChatReducer
}
export default rootReducer;
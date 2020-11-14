import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "../../../features/authentication";
import { gamingSelectors } from "../../../features/gaming";
import { roomChatActions } from "../../../features/roomChat";
import { firebaseService } from "../../../services/FirebaseService";

const useDispatchGameMessages = () => {
  const dispatch = useDispatch();
  const { viewNotifications, hideNotifications } = roomChatActions;
  const { username } = useSelector(authSelectors.getUser);
  const gameId = useSelector(gamingSelectors.getGameId);
  
  return {
    viewNotificationNewMessages: () => dispatch(viewNotifications()),

    hideNotification : () => dispatch(hideNotifications()),
    
    sendMessageToChatGame : (message:string) => {
       firebaseService.sendMessageToGame(gameId,{
          username,
          message,
       })
    }
  };
  
};

export default useDispatchGameMessages;

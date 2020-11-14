import { useDispatch } from "react-redux";
import { roomChatActions } from "../../../features/roomChat";

const useDispatchGameMessages = () => {
  const dispatch = useDispatch();
  const { viewNotifications, hideNotifications } = roomChatActions;
  return {
    viewNotificationNewMessages: () => dispatch(viewNotifications()),
    hideNotification : () => dispatch(hideNotifications()),
  };
};

export default useDispatchGameMessages;

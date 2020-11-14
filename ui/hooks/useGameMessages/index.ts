import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamingSelectors } from "../../../features/gaming";
import { roomChatActions } from "../../../features/roomChat";
import { firebaseService } from "../../../services/FirebaseService";
import { RootState } from "../../../store";

const useGameMessages = () => {
  const dispatch = useDispatch();
  const gameId = useSelector(gamingSelectors.getGameId);
  const messages = useSelector((state: RootState) => state.roomChat.messages);

  useEffect(() => {
    const subscriber = firebaseService.getMessagesFromGame(gameId, (data) => {
      dispatch(roomChatActions.fetchMessages({messages:data}));
    });
    return () => subscriber();
  }, []);

  return {
      messages
  };
};

export default useGameMessages;

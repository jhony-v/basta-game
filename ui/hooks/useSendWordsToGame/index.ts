import { useSelector } from "react-redux";
import { authSelectors } from "../../../features/authentication";
import { gamingSelectors } from "../../../features/gaming";
import { firebaseServiceSendWordsToGame } from "../../../services/FirebaseService";

const useSendWordsToGame = () => {
  const { username, fullName } = useSelector(authSelectors.getUser);
  const words = useSelector(gamingSelectors.getWords);
  const id = useSelector(gamingSelectors.getGameId);

  const send = async () => {
    await firebaseServiceSendWordsToGame({
      id,
      user: {
        username,
        fullName,
      },
      words,
    });
  };
  
  return {
    send,
  };

};

export default useSendWordsToGame;

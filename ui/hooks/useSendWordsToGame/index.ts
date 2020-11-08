import { useSelector } from "react-redux";
import { authSelectors } from "../../../features/authentication";
import { gamingSelectors } from "../../../features/gaming";
import { firebaseService } from "../../../services/FirebaseService";
import useNavigate from "../useNavigate";

const useSendWordsToGame = () => {
  const { username, fullName } = useSelector(authSelectors.getUser);
  const words = useSelector(gamingSelectors.getWords);
  const id = useSelector(gamingSelectors.getGameId);
  const { navigate } = useNavigate();  

  const send = async () => {
    await firebaseService.sendWordsToGame({
      id,
      user: {
        username,
        fullName,
      },
      words,
    });
  };

  const sendAndNavigate = () => {
    send().then(()=>navigate("gamingStatus"));
  }
  
  return {
    send,
    sendAndNavigate
  };

};

export default useSendWordsToGame;

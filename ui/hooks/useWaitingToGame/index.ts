import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamingActions, gamingSelectors } from "../../../features/gaming";
import { firebaseService } from "../../../services/FirebaseService";

const useWaitingToGame = () => {
    const { gaming } = useSelector(gamingSelectors.gamingStatus);
    const gameId = useSelector(gamingSelectors.getGameId);
    const dispatch = useDispatch();
    useEffect(() => {
      const subscriber = firebaseService.statusGame(gameId,(request) => {
        dispatch(gamingActions.getStatusGaming(request))
      });
      return () => subscriber() 
    },[])

    return {
      gameId,
      gaming,
    }
  
}

export default useWaitingToGame;
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { gamingSelectors } from '../../../features/gaming';
import { resultStatusGameActions, resultStatusGameSelectors } from '../../../features/resultStatusGame';
import { firebaseService } from '../../../services/FirebaseService';
import { RootState } from '../../../store';

const useGetLettersWithValue = () => {
    const dispach = useDispatch();
    const listUserWords = useSelector(resultStatusGameSelectors.getListUserWords);
    const gameId = useSelector(gamingSelectors.getGameId);
    const loading = useSelector<RootState,boolean>(state => state.resultStatusGame.loading);
    useEffect(() => {
      dispach(resultStatusGameActions.startLoading({}));
      const subscriber = firebaseService.getDataFromGame(gameId,(data) => {
          dispach(resultStatusGameActions.fillData({ data }));
        }
      );
      return () => subscriber();
    },[]);
  
    return {
        listUserWords,
        loading
    }
}

export default useGetLettersWithValue

import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { WordGame } from "../gaming/gaming";

interface ResultStatusGameState {
    listUserWordsGame : WordGame[],
    loading : boolean,
}

const resultStatusGame = createSlice<ResultStatusGameState,SliceCaseReducers<ResultStatusGameState>>({
  name: "resultStatusGame",
  initialState: {
      loading : true,
      listUserWordsGame : []
  },
  reducers: {
      fillData(state,{payload:{data}}) {
        state.listUserWordsGame = data; 
      },
      startLoading(state){
        state.loading = true;
      },
      endLoading(state){
        state.loading = false;
      }
  },
});

export const {
  actions: resultStatusGameActions,
  reducer: resultStatusGameReducer,
} = resultStatusGame;

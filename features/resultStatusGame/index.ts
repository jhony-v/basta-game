import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { WordGame } from "../gaming/gaming";

interface ResultStatusGameState {
    listUserWordsGame : WordGame[]
}

const resultStatusGame = createSlice<ResultStatusGameState,SliceCaseReducers<ResultStatusGameState>>({
  name: "resultStatusGame",
  initialState: {
      listUserWordsGame : []
  },
  reducers: {
      fillData(state,{payload:{data}}) {
        state.listUserWordsGame = data; 
      }
  },
});

export const {
  actions: resultStatusGameActions,
  reducer: resultStatusGameReducer,
} = resultStatusGame;

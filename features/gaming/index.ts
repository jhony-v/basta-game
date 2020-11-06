import { createSelector, createSlice, Dispatch, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { firebaseFirestore } from "../../config/firebase";
import { RootState } from "../../store";
import { GamingState } from "./gaming";

const gamingSlice = createSlice({
  name: "roomChatSlice",
  initialState: {
      letter : "A",
      percentage : 0,
      timerCountDown : 0,
      timerToStart : 0,
      words : [],
      id : "",
      gaming: false
  },
  reducers: {
    calculatePercentage(state) {
        const lenWords = state.words?.length;
        const getWordsNotEmpty = state.words?.filter(word => word.value?.trim() !== "");
        const totalWordsNotEmpty = getWordsNotEmpty?.length;
        const computePercentage = totalWordsNotEmpty / lenWords * 100;
        state.percentage = computePercentage;
    },
    fillData(state,{payload:{ words , letter, id }}) { 
        state.words = words;
        state.letter = letter;
        state.id = id;
    },
    writeWord(state: GamingState,{payload:{key,value}}) {
        state.words = state.words.map(e => {
            if(e.key === key) e.value = value;
            return e; 
        });
    },
    createNewGame(state,{payload:{id}}) {
        state.id = id;
    },
    startGame(state) {
        state.gaming = true;
    },
    endGame(state) {
        state.gaming = false;
    },
    getStatusGaming(state,{payload}: PayloadAction<{status:boolean}>) {
        state.gaming = payload.status;
    }
  },
});

const { actions, reducer } = gamingSlice;
export const gamingReducer = reducer;
export const gamingActions = actions;

export const gamingSelectors = {
 isComplete : createSelector((state:RootState)=> state.gaming,gaming => gaming.percentage !== 100 )   
}



export const fetchStatusGaming = (gameId: string) => (dispatch : Dispatch) => {
}
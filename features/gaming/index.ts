import { createSelector, createSlice, Selector, SliceCaseReducers } from "@reduxjs/toolkit";
import { firebaseFirestore } from "../../config/firebase";
import { RootState } from "../../store";
import { GamingState } from "./gaming";

const gamingSlice = createSlice<GamingState,SliceCaseReducers<GamingState>>({
  name: "roomChatSlice",
  initialState: {
      letter : "A",
      percentage : 0,
      timerCountDown : 0,
      timerToStart : 0,
      words : [],
      id : "",
  },
  reducers: {
    calculatePercentage(state) {
        const lenWords = state.words?.length;
        const getWordsNotEmpty = state.words?.filter(word => word.value?.trim() !== "");
        const totalWordsNotEmpty = getWordsNotEmpty?.length;
        const computePercentage = totalWordsNotEmpty / lenWords * 100;
        state.percentage = computePercentage;
    },
    fillData(state,{payload:{ words , letter }}) { 
        state.words = words;
        state.letter = letter;
        state.id = (Math.random().toString(8)+Date.now()).replace("0.","");
        firebaseFirestore.collection("games").doc(state.id).set({})
    },
    writeWord(state,{payload:{key,value}}) {
        state.words = state.words.map(e => {
            if(e.key === key) e.value = value;
            return e; 
        });
    }
  },
});

const { actions, reducer } = gamingSlice;

export const gamingReducer = reducer;
export const gamingActions = actions;
export const gamingSelectors = {
 isComplete : createSelector((state:RootState)=> state.gaming,gaming => gaming.percentage !== 100 )   
}


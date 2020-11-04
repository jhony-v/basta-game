import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

const gamingSlice = createSlice<GamingState,SliceCaseReducers<GamingState>>({
  name: "roomChatSlice",
  initialState: {
      letter : "A",
      percentage : 0,
      timerCountDown : 0,
      timerToStart : 0,
      words : []
  },
  reducers: {
    calculatePercentage(state,action) {
        const lenWords = state.words?.length;
        const getWordsNotEmpty = state.words?.filter(word => word.value?.trim() !== "");
        const totalWordsNotEmpty = getWordsNotEmpty?.length;
        const computePercentage = totalWordsNotEmpty / lenWords * 100;
        state.percentage = computePercentage;
    },
    fillData(state,{payload:{ words , letter }}) { 
        state.words = words;
        state.letter = letter;
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
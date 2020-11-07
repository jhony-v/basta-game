import { createSelector,createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { GamingState, Word } from "./gaming";

const gamingSlice = createSlice({
  name: "roomChatSlice",
  initialState: {
    letter: "",
    percentage: 0,
    timerCountDown: 0,
    timerToStart: 0,
    words: [],
    id: "",
    gaming: false,
  },
  reducers: {
    fillData(state, { payload: { words } }) {
      state.words = words;
    },
    writeWord(state: GamingState, { payload: { key, value } }) {
      state.words = state.words.map((e) => {
        if (e.key === key) e.value = value;
        return e;
      });
    },
    setNewGameCode(state, { payload: { id } }) {
      state.id = id;
    },
    getStatusGaming(state, { payload }: PayloadAction<{ gaming: boolean,letter:string }>) {
      state.gaming = payload.gaming;
      state.letter = payload.letter;
    },
    reset(state) {
      state.gaming = false;
      state.words = [];
      state.letter = "";
      state.id = "";
    }
  },
});


// actions and reducers
export const { actions : gamingActions, reducer : gamingReducer } = gamingSlice;


// selectors
export const gamingSelectors = {
  isComplete: createSelector(
    (state: RootState) => state.gaming,
    (gaming) => gaming.percentage !== 100
  ),
  getGameId: createSelector(
      (state: RootState) => state.gaming,
      (gaming) => gaming.id
  ),
  getWords : createSelector(
    (state: RootState) => state.gaming,
    (gaming) => gaming.words
  ),
  progressCompleteWordsGaming :  createSelector(
      (state: RootState) => state.gaming,
      (gaming) => {
        const words = gaming.words as Word[];  
        const lenWords = words.length;
        const getWordsNotEmpty = words.filter((word) => word.value?.trim() !== "");
        const totalWordsNotEmpty = getWordsNotEmpty?.length;
        const percentage = (totalWordsNotEmpty / lenWords) * 100;
        return percentage;
      }
  ),
  gamingStatus : createSelector(
    (state: RootState) => state.gaming,
    (gaming) => ({
      gaming : gaming.gaming,
      letter : gaming.letter
    })
  )
};

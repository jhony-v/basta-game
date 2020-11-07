import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type ModalsControllerKey = "createGame";

const modalsControllerSlice = createSlice({
  name: "modalsController",
  initialState: {
    createGame: false,
  },
  reducers: {
    setOpen(state, { payload }: PayloadAction<ModalsControllerKey>) {
      state[payload] = true;
    },
    setClose(state, { payload }: PayloadAction<ModalsControllerKey>) {
      state[payload] = false;
    },
  },
});


// actions and reducer
export const {
  actions: modalsControllerActions,
  reducer: modalsControllerReducer,
} = modalsControllerSlice;


// selectors
export const modalsControllerSelectors = {
  getStateModalByKey: createSelector(
    [
      (state: RootState, key: ModalsControllerKey) => state.modalsController[key],
    ],
    (modals) => modals
  ),
};

import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isAuth: false,
    user: {
      id: "",
      username: "",
      fullName : ""
    },
    loading: true
  },
  reducers: {
    addNewUser(state,{payload}) {
        state.isAuth = true;
        state.user = payload.user;
    },
    setAuthLoading(state){
      state.loading = true;
    },
    setUserField(state,{payload}:PayloadAction<{key:string,value:string}>){
      state.user = {
        ...state.user,
        [payload.key] : payload.value
      }
    },
    endAuthLoading(state){
      state.loading = false;
    },
    getUser(state, { payload }) {
      if (payload.isAuth) {
        state.isAuth = true;
        state.user = payload.user;
      }
    },
  },
});

// actions and reducers
export const { actions : authActions , reducer: authReducer } = authSlice;

export const authSelectors = {
  getUser : createSelector(
    (state: RootState) => state.auth,
    auth => auth.user
  )
}
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isAuth: false,
    user: {
      id: "",
      username: "",
    },
  },
  reducers: {
    addNewUser(state,{payload}) {
        state.isAuth = true;
        state.user = payload.user;
    },
    getUser(state, { payload }) {
      if (payload.isAuth) {
        state.isAuth = true;
        state.user = payload.user;
      }
    },
  },
});

const { actions, reducer } = authSlice;

export const authReducer = reducer;
export const authActions = actions;

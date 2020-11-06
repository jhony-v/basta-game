import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    closeAuthLoading(state){
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

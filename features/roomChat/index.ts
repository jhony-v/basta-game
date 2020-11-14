import { createSlice } from "@reduxjs/toolkit";

const roomChatSlice = createSlice({
  name: "roomChatSlice",
  initialState: {
    totalMessages: -1,
    openNotifications: false,
    messages: [],
    users: [],
  },
  reducers: {
    fetchUsers(state, { payload }) {
      state.messages = payload.messages;
    },
    fetchMessages(state, { payload }) {
      if(!state.openNotifications) state.totalMessages += 1;
      state.messages = payload.messages;
    },
    viewNotifications(state){
      state.openNotifications = true;
    },
    hideNotifications(state){
      state.openNotifications = false;
      state.totalMessages = 0;
    }
  },
});

export const {
  actions: roomChatActions,
  reducer: roomChatReducer,
} = roomChatSlice;

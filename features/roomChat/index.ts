import { createSlice } from "@reduxjs/toolkit";

const roomChatSlice = createSlice({
  name: "roomChatSlice",
  initialState: {
    totalMessages: 0,
    openNotifications: false,
    messages: [],
    users: [],
  },
  reducers: {
    fetchUsers(state, { payload }) {
      state.messages = payload.messages;
    },
    fetchMessages(state, { payload }) {
      if (state.openNotifications) state.totalMessages = 0;
      else state.totalMessages += 1;
      state.users = payload.users;
    },
    viewNotifications(state){
      state.openNotifications = true;
    },
    hideNotifications(state){
      state.openNotifications = false;
    }
  },
});

export const {
  actions: roomChatActions,
  reducer: roomChatReducer,
} = roomChatSlice;

import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { RoomChatState } from "./roomChat";

const roomChatSlice = createSlice({
  name: "roomChatSlice",
  initialState: {
    messages: [],
    users: [],
  },
  reducers: {
    fetchUsers(state, { payload }) {
      state.messages = payload.messages;
    },
    fetchMessages(state, { payload }) {
      state.users = payload.users;
    },
  },
});

export const {
  actions: roomChatActions,
  reducer: roomChatReducer,
} = roomChatSlice;

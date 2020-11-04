import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { RoomChatState } from "./roomChat";

const roomChatSlice = createSlice<RoomChatState,SliceCaseReducers<RoomChatState>>({
  name: "roomChatSlice",
  initialState: {
    messages: [],
    users: [],
  },
  reducers: {
    fetchUsers(state,{payload}){
        state.messages = payload.messages;
    },
    fetchMessages(state,{payload}) {
        state.users = payload.users;
    }
  },
});

const { actions, reducer } = roomChatSlice;

export const roomChatReducer = reducer;
export const roomChatActions = actions;

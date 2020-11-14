import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { RoomChatWrapper } from "./elements";
import HeaderChat from "./HeaderChat";
import ListMessages from "./ListMessages";
import WriteNewMessage from "./WriteNewMessage";

const RoomChat = () => {
  const openNotifications = useSelector<RootState, boolean>( (state) => state.roomChat.openNotifications,shallowEqual);
  if (openNotifications) {
    return(
    <RoomChatWrapper>
        <HeaderChat/>
        <ListMessages/>
        <WriteNewMessage/>
    </RoomChatWrapper>
    );
  }
  return null;
};

export default RoomChat;

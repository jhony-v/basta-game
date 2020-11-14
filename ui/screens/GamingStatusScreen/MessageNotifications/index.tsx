import React from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { RootState } from "../../../../store";
import TotalNotification from "../../../components/atoms/TotalNotification";
import useDispatchGameMessages from "../../../hooks/useDispatchGameMessages";
import { AntDesign } from "@expo/vector-icons"

const FixedWrapper = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 30px;
`;

const MessageNotifications = () => {
  const totalMessages = useSelector<RootState,number>(state=>state.roomChat.totalMessages); 
  const { viewNotificationNewMessages } = useDispatchGameMessages();
  return (
    <FixedWrapper>
      { (totalMessages > 0) ? (
        <TotalNotification onPress={() => viewNotificationNewMessages()}>{totalMessages}</TotalNotification>
      ) : (
        <TouchableOpacity onPress={()=>viewNotificationNewMessages()}>
            <AntDesign name="message1" color="white" size={30} />
        </TouchableOpacity>
      )}
    </FixedWrapper>
  );
};

export default MessageNotifications;

import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import useDispatchGameMessages from "../../../../hooks/useDispatchGameMessages";

const S = {
  Wrapper: styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.02);
  `,
  Input: styled.TextInput`
    width: 100%;
    padding: 10px;
    border-width: 0;
  `,
  TextButtonSend: styled.Text`
    color: ${(props) => props.theme.colors.vgPrimaryAlpha10};
    padding-left: 10px;
    font-weight: bold;
    flex: none;
  `,
};

const WriteNewMessage = () => {
  const [message, setMessage] = useState("");
  const { sendMessageToChatGame } = useDispatchGameMessages();
  const onSendMessage = () => {
    sendMessageToChatGame(message);
  };

  return (
    <S.Wrapper>
      <S.Input onChangeText={setMessage} placeholder="Type a message" />
      <TouchableOpacity onPress={onSendMessage}>
        <S.TextButtonSend>SEND</S.TextButtonSend>
      </TouchableOpacity>
    </S.Wrapper>
  );
};

export default WriteNewMessage;

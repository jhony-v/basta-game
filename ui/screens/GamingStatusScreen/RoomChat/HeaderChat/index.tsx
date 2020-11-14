import React from "react";
import styled from "styled-components/native";
import CloseButton from "../../../../components/atoms/Buttons/CloseButton";
import useDispatchGameMessages from "../../../../hooks/useDispatchGameMessages";

const S = {
  Wrapper: styled.View`
    flex: none;
    flex-direction: row;
    padding: 10px;
  `,
  Title: styled.Text`
    font-weight: bold;
    font-size: 25px;
    margin-right: auto;
  `,
};

const HeaderChat = () => {
  const { hideNotification } = useDispatchGameMessages();
  return (
    <S.Wrapper>
      <S.Title>Messages</S.Title>
      <CloseButton onClose={() => hideNotification()} />
    </S.Wrapper>
  );
};

export default HeaderChat;

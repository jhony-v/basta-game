import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { RootState } from "../../../../../store";

const S = {
  Wrapper: styled.View`
    flex: 1;
  `,
  WrapperMessage: styled.View`
    margin: 20px 5px;
    border-radius:10px;
    padding:6px;
    background-color:${props => props.theme.colors.vgBlackAlpha10};
  `,
  TextMessage: styled.Text`
    color: ${(props) => props.theme.colors.vgBlackAlpha50};
  `,
  TextUsername: styled.Text`
    font-weight: bold;
    margin-bottom: 5px;
  `,
};

const ListMessages = () => {
  const messages = useSelector<RootState, any[]>((state) => state.roomChat.messages);
  return (
    <S.Wrapper>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <S.WrapperMessage>
            <S.TextUsername>{item.username}</S.TextUsername>
            <S.TextMessage>{item.message}</S.TextMessage>
          </S.WrapperMessage>
        )}
      />
    </S.Wrapper>
  );
};

export default ListMessages;

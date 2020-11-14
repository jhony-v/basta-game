import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const StyledWrapper = styled.View`
  background-color: rgb(230, 80, 80);
  border-radius: 1000px;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.vgBlackAlpha00};
`;

type TotalNotificationProps = {
  onPress: () => void;
  children: React.ReactNode;
};
const TotalNotification = (props: TotalNotificationProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <StyledWrapper>
        <StyledText>{props.children}</StyledText>
      </StyledWrapper>
    </TouchableOpacity>
  );
};

export default TotalNotification;

import React, { FC } from "react";
import styled from "styled-components/native";

const WrapperText = styled.Text`
  text-align: center;
  background-color: ${(props) => props.theme.colors.vgSecondaryAlpha10};
  color: ${(props) => props.theme.colors.vgBlackAlpha00};
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 13px;
`;

type MicroButtonProps = {
  onPress?: () => void;
};
const MicroButton: FC<MicroButtonProps> = ({ children, onPress }) => {
  return <WrapperText onPress={onPress}>{children}</WrapperText>;
};

export default MicroButton;

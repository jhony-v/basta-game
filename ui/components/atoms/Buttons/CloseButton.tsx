import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styled, { useTheme } from "styled-components/native";
import { TouchableOpacity } from "react-native";

const WrapperButton = styled.View`
  border-radius: 1000px;
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.theme.colors.vgBlackAlpha60};
  justify-content:center;
  align-items:center;
`;

type CloseButtonProps = {
  onClose: () => void;
};
const CloseButton = ({ onClose }: CloseButtonProps) => {
  const { colors: { vgBlackAlpha50 } } = useTheme();
  return (
    <TouchableOpacity onPress={onClose}>
      <WrapperButton>
        <AntDesign name="close" color={vgBlackAlpha50} size={30} />
      </WrapperButton>
    </TouchableOpacity>
  );
};

export default CloseButton;

import React from "react";
import { Text , TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import BaseLabel from "../Labels/BaseLabel";

type WrapperButtonTypes = {
  variant?: "primary" | "secondary";
};

const setBackgroundTheme = (primary : string,border: string) => {
    return css`
        background-color:${primary};
        border:2px solid ${border};  
    `
}
const WrapperButton = styled.View<WrapperButtonTypes>`
  border-radius: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  box-shadow:0 1px 2px rgba(0,0,0,.2);  
  ${props => props.variant === "primary" && setBackgroundTheme(props.theme.colors.vgThird,props.theme.colors.vgThirdAlpha10)}    
  ${props => props.variant === "secondary" && setBackgroundTheme(props.theme.colors.vgSecondary,props.theme.colors.vgSecondaryAlpha10)}
`;

type BaseButtonProps = WrapperButtonTypes & {
  onPress : () => void
};

const BaseButton: React.FC<BaseButtonProps> = ({ children, variant, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <WrapperButton variant={variant}>
          <BaseLabel weight color="vgBlackAlpha00">{children}</BaseLabel>
      </WrapperButton>
    </TouchableOpacity>
  );
};

BaseButton.defaultProps = {
    variant : "primary"
}

export default BaseButton;

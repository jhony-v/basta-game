import React from "react";
import { Text, View } from "react-native";
import DividerContainer from "../../atoms/Dividers/DividerContainer";
import BaseLabel from "../../atoms/Labels/BaseLabel";
import { HeaderWrapper } from "./elements";

type HeaderUserNavigatorProps = {
  user: {
    fullName: string;
    username: string;
  };
};

const HeaderUserNavigator = (props: HeaderUserNavigatorProps) => {
   const { fullName, username } = props.user;  
   return (
    <HeaderWrapper>
        <DividerContainer>
            <BaseLabel textSize="18px" weight>{fullName}</BaseLabel>
            <BaseLabel color="vgBlackAlpha30" >{username}</BaseLabel>
        </DividerContainer>
        <DividerContainer m="0 0 0 auto">
        </DividerContainer>
    </HeaderWrapper>
  );
};

export default HeaderUserNavigator;

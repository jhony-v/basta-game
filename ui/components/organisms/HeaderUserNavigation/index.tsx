import React from "react";
import DividerContainer from "../../atoms/Dividers/DividerContainer";
import BaseLabel from "../../atoms/Labels/BaseLabel";
import { HeaderWrapper } from "./elements";

type HeaderUserNavigatorProps = {
  user: {
    fullName: string;
    username: string;
  };
  icon ?: React.ReactNode;
};

const HeaderUserNavigator = (props: HeaderUserNavigatorProps) => {
   const { fullName, username } = props.user;  
   return (
    <HeaderWrapper>
        <DividerContainer>
            <BaseLabel textSize="18px" weight color="vgBlackAlpha00">{fullName}</BaseLabel>
            <DividerContainer pv="6px">
              <BaseLabel color="vgBlackAlpha00" >{username}</BaseLabel>
            </DividerContainer>
        </DividerContainer>
        <DividerContainer m="0 0 0 auto">
          {props.icon}
        </DividerContainer>
    </HeaderWrapper>
  );
};

export default HeaderUserNavigator;

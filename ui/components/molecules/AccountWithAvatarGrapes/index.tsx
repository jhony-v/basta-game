import React from "react";
import DividerContainer from "../../atoms/Dividers/DividerContainer";
import DividerContainerHorizontal from "../../atoms/Dividers/DividerContainerHorizontal";
import BaseLabel from "../../atoms/Labels/BaseLabel";
import Avatar from "../../atoms/Pictures/Avatar";
import {
  WrapperCardLabel,
  WrapperGrapes,
  WrapperRoundedAvatar,
} from "./elements";

type AccountWithAvatarGrapesProps = {
  image?: string;
  username?: string;
};
const AccountWithAvatarGrapes = (props: AccountWithAvatarGrapesProps) => {
  return (
      <WrapperGrapes>
        <WrapperRoundedAvatar>
          <Avatar image={props.image} />
        </WrapperRoundedAvatar>
        <WrapperCardLabel>
          <BaseLabel>{props.username}</BaseLabel>
        </WrapperCardLabel>
      </WrapperGrapes>
  );
};

export default AccountWithAvatarGrapes;

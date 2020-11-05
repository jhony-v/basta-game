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
  avatar?: string;
  username?: string;
};
const AccountWithAvatarGrapes = (props: AccountWithAvatarGrapesProps) => {
  return (
      <WrapperGrapes>
        <WrapperRoundedAvatar>
          <Avatar image={props.avatar} />
        </WrapperRoundedAvatar>
        <WrapperCardLabel>
          <BaseLabel weight>{props.username}</BaseLabel>
        </WrapperCardLabel>
      </WrapperGrapes>
  );
};

export default AccountWithAvatarGrapes;

import React from "react";
import BaseLabel from "../../atoms/Labels/BaseLabel";
import {
  WrapperCardLabel,
  WrapperGrapes,
  WrapperRoundedAvatar,
} from "./elements";
import { AntDesign } from "@expo/vector-icons"
import { useTheme } from "styled-components/native";

type AccountWithAvatarGrapesProps = {
  avatar?: string;
  username?: string;
};
const AccountWithAvatarGrapes = (props: AccountWithAvatarGrapesProps) => {
  const { colors : { vgPrimary } } = useTheme();
  return (
      <WrapperGrapes>
        <WrapperRoundedAvatar>
          <AntDesign name="hearto" size={40} color={vgPrimary} />
        </WrapperRoundedAvatar>
        <WrapperCardLabel>
          <BaseLabel weight>{props.username}</BaseLabel>
        </WrapperCardLabel>
      </WrapperGrapes>
  );
};

export default AccountWithAvatarGrapes;

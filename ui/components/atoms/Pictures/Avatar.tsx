import React from "react"
import styled from "styled-components/native";

type ImageAvatarTypes = {
  dimension?: string;
};

const ImageAvatar = styled.Image<ImageAvatarTypes>`
  border-radius: 1000px;
  width: ${(props) => props.dimension || "60px"};
  height: ${(props) => props.dimension || "60px"};
  background-color:${props => props.theme.colors.vgBlackAlpha10};
`;

type AvatarProps = {
  image?: string;
} & ImageAvatarTypes;

const Avatar = ({ image, dimension }: AvatarProps) => {
  return <ImageAvatar dimension={dimension} source={{ uri: image }}  />;
};

export default Avatar;
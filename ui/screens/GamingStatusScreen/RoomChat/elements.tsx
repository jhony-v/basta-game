import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

export const RoomChatWrapper = styled.View`
  position: absolute;
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  z-index: 1000;
  top: 0;
  left: 0;
  height: ${height + Constants.statusBarHeight}px;
  width: ${width}px;
  bottom: 0;
`;

import styled from "styled-components/native";
import Constants from "expo-constants";
import FlexWrapper from "./FlexWrapper";

export default styled(FlexWrapper)`
  flex: 1;
  padding-top: ${Constants.statusBarHeight};
  background-color: ${(props) => props.theme.colors.vgScreen};
`;

import styled from "styled-components/native";
import DividerContainer from "../../atoms/Dividers/DividerContainer";

export const HeaderWrapper = styled(DividerContainer)`
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  padding: 15px;
  align-items:center;
  flex-direction:row;
`;

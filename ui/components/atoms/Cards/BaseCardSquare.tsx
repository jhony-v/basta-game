import styled from "styled-components/native";

type BaseCardSquareTypes = {
  dimension?: string;
};
export default styled.View<BaseCardSquareTypes>`
  border-radius: 12px;
  width: ${(props) => props.dimension || "50px"};
  height: ${(props) => props.dimension || "50px"};
  background-color:${props => props.theme.colors.vgBlackAlpha00};
  flex:none;
  justify-content:center;
  align-items:center;
`;

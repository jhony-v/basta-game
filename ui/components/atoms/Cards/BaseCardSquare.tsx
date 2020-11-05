import styled from "styled-components/native";

type BaseCardSquareTypes = {
  dimension?: string;
};
export default styled.View<BaseCardSquareTypes>`
  border-radius: 15px;
  width: ${(props) => props.dimension || "90px"};
  height: ${(props) => props.dimension || "90px"};
  background-color:${props => props.theme.colors.vgBlackAlpha00};
  flex:none;
  justify-content:center;
  align-items:center;
`;

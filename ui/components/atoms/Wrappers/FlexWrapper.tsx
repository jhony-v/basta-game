import styled, { css } from "styled-components/native";

type FlexWrapperTypes = {
  isCenter?: boolean;
};
export default styled.View<FlexWrapperTypes>`
  flex: 1;
  ${(props) =>
    props.isCenter &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

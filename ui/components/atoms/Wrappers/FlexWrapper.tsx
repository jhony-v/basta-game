import styled, { css } from "styled-components/native";

type FlexWrapperTypes = {
  isCenter?: boolean;
};
export default styled.View<FlexWrapperTypes>`
  flex: 1;
  background-color: ${(props) => props.theme.colors.vgScreen};
  ${(props) =>
    props.isCenter &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

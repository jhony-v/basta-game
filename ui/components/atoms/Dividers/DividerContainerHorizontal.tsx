import styled from "styled-components/native";

type DividerProps = {
    alignCenter ?: boolean;
}
export default styled.View<DividerProps>`
    flex-direction:row;
    align-items:${props => props.alignCenter ? "center" : "flex-start"};
`
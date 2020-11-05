import styled from "styled-components/native";
import { ThemeBase } from "../../../../theme/theme";

type BaseLabelTypes = {
  weight?: boolean;
  color?: ThemeBase.ColorsTypes;
  textSize ?: string;
  textAlign ?: string;
};
const BaseLabel = styled.Text<BaseLabelTypes>`
  font-weight:${(props) => props.weight ? "bold" : "normal"};
  color:${(props) => props.theme.colors[props.color || "vgBlack"]};
  font-size:${props => props.textSize || "1rem"};
  text-align:${props => props.textAlign};
`;

export default BaseLabel;

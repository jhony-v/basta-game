import styled, { css } from "styled-components/native";

type DividerContainerTypes = {
  p?: string;
  pv?: string;
  ph?: string;
  m?: string;
  mv?: string;
  mh?: string;
  h?: string;
  w?: string;
  flexNone?: boolean;
  inlineBlock?: boolean;
  absolute?: {
    left?: string;
    right?: string;
    bottom?: string;
    top?: string;
  };
};

const DividerContainer = styled.View<DividerContainerTypes>`
  padding:${(props) => props.p || "0"};
  margin:${(props) => props.m || "0"};
  width:${(props) => props.w};
  height:${(props) => props.h};
  flex:${(props) => props.flexNone && "none"};
  display:${(props) => props.inlineBlock && "inline-block"};
  ${({ absolute }) =>
    absolute &&
    css`
      position:absolute;
      left:${absolute.left};
      right:${absolute.right};
      top:${absolute.top};
      bottom:${absolute.bottom};
    `}

  ${({ ph }) => ph && css`
  padding-left:${ph};
  padding-right:${ph};
  `}

  ${({ pv }) => pv && css`
  padding-top:${pv};
  padding-bottom:${pv};
  `}

  ${({ mh }) => mh && css`
  margin-left:${mh};
  margin-right:${mh};
  `}

  ${({ mv }) => mv && css`
  margin-top:${mv};
  margin-bottom:${mv};
`}
`;

export default DividerContainer;

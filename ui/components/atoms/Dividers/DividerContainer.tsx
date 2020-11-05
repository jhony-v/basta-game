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
  absolute?: {
    left?: string;
    right?: string;
    bottom?: string;
    top?: string;
  };
};

const DividerContainer = styled.View<DividerContainerTypes>`
  ${props => props.p && css`padding:${props.p};`};
  ${props => props.m && css`margin:${props.m};`};
  /* width:${(props) => props.w}; */
  /* height:${(props) => props.h};  */
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

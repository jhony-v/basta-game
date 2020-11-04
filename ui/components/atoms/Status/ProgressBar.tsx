import React, { memo } from "react";
import styled, { css } from "styled-components/native";

const shared = css`
  height: 12px;
  border-radius: 10px;
`;

const ProgressTraker = styled.View`
  ${shared};
  background-color: ${(props) => props.theme.colors.vgBlackAlpha20};
  width: 100%;
`;

type ProgressThumbTypes = {
  percentage?: number;
};
const ProgressThumb = styled.View<ProgressThumbTypes>`
  ${shared};
  width: ${props => props.percentage || 0}%;
  background-color: ${(props) => props.theme.colors.vgPrimary};
  transition: 0.3s width;
`;

const ProgressBar = ({percentage}:ProgressThumbTypes) => {
  return (
    <ProgressTraker>
      <ProgressThumb percentage={percentage} />
    </ProgressTraker>
  );
};


export default memo(ProgressBar);

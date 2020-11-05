import React from "react";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import BaseLabel from "../../../components/atoms/Labels/BaseLabel";

const Title = () => {
  return (
    <DividerContainer p="20px 0px 120px">
      <BaseLabel weight textSize="2em" color="vgBlackAlpha00">
        Un nombre para conocerte
      </BaseLabel>
    </DividerContainer>
  );
};

export default Title;

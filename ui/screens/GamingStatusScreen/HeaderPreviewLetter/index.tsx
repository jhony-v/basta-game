import React from "react";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import DividerContainerHorizontal from "../../../components/atoms/Dividers/DividerContainerHorizontal";
import BaseLabel from "../../../components/atoms/Labels/BaseLabel";
import LetterCard from "../../../components/molecules/LetterCard";

const HeaderPreviewLetter = () => {
  return (
    <DividerContainer m="10px 30px">
      <DividerContainerHorizontal alignCenter>
        <DividerContainer style={{flex:1}}>
          <BaseLabel color="vgBlackAlpha00" weight textSize="50px">
            Letter
          </BaseLabel>
        </DividerContainer>
        <DividerContainer>
            <LetterCard letter="A" dimension="120px" />
        </DividerContainer>
      </DividerContainerHorizontal>
    </DividerContainer>
  );
};

export default HeaderPreviewLetter;

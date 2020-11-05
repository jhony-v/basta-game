import React from "react";
import { View } from "react-native";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import DividerContainerHorizontal from "../../../components/atoms/Dividers/DividerContainerHorizontal";
import BaseLabel from "../../../components/atoms/Labels/BaseLabel";
import LetterCard from "../../../components/molecules/LetterCard";
import ProgressCompleteFields from "../ProgressCompleteFields";


const HeaderPreviewStatus = () => {
  return (
    <DividerContainer p="20px">
      <DividerContainerHorizontal>
        <DividerContainer>
            <LetterCard letter="A" />
        </DividerContainer>
        <DividerContainer m="0 0 0 10px" style={{flex:2}}>
            <DividerContainer>
                <BaseLabel weight textSize="20px" color="vgBlackAlpha00">Avance</BaseLabel>
                <ProgressCompleteFields/>
            </DividerContainer>
            <BaseLabel textSize="13px" color="vgBlackAlpha00">Queda 5 seconds</BaseLabel>
        </DividerContainer>
      </DividerContainerHorizontal>
    </DividerContainer>
  );
};

export default HeaderPreviewStatus;

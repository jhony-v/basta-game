import React, { memo } from "react";
import { useSelector } from "react-redux";
import { gamingSelectors } from "../../../../features/gaming";
import BaseButton from "../../../components/atoms/Buttons/BaseButton";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import DividerContainerHorizontal from "../../../components/atoms/Dividers/DividerContainerHorizontal";
import LetterCard from "../../../components/molecules/LetterCard";
import useSendWordsToGame from "../../../hooks/useSendWordsToGame";
import TimerGaming from "./TimerGaming";

const HeaderPreviewStatus = () => {
  const { letter } = useSelector(gamingSelectors.gamingStatus);
  const { sendAndNavigate } = useSendWordsToGame();

  const stop = () => {
    sendAndNavigate();
  }

  return (
    <DividerContainer p="20px">
      <DividerContainerHorizontal>
        <DividerContainer>
            <LetterCard letter={letter} dimension="60px" />
            <TimerGaming/>
        </DividerContainer>
        <DividerContainer m="0 0 0 10px" style={{flex:2}}>
          <BaseButton onPress={stop} variant="secondary">Stop</BaseButton>
        </DividerContainer>
      </DividerContainerHorizontal>
    </DividerContainer>
  );
};

export default memo(HeaderPreviewStatus);

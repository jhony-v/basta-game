import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { gamingSelectors } from "../../../../features/gaming";
import routes from "../../../../routes";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import DividerContainerHorizontal from "../../../components/atoms/Dividers/DividerContainerHorizontal";
import BaseLabel from "../../../components/atoms/Labels/BaseLabel";
import LetterCard from "../../../components/molecules/LetterCard";
import useSendWordsToGame from "../../../hooks/useSendWordsToGame";
import useTimerCountDown from "../../../hooks/useTimerCountDown";
import ProgressCompleteFields from "../ProgressCompleteFields";

const HeaderPreviewStatus = () => {
  const { letter } = useSelector(gamingSelectors.gamingStatus);
  const { timer,running } = useTimerCountDown({from:10,autostart:true});
  const { send } = useSendWordsToGame();
  const { navigate } = useNavigation();
  useEffect(() => {
    if(timer === 0) {
      send().then(()=>navigate(routes.gamingStatus.name));
    }
  },[running])

  return (
    <DividerContainer p="20px">
      <DividerContainerHorizontal>
        <DividerContainer>
            <LetterCard letter={letter} />
        </DividerContainer>
        <DividerContainer m="0 0 0 10px" style={{flex:2}}>
            <DividerContainer>
                <BaseLabel weight textSize="20px" color="vgBlackAlpha00">Avance</BaseLabel>
                <ProgressCompleteFields/>
            </DividerContainer>
            <BaseLabel textSize="13px" color="vgBlackAlpha00">Queda {timer} seconds</BaseLabel>
        </DividerContainer>
      </DividerContainerHorizontal>
    </DividerContainer>
  );
};

export default HeaderPreviewStatus;

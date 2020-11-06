import React from "react";
import BaseButton from "../../components/atoms/Buttons/BaseButton";
import DividerContainer from "../../components/atoms/Dividers/DividerContainer";
import BaseLabel from "../../components/atoms/Labels/BaseLabel";
import DrawerWrapper from "../../components/atoms/Wrappers/DrawerWrapper";
import ContinueToGameWithCode from "./ContinueToGameWithCode";
import CreateNewGame from "./CreateNewGame";
const CreateNewGameScreen = () => {
  return (
    <DrawerWrapper isCenter>
      <DividerContainer w="80%">
        <DividerContainer mv="auto">
          <BaseLabel weight textSize="40px" color="vgBlackAlpha00">Listos para comenzar</BaseLabel>
        </DividerContainer>
        <ContinueToGameWithCode />
        <CreateNewGame />
      </DividerContainer>
    </DrawerWrapper>
  );
};

export default CreateNewGameScreen;

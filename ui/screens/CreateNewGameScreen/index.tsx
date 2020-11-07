import React from "react";
import DividerContainer from "../../components/atoms/Dividers/DividerContainer";
import BaseLabel from "../../components/atoms/Labels/BaseLabel";
import DrawerWrapper from "../../components/atoms/Wrappers/DrawerWrapper";
import ContinueToGameWithCode from "./ContinueToGameWithCode";
import CreateNewGame from "./CreateNewGame";
import HeaderAccount from "./HeaderAccount";
import ModalPreviewNewGameCreated from "./ModalPreviewNewGameCreated";

const CreateNewGameScreen = () => {
  return (
    <DrawerWrapper>
      <HeaderAccount/>
      <DrawerWrapper isCenter>
        <DividerContainer w="80%">
          <DividerContainer mv="auto">
            <BaseLabel weight textSize="40px" color="vgBlackAlpha00">Listos para comenzar</BaseLabel>
          </DividerContainer>
          <ContinueToGameWithCode />
          <CreateNewGame />
        </DividerContainer>
      </DrawerWrapper>
      <ModalPreviewNewGameCreated/>
    </DrawerWrapper>
  );
};

export default CreateNewGameScreen;

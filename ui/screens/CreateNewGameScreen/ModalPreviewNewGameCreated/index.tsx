import React from "react";
import { useSelector } from "react-redux";
import { gamingSelectors } from "../../../../features/gaming";
import { modalsControllerSelectors } from "../../../../features/modalsController";
import { RootState } from "../../../../store";
import BaseButton from "../../../components/atoms/Buttons/BaseButton";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import BaseLabel from "../../../components/atoms/Labels/BaseLabel";
import ModalBackdrop from "../../../components/atoms/Modals/ModalBackdrop";
import ModalBody from "../../../components/atoms/Modals/ModalBody";
import useCreateNewGame from "../../../hooks/useCreateNewGame";

const ModalPreviewNewGameCreated = () => {
  const state = useSelector<RootState>(state => modalsControllerSelectors.getStateModalByKey(state,"createGame"));
  const id = useSelector(gamingSelectors.getGameId);
  const { startGame } = useCreateNewGame();

  if (state) {
    return (
      <ModalBackdrop>
        <ModalBody>
            <DividerContainer p="30px 10px">
                <BaseLabel textSize="20px" weight>Código: {id}</BaseLabel>
            </DividerContainer>
            <DividerContainer pv="20px">
                <BaseButton variant="outline" onPress={()=>startGame()}>Compartir</BaseButton>
                <BaseButton onPress={()=>startGame()}>Comenzar</BaseButton>
            </DividerContainer>
        </ModalBody>
      </ModalBackdrop>
    );
  }
  return null;
};

export default ModalPreviewNewGameCreated;

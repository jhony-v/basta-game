import React from "react";
import { Share } from "react-native";
import { useSelector } from "react-redux";
import { gamingSelectors } from "../../../../features/gaming";
import { modalsControllerSelectors } from "../../../../features/modalsController";
import { RootState } from "../../../../store";
import BaseButton from "../../../components/atoms/Buttons/BaseButton";
import CloseButton from "../../../components/atoms/Buttons/CloseButton";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import DividerContainerHorizontal from "../../../components/atoms/Dividers/DividerContainerHorizontal";
import BaseLabel from "../../../components/atoms/Labels/BaseLabel";
import ModalBackdrop from "../../../components/atoms/Modals/ModalBackdrop";
import ModalBody from "../../../components/atoms/Modals/ModalBody";
import useCreateNewGame from "../../../hooks/useCreateNewGame";
import useModalsController from "../../../hooks/useModalsController";

const ModalPreviewNewGameCreated = () => {
  const open = useSelector<RootState>(state => modalsControllerSelectors.getStateModalByKey(state,"createGame"));
  const id = useSelector(gamingSelectors.getGameId);
  const { startGame } = useCreateNewGame();
  const { close } = useModalsController();
  const onShareCodeGame = () => {
    Share.share({
      title : "Código de sala",
      message : id
    })
  }

  if (open) {
    return (
      <ModalBackdrop>
        <ModalBody>
            <DividerContainer p="30px 10px">
              <DividerContainerHorizontal alignCenter>
                  <BaseLabel textSize="20px" weight>Código: {id}</BaseLabel>
                  <DividerContainer m="0 0 0 auto">
                      <CloseButton onClose={()=>close("createGame")} />
                  </DividerContainer>
              </DividerContainerHorizontal>
            </DividerContainer>
            <DividerContainer pv="20px">
                <BaseButton variant="outline" onPress={onShareCodeGame}>Compartir</BaseButton>
                <DividerContainer pv="20px">
                  <BaseButton onPress={()=>startGame()}>Comenzar</BaseButton>
                </DividerContainer>
            </DividerContainer>
        </ModalBody>
      </ModalBackdrop>
    );
  }
  return null;
};

export default ModalPreviewNewGameCreated;

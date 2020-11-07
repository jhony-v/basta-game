import React from "react";
import {  useSelector } from "react-redux";
import { gamingSelectors } from "../../../../features/gaming";
import BaseButton from "../../../components/atoms/Buttons/BaseButton";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import useCreateNewGame from "../../../hooks/useCreateNewGame";

const CreateNewGame = () => {
  const {  createNewGame, startGame } = useCreateNewGame()
  const id = useSelector(gamingSelectors.getGameId);
  const onOpenModal = () => {
    createNewGame()  
  };
  return (
    <DividerContainer m="90px auto 20px">
      <BaseButton onPress={onOpenModal} variant="secondary">
        Crear juego
      </BaseButton>
      {id !== "" && (
        <DividerContainer pv="20px">
        <BaseButton onPress={() => {
          startGame();
        }} variant="secondary">Comenzar</BaseButton>
        </DividerContainer>
      )}
    </DividerContainer>
  );
};

export default CreateNewGame;

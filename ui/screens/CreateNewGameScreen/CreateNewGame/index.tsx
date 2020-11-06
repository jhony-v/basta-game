import React from "react";
import { Alert, Share } from "react-native";
import {  useSelector } from "react-redux";
import { RootState } from "../../../../store";
import BaseButton from "../../../components/atoms/Buttons/BaseButton";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import useCreateNewGame from "../../../hooks/useCreateNewGame";

const CreateNewGame = () => {
  const {  createNewGame } = useCreateNewGame()
  const id = useSelector<RootState, string>((state) => state.gaming.id);
  const onOpenModal = () => {
    createNewGame()  
    Alert.alert(
      "Nuevo juego creado",
      "Compartir codigo del juego con tus amigos",
      [
        {
          text: "Compartir",
          onPress: () => {
            Share.share({
              title: "Compartir en",
              message: id,
            });
          },
        },
      ]
    );
  };
  return (
    <DividerContainer m="90px auto 20px">
      <BaseButton onPress={onOpenModal} variant="secondary">
        Crear juego
      </BaseButton>
    </DividerContainer>
  );
};

export default CreateNewGame;

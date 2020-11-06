import React from "react";
import ScreenLoading from "../../components/organisms/ScreenLoading";
import useWaitingToGame from "../../hooks/useWaitingToGame";
import CountDownToStart from "./CountDownToStart";

const ShowLetterScreen = () => {
  const { gaming } = useWaitingToGame();

  if(gaming) {
    return <CountDownToStart/>
  }
  return <ScreenLoading  message="Estamos esperando a que el creador inicie el juego..." />
};

export default ShowLetterScreen;

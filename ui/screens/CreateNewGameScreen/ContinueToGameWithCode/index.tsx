import { useNavigation } from "@react-navigation/native";
import React, {  useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { gamingActions } from "../../../../features/gaming";
import routes from "../../../../routes";
import BaseButton from "../../../components/atoms/Buttons/BaseButton";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import EditText from "../../../components/atoms/Inputs/EditText";

const ContinueToGameWithCode = () => {
  const [ code , setCode ] = useState<string>("");
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const onSetGameCode =() => {
    dispatch(gamingActions.setNewGameCode({
      id : code
    }))
    navigate(routes.showLetter.name);
  }
  return (
    <>
      <DividerContainer mv="60px">
        <EditText
          onKeyUp={(e) => setCode(e.value)}
          name="code"
          suptitle="Write a code"
          placeholder="Nuevo codigo de juego..."
        />
      </DividerContainer>
      <BaseButton onPress={onSetGameCode}>
        Ingresa el codigo para unirse
      </BaseButton>
    </>
  );
};

export default ContinueToGameWithCode;

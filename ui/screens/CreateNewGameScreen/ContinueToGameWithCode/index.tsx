import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { gamingActions } from "../../../../features/gaming";
import BaseButton from "../../../components/atoms/Buttons/BaseButton";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import EditText from "../../../components/atoms/Inputs/EditText";
import useNavigate from "../../../hooks/useNavigate";

const ContinueToGameWithCode = () => {
  const [ code , setCode ] = useState<string>("");
  const dispatch = useDispatch();
  const { navigate } = useNavigate();
  const onSetGameCode =() => {
    dispatch(gamingActions.setNewGameCode({
      id : code
    }))
    navigate("showLetter");
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

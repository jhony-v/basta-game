import React from "react";
import BaseButton from "../../../components/atoms/Buttons/BaseButton";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import EditText from "../../../components/atoms/Inputs/EditText";

const ContinueToGameWithCode = () => {
  return (
    <>
      <DividerContainer mv="60px">
        <EditText
          suptitle="Write a code"
          name="code"
          placeholder="Nuevo codigo de juego..."
        />
      </DividerContainer>
      <BaseButton onPress={() => null}>
        Ingresa el codigo para unirse
      </BaseButton>
    </>
  );
};

export default ContinueToGameWithCode;

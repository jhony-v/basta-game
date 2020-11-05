import React from "react";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import EditText from "../../../components/atoms/Inputs/EditText";

const FormAuthInputs = () => {
  return (
    <DividerContainer>
      <DividerContainer pv="10px">
        <EditText
          name="username"
          placeholder="Hola, cual es tu nombre de usuario?"
        />
      </DividerContainer>
      <DividerContainer pv="10px">
        <EditText
          name="password"
          placeholder="Registra tu contraseña"
        />
      </DividerContainer>
    </DividerContainer>
  );
};

export default FormAuthInputs;

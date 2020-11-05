import React from "react";
import BaseButton from "../../../components/atoms/Buttons/BaseButton";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import BaseLabel from "../../../components/atoms/Labels/BaseLabel";

const FormAuthButtons = () => {
  return (
    <DividerContainer p="20px">
      <DividerContainer>
        <BaseLabel
          weight
          color="vgBlackAlpha00"
          textSize=".8rem"
          textAlign="center"
        >
          Solo una vez
        </BaseLabel>
      </DividerContainer>
      <DividerContainer pv="10px">
        <BaseButton>INICIAR</BaseButton>
      </DividerContainer>
      <DividerContainer pv="10px">
        <BaseButton variant="secondary">SALIR</BaseButton>
      </DividerContainer>
    </DividerContainer>
  );
};

export default FormAuthButtons;

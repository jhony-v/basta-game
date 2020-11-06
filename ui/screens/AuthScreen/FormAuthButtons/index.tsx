import React from "react";
import { BackHandler } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import BaseButton from "../../../components/atoms/Buttons/BaseButton";
import DividerContainer from "../../../components/atoms/Dividers/DividerContainer";
import BaseLabel from "../../../components/atoms/Labels/BaseLabel";
import usePersistStorageAuth, { AuthPersist } from "../../../hooks/usePersistStorageAuth";

const FormAuthButtons = () => {
  const { setPersist  } = usePersistStorageAuth();
  const { user: { username, fullName } } = useSelector<RootState,AuthPersist>(state => state.auth);
  return (
    <DividerContainer p="20px">
      <DividerContainer>
        <BaseLabel
          weight
          color="vgBlackAlpha00"
          textSize="12px"
          textAlign="center"
        >
          Solo una vez
        </BaseLabel>
      </DividerContainer>
      <DividerContainer pv="10px">
        <BaseButton onPress={()=>{
          setPersist({
            isAuth:true,
            user: {
              username,
              fullName
            }
          })
        }}>INICIAR</BaseButton>
      </DividerContainer>
      <DividerContainer pv="10px">
        <BaseButton onPress={()=>{
          BackHandler.exitApp()
        }} variant="secondary">SALIR</BaseButton>
      </DividerContainer>
    </DividerContainer>
  );
};

export default FormAuthButtons;

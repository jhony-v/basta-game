import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import DividerContainer from "../../atoms/Dividers/DividerContainer";
import BaseLabel from "../../atoms/Labels/BaseLabel";
import DrawerWrapper from "../../atoms/Wrappers/DrawerWrapper";

const ScreenLoading : React.FC<{message?:string}> = ({message}) => {
  const {
    colors: { vgBlackAlpha00 },
  } = useTheme();
  return (
    <DrawerWrapper isCenter>
      <ActivityIndicator color={vgBlackAlpha00} size="large" />
      <DividerContainer p="20px 50px">
          <BaseLabel color="vgBlackAlpha00" weight textSize="30px">{message}</BaseLabel>
      </DividerContainer>
    </DrawerWrapper>
  );
};

ScreenLoading.defaultProps = {
  message : "Cargando..."
}

export default ScreenLoading;

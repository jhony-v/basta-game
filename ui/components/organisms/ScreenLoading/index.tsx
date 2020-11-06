import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import DividerContainer from "../../atoms/Dividers/DividerContainer";
import BaseLabel from "../../atoms/Labels/BaseLabel";
import DrawerWrapper from "../../atoms/Wrappers/DrawerWrapper";

const ScreenLoading = () => {
  const {
    colors: { vgBlackAlpha00 },
  } = useTheme();
  return (
    <DrawerWrapper isCenter>
      <ActivityIndicator color={vgBlackAlpha00} size="large" />
      <DividerContainer pv="20px">
          <BaseLabel color="vgBlackAlpha00" weight textSize="30px">Cargando...</BaseLabel>
      </DividerContainer>
    </DrawerWrapper>
  );
};

export default ScreenLoading;
